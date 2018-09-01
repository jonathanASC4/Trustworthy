'use strict';

const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const admin = require('firebase-admin');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
const gmailEmail = 'pandpcooperunion'
const gmailPassword = 'pandprocks'
const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
});

// Your company name to include in the emails
// TODO: Change this to your app or company name to customize the email sent.
const APP_NAME = 'Hire.me';

// [START sendWelcomeEmail]
/**
 * Sends a welcome email to new user.
 */
// [START onCreateTrigger]
exports.sendWelcomeEmail = functions.auth.user().onCreate((user) => {
// [END onCreateTrigger]
  // [START eventAttributes]
  const email = user.email; // The email of the user.
  const displayName = user.displayName; // The display name of the user.
  // [END eventAttributes]

  return sendWelcomeEmail(email, displayName);
});
// [END sendWelcomeEmail]

// [START sendByeEmail]
/**
 * Send an account deleted email confirmation to users who delete their accounts.
 */
// [START onDeleteTrigger]
exports.sendByeEmail = functions.auth.user().onDelete((user) => {
// [END onDeleteTrigger]
  const email = user.email;
  const displayName = user.displayName;

  return sendGoodbyeEmail(email, displayName);
});

exports.sendFormSubmissionConfirmationForCounselorsTest = functions.database.ref(`/users/{pushID}`).onWrite((change, context) => {
  const oldSnap =  change.before;
  const snapshot = change.after;
  const newSnap = snapshot.val();
  console.log(oldSnap);
  console.log(newSnap);
  const userName = newSnap.name;

  const mailOptions = {
    from: `${APP_NAME} <noreply@firebase.com>`,
    to: newSnap.email,
  };

  if (oldSnap.expertise === newSnap.expertise)
  {
    mailOptions.subject = 'You Dumb Prick.';
    mailOptions.text = `Hi ${userName}!
    Nothing was changed. You dumb prick.

    Team Hire.me`;

    return mailTransport.sendMail(mailOptions)
      .then(() => console.log(`New form submission confirmation email sent to:`,
          newSnap.email))
      .catch((error) => console.error('There was an error while sending the email:', error));
  }
  else {

    mailOptions.subject = 'Thanks and Welcome!';
    mailOptions.text = `Hi ${userName}!
    Thank you for submitting your form! The information will be processed and used to match you to your student.

    With that said, we look forward to working with you and thank you for committing to coaching the next generation of African American leaders in the workforce!

    Team Hire.me`;

    return mailTransport.sendMail(mailOptions)
      .then(() => console.log(`New form submission confirmation email sent to:`,
          newSnap.email))
      .catch((error) => console.error('There was an error while sending the email:', error));
  }
});
// [END sendByeEmail]
exports.sendFormSubmissionConfirmationForStudentsTest = functions.database.ref(`/users/{pushID}/preferences`).onWrite((change, context) => {
  const snapshot = change.after;
  const parentRef = snapshot.ref.parent;
  const val = snapshot.val();
  console.log(val);
  const userName = parentRef.name;

  const mailOptions = {
    from: `${APP_NAME} <noreply@firebase.com>`,
    to: parentRef.email,
  };

  // Building Email message.
  mailOptions.subject = 'Thanks and Welcome!';
  mailOptions.text = `Hi ${userName}!
  Thank you for submitting your form! The information will be processed and used to match you to your counselor.
  In preparation for the upcoming interview, we have put together a list of things that you should do:
    1. Develop a question list based around the counselor's specialities.
      When interviewers ask if you have any questions, ASK questions! This tells your interviewer that you are interested in the position. If you don't ask a question, you are not displaying your passion for working in the position you are applying for.
    2. Prepare responses to possible questions that may be asked.
      Although you want to sound natural when speaking to your interviewer, you should jot down some bullet points beforehand of key phrases or topics you want to talk about.
    3. Be attentive (good posture, some nonverbal communication, and manage your reactions).
      Exhibit good posture by sitting up straight and maintaining eye contact with your interviewer when you speak. It is also essential to show active listening by nodding your head when appropriate and rephrasing the question in your answer.
    4. Keep a notepad and pen at your side.
      You should take note of interesting ideas, suggestions, or phrases that the interviewer puts out there.
    5. Remember your times that you input into the interview - arrive on time!

  Remember that your talk with the counselor is not an ACTUAL interview - it is simply for the purpose of preparing you for a real life situation. However, it is good to maintain and build professionalism when applying for a job, writing an email to a coworker, or being in an environment where it seems appropriate to maintain the right attitude.

  Good luck!

  Team Hire.me`;

  return mailTransport.sendMail(mailOptions)
    .then(() => console.log(`New form submission confirmation email sent to:`,
        parentRef.email))
    .catch((error) => console.error('There was an error while sending the email:', error));
});
// Sends a welcome email to the given user.
function sendWelcomeEmail(email, displayName) {
  const mailOptions = {
    from: `${APP_NAME} <noreply@firebase.com>`,
    to: email,
  };

  // The user subscribed to the newsletter.
  mailOptions.subject = `Welcome to ${APP_NAME}!`;
  mailOptions.text = `Hey! Welcome to ${APP_NAME}. I hope you will enjoy our service.`;
  return mailTransport.sendMail(mailOptions).then(() => {
    return console.log('New welcome email sent to:', email);
  });
}

// Sends a goodbye email to the given user.
function sendGoodbyeEmail(email, displayName) {
  const mailOptions = {
    from: `${APP_NAME} <noreply@firebase.com>`,
    to: email,
  };

  // The user unsubscribed to the newsletter.
  mailOptions.subject = `Bye!`;
  mailOptions.text = `Hey!, We confirm that we have deleted your ${APP_NAME} account.`;
  return mailTransport.sendMail(mailOptions).then(() => {
    return console.log('Account deletion confirmation email sent to:', email);
  });
}

function sendFormEmail(email) {
  const mailOptions = {
    from: `${APP_NAME} <noreply@firebase.com>`,
    to: email,
  };

  // The user subscribed to the newsletter.
  mailOptions.subject = `Thank you for submitting the form`;
  mailOptions.text = `testing`;
  return mailTransport.sendMail(mailOptions).then(() => {
    return console.log('New welcome email sent to:', email);
  });
}
//Will export when I figure out when I'm doing
//function sendFormSubmittedEmail (email, displayName) {
//  const mailOptions = {
//    from: `${APP_NAME} <noreply@firebase.com>`,
//    to: email,
//  };

//  mailOptions.subject = `Form Submitted! Your Next Steps`;
//  mailOptions.text= `Hey ${displayName || ''}!, We confirm that we have received your form information!
//  A counselor will be in touch within three business days to setup your mock interview!`;
//  return mailTransport.sendMail(mailOptions).then(() => {
//    return console.log('Form submition confirmation email sent to:', email);
//  });
//}
