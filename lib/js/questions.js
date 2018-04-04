//messages post-quiz
var messages = ["To get none right, you must have a political strong bias. Listen less to politicians and more to the news.",
"To get so few correct, you must have a political strong bias. Listen less to politicians and more to the news.",
"To get so few correct, you must have a political strong bias. Listen less to politicians and more to the news.",
"You're not totally oblivious to current events, but you have a lot of room to grow. Visit your news sources more often.",
"You're not oblivious to current events, but you still have some room to grow. Visit your news sources more often.",
"You're somewhat well informed, but your knowledge is far from perfect.",
"",
"",
"",
"",
"You're very well informed- or maybe you just got lucky. Care to try again and find out?"
]

//get 10 statements from data
function take10(array, source){
    for(i=0; i<10; i++){
        array.push(source.splice(Math.floor(Math.random()*source.length), 1)[0]);
    }
}

function display(polObj, i){
    var name = polObj.speaker.first_name + " " + polObj.speaker.last_name;
    var statement = polObj.statement;
    rulings.push(polObj.ruling.ruling);

    var big = $("<div />");
    big.addClass("claim");
    big.attr("id", "number"+i);

    $("body").append(big);
    var h1 = $("<h1 />");
    h1.text((i+1) + ": " + name + ", on " + polObj.statement_date);
    big.append(h1);
    big.append(statement);
    //big.css("margin-bottom", "60px");

    var buttons = $("<div />");
    buttons.addClass("select");
    big.append(buttons);

    $("body").append("<hr>");

    var _true = $("<button />");
    _true.text("True");
    var _false = $("<button />");
    _false.text("False");
    buttons.append(_true);
    buttons.append(_false);

    _true.click(function(){
        polObj["choice"] = true;
        polObj["answer"] = polObj.choice == (polObj.ruling.ruling == "True" || polObj.ruling.ruling == "Mostly True" || polObj.ruling.ruling == "Half-True");
        // switch(polObj.ruling.ruling){
        //     case 
        // }
        _true.css({"background-color": "#999999", "color": "black"});
        _false.css({"background-color": "#000000", "color": "white"});
        //reveal(statements);
    })
    _false.click(function(){
        polObj["choice"] = false;
        polObj["answer"] = polObj.choice == (polObj.ruling.ruling == "True" || polObj.ruling.ruling == "Mostly True" || polObj.ruling.ruling == "Half-True");
        _false.css({"background-color": "#999999", "color": "black"});
        _true.css({"background-color": "#000000", "color": "white"});
        //reveal(statements);
    })
}

var statements = [];
var rulings = [];
function getQ(party){
    var superarray = [];
    if (party == "D"){
        take10(superarray, obama);
        take10(superarray, hillary);
        take10(superarray, bernie);
            // obamaArray.push(obama.splice(Math.floor(Math.random()*obama.length), 1)[0]);
            // hillaryArray.push(hillary.splice(Math.floor(Math.random()*hillary.length), 1)[0]);
            // bernieArray.push(bernie.splice(Math.floor(Math.random()*bernie.length), 1)[0]);
        //superarray = obamaArray.concat(hillaryArray, bernieArray);
    }
    if (party == "R"){
        take10(superarray, trump);
        take10(superarray, pence);
        take10(superarray, rubio);
            // trumpArray.push(trump.splice(Math.floor(Math.random()*trump.length), 1)[0]);
            // penceArray.push(pence.splice(Math.floor(Math.random()*pence.length), 1)[0]);
            // rubioArray.push(rubio.splice(Math.floor(Math.random()*rubio.length), 1)[0]);
        //superarray = trumpArray.concat(penceArray, rubioArray);
    }
    take10(statements, superarray);
    // for(i=0; i<superarray.length; i++){
    //     if(superarray[i].ruling.ruling == "True" || superarray[i].ruling.ruling == "Mostly True" || superarray[i].ruling.ruling == "Half-True"){
    //         superarray[i]["real"] == true;
    //     } else {
    //         superarray[i]["real"] == false;
    //     }
    // }

    // for (i=0; i<10; i++){
    //     statements.push(superarray.splice(Math.floor(Math.random()*superarray.length), 1)[0]);
    // }
    $(".start").remove();
    console.log(statements);
    for (var i=0; i<statements.length; i++){
        display(statements[i], i);
    }
    var submit = $("<button />");
    submit.text("Submit quiz");

    var finish = $("<div />");
    finish.addClass("theEnd");
    submit.click(function(){
        $(".select").hide();
        var a = 10;
        for(var i=0; i<statements.length; i++){
            $("#number"+i).append("<h2>" + statements[i].ruling.ruling + "</h2>");
            if(!statements[i].answer){
                $("#number"+i).css("border", "5px solid red");
                $("#number"+i).append("<p><a href ='http://www.politifact.com" + statements[i].statement_url + "' target='_blank'>" + statements[i].ruling_link_text + "</a></p>");
                a--;
            }
        }
        $("header").append("<h1> You got " + a + "/10 questions correct");
    })
    $("body").append(finish);
    finish.append(submit);
    finish.css({"margin-bottom": "50px", "text-align": "center"});
    submit.css({"padding": "20px", "font-size": "30px"});
    return statements;
}

//returns true if every statement has a key called "choice"
//when true or false is clicked, it hides the buttons div
function check(statements){
    return statements.every(function(item){
        return (item.choice !== undefined);
    })
}

// function reveal(statements){
//     if(check(statements)){
//         $(".select").hide();
//         var a = 10;
//         for(var i=0; i<statements.length; i++){
//             $("#number"+i).append("<h2>" + statements[i].ruling.ruling + "</h2>");
//             if(!statements[i].answer){
//                 $("#number"+i).css("border", "5px solid red");
//                 $("#number"+i).append("<p><a href ='http://www.politifact.com" + statements[i].statement_url + "' target='_blank'>" + statements[i].ruling_link_text + "</a></p>");
//                 a--;
//             }
//         }
//         $("header").append("<h1> You got " + a + "/10 questions correct");
//     }
// }