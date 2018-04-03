function speakerCheck(item, speaker_slug){
    if(item.speaker.name_slug==speaker_slug){
        return true;
    }
    return false;
}

//DEMS:
var bernie=[
    {
        "statement_date": "2017-12-10",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Bernie Sanders wrongly says Donald Trump never apologized for Access Hollywood tape",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-false.png",
            "ruling_slug": "false",
            "ruling": "False"
        },
        "subject": [
            {
                "subject": "Candidate Biography",
                "subject_slug": "candidates-biography"
            }
        ],
        "ruling_link_text": "Apology is on tape, too",
        "speaker": {
            "last_name": "Sanders",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Bernie_Sanders.jpg",
            "name_slug": "bernie-s",
            "first_name": "Bernie",
            "party": {
                "party": "Independent",
                "party_slug": "independent"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2017/dec/14/bernie-s/bernie-sanders-wrongly-says-donald-trump-never-apo/",
        "statement_context": "an interview on 'Meet the Press'",
        "ruling_date": "2017-12-14T09:57:54",
        "statement": "<p>Says Donald Trump &quot;has not apologized&quot; for comments caught on tape by &quot;Access Hollywood.&quot;</p>\r\n"
    },
    {
        "statement_date": "2017-09-17",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Comparing administrative costs for private insurance and Medicare",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-halftrue.png",
            "ruling_slug": "half-true",
            "ruling": "Half-True"
        },
        "subject": [
            {
                "subject": "Government Efficiency",
                "subject_slug": "government-efficiency"
            },
            {
                "subject": "Health Care",
                "subject_slug": "health-care"
            },
            {
                "subject": "Medicare",
                "subject_slug": "medicare"
            }
        ],
        "ruling_link_text": "Leaves out context",
        "speaker": {
            "last_name": "Sanders",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Bernie_Sanders.jpg",
            "name_slug": "bernie-s",
            "first_name": "Bernie",
            "party": {
                "party": "Independent",
                "party_slug": "independent"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2017/sep/20/bernie-s/comparing-administrative-costs-private-insurance-a/",
        "statement_context": "an interview",
        "ruling_date": "2017-09-20T16:13:33",
        "statement": "<p>&quot;Private insurance companies in this country spend between 12 and 18 percent on administration costs. The cost of administering the Medicare program, a very popular program that works well for our seniors, is 2 percent. We can save approximately $500 billion a year just in administration costs.&quot;</p>\r\n"
    },
    {
        "statement_date": "2017-06-25",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Bernie Sanders' projection of 'thousands' of deaths from lost health coverage is well-supported",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlytrue.png",
            "ruling_slug": "mostly-true",
            "ruling": "Mostly True"
        },
        "subject": [
            {
                "subject": "Health Care",
                "subject_slug": "health-care"
            }
        ],
        "ruling_link_text": "Cautious estimate, given past studies",
        "speaker": {
            "last_name": "Sanders",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Bernie_Sanders.jpg",
            "name_slug": "bernie-s",
            "first_name": "Bernie",
            "party": {
                "party": "Independent",
                "party_slug": "independent"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2017/jun/27/bernie-s/bernie-sanders-projection-thousands-added-deaths-g/",
        "statement_context": "an interview on \"Meet the Press\"",
        "ruling_date": "2017-06-27T12:17:30",
        "statement": "<p>&quot;When you throw 23 million people off of health insurance -- people with cancer, people with heart disease, people with diabetes -- thousands of people will die. &hellip; This is study after study making this point.&quot;</p>\r\n"
    },
    {
        "statement_date": "2017-06-13",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Bernie Sanders tweet exaggerates lack of input in Senate health care bill",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-halftrue.png",
            "ruling_slug": "half-true",
            "ruling": "Half-True"
        },
        "subject": [
            {
                "subject": "Congressional Rules",
                "subject_slug": "congressional-rules"
            },
            {
                "subject": "Health Care",
                "subject_slug": "health-care"
            }
        ],
        "ruling_link_text": "Zeros in chart are premature",
        "speaker": {
            "last_name": "Sanders",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Bernie_Sanders.jpg",
            "name_slug": "bernie-s",
            "first_name": "Bernie",
            "party": {
                "party": "Independent",
                "party_slug": "independent"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2017/jun/14/bernie-s/bernie-sanders-tweet-exaggerates-lack-input-senate/",
        "statement_context": "a tweet",
        "ruling_date": "2017-06-14T17:33:52",
        "statement": "<p>Says Senate deliberations on the Affordable Care Act in 2009 and 2010 included hundreds of hours of debate and more than 100 Republican amendments, compared with&nbsp;zero for the American Health Care Act this year.</p>\r\n"
    },
    {
        "statement_date": "2017-05-25",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Bernie Sanders inflates Trump tax plan benefits to billionaires",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlyfalse.png",
            "ruling_slug": "barely-true",
            "ruling": "Mostly False"
        },
        "subject": [
            {
                "subject": "Taxes",
                "subject_slug": "taxes"
            }
        ],
        "ruling_link_text": "Shaky numbers",
        "speaker": {
            "last_name": "Sanders",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Bernie_Sanders.jpg",
            "name_slug": "bernie-s",
            "first_name": "Bernie",
            "party": {
                "party": "Independent",
                "party_slug": "independent"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2017/may/31/bernie-s/bernie-sanders-inflates-trump-tax-plan-benefits-bi/",
        "statement_context": "a tweet",
        "ruling_date": "2017-05-31T17:49:19",
        "statement": "<p>Says President Donald &quot;Trump&rsquo;s budget gives a $100 billion tax break to three of the wealthiest families.&quot;</p>\r\n"
    },
    {
        "statement_date": "2017-04-16",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Bernie Sanders wrong that voter turnout hit 20-year low in 2016",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-false.png",
            "ruling_slug": "false",
            "ruling": "False"
        },
        "subject": [
            {
                "subject": "Elections",
                "subject_slug": "elections"
            }
        ],
        "ruling_link_text": "2016 was higher than 2012, 2000, 1996...",
        "speaker": {
            "last_name": "Sanders",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Bernie_Sanders.jpg",
            "name_slug": "bernie-s",
            "first_name": "Bernie",
            "party": {
                "party": "Independent",
                "party_slug": "independent"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2017/apr/18/bernie-s/bernie-sanders-wrong-voter-turnout-hit-20-year-low/",
        "statement_context": "an interview with CNN's \"State of the Union\"",
        "ruling_date": "2017-04-18T14:40:39",
        "statement": "<p>&quot;When Trump won, we had the lowest voter turnout in 20 years.&quot;</p>\r\n"
    },
    {
        "statement_date": "2017-03-08",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Sanders: GOP health care plan gives wealthiest a $275 billion tax break",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlytrue.png",
            "ruling_slug": "mostly-true",
            "ruling": "Mostly True"
        },
        "subject": [
            {
                "subject": "Health Care",
                "subject_slug": "health-care"
            },
            {
                "subject": "Taxes",
                "subject_slug": "taxes"
            }
        ],
        "ruling_link_text": "Makes those wallets healthier",
        "speaker": {
            "last_name": "Sanders",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Bernie_Sanders.jpg",
            "name_slug": "bernie-s",
            "first_name": "Bernie",
            "party": {
                "party": "Independent",
                "party_slug": "independent"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2017/mar/09/bernie-s/sanders-gop-health-care-plan-gives-wealthiest-275-/",
        "statement_context": "an interview on MSNBC's \"All In With Chis Hayes\"",
        "ruling_date": "2017-03-09T15:48:02",
        "statement": "<p>The GOP health care plan gives &quot;$275 billion in tax breaks for the top 2 percent, people earning $250,000 a year or more.&quot;</p>\r\n\r\n<div>&nbsp;</div>\r\n"
    },
    {
        "statement_date": "2017-02-13",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "West Virginia uninsured rate has declined, though not as fast as Bernie Sanders said",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlytrue.png",
            "ruling_slug": "mostly-true",
            "ruling": "Mostly True"
        },
        "subject": [
            {
                "subject": "Health Care",
                "subject_slug": "health-care"
            }
        ],
        "ruling_link_text": "It fell, though not by quite as much",
        "speaker": {
            "last_name": "Sanders",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Bernie_Sanders.jpg",
            "name_slug": "bernie-s",
            "first_name": "Bernie",
            "party": {
                "party": "Independent",
                "party_slug": "independent"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2017/feb/14/bernie-s/wva-uninsured-rate-has-declined-not-fast-bernie-sa/",
        "statement_context": "an interview with MSNBC's Chris Hayes",
        "ruling_date": "2017-02-14T17:05:28",
        "statement": "<p>&quot;Before the Affordable Care Act, (West Virginia&rsquo;s) uninsured rate for people 64 to 19 was 29 percent. Today, it is 9 percent.&quot;</p>\r\n"
    },
    {
        "statement_date": "2017-02-05",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Sanders said Obama's SCOTUS nominees 'required' 60 votes, but it's more complicated",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-halftrue.png",
            "ruling_slug": "half-true",
            "ruling": "Half-True"
        },
        "subject": [
            {
                "subject": "Congress",
                "subject_slug": "congress"
            },
            {
                "subject": "Congressional Rules",
                "subject_slug": "congressional-rules"
            },
            {
                "subject": "Supreme Court",
                "subject_slug": "supreme-court"
            }
        ],
        "ruling_link_text": "Clearing hurdles required 60 votes, final vote didn't",
        "speaker": {
            "last_name": "Sanders",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Bernie_Sanders.jpg",
            "name_slug": "bernie-s",
            "first_name": "Bernie",
            "party": {
                "party": "Independent",
                "party_slug": "independent"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2017/feb/09/bernie-s/sanders-said-obamas-scotus-nominees-required-60-vo/",
        "statement_context": "an interview on CNN",
        "ruling_date": "2017-02-09T17:44:18",
        "statement": "<p>Says former President Barack Obama&rsquo;s Supreme Court nominations &quot;required 60 votes.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-07-25",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Bernie Sanders' outdated income inequality statistic",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-halftrue.png",
            "ruling_slug": "half-true",
            "ruling": "Half-True"
        },
        "subject": [
            {
                "subject": "Income",
                "subject_slug": "income"
            }
        ],
        "ruling_link_text": "Not exactly on the money",
        "speaker": {
            "last_name": "Sanders",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Bernie_Sanders.jpg",
            "name_slug": "bernie-s",
            "first_name": "Bernie",
            "party": {
                "party": "Independent",
                "party_slug": "independent"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2016/jul/26/bernie-s/bernie-sanders-outdated-income-inequality-statisti/",
        "statement_context": "a speech at the Democratic National Convention",
        "ruling_date": "2016-07-26T20:30:00",
        "statement": "<p>&quot;The top 1 percent in recent years has earned 85 percent of all new income.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-07-25",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "At DNC, Bernie Sanders repeats claim that top one-tenth of 1% owns as much wealth as bottom 90%",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlytrue.png",
            "ruling_slug": "mostly-true",
            "ruling": "Mostly True"
        },
        "subject": [
            {
                "subject": "Economy",
                "subject_slug": "economy"
            },
            {
                "subject": "Income",
                "subject_slug": "income"
            },
            {
                "subject": "Taxes",
                "subject_slug": "taxes"
            },
            {
                "subject": "Wealth",
                "subject_slug": "wealth"
            }
        ],
        "ruling_link_text": "A classic Sanders factoid",
        "speaker": {
            "last_name": "Sanders",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Bernie_Sanders.jpg",
            "name_slug": "bernie-s",
            "first_name": "Bernie",
            "party": {
                "party": "Independent",
                "party_slug": "independent"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2016/jul/26/bernie-s/dnc-bernie-sanders-repeats-claim-top-one-tenth-1-o/",
        "statement_context": "remarks at the Democratic National Convention in Philadelphia",
        "ruling_date": "2016-07-26T00:17:44",
        "statement": "<p>&quot;The top one-tenth of 1 percent now owns almost as much wealth as the bottom 90 percent.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-07-25",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Sanders: Trump would allow states to lower the minimum wage",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlytrue.png",
            "ruling_slug": "mostly-true",
            "ruling": "Mostly True"
        },
        "subject": [
            {
                "subject": "Jobs",
                "subject_slug": "jobs"
            },
            {
                "subject": "Poverty",
                "subject_slug": "poverty"
            },
            {
                "subject": "Workers",
                "subject_slug": "workers"
            }
        ],
        "ruling_link_text": "Seems to give states the all clear",
        "speaker": {
            "last_name": "Sanders",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Bernie_Sanders.jpg",
            "name_slug": "bernie-s",
            "first_name": "Bernie",
            "party": {
                "party": "Independent",
                "party_slug": "independent"
            }
        },
        "target": [
            {
                "last_name": "Trump",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
                "name_slug": "donald-trump",
                "first_name": "Donald",
                "party": {
                    "party": "Republican",
                    "party_slug": "republican"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/jul/26/bernie-s/sanders-trump-would-allow-states-lower-minimum-wag/",
        "statement_context": "a speech at the Democratic National Convention",
        "ruling_date": "2016-07-26T00:13:05",
        "statement": "<p>Says Donald Trump &quot;believes that states should actually have the right to lower the minimum wage below $7.25.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-07-24",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "No, Donald Trump, Bernie Sanders wouldn't have won even if super delegates were nixed",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-false.png",
            "ruling_slug": "false",
            "ruling": "False"
        },
        "subject": [
            {
                "subject": "Elections",
                "subject_slug": "elections"
            }
        ],
        "ruling_link_text": "Claim doesn't add up",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [
            {
                "last_name": "Sanders",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Bernie_Sanders.jpg",
                "name_slug": "bernie-s",
                "first_name": "Bernie",
                "party": {
                    "party": "Independent",
                    "party_slug": "independent"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/jul/25/donald-trump/no-donald-trump-bernie-sanders-wouldnt-have-won-ev/",
        "statement_context": "a tweet",
        "ruling_date": "2016-07-25T15:43:46",
        "statement": "<p>&quot;An analysis showed that Bernie Sanders would have won the Democratic nomination if it were not for the Super Delegates.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-06-01",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Lack of a reliable tally from EPA, California hinder Bernie Sanders tap water claim",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-halftrue.png",
            "ruling_slug": "half-true",
            "ruling": "Half-True"
        },
        "subject": [
            {
                "subject": "Agriculture",
                "subject_slug": "agriculture"
            },
            {
                "subject": "Consumer Safety",
                "subject_slug": "consumer-safety"
            },
            {
                "subject": "Environment",
                "subject_slug": "environment"
            },
            {
                "subject": "Public Health",
                "subject_slug": "public-health"
            },
            {
                "subject": "Water",
                "subject_slug": "water"
            }
        ],
        "ruling_link_text": "It could be hundreds of thousands",
        "speaker": {
            "last_name": "Sanders",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Bernie_Sanders.jpg",
            "name_slug": "bernie-s",
            "first_name": "Bernie",
            "party": {
                "party": "Independent",
                "party_slug": "independent"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2016/jun/14/bernie-s/lack-reliable-tally-epa-california-hinder-bernie-s/",
        "statement_context": "a news conference",
        "ruling_date": "2016-06-14T13:41:37",
        "statement": "<p>&quot;There are tens of thousands of homes right here in California where you turn on the faucet but you can&#39;t drink the water.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-05-29",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Bernie Sanders says only he supports carbon tax and 'aggressive' approach to climate change",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlytrue.png",
            "ruling_slug": "mostly-true",
            "ruling": "Mostly True"
        },
        "subject": [
            {
                "subject": "Cap and Trade",
                "subject_slug": "cap-and-trade"
            },
            {
                "subject": "Climate Change",
                "subject_slug": "climate-change"
            },
            {
                "subject": "Energy",
                "subject_slug": "energy"
            },
            {
                "subject": "Environment",
                "subject_slug": "environment"
            }
        ],
        "ruling_link_text": "Clinton's position is no carbon copy of Sanders'",
        "speaker": {
            "last_name": "Sanders",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Bernie_Sanders.jpg",
            "name_slug": "bernie-s",
            "first_name": "Bernie",
            "party": {
                "party": "Independent",
                "party_slug": "independent"
            }
        },
        "target": [
            {
                "last_name": "Clinton",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
                "name_slug": "hillary-clinton",
                "first_name": "Hillary",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/may/29/bernie-s/bernie-sanders-says-only-he-supports-carbon-tax-an/",
        "statement_context": "an interview on \"Meet the Press\"",
        "ruling_date": "2016-05-29T17:21:44",
        "statement": "<p>&quot;I believe we should have tax on carbon and deal aggressively with climate change. That is not (Hillary Clinton&#39;s)&nbsp;position.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-05-29",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Bernie Sanders says he polls better against Donald Trump than Hillary Clinton does",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlytrue.png",
            "ruling_slug": "mostly-true",
            "ruling": "Mostly True"
        },
        "subject": [
            {
                "subject": "Elections",
                "subject_slug": "elections"
            },
            {
                "subject": "Polls and Public Opinion",
                "subject_slug": "polls"
            }
        ],
        "ruling_link_text": "Parsing the polls",
        "speaker": {
            "last_name": "Sanders",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Bernie_Sanders.jpg",
            "name_slug": "bernie-s",
            "first_name": "Bernie",
            "party": {
                "party": "Independent",
                "party_slug": "independent"
            }
        },
        "target": [
            {
                "last_name": "Clinton",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
                "name_slug": "hillary-clinton",
                "first_name": "Hillary",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            },
            {
                "last_name": "Trump",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
                "name_slug": "donald-trump",
                "first_name": "Donald",
                "party": {
                    "party": "Republican",
                    "party_slug": "republican"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/may/29/bernie-s/bernie-sanders-says-he-polls-better-against-donald/",
        "statement_context": "an interview on NBC's 'Meet the Press'",
        "ruling_date": "2016-05-29T17:18:27",
        "statement": "<p>&quot;Right now, in every major poll, national poll and statewide poll done in the last month, six weeks, we are defeating Trump, often by big numbers&nbsp;and always at a larger margin than Secretary Clinton is.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-05-29",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Bernie Sanders says he polls better against Donald Trump than Hillary Clinton does",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlytrue.png",
            "ruling_slug": "mostly-true",
            "ruling": "Mostly True"
        },
        "subject": [
            {
                "subject": "Elections",
                "subject_slug": "elections"
            },
            {
                "subject": "Polls and Public Opinion",
                "subject_slug": "polls"
            }
        ],
        "ruling_link_text": "Parsing the polls",
        "speaker": {
            "last_name": "Sanders",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Bernie_Sanders.jpg",
            "name_slug": "bernie-s",
            "first_name": "Bernie",
            "party": {
                "party": "Independent",
                "party_slug": "independent"
            }
        },
        "target": [
            {
                "last_name": "Clinton",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
                "name_slug": "hillary-clinton",
                "first_name": "Hillary",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            },
            {
                "last_name": "Trump",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
                "name_slug": "donald-trump",
                "first_name": "Donald",
                "party": {
                    "party": "Republican",
                    "party_slug": "republican"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/may/29/bernie-s/bernie-sanders-says-he-polls-better-against-donald/",
        "statement_context": "an interview on NBC's 'Meet the Press'",
        "ruling_date": "2016-05-29T17:18:27",
        "statement": "<p>&quot;Right now, in every major poll, national poll and statewide poll done in the last month, six weeks, we are defeating Trump, often by big numbers&nbsp;and always at a larger margin than Secretary Clinton is.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-05-22",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Hillary Clinton wrong that no negative ads have hit Bernie Sanders",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-false.png",
            "ruling_slug": "false",
            "ruling": "False"
        },
        "subject": [
            {
                "subject": "Corrections and Updates",
                "subject_slug": "corrections-and-updates"
            },
            {
                "subject": "Elections",
                "subject_slug": "elections"
            },
            {
                "subject": "Negative Campaigning",
                "subject_slug": "campaign-advertising"
            }
        ],
        "ruling_link_text": "We counted a lot more than one",
        "speaker": {
            "last_name": "Clinton",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
            "name_slug": "hillary-clinton",
            "first_name": "Hillary",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [
            {
                "last_name": "Sanders",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Bernie_Sanders.jpg",
                "name_slug": "bernie-s",
                "first_name": "Bernie",
                "party": {
                    "party": "Independent",
                    "party_slug": "independent"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/may/22/hillary-clinton/hillary-clinton-wrong-negative-ads-bernie-sanders/",
        "statement_context": "an interview on \"Meet the Press\"",
        "ruling_date": "2016-05-22T16:07:11",
        "statement": "<p>&quot;Let me say that I don&#39;t think (Bernie Sanders has) had a single negative ad ever run against him.&quot;&nbsp;</p>\r\n"
    },
    {
        "statement_date": "2016-05-16",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Bernie Sanders links Puerto Rico's debt crisis to Wall Street greed ",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-halftrue.png",
            "ruling_slug": "half-true",
            "ruling": "Half-True"
        },
        "subject": [
            {
                "subject": "Financial Regulation",
                "subject_slug": "financial-regulation"
            },
            {
                "subject": "State Finances",
                "subject_slug": "state-finances"
            }
        ],
        "ruling_link_text": "Exacerbating the debt, didn't cause it ",
        "speaker": {
            "last_name": "Sanders",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Bernie_Sanders.jpg",
            "name_slug": "bernie-s",
            "first_name": "Bernie",
            "party": {
                "party": "Independent",
                "party_slug": "independent"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2016/may/19/bernie-s/bernie-sanders-links-puerto-ricos-debt-crisis-wall/",
        "statement_context": "a town hall in San Juan",
        "ruling_date": "2016-05-19T10:00:00",
        "statement": "<p>&quot;Puerto Rico&rsquo;s $70 billion debt is unsustainable and it is unpayable. And the reason why it is unsustainable has everything to do with the greed of Wall Street vulture funds.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-05-04",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Bernie Sanders says minimum wage hike to $15 would reduce federal assistance by $7.6 billion a year",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlyfalse.png",
            "ruling_slug": "barely-true",
            "ruling": "Mostly False"
        },
        "subject": [
            {
                "subject": "Economy",
                "subject_slug": "economy"
            },
            {
                "subject": "Jobs",
                "subject_slug": "jobs"
            }
        ],
        "ruling_link_text": "Such a large wage hike hasn't been studied",
        "speaker": {
            "last_name": "Sanders",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Bernie_Sanders.jpg",
            "name_slug": "bernie-s",
            "first_name": "Bernie",
            "party": {
                "party": "Independent",
                "party_slug": "independent"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2016/may/05/bernie-s/bernie-sanders-says-minimum-wage-hike-15-would-red/",
        "statement_context": "a tweet",
        "ruling_date": "2016-05-05T10:52:23",
        "statement": "<p>&quot;Increasing the min. wage to $15 an hour would reduce spending on food stamps, public housing and other programs by over $7.6 billion a year.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-05-01",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Sanders: It's not impossible to get enough delegates to win",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlytrue.png",
            "ruling_slug": "mostly-true",
            "ruling": "Mostly True"
        },
        "subject": [
            {
                "subject": "Elections",
                "subject_slug": "elections"
            }
        ],
        "ruling_link_text": "So you're saying there's a chance",
        "speaker": {
            "last_name": "Sanders",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Bernie_Sanders.jpg",
            "name_slug": "bernie-s",
            "first_name": "Bernie",
            "party": {
                "party": "Independent",
                "party_slug": "independent"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2016/may/02/bernie-s/sanders-its-not-impossible-get-enough-delegates-wi/",
        "statement_context": "an interview on CBS News' \"Face the Nation\"",
        "ruling_date": "2016-05-02T16:48:57",
        "statement": "<p>Winning enough pledged delegates is &quot;not impossible.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-04-24",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Bernie Sanders said poor people don't vote",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlytrue.png",
            "ruling_slug": "mostly-true",
            "ruling": "Mostly True"
        },
        "subject": [
            {
                "subject": "Income",
                "subject_slug": "income"
            },
            {
                "subject": "Voting Record",
                "subject_slug": "voting-record"
            }
        ],
        "ruling_link_text": "Income inequality and political inequality",
        "speaker": {
            "last_name": "Sanders",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Bernie_Sanders.jpg",
            "name_slug": "bernie-s",
            "first_name": "Bernie",
            "party": {
                "party": "Independent",
                "party_slug": "independent"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2016/apr/24/bernie-s/bernie-sanders-said-poor-people-dont-vote/",
        "statement_context": "an interview on NBC's \"Meet the Press\"",
        "ruling_date": "2016-04-24T18:02:13",
        "statement": "<p>In the 2014 election, &quot;80 percent&nbsp;of&nbsp;poor people did not vote.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-04-19",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Hillary Clinton gets 0.2 percent of campaign donations from oil, gas employees, Robby Mook says",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlytrue.png",
            "ruling_slug": "mostly-true",
            "ruling": "Mostly True"
        },
        "subject": [
            {
                "subject": "Campaign Finance",
                "subject_slug": "campaign-finance"
            },
            {
                "subject": "Energy",
                "subject_slug": "energy"
            },
            {
                "subject": "Environment",
                "subject_slug": "environment"
            }
        ],
        "ruling_link_text": "He's correct, using narrowest definition",
        "speaker": {
            "last_name": "Mook",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Mook_mug.jpg",
            "name_slug": "robby-mook",
            "first_name": "Robby",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [
            {
                "last_name": "Sanders",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Bernie_Sanders.jpg",
                "name_slug": "bernie-s",
                "first_name": "Bernie",
                "party": {
                    "party": "Independent",
                    "party_slug": "independent"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/apr/22/robby-mook/hillary-clinton-gets-02-percent-campaign-donations/",
        "statement_context": "a Medium post",
        "ruling_date": "2016-04-22T13:54:32",
        "statement": "<p>&quot;In last week&rsquo;s debate, Bernie questioned Hillary&rsquo;s commitment to fighting climate change because a whopping 0.2 percent of the money given to our campaign has come from employees of oil and gas companies. Not even 2 percent, mind you: 0.2 percent.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-04-17",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Bernie Sanders says Hillary Clinton had 'one line on the Palestinian people' in key speech on Israel",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlyfalse.png",
            "ruling_slug": "barely-true",
            "ruling": "Mostly False"
        },
        "subject": [
            {
                "subject": "Foreign Policy",
                "subject_slug": "foreign-policy"
            },
            {
                "subject": "Israel",
                "subject_slug": "israel"
            }
        ],
        "ruling_link_text": "An imbalance, but not that big",
        "speaker": {
            "last_name": "Sanders",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Bernie_Sanders.jpg",
            "name_slug": "bernie-s",
            "first_name": "Bernie",
            "party": {
                "party": "Independent",
                "party_slug": "independent"
            }
        },
        "target": [
            {
                "last_name": "Clinton",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
                "name_slug": "hillary-clinton",
                "first_name": "Hillary",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/apr/20/bernie-s/bernie-sanders-says-hillary-clinton-had-one-line-p/",
        "statement_context": "an interview on ABC's 'This Week'",
        "ruling_date": "2016-04-20T11:55:49",
        "statement": "<p>Says that in her speech to the pro-Israel group AIPAC, Hillary Clinton &quot;had one line on the Palestinian people.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-04-15",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Bernie Sanders ad ignores fact that members of Congress can't be paid for speeches",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlyfalse.png",
            "ruling_slug": "barely-true",
            "ruling": "Mostly False"
        },
        "subject": [
            {
                "subject": "Campaign Finance",
                "subject_slug": "campaign-finance"
            },
            {
                "subject": "Congress",
                "subject_slug": "congress"
            },
            {
                "subject": "Congressional Rules",
                "subject_slug": "congressional-rules"
            },
            {
                "subject": "Ethics",
                "subject_slug": "ethics"
            },
            {
                "subject": "Financial Regulation",
                "subject_slug": "financial-regulation"
            }
        ],
        "ruling_link_text": "Not if they're still serving",
        "speaker": {
            "last_name": "Sanders",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Bernie_Sanders.jpg",
            "name_slug": "bernie-s",
            "first_name": "Bernie",
            "party": {
                "party": "Independent",
                "party_slug": "independent"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2016/apr/20/bernie-s/bernie-sanders-ad-ignores-fact-members-congress-ca/",
        "statement_context": "a television ad",
        "ruling_date": "2016-04-20T10:00:00",
        "statement": "<p>&quot;Washington politicians are paid over $200,000 an hour for speeches.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-04-14",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Sanders oversimplifies U.S. share of NATO",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-halftrue.png",
            "ruling_slug": "half-true",
            "ruling": "Half-True"
        },
        "subject": [
            {
                "subject": "Foreign Policy",
                "subject_slug": "foreign-policy"
            },
            {
                "subject": "Military",
                "subject_slug": "military"
            }
        ],
        "ruling_link_text": "Updated: Tricky to track the dollars",
        "speaker": {
            "last_name": "Sanders",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Bernie_Sanders.jpg",
            "name_slug": "bernie-s",
            "first_name": "Bernie",
            "party": {
                "party": "Independent",
                "party_slug": "independent"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2016/apr/19/bernie-s/sanders-oversimplifies-us-share-NATO/",
        "statement_context": "the Democratic debate in Brooklyn, N.Y.",
        "ruling_date": "2016-04-19T14:00:00",
        "statement": "<p>&quot;We spend about 75 percent of the entire cost of the military aspect of NATO.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-04-12",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Sanders largely off-base in saying he wins when voter turnout is high and loses when it's low",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlyfalse.png",
            "ruling_slug": "barely-true",
            "ruling": "Mostly False"
        },
        "subject": [
            {
                "subject": "Elections",
                "subject_slug": "elections"
            }
        ],
        "ruling_link_text": "Not as strong a connection as he suggests",
        "speaker": {
            "last_name": "Sanders",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Bernie_Sanders.jpg",
            "name_slug": "bernie-s",
            "first_name": "Bernie",
            "party": {
                "party": "Independent",
                "party_slug": "independent"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2016/apr/19/bernie-s/sanders-largely-base-saying-we-win-when-voter-turn/",
        "statement_context": "a speech in Syracuse, N.Y.",
        "ruling_date": "2016-04-19T10:10:04",
        "statement": "<p>&quot;We win when voter turnout is high, we lose when it is low.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-04-15",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Does Hillary Clinton want a $15 or $12 minimum wage?",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlytrue.png",
            "ruling_slug": "mostly-true",
            "ruling": "Mostly True"
        },
        "subject": [
            {
                "subject": "Economy",
                "subject_slug": "economy"
            },
            {
                "subject": "Income",
                "subject_slug": "income"
            }
        ],
        "ruling_link_text": "A nuanced position",
        "speaker": {
            "last_name": "Sanders",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Bernie_Sanders.jpg",
            "name_slug": "bernie-s",
            "first_name": "Bernie",
            "party": {
                "party": "Independent",
                "party_slug": "independent"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2016/apr/15/bernie-s/does-hillary-clinton-want-15-or-12-minimum-wage/",
        "statement_context": "a Democratic debate in New York",
        "ruling_date": "2016-04-15T00:12:43",
        "statement": "<p>&quot;When this campaign began, I said that we&rsquo;ve got to end the starvation minimum wage of $7.25, raise it to $15. Secretary Clinton said let&#39;s raise it to $12.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-04-14",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Hillary Clinton: Bernie Sanders 'has been largely a very reliable supporter of the NRA'",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlyfalse.png",
            "ruling_slug": "barely-true",
            "ruling": "Mostly False"
        },
        "subject": [
            {
                "subject": "Candidate Biography",
                "subject_slug": "candidates-biography"
            },
            {
                "subject": "Guns",
                "subject_slug": "guns"
            }
        ],
        "ruling_link_text": "Consistently moderate on guns",
        "speaker": {
            "last_name": "Clinton",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
            "name_slug": "hillary-clinton",
            "first_name": "Hillary",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [
            {
                "last_name": "Sanders",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Bernie_Sanders.jpg",
                "name_slug": "bernie-s",
                "first_name": "Bernie",
                "party": {
                    "party": "Independent",
                    "party_slug": "independent"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/apr/14/hillary-clinton/hillary-clinton-bernie-sanders-has-been-largely-ve/",
        "statement_context": "the Democratic debate in New York",
        "ruling_date": "2016-04-14T23:07:29",
        "statement": "<p>Says Bernie Sanders &quot;has been largely a very reliable supporter of the NRA.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-04-14",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Bernie Sanders says he's 'one of the poorer members of the United States Senate'",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlytrue.png",
            "ruling_slug": "mostly-true",
            "ruling": "Mostly True"
        },
        "subject": [
            {
                "subject": "Candidate Biography",
                "subject_slug": "candidates-biography"
            }
        ],
        "ruling_link_text": "As best as the imperfect disclosure rules show",
        "speaker": {
            "last_name": "Sanders",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Bernie_Sanders.jpg",
            "name_slug": "bernie-s",
            "first_name": "Bernie",
            "party": {
                "party": "Independent",
                "party_slug": "independent"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2016/apr/14/bernie-s/bernie-sanders-says-hes-one-poorer-members-united-/",
        "statement_context": "the Brooklyn presidential debate",
        "ruling_date": "2016-04-14T22:37:21",
        "statement": "<p>&quot;I remain one of the poorer members of the United States Senate.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-04-10",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Does Hillary Clinton support fracking?",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlytrue.png",
            "ruling_slug": "mostly-true",
            "ruling": "Mostly True"
        },
        "subject": [
            {
                "subject": "Environment",
                "subject_slug": "environment"
            }
        ],
        "ruling_link_text": "The support comes with conditions",
        "speaker": {
            "last_name": "Sanders",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Bernie_Sanders.jpg",
            "name_slug": "bernie-s",
            "first_name": "Bernie",
            "party": {
                "party": "Independent",
                "party_slug": "independent"
            }
        },
        "target": [
            {
                "last_name": "Clinton",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
                "name_slug": "hillary-clinton",
                "first_name": "Hillary",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/apr/13/bernie-s/does-hillary-clinton-support-fracking/",
        "statement_context": "in an interview on NBC's Meet the Press",
        "ruling_date": "2016-04-13T15:01:16",
        "statement": "<p>Says Hillary Clinton supported and continues to &quot;support fracking.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-04-11",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "A look at Hillary Clinton's claim about Vermont's gun pipeline to New York",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-halftrue.png",
            "ruling_slug": "half-true",
            "ruling": "Half-True"
        },
        "subject": [
            {
                "subject": "Crime",
                "subject_slug": "crime"
            },
            {
                "subject": "Guns",
                "subject_slug": "guns"
            }
        ],
        "ruling_link_text": "Right number; significance is murkier",
        "speaker": {
            "last_name": "Clinton",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
            "name_slug": "hillary-clinton",
            "first_name": "Hillary",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [
            {
                "last_name": "Sanders",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Bernie_Sanders.jpg",
                "name_slug": "bernie-s",
                "first_name": "Bernie",
                "party": {
                    "party": "Independent",
                    "party_slug": "independent"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/apr/12/hillary-clinton/look-hillary-clintons-claim-about-vermonts-gun-pip/",
        "statement_context": "an event in Port Washington, N.Y.",
        "ruling_date": "2016-04-12T16:57:15",
        "statement": "<p>&quot;The state that has the highest per capita number of &hellip; guns that end up committing crimes in New York come from Vermont.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-04-06",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Sanders: U.S. multinationals would owe $620 billion on overseas profits",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlytrue.png",
            "ruling_slug": "mostly-true",
            "ruling": "Mostly True"
        },
        "subject": [
            {
                "subject": "Corporations",
                "subject_slug": "corporations"
            },
            {
                "subject": "Taxes",
                "subject_slug": "taxes"
            }
        ],
        "ruling_link_text": "It's a lot of money",
        "speaker": {
            "last_name": "Sanders",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Bernie_Sanders.jpg",
            "name_slug": "bernie-s",
            "first_name": "Bernie",
            "party": {
                "party": "Independent",
                "party_slug": "independent"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2016/apr/11/bernie-s/sanders-us-multinationals-would-owe-620-billion-ov/",
        "statement_context": "a tweet",
        "ruling_date": "2016-04-11T11:41:35",
        "statement": "<p>&quot;The largest U.S. companies would owe $620 billion in U.S. taxes on the cash they store in tax havens.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-04-10",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Clinton voted for 'virtually every' trade agreement, killing millions of jobs, Sanders says",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-halftrue.png",
            "ruling_slug": "half-true",
            "ruling": "Half-True"
        },
        "subject": [
            {
                "subject": "Candidate Biography",
                "subject_slug": "candidates-biography"
            },
            {
                "subject": "Jobs",
                "subject_slug": "jobs"
            },
            {
                "subject": "Trade",
                "subject_slug": "trade"
            }
        ],
        "ruling_link_text": "Clinton supports trade deals but job loss question not settled",
        "speaker": {
            "last_name": "Sanders",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Bernie_Sanders.jpg",
            "name_slug": "bernie-s",
            "first_name": "Bernie",
            "party": {
                "party": "Independent",
                "party_slug": "independent"
            }
        },
        "target": [
            {
                "last_name": "Clinton",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
                "name_slug": "hillary-clinton",
                "first_name": "Hillary",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/apr/10/bernie-s/clinton-voted-virtually-every-trade-agreement-kill/",
        "statement_context": "an interview on NBC's \"Meet the Press\"",
        "ruling_date": "2016-04-10T17:29:31",
        "statement": "<p>Says Hillary Clinton voted &quot;for virtually every trade agreement that has cost the workers of this country millions of jobs.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-04-06",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Did Hillary Clinton say Bernie Sanders 'not qualified' to be president? Not directly",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlyfalse.png",
            "ruling_slug": "barely-true",
            "ruling": "Mostly False"
        },
        "subject": [
            {
                "subject": "Candidate Biography",
                "subject_slug": "candidates-biography"
            },
            {
                "subject": "Elections",
                "subject_slug": "elections"
            },
            {
                "subject": "Negative Campaigning",
                "subject_slug": "campaign-advertising"
            }
        ],
        "ruling_link_text": "Clinton hasn't gone that far",
        "speaker": {
            "last_name": "Sanders",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Bernie_Sanders.jpg",
            "name_slug": "bernie-s",
            "first_name": "Bernie",
            "party": {
                "party": "Independent",
                "party_slug": "independent"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2016/apr/07/bernie-s/bernie-sanders-not-qualified-be-president-hillary-/",
        "statement_context": "a speech at Temple University",
        "ruling_date": "2016-04-07T16:05:34",
        "statement": "<p>Says Hillary Clinton &quot;has been saying lately that she thinks that I am, &#39;not qualified&nbsp;to be president.&#39;&nbsp;&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-04-03",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Bernie Sanders has released few tax returns compared with past and present candidates",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-false.png",
            "ruling_slug": "false",
            "ruling": "False"
        },
        "subject": [
            {
                "subject": "Candidate Biography",
                "subject_slug": "candidates-biography"
            },
            {
                "subject": "Taxes",
                "subject_slug": "taxes"
            },
            {
                "subject": "Transparency",
                "subject_slug": "transparency"
            }
        ],
        "ruling_link_text": "Clinton, among others, has been much more transparent",
        "speaker": {
            "last_name": "Sanders",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Bernie_Sanders.jpg",
            "name_slug": "bernie-s",
            "first_name": "Bernie",
            "party": {
                "party": "Independent",
                "party_slug": "independent"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2016/apr/06/bernie-s/bernie-sanders-has-released-few-tax-returns-compar/",
        "statement_context": "an interview with CNN's Jake Tapper",
        "ruling_date": "2016-04-06T12:16:54",
        "statement": "<p>Says his campaign has released his past tax returns.</p>\r\n"
    },
    {
        "statement_date": "2016-03-30",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Bernie Sanders says Wall Street tax would pay for his free tuition plan",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlyfalse.png",
            "ruling_slug": "barely-true",
            "ruling": "Mostly False"
        },
        "subject": [
            {
                "subject": "Education",
                "subject_slug": "education"
            }
        ],
        "ruling_link_text": "Only 2/3 of the story",
        "speaker": {
            "last_name": "Sanders",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Bernie_Sanders.jpg",
            "name_slug": "bernie-s",
            "first_name": "Bernie",
            "party": {
                "party": "Independent",
                "party_slug": "independent"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2016/apr/04/bernie-s/bernie-sanders-says-wall-street-tax-would-pay-his-/",
        "statement_context": "a CNN interview",
        "ruling_date": "2016-04-04T10:49:27",
        "statement": "<p>Says his free public university tuition program &quot;is paid for &hellip; by a tax on Wall Street&#39;s speculation.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-02-13",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Bernie Sanders was the roll call amendment king from 1995 to 2007",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-true.png",
            "ruling_slug": "true",
            "ruling": "True"
        },
        "subject": [
            {
                "subject": "Candidate Biography",
                "subject_slug": "candidates-biography"
            }
        ],
        "ruling_link_text": "Bernie takes the crown",
        "speaker": {
            "last_name": "Sanders",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Bernie_Sanders.jpg",
            "name_slug": "bernie-s",
            "first_name": "Bernie",
            "party": {
                "party": "Independent",
                "party_slug": "independent"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2016/mar/24/bernie-s/bernie-sanders-was-roll-call-amendment-king-1995-2/",
        "statement_context": "an a television ad",
        "ruling_date": "2016-03-24T15:00:45",
        "statement": "<p>&quot;Bernie Sanders passed more roll call amendments in a Republican Congress than any other member.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-03-09",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Hillary Clinton says Bernie Sanders supported Minutemen, indefinite detention for the undocumented",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlytrue.png",
            "ruling_slug": "mostly-true",
            "ruling": "Mostly True"
        },
        "subject": [
            {
                "subject": "Immigration",
                "subject_slug": "immigration"
            }
        ],
        "ruling_link_text": "He voted that way; significance is up for debate",
        "speaker": {
            "last_name": "Clinton",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
            "name_slug": "hillary-clinton",
            "first_name": "Hillary",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [
            {
                "last_name": "Sanders",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Bernie_Sanders.jpg",
                "name_slug": "bernie-s",
                "first_name": "Bernie",
                "party": {
                    "party": "Independent",
                    "party_slug": "independent"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/mar/10/hillary-clinton/hillary-clinton-says-bernie-sanders-supported-minu/",
        "statement_context": "a Democratic presidential debate in Miami",
        "ruling_date": "2016-03-10T15:41:52",
        "statement": "<p>In 2006, Bernie Sanders &quot;voted in the House with hard-line Republicans for indefinite detention for undocumented immigrants, and then he sided with those Republicans to stand with vigilantes known as Minutemen who were taking up outposts along the border to hunt down immigrants.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-03-09",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Hillary Clinton wrongly says Bernie Sanders wants to delay the Clean Power Plan",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-false.png",
            "ruling_slug": "false",
            "ruling": "False"
        },
        "subject": [
            {
                "subject": "Climate Change",
                "subject_slug": "climate-change"
            },
            {
                "subject": "Environment",
                "subject_slug": "environment"
            }
        ],
        "ruling_link_text": "Sanders wants more ambitious plan, but supports this one",
        "speaker": {
            "last_name": "Clinton",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
            "name_slug": "hillary-clinton",
            "first_name": "Hillary",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [
            {
                "last_name": "Sanders",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Bernie_Sanders.jpg",
                "name_slug": "bernie-s",
                "first_name": "Bernie",
                "party": {
                    "party": "Independent",
                    "party_slug": "independent"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/mar/10/hillary-clinton/hillary-clinton-says-bernie-sanders-wants-delay-cl/",
        "statement_context": "in the Democratic debate in Florida",
        "ruling_date": "2016-03-10T01:07:33",
        "statement": "<p>&quot;The Clean Power Plan is something that Sen. Sanders has said he would delay implementing.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-03-09",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Bernie Sanders' statistic on black, Hispanic unemployment has merit, but may be out of date",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlytrue.png",
            "ruling_slug": "mostly-true",
            "ruling": "Mostly True"
        },
        "subject": [
            {
                "subject": "Diversity",
                "subject_slug": "diversity"
            },
            {
                "subject": "Economy",
                "subject_slug": "economy"
            },
            {
                "subject": "Jobs",
                "subject_slug": "jobs"
            }
        ],
        "ruling_link_text": "Data still has merit, but is growing old",
        "speaker": {
            "last_name": "Sanders",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Bernie_Sanders.jpg",
            "name_slug": "bernie-s",
            "first_name": "Bernie",
            "party": {
                "party": "Independent",
                "party_slug": "independent"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2016/mar/10/bernie-s/bernie-sanders-statistic-black-hispanic-unemployme/",
        "statement_context": "a Democratic presidential debate in Miami",
        "ruling_date": "2016-03-10T00:27:48",
        "statement": "<p>&quot;If you look at Latino kids between 17 and 20 who graduated high school, 36 percent of them are unemployed or underemployed. &hellip; African-American kids are unemployed or underemployed to the tune of 51 percent.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-03-09",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Sanders said Clinton backed return for undocumented kids",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlytrue.png",
            "ruling_slug": "mostly-true",
            "ruling": "Mostly True"
        },
        "subject": [
            {
                "subject": "Immigration",
                "subject_slug": "immigration"
            }
        ],
        "ruling_link_text": "Not so blunt, but a clear preference",
        "speaker": {
            "last_name": "Sanders",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Bernie_Sanders.jpg",
            "name_slug": "bernie-s",
            "first_name": "Bernie",
            "party": {
                "party": "Independent",
                "party_slug": "independent"
            }
        },
        "target": [
            {
                "last_name": "Clinton",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
                "name_slug": "hillary-clinton",
                "first_name": "Hillary",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/mar/09/bernie-s/sanders-said-clinton-backed-return-undocumented-ki/",
        "statement_context": "the Democratic debate at Miami Dade College",
        "ruling_date": "2016-03-09T23:48:43",
        "statement": "<p>When Honduran children came into this country, &quot;Secretary Clinton said send them back.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-03-06",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Bernie Sanders says he consistently beats Donald Trump by bigger margins than Hillary Clinton does",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlytrue.png",
            "ruling_slug": "mostly-true",
            "ruling": "Mostly True"
        },
        "subject": [
            {
                "subject": "Polls and Public Opinion",
                "subject_slug": "polls"
            }
        ],
        "ruling_link_text": "Right on numbers, but worth a grain of salt",
        "speaker": {
            "last_name": "Sanders",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Bernie_Sanders.jpg",
            "name_slug": "bernie-s",
            "first_name": "Bernie",
            "party": {
                "party": "Independent",
                "party_slug": "independent"
            }
        },
        "target": [
            {
                "last_name": "Clinton",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
                "name_slug": "hillary-clinton",
                "first_name": "Hillary",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            },
            {
                "last_name": "Trump",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
                "name_slug": "donald-trump",
                "first_name": "Donald",
                "party": {
                    "party": "Republican",
                    "party_slug": "republican"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/mar/08/bernie-s/bernie-sanders-says-he-consistently-beats-donald-t/",
        "statement_context": "a Democratic presidential debate in Flint, Mich.",
        "ruling_date": "2016-03-08T13:54:38",
        "statement": "<p>&quot;Almost every poll has shown that Sanders vs. Trump does a lot better than Clinton vs. Trump &hellip; and, that&rsquo;s true nationally.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-03-06",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Bernie Sanders says he consistently beats Donald Trump by bigger margins than Hillary Clinton does",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlytrue.png",
            "ruling_slug": "mostly-true",
            "ruling": "Mostly True"
        },
        "subject": [
            {
                "subject": "Polls and Public Opinion",
                "subject_slug": "polls"
            }
        ],
        "ruling_link_text": "Right on numbers, but worth a grain of salt",
        "speaker": {
            "last_name": "Sanders",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Bernie_Sanders.jpg",
            "name_slug": "bernie-s",
            "first_name": "Bernie",
            "party": {
                "party": "Independent",
                "party_slug": "independent"
            }
        },
        "target": [
            {
                "last_name": "Clinton",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
                "name_slug": "hillary-clinton",
                "first_name": "Hillary",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            },
            {
                "last_name": "Trump",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
                "name_slug": "donald-trump",
                "first_name": "Donald",
                "party": {
                    "party": "Republican",
                    "party_slug": "republican"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/mar/08/bernie-s/bernie-sanders-says-he-consistently-beats-donald-t/",
        "statement_context": "a Democratic presidential debate in Flint, Mich.",
        "ruling_date": "2016-03-08T13:54:38",
        "statement": "<p>&quot;Almost every poll has shown that Sanders vs. Trump does a lot better than Clinton vs. Trump &hellip; and, that&rsquo;s true nationally.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-03-06",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Bernie Sanders has a point: Water in Flint much more expensive than in Burlington",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlytrue.png",
            "ruling_slug": "mostly-true",
            "ruling": "Mostly True"
        },
        "subject": [
            {
                "subject": "City Government",
                "subject_slug": "city-government"
            },
            {
                "subject": "Water",
                "subject_slug": "water"
            }
        ],
        "ruling_link_text": "Bills still sky high despite a recent drop",
        "speaker": {
            "last_name": "Sanders",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Bernie_Sanders.jpg",
            "name_slug": "bernie-s",
            "first_name": "Bernie",
            "party": {
                "party": "Independent",
                "party_slug": "independent"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2016/mar/07/bernie-s/flint-residents-dont-pay-3-times-much-burlington-r/",
        "statement_context": "a Democratic debate in Flint, Mich.",
        "ruling_date": "2016-03-07T17:07:09",
        "statement": "<p>&quot;(Flint, Mich., is) paying three times more for poison water than I am paying in Burlington, Vt., for clean water.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-03-06",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Bernie Sanders wrong to say, 'When you're white ... you don't know what it's like to be poor'",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-false.png",
            "ruling_slug": "false",
            "ruling": "False"
        },
        "subject": [
            {
                "subject": "Diversity",
                "subject_slug": "diversity"
            },
            {
                "subject": "Economy",
                "subject_slug": "economy"
            },
            {
                "subject": "Income",
                "subject_slug": "income"
            },
            {
                "subject": "Poverty",
                "subject_slug": "poverty"
            }
        ],
        "ruling_link_text": "Almost 20 million white Americans in poverty",
        "speaker": {
            "last_name": "Sanders",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Bernie_Sanders.jpg",
            "name_slug": "bernie-s",
            "first_name": "Bernie",
            "party": {
                "party": "Independent",
                "party_slug": "independent"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2016/mar/07/bernie-s/bernie-sanders-wrong-say-when-youre-white-you-dont/",
        "statement_context": "a Democratic debate in Flint, Mich.",
        "ruling_date": "2016-03-07T17:01:11",
        "statement": "<p>&quot;When you&#39;re white ... you don&#39;t know what it&#39;s like to be poor.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-03-06",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Sanders overshoots on NAFTA job losses",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlyfalse.png",
            "ruling_slug": "barely-true",
            "ruling": "Mostly False"
        },
        "subject": [
            {
                "subject": "Jobs",
                "subject_slug": "jobs"
            },
            {
                "subject": "Trade",
                "subject_slug": "trade"
            }
        ],
        "ruling_link_text": "Most studies found little impact",
        "speaker": {
            "last_name": "Sanders",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Bernie_Sanders.jpg",
            "name_slug": "bernie-s",
            "first_name": "Bernie",
            "party": {
                "party": "Independent",
                "party_slug": "independent"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2016/mar/07/bernie-s/sanders-overshoots-nafta-job-losses/",
        "statement_context": "the Democratic debate in Flint, Mich.",
        "ruling_date": "2016-03-07T15:02:58",
        "statement": "<p>&quot;NAFTA, supported by the Secretary (Clinton), cost us 800,000 jobs nationwide.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-02-24",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Sanders: Welfare reform more than doubled 'extreme poverty'",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlytrue.png",
            "ruling_slug": "mostly-true",
            "ruling": "Mostly True"
        },
        "subject": [
            {
                "subject": "Welfare",
                "subject_slug": "welfare"
            }
        ],
        "ruling_link_text": "The poorest of the poor",
        "speaker": {
            "last_name": "Sanders",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Bernie_Sanders.jpg",
            "name_slug": "bernie-s",
            "first_name": "Bernie",
            "party": {
                "party": "Independent",
                "party_slug": "independent"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2016/mar/02/bernie-s/sanders-welfare-reform-more-doubled-extreme-povert/",
        "statement_context": "a news conference",
        "ruling_date": "2016-03-02T17:30:34",
        "statement": "<p>&quot;Since (welfare reform) was signed into law, the number of families living in extreme poverty has more than doubled.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-02-28",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Bernie Sanders, Chuck Todd debate crime bill vote, assault weapons ban",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-halftrue.png",
            "ruling_slug": "half-true",
            "ruling": "Half-True"
        },
        "subject": [
            {
                "subject": "Candidate Biography",
                "subject_slug": "candidates-biography"
            },
            {
                "subject": "Guns",
                "subject_slug": "guns"
            }
        ],
        "ruling_link_text": "He also supported without the ban",
        "speaker": {
            "last_name": "Sanders",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Bernie_Sanders.jpg",
            "name_slug": "bernie-s",
            "first_name": "Bernie",
            "party": {
                "party": "Independent",
                "party_slug": "independent"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2016/feb/28/bernie-s/bernie-sanders-chuck-todd-debate-crime-bill-vote-a/",
        "statement_context": "comments on \"Meet the Press\"",
        "ruling_date": "2016-02-28T18:32:05",
        "statement": "<p>Says he supported the 1994 crime bill because &quot;there is a ban on assault weapons in that bill.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-02-11",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Reports' limitations plague Bernie Sanders' claim about high childhood poverty rates in the U.S.",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-halftrue.png",
            "ruling_slug": "half-true",
            "ruling": "Half-True"
        },
        "subject": [
            {
                "subject": "Children",
                "subject_slug": "children"
            },
            {
                "subject": "Poverty",
                "subject_slug": "poverty"
            }
        ],
        "ruling_link_text": "Too many caveats",
        "speaker": {
            "last_name": "Sanders",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Bernie_Sanders.jpg",
            "name_slug": "bernie-s",
            "first_name": "Bernie",
            "party": {
                "party": "Independent",
                "party_slug": "independent"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2016/feb/12/bernie-s/comparing-us-world-childhood-poverty-rates/",
        "statement_context": "comments during the PBS Democratic debate",
        "ruling_date": "2016-02-12T00:37:33",
        "statement": "<p>The United States has &quot;the highest rate of childhood poverty of almost any major country on Earth.&quot;</p>\r\n\r\n<div>&nbsp;</div>\r\n"
    },
    {
        "statement_date": "2016-02-11",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Sanders: African-Americans lost half their wealth because of Wall Street collapse",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-true.png",
            "ruling_slug": "true",
            "ruling": "True"
        },
        "subject": [
            {
                "subject": "Diversity",
                "subject_slug": "diversity"
            },
            {
                "subject": "Financial Regulation",
                "subject_slug": "financial-regulation"
            }
        ],
        "ruling_link_text": "Minorities were hit harder",
        "speaker": {
            "last_name": "Sanders",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Bernie_Sanders.jpg",
            "name_slug": "bernie-s",
            "first_name": "Bernie",
            "party": {
                "party": "Independent",
                "party_slug": "independent"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2016/feb/11/bernie-s/sanders-african-american-lost-half-their-wealth-be/",
        "statement_context": "comments during the PBS Democratic debate",
        "ruling_date": "2016-02-11T22:54:40",
        "statement": "<p>&quot;The African-American community lost half of their wealth as a result of the Wall Street collapse.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-02-11",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Bernie Sanders has the correct diagnosis: U.S. prescription drug prices typically highest in world",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlytrue.png",
            "ruling_slug": "mostly-true",
            "ruling": "Mostly True"
        },
        "subject": [
            {
                "subject": "Economy",
                "subject_slug": "economy"
            },
            {
                "subject": "Health Care",
                "subject_slug": "health-care"
            }
        ],
        "ruling_link_text": "This diagnosis is largely correct",
        "speaker": {
            "last_name": "Sanders",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Bernie_Sanders.jpg",
            "name_slug": "bernie-s",
            "first_name": "Bernie",
            "party": {
                "party": "Independent",
                "party_slug": "independent"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2016/feb/11/bernie-s/bernie-sanders-has-correct-diagnosis-us-prescripti/",
        "statement_context": "a PBS Democratic debate",
        "ruling_date": "2016-02-11T21:56:57",
        "statement": "<p>&quot;In America, we pay, by far, the highest prices in the world for prescription drugs.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-02-04",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Bernie Sanders offers overheated claim on where all Republicans stand on climate change",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-false.png",
            "ruling_slug": "false",
            "ruling": "False"
        },
        "subject": [
            {
                "subject": "Cap and Trade",
                "subject_slug": "cap-and-trade"
            },
            {
                "subject": "Climate Change",
                "subject_slug": "climate-change"
            },
            {
                "subject": "Debates",
                "subject_slug": "debates"
            },
            {
                "subject": "Economy",
                "subject_slug": "economy"
            },
            {
                "subject": "Energy",
                "subject_slug": "energy"
            },
            {
                "subject": "Environment",
                "subject_slug": "environment"
            },
            {
                "subject": "Government regulation",
                "subject_slug": "government-regulation"
            },
            {
                "subject": "Jobs",
                "subject_slug": "jobs"
            },
            {
                "subject": "Negative Campaigning",
                "subject_slug": "campaign-advertising"
            },
            {
                "subject": "Polls and Public Opinion",
                "subject_slug": "polls"
            },
            {
                "subject": "Public Safety",
                "subject_slug": "public-safety"
            }
        ],
        "ruling_link_text": "Even Republicans are warming",
        "speaker": {
            "last_name": "Sanders",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Bernie_Sanders.jpg",
            "name_slug": "bernie-s",
            "first_name": "Bernie",
            "party": {
                "party": "Independent",
                "party_slug": "independent"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2016/feb/09/bernie-s/bernie-sanders-offers-overheated-claim-where-all-r/",
        "statement_context": "a Democratic debate in New Hampshire",
        "ruling_date": "2016-02-09T23:59:00",
        "statement": "<p>&quot;Not one Republican has the guts to recognize that climate change is real.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-02-07",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "In foreign policy spat, Bernie Sanders suggests Madeleine Albright supported Iraq invasion",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlyfalse.png",
            "ruling_slug": "barely-true",
            "ruling": "Mostly False"
        },
        "subject": [
            {
                "subject": "Foreign Policy",
                "subject_slug": "foreign-policy"
            },
            {
                "subject": "Iraq",
                "subject_slug": "iraq"
            }
        ],
        "ruling_link_text": "Surprise! She didn't",
        "speaker": {
            "last_name": "Sanders",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Bernie_Sanders.jpg",
            "name_slug": "bernie-s",
            "first_name": "Bernie",
            "party": {
                "party": "Independent",
                "party_slug": "independent"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2016/feb/07/bernie-s/foreign-policy-spat-bernie-sanders-suggests-madele/",
        "statement_context": "comments on Meet the Press",
        "ruling_date": "2016-02-07T15:32:47",
        "statement": "<div>&quot;Tell me what Madeleine Albright&rsquo;s position was on the War on Iraq. I wouldn&rsquo;t be surprised if she supported it.&quot;&nbsp;</div>\r\n"
    },
    {
        "statement_date": "2016-02-07",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Hillary Clinton says Bernie Sanders doesn't have a foreign policy adviser network ",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlytrue.png",
            "ruling_slug": "mostly-true",
            "ruling": "Mostly True"
        },
        "subject": [
            {
                "subject": "Foreign Policy",
                "subject_slug": "foreign-policy"
            }
        ],
        "ruling_link_text": "Bernie doesn't have Clinton's cabal",
        "speaker": {
            "last_name": "Clinton",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
            "name_slug": "hillary-clinton",
            "first_name": "Hillary",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [
            {
                "last_name": "Sanders",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Bernie_Sanders.jpg",
                "name_slug": "bernie-s",
                "first_name": "Bernie",
                "party": {
                    "party": "Independent",
                    "party_slug": "independent"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/feb/07/hillary-clinton/hillary-clinton-really-isnt-any-foreign-policy-net/",
        "statement_context": "comments on Meet the Press",
        "ruling_date": "2016-02-07T15:27:56",
        "statement": "<p>&quot;There really isn&rsquo;t any kind of foreign policy network that is supporting and advising Sen. Sanders.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-02-04",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Clinton says Sanders proposed Iranian troops in Syria",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlytrue.png",
            "ruling_slug": "mostly-true",
            "ruling": "Mostly True"
        },
        "subject": [
            {
                "subject": "Foreign Policy",
                "subject_slug": "foreign-policy"
            }
        ],
        "ruling_link_text": "He did suggest it, as part of a coalition",
        "speaker": {
            "last_name": "Clinton",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
            "name_slug": "hillary-clinton",
            "first_name": "Hillary",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [
            {
                "last_name": "Sanders",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Bernie_Sanders.jpg",
                "name_slug": "bernie-s",
                "first_name": "Bernie",
                "party": {
                    "party": "Independent",
                    "party_slug": "independent"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/feb/05/hillary-clinton/clinton-says-sanders-proposed-iranian-troops-syria/",
        "statement_context": "the Democratic debate in Durham, N.H.",
        "ruling_date": "2016-02-05T00:02:37",
        "statement": "<p>Says Bernie Sanders advocated putting &quot;Iranian troops into Syria to try and resolve the conflict there. Putting them right on the doorstep of Israel.&quot;</p>\r\n\r\n<div>&nbsp;</div>\r\n"
    },
    {
        "statement_date": "2016-02-04",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Bernie Sanders mistaken about whether his campaign's ad had cited a nonexistent endorsement",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-false.png",
            "ruling_slug": "false",
            "ruling": "False"
        },
        "subject": [
            {
                "subject": "Elections",
                "subject_slug": "elections"
            }
        ],
        "ruling_link_text": "Initial version of the ad clearly said, 'Endorsed by'",
        "speaker": {
            "last_name": "Sanders",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Bernie_Sanders.jpg",
            "name_slug": "bernie-s",
            "first_name": "Bernie",
            "party": {
                "party": "Independent",
                "party_slug": "independent"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2016/feb/04/bernie-s/bernie-sanders-mistaken-about-whether-his-campaign/",
        "statement_context": "a Democratic presidential debate in Durham, N.H.",
        "ruling_date": "2016-02-04T23:39:41",
        "statement": "<p>Says a Sanders campaign ad &quot;never said ... a newspaper endorsed us that did not.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-02-04",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Bernie Sanders exaggerates concentration of wealth, income for top 1 percent",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-halftrue.png",
            "ruling_slug": "half-true",
            "ruling": "Half-True"
        },
        "subject": [
            {
                "subject": "Economy",
                "subject_slug": "economy"
            },
            {
                "subject": "Income",
                "subject_slug": "income"
            },
            {
                "subject": "Workers",
                "subject_slug": "workers"
            }
        ],
        "ruling_link_text": "Top 1 percent isn't getting \"almost all\" new income",
        "speaker": {
            "last_name": "Sanders",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Bernie_Sanders.jpg",
            "name_slug": "bernie-s",
            "first_name": "Bernie",
            "party": {
                "party": "Independent",
                "party_slug": "independent"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2016/feb/04/bernie-s/bernie-sanders-exaggerates-concentration-wealth-in/",
        "statement_context": "a Democratic debate on MSNBC",
        "ruling_date": "2016-02-04T22:27:33",
        "statement": "<p>Americans &quot;are working longer hours for low wages . . . and yet almost all new income and wealth is going to the top 1 percent.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-02-01",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Mixed bag for Bernie Sanders' claim about wages, hours, income growth",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-halftrue.png",
            "ruling_slug": "half-true",
            "ruling": "Half-True"
        },
        "subject": [
            {
                "subject": "Economy",
                "subject_slug": "economy"
            },
            {
                "subject": "Income",
                "subject_slug": "income"
            },
            {
                "subject": "Workers",
                "subject_slug": "workers"
            }
        ],
        "ruling_link_text": "Timing is everything",
        "speaker": {
            "last_name": "Sanders",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Bernie_Sanders.jpg",
            "name_slug": "bernie-s",
            "first_name": "Bernie",
            "party": {
                "party": "Independent",
                "party_slug": "independent"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2016/feb/03/bernie-s/mixed-bag-bernie-sanders-claim-about-wages-hours-i/",
        "statement_context": "a political ad",
        "ruling_date": "2016-02-03T10:00:00",
        "statement": "<p>&quot;While our people work longer hours for lower wages, almost all new income goes to the top 1 percent.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-01-24",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "What Bernie Sanders, Barack Obama and Hillary Clinton have said about reparations for slavery",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlytrue.png",
            "ruling_slug": "mostly-true",
            "ruling": "Mostly True"
        },
        "subject": [
            {
                "subject": "Diversity",
                "subject_slug": "diversity"
            },
            {
                "subject": "Income",
                "subject_slug": "income"
            },
            {
                "subject": "Poverty",
                "subject_slug": "poverty"
            }
        ],
        "ruling_link_text": "Leading Dems want economic empowerment for all",
        "speaker": {
            "last_name": "Sanders",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Bernie_Sanders.jpg",
            "name_slug": "bernie-s",
            "first_name": "Bernie",
            "party": {
                "party": "Independent",
                "party_slug": "independent"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2016/jan/26/bernie-s/reparations-for-slavery-sanders-obama-clinton/",
        "statement_context": "comments on \"Meet the Press.\"",
        "ruling_date": "2016-01-26T16:06:34",
        "statement": "<p>Says his views on reparations for slavery are the same as Barack Obama&#39;s and Hillary Clinton&#39;s.&nbsp;</p>\r\n"
    },
    {
        "statement_date": "2016-01-19",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Bernie Sanders says he polls better against GOP candidates than Hillary Clinton",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-false.png",
            "ruling_slug": "false",
            "ruling": "False"
        },
        "subject": [
            {
                "subject": "Polls and Public Opinion",
                "subject_slug": "polls"
            }
        ],
        "ruling_link_text": "Cherry picking polling data",
        "speaker": {
            "last_name": "Sanders",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Bernie_Sanders.jpg",
            "name_slug": "bernie-s",
            "first_name": "Bernie",
            "party": {
                "party": "Independent",
                "party_slug": "independent"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2016/jan/26/bernie-s/bernie-sanders-says-he-polls-better-against-gop-ca/",
        "statement_context": "a town hall meeting in Underwood, Iowa.",
        "ruling_date": "2016-01-26T11:03:48",
        "statement": "<p>&quot;Almost all of the polls that have come out suggest that I am a much stronger candidate against the Republicans than is Hillary Clinton.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-01-24",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "What Donald Trump said about the Chinese inventing the 'hoax' of climate change",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlytrue.png",
            "ruling_slug": "mostly-true",
            "ruling": "Mostly True"
        },
        "subject": [
            {
                "subject": "Climate Change",
                "subject_slug": "climate-change"
            },
            {
                "subject": "Science",
                "subject_slug": "science"
            }
        ],
        "ruling_link_text": "Trump frequently called climate change a hoax",
        "speaker": {
            "last_name": "Sanders",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Bernie_Sanders.jpg",
            "name_slug": "bernie-s",
            "first_name": "Bernie",
            "party": {
                "party": "Independent",
                "party_slug": "independent"
            }
        },
        "target": [
            {
                "last_name": "Trump",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
                "name_slug": "donald-trump",
                "first_name": "Donald",
                "party": {
                    "party": "Republican",
                    "party_slug": "republican"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/jan/24/bernie-s/yes-donald-trump-really-did-tweet-climate-change-h/",
        "statement_context": "an interview on NBC's \"Meet the Press\"",
        "ruling_date": "2016-01-24T14:25:13",
        "statement": "<p>Says Donald Trump &quot;thinks that climate change is a hoax, invented by the Chinese.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-01-19",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Bernie Sanders’ NRA report card: D-minus is most recent grade",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlytrue.png",
            "ruling_slug": "mostly-true",
            "ruling": "Mostly True"
        },
        "subject": [
            {
                "subject": "Guns",
                "subject_slug": "guns"
            }
        ],
        "ruling_link_text": "A B+ claim",
        "speaker": {
            "last_name": "Sanders",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Bernie_Sanders.jpg",
            "name_slug": "bernie-s",
            "first_name": "Bernie",
            "party": {
                "party": "Independent",
                "party_slug": "independent"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2016/jan/20/bernie-s/bernie-sanders-nra-report-card-d-minus-most-recent/",
        "statement_context": "a town hall in Underwood, Iowa",
        "ruling_date": "2016-01-20T18:27:37",
        "statement": "<p>&quot;I have a D-minus voting record from the NRA.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-01-17",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Less than 10 percent of defense budget is for fighting terrorism, Sanders says",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlyfalse.png",
            "ruling_slug": "barely-true",
            "ruling": "Mostly False"
        },
        "subject": [
            {
                "subject": "Federal Budget",
                "subject_slug": "federal-budget"
            },
            {
                "subject": "Military",
                "subject_slug": "military"
            }
        ],
        "ruling_link_text": "Bernie's not looking at the bigger picture",
        "speaker": {
            "last_name": "Sanders",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Bernie_Sanders.jpg",
            "name_slug": "bernie-s",
            "first_name": "Bernie",
            "party": {
                "party": "Independent",
                "party_slug": "independent"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2016/jan/18/bernie-s/less-10-percent-defense-budget-fighting-terrorism-/",
        "statement_context": "comments during the South Carolina Democratic presidential debate",
        "ruling_date": "2016-01-18T16:17:28",
        "statement": "<p>&quot;Very little of (the defense) budget &mdash; less than 10 percent &mdash; actually goes into fighting ISIS and international terrorism.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-01-17",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Bernie Sanders exaggerates with claim that he helped write Obamacare",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlyfalse.png",
            "ruling_slug": "barely-true",
            "ruling": "Mostly False"
        },
        "subject": [
            {
                "subject": "Corrections and Updates",
                "subject_slug": "corrections-and-updates"
            },
            {
                "subject": "Health Care",
                "subject_slug": "health-care"
            }
        ],
        "ruling_link_text": "He wrote one provision",
        "speaker": {
            "last_name": "Sanders",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Bernie_Sanders.jpg",
            "name_slug": "bernie-s",
            "first_name": "Bernie",
            "party": {
                "party": "Independent",
                "party_slug": "independent"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2016/jan/18/bernie-s/fact-checking-bernie-sanders-claim-he-helped-write/",
        "statement_context": "comments during the South Carolina Democratic presidential debate",
        "ruling_date": "2016-01-18T00:51:05",
        "statement": "<p>&quot;I helped write&quot; the Affordable Care Act.</p>\r\n"
    },
    {
        "statement_date": "2016-01-17",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Hillary Clinton correct that Bernie Sanders flip-flopped on liability for gun makers, sellers",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-true.png",
            "ruling_slug": "true",
            "ruling": "True"
        },
        "subject": [
            {
                "subject": "Guns",
                "subject_slug": "guns"
            },
            {
                "subject": "Legal Issues",
                "subject_slug": "legal-issues"
            }
        ],
        "ruling_link_text": "A long path to reversal on a contentious bill",
        "speaker": {
            "last_name": "Clinton",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
            "name_slug": "hillary-clinton",
            "first_name": "Hillary",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [
            {
                "last_name": "Sanders",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Bernie_Sanders.jpg",
                "name_slug": "bernie-s",
                "first_name": "Bernie",
                "party": {
                    "party": "Independent",
                    "party_slug": "independent"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/jan/17/hillary-clinton/fact-checking-gun-manufacturer-liability-bernie/",
        "statement_context": "comments during the South Carolina Democratic presidential debate",
        "ruling_date": "2016-01-17T22:39:48",
        "statement": "<p>Says&nbsp;Bernie Sanders &quot;has reversed his position on immunity&quot; for gun manufacturers and sellers.</p>\r\n"
    },
    {
        "statement_date": "2016-01-17",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Sanders: Obama was right, Clinton was wrong on Iran",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-halftrue.png",
            "ruling_slug": "half-true",
            "ruling": "Half-True"
        },
        "subject": [
            {
                "subject": "Foreign Policy",
                "subject_slug": "foreign-policy"
            },
            {
                "subject": "Nuclear",
                "subject_slug": "nuclear"
            }
        ],
        "ruling_link_text": "Missing some nuance",
        "speaker": {
            "last_name": "Sanders",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Bernie_Sanders.jpg",
            "name_slug": "bernie-s",
            "first_name": "Bernie",
            "party": {
                "party": "Independent",
                "party_slug": "independent"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2016/jan/17/bernie-s/sanders-obama-was-right-clinton-was-wrong-iran/",
        "statement_context": "an interview on NBC's \"Meet the Press\"",
        "ruling_date": "2016-01-17T17:23:18",
        "statement": "<p>Says Hillary Clinton called Barack Obama &quot;naive&quot; for saying he was would &quot;sit down and talk to the Iranians&quot; during the 2008 Democratic primary.</p>\r\n\r\n<div>&nbsp;</div>\r\n"
    },
    {
        "statement_date": "2015-12-20",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Sanders spins the facts when he says campaign did not 'go out and take' Clinton data",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlyfalse.png",
            "ruling_slug": "barely-true",
            "ruling": "Mostly False"
        },
        "subject": [
            {
                "subject": "Elections",
                "subject_slug": "elections"
            }
        ],
        "ruling_link_text": "Searches were run",
        "speaker": {
            "last_name": "Sanders",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Bernie_Sanders.jpg",
            "name_slug": "bernie-s",
            "first_name": "Bernie",
            "party": {
                "party": "Independent",
                "party_slug": "independent"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2015/dec/22/bernie-s/Sanders-take-Clinton-voter-data/",
        "statement_context": "an interview on NBC's \"Meet the Press\".",
        "ruling_date": "2015-12-22T15:19:29",
        "statement": "<p>&quot;We didn&#39;t go out and take&quot; information from the Hillary Clinton campaign.</p>\r\n"
    },
    {
        "statement_date": "2015-12-19",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Fact-checking Sanders' claim that U.S. spends 3 times per capita what the U.K. spends on health care",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-true.png",
            "ruling_slug": "true",
            "ruling": "True"
        },
        "subject": [
            {
                "subject": "Health Care",
                "subject_slug": "health-care"
            }
        ],
        "ruling_link_text": "Sick spending",
        "speaker": {
            "last_name": "Sanders",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Bernie_Sanders.jpg",
            "name_slug": "bernie-s",
            "first_name": "Bernie",
            "party": {
                "party": "Independent",
                "party_slug": "independent"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2015/dec/20/bernie-s/fact-checking-bernie-sanders-claim-us-spends-three/",
        "statement_context": "the Dec. 19 Democratic presidential debate",
        "ruling_date": "2015-12-20T00:09:35",
        "statement": "<p>The United States spends &quot;almost three times per capita what they spend in the U.K.&quot; on health care and &quot;50 percent more than they pay in France.&quot;</p>\r\n"
    },
    {
        "statement_date": "2015-11-19",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Bernie Sanders is right: Saudi Arabia is more focused on the conflict in Yemen than fighting ISIS",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-true.png",
            "ruling_slug": "true",
            "ruling": "True"
        },
        "subject": [
            {
                "subject": "Foreign Policy",
                "subject_slug": "foreign-policy"
            },
            {
                "subject": "Terrorism",
                "subject_slug": "terrorism"
            }
        ],
        "ruling_link_text": "The Saudis see Iran, Yemen more threatening",
        "speaker": {
            "last_name": "Sanders",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Bernie_Sanders.jpg",
            "name_slug": "bernie-s",
            "first_name": "Bernie",
            "party": {
                "party": "Independent",
                "party_slug": "independent"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2015/nov/24/bernie-s/bernie-sanders-right-saudi-arabia-more-focused-con/",
        "statement_context": "a speech at Georgetown University",
        "ruling_date": "2015-11-24T17:51:18",
        "statement": "<p>&quot;Instead of fighting ISIS, (the Saudis) have focused more on a campaign to oust Iran-backed Houthi rebels in Yemen.&quot;</p>\r\n"
    },
    {
        "statement_date": "2015-11-14",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Fact-checking Bernie Sanders' comments on climate change and terrorism",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlyfalse.png",
            "ruling_slug": "barely-true",
            "ruling": "Mostly False"
        },
        "subject": [
            {
                "subject": "Climate Change",
                "subject_slug": "climate-change"
            },
            {
                "subject": "Terrorism",
                "subject_slug": "terrorism"
            }
        ],
        "ruling_link_text": "The link is indirect and complicated",
        "speaker": {
            "last_name": "Sanders",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Bernie_Sanders.jpg",
            "name_slug": "bernie-s",
            "first_name": "Bernie",
            "party": {
                "party": "Independent",
                "party_slug": "independent"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2015/nov/16/bernie-s/fact-checking-bernie-sanders-comments-climate-chan/",
        "statement_context": "a Democratic presidential debate in Des Moines, Iowa.",
        "ruling_date": "2015-11-16T16:38:41",
        "statement": "<p>Climate change is &quot;directly related&quot; to the growth of terrorism.</p>\r\n"
    },
    {
        "statement_date": "2015-11-14",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Sanders: 'Significantly less than 10%' of defense dollars go to fight terrorism",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlyfalse.png",
            "ruling_slug": "barely-true",
            "ruling": "Mostly False"
        },
        "subject": [
            {
                "subject": "Military",
                "subject_slug": "military"
            },
            {
                "subject": "Terrorism",
                "subject_slug": "terrorism"
            }
        ],
        "ruling_link_text": "Misses a whole lot of the picture",
        "speaker": {
            "last_name": "Sanders",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Bernie_Sanders.jpg",
            "name_slug": "bernie-s",
            "first_name": "Bernie",
            "party": {
                "party": "Independent",
                "party_slug": "independent"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2015/nov/15/bernie-s/sanders-significantly-less-10-defense-dollars-go-f/",
        "statement_context": "the Democratic debate in Iowa",
        "ruling_date": "2015-11-15T01:14:20",
        "statement": "<p>Out<strong> </strong>of the total U.S. military budget, &quot;significantly less than 10 percent of that money is used to fight international terrorism.&quot;</p>\r\n\r\n<div>&nbsp;</div>\r\n"
    },
    {
        "statement_date": "2015-11-14",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Bernie Sanders says U.S. is only major country that doesn't guarantee health care as a right",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-halftrue.png",
            "ruling_slug": "half-true",
            "ruling": "Half-True"
        },
        "subject": [
            {
                "subject": "Health Care",
                "subject_slug": "health-care"
            }
        ],
        "ruling_link_text": "In some places, coverage is nearly universal but not a right",
        "speaker": {
            "last_name": "Sanders",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Bernie_Sanders.jpg",
            "name_slug": "bernie-s",
            "first_name": "Bernie",
            "party": {
                "party": "Independent",
                "party_slug": "independent"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2015/nov/15/bernie-s/bernie-sanders-says-us-only-major-country-doesnt-g/",
        "statement_context": "a Democratic presidential debate in Des Moines, Iowa",
        "ruling_date": "2015-11-15T00:47:02",
        "statement": "<p>The United States is &quot;the only major country on earth that doesn&#39;t guarantee health care to all people as a right, not a privilege.&quot;</p>\r\n"
    },
    {
        "statement_date": "2015-11-14",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Income tax rates were 90 percent under Eisenhower, Sanders says",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-true.png",
            "ruling_slug": "true",
            "ruling": "True"
        },
        "subject": [
            {
                "subject": "Taxes",
                "subject_slug": "taxes"
            }
        ],
        "ruling_link_text": "The top marginal rate was 91 percent, actually",
        "speaker": {
            "last_name": "Sanders",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Bernie_Sanders.jpg",
            "name_slug": "bernie-s",
            "first_name": "Bernie",
            "party": {
                "party": "Independent",
                "party_slug": "independent"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2015/nov/15/bernie-s/income-tax-rates-were-90-percent-under-eisenhower-/",
        "statement_context": "a Democratic presidential debate in Des Moines, Iowa",
        "ruling_date": "2015-11-15T00:28:42",
        "statement": "<p>Says income tax rates under Eisenhower were as high as 90 percent.</p>\r\n"
    },
    {
        "statement_date": "2015-11-06",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Bernie Sanders says over half of black workers earn less than $15 an hour",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlytrue.png",
            "ruling_slug": "mostly-true",
            "ruling": "Mostly True"
        },
        "subject": [
            {
                "subject": "Diversity",
                "subject_slug": "diversity"
            },
            {
                "subject": "Economy",
                "subject_slug": "economy"
            },
            {
                "subject": "Jobs",
                "subject_slug": "jobs"
            }
        ],
        "ruling_link_text": "He's off by 60 cents an hour",
        "speaker": {
            "last_name": "Sanders",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Bernie_Sanders.jpg",
            "name_slug": "bernie-s",
            "first_name": "Bernie",
            "party": {
                "party": "Independent",
                "party_slug": "independent"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2015/nov/12/bernie-s/bernie-sanders-says-over-half-black-workers-earn-l/",
        "statement_context": "a Democratic presidential candidates' forum in Rock Hill, S.C.",
        "ruling_date": "2015-11-12T10:58:28",
        "statement": "<p>&quot;Over half of the black workers in this country earn less&quot; than $15 an hour.</p>\r\n"
    },
    {
        "statement_date": "2015-11-06",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Fact-checking Martin O'Malley's claim that Bernie Sanders sought primary challenger to Obama",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-halftrue.png",
            "ruling_slug": "half-true",
            "ruling": "Half-True"
        },
        "subject": [
            {
                "subject": "Candidate Biography",
                "subject_slug": "candidates-biography"
            }
        ],
        "ruling_link_text": "He liked the idea",
        "speaker": {
            "last_name": "O'Malley",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Martin_OMalley.jpg",
            "name_slug": "martin-omalley",
            "first_name": "Martin",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [
            {
                "last_name": "Sanders",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Bernie_Sanders.jpg",
                "name_slug": "bernie-s",
                "first_name": "Bernie",
                "party": {
                    "party": "Independent",
                    "party_slug": "independent"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2015/nov/10/martin-omalley/fact-checking-martin-omalleys-claim-bernie-sanders/",
        "statement_context": "the First in the South Democratic Presidential forum.",
        "ruling_date": "2015-11-10T16:06:58",
        "statement": "<p>&quot;When President Obama was running for re-election &hellip; Senator Sanders was trying to find someone to primary him.&quot;</p>\r\n"
    },
    {
        "statement_date": "2015-10-28",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Chris Christie says Bernie Sanders’s plan is 'to raise your taxes to 90 percent'",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-pantsonfire.gif",
            "ruling_slug": "pants-fire",
            "ruling": "Pants on Fire!"
        },
        "subject": [
            {
                "subject": "Taxes",
                "subject_slug": "taxes"
            }
        ],
        "ruling_link_text": "Same claim, another pair of pants is ablaze",
        "speaker": {
            "last_name": "Christie",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/christie.jpg",
            "name_slug": "chris-christie",
            "first_name": "Chris",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [
            {
                "last_name": "Sanders",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Bernie_Sanders.jpg",
                "name_slug": "bernie-s",
                "first_name": "Bernie",
                "party": {
                    "party": "Independent",
                    "party_slug": "independent"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2015/oct/28/chris-christie/chris-christie-says-bernie-sanderss-plan-raise-you/",
        "statement_context": "a Republican presidential debate in Boulder, Colo.",
        "ruling_date": "2015-10-28T21:28:36",
        "statement": "<p>Bernie Sanders&rsquo;s plan is &quot;to raise your taxes to 90 percent.&quot;</p>\r\n"
    },
    {
        "statement_date": "2015-10-15",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Internet graphic says Bernie Sanders slammed antidepressants, but quote is actually the Unabomber's",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-pantsonfire.gif",
            "ruling_slug": "pants-fire",
            "ruling": "Pants on Fire!"
        },
        "subject": [
            {
                "subject": "Health Care",
                "subject_slug": "health-care"
            }
        ],
        "ruling_link_text": "The Unabomber, not Sanders, wrote this",
        "speaker": {
            "last_name": "Viral image",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Success-Kid.jpg",
            "name_slug": "viral-image",
            "first_name": "",
            "party": {
                "party": "None",
                "party_slug": "none"
            }
        },
        "target": [
            {
                "last_name": "Sanders",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Bernie_Sanders.jpg",
                "name_slug": "bernie-s",
                "first_name": "Bernie",
                "party": {
                    "party": "Independent",
                    "party_slug": "independent"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2015/oct/16/viral-image/internet-graphic-says-bernie-sanders-slammed-antid/",
        "statement_context": "a graphic circulating on the Internet",
        "ruling_date": "2015-10-16T14:17:29",
        "statement": "<p>Says Bernie Sanders once said, &quot;Instead of removing the conditions that make people depressed, modern society gives them antidepressant drugs.&quot;</p>\r\n"
    },
    {
        "statement_date": "2015-10-13",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Bernie Sanders says people are getting prison sentences for smoking marijuana",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlyfalse.png",
            "ruling_slug": "barely-true",
            "ruling": "Mostly False"
        },
        "subject": [
            {
                "subject": "Criminal Justice",
                "subject_slug": "criminal-justice"
            },
            {
                "subject": "Drugs",
                "subject_slug": "drugs"
            },
            {
                "subject": "Legal Issues",
                "subject_slug": "legal-issues"
            },
            {
                "subject": "Marijuana",
                "subject_slug": "marijuana"
            }
        ],
        "ruling_link_text": "By itself, a joint doesn't get you into the joint",
        "speaker": {
            "last_name": "Sanders",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Bernie_Sanders.jpg",
            "name_slug": "bernie-s",
            "first_name": "Bernie",
            "party": {
                "party": "Independent",
                "party_slug": "independent"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2015/oct/14/bernie-s/bernie-sanders-says-people-are-getting-prison-sent/",
        "statement_context": "a Democratic presidential debate in Las Vegas",
        "ruling_date": "2015-10-14T16:06:21",
        "statement": "<p>&quot;We are imprisoning or giving jail sentences to young people who are smoking marijuana.&quot;</p>\r\n"
    },
    {
        "statement_date": "2015-10-14",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Bernie Sanders says 'every other major country' has family paid leave except United States",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlytrue.png",
            "ruling_slug": "mostly-true",
            "ruling": "Mostly True"
        },
        "subject": [
            {
                "subject": "Families",
                "subject_slug": "families"
            },
            {
                "subject": "Women",
                "subject_slug": "women"
            },
            {
                "subject": "Workers",
                "subject_slug": "workers"
            }
        ],
        "ruling_link_text": "U.S. is the outlier",
        "speaker": {
            "last_name": "Sanders",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Bernie_Sanders.jpg",
            "name_slug": "bernie-s",
            "first_name": "Bernie",
            "party": {
                "party": "Independent",
                "party_slug": "independent"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2015/oct/14/bernie-s/bernie-sanders-says-every-other-major-country-has-/",
        "statement_context": "the CNN Democratic presidential debate in Las Vegas",
        "ruling_date": "2015-10-14T14:21:36",
        "statement": "<p>&quot;Every other major country&quot; has family paid leave.</p>\r\n"
    },
    {
        "statement_date": "2015-10-13",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Bernie Sanders: The United States has 'more people in jail than any other country on Earth'",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlytrue.png",
            "ruling_slug": "mostly-true",
            "ruling": "Mostly True"
        },
        "subject": [
            {
                "subject": "Criminal Justice",
                "subject_slug": "criminal-justice"
            }
        ],
        "ruling_link_text": "The U.S. has a lock on this",
        "speaker": {
            "last_name": "Sanders",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Bernie_Sanders.jpg",
            "name_slug": "bernie-s",
            "first_name": "Bernie",
            "party": {
                "party": "Independent",
                "party_slug": "independent"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2015/oct/13/bernie-s/bernie-sanders-united-states-has-more-people-jail-/",
        "statement_context": "the first Democratic debate",
        "ruling_date": "2015-10-13T23:49:30",
        "statement": "<p>&quot;Today in America, we have more people in jail than any other country on Earth.&quot;</p>\r\n"
    },
    {
        "statement_date": "2015-10-13",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "In debate, Bernie Sanders says African-American youth unemployment is 51%, and 36% for Hispanics",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-halftrue.png",
            "ruling_slug": "half-true",
            "ruling": "Half-True"
        },
        "subject": [
            {
                "subject": "Diversity",
                "subject_slug": "diversity"
            },
            {
                "subject": "Economy",
                "subject_slug": "economy"
            },
            {
                "subject": "Jobs",
                "subject_slug": "jobs"
            }
        ],
        "ruling_link_text": "Not by the official statistics",
        "speaker": {
            "last_name": "Sanders",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Bernie_Sanders.jpg",
            "name_slug": "bernie-s",
            "first_name": "Bernie",
            "party": {
                "party": "Independent",
                "party_slug": "independent"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2015/oct/13/bernie-s/debate-bernie-sanders-says-african-american-youth-/",
        "statement_context": "a Democratic presidential debate in Las Vegas",
        "ruling_date": "2015-10-13T22:23:47",
        "statement": "<p>&quot;African-American youth unemployment is 51 percent. Hispanic youth unemployment is 36 percent.&quot;</p>\r\n"
    },
    {
        "statement_date": "2015-09-28",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Is Bernie Sanders the only presidential candidate without a super PAC?",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlytrue.png",
            "ruling_slug": "mostly-true",
            "ruling": "Mostly True"
        },
        "subject": [
            {
                "subject": "Campaign Finance",
                "subject_slug": "campaign-finance"
            }
        ],
        "ruling_link_text": "We made a super chart of super PACs",
        "speaker": {
            "last_name": "Sanders",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Bernie_Sanders.jpg",
            "name_slug": "bernie-s",
            "first_name": "Bernie",
            "party": {
                "party": "Independent",
                "party_slug": "independent"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2015/sep/30/bernie-s/bernie-sanders-only-presidential-candidates-withou/",
        "statement_context": "comments on Twitter.",
        "ruling_date": "2015-09-30T16:35:34",
        "statement": "<p>&quot;Unlike virtually every other campaign, we don&#39;t have a super PAC.&quot;</p>\r\n"
    },
    {
        "statement_date": "2015-09-22",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Bernie Sanders says federal government, not McDonald's or Walmart, is biggest low-wage employer",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlyfalse.png",
            "ruling_slug": "barely-true",
            "ruling": "Mostly False"
        },
        "subject": [
            {
                "subject": "Corporations",
                "subject_slug": "corporations"
            },
            {
                "subject": "Federal Budget",
                "subject_slug": "federal-budget"
            },
            {
                "subject": "Jobs",
                "subject_slug": "jobs"
            }
        ],
        "ruling_link_text": "Not on the U.S. payroll",
        "speaker": {
            "last_name": "Sanders",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Bernie_Sanders.jpg",
            "name_slug": "bernie-s",
            "first_name": "Bernie",
            "party": {
                "party": "Independent",
                "party_slug": "independent"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2015/sep/29/bernie-s/bernie-sanders-says-federal-government-not-mcdonal/",
        "statement_context": "a tweet",
        "ruling_date": "2015-09-29T13:39:45",
        "statement": "<p>The largest low-wage employer &quot;is not McDonalds or Walmart but the U.S. government.&quot;</p>\r\n\r\n<div>&nbsp;</div>\r\n"
    },
    {
        "statement_date": "2015-09-08",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Web graphic says Bernie Sanders doesn't support compulsory K-12 education",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-false.png",
            "ruling_slug": "false",
            "ruling": "False"
        },
        "subject": [
            {
                "subject": "Education",
                "subject_slug": "education"
            }
        ],
        "ruling_link_text": "That was more than four decades ago",
        "speaker": {
            "last_name": "Viral image",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Success-Kid.jpg",
            "name_slug": "viral-image",
            "first_name": "",
            "party": {
                "party": "None",
                "party_slug": "none"
            }
        },
        "target": [
            {
                "last_name": "Sanders",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Bernie_Sanders.jpg",
                "name_slug": "bernie-s",
                "first_name": "Bernie",
                "party": {
                    "party": "Independent",
                    "party_slug": "independent"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2015/sep/21/viral-image/web-graphic-says-bernie-sanders-doesnt-support-com/",
        "statement_context": "a shareable graphic on the Web",
        "ruling_date": "2015-09-21T18:00:00",
        "statement": "<p>Says Bernie Sanders opposes &quot;requiring all children to have a K-12 education.&quot;</p>\r\n"
    },
    {
        "statement_date": "2015-08-30",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Bernie Sanders: 'Saudi Arabia has the third-largest military budget in the entire world'",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-true.png",
            "ruling_slug": "true",
            "ruling": "True"
        },
        "subject": [
            {
                "subject": "Military",
                "subject_slug": "military"
            }
        ],
        "ruling_link_text": "Passed Russia in one calculation in 2014",
        "speaker": {
            "last_name": "Sanders",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Bernie_Sanders.jpg",
            "name_slug": "bernie-s",
            "first_name": "Bernie",
            "party": {
                "party": "Independent",
                "party_slug": "independent"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2015/aug/30/bernie-s/bernie-sanders-saudi-arabia-has-third-largest-mili/",
        "statement_context": "comments on ABC's \"This Week\"",
        "ruling_date": "2015-08-30T15:04:17",
        "statement": "<p>&quot;Saudi Arabia has the third-largest military budget in the entire world.&quot;</p>\r\n"
    },
    {
        "statement_date": "2015-08-16",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Bernie Sanders repeats flawed claim about U.S. health care spending compared to other countries",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-false.png",
            "ruling_slug": "false",
            "ruling": "False"
        },
        "subject": [
            {
                "subject": "Health Care",
                "subject_slug": "health-care"
            }
        ],
        "ruling_link_text": "Not true now (or in 2009)",
        "speaker": {
            "last_name": "Sanders",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Bernie_Sanders.jpg",
            "name_slug": "bernie-s",
            "first_name": "Bernie",
            "party": {
                "party": "Independent",
                "party_slug": "independent"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2015/aug/16/bernie-s/bernie-sanders-repeats-flawed-claim-about-us-healt/",
        "statement_context": "an interview on \"Meet the Press\"",
        "ruling_date": "2015-08-16T18:22:23",
        "statement": "<p>&quot;We spend almost twice as much per capita on health care as do the people of any other country.&quot;</p>\r\n"
    },
    {
        "statement_date": "2015-07-06",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Bernie Sanders says 'real unemployment' rate for African American youth is 51 percent",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlytrue.png",
            "ruling_slug": "mostly-true",
            "ruling": "Mostly True"
        },
        "subject": [
            {
                "subject": "Diversity",
                "subject_slug": "diversity"
            },
            {
                "subject": "Economy",
                "subject_slug": "economy"
            },
            {
                "subject": "Jobs",
                "subject_slug": "jobs"
            }
        ],
        "ruling_link_text": "An unconventional cut at the data, but basically accurate",
        "speaker": {
            "last_name": "Sanders",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Bernie_Sanders.jpg",
            "name_slug": "bernie-s",
            "first_name": "Bernie",
            "party": {
                "party": "Independent",
                "party_slug": "independent"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2015/jul/13/bernie-s/bernie-sanders-says-real-unemployment-rate-african/",
        "statement_context": "a rally in Portland, Maine",
        "ruling_date": "2015-07-13T15:39:42",
        "statement": "<p>For African-Americans between the ages of 17 and 20, &quot;the real unemployment rate &hellip; is 51 percent.&quot;</p>\r\n"
    },
    {
        "statement_date": "2015-06-25",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Did Bernie Sanders vote against background checks and waiting periods for gun purchases?",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlytrue.png",
            "ruling_slug": "mostly-true",
            "ruling": "Mostly True"
        },
        "subject": [
            {
                "subject": "Guns",
                "subject_slug": "guns"
            },
            {
                "subject": "Voting Record",
                "subject_slug": "voting-record"
            }
        ],
        "ruling_link_text": "Yes, but he's not a \"gun nut\"",
        "speaker": {
            "last_name": "Generation Forward PAC",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Logo400.png",
            "name_slug": "generation-forward-pac",
            "first_name": "",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [
            {
                "last_name": "Sanders",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Bernie_Sanders.jpg",
                "name_slug": "bernie-s",
                "first_name": "Bernie",
                "party": {
                    "party": "Independent",
                    "party_slug": "independent"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2015/jul/10/generation-forward-pac/did-bernie-sanders-vote-against-background-checks-/",
        "statement_context": "an attack ad.",
        "ruling_date": "2015-07-10T10:00:00",
        "statement": "<p>&quot;Bernie Sanders voted against the Brady Bill -- background checks and waiting periods.&quot;</p>\r\n"
    },
    {
        "statement_date": "2015-07-05",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Sanders: Child poverty is higher in America than any other major country",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlyfalse.png",
            "ruling_slug": "barely-true",
            "ruling": "Mostly False"
        },
        "subject": [
            {
                "subject": "Poverty",
                "subject_slug": "poverty"
            }
        ],
        "ruling_link_text": "Israel and Mexico have higher rates",
        "speaker": {
            "last_name": "Sanders",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Bernie_Sanders.jpg",
            "name_slug": "bernie-s",
            "first_name": "Bernie",
            "party": {
                "party": "Independent",
                "party_slug": "independent"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2015/jul/08/bernie-s/sanders-child-poverty-higher-america-any-other-maj/",
        "statement_context": "an interview on CNN",
        "ruling_date": "2015-07-08T16:53:14",
        "statement": "<p>&quot;We have the highest rate of childhood poverty of any major country on Earth.&quot;</p>\r\n"
    },
    {
        "statement_date": "2015-07-06",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Meme says Hillary Clinton's top donors are banks and corporations, Bernie Sanders' are labor unions",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlytrue.png",
            "ruling_slug": "mostly-true",
            "ruling": "Mostly True"
        },
        "subject": [
            {
                "subject": "Campaign Finance",
                "subject_slug": "campaign-finance"
            }
        ],
        "ruling_link_text": "Meme tracks campaign-finance data over years",
        "speaker": {
            "last_name": "Facebook posts",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Facebook_icon_1.jpg",
            "name_slug": "facebook-posts",
            "first_name": "",
            "party": {
                "party": "None",
                "party_slug": "none"
            }
        },
        "target": [
            {
                "last_name": "Clinton",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
                "name_slug": "hillary-clinton",
                "first_name": "Hillary",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            },
            {
                "last_name": "Sanders",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Bernie_Sanders.jpg",
                "name_slug": "bernie-s",
                "first_name": "Bernie",
                "party": {
                    "party": "Independent",
                    "party_slug": "independent"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2015/jul/07/facebook-posts/meme-says-hillary-clintons-top-donors-are-banks-an/",
        "statement_context": "a meme on social media",
        "ruling_date": "2015-07-07T10:51:33",
        "statement": "<p>Says Hillary Clinton&rsquo;s top 10 donors are mainly &quot;banks, corporations and media,&quot; while Bernie Sanders&rsquo; top 10 donors are labor unions.</p>\r\n"
    },
    {
        "statement_date": "2015-06-28",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Bernie Sanders: U.S. 'only major country' that doesn't guarantee right to health care",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-halftrue.png",
            "ruling_slug": "half-true",
            "ruling": "Half-True"
        },
        "subject": [
            {
                "subject": "Health Care",
                "subject_slug": "health-care"
            }
        ],
        "ruling_link_text": "A garbled message",
        "speaker": {
            "last_name": "Sanders",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Bernie_Sanders.jpg",
            "name_slug": "bernie-s",
            "first_name": "Bernie",
            "party": {
                "party": "Independent",
                "party_slug": "independent"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2015/jun/29/bernie-s/bernie-sanders-us-only-major-country-doesnt-guaran/",
        "statement_context": "comments on ABC's \"This Week\"",
        "ruling_date": "2015-06-29T17:49:44",
        "statement": "<p>&quot;We are the only major country on Earth that doesn&#39;t guarantee health care to all people as a right.&quot;</p>\r\n"
    },
    {
        "statement_date": "2015-06-04",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Bernie Sanders says income inequality is widest since the 1920s",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlytrue.png",
            "ruling_slug": "mostly-true",
            "ruling": "Mostly True"
        },
        "subject": [
            {
                "subject": "Economy",
                "subject_slug": "economy"
            },
            {
                "subject": "Income",
                "subject_slug": "income"
            }
        ],
        "ruling_link_text": "For 2012, and using one method",
        "speaker": {
            "last_name": "Sanders",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Bernie_Sanders.jpg",
            "name_slug": "bernie-s",
            "first_name": "Bernie",
            "party": {
                "party": "Independent",
                "party_slug": "independent"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2015/jun/18/bernie-s/bernie-sanders-says-income-inequality-widest-1920s/",
        "statement_context": "a post on Twitter",
        "ruling_date": "2015-06-18T10:28:26",
        "statement": "<p>&quot;The gap between the very rich and everyone else in America is wider today than at any time since the 1920s.&quot;</p>\r\n"
    },
    {
        "statement_date": "2015-06-11",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Bernie Sanders says a black male baby born today has 1-in-3 chance of prison",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlytrue.png",
            "ruling_slug": "mostly-true",
            "ruling": "Mostly True"
        },
        "subject": [
            {
                "subject": "Crime",
                "subject_slug": "crime"
            },
            {
                "subject": "Criminal Justice",
                "subject_slug": "criminal-justice"
            },
            {
                "subject": "Diversity",
                "subject_slug": "diversity"
            }
        ],
        "ruling_link_text": "Underlying data is 14 years old",
        "speaker": {
            "last_name": "Sanders",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Bernie_Sanders.jpg",
            "name_slug": "bernie-s",
            "first_name": "Bernie",
            "party": {
                "party": "Independent",
                "party_slug": "independent"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2015/jun/15/bernie-s/bernie-sanders-says-black-male-baby-born-today-has/",
        "statement_context": "an interview on PBS",
        "ruling_date": "2015-06-15T17:13:57",
        "statement": "<p>&quot;A black male baby born today, if we do not change the system, stands a one-in-three chance (of) ending up in jail.&quot;</p>\r\n"
    },
    {
        "statement_date": "2015-04-19",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Bernie Sanders says 99 percent of 'new' income is going to top 1 percent",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlytrue.png",
            "ruling_slug": "mostly-true",
            "ruling": "Mostly True"
        },
        "subject": [
            {
                "subject": "Income",
                "subject_slug": "income"
            },
            {
                "subject": "Wealth",
                "subject_slug": "wealth"
            }
        ],
        "ruling_link_text": "The 1% is raking in the recovery",
        "speaker": {
            "last_name": "Sanders",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Bernie_Sanders.jpg",
            "name_slug": "bernie-s",
            "first_name": "Bernie",
            "party": {
                "party": "Independent",
                "party_slug": "independent"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2015/apr/19/bernie-s/bernie-sanders-says-99-percent-new-income-going-to/",
        "statement_context": "comments on \"Fox News Sunday\"",
        "ruling_date": "2015-04-19T18:55:37",
        "statement": "<p>&nbsp;&quot;99 percent of all new income today (is) going to the top 1 percent.&quot;</p>\r\n"
    },
    {
        "statement_date": "2015-03-31",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Checking Bernie Sanders on Americans' low voter-turnout rates",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-halftrue.png",
            "ruling_slug": "half-true",
            "ruling": "Half-True"
        },
        "subject": [
            {
                "subject": "Elections",
                "subject_slug": "elections"
            }
        ],
        "ruling_link_text": "He's right that voter turnout is weak",
        "speaker": {
            "last_name": "Sanders",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Bernie_Sanders.jpg",
            "name_slug": "bernie-s",
            "first_name": "Bernie",
            "party": {
                "party": "Independent",
                "party_slug": "independent"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2015/apr/02/bernie-s/checking-bernie-sanders-americans-low-voter-turnou/",
        "statement_context": "a town hall in Austin, Texas",
        "ruling_date": "2015-04-02T16:30:48",
        "statement": "<p>&quot;In this last election in November, ... 63 percent of the American people chose not to vote, ... 80 percent of young people, (and) 75 percent of low-income workers chose not to vote.&quot;</p>\r\n"
    },
    {
        "statement_date": "2015-03-23",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Bernie Sanders: GOP budget does not ask ultra-wealthy to contribute 'one penny' to deficit reduction",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-halftrue.png",
            "ruling_slug": "half-true",
            "ruling": "Half-True"
        },
        "subject": [
            {
                "subject": "Federal Budget",
                "subject_slug": "federal-budget"
            },
            {
                "subject": "Taxes",
                "subject_slug": "taxes"
            },
            {
                "subject": "Wealth",
                "subject_slug": "wealth"
            }
        ],
        "ruling_link_text": "It's not that specific",
        "speaker": {
            "last_name": "Sanders",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Bernie_Sanders.jpg",
            "name_slug": "bernie-s",
            "first_name": "Bernie",
            "party": {
                "party": "Independent",
                "party_slug": "independent"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2015/mar/27/bernie-s/bernie-sanders-gop-budget-does-not-ask-ultra-wealt/",
        "statement_context": "a Tweet",
        "ruling_date": "2015-03-27T11:08:27",
        "statement": "<p>&quot;From 2013-2015, the richest 14 Americans increased their net wealth by more than $157 billion, yet the Republican budget would not require these Americans to contribute one penny to deficit reduction.&quot;</p>\r\n"
    },
    {
        "statement_date": "2014-12-05",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Bernie Sanders says U.S. was 1st in college degrees in 1990, but now ranks 12th in world",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlytrue.png",
            "ruling_slug": "mostly-true",
            "ruling": "Mostly True"
        },
        "subject": [
            {
                "subject": "Education",
                "subject_slug": "education"
            }
        ],
        "ruling_link_text": "He gets the general trend right",
        "speaker": {
            "last_name": "Sanders",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Bernie_Sanders.jpg",
            "name_slug": "bernie-s",
            "first_name": "Bernie",
            "party": {
                "party": "Independent",
                "party_slug": "independent"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2014/dec/05/bernie-s/bernie-sanders-says-us-was-1st-college-degrees-199/",
        "statement_context": "a meme on social media",
        "ruling_date": "2014-12-05T17:07:48",
        "statement": "<p>&quot;In 1990, the U.S. led the world in the percentage of 25-34 year olds with college degrees. Today we are in 12th place.&quot;</p>\r\n"
    },
    {
        "statement_date": "2014-08-27",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Bernie Sanders says tax share paid by corporations has fallen from 33% to 9% since 1952",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlytrue.png",
            "ruling_slug": "mostly-true",
            "ruling": "Mostly True"
        },
        "subject": [
            {
                "subject": "Corporations",
                "subject_slug": "corporations"
            },
            {
                "subject": "Taxes",
                "subject_slug": "taxes"
            }
        ],
        "ruling_link_text": "A whopper of a decline",
        "speaker": {
            "last_name": "Sanders",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Bernie_Sanders.jpg",
            "name_slug": "bernie-s",
            "first_name": "Bernie",
            "party": {
                "party": "Independent",
                "party_slug": "independent"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2014/aug/28/bernie-s/bernie-sanders-says-tax-share-paid-corporations-ha/",
        "statement_context": "a meme on social media",
        "ruling_date": "2014-08-28T17:16:41",
        "statement": "<p>&quot;In 1952, the corporate income tax accounted for 33 percent of all federal tax revenue. Today, despite record-breaking profits, corporate taxes bring in less than 9 percent.&quot;</p>\r\n"
    },
    {
        "statement_date": "2013-09-25",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Sen. Bernie Sanders says Texas Republicans want to abolish Social Security, V.A. health care ",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-false.png",
            "ruling_slug": "false",
            "ruling": "False"
        },
        "subject": [
            {
                "subject": "Social Security",
                "subject_slug": "social-security"
            },
            {
                "subject": "Veterans",
                "subject_slug": "veterans"
            }
        ],
        "ruling_link_text": "Privatize, not abolish",
        "speaker": {
            "last_name": "Sanders",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Bernie_Sanders.jpg",
            "name_slug": "bernie-s",
            "first_name": "Bernie",
            "party": {
                "party": "Independent",
                "party_slug": "independent"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2013/oct/02/bernie-s/sen-bernie-sanders-says-texas-republicans-want-abo/",
        "statement_context": "an MSNBC interview",
        "ruling_date": "2013-10-02T09:44:23",
        "statement": "<p>&quot;(Texas Republicans) believe in abolishing Social Security, abolishing V.A. health care.&quot;</p>\r\n"
    }
];
bernie=bernie.filter(function(item){return speakerCheck(item, "bernie-s");});

var hillary=[
    {
        "statement_date": "2017-10-02",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "No, gun silencers wouldn't have worsened the Las Vegas shooting",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-false.png",
            "ruling_slug": "false",
            "ruling": "False"
        },
        "subject": [
            {
                "subject": "Guns",
                "subject_slug": "guns"
            }
        ],
        "ruling_link_text": "Doesn't apply to this case",
        "speaker": {
            "last_name": "Clinton",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
            "name_slug": "hillary-clinton",
            "first_name": "Hillary",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2017/oct/04/hillary-clinton/no-gun-silencers-wouldnt-have-worsened-las-vegas-s/",
        "statement_context": "a tweet",
        "ruling_date": "2017-10-04T11:32:41",
        "statement": "<p>&quot;The crowd (in Las Vegas) fled at the sound of gunshots. Imagine the deaths if the shooter had a silencer ...&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-11-12",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "No, Donald Trump is not beating Hillary Clinton in the popular vote",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-pantsonfire.gif",
            "ruling_slug": "pants-fire",
            "ruling": "Pants on Fire!"
        },
        "subject": [
            {
                "subject": "Elections",
                "subject_slug": "elections"
            }
        ],
        "ruling_link_text": "Electoral vote yes, popular vote no",
        "speaker": {
            "last_name": "Bloggers",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/mugs/mug-bloggers.jpg",
            "name_slug": "blog-posting",
            "first_name": "",
            "party": {
                "party": "None",
                "party_slug": "none"
            }
        },
        "target": [
            {
                "last_name": "Clinton",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
                "name_slug": "hillary-clinton",
                "first_name": "Hillary",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/nov/14/blog-posting/no-donald-trump-not-beating-hillary-clinton-popula/",
        "statement_context": "web posts",
        "ruling_date": "2016-11-14T16:57:31",
        "statement": "<p>&quot;Final election 2016 numbers: Trump won&quot; the popular vote.</p>\r\n"
    },
    {
        "statement_date": "2016-11-04",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Would 51% of single parents see taxes rise under Donald Trump's tax plan?",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-true.png",
            "ruling_slug": "true",
            "ruling": "True"
        },
        "subject": [
            {
                "subject": "Taxes",
                "subject_slug": "taxes"
            }
        ],
        "ruling_link_text": "Through tweaks to tax system",
        "speaker": {
            "last_name": "Clinton",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
            "name_slug": "hillary-clinton",
            "first_name": "Hillary",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [
            {
                "last_name": "Trump",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
                "name_slug": "donald-trump",
                "first_name": "Donald",
                "party": {
                    "party": "Republican",
                    "party_slug": "republican"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/nov/06/hillary-clinton/would-51-single-parents-see-taxes-rise-under-donal/",
        "statement_context": "a campaign rally",
        "ruling_date": "2016-11-06T17:16:01",
        "statement": "<div>Under Donald Trump&#39;s tax plan, &quot;51 percent of single parents would see their taxes go up.&quot;</div>\r\n\r\n<div>&nbsp;</div>\r\n"
    },
    {
        "statement_date": "2016-11-02",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Hillary Clinton: Donald Trump says 'organized crime runs wild on reservations'",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-halftrue.png",
            "ruling_slug": "half-true",
            "ruling": "Half-True"
        },
        "subject": [
            {
                "subject": "Crime",
                "subject_slug": "crime"
            },
            {
                "subject": "Diversity",
                "subject_slug": "diversity"
            },
            {
                "subject": "Gambling",
                "subject_slug": "gambling"
            }
        ],
        "ruling_link_text": "23 years ago",
        "speaker": {
            "last_name": "Clinton",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
            "name_slug": "hillary-clinton",
            "first_name": "Hillary",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [
            {
                "last_name": "Trump",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
                "name_slug": "donald-trump",
                "first_name": "Donald",
                "party": {
                    "party": "Republican",
                    "party_slug": "republican"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/nov/04/hillary-clinton/hillary-clinton-donald-trump-says-organized-crime-/",
        "statement_context": "a rally in Tempe, Ariz.",
        "ruling_date": "2016-11-04T14:41:01",
        "statement": "<p>Says Donald Trump &quot;says organized crime runs wild on reservations.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-11-01",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Evidence ridiculously thin for sensational claim of huge underground Clinton sex network",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-pantsonfire.gif",
            "ruling_slug": "pants-fire",
            "ruling": "Pants on Fire!"
        },
        "subject": [
            {
                "subject": "Candidate Biography",
                "subject_slug": "candidates-biography"
            },
            {
                "subject": "Children",
                "subject_slug": "children"
            },
            {
                "subject": "Congress",
                "subject_slug": "congress"
            },
            {
                "subject": "Criminal Justice",
                "subject_slug": "criminal-justice"
            },
            {
                "subject": "History",
                "subject_slug": "history"
            },
            {
                "subject": "Human Rights",
                "subject_slug": "human-rights"
            },
            {
                "subject": "Women",
                "subject_slug": "women"
            }
        ],
        "ruling_link_text": "Ridiculous without evidence",
        "speaker": {
            "last_name": "Conservative Daily Post",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/politifact-mugs-mug-independentgroup__________________3.jpg",
            "name_slug": "conservative-daily-post",
            "first_name": "",
            "party": {
                "party": "Organization",
                "party_slug": "organization"
            }
        },
        "target": [
            {
                "last_name": "Clinton",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
                "name_slug": "hillary-clinton",
                "first_name": "Hillary",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            },
            {
                "last_name": "Clinton",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/mugs/mug-billclinton.jpg",
                "name_slug": "bill-clinton",
                "first_name": "Bill",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/nov/04/conservative-daily-post/evidence-ridiculously-thin-sensational-claim-huge-/",
        "statement_context": "a posting on the Internet",
        "ruling_date": "2016-11-04T11:52:02",
        "statement": "<p>&quot;FBI confirms evidence of huge underground Clinton sex network.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-11-02",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Hillary Clinton says Donald Trump 'wants to undo marriage equality'",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-true.png",
            "ruling_slug": "true",
            "ruling": "True"
        },
        "subject": [
            {
                "subject": "Gays and Lesbians",
                "subject_slug": "gays-and-lesbians"
            },
            {
                "subject": "Marriage",
                "subject_slug": "marriage"
            }
        ],
        "ruling_link_text": "Wants judges he thinks \"maybe could change things.\"",
        "speaker": {
            "last_name": "Clinton",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
            "name_slug": "hillary-clinton",
            "first_name": "Hillary",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2016/nov/03/hillary-clinton/hillary-clinton-says-donald-trump-wants-undo-marri/",
        "statement_context": "a campaign speech",
        "ruling_date": "2016-11-03T15:38:00",
        "statement": "<p>Says Donald Trump &quot;wants to undo marriage equality.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-11-01",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Hillary Clinton says Donald Trump doesn't believe in equal pay",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-halftrue.png",
            "ruling_slug": "half-true",
            "ruling": "Half-True"
        },
        "subject": [
            {
                "subject": "Economy",
                "subject_slug": "economy"
            },
            {
                "subject": "Women",
                "subject_slug": "women"
            }
        ],
        "ruling_link_text": "Says performance, not gender, should determine pay",
        "speaker": {
            "last_name": "Clinton",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
            "name_slug": "hillary-clinton",
            "first_name": "Hillary",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [
            {
                "last_name": "Trump",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
                "name_slug": "donald-trump",
                "first_name": "Donald",
                "party": {
                    "party": "Republican",
                    "party_slug": "republican"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/nov/02/hillary-clinton/hillary-clinton-says-donald-trump-doesnt-believe-e/",
        "statement_context": "a campaign rally in Dade City, Fla.",
        "ruling_date": "2016-11-02T18:20:49",
        "statement": "<p>Says Donald Trump &quot;doesn&#39;t believe in equal pay.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-10-31",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Trump said he would require schools to allow guns, Clinton says",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-true.png",
            "ruling_slug": "true",
            "ruling": "True"
        },
        "subject": [
            {
                "subject": "Guns",
                "subject_slug": "guns"
            }
        ],
        "ruling_link_text": "He said it",
        "speaker": {
            "last_name": "Clinton",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
            "name_slug": "hillary-clinton",
            "first_name": "Hillary",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [
            {
                "last_name": "Trump",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
                "name_slug": "donald-trump",
                "first_name": "Donald",
                "party": {
                    "party": "Republican",
                    "party_slug": "republican"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/nov/01/hillary-clinton/trump-said-he-would-require-schools-allow-guns-cli/",
        "statement_context": "a rally in Cincinnati",
        "ruling_date": "2016-11-01T16:07:03",
        "statement": "<p>Says of Donald Trump, &quot;He even said, on his very first day in office, he would require every school in America to let people carry guns into our classrooms.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-10-31",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Fact-checking Donald Trump on FBI probe into Clinton emails",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-halftrue.png",
            "ruling_slug": "half-true",
            "ruling": "Half-True"
        },
        "subject": [
            {
                "subject": "Ethics",
                "subject_slug": "ethics"
            },
            {
                "subject": "Transparency",
                "subject_slug": "transparency"
            }
        ],
        "ruling_link_text": "Not all 650K emails are Clinton related",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [
            {
                "last_name": "Clinton",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
                "name_slug": "hillary-clinton",
                "first_name": "Hillary",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/nov/01/donald-trump/fact-checking-donald-trump-fbi-probe-clinton-email/",
        "statement_context": "a campaign rally ",
        "ruling_date": "2016-11-01T16:03:28",
        "statement": "<p>&quot;The FBI has reopened its investigation into Hillary Clinton ... and discovered another 650,000 emails.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-10-30",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Pants on Fire! Trump says Clinton would let 650 million people into the U.S., in one week",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-pantsonfire.gif",
            "ruling_slug": "pants-fire",
            "ruling": "Pants on Fire!"
        },
        "subject": [
            {
                "subject": "Homeland Security",
                "subject_slug": "homeland-security"
            },
            {
                "subject": "Immigration",
                "subject_slug": "immigration"
            }
        ],
        "ruling_link_text": "Preposterous",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [
            {
                "last_name": "Clinton",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
                "name_slug": "hillary-clinton",
                "first_name": "Hillary",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/oct/31/donald-trump/trump-says-clinton-would-bring-650-million-people-/",
        "statement_context": "a campaign rally in Albuquerque",
        "ruling_date": "2016-10-31T15:45:44",
        "statement": "<p>Says Hillary Clinton &quot;wants to let people just pour in. You could have 650 million people pour in and we do nothing about it. Think of it. That&rsquo;s what could happen. You triple the size of our country in one week.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-10-28",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Clinton wrongly says FBI director sent letter about emails 'only' to Republicans",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-false.png",
            "ruling_slug": "false",
            "ruling": "False"
        },
        "subject": [
            {
                "subject": "Congress",
                "subject_slug": "congress"
            }
        ],
        "ruling_link_text": "Check out the back page",
        "speaker": {
            "last_name": "Clinton",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
            "name_slug": "hillary-clinton",
            "first_name": "Hillary",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2016/oct/30/hillary-clinton/clinton-wrongly-says-fbi-director-sent-letter-abou/",
        "statement_context": "a press conference",
        "ruling_date": "2016-10-30T11:55:44",
        "statement": "<p>Says FBI Director James Comey&rsquo;s letter about new developments in the investigation into her emails &quot;only&quot; went &quot;to Republican members of the House.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-10-27",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Clinton says kids are healthier",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-halftrue.png",
            "ruling_slug": "half-true",
            "ruling": "Half-True"
        },
        "subject": [
            {
                "subject": "Children",
                "subject_slug": "children"
            },
            {
                "subject": "Public Health",
                "subject_slug": "public-health"
            }
        ],
        "ruling_link_text": "Mixed results",
        "speaker": {
            "last_name": "Clinton",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
            "name_slug": "hillary-clinton",
            "first_name": "Hillary",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2016/oct/28/hillary-clinton/clinton-says-kids-are-healthier/",
        "statement_context": "a get-out-the-vote rally in North Carolina",
        "ruling_date": "2016-10-28T13:44:00",
        "statement": "<p>&quot;We are seeing kids who are healthier.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-10-26",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Clinton: Undocumented workers pay more than Trump in federal income taxes",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-halftrue.png",
            "ruling_slug": "half-true",
            "ruling": "Half-True"
        },
        "subject": [
            {
                "subject": "Candidate Biography",
                "subject_slug": "candidates-biography"
            },
            {
                "subject": "Immigration",
                "subject_slug": "immigration"
            },
            {
                "subject": "Taxes",
                "subject_slug": "taxes"
            }
        ],
        "ruling_link_text": "Educated guessing",
        "speaker": {
            "last_name": "Clinton",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
            "name_slug": "hillary-clinton",
            "first_name": "Hillary",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [
            {
                "last_name": "Trump",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
                "name_slug": "donald-trump",
                "first_name": "Donald",
                "party": {
                    "party": "Republican",
                    "party_slug": "republican"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/oct/27/hillary-clinton/clinton-undocumented-workers-pay-more-trump-federa/",
        "statement_context": "a rally in Tampa, Fla.",
        "ruling_date": "2016-10-27T17:19:20",
        "statement": "<p>&quot;One-half of undocumented workers pay federal income taxes, which means they are paying more federal income taxes than Donald Trump pays.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-10-25",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Facts dispute Donald Trump's claim that donation to FBI spouse linked to Clinton email decision",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlyfalse.png",
            "ruling_slug": "barely-true",
            "ruling": "Mostly False"
        },
        "subject": [
            {
                "subject": "Criminal Justice",
                "subject_slug": "criminal-justice"
            },
            {
                "subject": "Elections",
                "subject_slug": "elections"
            },
            {
                "subject": "Ethics",
                "subject_slug": "ethics"
            },
            {
                "subject": "History",
                "subject_slug": "history"
            },
            {
                "subject": "Legal Issues",
                "subject_slug": "legal-issues"
            },
            {
                "subject": "Technology",
                "subject_slug": "technology"
            },
            {
                "subject": "Transparency",
                "subject_slug": "transparency"
            }
        ],
        "ruling_link_text": "Another conspiracy theory",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [
            {
                "last_name": "Clinton",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
                "name_slug": "hillary-clinton",
                "first_name": "Hillary",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/oct/26/donald-trump/facts-dispute-donald-trumps-claim-donation-fbi-spo/",
        "statement_context": "a speech",
        "ruling_date": "2016-10-26T17:24:11",
        "statement": "<p>&quot;The man who was in charge of the investigation of Hillary Clinton accepted essentially from Hillary Clinton $675,000 that went to his wife.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-10-25",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Clinton said Trump wants to know about allies' payments before defending them",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-true.png",
            "ruling_slug": "true",
            "ruling": "True"
        },
        "subject": [
            {
                "subject": "Foreign Policy",
                "subject_slug": "foreign-policy"
            },
            {
                "subject": "Homeland Security",
                "subject_slug": "homeland-security"
            },
            {
                "subject": "Military",
                "subject_slug": "military"
            }
        ],
        "ruling_link_text": "He says they need to fulfill obligations",
        "speaker": {
            "last_name": "Clinton",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
            "name_slug": "hillary-clinton",
            "first_name": "Hillary",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [
            {
                "last_name": "Trump",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
                "name_slug": "donald-trump",
                "first_name": "Donald",
                "party": {
                    "party": "Republican",
                    "party_slug": "republican"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/oct/26/hillary-clinton/clinton-says-trump-wants-know-about-allies-payment/",
        "statement_context": "a rally in Florida",
        "ruling_date": "2016-10-26T17:19:52",
        "statement": "<p>Says Donald Trump &quot;was asked if he would defend our allies. He said well, first he&#39;d want to know if they made any payments to us to defend them.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-10-24",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Is Trump the first-ever candidate not to say he'll accept election results?",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlytrue.png",
            "ruling_slug": "mostly-true",
            "ruling": "Mostly True"
        },
        "subject": [
            {
                "subject": "Elections",
                "subject_slug": "elections"
            },
            {
                "subject": "History",
                "subject_slug": "history"
            }
        ],
        "ruling_link_text": "We couldn't find another one",
        "speaker": {
            "last_name": "Clinton",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
            "name_slug": "hillary-clinton",
            "first_name": "Hillary",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [
            {
                "last_name": "Trump",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
                "name_slug": "donald-trump",
                "first_name": "Donald",
                "party": {
                    "party": "Republican",
                    "party_slug": "republican"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/oct/25/hillary-clinton/trump-first-ever-candidate-not-say-hell-accept-ele/",
        "statement_context": "a rally in New Hampshire",
        "ruling_date": "2016-10-25T16:28:07",
        "statement": "<p>Says Donald Trump is &quot;the first person running for president, Republican or Democrat, who refused to say that he would respect the results of this election.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-10-23",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Hillary Clinton exaggerates by saying Donald Trump plans to deport 16 million people",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-halftrue.png",
            "ruling_slug": "half-true",
            "ruling": "Half-True"
        },
        "subject": [
            {
                "subject": "Immigration",
                "subject_slug": "immigration"
            }
        ],
        "ruling_link_text": "Only by fuzzy math",
        "speaker": {
            "last_name": "Clinton",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
            "name_slug": "hillary-clinton",
            "first_name": "Hillary",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [
            {
                "last_name": "Trump",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
                "name_slug": "donald-trump",
                "first_name": "Donald",
                "party": {
                    "party": "Republican",
                    "party_slug": "republican"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/oct/25/hillary-clinton/hillary-clinton-exaggerates-saying-donald-trump-pl/",
        "statement_context": "a tweet from her campaign",
        "ruling_date": "2016-10-25T11:57:28",
        "statement": "<p>&quot;Donald Trump says he&#39;d deport 16 million people.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-10-22",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Half True: Clinton says she sponsored 400 bills, worked with GOP",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-halftrue.png",
            "ruling_slug": "half-true",
            "ruling": "Half-True"
        },
        "subject": [
            {
                "subject": "Bipartisanship",
                "subject_slug": "bipartisanship"
            },
            {
                "subject": "Candidate Biography",
                "subject_slug": "candidates-biography"
            },
            {
                "subject": "History",
                "subject_slug": "history"
            },
            {
                "subject": "Job Accomplishments",
                "subject_slug": "job-accomplishments"
            }
        ],
        "ruling_link_text": "They aren't all bills, not all in the Senate",
        "speaker": {
            "last_name": "Clinton",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
            "name_slug": "hillary-clinton",
            "first_name": "Hillary",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2016/oct/24/hillary-clinton/clinton-says-400-bills-have-her-name-them-thanks-b/",
        "statement_context": "a press conference",
        "ruling_date": "2016-10-24T17:32:03",
        "statement": "<p>&quot;400 bills have my name on them either as a sponsor or a co-sponsor. You don&rsquo;t get that done unless you work with folks on the other side.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-10-20",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Clinton: School boards' anti-Catholic scare tactics in 1928 election",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-halftrue.png",
            "ruling_slug": "half-true",
            "ruling": "Half-True"
        },
        "subject": [
            {
                "subject": "Elections",
                "subject_slug": "elections"
            },
            {
                "subject": "History",
                "subject_slug": "history"
            },
            {
                "subject": "Religion",
                "subject_slug": "religion"
            }
        ],
        "ruling_link_text": "A leap of faith",
        "speaker": {
            "last_name": "Clinton",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
            "name_slug": "hillary-clinton",
            "first_name": "Hillary",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2016/oct/24/hillary-clinton/clinton-school-boards-anti-catholic-scare-tactics-/",
        "statement_context": "a speech at the Alfred E. Smith Memorial Dinner",
        "ruling_date": "2016-10-24T16:23:41",
        "statement": "<p>In 1928 &quot;school boards sent home letters with children saying that if Al Smith is elected president, you will not be allowed to have or read a Bible.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-10-23",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Do Clinton donors 'throw gays off of buildings'? No, that's ISIS",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlyfalse.png",
            "ruling_slug": "barely-true",
            "ruling": "Mostly False"
        },
        "subject": [
            {
                "subject": "Foreign Policy",
                "subject_slug": "foreign-policy"
            },
            {
                "subject": "Terrorism",
                "subject_slug": "terrorism"
            }
        ],
        "ruling_link_text": "ISIS, not  Clinton donors, throws gay men off of buildings",
        "speaker": {
            "last_name": "Conway",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Conway_mug.jpg",
            "name_slug": "kellyanne-conway",
            "first_name": "Kellyanne",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [
            {
                "last_name": "Clinton",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
                "name_slug": "hillary-clinton",
                "first_name": "Hillary",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/oct/23/kellyanne-conway/do-clinton-donors-throw-gays-buildings/",
        "statement_context": "comments on \"Meet the Press\"",
        "ruling_date": "2016-10-23T16:39:08",
        "statement": "<p>Says Hillary Clinton takes &quot;tens of millions of dollars from countries that hate women, that disrespect women, that throw gays off of buildings.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-10-19",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "What Hillary Clinton's plans mean for the U.S. debt",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-halftrue.png",
            "ruling_slug": "half-true",
            "ruling": "Half-True"
        },
        "subject": [
            {
                "subject": "Debt",
                "subject_slug": "debt"
            }
        ],
        "ruling_link_text": "Yet the debt will still grow",
        "speaker": {
            "last_name": "Clinton",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
            "name_slug": "hillary-clinton",
            "first_name": "Hillary",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2016/oct/20/hillary-clinton/what-hillary-clintons-plans-mean-us-debt/",
        "statement_context": "in the third presidential debate.",
        "ruling_date": "2016-10-20T14:07:13",
        "statement": "<p>&quot;What I have put forward does not add a penny to the debt.&quot;</p>\r\n\r\n<div>&nbsp;</div>\r\n"
    },
    {
        "statement_date": "2016-10-19",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Hillary Clinton says Donald Trump claimed the Emmys were rigged",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-halftrue.png",
            "ruling_slug": "half-true",
            "ruling": "Half-True"
        },
        "subject": [
            {
                "subject": "Candidate Biography",
                "subject_slug": "candidates-biography"
            },
            {
                "subject": "Elections",
                "subject_slug": "elections"
            },
            {
                "subject": "Pop Culture",
                "subject_slug": "pop-culture"
            }
        ],
        "ruling_link_text": "Whining, but not saying rigged",
        "speaker": {
            "last_name": "Clinton",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
            "name_slug": "hillary-clinton",
            "first_name": "Hillary",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [
            {
                "last_name": "Trump",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
                "name_slug": "donald-trump",
                "first_name": "Donald",
                "party": {
                    "party": "Republican",
                    "party_slug": "republican"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/oct/20/hillary-clinton/hillary-clinton-says-donald-trump-claims-emmys-wer/",
        "statement_context": "the third 2016 presidential debate",
        "ruling_date": "2016-10-20T01:32:27",
        "statement": "<p>&quot;There was even a time when (Donald Trump) didn&#39;t get an Emmy for his TV program three years in a row and he started tweeting that the Emmys were rigged.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-10-19",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Donald Trump says Hillary Clinton is 'wrong' to say he mocked a disabled reporter",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-false.png",
            "ruling_slug": "false",
            "ruling": "False"
        },
        "subject": [
            {
                "subject": "Candidate Biography",
                "subject_slug": "candidates-biography"
            },
            {
                "subject": "Disability",
                "subject_slug": "disability"
            }
        ],
        "ruling_link_text": "Let's go to the tape",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [
            {
                "last_name": "Clinton",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
                "name_slug": "hillary-clinton",
                "first_name": "Hillary",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/oct/20/donald-trump/donald-trump-says-hillary-clinton-wrong-say-he-moc/",
        "statement_context": "the third presidential debate in Las Vegas",
        "ruling_date": "2016-10-20T01:31:03",
        "statement": "<p>Says Hillary Clinton is &quot;wrong&quot; to say he mocked a disabled reporter.</p>\r\n"
    },
    {
        "statement_date": "2016-10-19",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Hillary Clinton: Donald Trump still promising to deport every undocumented person",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlytrue.png",
            "ruling_slug": "mostly-true",
            "ruling": "Mostly True"
        },
        "subject": [
            {
                "subject": "Candidate Biography",
                "subject_slug": "candidates-biography"
            },
            {
                "subject": "Homeland Security",
                "subject_slug": "homeland-security"
            },
            {
                "subject": "Immigration",
                "subject_slug": "immigration"
            }
        ],
        "ruling_link_text": "Trump also suggested not all would be deported",
        "speaker": {
            "last_name": "Clinton",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
            "name_slug": "hillary-clinton",
            "first_name": "Hillary",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [
            {
                "last_name": "Trump",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
                "name_slug": "donald-trump",
                "first_name": "Donald",
                "party": {
                    "party": "Republican",
                    "party_slug": "republican"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/oct/20/hillary-clinton/hillary-clinton-donald-trump-still-promising-depor/",
        "statement_context": "the third 2016 presidential debate",
        "ruling_date": "2016-10-20T00:57:54",
        "statement": "<p>Says Donald Trump &quot;said&nbsp;as recently as a few weeks ago in Phoenix that every undocumented person would be subject to deportation.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-10-20",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Hillary Clinton correctly claims that Trump Tower was in part built by undocumented workers",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-true.png",
            "ruling_slug": "true",
            "ruling": "True"
        },
        "subject": [
            {
                "subject": "Candidate Biography",
                "subject_slug": "candidates-biography"
            },
            {
                "subject": "Immigration",
                "subject_slug": "immigration"
            }
        ],
        "ruling_link_text": "200 undocumented Polish workers",
        "speaker": {
            "last_name": "Clinton",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
            "name_slug": "hillary-clinton",
            "first_name": "Hillary",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [
            {
                "last_name": "Trump",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
                "name_slug": "donald-trump",
                "first_name": "Donald",
                "party": {
                    "party": "Republican",
                    "party_slug": "republican"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/oct/20/hillary-clinton/hillary-clinton-correctly-claims-trump-tower-was-p/",
        "statement_context": "in a debate",
        "ruling_date": "2016-10-20T00:57:52",
        "statement": "<p>Says Donald Trump &quot;used undocumented labor to build the Trump Tower.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-10-19",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Trump wrongly says $6 billion went missing at State Department under Clinton",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-pantsonfire.gif",
            "ruling_slug": "pants-fire",
            "ruling": "Pants on Fire!"
        },
        "subject": [
            {
                "subject": "Candidate Biography",
                "subject_slug": "candidates-biography"
            },
            {
                "subject": "Corrections and Updates",
                "subject_slug": "corrections-and-updates"
            },
            {
                "subject": "Foreign Policy",
                "subject_slug": "foreign-policy"
            }
        ],
        "ruling_link_text": "It wasn't lost or stolen",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [
            {
                "last_name": "Clinton",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
                "name_slug": "hillary-clinton",
                "first_name": "Hillary",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/oct/20/donald-trump/trump-wrongly-says-6-billion-went-missing-state-de/",
        "statement_context": "the third presidential debate",
        "ruling_date": "2016-10-20T00:43:55",
        "statement": "<p>When Hillary Clinton &quot;ran the State Department, $6 billion was missing. How do you miss $6 billion? You ran the State Department, $6 billion was either stolen &mdash; they don&#39;t know.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-10-19",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Donald Trump says Hillary Clinton fought for a wall between U.S., Mexico",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-halftrue.png",
            "ruling_slug": "half-true",
            "ruling": "Half-True"
        },
        "subject": [
            {
                "subject": "Candidate Biography",
                "subject_slug": "candidates-biography"
            },
            {
                "subject": "History",
                "subject_slug": "history"
            },
            {
                "subject": "Homeland Security",
                "subject_slug": "homeland-security"
            },
            {
                "subject": "Immigration",
                "subject_slug": "immigration"
            },
            {
                "subject": "Voting Record",
                "subject_slug": "voting-record"
            }
        ],
        "ruling_link_text": "Extensive fencing, not a massive wall",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [
            {
                "last_name": "Clinton",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
                "name_slug": "hillary-clinton",
                "first_name": "Hillary",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/oct/20/donald-trump/donald-trump-says-hillary-clinton-fought-wall-betw/",
        "statement_context": "the third 2016 presidential debate",
        "ruling_date": "2016-10-20T00:11:13",
        "statement": "<p>Says Hillary Clinton &quot;wanted the wall.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-10-19",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Donald Trump off-base in saying Hillary Clinton will 'double your taxes'",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlyfalse.png",
            "ruling_slug": "barely-true",
            "ruling": "Mostly False"
        },
        "subject": [
            {
                "subject": "Economy",
                "subject_slug": "economy"
            },
            {
                "subject": "Income",
                "subject_slug": "income"
            },
            {
                "subject": "Taxes",
                "subject_slug": "taxes"
            }
        ],
        "ruling_link_text": "Not for the vast, vast majority of taxpayers",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [
            {
                "last_name": "Clinton",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
                "name_slug": "hillary-clinton",
                "first_name": "Hillary",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/oct/20/donald-trump/donald-trump-predicts-hillary-clinton-will-double-/",
        "statement_context": "the third 2016 presidential debate",
        "ruling_date": "2016-10-20T00:00:36",
        "statement": "<p>Says Hillary Clinton&#39;s &quot;plan is going to raise taxes and even double your taxes.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-10-19",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Hillary Clinton blames high-up Russians for WikiLeaks releases",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-true.png",
            "ruling_slug": "true",
            "ruling": "True"
        },
        "subject": [
            {
                "subject": "Elections",
                "subject_slug": "elections"
            },
            {
                "subject": "Foreign Policy",
                "subject_slug": "foreign-policy"
            },
            {
                "subject": "History",
                "subject_slug": "history"
            },
            {
                "subject": "Homeland Security",
                "subject_slug": "homeland-security"
            }
        ],
        "ruling_link_text": "The intelligence community agrees",
        "speaker": {
            "last_name": "Clinton",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
            "name_slug": "hillary-clinton",
            "first_name": "Hillary",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2016/oct/19/hillary-clinton/hillary-clinton-blames-russia-putin-wikileaks-rele/",
        "statement_context": "the third 2016 presidential debate",
        "ruling_date": "2016-10-19T23:15:20",
        "statement": "<p>&quot;We have 17 intelligence agencies, civilian and military, who have all concluded that these espionage attacks, these cyberattacks, come from the highest levels of the Kremlin, and they are designed to influence our election.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-10-19",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Donald Trump says Hillary Clinton wants to have open borders",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlyfalse.png",
            "ruling_slug": "barely-true",
            "ruling": "Mostly False"
        },
        "subject": [
            {
                "subject": "Crime",
                "subject_slug": "crime"
            },
            {
                "subject": "Foreign Policy",
                "subject_slug": "foreign-policy"
            },
            {
                "subject": "Homeland Security",
                "subject_slug": "homeland-security"
            },
            {
                "subject": "Human Rights",
                "subject_slug": "human-rights"
            },
            {
                "subject": "Immigration",
                "subject_slug": "immigration"
            }
        ],
        "ruling_link_text": "She still wants border security",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [
            {
                "last_name": "Clinton",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
                "name_slug": "hillary-clinton",
                "first_name": "Hillary",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/oct/19/donald-trump/donald-trump-says-hillary-clinton-wants-have-open-/",
        "statement_context": "the third 2016 presidential debate",
        "ruling_date": "2016-10-19T23:08:49",
        "statement": "<p>Says Hillary Clinton &quot;wants to have open borders.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-10-19",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Hillary Clinton says Supreme Court gun decision dealt with protecting toddlers",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-halftrue.png",
            "ruling_slug": "half-true",
            "ruling": "Half-True"
        },
        "subject": [
            {
                "subject": "Criminal Justice",
                "subject_slug": "criminal-justice"
            },
            {
                "subject": "Government regulation",
                "subject_slug": "government-regulation"
            },
            {
                "subject": "Guns",
                "subject_slug": "guns"
            },
            {
                "subject": "History",
                "subject_slug": "history"
            },
            {
                "subject": "Supreme Court",
                "subject_slug": "supreme-court"
            }
        ],
        "ruling_link_text": "Heller broader than just toddlers",
        "speaker": {
            "last_name": "Clinton",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
            "name_slug": "hillary-clinton",
            "first_name": "Hillary",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2016/oct/19/hillary-clinton/hillary-clinton-says-supreme-court-gun-decision-de/",
        "statement_context": "the third 2016 presidential debate",
        "ruling_date": "2016-10-19T22:52:05",
        "statement": "<p>&quot;What the District of Columbia was trying to do&nbsp;(with its handgun ban) was to protect toddlers from guns.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-10-19",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Hillary Clinton says 33,000 Americans die each year from guns",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlytrue.png",
            "ruling_slug": "mostly-true",
            "ruling": "Mostly True"
        },
        "subject": [
            {
                "subject": "Crime",
                "subject_slug": "crime"
            },
            {
                "subject": "Guns",
                "subject_slug": "guns"
            },
            {
                "subject": "Public Safety",
                "subject_slug": "public-safety"
            }
        ],
        "ruling_link_text": "Including suicides, yes",
        "speaker": {
            "last_name": "Clinton",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
            "name_slug": "hillary-clinton",
            "first_name": "Hillary",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2016/oct/19/hillary-clinton/hillary-clinton-says-33000-americans-die-each-year/",
        "statement_context": "the third 2016 presidential debate",
        "ruling_date": "2016-10-19T22:23:12",
        "statement": "<p>&quot;We have 33,000 people a year who die from guns.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-10-16",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Mike Pence wrong on Haiti contracts steered to Clinton friends",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-false.png",
            "ruling_slug": "false",
            "ruling": "False"
        },
        "subject": [
            {
                "subject": "Ethics",
                "subject_slug": "ethics"
            }
        ],
        "ruling_link_text": "Access? Yes. Contracts? No.",
        "speaker": {
            "last_name": "Pence",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/AP_VASH107_CAMPAIGN_2016_PE.jpg",
            "name_slug": "mike-pence",
            "first_name": "Mike",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [
            {
                "last_name": "Clinton",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
                "name_slug": "hillary-clinton",
                "first_name": "Hillary",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/oct/19/mike-pence/pence-wrong-haiti-contracts-steered-clinton-friend/",
        "statement_context": "an interview on NBC's \"Meet the Press\"",
        "ruling_date": "2016-10-19T18:13:45",
        "statement": "<p>&quot;State Department officials actually directed contracts for the Haitian recovery after the earthquake to friends of the Clintons.&quot;</p>\r\n\r\n<div>&nbsp;</div>\r\n"
    },
    {
        "statement_date": "2016-10-10",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Clinton twists Trump's words on rescuing the auto industry during recession",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-pantsonfire.gif",
            "ruling_slug": "pants-fire",
            "ruling": "Pants on Fire!"
        },
        "subject": [
            {
                "subject": "Bankruptcy",
                "subject_slug": "bankruptcy"
            },
            {
                "subject": "Candidate Biography",
                "subject_slug": "candidates-biography"
            },
            {
                "subject": "Jobs",
                "subject_slug": "jobs"
            }
        ],
        "ruling_link_text": "Factually bankrupt",
        "speaker": {
            "last_name": "Clinton",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
            "name_slug": "hillary-clinton",
            "first_name": "Hillary",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [
            {
                "last_name": "Trump",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
                "name_slug": "donald-trump",
                "first_name": "Donald",
                "party": {
                    "party": "Republican",
                    "party_slug": "republican"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/oct/18/hillary-clinton/clinton-twists-trumps-words-rescuing-auto-industry/",
        "statement_context": "a rally in Detroit",
        "ruling_date": "2016-10-18T17:54:55",
        "statement": "<p>&quot;Back in the Great Recession, when millions of &nbsp;jobs across America hung in the balance, Donald Trump said rescuing the auto industry didn&rsquo;t really matter very much. He said, and I quote again, &lsquo;Let it go.&rsquo; &quot;<br />\r\n&nbsp;</p>\r\n"
    },
    {
        "statement_date": "2016-10-09",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Clinton correct Buffett claimed to pay a lower tax rate than his secretary",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-true.png",
            "ruling_slug": "true",
            "ruling": "True"
        },
        "subject": [
            {
                "subject": "Taxes",
                "subject_slug": "taxes"
            }
        ],
        "ruling_link_text": "Buffett's secretary says it's true",
        "speaker": {
            "last_name": "Clinton",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
            "name_slug": "hillary-clinton",
            "first_name": "Hillary",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2016/oct/18/hillary-clinton/clinton-correct-buffett-claimed-pay-lower-tax-rate/",
        "statement_context": "the second presidential debate",
        "ruling_date": "2016-10-18T16:52:34",
        "statement": "<p>Says Warren Buffett has publicly said his secretary &quot;should not be paying a higher tax rate&quot; than him.</p>\r\n"
    },
    {
        "statement_date": "2016-10-13",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "FBI director James Comey says Donald Trump has it flipped; Petraeus case was worse than Clinton's",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-false.png",
            "ruling_slug": "false",
            "ruling": "False"
        },
        "subject": [
            {
                "subject": "Candidate Biography",
                "subject_slug": "candidates-biography"
            },
            {
                "subject": "Criminal Justice",
                "subject_slug": "criminal-justice"
            },
            {
                "subject": "Foreign Policy",
                "subject_slug": "foreign-policy"
            },
            {
                "subject": "Government regulation",
                "subject_slug": "government-regulation"
            },
            {
                "subject": "Homeland Security",
                "subject_slug": "homeland-security"
            },
            {
                "subject": "Military",
                "subject_slug": "military"
            },
            {
                "subject": "Technology",
                "subject_slug": "technology"
            },
            {
                "subject": "Transparency",
                "subject_slug": "transparency"
            }
        ],
        "ruling_link_text": "FBI director says, \"It's the reverse.\"",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [
            {
                "last_name": "Clinton",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
                "name_slug": "hillary-clinton",
                "first_name": "Hillary",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/oct/18/donald-trump/fbi-director-james-comey-says-donald-trump-has-it-/",
        "statement_context": "a speech",
        "ruling_date": "2016-10-18T10:47:19",
        "statement": "<p>Says Hillary Clinton was &quot;let off the hook&quot; for her email scandal while Gen. David Petraeus had his life &quot;destroyed for doing far, far less.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-10-09",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Donald Trump wildly exaggerates Amb. Christopher Steven's requests for extra Benghazi security",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlyfalse.png",
            "ruling_slug": "barely-true",
            "ruling": "Mostly False"
        },
        "subject": [
            {
                "subject": "Foreign Policy",
                "subject_slug": "foreign-policy"
            },
            {
                "subject": "Government Efficiency",
                "subject_slug": "government-efficiency"
            },
            {
                "subject": "History",
                "subject_slug": "history"
            },
            {
                "subject": "Terrorism",
                "subject_slug": "terrorism"
            }
        ],
        "ruling_link_text": "Huuuugely misleading",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [
            {
                "last_name": "Clinton",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
                "name_slug": "hillary-clinton",
                "first_name": "Hillary",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/oct/14/donald-trump/donald-trump-wildly-exaggerates-amb-christopher-st/",
        "statement_context": "the second 2016 presidential debate",
        "ruling_date": "2016-10-14T10:00:00",
        "statement": "<p>Says Libya &quot;Ambassador (Christopher) Stevens sent 600 requests for help&quot; in Benghazi.</p>\r\n"
    },
    {
        "statement_date": "2016-10-09",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Clinton says Muslims have been in America since George Washington",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-true.png",
            "ruling_slug": "true",
            "ruling": "True"
        },
        "subject": [
            {
                "subject": "History",
                "subject_slug": "history"
            },
            {
                "subject": "Immigration",
                "subject_slug": "immigration"
            }
        ],
        "ruling_link_text": "Here for hundreds of years",
        "speaker": {
            "last_name": "Clinton",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
            "name_slug": "hillary-clinton",
            "first_name": "Hillary",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2016/oct/13/hillary-clinton/clinton-sys-muslims-have-been-america-george-washi/",
        "statement_context": "the second presidential debate",
        "ruling_date": "2016-10-13T17:36:31",
        "statement": "<p>&quot;We&#39;ve had Muslims in America since George Washington.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-10-10",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Trump: 'I’ve been proven right' about Clinton wanting open borders",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlyfalse.png",
            "ruling_slug": "barely-true",
            "ruling": "Mostly False"
        },
        "subject": [
            {
                "subject": "Immigration",
                "subject_slug": "immigration"
            }
        ],
        "ruling_link_text": "Comments are ambiguous",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [
            {
                "last_name": "Clinton",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
                "name_slug": "hillary-clinton",
                "first_name": "Hillary",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/oct/12/donald-trump/trump-ive-been-proven-right-about-clinton-wanting-/",
        "statement_context": "a rally in Ambridge, Pa.",
        "ruling_date": "2016-10-12T13:21:18",
        "statement": "<p>Says &quot;I&rsquo;ve been proven right&quot; about &quot;Hillary Clinton&#39;s radical call for open borders, meaning anyone in the world can enter the United States without any limit at all.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-10-09",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Clinton is right: Trump tax plan gives more to rich than Bush tax cuts",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-true.png",
            "ruling_slug": "true",
            "ruling": "True"
        },
        "subject": [
            {
                "subject": "Taxes",
                "subject_slug": "taxes"
            }
        ],
        "ruling_link_text": "Math checks out ",
        "speaker": {
            "last_name": "Clinton",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
            "name_slug": "hillary-clinton",
            "first_name": "Hillary",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [
            {
                "last_name": "Trump",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
                "name_slug": "donald-trump",
                "first_name": "Donald",
                "party": {
                    "party": "Republican",
                    "party_slug": "republican"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/oct/11/hillary-clinton/clinton-right-trump-tax-plan-gives-more-rich-bush-/",
        "statement_context": "the second presidential debate",
        "ruling_date": "2016-10-11T18:22:01",
        "statement": "<p>Says Donald Trump&rsquo;s tax plan gives the wealthy and corporations &quot;more than the Bush tax cuts by at least a factor of two.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-10-09",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Hillary Clinton claim that US is energy independent goes too far",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-false.png",
            "ruling_slug": "false",
            "ruling": "False"
        },
        "subject": [
            {
                "subject": "Energy",
                "subject_slug": "energy"
            },
            {
                "subject": "Environment",
                "subject_slug": "environment"
            },
            {
                "subject": "Gas Prices",
                "subject_slug": "gas-prices"
            },
            {
                "subject": "Trade",
                "subject_slug": "trade"
            }
        ],
        "ruling_link_text": "On track, but not there yet",
        "speaker": {
            "last_name": "Clinton",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
            "name_slug": "hillary-clinton",
            "first_name": "Hillary",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2016/oct/11/hillary-clinton/clinton-claim-us-energy-independent-goes-too-far/",
        "statement_context": "the second presidential debate",
        "ruling_date": "2016-10-11T18:15:05",
        "statement": "<p>&quot;We are now, for the first time ever, energy independent.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-10-10",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Donald Trump incorrectly pins Benghazi criticism on Sidney Blumenthal",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-false.png",
            "ruling_slug": "false",
            "ruling": "False"
        },
        "subject": [
            {
                "subject": "Foreign Policy",
                "subject_slug": "foreign-policy"
            },
            {
                "subject": "Terrorism",
                "subject_slug": "terrorism"
            }
        ],
        "ruling_link_text": "A Newsweek journalist wrote that, not Blumenthal",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [
            {
                "last_name": "Clinton",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
                "name_slug": "hillary-clinton",
                "first_name": "Hillary",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/oct/11/donald-trump/donald-trump-incorrectly-pins-benghazi-criticism-s/",
        "statement_context": "a rally in Wilkes-Barre, Pa.",
        "ruling_date": "2016-10-11T14:34:04",
        "statement": "<p>Says Sidney Blumenthal wrote that the Benghazi attack was &quot;almost certainly preventable. Clinton was in charge of the State Department, and it failed to protect U.S. personnel and an American consulate in Libya.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-09-06",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Trump mangles facts on Clinton and Haiti jobs project",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlyfalse.png",
            "ruling_slug": "barely-true",
            "ruling": "Mostly False"
        },
        "subject": [
            {
                "subject": "Corrections and Updates",
                "subject_slug": "corrections-and-updates"
            },
            {
                "subject": "Environment",
                "subject_slug": "environment"
            },
            {
                "subject": "Labor",
                "subject_slug": "labor"
            },
            {
                "subject": "Workers",
                "subject_slug": "workers"
            }
        ],
        "ruling_link_text": "He failed to sweat the details",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [
            {
                "last_name": "Clinton",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
                "name_slug": "hillary-clinton",
                "first_name": "Hillary",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/oct/11/donald-trump/trump-mangles-facts-clinton-and-haiti-jobs-project/",
        "statement_context": "a speech in North Carolina",
        "ruling_date": "2016-10-11T09:00:00",
        "statement": "<p>Says &quot;Hillary Clinton set aside environmental and labor rules to help a South Korean company with a record of violating workers&rsquo; rights set up what amounts to a sweatshop in Haiti.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-10-09",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Trump says Clinton viciously attacked those who charged abuse by Bill",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlyfalse.png",
            "ruling_slug": "barely-true",
            "ruling": "Mostly False"
        },
        "subject": [
            {
                "subject": "History",
                "subject_slug": "history"
            },
            {
                "subject": "Women",
                "subject_slug": "women"
            }
        ],
        "ruling_link_text": "On charges of abuse, she was pretty quiet.",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [
            {
                "last_name": "Clinton",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
                "name_slug": "hillary-clinton",
                "first_name": "Hillary",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/oct/10/donald-trump/donald-trump-says-hillary-clinton-viciously-attack/",
        "statement_context": "the second presidential debate",
        "ruling_date": "2016-10-10T12:45:17",
        "statement": "<p>Says Hillary Clinton &quot;viciously&quot; attacked women abused by Bill Clinton.</p>\r\n"
    },
    {
        "statement_date": "2016-10-09",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Clinton says she was gone for the 'red line' in Syria incident",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlyfalse.png",
            "ruling_slug": "barely-true",
            "ruling": "Mostly False"
        },
        "subject": [
            {
                "subject": "Foreign Policy",
                "subject_slug": "foreign-policy"
            }
        ],
        "ruling_link_text": "Gone but not forgotten",
        "speaker": {
            "last_name": "Clinton",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
            "name_slug": "hillary-clinton",
            "first_name": "Hillary",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2016/oct/10/hillary-clinton/clinton-and-line-sand-comment/",
        "statement_context": "the second presidential debate",
        "ruling_date": "2016-10-10T02:11:20",
        "statement": "<p>&quot;I was gone&quot; when there was a red line against Syria.</p>\r\n"
    },
    {
        "statement_date": "2016-10-09",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Donald Trump wrongly says Hillary Clinton laughed at a 12-year-old rape victim",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-false.png",
            "ruling_slug": "false",
            "ruling": "False"
        },
        "subject": [
            {
                "subject": "Candidate Biography",
                "subject_slug": "candidates-biography"
            },
            {
                "subject": "Corrections and Updates",
                "subject_slug": "corrections-and-updates"
            },
            {
                "subject": "Criminal Justice",
                "subject_slug": "criminal-justice"
            },
            {
                "subject": "Women",
                "subject_slug": "women"
            }
        ],
        "ruling_link_text": "There's laughter, but not at the girl",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [
            {
                "last_name": "Clinton",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
                "name_slug": "hillary-clinton",
                "first_name": "Hillary",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/oct/10/donald-trump/trump-says-clinton-laughed-about-rape-case/",
        "statement_context": "the second 2016 presidential debate",
        "ruling_date": "2016-10-10T00:49:26",
        "statement": "<p>Says after Hillary Clinton helped a man accused of raping a 12-year-old, &quot;she&#39;s seen laughing on two separate occasions, laughing at the girl who was raped.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-10-09",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Clinton said terrorists use Trump's remarks about Muslims for recruitment",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-true.png",
            "ruling_slug": "true",
            "ruling": "True"
        },
        "subject": [
            {
                "subject": "Foreign Policy",
                "subject_slug": "foreign-policy"
            },
            {
                "subject": "Religion",
                "subject_slug": "religion"
            },
            {
                "subject": "Terrorism",
                "subject_slug": "terrorism"
            }
        ],
        "ruling_link_text": "Straight to video",
        "speaker": {
            "last_name": "Clinton",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
            "name_slug": "hillary-clinton",
            "first_name": "Hillary",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [
            {
                "last_name": "Trump",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
                "name_slug": "donald-trump",
                "first_name": "Donald",
                "party": {
                    "party": "Republican",
                    "party_slug": "republican"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/oct/10/hillary-clinton/clinton-said-terrorists-use-trumps-remarks-about-m/",
        "statement_context": "the second 2016 presidential debate",
        "ruling_date": "2016-10-10T00:13:20",
        "statement": "<p>&quot;You can look at the propaganda on a lot of the terrorists&#39; sites and what Donald Trump says&nbsp;about Muslims is used to recruit fighters.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-10-09",
        "statement_type": {
            "statement_type": "Attack"
        },
        "ruling_headline": "Donald Trump wrongly says Hillary Clinton 'wants to go to a single-payer plan' for health care",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-false.png",
            "ruling_slug": "false",
            "ruling": "False"
        },
        "subject": [
            {
                "subject": "Health Care",
                "subject_slug": "health-care"
            }
        ],
        "ruling_link_text": "She wants to protect Obamacare",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [
            {
                "last_name": "Clinton",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
                "name_slug": "hillary-clinton",
                "first_name": "Hillary",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/oct/09/donald-trump/donald-trump-wrongly-says-hillary-clinton-wants-go/",
        "statement_context": "a presidential debate",
        "ruling_date": "2016-10-09T23:15:33",
        "statement": "<p>Says Hillary Clinton &quot;wants to go to a single-payer plan&quot; for health care</p>\r\n"
    },
    {
        "statement_date": "2016-10-09",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Donald Trump says Hillary Clinton deleted 33,000 emails after getting a subpoena",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-halftrue.png",
            "ruling_slug": "half-true",
            "ruling": "Half-True"
        },
        "subject": [
            {
                "subject": "History",
                "subject_slug": "history"
            },
            {
                "subject": "Homeland Security",
                "subject_slug": "homeland-security"
            },
            {
                "subject": "Legal Issues",
                "subject_slug": "legal-issues"
            },
            {
                "subject": "Transparency",
                "subject_slug": "transparency"
            }
        ],
        "ruling_link_text": "No evidence it was done deliberately",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [
            {
                "last_name": "Clinton",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
                "name_slug": "hillary-clinton",
                "first_name": "Hillary",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/oct/09/donald-trump/donald-trump-says-hillary-clinton-deleted-33000-em/",
        "statement_context": "the second 2016 presidential debate",
        "ruling_date": "2016-10-09T23:14:14",
        "statement": "<p>&quot;You (Hillary Clinton) get a subpoena, and after getting the subpoena you delete 33,000 emails.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-10-09",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Hillary Clinton says a record 90% of Americans have health insurance today",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-true.png",
            "ruling_slug": "true",
            "ruling": "True"
        },
        "subject": [
            {
                "subject": "Health Care",
                "subject_slug": "health-care"
            }
        ],
        "ruling_link_text": "Uninsured rate has fallen by almost half since 2010",
        "speaker": {
            "last_name": "Clinton",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
            "name_slug": "hillary-clinton",
            "first_name": "Hillary",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2016/oct/09/hillary-clinton/hillary-clinton-says-90-percent-health/",
        "statement_context": "the second 2016 presidential debate",
        "ruling_date": "2016-10-09T22:32:38",
        "statement": "<p>&quot;Right now we are at 90 percent health insurance covered. That&#39;s the highest we&#39;ve ever been in our country.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-09-27",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Trump: Clinton promised to add 200K jobs to upstate New York, but 'they lost so many jobs'",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlytrue.png",
            "ruling_slug": "mostly-true",
            "ruling": "Mostly True"
        },
        "subject": [
            {
                "subject": "Candidate Biography",
                "subject_slug": "candidates-biography"
            },
            {
                "subject": "Jobs",
                "subject_slug": "jobs"
            }
        ],
        "ruling_link_text": "Promise broken, private sector jobs lost",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [
            {
                "last_name": "Clinton",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
                "name_slug": "hillary-clinton",
                "first_name": "Hillary",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/oct/07/donald-trump/trump-clinton-promised-add-200k-jobs-upstate-new-y/",
        "statement_context": "a campaign event in Fla.",
        "ruling_date": "2016-10-07T10:00:00",
        "statement": "<p>Says Hillary Clinton &quot;promised, running for the Senate years ago, 200,000 jobs for upstate New York. ... Not only didn&#39;t they come, but they lost so many jobs.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-10-04",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Mike Pence says Hillary Clinton wants to turn Obamacare into single-payer",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlyfalse.png",
            "ruling_slug": "barely-true",
            "ruling": "Mostly False"
        },
        "subject": [
            {
                "subject": "Drugs",
                "subject_slug": "drugs"
            },
            {
                "subject": "Health Care",
                "subject_slug": "health-care"
            },
            {
                "subject": "History",
                "subject_slug": "history"
            }
        ],
        "ruling_link_text": "That's not her prescription",
        "speaker": {
            "last_name": "Pence",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/AP_VASH107_CAMPAIGN_2016_PE.jpg",
            "name_slug": "mike-pence",
            "first_name": "Mike",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [
            {
                "last_name": "Clinton",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
                "name_slug": "hillary-clinton",
                "first_name": "Hillary",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            },
            {
                "last_name": "Kaine",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/AP_NCCB111_CAMPAIGN_2016_KA.JPG",
                "name_slug": "tim-kaine",
                "first_name": "Tim",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/oct/05/mike-pence/mike-pence-says-hillary-clinton-want-turn-obamacar/",
        "statement_context": "the 2016 Vice Presidential debate",
        "ruling_date": "2016-10-05T00:47:36",
        "statement": "<p>Says Hillary Clinton and Tim Kaine &quot;want to expand (Obamacare) into a single-payer program.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-10-04",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Mike Pence: Hillary Clinton failed to keep U.S. troops in Iraq",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlyfalse.png",
            "ruling_slug": "barely-true",
            "ruling": "Mostly False"
        },
        "subject": [
            {
                "subject": "Foreign Policy",
                "subject_slug": "foreign-policy"
            },
            {
                "subject": "Iraq",
                "subject_slug": "iraq"
            },
            {
                "subject": "Military",
                "subject_slug": "military"
            },
            {
                "subject": "Terrorism",
                "subject_slug": "terrorism"
            }
        ],
        "ruling_link_text": "Iraq rejected America's terms",
        "speaker": {
            "last_name": "Pence",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/AP_VASH107_CAMPAIGN_2016_PE.jpg",
            "name_slug": "mike-pence",
            "first_name": "Mike",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [
            {
                "last_name": "Clinton",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
                "name_slug": "hillary-clinton",
                "first_name": "Hillary",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/oct/04/mike-pence/mike-pence-clinton-failed-keep-troops-iraq/",
        "statement_context": "the 2016 Vice Presidential debate",
        "ruling_date": "2016-10-04T22:35:46",
        "statement": "<p>Says &quot;Iraq has been overrun by ISIS because Hillary Clinton failed to renegotiate . . . a status of forces agreement.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-09-26",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Hillary Clinton's off-base linkage of tax cuts and the Great Recession",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlyfalse.png",
            "ruling_slug": "barely-true",
            "ruling": "Mostly False"
        },
        "subject": [
            {
                "subject": "Economy",
                "subject_slug": "economy"
            },
            {
                "subject": "Financial Regulation",
                "subject_slug": "financial-regulation"
            },
            {
                "subject": "History",
                "subject_slug": "history"
            },
            {
                "subject": "Taxes",
                "subject_slug": "taxes"
            }
        ],
        "ruling_link_text": "Tax cuts were a sidelight at best",
        "speaker": {
            "last_name": "Clinton",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
            "name_slug": "hillary-clinton",
            "first_name": "Hillary",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2016/oct/02/hillary-clinton/hillary-clintons-base-linkage-tax-cuts-and-great-r/",
        "statement_context": "the first presidential debate at Hofstra University",
        "ruling_date": "2016-10-02T17:16:29",
        "statement": "<p>The Great Recession emerged &quot;in large part because of tax policies that slashed taxes on the wealthy, failed to invest in the middle class, took their eyes off of Wall Street, and created a perfect storm.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-09-27",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Claims that Hillary Clinton wore earpiece at debate don't hold up",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-pantsonfire.gif",
            "ruling_slug": "pants-fire",
            "ruling": "Pants on Fire!"
        },
        "subject": [
            {
                "subject": "Candidate Biography",
                "subject_slug": "candidates-biography"
            }
        ],
        "ruling_link_text": "See no earpiece, hear no earpiece",
        "speaker": {
            "last_name": "Bloggers",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/mugs/mug-bloggers.jpg",
            "name_slug": "blog-posting",
            "first_name": "",
            "party": {
                "party": "None",
                "party_slug": "none"
            }
        },
        "target": [
            {
                "last_name": "Clinton",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
                "name_slug": "hillary-clinton",
                "first_name": "Hillary",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/sep/28/blog-posting/claims-hillary-clinton-wore-earpiece-debate-dont-h/",
        "statement_context": "Internet posts",
        "ruling_date": "2016-09-28T17:01:50",
        "statement": "<p>Say photographs of Hillary Clinton at the debate show what could be an earpiece.</p>\r\n"
    },
    {
        "statement_date": "2016-09-26",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Donald Trump: My Trans-Pacific Partnership opposition made Hillary Clinton change her stance",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-false.png",
            "ruling_slug": "false",
            "ruling": "False"
        },
        "subject": [
            {
                "subject": "Candidate Biography",
                "subject_slug": "candidates-biography"
            },
            {
                "subject": "Economy",
                "subject_slug": "economy"
            },
            {
                "subject": "Foreign Policy",
                "subject_slug": "foreign-policy"
            },
            {
                "subject": "History",
                "subject_slug": "history"
            },
            {
                "subject": "Trade",
                "subject_slug": "trade"
            }
        ],
        "ruling_link_text": "What about Bernie?",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [
            {
                "last_name": "Clinton",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
                "name_slug": "hillary-clinton",
                "first_name": "Hillary",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/sep/27/donald-trump/donald-trump-my-trans-pacific-partnership-oppositi/",
        "statement_context": "a Presidential debate",
        "ruling_date": "2016-09-27T17:14:54",
        "statement": "<p>Says to Hillary Clinton, &quot;You heard what I said about (the Trans-Pacific Partnership trade deal), and all of a sudden you were against it.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-09-20",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Trump says Clinton would bring in 620,000 refugees in her first term",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-false.png",
            "ruling_slug": "false",
            "ruling": "False"
        },
        "subject": [
            {
                "subject": "Immigration",
                "subject_slug": "immigration"
            }
        ],
        "ruling_link_text": "All based on assumptions",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [
            {
                "last_name": "Clinton",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
                "name_slug": "hillary-clinton",
                "first_name": "Hillary",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/sep/27/donald-trump/trump-says-clinton-would-bring-620000-refugees-her/",
        "statement_context": "a speech in North Carolina",
        "ruling_date": "2016-09-27T16:04:05",
        "statement": "<p>Says &quot;Hillary Clinton&#39;s plan would bring in 620,000 refugees in her first term, alone, with no effective way to screen or vet them. Her plan would cost $400 billion in terms of lifetime welfare and entitlement costs.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-09-24",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Donald Trump's false claim that Clinton's energy plan will cost the economy $5 trillion",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-false.png",
            "ruling_slug": "false",
            "ruling": "False"
        },
        "subject": [
            {
                "subject": "Energy",
                "subject_slug": "energy"
            }
        ],
        "ruling_link_text": "Figure is cherrypicked, refers to 30 years period",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [
            {
                "last_name": "Clinton",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
                "name_slug": "hillary-clinton",
                "first_name": "Hillary",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/sep/27/donald-trump/donald-trumps-false-clinton-energy-plan/",
        "statement_context": "a speech in Roanoke, Va.",
        "ruling_date": "2016-09-27T11:54:31",
        "statement": "<p>Says Hillary Clinton&rsquo;s energy agenda &quot;will cost the U.S. economy over $5 trillion&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-09-26",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Trump falsely tries to pin birtherism on Clinton insiders",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-false.png",
            "ruling_slug": "false",
            "ruling": "False"
        },
        "subject": [
            {
                "subject": "Obama Birth Certificate",
                "subject_slug": "obama-birth-certificate"
            }
        ],
        "ruling_link_text": "Despite repetition, still not true",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [
            {
                "last_name": "Clinton",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
                "name_slug": "hillary-clinton",
                "first_name": "Hillary",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/sep/27/donald-trump/trump-again-tries-pin-birtherism-clinton-insiders/",
        "statement_context": "a presidential debate",
        "ruling_date": "2016-09-27T01:30:48",
        "statement": "<p>Says top Clinton advisers &quot;were pressing&quot; birther movement stories &quot;very hard.&quot;</p>\r\n\r\n<div>&nbsp;</div>\r\n"
    },
    {
        "statement_date": "2016-09-26",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "At debate, Hillary Clinton tax claim ignores years when Donald Trump reportedly paid federal taxes",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlyfalse.png",
            "ruling_slug": "barely-true",
            "ruling": "Mostly False"
        },
        "subject": [
            {
                "subject": "Candidate Biography",
                "subject_slug": "candidates-biography"
            },
            {
                "subject": "History",
                "subject_slug": "history"
            },
            {
                "subject": "Income",
                "subject_slug": "income"
            },
            {
                "subject": "Negative Campaigning",
                "subject_slug": "campaign-advertising"
            },
            {
                "subject": "Taxes",
                "subject_slug": "taxes"
            },
            {
                "subject": "Wealth",
                "subject_slug": "wealth"
            }
        ],
        "ruling_link_text": "What about the three years when he did?",
        "speaker": {
            "last_name": "Clinton",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
            "name_slug": "hillary-clinton",
            "first_name": "Hillary",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [
            {
                "last_name": "Trump",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
                "name_slug": "donald-trump",
                "first_name": "Donald",
                "party": {
                    "party": "Republican",
                    "party_slug": "republican"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/sep/27/hillary-clinton/debate-hillary-clinton-tax-claim-ignores-years-whe/",
        "statement_context": "a Presidential debate",
        "ruling_date": "2016-09-27T01:29:38",
        "statement": "<p>&quot;The only years that anybody&#39;s ever seen&quot; of Donald Trump&rsquo;s tax returns &quot;showed he didn&#39;t pay any federal income tax.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-09-27",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "True: Hillary Clinton says federal government sued Donald Trump for housing discrimination",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-true.png",
            "ruling_slug": "true",
            "ruling": "True"
        },
        "subject": [
            {
                "subject": "Candidate Biography",
                "subject_slug": "candidates-biography"
            },
            {
                "subject": "Diversity",
                "subject_slug": "diversity"
            },
            {
                "subject": "Housing",
                "subject_slug": "housing"
            }
        ],
        "ruling_link_text": "Feds said Trump turned away blacks",
        "speaker": {
            "last_name": "Clinton",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
            "name_slug": "hillary-clinton",
            "first_name": "Hillary",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2016/sep/27/hillary-clinton/true-hillary-clinton-says-federal-government-sued-/",
        "statement_context": "the first presidential debate",
        "ruling_date": "2016-09-27T01:28:54",
        "statement": "<p>Says Donald Trump &quot;started his career back in 1973 being sued by the Justice Department for racial discrimination because he would not rent apartments in one of his developments to African-Americans.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-09-26",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Hillary Clinton correctly cites outside analyses of Trump's tax plan",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-true.png",
            "ruling_slug": "true",
            "ruling": "True"
        },
        "subject": [
            {
                "subject": "Debt",
                "subject_slug": "debt"
            },
            {
                "subject": "Deficit",
                "subject_slug": "deficit"
            },
            {
                "subject": "Taxes",
                "subject_slug": "taxes"
            }
        ],
        "ruling_link_text": "Various analyses back her up",
        "speaker": {
            "last_name": "Clinton",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
            "name_slug": "hillary-clinton",
            "first_name": "Hillary",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [
            {
                "last_name": "Trump",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
                "name_slug": "donald-trump",
                "first_name": "Donald",
                "party": {
                    "party": "Republican",
                    "party_slug": "republican"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/sep/27/hillary-clinton/hillary-clinton-correctly-cites-outside-analyses-t/",
        "statement_context": "a Presidential debate at Hofstra University",
        "ruling_date": "2016-09-27T01:26:46",
        "statement": "<p>According to &quot;independent experts,&quot; Donald Trump&#39;s tax plan &quot;would blow up the debt by over $5 trillion and would in some instances disadvantage middle-class families compared to the wealthy.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-09-26",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Hillary Clinton claims Donald Trump invited Russian President Vladimir Putin  to hack Americans",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-halftrue.png",
            "ruling_slug": "half-true",
            "ruling": "Half-True"
        },
        "subject": [
            {
                "subject": "Civil Rights",
                "subject_slug": "civil-rights"
            },
            {
                "subject": "Crime",
                "subject_slug": "crime"
            },
            {
                "subject": "Foreign Policy",
                "subject_slug": "foreign-policy"
            },
            {
                "subject": "Homeland Security",
                "subject_slug": "homeland-security"
            },
            {
                "subject": "Technology",
                "subject_slug": "technology"
            }
        ],
        "ruling_link_text": "Trump later said he was being sarcastic",
        "speaker": {
            "last_name": "Clinton",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
            "name_slug": "hillary-clinton",
            "first_name": "Hillary",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [
            {
                "last_name": "Trump",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
                "name_slug": "donald-trump",
                "first_name": "Donald",
                "party": {
                    "party": "Republican",
                    "party_slug": "republican"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/sep/26/hillary-clinton/hillary-clinton-claims-donald-trump-invited-russia/",
        "statement_context": "a Presidential debate",
        "ruling_date": "2016-09-26T23:24:08",
        "statement": "<p>Says Donald Trump &quot;publicly invited Putin to hack into Americans&rsquo; (emails).&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-09-26",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Donald Trump says Hillary Clinton lauded controversial Trans-Pacific trade deal",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlytrue.png",
            "ruling_slug": "mostly-true",
            "ruling": "Mostly True"
        },
        "subject": [
            {
                "subject": "Candidate Biography",
                "subject_slug": "candidates-biography"
            },
            {
                "subject": "Economy",
                "subject_slug": "economy"
            },
            {
                "subject": "Foreign Policy",
                "subject_slug": "foreign-policy"
            },
            {
                "subject": "History",
                "subject_slug": "history"
            },
            {
                "subject": "Trade",
                "subject_slug": "trade"
            }
        ],
        "ruling_link_text": "As good as gold, she said",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [
            {
                "last_name": "Clinton",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
                "name_slug": "hillary-clinton",
                "first_name": "Hillary",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/sep/26/donald-trump/donald-trump-says-hillary-clinton-lauded-controver/",
        "statement_context": "a Presidential debate",
        "ruling_date": "2016-09-26T23:21:35",
        "statement": "<p>Says Hillary Clinton called the Trans-Pacific Partnership &quot;the gold standard. You called it the gold standard of trade deals. You said it&rsquo;s the finest deal you&rsquo;ve ever seen.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-09-26",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Hillary Clinton correct that gun deaths for young black males outpace next 9 causes combined",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-true.png",
            "ruling_slug": "true",
            "ruling": "True"
        },
        "subject": [
            {
                "subject": "Diversity",
                "subject_slug": "diversity"
            },
            {
                "subject": "Guns",
                "subject_slug": "guns"
            },
            {
                "subject": "Public Health",
                "subject_slug": "public-health"
            }
        ],
        "ruling_link_text": "She's right on this one, again",
        "speaker": {
            "last_name": "Clinton",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
            "name_slug": "hillary-clinton",
            "first_name": "Hillary",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2016/sep/26/hillary-clinton/hillary-clinton-correct-gun-deaths-young-black-mal/",
        "statement_context": "a Presidential debate at Hofstra University",
        "ruling_date": "2016-09-26T23:13:55",
        "statement": "<p>&quot;The gun epidemic is the leading cause of death of young African-American men, more than the next nine causes put together.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-09-26",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Hillary Clinton says Donald Trump has said he would negotiate down the national debt",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlytrue.png",
            "ruling_slug": "mostly-true",
            "ruling": "Mostly True"
        },
        "subject": [
            {
                "subject": "Candidate Biography",
                "subject_slug": "candidates-biography"
            },
            {
                "subject": "Debt",
                "subject_slug": "debt"
            },
            {
                "subject": "Deficit",
                "subject_slug": "deficit"
            },
            {
                "subject": "Economy",
                "subject_slug": "economy"
            },
            {
                "subject": "Federal Budget",
                "subject_slug": "federal-budget"
            }
        ],
        "ruling_link_text": "He talked about negotiating debt in May",
        "speaker": {
            "last_name": "Clinton",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
            "name_slug": "hillary-clinton",
            "first_name": "Hillary",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [
            {
                "last_name": "Trump",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
                "name_slug": "donald-trump",
                "first_name": "Donald",
                "party": {
                    "party": "Republican",
                    "party_slug": "republican"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/sep/26/hillary-clinton/hillary-clinton-says-donald-trump-has-said-he-woul/",
        "statement_context": "a Presidential debate",
        "ruling_date": "2016-09-26T21:54:04",
        "statement": "<p>Says Donald Trump once suggested that he &quot;would try to negotiate down the national debt.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-09-26",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Hillary Clinton says Donald Trump rooted for the housing crisis",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlytrue.png",
            "ruling_slug": "mostly-true",
            "ruling": "Mostly True"
        },
        "subject": [
            {
                "subject": "Economy",
                "subject_slug": "economy"
            },
            {
                "subject": "History",
                "subject_slug": "history"
            },
            {
                "subject": "Housing",
                "subject_slug": "housing"
            },
            {
                "subject": "Regulation",
                "subject_slug": "market-regulation"
            }
        ],
        "ruling_link_text": "He saw \"great opportunities\"",
        "speaker": {
            "last_name": "Clinton",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
            "name_slug": "hillary-clinton",
            "first_name": "Hillary",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [
            {
                "last_name": "Trump",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
                "name_slug": "donald-trump",
                "first_name": "Donald",
                "party": {
                    "party": "Republican",
                    "party_slug": "republican"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/sep/26/hillary-clinton/hillary-clinton-says-donald-trump-rooted-housing-c/",
        "statement_context": "a Presidential debate",
        "ruling_date": "2016-09-26T21:30:31",
        "statement": "<p>Says Donald Trump &quot;was one of the people who rooted for the housing crisis. He said back in 2006, &lsquo;Gee, I hope it does collapse because then I can go in and buy some and make some money.&rsquo; &quot;</p>\r\n"
    },
    {
        "statement_date": "2016-09-24",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Donald Trump wrong to say Hillary Clinton wants to shut down natural gas, fracking",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-halftrue.png",
            "ruling_slug": "half-true",
            "ruling": "Half-True"
        },
        "subject": [
            {
                "subject": "Climate Change",
                "subject_slug": "climate-change"
            },
            {
                "subject": "Economy",
                "subject_slug": "economy"
            },
            {
                "subject": "Energy",
                "subject_slug": "energy"
            },
            {
                "subject": "Environment",
                "subject_slug": "environment"
            },
            {
                "subject": "Jobs",
                "subject_slug": "jobs"
            },
            {
                "subject": "Public Health",
                "subject_slug": "public-health"
            },
            {
                "subject": "Regulation",
                "subject_slug": "market-regulation"
            },
            {
                "subject": "Water",
                "subject_slug": "water"
            }
        ],
        "ruling_link_text": "Frack attack",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [
            {
                "last_name": "Clinton",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
                "name_slug": "hillary-clinton",
                "first_name": "Hillary",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/sep/25/donald-trump/donald-trump-wrong-say-hillary-clinton-wants-shut-/",
        "statement_context": "a speech",
        "ruling_date": "2016-09-25T20:09:10",
        "statement": "<p>Says Hillary Clinton and Tim Kaine &quot;want to shut down shale, and shut down natural gas.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-09-09",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Hillary Clinton overstates impact of New START on Russia's nuclear arsenal",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-halftrue.png",
            "ruling_slug": "half-true",
            "ruling": "Half-True"
        },
        "subject": [
            {
                "subject": "Candidate Biography",
                "subject_slug": "candidates-biography"
            },
            {
                "subject": "Foreign Policy",
                "subject_slug": "foreign-policy"
            },
            {
                "subject": "Nuclear",
                "subject_slug": "nuclear"
            }
        ],
        "ruling_link_text": "Blowing up a nuclear claim",
        "speaker": {
            "last_name": "Clinton",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
            "name_slug": "hillary-clinton",
            "first_name": "Hillary",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2016/sep/21/hillary-clinton/hillary-clinton-overstates-impact-new-start-russia/",
        "statement_context": "a television ad",
        "ruling_date": "2016-09-21T15:35:48",
        "statement": "<p>Says New START, passed while Clinton was secretary of state, is a &quot;treaty cutting Russia&rsquo;s nuclear arms.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-09-15",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Hillary Clinton says immigration reform will add $700 billion to U.S. economy",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-halftrue.png",
            "ruling_slug": "half-true",
            "ruling": "Half-True"
        },
        "subject": [
            {
                "subject": "Economy",
                "subject_slug": "economy"
            },
            {
                "subject": "Immigration",
                "subject_slug": "immigration"
            }
        ],
        "ruling_link_text": "Needs context",
        "speaker": {
            "last_name": "Clinton",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
            "name_slug": "hillary-clinton",
            "first_name": "Hillary",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2016/sep/21/hillary-clinton/hillary-clinton-say-immigration-reform-will-add-70/",
        "statement_context": "a speech at the Congressional Hispanic Caucus Institute",
        "ruling_date": "2016-09-21T10:43:36",
        "statement": "<p>Says comprehensive immigration reform &quot;will add $700 billion to our economy.&quot;</p>\r\n\r\n<p>&nbsp;</p>\r\n"
    },
    {
        "statement_date": "2016-09-15",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Hillary Clinton correct; Hispanic wealth disproportionately lower than its share of the population",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-true.png",
            "ruling_slug": "true",
            "ruling": "True"
        },
        "subject": [
            {
                "subject": "Diversity",
                "subject_slug": "diversity"
            },
            {
                "subject": "Economy",
                "subject_slug": "economy"
            },
            {
                "subject": "Families",
                "subject_slug": "families"
            },
            {
                "subject": "Income",
                "subject_slug": "income"
            },
            {
                "subject": "Population",
                "subject_slug": "population"
            },
            {
                "subject": "Poverty",
                "subject_slug": "poverty"
            }
        ],
        "ruling_link_text": "Future growth not expected to help families",
        "speaker": {
            "last_name": "Clinton",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
            "name_slug": "hillary-clinton",
            "first_name": "Hillary",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2016/sep/19/hillary-clinton/hillary-clinton-correct-hispanic-wealth-disproport/",
        "statement_context": "a speech",
        "ruling_date": "2016-09-19T11:31:28",
        "statement": "<p>&quot;Latinos are 17 percent of our country&#39;s population but hold only 2 percent of its wealth.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-09-18",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Tim Kaine says millennials agree with Clinton, not Trump, on big issues",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlytrue.png",
            "ruling_slug": "mostly-true",
            "ruling": "Mostly True"
        },
        "subject": [
            {
                "subject": "Abortion",
                "subject_slug": "abortion"
            },
            {
                "subject": "Climate Change",
                "subject_slug": "climate-change"
            },
            {
                "subject": "Education",
                "subject_slug": "education"
            },
            {
                "subject": "Gays and Lesbians",
                "subject_slug": "gays-and-lesbians"
            },
            {
                "subject": "Immigration",
                "subject_slug": "immigration"
            }
        ],
        "ruling_link_text": "Young voters more in line with Clinton on issues",
        "speaker": {
            "last_name": "Kaine",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/AP_NCCB111_CAMPAIGN_2016_KA.JPG",
            "name_slug": "tim-kaine",
            "first_name": "Tim",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [
            {
                "last_name": "Clinton",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
                "name_slug": "hillary-clinton",
                "first_name": "Hillary",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            },
            {
                "last_name": "Trump",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
                "name_slug": "donald-trump",
                "first_name": "Donald",
                "party": {
                    "party": "Republican",
                    "party_slug": "republican"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/sep/18/tim-kaine/tim-kaine-says-millennials-agree-clinton-not-trump/",
        "statement_context": "an interview on \"Meet the Press.\"",
        "ruling_date": "2016-09-18T18:18:13",
        "statement": "<p>Says Hillary Clinton and millennials have the same positions on climate change, abortion rights, immigration reform, gay rights and college affordability. &quot;Donald Trump doesn&#39;t.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-09-13",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Donald Trump's Pants on Fire claim that Hillary Clinton 'has no child care plan'",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-pantsonfire.gif",
            "ruling_slug": "pants-fire",
            "ruling": "Pants on Fire!"
        },
        "subject": [
            {
                "subject": "Children",
                "subject_slug": "children"
            },
            {
                "subject": "Corrections and Updates",
                "subject_slug": "corrections-and-updates"
            }
        ],
        "ruling_link_text": "Right there on her website",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [
            {
                "last_name": "Clinton",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
                "name_slug": "hillary-clinton",
                "first_name": "Hillary",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/sep/14/donald-trump/trump-claim-Hillary-Clinton-has-no-child-ca/",
        "statement_context": "a speech in Aston, Pa.",
        "ruling_date": "2016-09-14T17:09:52",
        "statement": "<p>&quot;My opponent has no child care plan.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-08-26",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Clinton ad: Trump Management was charged with discriminating against black people",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-true.png",
            "ruling_slug": "true",
            "ruling": "True"
        },
        "subject": [
            {
                "subject": "Candidate Biography",
                "subject_slug": "candidates-biography"
            },
            {
                "subject": "Civil Rights",
                "subject_slug": "civil-rights"
            },
            {
                "subject": "Housing",
                "subject_slug": "housing"
            },
            {
                "subject": "Legal Issues",
                "subject_slug": "legal-issues"
            }
        ],
        "ruling_link_text": "Charged with violating Federal Housing Act",
        "speaker": {
            "last_name": "Clinton",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
            "name_slug": "hillary-clinton",
            "first_name": "Hillary",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [
            {
                "last_name": "Trump",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
                "name_slug": "donald-trump",
                "first_name": "Donald",
                "party": {
                    "party": "Republican",
                    "party_slug": "republican"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/sep/14/hillary-clinton/clinton-ad-trump-management-was-charged-discrimina/",
        "statement_context": "a Hillary for America television ad",
        "ruling_date": "2016-09-14T16:29:40",
        "statement": "<p>&quot;Trump Management was charged with discriminating against African-Americans and breaking federal law.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-09-12",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Comparing the medical histories of Clinton, Trump, Romney and Obama",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlytrue.png",
            "ruling_slug": "mostly-true",
            "ruling": "Mostly True"
        },
        "subject": [
            {
                "subject": "Candidate Biography",
                "subject_slug": "candidates-biography"
            },
            {
                "subject": "Disability",
                "subject_slug": "disability"
            },
            {
                "subject": "Elections",
                "subject_slug": "elections"
            },
            {
                "subject": "History",
                "subject_slug": "history"
            },
            {
                "subject": "Privacy",
                "subject_slug": "privacy"
            },
            {
                "subject": "Transparency",
                "subject_slug": "transparency"
            }
        ],
        "ruling_link_text": "Officially unofficial standard",
        "speaker": {
            "last_name": "Clinton",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
            "name_slug": "hillary-clinton",
            "first_name": "Hillary",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [
            {
                "last_name": "Trump",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
                "name_slug": "donald-trump",
                "first_name": "Donald",
                "party": {
                    "party": "Republican",
                    "party_slug": "republican"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/sep/14/hillary-clinton/comparing-medical-histories-clinton-trump-romney-o/",
        "statement_context": "an interview on CNN",
        "ruling_date": "2016-09-14T12:03:16",
        "statement": "<p>&quot;You&#39;ve got a medical report on me that meets the same standard as Mitt Romney and Barack Obama.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-09-13",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "That Hillary Clinton 'undercover nurse' story is bogus",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-pantsonfire.gif",
            "ruling_slug": "pants-fire",
            "ruling": "Pants on Fire!"
        },
        "subject": [
            {
                "subject": "Candidate Biography",
                "subject_slug": "candidates-biography"
            }
        ],
        "ruling_link_text": "A lesson in how one tweet became a \"news\" story",
        "speaker": {
            "last_name": "Bloggers",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/mugs/mug-bloggers.jpg",
            "name_slug": "blog-posting",
            "first_name": "",
            "party": {
                "party": "None",
                "party_slug": "none"
            }
        },
        "target": [
            {
                "last_name": "Clinton",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
                "name_slug": "hillary-clinton",
                "first_name": "Hillary",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/sep/13/blog-posting/hillary-clinton-undercover-nurse-story-bogus/",
        "statement_context": "posts",
        "ruling_date": "2016-09-13T18:06:49",
        "statement": "<p>Says Hillary Clinton had an &quot;undercover nurse&quot; with her at the Sept. 11 memorial ceremony in New York.</p>\r\n"
    },
    {
        "statement_date": "2016-09-08",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Bloggers hype Hillary Clinton health poll as a representative survey of all doctors; it's not",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-false.png",
            "ruling_slug": "false",
            "ruling": "False"
        },
        "subject": [
            {
                "subject": "Candidate Biography",
                "subject_slug": "candidates-biography"
            },
            {
                "subject": "Pundits",
                "subject_slug": "pundits"
            }
        ],
        "ruling_link_text": "Conservative/libertarian doctor group mostly polled its members",
        "speaker": {
            "last_name": "Bloggers",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/mugs/mug-bloggers.jpg",
            "name_slug": "blog-posting",
            "first_name": "",
            "party": {
                "party": "None",
                "party_slug": "none"
            }
        },
        "target": [
            {
                "last_name": "Clinton",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
                "name_slug": "hillary-clinton",
                "first_name": "Hillary",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/sep/12/blog-posting/bloggers-hype-hillary-clinton-health-poll-represen/",
        "statement_context": "internet postings",
        "ruling_date": "2016-09-12T14:15:30",
        "statement": "<p>Say&nbsp;&quot;71 percent of doctors say Hillary&#39;s health concerns are &#39;serious&#39; and &#39;could be disqualifying.&#39; &quot;</p>\r\n"
    },
    {
        "statement_date": "2016-09-06",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Hillary Clinton wrongly says it's 'legal' to fire employees for discussing pay 'in most places'",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlyfalse.png",
            "ruling_slug": "barely-true",
            "ruling": "Mostly False"
        },
        "subject": [
            {
                "subject": "Government regulation",
                "subject_slug": "government-regulation"
            },
            {
                "subject": "Income",
                "subject_slug": "income"
            },
            {
                "subject": "Jobs",
                "subject_slug": "jobs"
            },
            {
                "subject": "Regulation",
                "subject_slug": "market-regulation"
            },
            {
                "subject": "Small Business",
                "subject_slug": "small-business"
            },
            {
                "subject": "Unions",
                "subject_slug": "unions"
            },
            {
                "subject": "Women",
                "subject_slug": "women"
            },
            {
                "subject": "Workers",
                "subject_slug": "workers"
            }
        ],
        "ruling_link_text": "Claim is a pizza work",
        "speaker": {
            "last_name": "Clinton",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
            "name_slug": "hillary-clinton",
            "first_name": "Hillary",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2016/sep/09/hillary-clinton/hillary-clinton-wrongly-says-its-legal-fire-employ/",
        "statement_context": "a rally in Tampa",
        "ruling_date": "2016-09-09T16:52:14",
        "statement": "<p>&quot;That&#39;s legal: If you find out about somebody else&#39;s salary even if you&#39;re doing exactly the same job, you can be retaliated against, including being fired, in most places.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-09-07",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Hillary Clinton says Trump supported intervention in Libya",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlytrue.png",
            "ruling_slug": "mostly-true",
            "ruling": "Mostly True"
        },
        "subject": [
            {
                "subject": "Foreign Policy",
                "subject_slug": "foreign-policy"
            }
        ],
        "ruling_link_text": "Yep, he did",
        "speaker": {
            "last_name": "Clinton",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
            "name_slug": "hillary-clinton",
            "first_name": "Hillary",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2016/sep/07/hillary-clinton/clinton-says-trump-supported-intervention-libya/",
        "statement_context": "the NBC Commander-In-Chief Forum ",
        "ruling_date": "2016-09-07T23:47:14",
        "statement": "<p>Says Donald Trump is &quot;on record extensively supporting (the) intervention in Libya.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-09-07",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Hillary Clinton says none of her emails had classification headers",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlytrue.png",
            "ruling_slug": "mostly-true",
            "ruling": "Mostly True"
        },
        "subject": [
            {
                "subject": "Candidate Biography",
                "subject_slug": "candidates-biography"
            },
            {
                "subject": "Corrections and Updates",
                "subject_slug": "corrections-and-updates"
            }
        ],
        "ruling_link_text": "No emails were properly marked classified",
        "speaker": {
            "last_name": "Clinton",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
            "name_slug": "hillary-clinton",
            "first_name": "Hillary",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2016/sep/07/hillary-clinton/clinton-says-none-her-emails-were-labeled-top-secr/",
        "statement_context": "the NBC Commander-In-Chief Forum ",
        "ruling_date": "2016-09-07T23:45:28",
        "statement": "<p>&quot;Classified material has a header which says &lsquo;top-secret, secret, confidential.&rsquo; Nothing, and I will repeat this and this is verified in the report by the Department of Justice, none of the emails sent or received by me had such a header.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-09-07",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Hillary Clinton says Donald Trump supports privatizing the VA health care system",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlyfalse.png",
            "ruling_slug": "barely-true",
            "ruling": "Mostly False"
        },
        "subject": [
            {
                "subject": "Health Care",
                "subject_slug": "health-care"
            },
            {
                "subject": "Veterans",
                "subject_slug": "veterans"
            }
        ],
        "ruling_link_text": "Letting vets go outside the system isn't privatization",
        "speaker": {
            "last_name": "Clinton",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
            "name_slug": "hillary-clinton",
            "first_name": "Hillary",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [
            {
                "last_name": "Trump",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
                "name_slug": "donald-trump",
                "first_name": "Donald",
                "party": {
                    "party": "Republican",
                    "party_slug": "republican"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/sep/07/hillary-clinton/hillary-clinton-says-donald-trump-supports-privati/",
        "statement_context": "the NBC Commander-In-Chief Forum ",
        "ruling_date": "2016-09-07T22:32:00",
        "statement": "<p>Says Donald Trump supports &quot;an agenda out there&quot; to privatize the Veterans Affairs&nbsp;health care system.</p>\r\n"
    },
    {
        "statement_date": "2016-09-04",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Mike Pence cites Clinton support for more Syrian refugees",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-true.png",
            "ruling_slug": "true",
            "ruling": "True"
        },
        "subject": [
            {
                "subject": "Foreign Policy",
                "subject_slug": "foreign-policy"
            },
            {
                "subject": "Human Rights",
                "subject_slug": "human-rights"
            },
            {
                "subject": "Immigration",
                "subject_slug": "immigration"
            },
            {
                "subject": "Terrorism",
                "subject_slug": "terrorism"
            }
        ],
        "ruling_link_text": "Clinton says US needs to do more",
        "speaker": {
            "last_name": "Pence",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/AP_VASH107_CAMPAIGN_2016_PE.jpg",
            "name_slug": "mike-pence",
            "first_name": "Mike",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [
            {
                "last_name": "Clinton",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
                "name_slug": "hillary-clinton",
                "first_name": "Hillary",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/sep/04/mike-pence/mike-pence-cites-clinton-support-more-syrian-refug/",
        "statement_context": "an interview on \"Meet the Press\"",
        "ruling_date": "2016-09-04T17:56:59",
        "statement": "<p>Says Hillary Clinton &quot;wants to increase Syrian refugees to this country by 550 percent.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-08-31",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Donald Trump strays from key facts on Hillary Clinton 'amnesty,' social programs for immigrants",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlyfalse.png",
            "ruling_slug": "barely-true",
            "ruling": "Mostly False"
        },
        "subject": [
            {
                "subject": "Children",
                "subject_slug": "children"
            },
            {
                "subject": "Debt",
                "subject_slug": "debt"
            },
            {
                "subject": "Deficit",
                "subject_slug": "deficit"
            },
            {
                "subject": "Economy",
                "subject_slug": "economy"
            },
            {
                "subject": "Families",
                "subject_slug": "families"
            },
            {
                "subject": "Federal Budget",
                "subject_slug": "federal-budget"
            },
            {
                "subject": "Health Care",
                "subject_slug": "health-care"
            },
            {
                "subject": "History",
                "subject_slug": "history"
            },
            {
                "subject": "Homeland Security",
                "subject_slug": "homeland-security"
            },
            {
                "subject": "Immigration",
                "subject_slug": "immigration"
            },
            {
                "subject": "Jobs",
                "subject_slug": "jobs"
            },
            {
                "subject": "Legal Issues",
                "subject_slug": "legal-issues"
            },
            {
                "subject": "Medicaid",
                "subject_slug": "medicaid"
            },
            {
                "subject": "Medicare",
                "subject_slug": "medicare"
            },
            {
                "subject": "Retirement",
                "subject_slug": "retirement"
            },
            {
                "subject": "Social Security",
                "subject_slug": "social-security"
            }
        ],
        "ruling_link_text": "No, probably, and no",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [
            {
                "last_name": "Clinton",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
                "name_slug": "hillary-clinton",
                "first_name": "Hillary",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/sep/02/donald-trump/donald-trump-strays-key-facts-hillary-clinton-amne/",
        "statement_context": "a speech",
        "ruling_date": "2016-09-02T17:07:18",
        "statement": "<p>Says &quot;Hillary Clinton has pledged amnesty in her first 100 days, and her plan will provide Obamacare, Social Security, and Medicare for illegal immigrants, breaking the federal budget.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-08-24",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Did the Clinton Foundation go 'above and beyond' in transparency?",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-halftrue.png",
            "ruling_slug": "half-true",
            "ruling": "Half-True"
        },
        "subject": [
            {
                "subject": "Ethics",
                "subject_slug": "ethics"
            },
            {
                "subject": "Transparency",
                "subject_slug": "transparency"
            }
        ],
        "ruling_link_text": "Cleared a pretty low bar",
        "speaker": {
            "last_name": "Clinton",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
            "name_slug": "hillary-clinton",
            "first_name": "Hillary",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2016/aug/31/hillary-clinton/did-clinton-foundation-go-above-and-beyond-transpa/",
        "statement_context": "an interview on CNN.",
        "ruling_date": "2016-08-31T18:37:21",
        "statement": "<p>The Clinton Foundation &quot;took steps that went above and beyond all legal requirements and, indeed, all standard requirements followed by every other charitable organization.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-08-30",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Has Hillary Clinton not had a press conference in 269 days?",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlytrue.png",
            "ruling_slug": "mostly-true",
            "ruling": "Mostly True"
        },
        "subject": [
            {
                "subject": "Candidate Biography",
                "subject_slug": "candidates-biography"
            }
        ],
        "ruling_link_text": "Not in the most traditional sense",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [
            {
                "last_name": "Clinton",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
                "name_slug": "hillary-clinton",
                "first_name": "Hillary",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/aug/31/donald-trump/has-hillary-clinton-not-had-press-conference-269-d/",
        "statement_context": "an email",
        "ruling_date": "2016-08-31T10:02:18",
        "statement": "<p>&quot;It has been 269 days since (Hillary) Clinton has held a press conference.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-08-25",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Hillary Clinton, citing 'Trump Effect,' says teachers are reporting more bullying in schools",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlytrue.png",
            "ruling_slug": "mostly-true",
            "ruling": "Mostly True"
        },
        "subject": [
            {
                "subject": "Education",
                "subject_slug": "education"
            },
            {
                "subject": "Immigration",
                "subject_slug": "immigration"
            },
            {
                "subject": "Islam",
                "subject_slug": "islam"
            }
        ],
        "ruling_link_text": "Teachers reported 'Trump Effect' in survey",
        "speaker": {
            "last_name": "Clinton",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
            "name_slug": "hillary-clinton",
            "first_name": "Hillary",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [
            {
                "last_name": "Trump",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
                "name_slug": "donald-trump",
                "first_name": "Donald",
                "party": {
                    "party": "Republican",
                    "party_slug": "republican"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/aug/26/hillary-clinton/hillary-clinton-citing-trump-effect-says-teachers-/",
        "statement_context": "remarks in Reno",
        "ruling_date": "2016-08-26T17:00:00",
        "statement": "<p>&quot;Parents and teachers are already worrying about what they call the &lsquo;Trump Effect.&rsquo; They report that bullying and harassment are on the rise in our schools, especially targeting students of color, Muslims&nbsp;and immigrants.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-08-25",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Trump's False claim Hillary Clinton wants to raise taxes on African-American businesses 50 percent",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-false.png",
            "ruling_slug": "false",
            "ruling": "False"
        },
        "subject": [
            {
                "subject": "Small Business",
                "subject_slug": "small-business"
            },
            {
                "subject": "Taxes",
                "subject_slug": "taxes"
            }
        ],
        "ruling_link_text": "No part of Clinton's plan backs up muddled talking point",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [
            {
                "last_name": "Clinton",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
                "name_slug": "hillary-clinton",
                "first_name": "Hillary",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/aug/26/donald-trump/clinton-wants-tax-african-american-businesses-50-p/",
        "statement_context": "a speech in Manchester, N.H.",
        "ruling_date": "2016-08-26T15:49:58",
        "statement": "<p>Says Hillary Clinton &quot;wants to raise taxes on African-American owned businesses to as much as nearly 50 percent more than they&#39;re paying now.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-08-24",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Donald Trump: Clinton's celebrity backers 'aren't very hot anymore'",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlyfalse.png",
            "ruling_slug": "barely-true",
            "ruling": "Mostly False"
        },
        "subject": [
            {
                "subject": "Candidate Biography",
                "subject_slug": "candidates-biography"
            }
        ],
        "ruling_link_text": "Data (yes there's data) says no",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [
            {
                "last_name": "Clinton",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
                "name_slug": "hillary-clinton",
                "first_name": "Hillary",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/aug/25/donald-trump/donald-trump-clintons-celebrity-backers-arent-very/",
        "statement_context": "at a rally in Tampa, Fla.",
        "ruling_date": "2016-08-25T18:55:04",
        "statement": "<p>The Hollywood celebrities endorsing Hillary Clinton are &quot;in many cases celebrities that aren&rsquo;t very hot anymore.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-08-23",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Reince Priebus' False claim that 80% of Clinton Foundation costs are overhead",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-false.png",
            "ruling_slug": "false",
            "ruling": "False"
        },
        "subject": [
            {
                "subject": "Candidate Biography",
                "subject_slug": "candidates-biography"
            }
        ],
        "ruling_link_text": "The fact is, this is False",
        "speaker": {
            "last_name": "Priebus",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Reince_Priebus_Pfact_mug.jpg",
            "name_slug": "reince-priebus",
            "first_name": "Reince",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [
            {
                "last_name": "Clinton",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
                "name_slug": "hillary-clinton",
                "first_name": "Hillary",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/aug/25/reince-priebus/reince-priebus-false-claim-80-clinton-foundation-c/",
        "statement_context": "comments on \"The Mike Gallagher Show\"",
        "ruling_date": "2016-08-25T10:53:13",
        "statement": "<p>&quot;The fact is&quot; the Clinton Foundation has &quot;got about 80 percent in overhead and 20 percent of the money is actually getting into the places it should.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-08-19",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Donald Trump ad says illegal immigrants would be collecting Social Security under Hillary Clinton",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlyfalse.png",
            "ruling_slug": "barely-true",
            "ruling": "Mostly False"
        },
        "subject": [
            {
                "subject": "Economy",
                "subject_slug": "economy"
            },
            {
                "subject": "Immigration",
                "subject_slug": "immigration"
            },
            {
                "subject": "Retirement",
                "subject_slug": "retirement"
            },
            {
                "subject": "Social Security",
                "subject_slug": "social-security"
            }
        ],
        "ruling_link_text": "Timing wrong, benefits earned",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [
            {
                "last_name": "Clinton",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
                "name_slug": "hillary-clinton",
                "first_name": "Hillary",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/aug/24/donald-trump/donald-trump-ad-says-illegal-immigrants-would-be-c/",
        "statement_context": "a campaign ad",
        "ruling_date": "2016-08-24T17:57:08",
        "statement": "<p>Says Hillary Clinton wants&nbsp;illegal immigrants &quot;collecting&nbsp;Social Security benefits.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-08-10",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Clinton surrogate spins Clinton Foundation defense",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlyfalse.png",
            "ruling_slug": "barely-true",
            "ruling": "Mostly False"
        },
        "subject": [
            {
                "subject": "Ethics",
                "subject_slug": "ethics"
            }
        ],
        "ruling_link_text": "No violation, but still concerning",
        "speaker": {
            "last_name": "Granholm",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Granholm_mug.jpg",
            "name_slug": "jennifer-granholm",
            "first_name": "Jennifer",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [
            {
                "last_name": "Clinton",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
                "name_slug": "hillary-clinton",
                "first_name": "Hillary",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/aug/24/jennifer-granholm/clinton-surrogate-spins-clinton-foundation-defense/",
        "statement_context": "an interview on CNN",
        "ruling_date": "2016-08-24T13:33:54",
        "statement": "<p>Says Hillary Clinton &quot;abided by the ethics agreement&quot; between the Clinton Foundation and the Obama administration.</p>\r\n"
    },
    {
        "statement_date": "2016-08-23",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Donald Trump fundraising email takes CNN anchor's comments out of context",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlyfalse.png",
            "ruling_slug": "barely-true",
            "ruling": "Mostly False"
        },
        "subject": [
            {
                "subject": "Pundits",
                "subject_slug": "pundits"
            }
        ],
        "ruling_link_text": "Comment not meant the way Trump campaign says",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [
            {
                "last_name": "Clinton",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
                "name_slug": "hillary-clinton",
                "first_name": "Hillary",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            },
            {
                "last_name": "Cuomo",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/cuomo_headshot.jpg",
                "name_slug": "chris-cuomo",
                "first_name": "Chris",
                "party": {
                    "party": "Journalist",
                    "party_slug": "journalist"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/aug/23/donald-trump/donald-trump-fundraising-email-takes-cnn-anchors-c/",
        "statement_context": "a fundraising email",
        "ruling_date": "2016-08-23T16:34:11",
        "statement": "<p>Says a CNN anchor said that Hillary Clinton has gotten &quot;a free ride so far from the media. We&#39;re the biggest ones supporting her campaign.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-08-15",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Clinton says almost a half-million immigrants still eligible for DACA, particularly Asians",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-true.png",
            "ruling_slug": "true",
            "ruling": "True"
        },
        "subject": [
            {
                "subject": "Immigration",
                "subject_slug": "immigration"
            }
        ],
        "ruling_link_text": "Based on estimates of at least 1.3 million eligible people",
        "speaker": {
            "last_name": "Clinton",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
            "name_slug": "hillary-clinton",
            "first_name": "Hillary",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2016/aug/22/hillary-clinton/clinton-says-almost-half-million-people-still-elig/",
        "statement_context": "a post on Medium",
        "ruling_date": "2016-08-22T18:41:47",
        "statement": "<p>&quot;Almost half a million people are still eligible (for DACA), particularly in the Asian-American and Pacific Islander community.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-08-17",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Clinton repeats wrong claim that no other 2016 candidate pledged not to raise middle-class taxes",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-pantsonfire.gif",
            "ruling_slug": "pants-fire",
            "ruling": "Pants on Fire!"
        },
        "subject": [
            {
                "subject": "Income",
                "subject_slug": "income"
            },
            {
                "subject": "Taxes",
                "subject_slug": "taxes"
            }
        ],
        "ruling_link_text": "15 GOP candidates made same pledge",
        "speaker": {
            "last_name": "Clinton",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
            "name_slug": "hillary-clinton",
            "first_name": "Hillary",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2016/aug/17/hillary-clinton/clinton-repeats-wrong-claim-no-other-2016-candidat/",
        "statement_context": "a campaign rally in Cleveland",
        "ruling_date": "2016-08-17T18:14:26",
        "statement": "<p>&quot;I am the only candidate who ran in either the Democratic or the Republican primary who said from the very beginning (that) I will not raise taxes on the middle class.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-08-15",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Hillary Clinton's claim that she would make the biggest jobs investment since World War II",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-halftrue.png",
            "ruling_slug": "half-true",
            "ruling": "Half-True"
        },
        "subject": [
            {
                "subject": "Economy",
                "subject_slug": "economy"
            },
            {
                "subject": "Education",
                "subject_slug": "education"
            },
            {
                "subject": "Energy",
                "subject_slug": "energy"
            },
            {
                "subject": "Federal Budget",
                "subject_slug": "federal-budget"
            },
            {
                "subject": "Income",
                "subject_slug": "income"
            },
            {
                "subject": "Infrastructure",
                "subject_slug": "infrastructure"
            },
            {
                "subject": "Jobs",
                "subject_slug": "jobs"
            },
            {
                "subject": "Technology",
                "subject_slug": "technology"
            }
        ],
        "ruling_link_text": "Requires many assumptions",
        "speaker": {
            "last_name": "Clinton",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
            "name_slug": "hillary-clinton",
            "first_name": "Hillary",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2016/aug/17/hillary-clinton/hillary-clintons-claim-she-would-make-biggest-jobs/",
        "statement_context": "a campaign speech in Scranton, Pa. ",
        "ruling_date": "2016-08-17T12:05:52",
        "statement": "<p>Says her campaign platform includes the &quot;biggest investment in new, good-paying jobs since World War II.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-08-11",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "In economic speech, Hillary Clinton offers cherry-picked summary of her trade votes",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-halftrue.png",
            "ruling_slug": "half-true",
            "ruling": "Half-True"
        },
        "subject": [
            {
                "subject": "Trade",
                "subject_slug": "trade"
            },
            {
                "subject": "Voting Record",
                "subject_slug": "voting-record"
            }
        ],
        "ruling_link_text": "Ignores a lot of votes for bilateral trade deals",
        "speaker": {
            "last_name": "Clinton",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
            "name_slug": "hillary-clinton",
            "first_name": "Hillary",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2016/aug/12/hillary-clinton/economic-speech-hillary-clinton-offers-cherry-pick/",
        "statement_context": "an economic speech in Warren, Mich.",
        "ruling_date": "2016-08-12T14:23:57",
        "statement": "<p>&quot;I opposed the only multilateral trade deal that came before the Senate while I was there.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-08-02",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Has Donald Trump talked about using nukes against America's Western European allies?",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlyfalse.png",
            "ruling_slug": "barely-true",
            "ruling": "Mostly False"
        },
        "subject": [
            {
                "subject": "Nuclear",
                "subject_slug": "nuclear"
            }
        ],
        "ruling_link_text": "Never explicitly said",
        "speaker": {
            "last_name": "Clinton",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
            "name_slug": "hillary-clinton",
            "first_name": "Hillary",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2016/aug/12/hillary-clinton/has-donald-trump-talked-about-using-nukes-against-/",
        "statement_context": "a campaign ad",
        "ruling_date": "2016-08-12T09:53:28",
        "statement": "<p>Says Donald Trump &quot;has been talking about the option of using a nuclear weapon against our Western European allies.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-08-10",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Donald Trump's Pants on Fire claim that Barack Obama 'founded' ISIS, Hillary Clinton was 'cofounder'",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-pantsonfire.gif",
            "ruling_slug": "pants-fire",
            "ruling": "Pants on Fire!"
        },
        "subject": [
            {
                "subject": "Foreign Policy",
                "subject_slug": "foreign-policy"
            },
            {
                "subject": "Terrorism",
                "subject_slug": "terrorism"
            }
        ],
        "ruling_link_text": "He flatly rejected a more plausible critique",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [
            {
                "last_name": "Clinton",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
                "name_slug": "hillary-clinton",
                "first_name": "Hillary",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            },
            {
                "last_name": "Obama",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_OBAMA_1.jpg",
                "name_slug": "barack-obama",
                "first_name": "Barack",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/aug/11/donald-trump/donald-trump-pants-fire-claim-obama-founded-isis-c/",
        "statement_context": "a speech in Sunrise, Fla.",
        "ruling_date": "2016-08-11T14:07:25",
        "statement": "<p>Says Barack Obama &quot;founded ISIS. I would say the co-founder would be crooked Hillary Clinton.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-08-08",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Donald Trump says Hillary Clinton plan would tax small businesses at nearly 50 percent",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlyfalse.png",
            "ruling_slug": "barely-true",
            "ruling": "Mostly False"
        },
        "subject": [
            {
                "subject": "Economy",
                "subject_slug": "economy"
            },
            {
                "subject": "Small Business",
                "subject_slug": "small-business"
            },
            {
                "subject": "Taxes",
                "subject_slug": "taxes"
            },
            {
                "subject": "Wealth",
                "subject_slug": "wealth"
            }
        ],
        "ruling_link_text": "'Many' is fewer than 0.02%",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [
            {
                "last_name": "Clinton",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
                "name_slug": "hillary-clinton",
                "first_name": "Hillary",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/aug/10/donald-trump/donald-trump-says-hillary-clinton-plan-would-tax-s/",
        "statement_context": "a speech",
        "ruling_date": "2016-08-10T17:59:49",
        "statement": "<p>Says Hillary Clinton&#39;s plan &quot;would tax many small businesses by almost 50 percent.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-08-05",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Clinton says undocumented immigrants pay $12 billion a year into Social Security",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-halftrue.png",
            "ruling_slug": "half-true",
            "ruling": "Half-True"
        },
        "subject": [
            {
                "subject": "Immigration",
                "subject_slug": "immigration"
            },
            {
                "subject": "Social Security",
                "subject_slug": "social-security"
            }
        ],
        "ruling_link_text": "Not all of it comes from workers",
        "speaker": {
            "last_name": "Clinton",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
            "name_slug": "hillary-clinton",
            "first_name": "Hillary",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2016/aug/10/hillary-clinton/undocumented-immigrants-social-security-contributi/",
        "statement_context": "remarks at journalists' convention",
        "ruling_date": "2016-08-10T12:15:44",
        "statement": "<p>Undocumented immigrants&nbsp;&quot;pay $12 billion a year into Social Security.&quot;</p>\r\n"
    }
];
hillary=hillary.filter(function(item){return speakerCheck(item, "hillary-clinton")});

var obama=[
    {
        "statement_date": "2018-01-08",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "How accurate is Donald Trump about black, Hispanic unemployment?",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlytrue.png",
            "ruling_slug": "mostly-true",
            "ruling": "Mostly True"
        },
        "subject": [
            {
                "subject": "Economy",
                "subject_slug": "economy"
            },
            {
                "subject": "Jobs",
                "subject_slug": "jobs"
            }
        ],
        "ruling_link_text": "Numbers are right; criticism of Democratic record isn't",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [
            {
                "last_name": "Obama",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_OBAMA_1.jpg",
                "name_slug": "barack-obama",
                "first_name": "Barack",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2018/jan/08/donald-trump/how-accurate-donald-trumps-about-black-hispa/",
        "statement_context": "a tweet",
        "ruling_date": "2018-01-08T13:25:51",
        "statement": "<p>&quot;African American unemployment is the lowest ever recorded in our country. The Hispanic unemployment rate dropped a full point in the last year and is close to the lowest in recorded history. Dems did nothing for you but get your vote!&quot;</p>\r\n"
    },
    {
        "statement_date": "2017-11-01",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Can 8 in 10 people get health coverage for under $75? Not most Americans",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-halftrue.png",
            "ruling_slug": "half-true",
            "ruling": "Half-True"
        },
        "subject": [
            {
                "subject": "Health Care",
                "subject_slug": "health-care"
            }
        ],
        "ruling_link_text": "Under 4 percent of Americans",
        "speaker": {
            "last_name": "Obama",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_OBAMA_1.jpg",
            "name_slug": "barack-obama",
            "first_name": "Barack",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2017/nov/06/barack-obama/can-eight-10-people-get-health-coverage-under-75-n/",
        "statement_context": "a video",
        "ruling_date": "2017-11-06T11:06:51",
        "statement": "<p>&quot;Eight in 10 people this year can find plans for $75 a month or less.&quot;</p>\r\n"
    },
    {
        "statement_date": "2017-08-08",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "No, the Obama administration didn't invent the term 'lone wolf' for terrorists",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-pantsonfire.gif",
            "ruling_slug": "pants-fire",
            "ruling": "Pants on Fire!"
        },
        "subject": [
            {
                "subject": "Homeland Security",
                "subject_slug": "homeland-security"
            },
            {
                "subject": "Terrorism",
                "subject_slug": "terrorism"
            }
        ],
        "ruling_link_text": "Term existed well before Obama",
        "speaker": {
            "last_name": "Gorka",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/gorkamug.jpg",
            "name_slug": "sebastian-gorka",
            "first_name": "Sebastian",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [
            {
                "last_name": "Obama",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_OBAMA_1.jpg",
                "name_slug": "barack-obama",
                "first_name": "Barack",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2017/aug/10/sebastian-gorka/no-obama-administration-didnt-invent-term-lone-wol/",
        "statement_context": "an interview with MSNBC",
        "ruling_date": "2017-08-10T16:05:20",
        "statement": "<p>&quot;There&#39;s no such thing as a lone wolf. ... That was a phrase invented by the last administration to make Americans stupid.&quot;</p>\r\n"
    },
    {
        "statement_date": "2017-06-22",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Obama blasts GOP Senate bill as tax cut for the rich at health care’s expense",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlytrue.png",
            "ruling_slug": "mostly-true",
            "ruling": "Mostly True"
        },
        "subject": [
            {
                "subject": "Health Care",
                "subject_slug": "health-care"
            },
            {
                "subject": "Taxes",
                "subject_slug": "taxes"
            }
        ],
        "ruling_link_text": "Robin Hood in reverse",
        "speaker": {
            "last_name": "Obama",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_OBAMA_1.jpg",
            "name_slug": "barack-obama",
            "first_name": "Barack",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2017/jun/26/barack-obama/obama-blasts-gop-senate-bill-tax-cut-rich-health-c/",
        "statement_context": "a Facebook post",
        "ruling_date": "2017-06-26T16:18:02",
        "statement": "<p>The Senate bill &quot;hands enormous tax cuts to the rich and to the drug and insurance industries, paid for by cutting health care for everybody else.&quot;</p>\r\n"
    },
    {
        "statement_date": "2017-03-23",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Obama: No premium hike for 'vast majority' covered on government exchanges",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlytrue.png",
            "ruling_slug": "mostly-true",
            "ruling": "Mostly True"
        },
        "subject": [
            {
                "subject": "Health Care",
                "subject_slug": "health-care"
            }
        ],
        "ruling_link_text": "Insulated from premium hikes",
        "speaker": {
            "last_name": "Obama",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_OBAMA_1.jpg",
            "name_slug": "barack-obama",
            "first_name": "Barack",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2017/mar/23/barack-obama/obama-no-premium-hike-vast-majority-covered-govern/",
        "statement_context": "a statement on the 7th anniversary of the Affordable Care Act",
        "ruling_date": "2017-03-23T16:57:11",
        "statement": "<p>&quot;The vast majority of marketplace enrollees have experienced no average premium hike at all.&quot;</p>\r\n\r\n<div>&nbsp;</div>\r\n"
    },
    {
        "statement_date": "2017-03-20",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Devin Nunes oversimplifies timeline of Obama 'reset' with Russia",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-halftrue.png",
            "ruling_slug": "half-true",
            "ruling": "Half-True"
        },
        "subject": [
            {
                "subject": "Foreign Policy",
                "subject_slug": "foreign-policy"
            }
        ],
        "ruling_link_text": "Revoking the reset",
        "speaker": {
            "last_name": "Nunes",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Nunes_mug.jpg",
            "name_slug": "devin-nunes",
            "first_name": "Devin",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [
            {
                "last_name": "Obama",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_OBAMA_1.jpg",
                "name_slug": "barack-obama",
                "first_name": "Barack",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2017/mar/20/devin-nunes/devin-nunes-oversimplifies-timeline-obama-reset-ru/",
        "statement_context": "a House Intelligence Committee hearing",
        "ruling_date": "2017-03-20T17:20:19",
        "statement": "<p>&quot;In recent years ... the Obama administration was committed to the notion, against all evidence, that we could reset relations with Putin.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-12-15",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Pants on Fire! Trump tweet about White House, Russian hacking probe",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-pantsonfire.gif",
            "ruling_slug": "pants-fire",
            "ruling": "Pants on Fire!"
        },
        "subject": [
            {
                "subject": "Elections",
                "subject_slug": "elections"
            },
            {
                "subject": "Homeland Security",
                "subject_slug": "homeland-security"
            }
        ],
        "ruling_link_text": "Accusations came a month before election",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [
            {
                "last_name": "Obama",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_OBAMA_1.jpg",
                "name_slug": "barack-obama",
                "first_name": "Barack",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/dec/15/donald-trump/pants-fire-trump-tweet-about-russian-hacking-probe/",
        "statement_context": "a tweet ",
        "ruling_date": "2016-12-15T17:55:27",
        "statement": "<p>&quot;If Russia, or some other entity, was hacking, why did the White House wait so long to act? Why did they only complain after Hillary lost?&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-11-02",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Obama says Republicans tried to 'purge' black Democrats from voter rolls in North Carolina",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-halftrue.png",
            "ruling_slug": "half-true",
            "ruling": "Half-True"
        },
        "subject": [
            {
                "subject": "Elections",
                "subject_slug": "elections"
            }
        ],
        "ruling_link_text": "In a small town, but not the state",
        "speaker": {
            "last_name": "Obama",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_OBAMA_1.jpg",
            "name_slug": "barack-obama",
            "first_name": "Barack",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2016/nov/07/barack-obama/obama-says-republicans-tried-purge-black-democrats/",
        "statement_context": "a rally in North Carolina",
        "ruling_date": "2016-11-07T17:29:51",
        "statement": "<p>The list of voters that North Carolina Republicans &quot;tried to purge was two-thirds black and Democratic.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-10-28",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Trump's claim about weak economic growth under President Obama doesn't tell the full story",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlytrue.png",
            "ruling_slug": "mostly-true",
            "ruling": "Mostly True"
        },
        "subject": [
            {
                "subject": "Economy",
                "subject_slug": "economy"
            }
        ],
        "ruling_link_text": "Calendar years, yes; counting by quarters, no",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [
            {
                "last_name": "Obama",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_OBAMA_1.jpg",
                "name_slug": "barack-obama",
                "first_name": "Barack",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/oct/31/donald-trump/trumps-claim-about-weak-economic-growth-under-obam/",
        "statement_context": "a campaign speech",
        "ruling_date": "2016-10-31T18:00:00",
        "statement": "<p>Says Barack Obama &quot;is the first president in modern history not to have a single year of 3 percent growth.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-10-19",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Trump right on Obama's deportation numbers, wrong about nobody talking about it",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-halftrue.png",
            "ruling_slug": "half-true",
            "ruling": "Half-True"
        },
        "subject": [
            {
                "subject": "Immigration",
                "subject_slug": "immigration"
            }
        ],
        "ruling_link_text": "Media reports, congressional hearings, advocates talking about it",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [
            {
                "last_name": "Obama",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_OBAMA_1.jpg",
                "name_slug": "barack-obama",
                "first_name": "Barack",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/oct/21/donald-trump/trump-right-deportation-numbers-wrong-talks-about-/",
        "statement_context": "the third presidential debate",
        "ruling_date": "2016-10-21T11:04:17",
        "statement": "<p>&quot;Nobody knows about it, nobody talks about it, but under Obama, millions of people have been moved out of this country, they&#39;ve been deported.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-09-28",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Obama says terrorism worldwide has not increased substantially since he took office",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlyfalse.png",
            "ruling_slug": "barely-true",
            "ruling": "Mostly False"
        },
        "subject": [
            {
                "subject": "Homeland Security",
                "subject_slug": "homeland-security"
            },
            {
                "subject": "Terrorism",
                "subject_slug": "terrorism"
            }
        ],
        "ruling_link_text": "By some estimates, it has",
        "speaker": {
            "last_name": "Obama",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_OBAMA_1.jpg",
            "name_slug": "barack-obama",
            "first_name": "Barack",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2016/oct/13/barack-obama/obama-says-terrorism-worldwide-has-not-increased-s/",
        "statement_context": "a CNN town hall",
        "ruling_date": "2016-10-13T16:43:53",
        "statement": "<p>&quot;If you look worldwide, the number of terrorist incidents have not substantially increased.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-09-28",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Barack Obama says VA budget has risen 85 percent on his watch",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-halftrue.png",
            "ruling_slug": "half-true",
            "ruling": "Half-True"
        },
        "subject": [
            {
                "subject": "Federal Budget",
                "subject_slug": "federal-budget"
            },
            {
                "subject": "Veterans",
                "subject_slug": "veterans"
            }
        ],
        "ruling_link_text": "That's the rosiest interpretation",
        "speaker": {
            "last_name": "Obama",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_OBAMA_1.jpg",
            "name_slug": "barack-obama",
            "first_name": "Barack",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2016/sep/30/barack-obama/barack-obama-says-va-budget-has-risen-85-percent-h/",
        "statement_context": "a CNN town hall",
        "ruling_date": "2016-09-30T10:00:00",
        "statement": "<p>&quot;Since I came into office &hellip; we have increased the VA budget by 85 percent.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-09-16",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Donald Trump's Pants on Fire claim that he 'finished' the Obama birther talk",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-pantsonfire.gif",
            "ruling_slug": "pants-fire",
            "ruling": "Pants on Fire!"
        },
        "subject": [
            {
                "subject": "Obama Birth Certificate",
                "subject_slug": "obama-birth-certificate"
            }
        ],
        "ruling_link_text": "Kept tweeting about it, and many still believe it",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [
            {
                "last_name": "Obama",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_OBAMA_1.jpg",
                "name_slug": "barack-obama",
                "first_name": "Barack",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/sep/16/donald-trump/donald-trumps-pants-fire-claim-he-finished-obama-b/",
        "statement_context": "in a speech",
        "ruling_date": "2016-09-16T14:06:00",
        "statement": "<p>&quot;I finished&quot; the controversy&nbsp;about where&nbsp;President Barack Obama was born.</p>\r\n"
    },
    {
        "statement_date": "2016-09-13",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Barack Obama says Trump foundation took other people's money, bought a six-foot-tall painting",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-true.png",
            "ruling_slug": "true",
            "ruling": "True"
        },
        "subject": [
            {
                "subject": "Candidate Biography",
                "subject_slug": "candidates-biography"
            }
        ],
        "ruling_link_text": "Reporter says Obama fairly cited his story",
        "speaker": {
            "last_name": "Obama",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_OBAMA_1.jpg",
            "name_slug": "barack-obama",
            "first_name": "Barack",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [
            {
                "last_name": "Trump",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
                "name_slug": "donald-trump",
                "first_name": "Donald",
                "party": {
                    "party": "Republican",
                    "party_slug": "republican"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/sep/13/barack-obama/barack-obama-says-trump-foundation-took-other-peop/",
        "statement_context": "a speech in Philadelphia",
        "ruling_date": "2016-09-13T17:21:30",
        "statement": "<p>Says Donald Trump&#39;s&nbsp;foundation &quot;took money other people gave to his charity and then bought a six-foot-tall painting of himself.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-09-04",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Rudy Giuliani says food stamps rose two and a half times under Barack Obama",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-false.png",
            "ruling_slug": "false",
            "ruling": "False"
        },
        "subject": [
            {
                "subject": "Federal Budget",
                "subject_slug": "federal-budget"
            },
            {
                "subject": "Poverty",
                "subject_slug": "poverty"
            }
        ],
        "ruling_link_text": "It rose, but by a lot less",
        "speaker": {
            "last_name": "Giuliani",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/mugs/mug-rudygiuliani.jpg",
            "name_slug": "rudy-giuliani",
            "first_name": "Rudy",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [
            {
                "last_name": "Obama",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_OBAMA_1.jpg",
                "name_slug": "barack-obama",
                "first_name": "Barack",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/sep/07/rudy-giuliani/rudy-giuliani-says-food-stamps-rose-two-and-half-t/",
        "statement_context": "an interview on CNN's \"State of the Union\"",
        "ruling_date": "2016-09-07T17:23:43",
        "statement": "<p>&quot;Food stamps have gone up two-and-a-half times under Barack Obama.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-08-31",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Donald Trump says Obama has let 300,000 criminal aliens to go back into U.S. communities",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-halftrue.png",
            "ruling_slug": "half-true",
            "ruling": "Half-True"
        },
        "subject": [
            {
                "subject": "Crime",
                "subject_slug": "crime"
            },
            {
                "subject": "Criminal Justice",
                "subject_slug": "criminal-justice"
            },
            {
                "subject": "Homeland Security",
                "subject_slug": "homeland-security"
            },
            {
                "subject": "Immigration",
                "subject_slug": "immigration"
            }
        ],
        "ruling_link_text": "The topline number is disputed",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [
            {
                "last_name": "Obama",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_OBAMA_1.jpg",
                "name_slug": "barack-obama",
                "first_name": "Barack",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/sep/02/donald-trump/donald-trump-says-obama-administration-has-let-300/",
        "statement_context": "a speech on immigration in Phoenix",
        "ruling_date": "2016-09-02T17:03:32",
        "statement": "<p>&quot;Since 2013 alone, the Obama administration has allowed 300,000 criminal aliens to return back into United States communities. These are individuals encountered or identified by (Immigration and Customs Enforcement), but who were not detained or processed for deportation because it wouldn&#39;t have been politically correct.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-08-24",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Donald Trump offers misleading statistics about Hispanic poverty",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlyfalse.png",
            "ruling_slug": "barely-true",
            "ruling": "Mostly False"
        },
        "subject": [
            {
                "subject": "Diversity",
                "subject_slug": "diversity"
            },
            {
                "subject": "Poverty",
                "subject_slug": "poverty"
            }
        ],
        "ruling_link_text": "Misleadingly high",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [
            {
                "last_name": "Obama",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_OBAMA_1.jpg",
                "name_slug": "barack-obama",
                "first_name": "Barack",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/aug/25/donald-trump/donald-trump-offers-misleading-statistics-about-hi/",
        "statement_context": "a speech in Tampa",
        "ruling_date": "2016-08-25T11:30:33",
        "statement": "<p>&quot;Since President Obama came into office, another 2 million Hispanics have joined the ranks of those in poverty. &hellip; The number of Hispanic children living in poverty increased by 15 percent in that short period of time.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-08-10",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Donald Trump's Pants on Fire claim that Barack Obama 'founded' ISIS, Hillary Clinton was 'cofounder'",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-pantsonfire.gif",
            "ruling_slug": "pants-fire",
            "ruling": "Pants on Fire!"
        },
        "subject": [
            {
                "subject": "Foreign Policy",
                "subject_slug": "foreign-policy"
            },
            {
                "subject": "Terrorism",
                "subject_slug": "terrorism"
            }
        ],
        "ruling_link_text": "He flatly rejected a more plausible critique",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [
            {
                "last_name": "Clinton",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
                "name_slug": "hillary-clinton",
                "first_name": "Hillary",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            },
            {
                "last_name": "Obama",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_OBAMA_1.jpg",
                "name_slug": "barack-obama",
                "first_name": "Barack",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/aug/11/donald-trump/donald-trump-pants-fire-claim-obama-founded-isis-c/",
        "statement_context": "a speech in Sunrise, Fla.",
        "ruling_date": "2016-08-11T14:07:25",
        "statement": "<p>Says Barack Obama &quot;founded ISIS. I would say the co-founder would be crooked Hillary Clinton.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-08-08",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Donald Trump exaggerates Michigan job losses from coal regulations",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-false.png",
            "ruling_slug": "false",
            "ruling": "False"
        },
        "subject": [
            {
                "subject": "Energy",
                "subject_slug": "energy"
            },
            {
                "subject": "Environment",
                "subject_slug": "environment"
            },
            {
                "subject": "Government regulation",
                "subject_slug": "government-regulation"
            },
            {
                "subject": "Jobs",
                "subject_slug": "jobs"
            }
        ],
        "ruling_link_text": "Wrong on several levels",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [
            {
                "last_name": "Clinton",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
                "name_slug": "hillary-clinton",
                "first_name": "Hillary",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            },
            {
                "last_name": "Obama",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_OBAMA_1.jpg",
                "name_slug": "barack-obama",
                "first_name": "Barack",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/aug/09/donald-trump/donald-trump-exaggerates-michigan-job-losses-coal-/",
        "statement_context": "an economic address in Detroit",
        "ruling_date": "2016-08-09T16:50:56",
        "statement": "<p>&quot;The Obama-Clinton war on coal has cost Michigan over 50,000 jobs.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-08-05",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Viral post claiming voter fraud in 2012 election errs on photo ID numbers",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-false.png",
            "ruling_slug": "false",
            "ruling": "False"
        },
        "subject": [
            {
                "subject": "Elections",
                "subject_slug": "elections"
            },
            {
                "subject": "History",
                "subject_slug": "history"
            },
            {
                "subject": "Human Rights",
                "subject_slug": "human-rights"
            },
            {
                "subject": "Legal Issues",
                "subject_slug": "legal-issues"
            }
        ],
        "ruling_link_text": "Off by 20 states",
        "speaker": {
            "last_name": "Viral image",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Success-Kid.jpg",
            "name_slug": "viral-image",
            "first_name": "",
            "party": {
                "party": "None",
                "party_slug": "none"
            }
        },
        "target": [
            {
                "last_name": "Obama",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_OBAMA_1.jpg",
                "name_slug": "barack-obama",
                "first_name": "Barack",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/aug/09/viral-image/viral-post-claiming-voter-fraud-2012-election-errs/",
        "statement_context": "a posting on various websites",
        "ruling_date": "2016-08-09T10:00:00",
        "statement": "<p>Says in 2012 &quot;Obama won in every state that did not require a photo ID and lost in every state that did require a photo ID in order to vote.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-08-02",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Barack Obama: Trans-Pacific Partnership eliminates 18,000 tariffs on American goods",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlytrue.png",
            "ruling_slug": "mostly-true",
            "ruling": "Mostly True"
        },
        "subject": [
            {
                "subject": "Trade",
                "subject_slug": "trade"
            }
        ],
        "ruling_link_text": "Experts agreed, with caveats",
        "speaker": {
            "last_name": "Obama",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_OBAMA_1.jpg",
            "name_slug": "barack-obama",
            "first_name": "Barack",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2016/aug/04/barack-obama/barack-obama-trans-pacific-partnership-eliminates-/",
        "statement_context": "a White House press conference",
        "ruling_date": "2016-08-04T14:28:09",
        "statement": "<p>The Trans-Pacific Partnership &quot;knocks out 18,000 tariffs that other countries place on American products and goods.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-08-02",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Trump spox's absurd claim that Clinton, Obama are responsible for Capt. Humayun Khan's 2004 death",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-pantsonfire.gif",
            "ruling_slug": "pants-fire",
            "ruling": "Pants on Fire!"
        },
        "subject": [
            {
                "subject": "Iraq",
                "subject_slug": "iraq"
            },
            {
                "subject": "Military",
                "subject_slug": "military"
            }
        ],
        "ruling_link_text": "Khan died 2004, Obama became president in 2009",
        "speaker": {
            "last_name": "Pierson",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/pierson_bullet_0.png",
            "name_slug": "katrina-pierson",
            "first_name": "Katrina",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [
            {
                "last_name": "Clinton",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
                "name_slug": "hillary-clinton",
                "first_name": "Hillary",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            },
            {
                "last_name": "Obama",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_OBAMA_1.jpg",
                "name_slug": "barack-obama",
                "first_name": "Barack",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/aug/03/katrina-pierson/trump-spoxs-absurd-claim-clinton-obama-are-respons/",
        "statement_context": "an interview on CNN.",
        "ruling_date": "2016-08-03T16:13:13",
        "statement": "<p>&quot;It was under Barack Obama and Hillary Clinton that changed the rules of engagement that probably cost (Capt. Humayun Khan&rsquo;s) life.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-07-27",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Mostly True: Obama says world opinion of U.S. better now than eight years ago",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlytrue.png",
            "ruling_slug": "mostly-true",
            "ruling": "Mostly True"
        },
        "subject": [
            {
                "subject": "Polls and Public Opinion",
                "subject_slug": "polls"
            }
        ],
        "ruling_link_text": "They like us, they really like us!",
        "speaker": {
            "last_name": "Obama",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_OBAMA_1.jpg",
            "name_slug": "barack-obama",
            "first_name": "Barack",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2016/jul/28/barack-obama/mostly-true-obama-says-world-opinion-us-better-now/",
        "statement_context": "a speech at the Democratic national convention",
        "ruling_date": "2016-07-28T01:20:24",
        "statement": "<p>&quot;Almost every country on Earth sees America as stronger and more respected today than they did eight years ago when I took office.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-07-27",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Crime and illegal immigration are at decades-long lows, says Barack Obama",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlytrue.png",
            "ruling_slug": "mostly-true",
            "ruling": "Mostly True"
        },
        "subject": [
            {
                "subject": "Crime",
                "subject_slug": "crime"
            },
            {
                "subject": "History",
                "subject_slug": "history"
            },
            {
                "subject": "Immigration",
                "subject_slug": "immigration"
            }
        ],
        "ruling_link_text": "Numbers aren't perfect but trends are there",
        "speaker": {
            "last_name": "Obama",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_OBAMA_1.jpg",
            "name_slug": "barack-obama",
            "first_name": "Barack",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [
            {
                "last_name": "Trump",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
                "name_slug": "donald-trump",
                "first_name": "Donald",
                "party": {
                    "party": "Republican",
                    "party_slug": "republican"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/jul/28/barack-obama/crime-and-illegal-immigration-are-decades-long-low/",
        "statement_context": "a speech at the Democratic National Convention",
        "ruling_date": "2016-07-28T01:08:40",
        "statement": "<p>&quot;Illegal immigration and the crime rate are as low as they&rsquo;ve been in decades.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-07-24",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Donald Trump Jr. says unemployment rates are manipulated for political purposes",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-pantsonfire.gif",
            "ruling_slug": "pants-fire",
            "ruling": "Pants on Fire!"
        },
        "subject": [
            {
                "subject": "Economy",
                "subject_slug": "economy"
            },
            {
                "subject": "Elections",
                "subject_slug": "elections"
            },
            {
                "subject": "History",
                "subject_slug": "history"
            },
            {
                "subject": "Jobs",
                "subject_slug": "jobs"
            },
            {
                "subject": "Labor",
                "subject_slug": "labor"
            },
            {
                "subject": "Workers",
                "subject_slug": "workers"
            }
        ],
        "ruling_link_text": "Cooked books claim up in flames",
        "speaker": {
            "last_name": "Trump Jr.",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Trump_Jr.jpg",
            "name_slug": "donald-trump-jr",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [
            {
                "last_name": "Obama",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_OBAMA_1.jpg",
                "name_slug": "barack-obama",
                "first_name": "Barack",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/jul/25/donald-trump-jr/donald-trump-jr-says-unemployment-rates-are-manipu/",
        "statement_context": "an interview on CNN",
        "ruling_date": "2016-07-25T13:37:49",
        "statement": "<p>Unemployment numbers &quot;are artificial numbers. These are numbers that are massaged to make the existing economy look good, to make this administration look good when, in fact, it&#39;s a total disaster.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-07-12",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Barack Obama offers flawed comparison between teens' ease in obtaining Glocks vs. books",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlyfalse.png",
            "ruling_slug": "barely-true",
            "ruling": "Mostly False"
        },
        "subject": [
            {
                "subject": "Guns",
                "subject_slug": "guns"
            }
        ],
        "ruling_link_text": "Hard data on his comparison is elusive",
        "speaker": {
            "last_name": "Obama",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_OBAMA_1.jpg",
            "name_slug": "barack-obama",
            "first_name": "Barack",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2016/jul/14/barack-obama/barack-obama-offers-flawed-comparison-between-teen/",
        "statement_context": "a speech at a memorial service in Dallas",
        "ruling_date": "2016-07-14T17:41:51",
        "statement": "<p>&quot;We flood communities with so many guns that it is easier for a teenager to buy a Glock than get his hands on a computer or even a book.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-07-05",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Donald Trump isn't winging it in complaint about Air Force One campaign costs",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlytrue.png",
            "ruling_slug": "mostly-true",
            "ruling": "Mostly True"
        },
        "subject": [
            {
                "subject": "Campaign Finance",
                "subject_slug": "campaign-finance"
            },
            {
                "subject": "Elections",
                "subject_slug": "elections"
            },
            {
                "subject": "Government regulation",
                "subject_slug": "government-regulation"
            },
            {
                "subject": "History",
                "subject_slug": "history"
            },
            {
                "subject": "Taxes",
                "subject_slug": "taxes"
            },
            {
                "subject": "Transparency",
                "subject_slug": "transparency"
            }
        ],
        "ruling_link_text": "A bargain for the incumbent",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [
            {
                "last_name": "Clinton",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
                "name_slug": "hillary-clinton",
                "first_name": "Hillary",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            },
            {
                "last_name": "Obama",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_OBAMA_1.jpg",
                "name_slug": "barack-obama",
                "first_name": "Barack",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/jul/07/donald-trump/donald-trump-isnt-winging-it-complaint-about-air-f/",
        "statement_context": "a tweet",
        "ruling_date": "2016-07-07T11:55:06",
        "statement": "<p>&quot;Taxpayers are paying a fortune for the use of Air Force One on the campaign trail&quot; by President Barack Obama and Hillary Clinton.</p>\r\n"
    },
    {
        "statement_date": "2016-06-29",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Barack Obama wrong about size of U.S. steel production, work force",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-false.png",
            "ruling_slug": "false",
            "ruling": "False"
        },
        "subject": [
            {
                "subject": "Economy",
                "subject_slug": "economy"
            },
            {
                "subject": "Jobs",
                "subject_slug": "jobs"
            },
            {
                "subject": "Trade",
                "subject_slug": "trade"
            }
        ],
        "ruling_link_text": "Wrong on both counts",
        "speaker": {
            "last_name": "Obama",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_OBAMA_1.jpg",
            "name_slug": "barack-obama",
            "first_name": "Barack",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2016/jul/05/barack-obama/barack-obama-wrong-about-size-us-steel-production-/",
        "statement_context": "remarks in Ottawa, Canada",
        "ruling_date": "2016-07-05T17:32:05",
        "statement": "<p>&quot;The steel industry is producing as much steel in the United States as it ever was. It&rsquo;s just (that) it needs one-tenth of the workers that it used to.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-06-29",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "At 'Three Amigos' summit, Obama overshoots trade benefits between Mexico, Canada",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlyfalse.png",
            "ruling_slug": "barely-true",
            "ruling": "Mostly False"
        },
        "subject": [
            {
                "subject": "Trade",
                "subject_slug": "trade"
            }
        ],
        "ruling_link_text": "A bad connectiom",
        "speaker": {
            "last_name": "Obama",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_OBAMA_1.jpg",
            "name_slug": "barack-obama",
            "first_name": "Barack",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2016/jul/05/barack-obama/obama-incorrectly-characterizes-job-growth-due-inc/",
        "statement_context": "a press conference at the North American Leaders Summit",
        "ruling_date": "2016-07-05T15:38:46",
        "statement": "<p>&quot;During my administration, for example, we boosted U.S. exports to Canada and Mexico by about 50 percent. That supports about 2.8 million American jobs.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-06-01",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Obama: 'We've seen more manufacturing jobs created' than anytime since the 1990s",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-halftrue.png",
            "ruling_slug": "half-true",
            "ruling": "Half-True"
        },
        "subject": [
            {
                "subject": "Economy",
                "subject_slug": "economy"
            },
            {
                "subject": "Labor",
                "subject_slug": "labor"
            }
        ],
        "ruling_link_text": "Bigger picture isn't as rosy",
        "speaker": {
            "last_name": "Obama",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_OBAMA_1.jpg",
            "name_slug": "barack-obama",
            "first_name": "Barack",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2016/jun/16/barack-obama/obama-weve-seen-more-manufacturing-jobs-created-an/",
        "statement_context": "in a town hall",
        "ruling_date": "2016-06-16T14:19:41",
        "statement": "<p>&quot;We&#39;ve seen more manufacturing jobs created since I&#39;ve been president than anytime since the 1990s. That&#39;s a fact.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-06-15",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Donald Trump suggests Barack Obama supported ISIS, but that's a conspiracy theory",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-pantsonfire.gif",
            "ruling_slug": "pants-fire",
            "ruling": "Pants on Fire!"
        },
        "subject": [
            {
                "subject": "Foreign Policy",
                "subject_slug": "foreign-policy"
            },
            {
                "subject": "Military",
                "subject_slug": "military"
            },
            {
                "subject": "Terrorism",
                "subject_slug": "terrorism"
            }
        ],
        "ruling_link_text": "U.S. has always opposed ISIS and its predecessors",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [
            {
                "last_name": "Clinton",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
                "name_slug": "hillary-clinton",
                "first_name": "Hillary",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            },
            {
                "last_name": "Obama",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_OBAMA_1.jpg",
                "name_slug": "barack-obama",
                "first_name": "Barack",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/jun/15/donald-trump/donald-trump-suggests-barack-obama-supported-isis-/",
        "statement_context": "a Facebook post",
        "ruling_date": "2016-06-15T17:48:18",
        "statement": "<p>&quot;The Obama administration was actively supporting Al Qaeda in Iraq, the terrorist group that became the Islamic State.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-04-26",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Another lie that won't die: The multitudes say Obama has canceled National Day of Prayer",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-pantsonfire.gif",
            "ruling_slug": "pants-fire",
            "ruling": "Pants on Fire!"
        },
        "subject": [
            {
                "subject": "History",
                "subject_slug": "history"
            },
            {
                "subject": "Religion",
                "subject_slug": "religion"
            }
        ],
        "ruling_link_text": "Facebookers bear false witness",
        "speaker": {
            "last_name": "Facebook posts",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Facebook_icon_1.jpg",
            "name_slug": "facebook-posts",
            "first_name": "",
            "party": {
                "party": "None",
                "party_slug": "none"
            }
        },
        "target": [
            {
                "last_name": "Obama",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_OBAMA_1.jpg",
                "name_slug": "barack-obama",
                "first_name": "Barack",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/apr/29/facebook-posts/another-lie-wont-die-multitudes-say-obama-has-canc/",
        "statement_context": "a multitude of Facebook posts",
        "ruling_date": "2016-04-29T10:23:51",
        "statement": "<p>&quot;Today President Obama said there will NOT be a National Day of Prayer in May.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-04-27",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Donald Trump says Raul Castro snubbed Barack Obama at airport, and that it's 'without precedent'",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-halftrue.png",
            "ruling_slug": "half-true",
            "ruling": "Half-True"
        },
        "subject": [
            {
                "subject": "Foreign Policy",
                "subject_slug": "foreign-policy"
            }
        ],
        "ruling_link_text": "Much the same as when Nixon went to China",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [
            {
                "last_name": "Obama",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_OBAMA_1.jpg",
                "name_slug": "barack-obama",
                "first_name": "Barack",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/apr/28/donald-trump/donald-trump-says-raul-castro-snubbed-barack-obama/",
        "statement_context": "a foreign policy speech in Washington",
        "ruling_date": "2016-04-28T16:55:47",
        "statement": "<p>&quot;When President Obama landed in Cuba on Air Force One, no leader was there, nobody, to greet him -- perhaps an incident without precedent in the long and prestigious history of Air Force One.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-03-23",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Barack Obama jumps the gun on U.S. uninsured rate, then reverses course",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-halftrue.png",
            "ruling_slug": "half-true",
            "ruling": "Half-True"
        },
        "subject": [
            {
                "subject": "Health Care",
                "subject_slug": "health-care"
            }
        ],
        "ruling_link_text": "Our inquiries prompted a White House correction",
        "speaker": {
            "last_name": "Obama",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_OBAMA_1.jpg",
            "name_slug": "barack-obama",
            "first_name": "Barack",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2016/apr/05/barack-obama/barack-obama-jumps-gun-us-uninsured-rate-then-reve/",
        "statement_context": "a Medium post",
        "ruling_date": "2016-04-05T15:32:52",
        "statement": "<p>The &quot;rate of uninsured Americans (is) 8.8 percent.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-03-01",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Right to Rise correct on comparison between 'worst attendance records' of Marco Rubio, Barack Obama",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-true.png",
            "ruling_slug": "true",
            "ruling": "True"
        },
        "subject": [
            {
                "subject": "Candidate Biography",
                "subject_slug": "candidates-biography"
            },
            {
                "subject": "Congress",
                "subject_slug": "congress"
            },
            {
                "subject": "Florida",
                "subject_slug": "florida"
            },
            {
                "subject": "Foreign Policy",
                "subject_slug": "foreign-policy"
            },
            {
                "subject": "History",
                "subject_slug": "history"
            },
            {
                "subject": "Job Accomplishments",
                "subject_slug": "job-accomplishments"
            },
            {
                "subject": "Negative Campaigning",
                "subject_slug": "campaign-advertising"
            },
            {
                "subject": "Voting Record",
                "subject_slug": "voting-record"
            }
        ],
        "ruling_link_text": "Two absentee senators",
        "speaker": {
            "last_name": "Right to Rise",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/logo_header.png",
            "name_slug": "right-rise",
            "first_name": "",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [
            {
                "last_name": "Obama",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_OBAMA_1.jpg",
                "name_slug": "barack-obama",
                "first_name": "Barack",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            },
            {
                "last_name": "Rubio",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Marco_Rubio.jpg",
                "name_slug": "marco-rubio",
                "first_name": "Marco",
                "party": {
                    "party": "Republican",
                    "party_slug": "republican"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/mar/08/right-rise/right-rise-right-raise-criticism-candidates-rubio-/",
        "statement_context": "a television ad.",
        "ruling_date": "2016-03-08T12:51:40",
        "statement": "<p>Like Marco Rubio, Sen. Barack Obama had &quot;one of the worst attendance records in the Senate.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-02-16",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Obama: None of the GOP candidates have climate change plan",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlytrue.png",
            "ruling_slug": "mostly-true",
            "ruling": "Mostly True"
        },
        "subject": [
            {
                "subject": "Climate Change",
                "subject_slug": "climate-change"
            }
        ],
        "ruling_link_text": "Maybe an energy plan, but not climate change",
        "speaker": {
            "last_name": "Obama",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_OBAMA_1.jpg",
            "name_slug": "barack-obama",
            "first_name": "Barack",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2016/mar/01/barack-obama/obama-none-gop-candidates-have-climate-change-plan/",
        "statement_context": "a press conference",
        "ruling_date": "2016-03-01T13:43:12",
        "statement": "<p>&quot;There is not a single candidate in the Republican primary that thinks we should do anything about climate change.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-02-05",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Jeb Bush says Barack Obama will add more debt than all 43 previous presidents combined",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlytrue.png",
            "ruling_slug": "mostly-true",
            "ruling": "Mostly True"
        },
        "subject": [
            {
                "subject": "Debt",
                "subject_slug": "debt"
            },
            {
                "subject": "Deficit",
                "subject_slug": "deficit"
            },
            {
                "subject": "Federal Budget",
                "subject_slug": "federal-budget"
            }
        ],
        "ruling_link_text": "Numerically correct; significance is less clear",
        "speaker": {
            "last_name": "Bush",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Jeb_Bush.jpg",
            "name_slug": "jeb-bush",
            "first_name": "Jeb",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [
            {
                "last_name": "Obama",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_OBAMA_1.jpg",
                "name_slug": "barack-obama",
                "first_name": "Barack",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/feb/18/jeb-bush/jeb-bush-says-barack-obama-will-add-more-debt-all-/",
        "statement_context": "a column posted on Medium.com",
        "ruling_date": "2016-02-18T10:54:07",
        "statement": "<p>&quot;Barack Obama will somehow manage to add more than $8 trillion to the national debt, which is more debt than the 43 presidents who held office before him compiled together.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-01-28",
        "statement_type": {
            "statement_type": "Attack"
        },
        "ruling_headline": "Ted Cruz says Barack Obama 'dramatically degraded our military'",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlyfalse.png",
            "ruling_slug": "barely-true",
            "ruling": "Mostly False"
        },
        "subject": [
            {
                "subject": "Federal Budget",
                "subject_slug": "federal-budget"
            },
            {
                "subject": "Military",
                "subject_slug": "military"
            }
        ],
        "ruling_link_text": "Sequestration a pox on both parties",
        "speaker": {
            "last_name": "Cruz",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/CRUZPFTNEW.jpg",
            "name_slug": "ted-cruz",
            "first_name": "Ted",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [
            {
                "last_name": "Obama",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_OBAMA_1.jpg",
                "name_slug": "barack-obama",
                "first_name": "Barack",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/jan/28/ted-cruz/ted-cruz-says-barack-obama-has-dramatically-degrad/",
        "statement_context": "a Fox News debate ",
        "ruling_date": "2016-01-28T22:43:34",
        "statement": "<p>&quot;Barack Obama, right now, No. 1, over seven years has dramatically degraded our military.&quot;</p>\r\n\r\n<div>&nbsp;</div>\r\n"
    },
    {
        "statement_date": "2016-01-15",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Did former Attorney General Eric Holder say he viewed his mission as 'brainwashing' against guns?",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-halftrue.png",
            "ruling_slug": "half-true",
            "ruling": "Half-True"
        },
        "subject": [
            {
                "subject": "Crime",
                "subject_slug": "crime"
            },
            {
                "subject": "Criminal Justice",
                "subject_slug": "criminal-justice"
            },
            {
                "subject": "Guns",
                "subject_slug": "guns"
            }
        ],
        "ruling_link_text": "A different time, a different place",
        "speaker": {
            "last_name": "Cruz",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/CRUZPFTNEW.jpg",
            "name_slug": "ted-cruz",
            "first_name": "Ted",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [
            {
                "last_name": "Holder",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/eric_holder.jpg",
                "name_slug": "eric-holder",
                "first_name": "Eric",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            },
            {
                "last_name": "Obama",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_OBAMA_1.jpg",
                "name_slug": "barack-obama",
                "first_name": "Barack",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/jan/15/ted-cruz/did-former-attorney-general-eric-holder-say-he-vie/",
        "statement_context": "a Republican presidential debate in North Charleston, S.C.",
        "ruling_date": "2016-01-15T00:34:56",
        "statement": "<p>Says President Barack Obama &quot;appointed Eric Holder as attorney general. Eric Holder said he viewed his mission as brainwashing the American people against guns.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-01-12",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Barack Obama says U.S. has 'strongest, most durable economy in the world' during State of the Union",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlytrue.png",
            "ruling_slug": "mostly-true",
            "ruling": "Mostly True"
        },
        "subject": [
            {
                "subject": "Economy",
                "subject_slug": "economy"
            }
        ],
        "ruling_link_text": "It's a fuzzy claim, but a good case can be made",
        "speaker": {
            "last_name": "Obama",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_OBAMA_1.jpg",
            "name_slug": "barack-obama",
            "first_name": "Barack",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2016/jan/14/barack-obama/barack-obama-says-us-has-strongest-most-durable-ec/",
        "statement_context": "the State of the Union address",
        "ruling_date": "2016-01-14T20:45:28",
        "statement": "<p>&quot;The United States of America, right now, has the strongest, most durable economy in the world.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-01-12",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Obama: US spends more on military than next 8 nations combined",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlytrue.png",
            "ruling_slug": "mostly-true",
            "ruling": "Mostly True"
        },
        "subject": [
            {
                "subject": "Federal Budget",
                "subject_slug": "federal-budget"
            },
            {
                "subject": "Military",
                "subject_slug": "military"
            }
        ],
        "ruling_link_text": "By at least one measure",
        "speaker": {
            "last_name": "Obama",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_OBAMA_1.jpg",
            "name_slug": "barack-obama",
            "first_name": "Barack",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2016/jan/13/barack-obama/obama-us-spends-more-military-next-8-nations-combi/",
        "statement_context": "his 2016 State of the Union address",
        "ruling_date": "2016-01-13T00:29:32",
        "statement": "<p>&quot;We spend more on our military than the next eight nations combined.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-01-12",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "High school graduation rates are at 'new highs,' says Obama in State of the Union",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-halftrue.png",
            "ruling_slug": "half-true",
            "ruling": "Half-True"
        },
        "subject": [
            {
                "subject": "Education",
                "subject_slug": "education"
            }
        ],
        "ruling_link_text": "Uncertainties persist",
        "speaker": {
            "last_name": "Obama",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_OBAMA_1.jpg",
            "name_slug": "barack-obama",
            "first_name": "Barack",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2016/jan/13/barack-obama/barack-obama-says-high-school-graduation-rates-are/",
        "statement_context": "a State of the Union speech",
        "ruling_date": "2016-01-13T00:10:32",
        "statement": "<p>We&#39;ve &quot;lifted high school graduation rates to new highs.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-01-12",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Economy is 'too weak to raise income levels,' says Nikki Haley in State of the Union response ",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlytrue.png",
            "ruling_slug": "mostly-true",
            "ruling": "Mostly True"
        },
        "subject": [
            {
                "subject": "Economy",
                "subject_slug": "economy"
            },
            {
                "subject": "Income",
                "subject_slug": "income"
            }
        ],
        "ruling_link_text": "Job growth hasn't brought much income growth",
        "speaker": {
            "last_name": "Haley",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Haley_1.jpg",
            "name_slug": "nikki-haley",
            "first_name": "Nikki",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [
            {
                "last_name": "Obama",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_OBAMA_1.jpg",
                "name_slug": "barack-obama",
                "first_name": "Barack",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/jan/12/nikki-haley/economy-too-weak-raise-incomes-nikki-haley-state-u/",
        "statement_context": "the Republican response to the State of the Union address",
        "ruling_date": "2016-01-12T23:47:09",
        "statement": "<p>The economy is &quot;too weak to raise income levels.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-01-12",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Business has created jobs every month since Obamacare became law, Obama said in State of the Union",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-true.png",
            "ruling_slug": "true",
            "ruling": "True"
        },
        "subject": [
            {
                "subject": "Economy",
                "subject_slug": "economy"
            },
            {
                "subject": "Health Care",
                "subject_slug": "health-care"
            },
            {
                "subject": "Jobs",
                "subject_slug": "jobs"
            }
        ],
        "ruling_link_text": "Job creation stats show positive",
        "speaker": {
            "last_name": "Obama",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_OBAMA_1.jpg",
            "name_slug": "barack-obama",
            "first_name": "Barack",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2016/jan/12/barack-obama/business-has-created-jobs-every-month-obamacare-be/",
        "statement_context": "his State of the Union speech",
        "ruling_date": "2016-01-12T23:01:01",
        "statement": "<p>&quot;Our businesses have created jobs every single month since (Obamacare) became law.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-01-12",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "We have cut 'our deficits by almost three-quarters,' Obama says in State of the Union",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlytrue.png",
            "ruling_slug": "mostly-true",
            "ruling": "Mostly True"
        },
        "subject": [
            {
                "subject": "Deficit",
                "subject_slug": "deficit"
            },
            {
                "subject": "Economy",
                "subject_slug": "economy"
            }
        ],
        "ruling_link_text": "Improvement since the last State of the Union, in fact",
        "speaker": {
            "last_name": "Obama",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_OBAMA_1.jpg",
            "name_slug": "barack-obama",
            "first_name": "Barack",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2016/jan/12/barack-obama/we-have-cut-our-deficits-three-fourths-obama-state/",
        "statement_context": "the State of the Union address",
        "ruling_date": "2016-01-12T22:39:37",
        "statement": "<p>We have cut &quot;our deficits by almost three-quarters.&quot;</p>\r\n"
    },
    {
        "statement_date": "2015-12-17",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Carly Fiorina says U.S. didn't address cybersecurity in economic dialogues with China",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlyfalse.png",
            "ruling_slug": "barely-true",
            "ruling": "Mostly False"
        },
        "subject": [
            {
                "subject": "China",
                "subject_slug": "china"
            },
            {
                "subject": "Crime",
                "subject_slug": "crime"
            },
            {
                "subject": "Criminal Justice",
                "subject_slug": "criminal-justice"
            },
            {
                "subject": "Foreign Policy",
                "subject_slug": "foreign-policy"
            },
            {
                "subject": "Infrastructure",
                "subject_slug": "infrastructure"
            }
        ],
        "ruling_link_text": "Major agreement came three months later",
        "speaker": {
            "last_name": "Fiorina",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Fiorina_1.jpg",
            "name_slug": "carly-fiorina",
            "first_name": "Carly",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [
            {
                "last_name": "Clinton",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
                "name_slug": "hillary-clinton",
                "first_name": "Hillary",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            },
            {
                "last_name": "Obama",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_OBAMA_1.jpg",
                "name_slug": "barack-obama",
                "first_name": "Barack",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/jan/07/carly-fiorina/carly-fiorina-says-us-didnt-address-cybersecurity-/",
        "statement_context": "a column posted on Medium",
        "ruling_date": "2016-01-07T13:54:53",
        "statement": "<p>&quot;When we held recent economic dialogues with China, we agreed on over 100 different things  &mdash;  including wildlife trafficking and volcano research. None of these 100-plus points of agreement addressed cybersecurity.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-01-05",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Obama: Violent felons can buy guns online without background checks",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlytrue.png",
            "ruling_slug": "mostly-true",
            "ruling": "Mostly True"
        },
        "subject": [
            {
                "subject": "Guns",
                "subject_slug": "guns"
            }
        ],
        "ruling_link_text": "Possible, but a little complicated",
        "speaker": {
            "last_name": "Obama",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_OBAMA_1.jpg",
            "name_slug": "barack-obama",
            "first_name": "Barack",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2016/jan/05/barack-obama/obama-violent-felons-can-buy-guns-online-without-b/",
        "statement_context": "a speech proposing executive action on gun regulations",
        "ruling_date": "2016-01-05T18:43:44",
        "statement": "<p>&quot;A violent felon can buy (a gun) over the Internet with no background check, no questions asked.&quot;</p>\r\n"
    },
    {
        "statement_date": "2015-12-15",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Chris Christie mostly wrong that Barack Obama invited Russia into military role in Syria",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlyfalse.png",
            "ruling_slug": "barely-true",
            "ruling": "Mostly False"
        },
        "subject": [
            {
                "subject": "Foreign Policy",
                "subject_slug": "foreign-policy"
            },
            {
                "subject": "Military",
                "subject_slug": "military"
            }
        ],
        "ruling_link_text": "At most, an act of omission, not commission",
        "speaker": {
            "last_name": "Christie",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/christie.jpg",
            "name_slug": "chris-christie",
            "first_name": "Chris",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [
            {
                "last_name": "Obama",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_OBAMA_1.jpg",
                "name_slug": "barack-obama",
                "first_name": "Barack",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2015/dec/21/chris-christie/chris-christie-mostly-wrong-barack-obama-invited-r/",
        "statement_context": "a Republican presidential debate in Las Vegas",
        "ruling_date": "2015-12-21T15:23:57",
        "statement": "<p>Says the Obama administration invited &quot;Russia into Syria.&quot;</p>\r\n"
    },
    {
        "statement_date": "2013-11-13",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "No, a college ID does not show Barack Obama was a foreign student at Columbia University",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-pantsonfire.gif",
            "ruling_slug": "pants-fire",
            "ruling": "Pants on Fire!"
        },
        "subject": [
            {
                "subject": "Corrections and Updates",
                "subject_slug": "corrections-and-updates"
            },
            {
                "subject": "Obama Birth Certificate",
                "subject_slug": "obama-birth-certificate"
            }
        ],
        "ruling_link_text": "It's a poor Photoshop",
        "speaker": {
            "last_name": "Facebook posts",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Facebook_icon_1.jpg",
            "name_slug": "facebook-posts",
            "first_name": "",
            "party": {
                "party": "None",
                "party_slug": "none"
            }
        },
        "target": [
            {
                "last_name": "Obama",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_OBAMA_1.jpg",
                "name_slug": "barack-obama",
                "first_name": "Barack",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2015/dec/09/facebook-posts/facebook-posts-still-claim-obama-wasnt-born-us/",
        "statement_context": "multiple posts",
        "ruling_date": "2015-12-09T15:46:04",
        "statement": "<p>Barack Obama&rsquo;s Columbia University ID says he was a foreign student and went by &quot;Barry Soetoro.&quot;</p>\r\n"
    },
    {
        "statement_date": "2015-11-15",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Obama: U.S. is largest donor for displaced persons, refugee relief",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlytrue.png",
            "ruling_slug": "mostly-true",
            "ruling": "Mostly True"
        },
        "subject": [
            {
                "subject": "Foreign Policy",
                "subject_slug": "foreign-policy"
            },
            {
                "subject": "Terrorism",
                "subject_slug": "terrorism"
            }
        ],
        "ruling_link_text": "In raw dollars, U.S. is No. 1",
        "speaker": {
            "last_name": "Obama",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_OBAMA_1.jpg",
            "name_slug": "barack-obama",
            "first_name": "Barack",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2015/nov/17/barack-obama/obama-us-largest-donor-displaced-personsrefugee-re/",
        "statement_context": "a joint statement with the president of Turkey.",
        "ruling_date": "2015-11-17T17:09:22",
        "statement": "<p>&quot;The United States (is) the largest provider of humanitarian assistance to displaced persons and refugees.&quot;</p>\r\n"
    },
    {
        "statement_date": "2015-11-10",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Carly Fiorina says 'Obamacare isn't helping anyone'",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-pantsonfire.gif",
            "ruling_slug": "pants-fire",
            "ruling": "Pants on Fire!"
        },
        "subject": [
            {
                "subject": "Health Care",
                "subject_slug": "health-care"
            }
        ],
        "ruling_link_text": "Oh, just tens of millions",
        "speaker": {
            "last_name": "Fiorina",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Fiorina_1.jpg",
            "name_slug": "carly-fiorina",
            "first_name": "Carly",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [
            {
                "last_name": "Obama",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_OBAMA_1.jpg",
                "name_slug": "barack-obama",
                "first_name": "Barack",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2015/nov/11/carly-fiorina/carly-fiorina-says-obamacare-isnt-helping-anyone/",
        "statement_context": "a Republican presidential debate in Milwaukee",
        "ruling_date": "2015-11-11T18:18:57",
        "statement": "<p>&quot;Obamacare isn&#39;t helping anyone.&quot;</p>\r\n"
    },
    {
        "statement_date": "2015-10-28",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Rand Paul says debt limit deal 'allows President Obama to borrow unlimited amounts of money'",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlyfalse.png",
            "ruling_slug": "barely-true",
            "ruling": "Mostly False"
        },
        "subject": [
            {
                "subject": "Debt",
                "subject_slug": "debt"
            },
            {
                "subject": "Deficit",
                "subject_slug": "deficit"
            },
            {
                "subject": "Federal Budget",
                "subject_slug": "federal-budget"
            }
        ],
        "ruling_link_text": "Debt limit bill isn't that permissive",
        "speaker": {
            "last_name": "Paul",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Rand_Paul.jpg",
            "name_slug": "rand-paul",
            "first_name": "Rand",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [
            {
                "last_name": "Obama",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_OBAMA_1.jpg",
                "name_slug": "barack-obama",
                "first_name": "Barack",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2015/nov/02/rand-paul/rand-paul-says-debt-limit-deal-allows-president-ob/",
        "statement_context": "a Republican presidential debate in Boulder, Colo.",
        "ruling_date": "2015-11-02T11:18:38",
        "statement": "<p>The debt limit deal &quot;allows President Obama to borrow unlimited amounts of money.&quot;</p>\r\n"
    },
    {
        "statement_date": "2015-10-28",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Ted Cruz says median wage for women has dropped $733 under Obama",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-false.png",
            "ruling_slug": "false",
            "ruling": "False"
        },
        "subject": [
            {
                "subject": "Economy",
                "subject_slug": "economy"
            },
            {
                "subject": "Jobs",
                "subject_slug": "jobs"
            },
            {
                "subject": "Women",
                "subject_slug": "women"
            }
        ],
        "ruling_link_text": "That particular statistic actually rose",
        "speaker": {
            "last_name": "Cruz",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/CRUZPFTNEW.jpg",
            "name_slug": "ted-cruz",
            "first_name": "Ted",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [
            {
                "last_name": "Obama",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_OBAMA_1.jpg",
                "name_slug": "barack-obama",
                "first_name": "Barack",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2015/oct/29/ted-cruz/ted-cruz-says-median-wage-women-has-dropped-733-un/",
        "statement_context": "a Republican presidential debate in Boulder, Colo.",
        "ruling_date": "2015-10-29T14:31:45",
        "statement": "<p>&quot;Under Barack Obama and the big government economy, the median wage for women has dropped $733.&quot;</p>\r\n"
    },
    {
        "statement_date": "2015-10-02",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Barack Obama says deficit is now below its 40-year average",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlytrue.png",
            "ruling_slug": "mostly-true",
            "ruling": "Mostly True"
        },
        "subject": [
            {
                "subject": "Deficit",
                "subject_slug": "deficit"
            }
        ],
        "ruling_link_text": "When measured as a percentage of GDP",
        "speaker": {
            "last_name": "Obama",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_OBAMA_1.jpg",
            "name_slug": "barack-obama",
            "first_name": "Barack",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2015/oct/06/barack-obama/barack-obama-says-deficit-now-below-its-40-year-av/",
        "statement_context": "a press conference",
        "ruling_date": "2015-10-06T18:00:00",
        "statement": "<p>Today, the deficit is &quot;below the average deficits over the past 40 years.&quot;</p>\r\n"
    },
    {
        "statement_date": "2015-10-01",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Obama: More gun laws means fewer gun deaths",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlytrue.png",
            "ruling_slug": "mostly-true",
            "ruling": "Mostly True"
        },
        "subject": [
            {
                "subject": "Corrections and Updates",
                "subject_slug": "corrections-and-updates"
            },
            {
                "subject": "Guns",
                "subject_slug": "guns"
            }
        ],
        "ruling_link_text": "A correlation, but maybe not causation",
        "speaker": {
            "last_name": "Obama",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_OBAMA_1.jpg",
            "name_slug": "barack-obama",
            "first_name": "Barack",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2015/oct/06/barack-obama/obama-more-gun-laws-means-fewer-gun-deaths/",
        "statement_context": "remarks following a school shooting in Oregon",
        "ruling_date": "2015-10-06T16:41:12",
        "statement": "<p>&quot;States with the most gun laws tend to have the fewest gun deaths.&quot;</p>\r\n"
    },
    {
        "statement_date": "2015-07-21",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Barack Obama tells Jon Stewart the economy, 'by every metric, is better' than when he took office",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlyfalse.png",
            "ruling_slug": "barely-true",
            "ruling": "Mostly False"
        },
        "subject": [
            {
                "subject": "Economy",
                "subject_slug": "economy"
            },
            {
                "subject": "Jobs",
                "subject_slug": "jobs"
            }
        ],
        "ruling_link_text": "Economic record is good, but not perfect",
        "speaker": {
            "last_name": "Obama",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_OBAMA_1.jpg",
            "name_slug": "barack-obama",
            "first_name": "Barack",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2015/jul/28/barack-obama/barack-obama-tells-jon-stewart-economy-every-metri/",
        "statement_context": "an interview with Jon Stewart of \"The Daily Show\"",
        "ruling_date": "2015-07-28T10:46:27",
        "statement": "<p>&quot;The economy, by every metric, is better than when I came into office.&quot;</p>\r\n"
    },
    {
        "statement_date": "2015-07-21",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Obama says veteran homelessness has been cut by a third",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlytrue.png",
            "ruling_slug": "mostly-true",
            "ruling": "Mostly True"
        },
        "subject": [
            {
                "subject": "Housing",
                "subject_slug": "housing"
            },
            {
                "subject": "Veterans",
                "subject_slug": "veterans"
            }
        ],
        "ruling_link_text": "The stats that are available support that",
        "speaker": {
            "last_name": "Obama",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_OBAMA_1.jpg",
            "name_slug": "barack-obama",
            "first_name": "Barack",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2015/jul/28/barack-obama/obama-says-veteran-homelessness-has-been-cut-third/",
        "statement_context": "an online interview with \"The Daily Show\"",
        "ruling_date": "2015-07-28T10:21:06",
        "statement": "<p>Since 2009, &quot;we&#39;ve cut homelessness (among veterans) by a third.&quot;</p>\r\n"
    },
    {
        "statement_date": "2015-07-15",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Was Obama's goal 'at the beginning of the negotiations' to 'dismantle Iran's nuclear program'?",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-false.png",
            "ruling_slug": "false",
            "ruling": "False"
        },
        "subject": [
            {
                "subject": "Foreign Policy",
                "subject_slug": "foreign-policy"
            },
            {
                "subject": "Military",
                "subject_slug": "military"
            },
            {
                "subject": "Nuclear",
                "subject_slug": "nuclear"
            }
        ],
        "ruling_link_text": "Maybe before, but not by start of talks",
        "speaker": {
            "last_name": "Cotton",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Tom_Cotton_mug.jpg",
            "name_slug": "tom-cotton",
            "first_name": "Tom",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [
            {
                "last_name": "Obama",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_OBAMA_1.jpg",
                "name_slug": "barack-obama",
                "first_name": "Barack",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2015/jul/22/tom-cotton/was-obamas-goal-beginning-negotiations-dismantle-i/",
        "statement_context": "an interview on CNN's \"New Day\"",
        "ruling_date": "2015-07-22T12:30:43",
        "statement": "<p>President Barack Obama &quot;said at the beginning of the negotiations that the basic approach was to dismantle Iran&rsquo;s nuclear program in exchange for dismantling the sanctions.&quot;</p>\r\n"
    },
    {
        "statement_date": "2015-07-11",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Donald Trump says the '$5 billion website for Obamacare … never worked. Still doesn't work'",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-false.png",
            "ruling_slug": "false",
            "ruling": "False"
        },
        "subject": [
            {
                "subject": "Government Efficiency",
                "subject_slug": "government-efficiency"
            },
            {
                "subject": "Health Care",
                "subject_slug": "health-care"
            }
        ],
        "ruling_link_text": "Wrong on both cost and effectiveness",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [
            {
                "last_name": "Obama",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_OBAMA_1.jpg",
                "name_slug": "barack-obama",
                "first_name": "Barack",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2015/jul/14/donald-trump/donald-trump-says-5-billion-website-obamacare-neve/",
        "statement_context": "a speech in Phoenix",
        "ruling_date": "2015-07-14T15:00:00",
        "statement": "<p>&quot;The $5 billion website for Obamacare &hellip; never worked. Still doesn&#39;t work.&quot;</p>\r\n"
    },
    {
        "statement_date": "2015-06-25",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Are wages finally growing faster than health insurance costs? ",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlytrue.png",
            "ruling_slug": "mostly-true",
            "ruling": "Mostly True"
        },
        "subject": [
            {
                "subject": "Health Care",
                "subject_slug": "health-care"
            },
            {
                "subject": "Labor",
                "subject_slug": "labor"
            }
        ],
        "ruling_link_text": "Hasn't happened since 1998",
        "speaker": {
            "last_name": "Obama",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_OBAMA_1.jpg",
            "name_slug": "barack-obama",
            "first_name": "Barack",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2015/jun/30/barack-obama/are-wages-finally-growing-faster-health-insurance-/",
        "statement_context": "a speech about the Affordable Care Act.",
        "ruling_date": "2015-06-30T11:36:30",
        "statement": "<p>&quot;By one leading measure, what business owners pay out in wages and salaries is now finally growing faster than what they spend on health insurance&quot; for the first time in 17 years.</p>\r\n"
    },
    {
        "statement_date": "2015-06-24",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Chain email says Medicare won't pay for 'observational' stay in hospital due to Obamacare",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-pantsonfire.gif",
            "ruling_slug": "pants-fire",
            "ruling": "Pants on Fire!"
        },
        "subject": [
            {
                "subject": "Health Care",
                "subject_slug": "health-care"
            },
            {
                "subject": "Medicare",
                "subject_slug": "medicare"
            }
        ],
        "ruling_link_text": "Email is wrong--and gives dangerous advice",
        "speaker": {
            "last_name": "Chain email",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/mugs/mug-emailer.jpg",
            "name_slug": "chain-email",
            "first_name": "",
            "party": {
                "party": "None",
                "party_slug": "none"
            }
        },
        "target": [
            {
                "last_name": "Obama",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_OBAMA_1.jpg",
                "name_slug": "barack-obama",
                "first_name": "Barack",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2015/jun/25/chain-email/chain-email-says-medicare-wont-pay-observational-s/",
        "statement_context": "a chain email",
        "ruling_date": "2015-06-25T11:08:43",
        "statement": "<p>&quot;Under the Affordable Care Act, anyone on Medicare who is admitted to a hospital for observation will be responsible for the bill. Medicare won&#39;t pay a cent.&quot;</p>\r\n"
    },
    {
        "statement_date": "2015-06-20",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Barack Obama tweets that U.S. gun-homicide rate is much higher than in France, Israel, Japan",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlytrue.png",
            "ruling_slug": "mostly-true",
            "ruling": "Mostly True"
        },
        "subject": [
            {
                "subject": "Crime",
                "subject_slug": "crime"
            },
            {
                "subject": "Criminal Justice",
                "subject_slug": "criminal-justice"
            },
            {
                "subject": "Guns",
                "subject_slug": "guns"
            }
        ],
        "ruling_link_text": "Other data exists, but Obama's is credible",
        "speaker": {
            "last_name": "Obama",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_OBAMA_1.jpg",
            "name_slug": "barack-obama",
            "first_name": "Barack",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2015/jun/22/barack-obama/barack-obama-tweets-us-gun-homicide-rate-much-high/",
        "statement_context": "a tweet",
        "ruling_date": "2015-06-22T17:07:06",
        "statement": "<p>&quot;Here are the stats: Per population, we kill each other with guns at a rate 297x more than Japan, 49x more than France, 33x more than Israel.&quot;</p>\r\n"
    },
    {
        "statement_date": "2015-06-18",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Is Barack Obama correct that mass killings don't happen in other countries?",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlyfalse.png",
            "ruling_slug": "barely-true",
            "ruling": "Mostly False"
        },
        "subject": [
            {
                "subject": "Corrections and Updates",
                "subject_slug": "corrections-and-updates"
            },
            {
                "subject": "Crime",
                "subject_slug": "crime"
            },
            {
                "subject": "Criminal Justice",
                "subject_slug": "criminal-justice"
            },
            {
                "subject": "Guns",
                "subject_slug": "guns"
            }
        ],
        "ruling_link_text": "It happens, in some cases at higher rates",
        "speaker": {
            "last_name": "Obama",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_OBAMA_1.jpg",
            "name_slug": "barack-obama",
            "first_name": "Barack",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2015/jun/22/barack-obama/barack-obama-correct-mass-killings-dont-happen-oth/",
        "statement_context": "remarks at the White House",
        "ruling_date": "2015-06-22T10:54:04",
        "statement": "<p>&quot;This type of mass violence does not happen in other advanced countries. It doesn&rsquo;t happen in other places with this kind of frequency.&quot;</p>\r\n"
    },
    {
        "statement_date": "2015-06-15",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Jeb Bush says Democrats 'responsible' for 'swift, mindless' cuts to defense spending",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlyfalse.png",
            "ruling_slug": "barely-true",
            "ruling": "Mostly False"
        },
        "subject": [
            {
                "subject": "Federal Budget",
                "subject_slug": "federal-budget"
            },
            {
                "subject": "Military",
                "subject_slug": "military"
            }
        ],
        "ruling_link_text": "Spending has fallen, but it takes two to tango",
        "speaker": {
            "last_name": "Bush",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Jeb_Bush.jpg",
            "name_slug": "jeb-bush",
            "first_name": "Jeb",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [
            {
                "last_name": "Obama",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_OBAMA_1.jpg",
                "name_slug": "barack-obama",
                "first_name": "Barack",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2015/jun/22/jeb-bush/jeb-bush-says-democrats-responsible-swift-mindless/",
        "statement_context": "his presidential announcement speech",
        "ruling_date": "2015-06-22T10:53:02",
        "statement": "<p>The Democrats are &quot;responsible&quot; for &quot;the swift, mindless drawdown of a military that was generations in the making.&quot;</p>\r\n"
    },
    {
        "statement_date": "2015-06-16",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Donald Trump gets claim about U.S. GDP doubly wrong",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-pantsonfire.gif",
            "ruling_slug": "pants-fire",
            "ruling": "Pants on Fire!"
        },
        "subject": [
            {
                "subject": "Economy",
                "subject_slug": "economy"
            },
            {
                "subject": "Jobs",
                "subject_slug": "jobs"
            }
        ],
        "ruling_link_text": "42 times does not equal zero",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [
            {
                "last_name": "Obama",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_OBAMA_1.jpg",
                "name_slug": "barack-obama",
                "first_name": "Barack",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2015/jun/16/donald-trump/donald-trump-says-us-gdp-never-negative-ter/",
        "statement_context": "his presidential announcement speech",
        "ruling_date": "2015-06-16T16:11:15",
        "statement": "<p>&quot;The last quarter, it was just announced, our gross domestic product &hellip; was below zero. Who ever heard of this? It&#39;s never below zero.&quot;</p>\r\n"
    },
    {
        "statement_date": "2015-06-01",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Barack Obama says U.S. today 'is the most respected country on Earth'",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-halftrue.png",
            "ruling_slug": "half-true",
            "ruling": "Half-True"
        },
        "subject": [
            {
                "subject": "Foreign Policy",
                "subject_slug": "foreign-policy"
            },
            {
                "subject": "Polls and Public Opinion",
                "subject_slug": "polls"
            }
        ],
        "ruling_link_text": "Two global polls found divergent results",
        "speaker": {
            "last_name": "Obama",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_OBAMA_1.jpg",
            "name_slug": "barack-obama",
            "first_name": "Barack",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2015/jun/03/barack-obama/barack-obama-says-us-today-most-respected-country-/",
        "statement_context": "remarks at the White House",
        "ruling_date": "2015-06-03T11:44:51",
        "statement": "<p>Today, &quot;the United States is the most respected country on Earth.&quot;</p>\r\n"
    },
    {
        "statement_date": "2015-05-17",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Was Ronald Reagan's record on black unemployment better than Barack Obama's?",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-pantsonfire.gif",
            "ruling_slug": "pants-fire",
            "ruling": "Pants on Fire!"
        },
        "subject": [
            {
                "subject": "Diversity",
                "subject_slug": "diversity"
            },
            {
                "subject": "Economy",
                "subject_slug": "economy"
            },
            {
                "subject": "History",
                "subject_slug": "history"
            },
            {
                "subject": "Jobs",
                "subject_slug": "jobs"
            }
        ],
        "ruling_link_text": "Meme makes a mess of the data",
        "speaker": {
            "last_name": "Facebook posts",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Facebook_icon_1.jpg",
            "name_slug": "facebook-posts",
            "first_name": "",
            "party": {
                "party": "None",
                "party_slug": "none"
            }
        },
        "target": [
            {
                "last_name": "Obama",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_OBAMA_1.jpg",
                "name_slug": "barack-obama",
                "first_name": "Barack",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2015/may/22/facebook-posts/was-ronald-reagans-record-black-unemployment-bette/",
        "statement_context": "a meme on social media",
        "ruling_date": "2015-05-22T12:00:00",
        "statement": "<p>&quot;During Obama&#39;s first five years as president, black unemployment increased 42 percent. During Reagan&#39;s presidency, black unemployment dropped 20 percent.&quot;</p>\r\n"
    },
    {
        "statement_date": "2015-04-17",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Is Loretta Lynch nomination delayed longer than 7 other attorneys general combined?",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlytrue.png",
            "ruling_slug": "mostly-true",
            "ruling": "Mostly True"
        },
        "subject": [
            {
                "subject": "Congressional Rules",
                "subject_slug": "congressional-rules"
            },
            {
                "subject": "Criminal Justice",
                "subject_slug": "criminal-justice"
            }
        ],
        "ruling_link_text": "Almost unprecedented historically",
        "speaker": {
            "last_name": "Obama",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_OBAMA_1.jpg",
            "name_slug": "barack-obama",
            "first_name": "Barack",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2015/apr/20/barack-obama/loretta-lynch-nomination-delayed-attorney-generals/",
        "statement_context": "a press conference",
        "ruling_date": "2015-04-20T15:49:30",
        "statement": "<p>Says&nbsp;Loretta Lynch&rsquo;s nomination &quot;has been now sitting there longer than the previous seven attorney general nominees combined.&quot;</p>\r\n"
    },
    {
        "statement_date": "2015-04-12",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Meme compares spending on undocumented immigrants with typical U.S. family income",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlyfalse.png",
            "ruling_slug": "barely-true",
            "ruling": "Mostly False"
        },
        "subject": [
            {
                "subject": "Federal Budget",
                "subject_slug": "federal-budget"
            },
            {
                "subject": "Immigration",
                "subject_slug": "immigration"
            }
        ],
        "ruling_link_text": "The numbers are valid, the comparison is questionable",
        "speaker": {
            "last_name": "ForAmerica",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/foramericalogo.jpg",
            "name_slug": "america",
            "first_name": "",
            "party": {
                "party": "None",
                "party_slug": "none"
            }
        },
        "target": [
            {
                "last_name": "Obama",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_OBAMA_1.jpg",
                "name_slug": "barack-obama",
                "first_name": "Barack",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2015/apr/17/america/meme-compares-spending-undocumented-immigrants-typ/",
        "statement_context": "a meme on social media",
        "ruling_date": "2015-04-17T14:53:59",
        "statement": "<p>&quot;American families work hard to earn $4,250 a month. Obama is spending $18,972 a month on each illegal immigrant child.&quot;</p>\r\n"
    },
    {
        "statement_date": "2015-04-05",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Obama: Iran spends $30 billion on defense; U.S. about $600 billion",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlytrue.png",
            "ruling_slug": "mostly-true",
            "ruling": "Mostly True"
        },
        "subject": [
            {
                "subject": "Foreign Policy",
                "subject_slug": "foreign-policy"
            },
            {
                "subject": "Nuclear",
                "subject_slug": "nuclear"
            }
        ],
        "ruling_link_text": "Estimates suggest Obama overstated Iran's spending",
        "speaker": {
            "last_name": "Obama",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_OBAMA_1.jpg",
            "name_slug": "barack-obama",
            "first_name": "Barack",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2015/apr/09/barack-obama/obama-iran-spends-30-billion-defense-us-about-600-/",
        "statement_context": "an interview with the 'New York Times.'",
        "ruling_date": "2015-04-09T13:36:57",
        "statement": "<p>&quot;Iran&rsquo;s defense budget is $30 billion. Our defense budget is closer to $600 billion.&quot;</p>\r\n"
    },
    {
        "statement_date": "2015-03-25",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Barack Obama says health care law has led to 50,000 fewer preventable hospital deaths",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlytrue.png",
            "ruling_slug": "mostly-true",
            "ruling": "Mostly True"
        },
        "subject": [
            {
                "subject": "Health Care",
                "subject_slug": "health-care"
            },
            {
                "subject": "Public Health",
                "subject_slug": "public-health"
            }
        ],
        "ruling_link_text": "A credible estimate says so",
        "speaker": {
            "last_name": "Obama",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_OBAMA_1.jpg",
            "name_slug": "barack-obama",
            "first_name": "Barack",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2015/mar/31/barack-obama/barack-obama-says-health-care-law-has-led-50000-/",
        "statement_context": "a speech",
        "ruling_date": "2015-03-31T10:54:35",
        "statement": "<p>The Affordable Care Act is &quot;a major reason why we&rsquo;ve seen 50,000 fewer preventable patient deaths in hospitals.&quot;</p>\r\n"
    },
    {
        "statement_date": "2015-02-08",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Barack Obama says nearly 20 percent of women in the U.S. have been raped or faced rape attempt",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlytrue.png",
            "ruling_slug": "mostly-true",
            "ruling": "Mostly True"
        },
        "subject": [
            {
                "subject": "Crime",
                "subject_slug": "crime"
            },
            {
                "subject": "Criminal Justice",
                "subject_slug": "criminal-justice"
            },
            {
                "subject": "Sexuality",
                "subject_slug": "sexuality"
            },
            {
                "subject": "Women",
                "subject_slug": "women"
            }
        ],
        "ruling_link_text": "CDC survey backs him up",
        "speaker": {
            "last_name": "Obama",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_OBAMA_1.jpg",
            "name_slug": "barack-obama",
            "first_name": "Barack",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2015/feb/16/barack-obama/barack-obama-says-nearly-1-5-women-us-has-been-rap/",
        "statement_context": "a public-service video during the Grammys",
        "ruling_date": "2015-02-16T12:06:15",
        "statement": "<p>&quot;Nearly one in five women in America has been a victim of rape or attempted rape.&quot;</p>\r\n"
    },
    {
        "statement_date": "2015-01-22",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Barack Obama says politicians get credit for founding colleges",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlyfalse.png",
            "ruling_slug": "barely-true",
            "ruling": "Mostly False"
        },
        "subject": [
            {
                "subject": "Education",
                "subject_slug": "education"
            },
            {
                "subject": "History",
                "subject_slug": "history"
            }
        ],
        "ruling_link_text": "Way oversimplified",
        "speaker": {
            "last_name": "Obama",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_OBAMA_1.jpg",
            "name_slug": "barack-obama",
            "first_name": "Barack",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2015/feb/03/barack-obama/barack-obama-says-politicians-get-credit-founding-/",
        "statement_context": "an interview with YouTube celebrity Bethany Mota",
        "ruling_date": "2015-02-03T10:34:14",
        "statement": "<p>&quot;The reason we even have colleges is that at some point there were politicians who said, &lsquo;You know what? We should start colleges.&rsquo; &quot;</p>\r\n"
    },
    {
        "statement_date": "2015-01-20",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Barack Obama says America 'is stopping' Islamic State's progress in Iraq and Syria",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-halftrue.png",
            "ruling_slug": "half-true",
            "ruling": "Half-True"
        },
        "subject": [
            {
                "subject": "Foreign Policy",
                "subject_slug": "foreign-policy"
            },
            {
                "subject": "Military",
                "subject_slug": "military"
            },
            {
                "subject": "Terrorism",
                "subject_slug": "terrorism"
            }
        ],
        "ruling_link_text": "Makes it sound better than it is",
        "speaker": {
            "last_name": "Obama",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_OBAMA_1.jpg",
            "name_slug": "barack-obama",
            "first_name": "Barack",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2015/jan/27/barack-obama/barack-obama-says-america-stopping-islamic-states-/",
        "statement_context": "the State of the Union address",
        "ruling_date": "2015-01-27T14:49:42",
        "statement": "<p>&quot;In Iraq and Syria, American leadership, including our military power, is stopping (the Islamic State&rsquo;s) advance.&quot;</p>\r\n"
    },
    {
        "statement_date": "2015-01-07",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Obama says automakers have paid back all the loans it got from his admin 'and more'",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlyfalse.png",
            "ruling_slug": "barely-true",
            "ruling": "Mostly False"
        },
        "subject": [
            {
                "subject": "Economy",
                "subject_slug": "economy"
            },
            {
                "subject": "Federal Budget",
                "subject_slug": "federal-budget"
            },
            {
                "subject": "Transportation",
                "subject_slug": "transportation"
            }
        ],
        "ruling_link_text": "Counting payments to Bush loans",
        "speaker": {
            "last_name": "Obama",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_OBAMA_1.jpg",
            "name_slug": "barack-obama",
            "first_name": "Barack",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2015/jan/22/barack-obama/obama-says-automakers-have-paid-back-all-loans-it-/",
        "statement_context": "a speech in Detroit",
        "ruling_date": "2015-01-22T17:13:19",
        "statement": "<p>&quot;The auto companies have now repaid taxpayers every dime and more of what my administration invested in.&quot;</p>\r\n"
    },
    {
        "statement_date": "2015-01-20",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "'America is No. 1 in wind power,' Obama says",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlytrue.png",
            "ruling_slug": "mostly-true",
            "ruling": "Mostly True"
        },
        "subject": [
            {
                "subject": "Energy",
                "subject_slug": "energy"
            }
        ],
        "ruling_link_text": "U.S. is tops in generation, but not capacity",
        "speaker": {
            "last_name": "Obama",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_OBAMA_1.jpg",
            "name_slug": "barack-obama",
            "first_name": "Barack",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2015/jan/21/barack-obama/america-no-1-wind-power-obama-says/",
        "statement_context": "the State of the Union address",
        "ruling_date": "2015-01-21T17:24:01",
        "statement": "<p>&quot;America is No. 1<strong> </strong>in wind power.&quot;</p>\r\n"
    },
    {
        "statement_date": "2015-01-20",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Barack Obama says U.S. economy is creating jobs at fastest pace since 1999",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-true.png",
            "ruling_slug": "true",
            "ruling": "True"
        },
        "subject": [
            {
                "subject": "Economy",
                "subject_slug": "economy"
            },
            {
                "subject": "Jobs",
                "subject_slug": "jobs"
            }
        ],
        "ruling_link_text": "Recovery is finally picking up steam",
        "speaker": {
            "last_name": "Obama",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_OBAMA_1.jpg",
            "name_slug": "barack-obama",
            "first_name": "Barack",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2015/jan/21/barack-obama/barack-obama-says-us-economy-creating-jobs-fastest/",
        "statement_context": "the State of the Union address",
        "ruling_date": "2015-01-21T16:21:46",
        "statement": "<p>The economy is &quot;creating jobs at the fastest pace since 1999.&quot;</p>\r\n"
    },
    {
        "statement_date": "2015-01-20",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Barack Obama says unemployment rate now lower than before the financial crisis of 2008",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlytrue.png",
            "ruling_slug": "mostly-true",
            "ruling": "Mostly True"
        },
        "subject": [
            {
                "subject": "Economy",
                "subject_slug": "economy"
            },
            {
                "subject": "Jobs",
                "subject_slug": "jobs"
            }
        ],
        "ruling_link_text": "Yes, using the most common measure",
        "speaker": {
            "last_name": "Obama",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_OBAMA_1.jpg",
            "name_slug": "barack-obama",
            "first_name": "Barack",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2015/jan/21/barack-obama/barack-obama-says-unemployment-rate-now-lower-fina/",
        "statement_context": "the State of the Union address",
        "ruling_date": "2015-01-21T01:16:44",
        "statement": "<p>&quot;Our unemployment rate is now lower than it was before the financial crisis.&quot;</p>\r\n"
    },
    {
        "statement_date": "2015-01-20",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Obama: America is No. 1 producer of oil, gas",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-true.png",
            "ruling_slug": "true",
            "ruling": "True"
        },
        "subject": [
            {
                "subject": "Energy",
                "subject_slug": "energy"
            },
            {
                "subject": "Gas Prices",
                "subject_slug": "gas-prices"
            }
        ],
        "ruling_link_text": "Data backs it up",
        "speaker": {
            "last_name": "Obama",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_OBAMA_1.jpg",
            "name_slug": "barack-obama",
            "first_name": "Barack",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2015/jan/21/barack-obama/obama-america-no-1-producer-oil-gas/",
        "statement_context": "his 2015 State of the Union address",
        "ruling_date": "2015-01-21T00:44:19",
        "statement": "<p>&quot;America is No. 1&nbsp;one in oil and gas.&quot; &nbsp;</p>\r\n"
    },
    {
        "statement_date": "2015-01-20",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Obama: Since 2010, U.S. has created more jobs than 'all advanced economies combined'",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-halftrue.png",
            "ruling_slug": "half-true",
            "ruling": "Half-True"
        },
        "subject": [
            {
                "subject": "Economy",
                "subject_slug": "economy"
            }
        ],
        "ruling_link_text": "How do we measure putting people back to work?",
        "speaker": {
            "last_name": "Obama",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_OBAMA_1.jpg",
            "name_slug": "barack-obama",
            "first_name": "Barack",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2015/jan/21/barack-obama/obama-obama-2010-us-has-created-more-jobs-all-adva/",
        "statement_context": "his 2015 State of the Union address",
        "ruling_date": "2015-01-21T00:42:29",
        "statement": "<p>&quot;Since 2010, America has put more people back to work than Europe, Japan, and all advanced economies combined.&quot;</p>\r\n"
    },
    {
        "statement_date": "2015-01-20",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Barack Obama says United States only developed country without paid maternity leave",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlytrue.png",
            "ruling_slug": "mostly-true",
            "ruling": "Mostly True"
        },
        "subject": [
            {
                "subject": "Jobs",
                "subject_slug": "jobs"
            },
            {
                "subject": "Women",
                "subject_slug": "women"
            },
            {
                "subject": "Workers",
                "subject_slug": "workers"
            }
        ],
        "ruling_link_text": "We're closer to New Guinea than New Zealand",
        "speaker": {
            "last_name": "Obama",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_OBAMA_1.jpg",
            "name_slug": "barack-obama",
            "first_name": "Barack",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2015/jan/21/barack-obama/barack-obama-says-united-states-only-developed-cou/",
        "statement_context": "the State of the Union address",
        "ruling_date": "2015-01-21T00:16:00",
        "statement": "<p>The United States is &quot;the only advanced country on Earth&quot; that doesn&rsquo;t guarantee &quot;paid maternity leave to our workers.&quot;</p>\r\n"
    },
    {
        "statement_date": "2015-01-20",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Barack Obama claims deficit has decreased by two-thirds since taking office",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlytrue.png",
            "ruling_slug": "mostly-true",
            "ruling": "Mostly True"
        },
        "subject": [
            {
                "subject": "Deficit",
                "subject_slug": "deficit"
            }
        ],
        "ruling_link_text": "Depends on the starting point",
        "speaker": {
            "last_name": "Obama",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_OBAMA_1.jpg",
            "name_slug": "barack-obama",
            "first_name": "Barack",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2015/jan/20/barack-obama/barack-obama-claims-deficit-has-decreased-two-thir/",
        "statement_context": "his 2015 State of the Union address",
        "ruling_date": "2015-01-20T22:57:45",
        "statement": "<p>We&#39;ve seen &quot;our deficits cut by two-thirds.&quot;</p>\r\n"
    },
    {
        "statement_date": "2015-01-08",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "'Home sales are up nearly 50 percent' from the worst of the housing crisis, Obama says",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlytrue.png",
            "ruling_slug": "mostly-true",
            "ruling": "Mostly True"
        },
        "subject": [
            {
                "subject": "Housing",
                "subject_slug": "housing"
            }
        ],
        "ruling_link_text": "The numbers add up in a still-troubled market",
        "speaker": {
            "last_name": "Obama",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_OBAMA_1.jpg",
            "name_slug": "barack-obama",
            "first_name": "Barack",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2015/jan/20/barack-obama/home-sales-are-nearly-50-percent-worst-housing-cri/",
        "statement_context": "a speech in Phoenix, Ariz.",
        "ruling_date": "2015-01-20T19:32:51",
        "statement": "<p>&quot;Today, home sales are up nearly 50 percent from where they were in the worst of the crisis.&quot;</p>\r\n"
    },
    {
        "statement_date": "2015-01-09",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Obama claims U.S. has doubled production of 'clean energy'",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlytrue.png",
            "ruling_slug": "mostly-true",
            "ruling": "Mostly True"
        },
        "subject": [
            {
                "subject": "Energy",
                "subject_slug": "energy"
            }
        ],
        "ruling_link_text": "He left out biofuels",
        "speaker": {
            "last_name": "Obama",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_OBAMA_1.jpg",
            "name_slug": "barack-obama",
            "first_name": "Barack",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2015/jan/20/barack-obama/obama-claims-us-has-doubled-production-clean-energ/",
        "statement_context": "a speech in Knoxville, Tenn.",
        "ruling_date": "2015-01-20T18:43:11",
        "statement": "<p>&quot;We&rsquo;ve doubled the production of clean energy.&quot;</p>\r\n"
    },
    {
        "statement_date": "2015-01-07",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Barack Obama says U.S. auto industry has 'created about 500,000 new jobs' in past 5 years",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-true.png",
            "ruling_slug": "true",
            "ruling": "True"
        },
        "subject": [
            {
                "subject": "Economy",
                "subject_slug": "economy"
            },
            {
                "subject": "Jobs",
                "subject_slug": "jobs"
            }
        ],
        "ruling_link_text": "U.S. car sector is revving its engines",
        "speaker": {
            "last_name": "Obama",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_OBAMA_1.jpg",
            "name_slug": "barack-obama",
            "first_name": "Barack",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2015/jan/20/barack-obama/barack-obama-says-us-auto-industry-has-created-abo/",
        "statement_context": "a speech in Wayne. Mich.",
        "ruling_date": "2015-01-20T17:18:30",
        "statement": "<p>Over the past five years, the American automobile industry has &quot;created about 500,000 new jobs.&quot;</p>\r\n"
    },
    {
        "statement_date": "2015-01-09",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Obama: more factories opening today than two decades ago",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlytrue.png",
            "ruling_slug": "mostly-true",
            "ruling": "Mostly True"
        },
        "subject": [
            {
                "subject": "Economy",
                "subject_slug": "economy"
            }
        ],
        "ruling_link_text": "It's been dropping since 1998",
        "speaker": {
            "last_name": "Obama",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_OBAMA_1.jpg",
            "name_slug": "barack-obama",
            "first_name": "Barack",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2015/jan/20/barack-obama/obama-more-factories-opening-today-two-decades-ago/",
        "statement_context": "remarks in Clinton, Tenn.",
        "ruling_date": "2015-01-20T15:08:15",
        "statement": "<p>&quot;Factories are opening their doors at the fastest pace in almost two decades.&quot;</p>\r\n"
    },
    {
        "statement_date": "2014-12-21",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Obama: 'We're spending millions for each individual' held at Guantanamo Bay, Cuba",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-true.png",
            "ruling_slug": "true",
            "ruling": "True"
        },
        "subject": [
            {
                "subject": "Corrections and Updates",
                "subject_slug": "corrections-and-updates"
            },
            {
                "subject": "Terrorism",
                "subject_slug": "terrorism"
            }
        ],
        "ruling_link_text": "About $3 million per inmate",
        "speaker": {
            "last_name": "Obama",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_OBAMA_1.jpg",
            "name_slug": "barack-obama",
            "first_name": "Barack",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2014/dec/21/barack-obama/obama-were-spending-millions-each-individual-held-/",
        "statement_context": "comments on CNN's \"State of the Union\"",
        "ruling_date": "2014-12-21T17:46:49",
        "statement": "<p>&quot;We&#39;re spending millions for each individual&quot; held at Guantanamo Bay, Cuba.</p>\r\n"
    },
    {
        "statement_date": "2014-12-21",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Obama: Iran has not advanced nuclear ambitions since U.S. negotiations started",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlytrue.png",
            "ruling_slug": "mostly-true",
            "ruling": "Mostly True"
        },
        "subject": [
            {
                "subject": "Foreign Policy",
                "subject_slug": "foreign-policy"
            },
            {
                "subject": "Nuclear",
                "subject_slug": "nuclear"
            }
        ],
        "ruling_link_text": "Gains, but more to be done",
        "speaker": {
            "last_name": "Obama",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_OBAMA_1.jpg",
            "name_slug": "barack-obama",
            "first_name": "Barack",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2014/dec/21/barack-obama/obama-iran-has-not-advanced-nuclear-ambitions-us-n/",
        "statement_context": "comments on CNN's \"State of the Union\"",
        "ruling_date": "2014-12-21T17:44:26",
        "statement": "<p>Since the United States began negotiations with Iran, &quot;that&#39;s probably the first year and a half in which Iran has not advanced its nuclear program in the last decade.&quot;</p>\r\n\r\n<div>&nbsp;</div>\r\n"
    },
    {
        "statement_date": "2014-12-17",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Marco Rubio says talks with Cuba produced no commitment to democratic reforms",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlytrue.png",
            "ruling_slug": "mostly-true",
            "ruling": "Mostly True"
        },
        "subject": [
            {
                "subject": "Foreign Policy",
                "subject_slug": "foreign-policy"
            },
            {
                "subject": "Human Rights",
                "subject_slug": "human-rights"
            }
        ],
        "ruling_link_text": "Little to nothing on paper",
        "speaker": {
            "last_name": "Rubio",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Marco_Rubio.jpg",
            "name_slug": "marco-rubio",
            "first_name": "Marco",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [
            {
                "last_name": "Obama",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_OBAMA_1.jpg",
                "name_slug": "barack-obama",
                "first_name": "Barack",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2014/dec/18/marco-rubio/marco-rubio-says-talks-cuba-produced-no-commitment/",
        "statement_context": "a press conference",
        "ruling_date": "2014-12-18T18:01:20",
        "statement": "<p>In the U.S. agreement with the Cuban government, &quot;no commitment was made to allowing the establishment of political parties or to even begin the semblance of a transition to a democracy.&quot;</p>\r\n"
    },
    {
        "statement_date": "2014-12-03",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Is America younger than its economic rivals due to immigration?",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlytrue.png",
            "ruling_slug": "mostly-true",
            "ruling": "Mostly True"
        },
        "subject": [
            {
                "subject": "Immigration",
                "subject_slug": "immigration"
            }
        ],
        "ruling_link_text": "We'd be more like Europe without them",
        "speaker": {
            "last_name": "Obama",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_OBAMA_1.jpg",
            "name_slug": "barack-obama",
            "first_name": "Barack",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2014/dec/09/barack-obama/america-younger-competitors-because-immigration/",
        "statement_context": "a speech to business leaders",
        "ruling_date": "2014-12-09T15:27:01",
        "statement": "<p>&quot;We are younger than our competitors, and this is entirely because of immigration.&quot;</p>\r\n"
    },
    {
        "statement_date": "2014-12-02",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "RNC chair Reince Priebus says Barack Obama has 'the worst record of any president' on debt",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-halftrue.png",
            "ruling_slug": "half-true",
            "ruling": "Half-True"
        },
        "subject": [
            {
                "subject": "Debt",
                "subject_slug": "debt"
            },
            {
                "subject": "History",
                "subject_slug": "history"
            }
        ],
        "ruling_link_text": "Depends on which measure you use",
        "speaker": {
            "last_name": "Priebus",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Reince_Priebus_Pfact_mug.jpg",
            "name_slug": "reince-priebus",
            "first_name": "Reince",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [
            {
                "last_name": "Obama",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_OBAMA_1.jpg",
                "name_slug": "barack-obama",
                "first_name": "Barack",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2014/dec/04/reince-priebus/rnc-chair-reince-priebus-says-barack-obama-has-wor/",
        "statement_context": "a speech",
        "ruling_date": "2014-12-04T17:00:00",
        "statement": "<p>Says Barack Obama has &quot;the worst record of any president when it comes to putting America deeper in debt.&quot;</p>\r\n"
    },
    {
        "statement_date": "2014-12-02",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Meme says Barack Obama has given 'no special recognition' to police killed in action",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-pantsonfire.gif",
            "ruling_slug": "pants-fire",
            "ruling": "Pants on Fire!"
        },
        "subject": [
            {
                "subject": "Criminal Justice",
                "subject_slug": "criminal-justice"
            }
        ],
        "ruling_link_text": "Overlooks a half-dozen presidential events ",
        "speaker": {
            "last_name": "Facebook posts",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Facebook_icon_1.jpg",
            "name_slug": "facebook-posts",
            "first_name": "",
            "party": {
                "party": "None",
                "party_slug": "none"
            }
        },
        "target": [
            {
                "last_name": "Obama",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_OBAMA_1.jpg",
                "name_slug": "barack-obama",
                "first_name": "Barack",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2014/dec/02/facebook-posts/meme-says-barack-obama-has-given-no-special-recogn/",
        "statement_context": "a meme on social media",
        "ruling_date": "2014-12-02T17:24:56",
        "statement": "<p>&quot;794 law enforcement officers have fallen in the line of duty since B.H. Obama took office, with no special recognition from the White House.&quot;</p>\r\n"
    },
    {
        "statement_date": "2014-11-20",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Are Barack Obama's immigration moves 'the kinds of actions' taken by presidents for 50 years?",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-halftrue.png",
            "ruling_slug": "half-true",
            "ruling": "Half-True"
        },
        "subject": [
            {
                "subject": "Immigration",
                "subject_slug": "immigration"
            },
            {
                "subject": "Legal Issues",
                "subject_slug": "legal-issues"
            }
        ],
        "ruling_link_text": "All presidents acted, but few so sweepingly",
        "speaker": {
            "last_name": "Obama",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_OBAMA_1.jpg",
            "name_slug": "barack-obama",
            "first_name": "Barack",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2014/nov/21/barack-obama/are-barack-obamas-immigration-moves-kinds-actions-/",
        "statement_context": "a speech announcing new immigration actions",
        "ruling_date": "2014-11-21T17:53:25",
        "statement": "<p>&quot;The actions I&rsquo;m taking&quot; are &quot;the kinds of actions taken by every single Republican president and every single Democratic president for the past half-century.&quot;</p>\r\n"
    },
    {
        "statement_date": "2014-11-16",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Barack Obama: Position on immigration action through executive orders 'hasn't changed'",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-false.png",
            "ruling_slug": "false",
            "ruling": "False"
        },
        "subject": [
            {
                "subject": "Immigration",
                "subject_slug": "immigration"
            },
            {
                "subject": "Legal Issues",
                "subject_slug": "legal-issues"
            }
        ],
        "ruling_link_text": "From 'I'm not a king' to 'obliged to do everything I can'",
        "speaker": {
            "last_name": "Obama",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_OBAMA_1.jpg",
            "name_slug": "barack-obama",
            "first_name": "Barack",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2014/nov/20/barack-obama/barack-obama-position-immigration-action-through-e/",
        "statement_context": "a press conference in Australia.",
        "ruling_date": "2014-11-20T17:15:04",
        "statement": "<p>&quot;My position hasn&rsquo;t changed&quot; on using executive authority to address immigration issues.</p>\r\n"
    },
    {
        "statement_date": "2014-11-14",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Obama says Keystone XL is for exporting oil outside the U.S., experts disagree",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlyfalse.png",
            "ruling_slug": "barely-true",
            "ruling": "Mostly False"
        },
        "subject": [
            {
                "subject": "Energy",
                "subject_slug": "energy"
            },
            {
                "subject": "Gas Prices",
                "subject_slug": "gas-prices"
            }
        ],
        "ruling_link_text": "American refineries will be the primary buyers",
        "speaker": {
            "last_name": "Obama",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_OBAMA_1.jpg",
            "name_slug": "barack-obama",
            "first_name": "Barack",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2014/nov/20/barack-obama/obama-says-keystone-xl-exporting-oil-experts-disag/",
        "statement_context": "a press conference in Burma",
        "ruling_date": "2014-11-20T16:02:05",
        "statement": "<p>Keystone XL allows &quot;Canada to pump their oil, send it through our land, down to the Gulf, where it will be sold everywhere else.&quot;</p>\r\n"
    },
    {
        "statement_date": "2014-11-16",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Barack Obama says MIT professor Jonathan Gruber was just 'some adviser'",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlyfalse.png",
            "ruling_slug": "barely-true",
            "ruling": "Mostly False"
        },
        "subject": [
            {
                "subject": "Health Care",
                "subject_slug": "health-care"
            }
        ],
        "ruling_link_text": "Not just any adviser",
        "speaker": {
            "last_name": "Obama",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_OBAMA_1.jpg",
            "name_slug": "barack-obama",
            "first_name": "Barack",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2014/nov/19/barack-obama/barack-obama-says-mit-professor-jonathan-gruber-wa/",
        "statement_context": "Brisbane, Australia, for the G20 summit",
        "ruling_date": "2014-11-19T12:06:42",
        "statement": "<p>Says Jonathan Gruber was &quot;some adviser who never worked on our staff.&quot;</p>\r\n"
    },
    {
        "statement_date": "2014-11-16",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Obama: U.S. has put more people 'back to work' than all other advanced economies combined",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-halftrue.png",
            "ruling_slug": "half-true",
            "ruling": "Half-True"
        },
        "subject": [
            {
                "subject": "Economy",
                "subject_slug": "economy"
            },
            {
                "subject": "Jobs",
                "subject_slug": "jobs"
            },
            {
                "subject": "Labor",
                "subject_slug": "labor"
            },
            {
                "subject": "Workers",
                "subject_slug": "workers"
            }
        ],
        "ruling_link_text": "A deep dive into the numbers",
        "speaker": {
            "last_name": "Obama",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_OBAMA_1.jpg",
            "name_slug": "barack-obama",
            "first_name": "Barack",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2014/nov/18/barack-obama/obama-us-has-put-more-people-back-work-all-other-a/",
        "statement_context": "a press conference after the G20 summit",
        "ruling_date": "2014-11-18T11:00:20",
        "statement": "<p>&quot;Over the last few years, we&rsquo;ve put more people back to work than all the other advanced economies combined.&quot;</p>\r\n"
    },
    {
        "statement_date": "2014-11-09",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Obama: Since 2009, U.S. has created more jobs than 'every other advanced economy combined'",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-halftrue.png",
            "ruling_slug": "half-true",
            "ruling": "Half-True"
        },
        "subject": [
            {
                "subject": "Jobs",
                "subject_slug": "jobs"
            }
        ],
        "ruling_link_text": "A big share, but not quite",
        "speaker": {
            "last_name": "Obama",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_OBAMA_1.jpg",
            "name_slug": "barack-obama",
            "first_name": "Barack",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2014/nov/09/barack-obama/obama-2009-us-has-created-more-jobs-every-other-ad/",
        "statement_context": "an interview on CBS' \"Face the Nation\"",
        "ruling_date": "2014-11-09T18:00:08",
        "statement": "<div style=\"color: rgb(0, 0, 0); font-family: arial, sans-serif; line-height: normal;\">&quot;We&#39;ve created more jobs in the United States than every other advanced economy combined since I came into office.&quot;</div>\r\n"
    },
    {
        "statement_date": "2014-10-18",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Barack Obama says you can't get Ebola from riding on a bus or plane",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlytrue.png",
            "ruling_slug": "mostly-true",
            "ruling": "Mostly True"
        },
        "subject": [
            {
                "subject": "Ebola",
                "subject_slug": "ebola"
            },
            {
                "subject": "Public Health",
                "subject_slug": "public-health"
            },
            {
                "subject": "Transportation",
                "subject_slug": "transportation"
            }
        ],
        "ruling_link_text": "So you're telling me there's a chance",
        "speaker": {
            "last_name": "Obama",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_OBAMA_1.jpg",
            "name_slug": "barack-obama",
            "first_name": "Barack",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2014/oct/29/barack-obama/barack-obama-says-you-cant-get-ebola-riding-bus-or/",
        "statement_context": "the president's weekly national address",
        "ruling_date": "2014-10-29T14:45:59",
        "statement": "<p>&quot;You cannot get (Ebola) from just riding on a plane or bus.&quot;</p>\r\n"
    },
    {
        "statement_date": "2014-10-03",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Barack Obama says states that raised minimum wages have had higher job growth this year",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-halftrue.png",
            "ruling_slug": "half-true",
            "ruling": "Half-True"
        },
        "subject": [
            {
                "subject": "Economy",
                "subject_slug": "economy"
            },
            {
                "subject": "States",
                "subject_slug": "states"
            },
            {
                "subject": "Workers",
                "subject_slug": "workers"
            }
        ],
        "ruling_link_text": "Yes, but the difference may not mean much",
        "speaker": {
            "last_name": "Obama",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_OBAMA_1.jpg",
            "name_slug": "barack-obama",
            "first_name": "Barack",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2014/oct/09/barack-obama/barack-obama-says-states-raised-minimum-wages-have/",
        "statement_context": "a speech in Princeton, Ind.",
        "ruling_date": "2014-10-09T11:48:05",
        "statement": "<p>&quot;The states that have raised the minimum wage (this year) have had faster job growth than the states that haven&rsquo;t raised the minimum wage.&quot;</p>\r\n"
    }
]
obama=obama.filter(function(item){return speakerCheck(item, "barack-obama")});

//REPS:
var trump=[
    {
        "statement": "<p>The 2018 Academy Awards show was the &quot;lowest rated Oscars in HISTORY.&quot;</p>\r\n",
        "statement_url": "/truth-o-meter/statements/2018/mar/06/donald-trump/donald-trump-correct-about-record-low-ratings-2018/",
        "target": [],
        "statement_context": "a tweet",
        "statement_date": "2018-03-06",
        "speaker": {
            "first_name": "Donald",
            "last_name": "Trump",
            "name_slug": "donald-trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "subject": [
            {
                "subject_slug": "pop-culture",
                "subject": "Pop Culture"
            }
        ],
        "ruling_date": "2018-03-06T16:21:35",
        "ruling_link_text": "Ratings for all award shows are lagging",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Donald Trump is correct about record-low ratings for 2018 Oscars",
        "ruling": {
            "ruling_slug": "true",
            "ruling": "True",
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-true.png"
        }
    },
    {
        "statement": "<p>Says China and Singapore impose the death penalty on drug dealers.</p>\r\n",
        "statement_url": "/truth-o-meter/statements/2018/mar/14/donald-trump/donald-trump-says-china-singapore-have-death-penal/",
        "target": [],
        "statement_context": "a rally",
        "statement_date": "2018-03-10",
        "speaker": {
            "first_name": "Donald",
            "last_name": "Trump",
            "name_slug": "donald-trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "subject": [
            {
                "subject_slug": "drugs",
                "subject": "Drugs"
            }
        ],
        "ruling_date": "2018-03-14T10:37:41",
        "ruling_link_text": "Laws on the book",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Donald Trump says China, Singapore have death penalty for drug dealers",
        "ruling": {
            "ruling_slug": "true",
            "ruling": "True",
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-true.png"
        }
    },
    {
        "statement_date": "2018-02-20",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Has Donald Trump 'been much tougher on Russia' than Barack Obama?",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlyfalse.png",
            "ruling_slug": "barely-true",
            "ruling": "Mostly False"
        },
        "subject": [
            {
                "subject": "Foreign Policy",
                "subject_slug": "foreign-policy"
            }
        ],
        "ruling_link_text": "Trump's words have been soft, but his policies tougher",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2018/feb/20/donald-trump/has-donald-trump-been-much-tougher-russia-barack-o/",
        "statement_context": "a tweet",
        "ruling_date": "2018-02-20T17:16:40",
        "statement": "<p>&quot;I have been much tougher on Russia than Obama, just look at the facts. Total Fake News!&quot;</p>\r\n"
    },
    {
        "statement_date": "2018-02-18",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Donald Trump falsely says he never denied Russian meddling",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-pantsonfire.gif",
            "ruling_slug": "pants-fire",
            "ruling": "Pants on Fire!"
        },
        "subject": [
            {
                "subject": "Elections",
                "subject_slug": "elections"
            },
            {
                "subject": "Foreign Policy",
                "subject_slug": "foreign-policy"
            }
        ],
        "ruling_link_text": "Except he did say that",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2018/feb/19/donald-trump/donald-trump-falsely-denies-he-denied-russian-medd/",
        "statement_context": "a tweet",
        "ruling_date": "2018-02-19T14:12:24",
        "statement": "<p>&quot;I never said Russia did not meddle in the election.&quot;</p>\r\n\r\n<div>&nbsp;</div>\r\n"
    },
    {
        "statement_date": "2018-02-05",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Donald Trump wrongly suggests British don't love their health care system",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlyfalse.png",
            "ruling_slug": "barely-true",
            "ruling": "Mostly False"
        },
        "subject": [
            {
                "subject": "Health Care",
                "subject_slug": "health-care"
            },
            {
                "subject": "Public Health",
                "subject_slug": "public-health"
            }
        ],
        "ruling_link_text": "They're protesting cuts to U system",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2018/feb/08/donald-trump/donald-trump-wrongly-suggests-british-dont-love-th/",
        "statement_context": "a tweet",
        "ruling_date": "2018-02-08T11:00:28",
        "statement": "<p>&quot;The Democrats are pushing for Universal HealthCare while thousands of people are marching in the UK because their U system is going broke and not working.&quot;</p>\r\n"
    },
    {
        "statement_date": "2018-01-30",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Immigration, MS-13 and crime: the facts behind Donald Trump’s exaggerations",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-halftrue.png",
            "ruling_slug": "half-true",
            "ruling": "Half-True"
        },
        "subject": [
            {
                "subject": "Crime",
                "subject_slug": "crime"
            },
            {
                "subject": "Homeland Security",
                "subject_slug": "homeland-security"
            },
            {
                "subject": "Immigration",
                "subject_slug": "immigration"
            }
        ],
        "ruling_link_text": "Unclear how many gang members came as unaccompanied minors",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2018/feb/07/donald-trump/immigration-ms-13-and-crime-facts-behind-donald-tr/",
        "statement_context": "State of the Union address",
        "ruling_date": "2018-02-07T10:39:41",
        "statement": "<p>Many gang members have taken advantage of &quot;glaring loopholes and our laws to enter the country as illegal, unaccompanied, alien minors.&quot;</p>\r\n"
    },
    {
        "statement_date": "2018-02-05",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Donald Trump's Pants on Fire claim about 'treason'",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-pantsonfire.gif",
            "ruling_slug": "pants-fire",
            "ruling": "Pants on Fire!"
        },
        "subject": [
            {
                "subject": "Legal Issues",
                "subject_slug": "legal-issues"
            }
        ],
        "ruling_link_text": "Nowhere close to the Constitution's definition",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2018/feb/06/donald-trump/donald-trumps-pants-fire-claim-about-treason/",
        "statement_context": "a speech near Cincinnati",
        "ruling_date": "2018-02-06T16:51:37",
        "statement": "<p>At the State of the Union address, Democrats, &quot;even on positive news &hellip; were like death and un-American. Un-American.&nbsp;Somebody said, &lsquo;treasonous.&rsquo; I mean, yeah, I guess, why not?&nbsp;Can we call that treason? Why not?&quot;</p>\r\n"
    },
    {
        "statement_date": "2018-01-26",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "No, Trump hasn't cut 22 regulations for every new one",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlyfalse.png",
            "ruling_slug": "barely-true",
            "ruling": "Mostly False"
        },
        "subject": [
            {
                "subject": "Government regulation",
                "subject_slug": "government-regulation"
            },
            {
                "subject": "Regulation",
                "subject_slug": "market-regulation"
            }
        ],
        "ruling_link_text": "Barely 2 for 1",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2018/feb/02/donald-trump/trump-hasnt-cut-22-regulations-every-new-one/",
        "statement_context": "a speech",
        "ruling_date": "2018-02-02T11:31:32",
        "statement": "<p>&quot;Instead of two for one, we have cut 22 burdensome regulations for everyone new rule.&quot;</p>\r\n"
    },
    {
        "statement_date": "2018-01-26",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "How high are economic confidence polls under Donald Trump?",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-halftrue.png",
            "ruling_slug": "half-true",
            "ruling": "Half-True"
        },
        "subject": [
            {
                "subject": "Economy",
                "subject_slug": "economy"
            },
            {
                "subject": "Polls and Public Opinion",
                "subject_slug": "polls"
            }
        ],
        "ruling_link_text": "High, but not highest in 'many decades'",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2018/feb/02/donald-trump/how-high-are-economic-confidence-polls-under-donal/",
        "statement_context": "a speech in Davos, Switzerland",
        "ruling_date": "2018-02-02T10:20:32",
        "statement": "<p>&quot;Consumer confidence, business confidence, and manufacturing confidence are the highest they have been in many decades.&quot;</p>\r\n"
    },
    {
        "statement_date": "2018-02-01",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Trump's State of the Union ratings are not the highest in history",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlyfalse.png",
            "ruling_slug": "barely-true",
            "ruling": "Mostly False"
        },
        "subject": [
            {
                "subject": "Polls and Public Opinion",
                "subject_slug": "polls"
            }
        ],
        "ruling_link_text": "Sixth not first",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2018/feb/01/donald-trump/trump-state-union-ratings-not-highest-history/",
        "statement_context": "a Tweet",
        "ruling_date": "2018-02-01T17:31:44",
        "statement": "<p>&quot;45.6 million people watched (the State of the Union), the highest number in history.<a href=\"https://twitter.com/FoxNews\"> @FoxNews</a> beat every other Network, for the first time ever, with 11.7 million people tuning in.&quot;</p>\r\n"
    },
    {
        "statement_date": "2018-01-30",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Donald Trump inflates Apple investment",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-halftrue.png",
            "ruling_slug": "half-true",
            "ruling": "Half-True"
        },
        "subject": [
            {
                "subject": "Economy",
                "subject_slug": "economy"
            },
            {
                "subject": "Jobs",
                "subject_slug": "jobs"
            },
            {
                "subject": "Taxes",
                "subject_slug": "taxes"
            }
        ],
        "ruling_link_text": "A smaller bite of the Apple",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2018/jan/31/donald-trump/donald-trump-inflates-apple-investment/",
        "statement_context": "the 2018 State of the Union address",
        "ruling_date": "2018-01-31T15:46:22",
        "statement": "<p>&quot;Apple has just announced it plans to invest a total of $350 billion in America, and hire another 20,000 workers.&quot;</p>\r\n"
    },
    {
        "statement_date": "2018-01-31",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Donald Trump's misleading claim about chain migration, unlimited sponsorship of distant relatives",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlyfalse.png",
            "ruling_slug": "barely-true",
            "ruling": "Mostly False"
        },
        "subject": [
            {
                "subject": "Immigration",
                "subject_slug": "immigration"
            }
        ],
        "ruling_link_text": "Theoretically, but there are restrictions",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2018/jan/31/donald-trump/donald-trumps-misleading-claim-about-chain-migrati/",
        "statement_context": "State of the Union address",
        "ruling_date": "2018-01-31T14:27:41",
        "statement": "<p>&quot;A single immigrant can bring in unlimited numbers of distant relatives.&quot;</p>\r\n"
    },
    {
        "statement_date": "2018-01-30",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Fact-checking Donald Trump's misleading claim about the release of 'dangerous terrorists'",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlyfalse.png",
            "ruling_slug": "barely-true",
            "ruling": "Mostly False"
        },
        "subject": [
            {
                "subject": "Terrorism",
                "subject_slug": "terrorism"
            }
        ],
        "ruling_link_text": "Not that many",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2018/jan/31/donald-trump/fact-checking-donald-trumps-misleading-claim-about/",
        "statement_context": "the 2018 State of the Union address",
        "ruling_date": "2018-01-31T00:25:09",
        "statement": "<p>&quot;In the past, we have foolishly released hundreds and hundreds of dangerous terrorists, only to meet them again on the battlefield &mdash; including the ISIS leader, al-Baghdadi, who we captured, who we had, who we released.&quot;</p>\r\n"
    },
    {
        "statement_date": "2018-01-30",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Donald Trump exaggerates energy exports",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlyfalse.png",
            "ruling_slug": "barely-true",
            "ruling": "Mostly False"
        },
        "subject": [
            {
                "subject": "Energy",
                "subject_slug": "energy"
            }
        ],
        "ruling_link_text": "Still a net energy importer",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2018/jan/31/donald-trump/trump-exaggerates-energy-exports/",
        "statement_context": "the 2018 State of the Union address",
        "ruling_date": "2018-01-31T00:20:25",
        "statement": "<p>&quot;We are now, very proudly, an exporter of energy to the world.&quot;</p>\r\n\r\n<div>&nbsp;</div>\r\n"
    },
    {
        "statement_date": "2018-01-30",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Donald Trump: ISIS territory losses near 100 percent",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlytrue.png",
            "ruling_slug": "mostly-true",
            "ruling": "Mostly True"
        },
        "subject": [
            {
                "subject": "Terrorism",
                "subject_slug": "terrorism"
            }
        ],
        "ruling_link_text": "But a lot of the fighting came earlier",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2018/jan/30/donald-trump/trump-isis-territory-losses-near-100/",
        "statement_context": "the 2018 State of the Union address",
        "ruling_date": "2018-01-30T23:52:31",
        "statement": "<p>Says one year later, &quot;the coalition to defeat ISIS has liberated very close to&nbsp;100 percent of the territory just recently&nbsp;held by these killers in Iraq and Syria.&quot;</p>\r\n"
    },
    {
        "statement_date": "2018-01-30",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Donald Trump correct that small business optimism is at record high",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-true.png",
            "ruling_slug": "true",
            "ruling": "True"
        },
        "subject": [
            {
                "subject": "Economy",
                "subject_slug": "economy"
            },
            {
                "subject": "Polls and Public Opinion",
                "subject_slug": "polls"
            },
            {
                "subject": "Small Business",
                "subject_slug": "small-business"
            }
        ],
        "ruling_link_text": "Average for 2017 set a record",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2018/jan/30/donald-trump/donald-trump-correct-small-business-optimism-recor/",
        "statement_context": "his State of the Union address",
        "ruling_date": "2018-01-30T23:27:30",
        "statement": "<p>&quot;Small business confidence is at an all-time high.&quot;</p>\r\n"
    },
    {
        "statement_date": "2018-01-30",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Does it take 10 years to get a permit to build a road, as Donald Trump said?",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-halftrue.png",
            "ruling_slug": "half-true",
            "ruling": "Half-True"
        },
        "subject": [
            {
                "subject": "Infrastructure",
                "subject_slug": "infrastructure"
            },
            {
                "subject": "Regulation",
                "subject_slug": "market-regulation"
            }
        ],
        "ruling_link_text": "Red herring on red tape?",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2018/jan/30/donald-trump/does-it-take-10-years-get-permit-build-road-donald/",
        "statement_context": "the State of the Union address",
        "ruling_date": "2018-01-30T23:14:07",
        "statement": "<p>&quot;America is a nation of builders. We built the Empire State Building in just one year. Isn&rsquo;t it a disgrace that it can now take 10 years just to get a minor permit approved for the building of a simple road?&quot;</p>\r\n"
    },
    {
        "statement_date": "2018-01-30",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Is U.S. 'finally seeing rising wages,' as Donald Trump said?",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlyfalse.png",
            "ruling_slug": "barely-true",
            "ruling": "Mostly False"
        },
        "subject": [
            {
                "subject": "Economy",
                "subject_slug": "economy"
            },
            {
                "subject": "Workers",
                "subject_slug": "workers"
            }
        ],
        "ruling_link_text": "Began going up under Obama",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2018/jan/30/donald-trump/us-finally-seeing-rising-wages-donald-trump-said/",
        "statement_context": "his State of the Union address",
        "ruling_date": "2018-01-30T23:01:19",
        "statement": "<p>&quot;After years of wage stagnation, we are finally seeing rising wages.&quot;</p>\r\n"
    },
    {
        "statement_date": "2018-01-30",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Donald Trump leaves out the facts in claim about visa lottery",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-false.png",
            "ruling_slug": "false",
            "ruling": "False"
        },
        "subject": [
            {
                "subject": "Homeland Security",
                "subject_slug": "homeland-security"
            },
            {
                "subject": "Immigration",
                "subject_slug": "immigration"
            }
        ],
        "ruling_link_text": "Must be vetted, meet education or work requirements",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2018/jan/30/donald-trump/donald-trump-leaves-out-facts-claim-about-visa-lot/",
        "statement_context": "State of the Union address",
        "ruling_date": "2018-01-30T22:34:34",
        "statement": "<p>The immigration visa lottery &quot;randomly hands out green cards without any regard for skill, merit, or the safety of American people.&quot;</p>\r\n"
    },
    {
        "statement_date": "2018-01-30",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Donald Trump says tax bill led to bonuses for 3 million workers",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlytrue.png",
            "ruling_slug": "mostly-true",
            "ruling": "Mostly True"
        },
        "subject": [
            {
                "subject": "Taxes",
                "subject_slug": "taxes"
            },
            {
                "subject": "Workers",
                "subject_slug": "workers"
            }
        ],
        "ruling_link_text": "Companies said so",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2018/jan/30/donald-trump/trump-says-tax-bill-led-bonuses-three-million-work/",
        "statement_context": "the State of the Union speech",
        "ruling_date": "2018-01-30T21:44:02",
        "statement": "<p>&quot;Since we passed tax cuts, over 3 million workers have gotten tax cut bonuses &mdash; many of them thousands and thousands of dollars.&quot;</p>\r\n"
    },
    {
        "statement_date": "2018-01-30",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Donald Trump wrong again that recent tax bill is biggest ever",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-false.png",
            "ruling_slug": "false",
            "ruling": "False"
        },
        "subject": [
            {
                "subject": "Taxes",
                "subject_slug": "taxes"
            }
        ],
        "ruling_link_text": "Repeating claim doesn't make it true",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2018/jan/30/donald-trump/donald-trump-wrong-again-recent-tax-bill-biggest-e/",
        "statement_context": "his State of the Union address",
        "ruling_date": "2018-01-30T21:24:30",
        "statement": "<p>&quot;We enacted the biggest tax cuts and reforms in American history.&quot;</p>\r\n"
    },
    {
        "statement_date": "2018-01-28",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Donald Trump is partly correct in response to Jay-Z about black unemployment",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-halftrue.png",
            "ruling_slug": "half-true",
            "ruling": "Half-True"
        },
        "subject": [
            {
                "subject": "Diversity",
                "subject_slug": "diversity"
            },
            {
                "subject": "Economy",
                "subject_slug": "economy"
            },
            {
                "subject": "Jobs",
                "subject_slug": "jobs"
            }
        ],
        "ruling_link_text": "It was falling for years before Trump",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2018/jan/30/donald-trump/donald-trump-partly-correct-rejoinder-jay-z/",
        "statement_context": "a tweet",
        "ruling_date": "2018-01-30T20:00:36",
        "statement": "<p>&quot;Because of my policies, Black Unemployment has just been reported to be at the LOWEST RATE EVER RECORDED!&quot;</p>\r\n"
    },
    {
        "statement_date": "2018-01-26",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Donald Trump gets polar ice trend backwards",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-pantsonfire.gif",
            "ruling_slug": "pants-fire",
            "ruling": "Pants on Fire!"
        },
        "subject": [
            {
                "subject": "Climate Change",
                "subject_slug": "climate-change"
            }
        ],
        "ruling_link_text": "Brain freeze",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2018/jan/29/donald-trump/trump-gets-polar-ice-trend-backwards/",
        "statement_context": "an interview with Piers Morgan",
        "ruling_date": "2018-01-29T15:59:06",
        "statement": "<p>&quot;The ice caps were going to melt, they were going to be gone by now, but now they&rsquo;re setting records, so okay, they&rsquo;re at a record level.&quot;</p>\r\n"
    },
    {
        "statement_date": "2018-01-09",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Donald Trump’s unsubstantiated claims about chain migration, NYC terror suspect",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-false.png",
            "ruling_slug": "false",
            "ruling": "False"
        },
        "subject": [
            {
                "subject": "Immigration",
                "subject_slug": "immigration"
            }
        ],
        "ruling_link_text": "No backup for this claim",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2018/jan/24/donald-trump/donald-trumps-unsubstantiated-claims-about-chain-m/",
        "statement_context": "a Cabinet meeting",
        "ruling_date": "2018-01-24T12:00:00",
        "statement": "<p>Says &quot;22 to 24 people&quot; came into the United States due to family connection with suspect in the October 2017 New York City terror attack.</p>\r\n"
    },
    {
        "statement_date": "2018-01-18",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Mexico isn't the deadliest country in the world, as Trump said",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlyfalse.png",
            "ruling_slug": "barely-true",
            "ruling": "Mostly False"
        },
        "subject": [
            {
                "subject": "Crime",
                "subject_slug": "crime"
            },
            {
                "subject": "Immigration",
                "subject_slug": "immigration"
            }
        ],
        "ruling_link_text": "Only for journalists",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2018/jan/24/donald-trump/mexico-isnt-deadliest-country-world-trump-said/",
        "statement_context": "a tweet",
        "ruling_date": "2018-01-24T11:42:25",
        "statement": "<p>Mexico is &quot;now rated the number one most dangerous country in the world.&quot;</p>\r\n"
    },
    {
        "statement_date": "2017-12-15",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Do immigrants cost U.S. taxpayers $300 billion annually?",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-halftrue.png",
            "ruling_slug": "half-true",
            "ruling": "Half-True"
        },
        "subject": [
            {
                "subject": "Economy",
                "subject_slug": "economy"
            },
            {
                "subject": "Immigration",
                "subject_slug": "immigration"
            }
        ],
        "ruling_link_text": "There's more to that number",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2018/jan/23/donald-trump/does-immigration-policy-impose-300-billion-annuall/",
        "statement_context": "White House graphic",
        "ruling_date": "2018-01-23T11:00:45",
        "statement": "<p>&quot;Current immigration policy imposes as much as $300 billion annually in net fiscal costs on U.S. taxpayers.&quot;</p>\r\n\r\n<p>&nbsp;</p>\r\n"
    },
    {
        "statement_date": "2018-01-16",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Donald Trump said Chrysler is leaving Mexico. It isn't",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-halftrue.png",
            "ruling_slug": "half-true",
            "ruling": "Half-True"
        },
        "subject": [
            {
                "subject": "Jobs",
                "subject_slug": "jobs"
            },
            {
                "subject": "Taxes",
                "subject_slug": "taxes"
            },
            {
                "subject": "Trade",
                "subject_slug": "trade"
            }
        ],
        "ruling_link_text": "U.S. gain ≠ Mexico's loss",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2018/jan/18/donald-trump/trump-said-chrysler-leaving-mexico-it-isnt/",
        "statement_context": "a speech at a women's event in Washington",
        "ruling_date": "2018-01-18T10:00:00",
        "statement": "<p>&quot;Chrysler is leaving Mexico and moving back to Michigan.&quot;</p>\r\n"
    },
    {
        "statement_date": "2018-01-12",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Would the military shut down if the federal government does?",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlyfalse.png",
            "ruling_slug": "barely-true",
            "ruling": "Mostly False"
        },
        "subject": [
            {
                "subject": "Federal Budget",
                "subject_slug": "federal-budget"
            },
            {
                "subject": "Military",
                "subject_slug": "military"
            }
        ],
        "ruling_link_text": "Core military functions remain operational",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2018/jan/17/donald-trump/would-military-shut-down-if-federal-government-doe/",
        "statement_context": "a tweet",
        "ruling_date": "2018-01-17T17:34:00",
        "statement": "<p>In a government shutdown, &quot;what they are really doing is shutting down our military.&quot;</p>\r\n"
    },
    {
        "statement_date": "2018-01-16",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "DNC offers one-sided view on who gets tax bill's benefits",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-halftrue.png",
            "ruling_slug": "half-true",
            "ruling": "Half-True"
        },
        "subject": [
            {
                "subject": "Taxes",
                "subject_slug": "taxes"
            }
        ],
        "ruling_link_text": "Not true until about a decade from now",
        "speaker": {
            "last_name": "Democratic National Committee",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/mugs/mug-dnc.jpg",
            "name_slug": "democratic-national-committee",
            "first_name": "",
            "party": {
                "party": "None",
                "party_slug": "none"
            }
        },
        "target": [
            {
                "last_name": "Trump",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
                "name_slug": "donald-trump",
                "first_name": "Donald",
                "party": {
                    "party": "Republican",
                    "party_slug": "republican"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2018/jan/16/democratic-national-committee/dnc-offers-one-sided-view-who-gets-tax-bills-benef/",
        "statement_context": "a Medium post",
        "ruling_date": "2018-01-16T17:30:16",
        "statement": "<p>The Republicans and President Donald Trump&nbsp;&quot;passed a tax bill that gave 80 percent of its benefits to the top 1 percent.&quot;</p>\r\n"
    },
    {
        "statement_date": "2018-01-16",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "DNC strains to find problems with current job market",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-halftrue.png",
            "ruling_slug": "half-true",
            "ruling": "Half-True"
        },
        "subject": [
            {
                "subject": "Economy",
                "subject_slug": "economy"
            },
            {
                "subject": "Jobs",
                "subject_slug": "jobs"
            }
        ],
        "ruling_link_text": "Straining hard to find a dark spot",
        "speaker": {
            "last_name": "Democratic National Committee",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/mugs/mug-dnc.jpg",
            "name_slug": "democratic-national-committee",
            "first_name": "",
            "party": {
                "party": "None",
                "party_slug": "none"
            }
        },
        "target": [
            {
                "last_name": "Trump",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
                "name_slug": "donald-trump",
                "first_name": "Donald",
                "party": {
                    "party": "Republican",
                    "party_slug": "republican"
                }
            },
            {
                "last_name": "Truth in Accounting",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/TiA.JPG",
                "name_slug": "truth-accounting",
                "first_name": "",
                "party": {
                    "party": "None",
                    "party_slug": "none"
                }
            },
            {
                "last_name": "Vets for Trump",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/politifact-mugs-mug-independentgroup__________________3.jpg",
                "name_slug": "vets-trump",
                "first_name": "",
                "party": {
                    "party": "None",
                    "party_slug": "none"
                }
            },
            {
                "last_name": "Wisconsin Department of Public Instruction",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/mugs_mug-independentgroup___________________29.jpg",
                "name_slug": "wisconsin-department-public-instruction",
                "first_name": "",
                "party": {
                    "party": "None",
                    "party_slug": "none"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2018/jan/16/democratic-national-committee/dnc-strains-find-problems-current-job-market/",
        "statement_context": "a Medium post",
        "ruling_date": "2018-01-16T16:39:00",
        "statement": "<p>&quot;In Trump&rsquo;s first year as president, job growth slowed to a six-year low.&quot;</p>\r\n"
    },
    {
        "statement_date": "2018-01-11",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Trump wrongly faults Obama for London embassy move",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlyfalse.png",
            "ruling_slug": "barely-true",
            "ruling": "Mostly False"
        },
        "subject": [
            {
                "subject": "Foreign Policy",
                "subject_slug": "foreign-policy"
            },
            {
                "subject": "Government Efficiency",
                "subject_slug": "government-efficiency"
            }
        ],
        "ruling_link_text": "Move rolled out under G.W. Bush",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2018/jan/12/donald-trump/trump-wrongly-faults-obama-london-embassy-move/",
        "statement_context": "a tweet",
        "ruling_date": "2018-01-12T13:38:43",
        "statement": "<p>Says the Obama administration &quot;sold perhaps the best located and finest embassy in London ... only to build a new one in an off location for 1.2 billion dollars.&quot;</p>\r\n"
    },
    {
        "statement_date": "2018-01-09",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Did Obama say he didn't have the right to issue DACA?",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlyfalse.png",
            "ruling_slug": "barely-true",
            "ruling": "Mostly False"
        },
        "subject": [
            {
                "subject": "Immigration",
                "subject_slug": "immigration"
            }
        ],
        "ruling_link_text": "He kept his options open",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2018/jan/09/donald-trump/obama-hedged-didnt-say-he-lacked-legal-right-daca/",
        "statement_context": "a press conference with congressional leaders",
        "ruling_date": "2018-01-09T18:08:58",
        "statement": "<p>When President Barack Obama &quot;signed the executive order (on DACA, he) actually said he doesn&#39;t have the right to do this.&quot;</p>\r\n\r\n<div>&nbsp;</div>\r\n"
    },
    {
        "statement_date": "2018-01-05",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Is Donald Trump right that the Dow Jones just had its fastest-ever 1,000-point jump?",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-true.png",
            "ruling_slug": "true",
            "ruling": "True"
        },
        "subject": [
            {
                "subject": "Economy",
                "subject_slug": "economy"
            },
            {
                "subject": "Job Accomplishments",
                "subject_slug": "job-accomplishments"
            }
        ],
        "ruling_link_text": "Beats previous record by one trading day",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2018/jan/08/donald-trump/donald-trump-right-dow-jones-had-its-fastest-ever-/",
        "statement_context": "a tweet",
        "ruling_date": "2018-01-08T17:07:30",
        "statement": "<p>The Dow Jones Industrial Average &quot;jumped 1000 points in last 5 weeks, Record fastest 1000 point move in history.&quot;</p>\r\n"
    },
    {
        "statement_date": "2018-01-08",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "How accurate is Donald Trump about black, Hispanic unemployment?",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlytrue.png",
            "ruling_slug": "mostly-true",
            "ruling": "Mostly True"
        },
        "subject": [
            {
                "subject": "Economy",
                "subject_slug": "economy"
            },
            {
                "subject": "Jobs",
                "subject_slug": "jobs"
            }
        ],
        "ruling_link_text": "Numbers are right; criticism of Democratic record isn't",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [
            {
                "last_name": "Obama",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_OBAMA_1.jpg",
                "name_slug": "barack-obama",
                "first_name": "Barack",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2018/jan/08/donald-trump/how-accurate-donald-trumps-about-black-hispa/",
        "statement_context": "a tweet",
        "ruling_date": "2018-01-08T13:25:51",
        "statement": "<p>&quot;African American unemployment is the lowest ever recorded in our country. The Hispanic unemployment rate dropped a full point in the last year and is close to the lowest in recorded history. Dems did nothing for you but get your vote!&quot;</p>\r\n"
    },
    {
        "statement_date": "2018-01-04",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Did Fire and Fury author Michael Wolff have access to the White House?",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-false.png",
            "ruling_slug": "false",
            "ruling": "False"
        },
        "subject": [
            {
                "subject": "Candidate Biography",
                "subject_slug": "candidates-biography"
            },
            {
                "subject": "Transparency",
                "subject_slug": "transparency"
            }
        ],
        "ruling_link_text": "Access denied?",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2018/jan/05/donald-trump/did-author-michael-wolff-have-access-white-house/",
        "statement_context": "a tweet",
        "ruling_date": "2018-01-05T17:11:24",
        "statement": "<p>&quot;I authorized Zero access to White House (actually turned him down many times) for author of phony book! I never spoke to him for book.&quot;</p>\r\n"
    },
    {
        "statement_date": "2018-01-04",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Donald Trump blames Democratic states on lack of data showing voter fraud",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-halftrue.png",
            "ruling_slug": "half-true",
            "ruling": "Half-True"
        },
        "subject": [
            {
                "subject": "Elections",
                "subject_slug": "elections"
            }
        ],
        "ruling_link_text": "More complicated than party politics",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2018/jan/05/donald-trump/trump-blames-democratic-states-providing-voter-d/",
        "statement_context": "a tweet",
        "ruling_date": "2018-01-05T11:55:48",
        "statement": "<p>&quot;Mostly Democrat states refused to hand over data&quot; that could show election fraud.</p>\r\n"
    },
    {
        "statement_date": "2018-01-03",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Donald Trump says there's 'substantial evidence of voter fraud.' There isn't",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-false.png",
            "ruling_slug": "false",
            "ruling": "False"
        },
        "subject": [
            {
                "subject": "Elections",
                "subject_slug": "elections"
            }
        ],
        "ruling_link_text": "Wrong before, wrong now",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2018/jan/04/donald-trump/donald-trump-says-theres-substantial-evidence-vote/",
        "statement_context": "a statement",
        "ruling_date": "2018-01-04T16:24:11",
        "statement": "<p>There is &quot;substantial evidence of voter fraud.&quot;</p>\r\n"
    },
    {
        "statement_date": "2018-01-02",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "White House is misleading by citing only cuts, not hikes, in tax bill",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlyfalse.png",
            "ruling_slug": "barely-true",
            "ruling": "Mostly False"
        },
        "subject": [
            {
                "subject": "Taxes",
                "subject_slug": "taxes"
            }
        ],
        "ruling_link_text": "Ignores $4 trillion in tax hikes",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2018/jan/03/donald-trump/white-house-misleading-citing-only-cuts-not-hikes-/",
        "statement_context": "an email from the White House",
        "ruling_date": "2018-01-03T17:25:06",
        "statement": "<p>The new tax law is&nbsp;&quot;kicking the American economy into high gear with $5.5 trillion in tax cuts.&quot;</p>\r\n"
    },
    {
        "statement_date": "2018-01-03",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Donald Trump wrong about how long GOP held Alabama Senate seat",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-false.png",
            "ruling_slug": "false",
            "ruling": "False"
        },
        "subject": [
            {
                "subject": "Elections",
                "subject_slug": "elections"
            },
            {
                "subject": "History",
                "subject_slug": "history"
            }
        ],
        "ruling_link_text": "It was actually 21 years",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2018/jan/03/donald-trump/donald-trump-wrong-about-length-time-gop-held-alab/",
        "statement_context": "a statement released by the White House",
        "ruling_date": "2018-01-03T17:13:25",
        "statement": "<p>The Senate seat won in a special election by a Democrat had been &quot;held for more than thirty years by Republicans.&quot;</p>\r\n"
    },
    {
        "statement_date": "2017-12-27",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Has Donald Trump signed more bills than anyone? No. (His count ranks last)",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-false.png",
            "ruling_slug": "false",
            "ruling": "False"
        },
        "subject": [
            {
                "subject": "Job Accomplishments",
                "subject_slug": "job-accomplishments"
            }
        ],
        "ruling_link_text": "He ranks last, actually",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2017/dec/29/donald-trump/has-donald-trump-signed-more-bills-anyone-no/",
        "statement_context": "an event in West Palm Beach",
        "ruling_date": "2017-12-29T10:12:44",
        "statement": "<p>&quot;We have signed more legislation than anybody. We broke the record of Harry Truman.&quot;</p>\r\n"
    },
    {
        "statement_date": "2017-12-20",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Trump wrongly says end of mandate is 'essentially' Obamacare repeal",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-false.png",
            "ruling_slug": "false",
            "ruling": "False"
        },
        "subject": [
            {
                "subject": "Health Care",
                "subject_slug": "health-care"
            }
        ],
        "ruling_link_text": "Wrong on both counts",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2017/dec/21/donald-trump/trump-wrongly-says-end-mandate-essentially-obamaca/",
        "statement_context": "a speech",
        "ruling_date": "2017-12-21T11:59:50",
        "statement": "<p>&quot;We essentially repealed Obamacare because we got rid of the individual mandate&nbsp;... and that was a primary source of funding of Obamacare.&quot;</p>\r\n\r\n<div>&nbsp;</div>\r\n"
    },
    {
        "statement_date": "2017-12-15",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Pick them from a bin? Donald Trump mischaracterizes diversity visa lottery",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-pantsonfire.gif",
            "ruling_slug": "pants-fire",
            "ruling": "Pants on Fire!"
        },
        "subject": [
            {
                "subject": "Homeland Security",
                "subject_slug": "homeland-security"
            },
            {
                "subject": "Immigration",
                "subject_slug": "immigration"
            }
        ],
        "ruling_link_text": "That's not how it works",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2017/dec/20/donald-trump/pick-them-bin-donald-trump-mischaracterizes-divers/",
        "statement_context": "a speech",
        "ruling_date": "2017-12-20T15:36:41",
        "statement": "<p>Says of the diversity visa lottery program, &quot;they give us their worst people, they put them in a bin,&quot; and &quot;the worst of the worst&quot; are selected.&nbsp;</p>\r\n"
    },
    {
        "statement_date": "2017-12-08",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Donald Trump wrong that black homeownership rate is at a record high",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-false.png",
            "ruling_slug": "false",
            "ruling": "False"
        },
        "subject": [
            {
                "subject": "Diversity",
                "subject_slug": "diversity"
            },
            {
                "subject": "Housing",
                "subject_slug": "housing"
            }
        ],
        "ruling_link_text": "It's fallen almost yearly since 2004",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2017/dec/11/donald-trump/donald-trump-wrong-black-homeownership-rate-record/",
        "statement_context": "a rally in Pensacola, Fla.",
        "ruling_date": "2017-12-11T13:55:32",
        "statement": "<p>&quot;Black homeownership just hit the highest level it has ever been in the history of our country.&quot;</p>\r\n"
    },
    {
        "statement_date": "2017-12-06",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Donald Trump says job market is getting non-workers working. Is it?",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlytrue.png",
            "ruling_slug": "mostly-true",
            "ruling": "Mostly True"
        },
        "subject": [
            {
                "subject": "Economy",
                "subject_slug": "economy"
            },
            {
                "subject": "Jobs",
                "subject_slug": "jobs"
            }
        ],
        "ruling_link_text": "Targeted statistics say yes",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2017/dec/07/donald-trump/donald-trump-says-job-market-getting-non-workers-w/",
        "statement_context": "a cabinet meeting",
        "ruling_date": "2017-12-07T16:13:49",
        "statement": "<p>&quot;We&rsquo;re &hellip; getting into the pool of the 100 million people that are not working. That pool is now coming back.&quot;</p>\r\n"
    },
    {
        "statement_date": "2017-12-06",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Is Donald Trump correct about the history of the Jerusalem Embassy Act?",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlytrue.png",
            "ruling_slug": "mostly-true",
            "ruling": "Mostly True"
        },
        "subject": [
            {
                "subject": "Foreign Policy",
                "subject_slug": "foreign-policy"
            },
            {
                "subject": "Israel",
                "subject_slug": "israel"
            }
        ],
        "ruling_link_text": "Correct, with one possible caveat",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2017/dec/06/donald-trump/donald-trump-correct-about-history-jerusalem-embas/",
        "statement_context": "remarks at the White House",
        "ruling_date": "2017-12-06T16:40:34",
        "statement": "<p>The Jerusalem Embassy Act &quot;passed Congress by an overwhelming bipartisan majority and was reaffirmed by a unanimous vote of the Senate only six months ago.&quot;</p>\r\n"
    },
    {
        "statement_date": "2017-12-04",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Donald Trump falsely claims Hillary Clinton lied to FBI",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-false.png",
            "ruling_slug": "false",
            "ruling": "False"
        },
        "subject": [
            {
                "subject": "Criminal Justice",
                "subject_slug": "criminal-justice"
            },
            {
                "subject": "Legal Issues",
                "subject_slug": "legal-issues"
            }
        ],
        "ruling_link_text": "Comey said she didn't lie",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2017/dec/05/donald-trump/donald-trump-falsely-claims-hillary-clinton-lied-f/",
        "statement_context": "remarks to reporters",
        "ruling_date": "2017-12-05T09:00:00",
        "statement": "<p>&quot;Hillary Clinton lied many times to the FBI.&quot;</p>\r\n"
    },
    {
        "statement_date": "2017-11-29",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Will the GOP tax bill cost Donald Trump 'a fortune'? No",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-false.png",
            "ruling_slug": "false",
            "ruling": "False"
        },
        "subject": [
            {
                "subject": "Taxes",
                "subject_slug": "taxes"
            }
        ],
        "ruling_link_text": "He stands to gain. A lot",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2017/nov/30/donald-trump/will-gop-tax-bill-cost-donald-trump-fortune-no/",
        "statement_context": "a speech in St. Charles, Mo.",
        "ruling_date": "2017-11-30T17:14:42",
        "statement": "<p>Says the tax bill &quot;is going to cost me a fortune, this thing -- believe me. Believe me, this is not good for me.&quot;</p>\r\n"
    },
    {
        "statement_date": "2017-11-29",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Donald Trump wrong that no tax cuts passed since Reagan",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-pantsonfire.gif",
            "ruling_slug": "pants-fire",
            "ruling": "Pants on Fire!"
        },
        "subject": [
            {
                "subject": "History",
                "subject_slug": "history"
            },
            {
                "subject": "Taxes",
                "subject_slug": "taxes"
            }
        ],
        "ruling_link_text": "There have been nine big ones",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2017/nov/30/donald-trump/donald-trump-wrong-no-tax-cuts-passed-reagan/",
        "statement_context": "a speech in St. Charles, Mo.",
        "ruling_date": "2017-11-30T10:44:39",
        "statement": "<p>&quot;For years, they have not been able to get tax cuts -- many, many years, since Reagan.&quot;</p>\r\n"
    },
    {
        "statement_date": "2017-11-29",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Donald Trump's Pants on Fire 'unsolved mystery' attack on Joe Scarborough",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-pantsonfire.gif",
            "ruling_slug": "pants-fire",
            "ruling": "Pants on Fire!"
        },
        "subject": [
            {
                "subject": "Candidate Biography",
                "subject_slug": "candidates-biography"
            }
        ],
        "ruling_link_text": "A mystery to only conspiracy theorists",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2017/nov/29/donald-trump/donald-trumps-pants-fire-unsolved-mystery-attack-j/",
        "statement_context": "a post on Twitter",
        "ruling_date": "2017-11-29T10:28:44",
        "statement": "<p>Says Joe Scarborough is party to an &quot;unsolved mystery&quot; from his time as a congressman in Florida.</p>\r\n\r\n<div>&nbsp;</div>\r\n"
    },
    {
        "statement_date": "2017-11-26",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Donald Trump wrongly claims Doug Jones wants to ‘raise taxes to the sky’",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlyfalse.png",
            "ruling_slug": "barely-true",
            "ruling": "Mostly False"
        },
        "subject": [
            {
                "subject": "Taxes",
                "subject_slug": "taxes"
            }
        ],
        "ruling_link_text": "A write-off",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2017/nov/28/donald-trump/donald-trump-falsely-claims-doug-jones-wants-raise/",
        "statement_context": "a tweet",
        "ruling_date": "2017-11-28T11:25:05",
        "statement": "<p>Says Alabama Senate candidate Doug Jones &quot;wants to raise taxes.&quot;</p>\r\n"
    },
    {
        "statement_date": "2017-11-20",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "How much does the Trump family have to gain from GOP tax bills?",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-halftrue.png",
            "ruling_slug": "half-true",
            "ruling": "Half-True"
        },
        "subject": [
            {
                "subject": "Taxes",
                "subject_slug": "taxes"
            }
        ],
        "ruling_link_text": "More complicated than he describes",
        "speaker": {
            "last_name": "Doggett",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/doggett.jpg",
            "name_slug": "lloyd-doggett",
            "first_name": "Lloyd ",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [
            {
                "last_name": "Trump",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
                "name_slug": "donald-trump",
                "first_name": "Donald",
                "party": {
                    "party": "Republican",
                    "party_slug": "republican"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2017/nov/27/lloyd-doggett/how-much-does-trump-family-have-gain-gop-tax-bills/",
        "statement_context": "an interview with Sinclair Broadcast Group",
        "ruling_date": "2017-11-27T16:39:44",
        "statement": "<p>Under the Republican tax bill, President Donald Trump &quot;and his family would walk off with more than a billion dollars personally.&quot;</p>\r\n"
    },
    {
        "statement_date": "2017-11-13",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "How unpopular is the Obamacare individual mandate?",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-halftrue.png",
            "ruling_slug": "half-true",
            "ruling": "Half-True"
        },
        "subject": [
            {
                "subject": "Health Care",
                "subject_slug": "health-care"
            },
            {
                "subject": "Taxes",
                "subject_slug": "taxes"
            }
        ],
        "ruling_link_text": "Not loved, but perhaps tolerated",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2017/nov/14/donald-trump/how-unpopular-obamacare-individual-mandate/",
        "statement_context": "a tweet",
        "ruling_date": "2017-11-14T17:54:35",
        "statement": "<p>Says the individual mandate is &quot;highly unpopular.&quot;</p>\r\n\r\n<div>&nbsp;</div>\r\n"
    },
    {
        "statement_date": "2017-11-07",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Donald Trump wrongly repeats that Chicago has strongest gun laws",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-pantsonfire.gif",
            "ruling_slug": "pants-fire",
            "ruling": "Pants on Fire!"
        },
        "subject": [
            {
                "subject": "Guns",
                "subject_slug": "guns"
            }
        ],
        "ruling_link_text": "An outdated talking point",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2017/nov/07/donald-trump/trump-wrongly-repeats-chicago-has-strongest-gun-la/",
        "statement_context": "a press conference in South Korea",
        "ruling_date": "2017-11-07T14:53:36",
        "statement": "<p>Chicago is &quot;the city with the strongest gun laws in our nation.&quot;</p>\r\n\r\n<div>&nbsp;</div>\r\n"
    },
    {
        "statement_date": "2017-10-31",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Donald Trump touts increased coal production",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlytrue.png",
            "ruling_slug": "mostly-true",
            "ruling": "Mostly True"
        },
        "subject": [
            {
                "subject": "Energy",
                "subject_slug": "energy"
            }
        ],
        "ruling_link_text": "Market forces drove up production",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2017/nov/06/donald-trump/trump-pairs-recent-rise-coal-output-ending-war-coa/",
        "statement_context": "a tweet",
        "ruling_date": "2017-11-06T09:00:00",
        "statement": "<p>&quot;Coal production up 7.8% in past year. Down 31.5% last 10 years. #endingwaroncoal.&quot;</p>\r\n"
    },
    {
        "statement_date": "2017-11-01",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Is diversity visa program a 'Schumer beauty,' as Donald Trump says?",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlyfalse.png",
            "ruling_slug": "barely-true",
            "ruling": "Mostly False"
        },
        "subject": [
            {
                "subject": "Immigration",
                "subject_slug": "immigration"
            },
            {
                "subject": "Terrorism",
                "subject_slug": "terrorism"
            }
        ],
        "ruling_link_text": "Republicans blocked his efforts end it",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [
            {
                "last_name": "Schumer",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/mugs/Schumer.JPG",
                "name_slug": "charles-schumer",
                "first_name": "Charles",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2017/nov/01/donald-trump/was-diversity-visa-program-schumer-beauty-donald-t/",
        "statement_context": "a tweet",
        "ruling_date": "2017-11-01T13:27:37",
        "statement": "<p>Says the diversity visa lottery program is &quot;a Chuck Schumer beauty.&quot;</p>\r\n"
    },
    {
        "statement_date": "2017-10-30",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Trump wrongly says Manafort crimes came years before he joined the campaign",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlyfalse.png",
            "ruling_slug": "barely-true",
            "ruling": "Mostly False"
        },
        "subject": [
            {
                "subject": "Crime",
                "subject_slug": "crime"
            },
            {
                "subject": "Elections",
                "subject_slug": "elections"
            }
        ],
        "ruling_link_text": "Alleged wrongdoing continued into 2016, 2017",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2017/oct/30/donald-trump/trump-wrongly-says-manafort-crimes-came-years-he-j/",
        "statement_context": "a tweet",
        "ruling_date": "2017-10-30T15:02:40",
        "statement": "<p>Says Paul Manafort&rsquo;s alleged crimes were &quot;years ago, before Paul Manafort was part of the Trump campaign.&quot;</p>\r\n"
    },
    {
        "statement_date": "2017-10-25",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Donald Trump takes credit for gains against ISIS but there's more to the story",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-halftrue.png",
            "ruling_slug": "half-true",
            "ruling": "Half-True"
        },
        "subject": [
            {
                "subject": "Terrorism",
                "subject_slug": "terrorism"
            }
        ],
        "ruling_link_text": "Heavy lifting and victories began under Obama",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2017/oct/26/donald-trump/trump-takes-full-credit-gains-against-isis/",
        "statement_context": "a news conference",
        "ruling_date": "2017-10-26T18:08:24",
        "statement": "<p>&quot;We have done more in eight months than the previous administration has done in many years&quot; against ISIS.</p>\r\n"
    },
    {
        "statement_date": "2017-10-25",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Donald Trump wrong that his tax plan is biggest cut ever",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-false.png",
            "ruling_slug": "false",
            "ruling": "False"
        },
        "subject": [
            {
                "subject": "Taxes",
                "subject_slug": "taxes"
            }
        ],
        "ruling_link_text": "May be as low as 8th",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2017/oct/26/donald-trump/donald-trump-wrong-his-tax-plan-biggest-cut-ever/",
        "statement_context": "a tweet",
        "ruling_date": "2017-10-26T17:02:57",
        "statement": "<p>Says the GOP plan he supports is&nbsp;&quot;the biggest tax cut in U.S. history.&quot;</p>\r\n"
    },
    {
        "statement_date": "2017-10-22",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "More to the story on poll Donald Trump tweeted about media trust",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-halftrue.png",
            "ruling_slug": "half-true",
            "ruling": "Half-True"
        },
        "subject": [
            {
                "subject": "Polls and Public Opinion",
                "subject_slug": "polls"
            }
        ],
        "ruling_link_text": "Stat is soft around the edges",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2017/oct/24/donald-trump/trump-says-46-people-think-media-make-news-about-h/",
        "statement_context": "a tweet",
        "ruling_date": "2017-10-24T17:51:36",
        "statement": "<p>Says &quot;46 percent of people believe major national news organizations fabricate stories about me.&quot;</p>\r\n"
    },
    {
        "statement_date": "2017-10-18",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Trump says insurers made fortune off Obamacare. They didn't.",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-false.png",
            "ruling_slug": "false",
            "ruling": "False"
        },
        "subject": [
            {
                "subject": "Health Care",
                "subject_slug": "health-care"
            }
        ],
        "ruling_link_text": "Except for the billions lost on the exchanges",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2017/oct/23/donald-trump/trump-says-insurers-made-fortune-obamacare-they-di/",
        "statement_context": "a tweet",
        "ruling_date": "2017-10-23T17:13:26",
        "statement": "<p>Insurance companies &quot;have made a fortune with Obamacare.&quot;</p>\r\n"
    },
    {
        "statement_date": "2017-10-17",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Once again, Trump overstates U.S. tax ranking",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-false.png",
            "ruling_slug": "false",
            "ruling": "False"
        },
        "subject": [
            {
                "subject": "Taxes",
                "subject_slug": "taxes"
            }
        ],
        "ruling_link_text": "A mental block?",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2017/oct/18/donald-trump/once-again-trump-overstates-us-tax-ranking/",
        "statement_context": "an interview with E.W. Scripps television",
        "ruling_date": "2017-10-18T16:42:50",
        "statement": "<p>&quot;We&#39;re the highest developed nation taxed in the world.&quot;</p>\r\n"
    },
    {
        "statement_date": "2017-10-16",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Trump mislabels Obamacare subsidy as gift to insurers",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlyfalse.png",
            "ruling_slug": "barely-true",
            "ruling": "Mostly False"
        },
        "subject": [
            {
                "subject": "Health Care",
                "subject_slug": "health-care"
            }
        ],
        "ruling_link_text": "Doctors, not insurers, get the cash",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2017/oct/18/donald-trump/trump-mislabels-obamacare-subsidy-gift-insurers/",
        "statement_context": "a White House cabinet meeting",
        "ruling_date": "2017-10-18T15:05:05",
        "statement": "<p>&quot;The cost-sharing reductions (were) a gift (that) they gave the insurance companies.&quot;</p>\r\n\r\n<div>&nbsp;</div>\r\n"
    },
    {
        "statement_date": "2017-10-10",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Is the NFL getting 'massive tax breaks,' as Donald Trump said?",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlytrue.png",
            "ruling_slug": "mostly-true",
            "ruling": "Mostly True"
        },
        "subject": [
            {
                "subject": "Baseball",
                "subject_slug": "baseball"
            },
            {
                "subject": "Federal Budget",
                "subject_slug": "federal-budget"
            },
            {
                "subject": "Sports",
                "subject_slug": "sports"
            },
            {
                "subject": "Taxes",
                "subject_slug": "taxes"
            }
        ],
        "ruling_link_text": "The league isn't, but their stadiums are",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [
            {
                "last_name": "NFL Players Association",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NFLPA.jpg",
                "name_slug": "nfl-players-association",
                "first_name": "",
                "party": {
                    "party": "None",
                    "party_slug": "none"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2017/oct/12/donald-trump/nfl-getting-massive-tax-breaks-donald-trump-said/",
        "statement_context": "a tweet",
        "ruling_date": "2017-10-12T18:10:30",
        "statement": "<p>The NFL is &quot;getting massive tax breaks.&quot;</p>\r\n"
    },
    {
        "statement_date": "2017-10-11",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Donald Trump's misleading linkage between stock gains, debt reduction",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-false.png",
            "ruling_slug": "false",
            "ruling": "False"
        },
        "subject": [
            {
                "subject": "Debt",
                "subject_slug": "debt"
            }
        ],
        "ruling_link_text": "Little link between the two",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2017/oct/12/donald-trump/donald-trumps-misleading-linkage-between-stock-gai/",
        "statement_context": "an interview with Fox News' Sean Hannity",
        "ruling_date": "2017-10-12T16:50:27",
        "statement": "<p>The Obama administration &quot;borrowed more than $10 trillion, right? And yet, we picked up $5.2 trillion just in the stock market. ... Maybe in a sense we&rsquo;re reducing debt.&quot;</p>\r\n"
    },
    {
        "statement_date": "2017-10-08",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Is Sen. Bob Corker responsible for the Iran deal, as Donald Trump claims?",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-false.png",
            "ruling_slug": "false",
            "ruling": "False"
        },
        "subject": [
            {
                "subject": "Foreign Policy",
                "subject_slug": "foreign-policy"
            },
            {
                "subject": "Homeland Security",
                "subject_slug": "homeland-security"
            }
        ],
        "ruling_link_text": "Way off the mark",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2017/oct/12/donald-trump/sen-bob-corker-responsible-iran-deal-donald-trump-/",
        "statement_context": "a tweet",
        "ruling_date": "2017-10-12T14:19:25",
        "statement": "<p>&quot;Bob Corker gave us the Iran Deal.&quot;</p>\r\n"
    },
    {
        "statement_date": "2017-10-08",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Donald Trump omits facts in claim about loopholes, unaccompanied minors",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlyfalse.png",
            "ruling_slug": "barely-true",
            "ruling": "Mostly False"
        },
        "subject": [
            {
                "subject": "Homeland Security",
                "subject_slug": "homeland-security"
            },
            {
                "subject": "Immigration",
                "subject_slug": "immigration"
            }
        ],
        "ruling_link_text": "No 'loopholes,' thousands deported",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2017/oct/11/donald-trump/donald-trump-omits-facts-claim-loopholes-minors-un/",
        "statement_context": "a document",
        "ruling_date": "2017-10-11T11:38:21",
        "statement": "<p>&quot;Loopholes in current law prevent &lsquo;Unaccompanied Alien Children&rsquo; (UACs) that arrive in the country illegally from being removed.&quot;</p>\r\n"
    },
    {
        "statement_date": "2017-09-30",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Donald Trump says Luther Strange gained many points after endorsement, but evidence is weak",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlyfalse.png",
            "ruling_slug": "barely-true",
            "ruling": "Mostly False"
        },
        "subject": [
            {
                "subject": "Polls and Public Opinion",
                "subject_slug": "polls"
            }
        ],
        "ruling_link_text": "Evidence is weak",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [
            {
                "last_name": "Strange",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Strange.jpg",
                "name_slug": "luther-strange",
                "first_name": "Luther",
                "party": {
                    "party": "Republican",
                    "party_slug": "republican"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2017/oct/02/donald-trump/donald-trump-says-luther-strange-gained-many-point/",
        "statement_context": "a tweet",
        "ruling_date": "2017-10-02T17:23:04",
        "statement": "<p>In the Alabama Senate runoff, &quot;the candidate I endorsed (Luther Strange) went up MANY points after endorsement!&quot;</p>\r\n"
    },
    {
        "statement_date": "2017-09-27",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Donald Trump's dubious claim that his tax plan won't benefit him",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-false.png",
            "ruling_slug": "false",
            "ruling": "False"
        },
        "subject": [
            {
                "subject": "Taxes",
                "subject_slug": "taxes"
            }
        ],
        "ruling_link_text": "Let's count the ways",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2017/sep/28/donald-trump/donald-trumps-dubious-claim-his-tax-plan-wont-bene/",
        "statement_context": "an interview with reporters",
        "ruling_date": "2017-09-28T14:39:07",
        "statement": "<p>Says &quot;No, I don&#39;t benefit, I don&#39;t benefit&quot; from his tax proposal.</p>\r\n"
    },
    {
        "statement_date": "2017-09-27",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Donald Trump's Pants on Fire claim about the estate tax, small businesses and farms",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-pantsonfire.gif",
            "ruling_slug": "pants-fire",
            "ruling": "Pants on Fire!"
        },
        "subject": [
            {
                "subject": "Agriculture",
                "subject_slug": "agriculture"
            },
            {
                "subject": "Small Business",
                "subject_slug": "small-business"
            },
            {
                "subject": "Taxes",
                "subject_slug": "taxes"
            }
        ],
        "ruling_link_text": "More like 80 this year",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2017/sep/28/donald-trump/donald-trumps-pants-fire-claim-about-estate-tax-sm/",
        "statement_context": "a speech in Indianapolis",
        "ruling_date": "2017-09-28T11:54:21",
        "statement": "<p>Ending the estate tax would &quot;protect millions of small businesses and the American farmer.&quot;</p>\r\n"
    },
    {
        "statement_date": "2017-09-27",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Donald Trump wrongly blames ‘hospitalized’ senator for GOP health care collapse",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-false.png",
            "ruling_slug": "false",
            "ruling": "False"
        },
        "subject": [
            {
                "subject": "Congress",
                "subject_slug": "congress"
            },
            {
                "subject": "Health Care",
                "subject_slug": "health-care"
            }
        ],
        "ruling_link_text": "Blame shifting",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2017/sep/28/donald-trump/donald-trump-wrongly-blames-hospitalized-senator-g/",
        "statement_context": "an interview",
        "ruling_date": "2017-09-28T11:51:21",
        "statement": "<p>&quot;We have one senator who&rsquo;s a &lsquo;yes&rsquo; vote&nbsp;...&nbsp;but he&rsquo;s in the hospital. And he&rsquo;s a &lsquo;yes&rsquo; vote. So we can&rsquo;t do it by Friday. So we have the votes&quot; to pass a health care bill.&nbsp;</p>\r\n"
    },
    {
        "statement_date": "2017-09-22",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Donald Trump largely accurate about drugs catapulted across the U.S.-Mexico border",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlytrue.png",
            "ruling_slug": "mostly-true",
            "ruling": "Mostly True"
        },
        "subject": [
            {
                "subject": "Homeland Security",
                "subject_slug": "homeland-security"
            }
        ],
        "ruling_link_text": "Catapulting for years",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2017/sep/27/donald-trump/trump-largely-accurate-claim-about-drugs-catapulte/",
        "statement_context": "a rally",
        "ruling_date": "2017-09-27T11:47:33",
        "statement": "<p>&quot;So now they take drugs, literally, and they throw it, a hundred pounds of drugs. They throw it over the wall, they have catapults, but they throw it over the wall, and it lands and it hits somebody on the head.&quot;</p>\r\n"
    },
    {
        "statement_date": "2017-09-24",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Trump's Mostly False claim that NFL ratings are 'way down'",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlyfalse.png",
            "ruling_slug": "barely-true",
            "ruling": "Mostly False"
        },
        "subject": [
            {
                "subject": "Sports",
                "subject_slug": "sports"
            }
        ],
        "ruling_link_text": "WAY down? No",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2017/sep/24/donald-trump/trumps-mostly-false-claim-nfl-ratings-are-way-down/",
        "statement_context": "a tweet",
        "ruling_date": "2017-09-24T17:56:00",
        "statement": "<p>&quot;NFL attendance and ratings are WAY DOWN. Boring games yes, but many stay away because they love our country.&quot;</p>\r\n"
    },
    {
        "statement_date": "2017-09-21",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Trump's misleading claim on pre-existing protections in Graham-Cassidy",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlyfalse.png",
            "ruling_slug": "barely-true",
            "ruling": "Mostly False"
        },
        "subject": [
            {
                "subject": "Health Care",
                "subject_slug": "health-care"
            }
        ],
        "ruling_link_text": "Vague promises",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2017/sep/21/donald-trump/trumps-misleading-claim-pre-existing-protections/",
        "statement_context": "a tweet",
        "ruling_date": "2017-09-21T17:23:34",
        "statement": "<p>The Graham-Cassidy health care bill does &quot;include coverage of pre-existing conditions.&quot;</p>\r\n"
    },
    {
        "statement_date": "2017-09-19",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "How strong has job growth been on Donald Trump's watch?",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-halftrue.png",
            "ruling_slug": "half-true",
            "ruling": "Half-True"
        },
        "subject": [
            {
                "subject": "Economy",
                "subject_slug": "economy"
            },
            {
                "subject": "Jobs",
                "subject_slug": "jobs"
            }
        ],
        "ruling_link_text": "Overall growth similar to Obama era, but \"reshoring\" stronger",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2017/sep/20/donald-trump/how-strong-job-growth-been-trumps-watch/",
        "statement_context": "a speech to the United Nations General Assembly",
        "ruling_date": "2017-09-20T10:54:42",
        "statement": "<p>&quot;Companies are moving back, creating job growth the likes of which our country has not seen in a very long time.&quot;</p>\r\n"
    },
    {
        "statement_date": "2017-09-17",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Are long gas lines forming in North Korea, as Donald Trump says?",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-halftrue.png",
            "ruling_slug": "half-true",
            "ruling": "Half-True"
        },
        "subject": [
            {
                "subject": "Energy",
                "subject_slug": "energy"
            },
            {
                "subject": "Foreign Policy",
                "subject_slug": "foreign-policy"
            }
        ],
        "ruling_link_text": "Not like U.S. in the 1970s",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2017/sep/19/donald-trump/are-gas-lines-forming-north-korea/",
        "statement_context": "a tweet",
        "ruling_date": "2017-09-19T10:00:00",
        "statement": "<p>&quot;Long gas lines forming in North Korea.&quot;</p>\r\n"
    },
    {
        "statement_date": "2017-09-14",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "President Donald Trump's Half True claim that support for DACA is as high as '92 percent'",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-halftrue.png",
            "ruling_slug": "half-true",
            "ruling": "Half-True"
        },
        "subject": [
            {
                "subject": "Homeland Security",
                "subject_slug": "homeland-security"
            },
            {
                "subject": "Immigration",
                "subject_slug": "immigration"
            }
        ],
        "ruling_link_text": "Majority support, but not 92 percent",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2017/sep/18/donald-trump/president-donald-trumps-half-true-claim-support-da/",
        "statement_context": "remarks to reporters",
        "ruling_date": "2017-09-18T16:37:28",
        "statement": "<p>Says &quot;92 percent of the people agree on DACA.&quot;</p>\r\n"
    },
    {
        "statement_date": "2017-08-28",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Donald Trump repeats false claim about illegal border crossings",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-false.png",
            "ruling_slug": "false",
            "ruling": "False"
        },
        "subject": [
            {
                "subject": "Immigration",
                "subject_slug": "immigration"
            }
        ],
        "ruling_link_text": "Not backed by Border Patrol data ",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2017/aug/31/donald-trump/donald-trump-repeats-false-claim-about-border-stop/",
        "statement_context": "a press conference",
        "ruling_date": "2017-08-31T11:03:13",
        "statement": "<p>&quot;We stopped traffic coming through -- 78 percent.&quot;</p>\r\n"
    },
    {
        "statement_date": "2017-08-22",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Donald Trump wrongly says U.S. is a net energy exporter",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-false.png",
            "ruling_slug": "false",
            "ruling": "False"
        },
        "subject": [
            {
                "subject": "Energy",
                "subject_slug": "energy"
            },
            {
                "subject": "Trade",
                "subject_slug": "trade"
            }
        ],
        "ruling_link_text": "Many ways to read claim; always wrong",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2017/aug/23/donald-trump/donald-trump-wrongly-says-us-net-energy-exporte/",
        "statement_context": "a rally in Phoenix",
        "ruling_date": "2017-08-23T17:15:52",
        "statement": "<p>&quot;We have become an energy exporter for the first time ever just recently.&quot;</p>\r\n"
    },
    {
        "statement_date": "2017-08-22",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Trump's False claim that there weren't too many people protesting his Phoenix rally",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-false.png",
            "ruling_slug": "false",
            "ruling": "False"
        },
        "subject": [
            {
                "subject": "Public Safety",
                "subject_slug": "public-safety"
            }
        ],
        "ruling_link_text": "Thousands of people protesting",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2017/aug/23/donald-trump/trumps-false-claim-there-werent-too-many-peop/",
        "statement_context": "a rally",
        "ruling_date": "2017-08-23T15:31:47",
        "statement": "<p>&quot;There aren&#39;t too many people outside protesting&quot; his speech at the Phoenix Convention Center.</p>\r\n"
    },
    {
        "statement_date": "2017-08-15",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Donald Trump wrong that Charlottesville counter-protesters didn't have a permit",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-pantsonfire.gif",
            "ruling_slug": "pants-fire",
            "ruling": "Pants on Fire!"
        },
        "subject": [
            {
                "subject": "Civil Rights",
                "subject_slug": "civil-rights"
            },
            {
                "subject": "Diversity",
                "subject_slug": "diversity"
            }
        ],
        "ruling_link_text": "Permit was signed, sealed, delivered",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2017/aug/17/donald-trump/donald-trump-wrong-charlottesville-counter-protest/",
        "statement_context": "a question-and-answer session with reporters",
        "ruling_date": "2017-08-17T17:30:12",
        "statement": "<p>White nationalist protesters in Charlottesville &quot;had a permit. The other group didn&rsquo;t have a permit.&quot;</p>\r\n"
    },
    {
        "statement_date": "2017-08-17",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Donald Trump retells Pants on Fire claim about Gen. Pershing ending terrorism for 35 years",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-pantsonfire.gif",
            "ruling_slug": "pants-fire",
            "ruling": "Pants on Fire!"
        },
        "subject": [
            {
                "subject": "History",
                "subject_slug": "history"
            },
            {
                "subject": "Terrorism",
                "subject_slug": "terrorism"
            }
        ],
        "ruling_link_text": "Historians: 'Nonsense'",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2017/aug/17/donald-trump/donald-trump-retells-pants-fire-claim-about-gen-pe/",
        "statement_context": "a tweet",
        "ruling_date": "2017-08-17T15:36:01",
        "statement": "<p>&quot;Study what General Pershing of the United States did to terrorists when caught. There was no more Radical Islamic Terror for 35 years!&quot;</p>\r\n"
    },
    {
        "statement_date": "2017-08-15",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Donald Trump said wages 'haven’t gone up for a long time,' but that's wrong",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-false.png",
            "ruling_slug": "false",
            "ruling": "False"
        },
        "subject": [
            {
                "subject": "Economy",
                "subject_slug": "economy"
            },
            {
                "subject": "Jobs",
                "subject_slug": "jobs"
            },
            {
                "subject": "Workers",
                "subject_slug": "workers"
            }
        ],
        "ruling_link_text": "They've been rising for at least 3 years",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2017/aug/17/donald-trump/donald-trump-says-wages-havent-gone-long-time-s-wr/",
        "statement_context": "a question-and-answer session with reporters",
        "ruling_date": "2017-08-17T11:58:04",
        "statement": "<p>Wages &quot;haven&rsquo;t gone up for a long time.&quot;</p>\r\n"
    },
    {
        "statement_date": "2017-08-09",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Fact-checking Donald Trump's misleading tweet about U.S. nuclear arsenal",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-false.png",
            "ruling_slug": "false",
            "ruling": "False"
        },
        "subject": [
            {
                "subject": "Military",
                "subject_slug": "military"
            },
            {
                "subject": "Nuclear",
                "subject_slug": "nuclear"
            }
        ],
        "ruling_link_text": "Modernization will take decades",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2017/aug/09/donald-trump/under-donald-trump-us-nuclear-arsenal-far-stronger/",
        "statement_context": "a tweet",
        "ruling_date": "2017-08-09T16:02:43",
        "statement": "<p>&quot;My first order as president was to renovate and modernize our nuclear arsenal. It is now far stronger and more powerful than ever before.&quot;</p>\r\n"
    },
    {
        "statement_date": "2017-08-07",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Are renovations keeping Trump out of the White House?",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-true.png",
            "ruling_slug": "true",
            "ruling": "True"
        },
        "subject": [
            {
                "subject": "Ethics",
                "subject_slug": "ethics"
            },
            {
                "subject": "Government Efficiency",
                "subject_slug": "government-efficiency"
            },
            {
                "subject": "History",
                "subject_slug": "history"
            },
            {
                "subject": "Housing",
                "subject_slug": "housing"
            },
            {
                "subject": "Recreation",
                "subject_slug": "recreation"
            }
        ],
        "ruling_link_text": "They were proposed in 2014",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2017/aug/08/donald-trump/renovations-Trump-out-White-House/",
        "statement_context": "a tweet",
        "ruling_date": "2017-08-08T16:51:31",
        "statement": "<p>Says his time away from Washington coincides with a &quot;long planned renovation&quot; for the White House.</p>\r\n"
    },
    {
        "statement_date": "2017-08-05",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Trump claims new U.N. sanctions cost North Korea over $1 billion",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlytrue.png",
            "ruling_slug": "mostly-true",
            "ruling": "Mostly True"
        },
        "subject": [
            {
                "subject": "Homeland Security",
                "subject_slug": "homeland-security"
            }
        ],
        "ruling_link_text": "True impact depends on sanctions enforcement",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2017/aug/06/donald-trump/trump-claims-un-sanctions-cost-north-korea-over-1-/",
        "statement_context": "a tweet",
        "ruling_date": "2017-08-06T17:26:29",
        "statement": "<p>&quot;United Nations Resolution is the single largest economic sanctions package ever on North Korea. Over one billion dollars in cost to N.K.&quot;</p>\r\n"
    },
    {
        "statement_date": "2017-07-25",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Are there over $4 trillion of untaxed corporate earnings offshore, as Donald Trump said?",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-false.png",
            "ruling_slug": "false",
            "ruling": "False"
        },
        "subject": [
            {
                "subject": "Corporations",
                "subject_slug": "corporations"
            },
            {
                "subject": "Taxes",
                "subject_slug": "taxes"
            }
        ],
        "ruling_link_text": "Off by trillions",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2017/aug/03/donald-trump/are-there-over-4-trillion-untaxed-corporate-earnin/",
        "statement_context": "an interview",
        "ruling_date": "2017-08-03T17:08:31",
        "statement": "<p>Untaxed corporate earnings used to be &quot;$2.5 trillion &hellip; I guess it&rsquo;s $5 trillion now. Whatever it is, it&rsquo;s a lot more. So we have anywhere from 4 (trillion) to 5 or even more trillions of dollars sitting offshore.&quot;</p>\r\n"
    },
    {
        "statement_date": "2017-07-28",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "False: Trump's claim about illegal immigration under past administrations",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-false.png",
            "ruling_slug": "false",
            "ruling": "False"
        },
        "subject": [
            {
                "subject": "Homeland Security",
                "subject_slug": "homeland-security"
            },
            {
                "subject": "Immigration",
                "subject_slug": "immigration"
            }
        ],
        "ruling_link_text": "Apprehensions have gone down before",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2017/aug/03/donald-trump/false-trumps-claim-about-illegal-immigration-under/",
        "statement_context": "a speech",
        "ruling_date": "2017-08-03T10:00:00",
        "statement": "<p>&quot;The border is down 78 percent. Under past administrations, the border didn&rsquo;t go down -- it went up.&quot;</p>\r\n"
    },
    {
        "statement_date": "2017-08-01",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Have corporations 'never made as much money' as now, as Donald Trump tweeted?",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-halftrue.png",
            "ruling_slug": "half-true",
            "ruling": "Half-True"
        },
        "subject": [
            {
                "subject": "Economy",
                "subject_slug": "economy"
            }
        ],
        "ruling_link_text": "Not as a percentage of GDP",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2017/aug/01/donald-trump/have-corporations-never-made-much-money-now-donald/",
        "statement_context": "a tweet",
        "ruling_date": "2017-08-01T17:40:59",
        "statement": "<p>&quot;Corporations have NEVER made as much money as they are making now.&quot;</p>\r\n"
    },
    {
        "statement_date": "2017-07-31",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Donald Trump says 'business spirit' is highest it's ever been, but proof is lacking",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlyfalse.png",
            "ruling_slug": "barely-true",
            "ruling": "Mostly False"
        },
        "subject": [
            {
                "subject": "Economy",
                "subject_slug": "economy"
            }
        ],
        "ruling_link_text": "For starters, there's no poll of 'spirit'",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2017/jul/31/donald-trump/donald-trump-says-business-spirit-highest-its-ever/",
        "statement_context": "remarks in the Oval Office",
        "ruling_date": "2017-07-31T17:38:08",
        "statement": "<p>&quot;Business spirit is the highest it&#39;s ever been, according to polls.&quot;</p>\r\n"
    },
    {
        "statement_date": "2017-07-25",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "In Youngstown, Trump incorrectly says he has achieved historic increase in defense spending",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-false.png",
            "ruling_slug": "false",
            "ruling": "False"
        },
        "subject": [
            {
                "subject": "Economy",
                "subject_slug": "economy"
            },
            {
                "subject": "Military",
                "subject_slug": "military"
            }
        ],
        "ruling_link_text": "Not historic or achieved",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2017/jul/27/donald-trump/its-false-trump-achieved-historic-increase-defense/",
        "statement_context": "a speech",
        "ruling_date": "2017-07-27T08:00:00",
        "statement": "<p>&quot;We&#39;ve achieved a historic increase in defense spending to get our troops the support they so richly deserve.&quot;</p>\r\n"
    },
    {
        "statement_date": "2017-07-24",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Is Amazon a ‘no-tax monopoly,’ as Donald Trump said?",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-pantsonfire.gif",
            "ruling_slug": "pants-fire",
            "ruling": "Pants on Fire!"
        },
        "subject": [
            {
                "subject": "Corporations",
                "subject_slug": "corporations"
            },
            {
                "subject": "Taxes",
                "subject_slug": "taxes"
            }
        ],
        "ruling_link_text": "Wrong on both counts",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2017/jul/26/donald-trump/amazon-no-tax-monopoly-donald-trump-said/",
        "statement_context": "Twitter",
        "ruling_date": "2017-07-26T14:26:34",
        "statement": "<p>Amazon has a &quot;no-tax monopoly.&quot;</p>\r\n"
    },
    {
        "statement_date": "2017-07-24",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Is Donald Trump right that U.S. just 'had the best jobs report in 16 years'?",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlytrue.png",
            "ruling_slug": "mostly-true",
            "ruling": "Mostly True"
        },
        "subject": [
            {
                "subject": "Economy",
                "subject_slug": "economy"
            },
            {
                "subject": "Jobs",
                "subject_slug": "jobs"
            }
        ],
        "ruling_link_text": "Unemployment numbers are real",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2017/jul/25/donald-trump/donald-trump-right-us-just-had-best-jobs-report-16/",
        "statement_context": "a speech at the Boy Scout Jamboree",
        "ruling_date": "2017-07-25T15:50:09",
        "statement": "<p>&quot;We had the best jobs report in 16 years.&quot;</p>\r\n"
    },
    {
        "statement_date": "2017-07-25",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "In tweet, Donald Trump revives charge of improper ties between Hillary Clinton, acting FBI chief",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlyfalse.png",
            "ruling_slug": "barely-true",
            "ruling": "Mostly False"
        },
        "subject": [
            {
                "subject": "Campaign Finance",
                "subject_slug": "campaign-finance"
            },
            {
                "subject": "Elections",
                "subject_slug": "elections"
            },
            {
                "subject": "Legal Issues",
                "subject_slug": "legal-issues"
            }
        ],
        "ruling_link_text": "Old charge distorts the facts",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2017/jul/25/donald-trump/tweet-donald-trump-revives-charge-improper-ties-be/",
        "statement_context": "a tweet",
        "ruling_date": "2017-07-25T12:15:18",
        "statement": "<p>&quot;The person in charge of the Hillary investigation, Andrew McCabe, got $700,000 from (Hillary Clinton) for wife!&quot;</p>\r\n"
    },
    {
        "statement_date": "2017-07-19",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Trump: In Watergate, FBI reported to DOJ as a courtesy",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-false.png",
            "ruling_slug": "false",
            "ruling": "False"
        },
        "subject": [
            {
                "subject": "Legal Issues",
                "subject_slug": "legal-issues"
            }
        ],
        "ruling_link_text": "Ignores history",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2017/jul/21/donald-trump/trump-watergate-fbi-reported-doj-courtesy/",
        "statement_context": "an interview with the New York Times",
        "ruling_date": "2017-07-21T15:41:51",
        "statement": "<p>During the Nixon Watergate investigation, &quot;out of courtesy, the FBI started reporting to the Department of Justice. But there was nothing official.&quot;</p>\r\n\r\n<div>&nbsp;</div>\r\n"
    },
    {
        "statement_date": "2017-07-12",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Trump claims he got rid of the Johnson Amendment. Is that true?",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlyfalse.png",
            "ruling_slug": "barely-true",
            "ruling": "Mostly False"
        },
        "subject": [
            {
                "subject": "Religion",
                "subject_slug": "religion"
            }
        ],
        "ruling_link_text": "Ordered lax enforcement, law still exists",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2017/jul/18/donald-trump/trump-claims-he-got-rid-johnson-amendment-true/",
        "statement_context": "a CBN interview",
        "ruling_date": "2017-07-18T11:00:00",
        "statement": "<p>&quot;I&#39;ve gotten rid of the Johnson Amendment &hellip; I signed an executive order so that now ... ministers and and preachers and rabbis and whoever it may be, they can speak. You know, you couldn&rsquo;t speak politically before, now you can.&quot;</p>\r\n\r\n<p>&nbsp;</p>\r\n"
    },
    {
        "statement_date": "2017-07-16",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Trump’s False claim that his presidential approval rating is ‘not bad’",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-false.png",
            "ruling_slug": "false",
            "ruling": "False"
        },
        "subject": [
            {
                "subject": "Polls and Public Opinion",
                "subject_slug": "polls"
            }
        ],
        "ruling_link_text": "Historic low",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2017/jul/17/donald-trump/trumps-false-claim-his-presidential-approval-ratin/",
        "statement_context": "a tweet",
        "ruling_date": "2017-07-17T15:10:00",
        "statement": "<p>Says his job approval poll numbers are &quot;not bad&quot; relative to other presidents at this point in his presidency.</p>\r\n"
    },
    {
        "statement_date": "2017-07-07",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Did John Podesta deny CIA and FBI access to DNC server, as Donald Trump claims?",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-false.png",
            "ruling_slug": "false",
            "ruling": "False"
        },
        "subject": [
            {
                "subject": "Homeland Security",
                "subject_slug": "homeland-security"
            }
        ],
        "ruling_link_text": "Podesta didn't work for the DNC",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2017/jul/11/donald-trump/did-john-podesta-deny-cia-and-fbi-access-dnc-serve/",
        "statement_context": "a tweet",
        "ruling_date": "2017-07-11T11:12:49",
        "statement": "<p>Says John Podesta &quot;refused to give the DNC server to the FBI and the CIA. Disgraceful!&quot;</p>\r\n"
    },
    {
        "statement_date": "2017-07-06",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Donald Trump says Barack Obama 'did nothing' about Russia prior to Election Day",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlyfalse.png",
            "ruling_slug": "barely-true",
            "ruling": "Mostly False"
        },
        "subject": [
            {
                "subject": "Foreign Policy",
                "subject_slug": "foreign-policy"
            },
            {
                "subject": "Homeland Security",
                "subject_slug": "homeland-security"
            }
        ],
        "ruling_link_text": "Minimal, but not 'nothing'",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2017/jul/10/donald-trump/donald-trump-says-barack-obama-did-nothing-about-r/",
        "statement_context": "a press conference in Poland",
        "ruling_date": "2017-07-10T10:26:48",
        "statement": "<p>Says Barack Obama found out about Russia &quot;in August. Now, the election was in November. That&#39;s a lot of time. He did nothing about it.&quot;</p>\r\n"
    },
    {
        "statement_date": "2017-07-04",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Is Donald Trump right that gas prices are now lowest in over 10 years?",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlyfalse.png",
            "ruling_slug": "barely-true",
            "ruling": "Mostly False"
        },
        "subject": [
            {
                "subject": "Energy",
                "subject_slug": "energy"
            }
        ],
        "ruling_link_text": "Except for 85 other times",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2017/jul/06/donald-trump/donald-trump-right-gas-prices-now-lowest-over-10-y/",
        "statement_context": "a tweet",
        "ruling_date": "2017-07-06T10:00:00",
        "statement": "<p>&quot;Gas prices are the lowest in the U.S. in over ten years!&quot;</p>\r\n"
    },
    {
        "statement_date": "2017-06-27",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Trump’s Pants on Fire claim that CNN ratings are ‘way down’",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-pantsonfire.gif",
            "ruling_slug": "pants-fire",
            "ruling": "Pants on Fire!"
        },
        "subject": [
            {
                "subject": "Polls and Public Opinion",
                "subject_slug": "polls"
            }
        ],
        "ruling_link_text": "CNN hits back",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2017/jul/03/donald-trump/trumps-pants-fire-claim-cnn-ratings-are-way-down/",
        "statement_context": "a tweet",
        "ruling_date": "2017-07-03T13:09:34",
        "statement": "<p>CNN&rsquo;s ratings are &quot;way down.&quot;</p>\r\n"
    },
    {
        "statement_date": "2017-06-28",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Trump falsely claims his administration has deported half of MS-13 gang members",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-false.png",
            "ruling_slug": "false",
            "ruling": "False"
        },
        "subject": [
            {
                "subject": "Crime",
                "subject_slug": "crime"
            },
            {
                "subject": "Homeland Security",
                "subject_slug": "homeland-security"
            },
            {
                "subject": "Immigration",
                "subject_slug": "immigration"
            }
        ],
        "ruling_link_text": "Not exactly",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2017/jun/30/donald-trump/trump-falsely-claims-his-administration-has-deport/",
        "statement_context": "an immigration roundtable discussion",
        "ruling_date": "2017-06-30T14:40:15",
        "statement": "<p>&quot;We&#39;re pretty much at the 50 percent mark&quot; on deportations of MS-13 gang members.</p>\r\n"
    },
    {
        "statement_date": "2017-06-26",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "White House tweets misleading criticism of CBO analysis",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-halftrue.png",
            "ruling_slug": "half-true",
            "ruling": "Half-True"
        },
        "subject": [
            {
                "subject": "Corrections and Updates",
                "subject_slug": "corrections-and-updates"
            },
            {
                "subject": "Health Care",
                "subject_slug": "health-care"
            }
        ],
        "ruling_link_text": "Leaves out important context",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2017/jun/27/donald-trump/white-house-criticism-cbo-analysis-misleading/",
        "statement_context": "in a tweet",
        "ruling_date": "2017-06-27T17:27:01",
        "statement": "<p>&quot;When Obamacare was signed into law, CBO estimated that 23 million people would be covered in Obamacare&rsquo;s exchanges in 2017. They were off by more than 100 percent. Only 10.3 million people are covered by Obamacare.&quot;</p>\r\n"
    }
];
trump=trump.filter(function(item){return speakerCheck(item, "donald-trump")});

var pence=[
    {
        "statement": "<p>Says Hillary Clinton &quot;wants to increase Syrian refugees to this country by 550 percent.&quot;</p>\r\n",
        "statement_url": "/truth-o-meter/statements/2016/sep/04/mike-pence/mike-pence-cites-clinton-support-more-syrian-refug/",
        "target": [
            {
                "first_name": "Hillary",
                "last_name": "Clinton",
                "name_slug": "hillary-clinton",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            }
        ],
        "statement_context": "an interview on \"Meet the Press\"",
        "statement_date": "2016-09-04",
        "speaker": {
            "first_name": "Mike",
            "last_name": "Pence",
            "name_slug": "mike-pence",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/AP_VASH107_CAMPAIGN_2016_PE.jpg",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "subject": [
            {
                "subject_slug": "foreign-policy",
                "subject": "Foreign Policy"
            },
            {
                "subject_slug": "human-rights",
                "subject": "Human Rights"
            },
            {
                "subject_slug": "immigration",
                "subject": "Immigration"
            },
            {
                "subject_slug": "terrorism",
                "subject": "Terrorism"
            }
        ],
        "ruling_date": "2016-09-04T17:56:59",
        "ruling_link_text": "Clinton says US needs to do more",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Mike Pence cites Clinton support for more Syrian refugees",
        "ruling": {
            "ruling_slug": "true",
            "ruling": "True",
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-true.png"
        }
    },
    {
        "statement_date": "2017-09-21",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Mike Pence erroneously credits Thomas Jefferson with small government quote",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-false.png",
            "ruling_slug": "false",
            "ruling": "False"
        },
        "subject": [
            {
                "subject": "History",
                "subject_slug": "history"
            }
        ],
        "ruling_link_text": "Question this dubious quote with boldness",
        "speaker": {
            "last_name": "Pence",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/AP_VASH107_CAMPAIGN_2016_PE.jpg",
            "name_slug": "mike-pence",
            "first_name": "Mike",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2017/sep/21/mike-pence/mike-pence-erroneously-credits-thomas-jefferson-sm/",
        "statement_context": "comments on 'Fox & Friends'",
        "ruling_date": "2017-09-21T15:22:18",
        "statement": "<p>&quot;Thomas Jefferson said, &lsquo;Government that governs least governs best.&rsquo; &quot;</p>\r\n"
    },
    {
        "statement_date": "2017-07-18",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Did Donald Trump cut $18 billion worth of red tape, as Mike Pence said?",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-halftrue.png",
            "ruling_slug": "half-true",
            "ruling": "Half-True"
        },
        "subject": [
            {
                "subject": "Financial Regulation",
                "subject_slug": "financial-regulation"
            },
            {
                "subject": "Government regulation",
                "subject_slug": "government-regulation"
            },
            {
                "subject": "Regulation",
                "subject_slug": "market-regulation"
            }
        ],
        "ruling_link_text": "Potential, not real savings",
        "speaker": {
            "last_name": "Pence",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/AP_VASH107_CAMPAIGN_2016_PE.jpg",
            "name_slug": "mike-pence",
            "first_name": "Mike",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2017/jul/21/mike-pence/did-donald-trump-cut-18-billion-worth-red-tape-mik/",
        "statement_context": "a speech",
        "ruling_date": "2017-07-21T11:52:44",
        "statement": "<p>Says President Donald Trump &quot;has signed more laws cutting through federal red tape than any president in American history and has already saved businesses and families up to $18 billion in red tape costs every year.&quot;</p>\r\n"
    },
    {
        "statement_date": "2017-07-14",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Mike Pence falsely blames Medicaid expansion for disability waiting list in Ohio",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-false.png",
            "ruling_slug": "false",
            "ruling": "False"
        },
        "subject": [
            {
                "subject": "Health Care",
                "subject_slug": "health-care"
            }
        ],
        "ruling_link_text": "Makes much of little data",
        "speaker": {
            "last_name": "Pence",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/AP_VASH107_CAMPAIGN_2016_PE.jpg",
            "name_slug": "mike-pence",
            "first_name": "Mike",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2017/jul/17/mike-pence/pence-falsely-ties-medicaid-expansion-disability-w/",
        "statement_context": "a speech to the National Governors Association",
        "ruling_date": "2017-07-17T08:37:19",
        "statement": "<p>In Ohio, due to Medicaid expansion, &quot;nearly 60,000 disabled citizens are stuck on waiting lists ... leaving them without the care they need for months or even years.&quot;</p>\r\n\r\n<div>&nbsp;</div>\r\n"
    },
    {
        "statement_date": "2017-03-19",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Discussing health care, Mike Pence is wrong about how car insurance works",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-false.png",
            "ruling_slug": "false",
            "ruling": "False"
        },
        "subject": [
            {
                "subject": "Government regulation",
                "subject_slug": "government-regulation"
            },
            {
                "subject": "Health Care",
                "subject_slug": "health-care"
            }
        ],
        "ruling_link_text": "Wrong about how car insurance works",
        "speaker": {
            "last_name": "Pence",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/AP_VASH107_CAMPAIGN_2016_PE.jpg",
            "name_slug": "mike-pence",
            "first_name": "Mike",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2017/mar/23/mike-pence/discussing-health-care-mike-pence-wrong-about/",
        "statement_context": "remarks in Coral Springs, Fla.",
        "ruling_date": "2017-03-23T10:53:14",
        "statement": "<p>Says President Donald Trump&rsquo;s proposal to allow Americans to buy health insurance across state lines would make it the same as &quot;the way you buy car insurance&quot; today.</p>\r\n"
    },
    {
        "statement_date": "2017-01-04",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Mike Pence says under Obamacare, 'American families have seen an increase in premiums of $5,000'",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-halftrue.png",
            "ruling_slug": "half-true",
            "ruling": "Half-True"
        },
        "subject": [
            {
                "subject": "Health Care",
                "subject_slug": "health-care"
            }
        ],
        "ruling_link_text": "Figure is too high, but ACA premiums did rise faster",
        "speaker": {
            "last_name": "Pence",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/AP_VASH107_CAMPAIGN_2016_PE.jpg",
            "name_slug": "mike-pence",
            "first_name": "Mike",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2017/jan/09/mike-pence/mike-pence-says-under-obamacare-american-families-/",
        "statement_context": "comments to reporters on Capitol Hill",
        "ruling_date": "2017-01-09T14:22:27",
        "statement": "<p>Under Obamacare, &quot;American families have seen an increase in premiums of $5,000.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-12-04",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Mike Pence says Donald Trump won most counties by a Republican since Ronald Reagan",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlytrue.png",
            "ruling_slug": "mostly-true",
            "ruling": "Mostly True"
        },
        "subject": [
            {
                "subject": "Elections",
                "subject_slug": "elections"
            }
        ],
        "ruling_link_text": "He's right, but not so shocking",
        "speaker": {
            "last_name": "Pence",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/AP_VASH107_CAMPAIGN_2016_PE.jpg",
            "name_slug": "mike-pence",
            "first_name": "Mike",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2016/dec/04/mike-pence/mike-pence-says-donald-trump-won-most-counties-rep/",
        "statement_context": "an interview on NBC's \"Meet the Press\"",
        "ruling_date": "2016-12-04T17:54:39",
        "statement": "<p>Says Donald Trump &quot;won more counties than any candidate on our side since Ronald Reagan.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-10-31",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Is Mike Pence right that 1 in 5 U.S. households don't have anyone working?",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-halftrue.png",
            "ruling_slug": "half-true",
            "ruling": "Half-True"
        },
        "subject": [
            {
                "subject": "Economy",
                "subject_slug": "economy"
            },
            {
                "subject": "Families",
                "subject_slug": "families"
            },
            {
                "subject": "Jobs",
                "subject_slug": "jobs"
            },
            {
                "subject": "Workers",
                "subject_slug": "workers"
            }
        ],
        "ruling_link_text": "Lots of those are retiree households",
        "speaker": {
            "last_name": "Pence",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/AP_VASH107_CAMPAIGN_2016_PE.jpg",
            "name_slug": "mike-pence",
            "first_name": "Mike",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2016/nov/03/mike-pence/mike-pence-right-1-5-us-households-dont-have-anyon/",
        "statement_context": "remarks in Cocoa Beach, Fla.",
        "ruling_date": "2016-11-03T11:59:35",
        "statement": "<p>&quot;One in five American households have nobody under the same roof that&#39;s got a job.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-10-16",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Mike Pence wrong on Haiti contracts steered to Clinton friends",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-false.png",
            "ruling_slug": "false",
            "ruling": "False"
        },
        "subject": [
            {
                "subject": "Ethics",
                "subject_slug": "ethics"
            }
        ],
        "ruling_link_text": "Access? Yes. Contracts? No.",
        "speaker": {
            "last_name": "Pence",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/AP_VASH107_CAMPAIGN_2016_PE.jpg",
            "name_slug": "mike-pence",
            "first_name": "Mike",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [
            {
                "last_name": "Clinton",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
                "name_slug": "hillary-clinton",
                "first_name": "Hillary",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/oct/19/mike-pence/pence-wrong-haiti-contracts-steered-clinton-friend/",
        "statement_context": "an interview on NBC's \"Meet the Press\"",
        "ruling_date": "2016-10-19T18:13:45",
        "statement": "<p>&quot;State Department officials actually directed contracts for the Haitian recovery after the earthquake to friends of the Clintons.&quot;</p>\r\n\r\n<div>&nbsp;</div>\r\n"
    },
    {
        "statement_date": "2016-10-16",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Pence wrongly says more than half of Hillary Clinton's meetings went to foundation donors",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlyfalse.png",
            "ruling_slug": "barely-true",
            "ruling": "Mostly False"
        },
        "subject": [
            {
                "subject": "Foreign Policy",
                "subject_slug": "foreign-policy"
            }
        ],
        "ruling_link_text": "Not by a stretch",
        "speaker": {
            "last_name": "Pence",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/AP_VASH107_CAMPAIGN_2016_PE.jpg",
            "name_slug": "mike-pence",
            "first_name": "Mike",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2016/oct/16/mike-pence/pence-wrongly-says-more-half-hillary-clintons-meet/",
        "statement_context": "comments on \"Meet the Press\"",
        "ruling_date": "2016-10-16T17:00:00",
        "statement": "<div>&quot;We know that more than half of Hillary Clinton&#39;s meetings while she was secretary of state were given to major contributors to the Clinton Foundation.&quot;</div>\r\n\r\n<div>&nbsp;</div>\r\n"
    },
    {
        "statement_date": "2016-10-04",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Pence's False claim that Trump 'hasn't broken' tax return promise",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-false.png",
            "ruling_slug": "false",
            "ruling": "False"
        },
        "subject": [
            {
                "subject": "Candidate Biography",
                "subject_slug": "candidates-biography"
            },
            {
                "subject": "Taxes",
                "subject_slug": "taxes"
            }
        ],
        "ruling_link_text": "Trump in 2015: 'I'll produce my tax returns absolutely'",
        "speaker": {
            "last_name": "Pence",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/AP_VASH107_CAMPAIGN_2016_PE.jpg",
            "name_slug": "mike-pence",
            "first_name": "Mike",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [
            {
                "last_name": "Trump",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
                "name_slug": "donald-trump",
                "first_name": "Donald",
                "party": {
                    "party": "Republican",
                    "party_slug": "republican"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/oct/05/mike-pence/pences-false-claim-trump-hasnt-broken-tax-return-p/",
        "statement_context": "the vice presidential debate",
        "ruling_date": "2016-10-05T17:08:21",
        "statement": "<p>Says Donald Trump &quot;hasn&rsquo;t broken his promise&quot; to release his tax returns.</p>\r\n"
    },
    {
        "statement_date": "2016-10-04",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Mike Pence tidies up Donald Trump's quote about Mexicans as 'good people'",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-halftrue.png",
            "ruling_slug": "half-true",
            "ruling": "Half-True"
        },
        "subject": [
            {
                "subject": "Candidate Biography",
                "subject_slug": "candidates-biography"
            },
            {
                "subject": "Diversity",
                "subject_slug": "diversity"
            },
            {
                "subject": "Immigration",
                "subject_slug": "immigration"
            }
        ],
        "ruling_link_text": "'Some,' not 'many'",
        "speaker": {
            "last_name": "Pence",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/AP_VASH107_CAMPAIGN_2016_PE.jpg",
            "name_slug": "mike-pence",
            "first_name": "Mike",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2016/oct/05/mike-pence/mike-pence-tidies-donald-trumps-quote-about-mexica/",
        "statement_context": "the vice presidential debate in Farmville, Va.",
        "ruling_date": "2016-10-05T17:02:50",
        "statement": "<p>Says Donald Trump, in his campaign announcement speech, &quot;also said, &lsquo;And many of them (Mexicans) are good people. You keep leaving that out of your quote.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-10-04",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Tim Kaine recalls Mike Pence comment on Vladimir Putin",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlytrue.png",
            "ruling_slug": "mostly-true",
            "ruling": "Mostly True"
        },
        "subject": [
            {
                "subject": "Foreign Policy",
                "subject_slug": "foreign-policy"
            }
        ],
        "ruling_link_text": "Pence said 'stronger,' not 'better'",
        "speaker": {
            "last_name": "Kaine",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/AP_NCCB111_CAMPAIGN_2016_KA.JPG",
            "name_slug": "tim-kaine",
            "first_name": "Tim",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [
            {
                "last_name": "Pence",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/AP_VASH107_CAMPAIGN_2016_PE.jpg",
                "name_slug": "mike-pence",
                "first_name": "Mike",
                "party": {
                    "party": "Republican",
                    "party_slug": "republican"
                }
            },
            {
                "last_name": "Trump",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
                "name_slug": "donald-trump",
                "first_name": "Donald",
                "party": {
                    "party": "Republican",
                    "party_slug": "republican"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/oct/05/tim-kaine/tim-kaine-recalls-mike-pence-comment-putin-stronge/",
        "statement_context": "the vice presidential debate in Farmville, Va.",
        "ruling_date": "2016-10-05T17:01:20",
        "statement": "<p>&quot;Gov. Pence said, inarguably, Vladimir Putin is a better leader than President Obama.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-10-04",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "At debate, Mike Pence claims Trump never said more nations should have nuclear weapons",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlyfalse.png",
            "ruling_slug": "barely-true",
            "ruling": "Mostly False"
        },
        "subject": [
            {
                "subject": "Nuclear",
                "subject_slug": "nuclear"
            }
        ],
        "ruling_link_text": "Says some countries might be \"better off\"",
        "speaker": {
            "last_name": "Pence",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/AP_VASH107_CAMPAIGN_2016_PE.jpg",
            "name_slug": "mike-pence",
            "first_name": "Mike",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2016/oct/05/mike-pence/debate-mike-pence-claims-trump-never-said-more-nat/",
        "statement_context": " in the 2016 vice presidential debate",
        "ruling_date": "2016-10-05T01:05:22",
        "statement": "<p>Says Donald Trump &quot;never said that&quot; more nations should get nuclear weapons.</p>\r\n"
    },
    {
        "statement_date": "2016-10-04",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Mike Pence says Hillary Clinton wants to turn Obamacare into single-payer",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlyfalse.png",
            "ruling_slug": "barely-true",
            "ruling": "Mostly False"
        },
        "subject": [
            {
                "subject": "Drugs",
                "subject_slug": "drugs"
            },
            {
                "subject": "Health Care",
                "subject_slug": "health-care"
            },
            {
                "subject": "History",
                "subject_slug": "history"
            }
        ],
        "ruling_link_text": "That's not her prescription",
        "speaker": {
            "last_name": "Pence",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/AP_VASH107_CAMPAIGN_2016_PE.jpg",
            "name_slug": "mike-pence",
            "first_name": "Mike",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [
            {
                "last_name": "Clinton",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
                "name_slug": "hillary-clinton",
                "first_name": "Hillary",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            },
            {
                "last_name": "Kaine",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/AP_NCCB111_CAMPAIGN_2016_KA.JPG",
                "name_slug": "tim-kaine",
                "first_name": "Tim",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/oct/05/mike-pence/mike-pence-says-hillary-clinton-want-turn-obamacar/",
        "statement_context": "the 2016 Vice Presidential debate",
        "ruling_date": "2016-10-05T00:47:36",
        "statement": "<p>Says Hillary Clinton and Tim Kaine &quot;want to expand (Obamacare) into a single-payer program.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-10-04",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Mike Pence says Hillary Clinton wants to turn Obamacare into single-payer",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlyfalse.png",
            "ruling_slug": "barely-true",
            "ruling": "Mostly False"
        },
        "subject": [
            {
                "subject": "Drugs",
                "subject_slug": "drugs"
            },
            {
                "subject": "Health Care",
                "subject_slug": "health-care"
            },
            {
                "subject": "History",
                "subject_slug": "history"
            }
        ],
        "ruling_link_text": "That's not her prescription",
        "speaker": {
            "last_name": "Pence",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/AP_VASH107_CAMPAIGN_2016_PE.jpg",
            "name_slug": "mike-pence",
            "first_name": "Mike",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [
            {
                "last_name": "Clinton",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
                "name_slug": "hillary-clinton",
                "first_name": "Hillary",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            },
            {
                "last_name": "Kaine",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/AP_NCCB111_CAMPAIGN_2016_KA.JPG",
                "name_slug": "tim-kaine",
                "first_name": "Tim",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/oct/05/mike-pence/mike-pence-says-hillary-clinton-want-turn-obamacar/",
        "statement_context": "the 2016 Vice Presidential debate",
        "ruling_date": "2016-10-05T00:47:36",
        "statement": "<p>Says Hillary Clinton and Tim Kaine &quot;want to expand (Obamacare) into a single-payer program.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-10-04",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Tim Kaine Mostly False on Donald Trump's Social Security stance",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlyfalse.png",
            "ruling_slug": "barely-true",
            "ruling": "Mostly False"
        },
        "subject": [
            {
                "subject": "Social Security",
                "subject_slug": "social-security"
            }
        ],
        "ruling_link_text": "Old evidence overtaken by new evidence",
        "speaker": {
            "last_name": "Kaine",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/AP_NCCB111_CAMPAIGN_2016_KA.JPG",
            "name_slug": "tim-kaine",
            "first_name": "Tim",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [
            {
                "last_name": "Pence",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/AP_VASH107_CAMPAIGN_2016_PE.jpg",
                "name_slug": "mike-pence",
                "first_name": "Mike",
                "party": {
                    "party": "Republican",
                    "party_slug": "republican"
                }
            },
            {
                "last_name": "Trump",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
                "name_slug": "donald-trump",
                "first_name": "Donald",
                "party": {
                    "party": "Republican",
                    "party_slug": "republican"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/oct/05/tim-kaine/tim-kaine-mostly-false-donald-trumps-social-securi/",
        "statement_context": "the 2016 vice presidential debate",
        "ruling_date": "2016-10-05T00:43:00",
        "statement": "<p>Donald Trump would &quot;engage in a risky scheme to privatize Social Security.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-10-04",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Pence repeats false claim on Clinton Foundation's limited charitable work",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-false.png",
            "ruling_slug": "false",
            "ruling": "False"
        },
        "subject": [
            {
                "subject": "Candidate Biography",
                "subject_slug": "candidates-biography"
            }
        ],
        "ruling_link_text": "Misreads how the foundation works",
        "speaker": {
            "last_name": "Pence",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/AP_VASH107_CAMPAIGN_2016_PE.jpg",
            "name_slug": "mike-pence",
            "first_name": "Mike",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2016/oct/04/mike-pence/pence-repeats-false-claim-clinton-foundations-limi/",
        "statement_context": "the vice presidential debate",
        "ruling_date": "2016-10-04T23:37:10",
        "statement": "<p>&quot;10 cents on the&nbsp;dollar from the Clinton Foundation goes to charitable causes.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-10-04",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Mike Pence: Hillary Clinton failed to keep U.S. troops in Iraq",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlyfalse.png",
            "ruling_slug": "barely-true",
            "ruling": "Mostly False"
        },
        "subject": [
            {
                "subject": "Foreign Policy",
                "subject_slug": "foreign-policy"
            },
            {
                "subject": "Iraq",
                "subject_slug": "iraq"
            },
            {
                "subject": "Military",
                "subject_slug": "military"
            },
            {
                "subject": "Terrorism",
                "subject_slug": "terrorism"
            }
        ],
        "ruling_link_text": "Iraq rejected America's terms",
        "speaker": {
            "last_name": "Pence",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/AP_VASH107_CAMPAIGN_2016_PE.jpg",
            "name_slug": "mike-pence",
            "first_name": "Mike",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [
            {
                "last_name": "Clinton",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
                "name_slug": "hillary-clinton",
                "first_name": "Hillary",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/oct/04/mike-pence/mike-pence-clinton-failed-keep-troops-iraq/",
        "statement_context": "the 2016 Vice Presidential debate",
        "ruling_date": "2016-10-04T22:35:46",
        "statement": "<p>Says &quot;Iraq has been overrun by ISIS because Hillary Clinton failed to renegotiate . . . a status of forces agreement.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-10-03",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Mike Pence leaves out some details on his tax cut",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-halftrue.png",
            "ruling_slug": "half-true",
            "ruling": "Half-True"
        },
        "subject": [
            {
                "subject": "Job Accomplishments",
                "subject_slug": "job-accomplishments"
            },
            {
                "subject": "State Budget",
                "subject_slug": "state-budget"
            },
            {
                "subject": "Taxes",
                "subject_slug": "taxes"
            }
        ],
        "ruling_link_text": "Counting all cuts through 2022",
        "speaker": {
            "last_name": "Pence",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/AP_VASH107_CAMPAIGN_2016_PE.jpg",
            "name_slug": "mike-pence",
            "first_name": "Mike",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2016/oct/04/mike-pence/mike-pence-leaves-out-some-details-his-tax-cut/",
        "statement_context": "a pre-debate appearance in Virginia",
        "ruling_date": "2016-10-04T22:27:43",
        "statement": "<p>&quot;In the state of Indiana, I&rsquo;ve signed more than $3.5 billion in tax relief.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-10-04",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Tim Kaine says Donald Trump, Mike Pence want to eliminate the federal minimum wage",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-halftrue.png",
            "ruling_slug": "half-true",
            "ruling": "Half-True"
        },
        "subject": [
            {
                "subject": "Economy",
                "subject_slug": "economy"
            },
            {
                "subject": "Government regulation",
                "subject_slug": "government-regulation"
            },
            {
                "subject": "Income",
                "subject_slug": "income"
            },
            {
                "subject": "Labor",
                "subject_slug": "labor"
            },
            {
                "subject": "Poverty",
                "subject_slug": "poverty"
            },
            {
                "subject": "Small Business",
                "subject_slug": "small-business"
            },
            {
                "subject": "Wealth",
                "subject_slug": "wealth"
            },
            {
                "subject": "Workers",
                "subject_slug": "workers"
            }
        ],
        "ruling_link_text": "Trump has been all over the map",
        "speaker": {
            "last_name": "Kaine",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/AP_NCCB111_CAMPAIGN_2016_KA.JPG",
            "name_slug": "tim-kaine",
            "first_name": "Tim",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [
            {
                "last_name": "Pence",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/AP_VASH107_CAMPAIGN_2016_PE.jpg",
                "name_slug": "mike-pence",
                "first_name": "Mike",
                "party": {
                    "party": "Republican",
                    "party_slug": "republican"
                }
            },
            {
                "last_name": "Trump",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
                "name_slug": "donald-trump",
                "first_name": "Donald",
                "party": {
                    "party": "Republican",
                    "party_slug": "republican"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/oct/04/tim-kaine/tim-kaine-says-donald-trump-mike-pence-want-elimin/",
        "statement_context": "the 2016 Vice Presidential debate",
        "ruling_date": "2016-10-04T21:47:03",
        "statement": "<p>&quot;First, Donald Trump said wages are too high, and both Donald Trump and Mike Pence think we ought to eliminate the federal minimum wage.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-09-04",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Mike Pence says 'no effort' made against visa overstays",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-halftrue.png",
            "ruling_slug": "half-true",
            "ruling": "Half-True"
        },
        "subject": [
            {
                "subject": "Immigration",
                "subject_slug": "immigration"
            }
        ],
        "ruling_link_text": "Not a priority, but some enforcement",
        "speaker": {
            "last_name": "Pence",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/AP_VASH107_CAMPAIGN_2016_PE.jpg",
            "name_slug": "mike-pence",
            "first_name": "Mike",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2016/sep/12/mike-pence/mike-pence-says-theres-no-effort-against-visa-over/",
        "statement_context": "an interview on Meet the Press",
        "ruling_date": "2016-09-12T16:51:25",
        "statement": "<p>For immigrants with visa overstays, &quot;we make no effort to hold them accountable to that or uphold the law.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-09-04",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Pence wrongly says Trump has been consistent in immigration views",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-false.png",
            "ruling_slug": "false",
            "ruling": "False"
        },
        "subject": [
            {
                "subject": "Candidate Biography",
                "subject_slug": "candidates-biography"
            },
            {
                "subject": "Immigration",
                "subject_slug": "immigration"
            }
        ],
        "ruling_link_text": "Deport them to 'work with them' to 'assess the situation'",
        "speaker": {
            "last_name": "Pence",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/AP_VASH107_CAMPAIGN_2016_PE.jpg",
            "name_slug": "mike-pence",
            "first_name": "Mike",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2016/sep/04/mike-pence/pence-says-trump-has-been-consistent-immigration-v/",
        "statement_context": "an interview on \"Meet the Press\"",
        "ruling_date": "2016-09-04T17:59:39",
        "statement": "<p>&quot;Donald Trump&rsquo;s been completely consistent&quot; about his plan for nonviolent undocumented immigrants.</p>\r\n"
    },
    {
        "statement_date": "2016-09-04",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Mike Pence cites Clinton support for more Syrian refugees",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-true.png",
            "ruling_slug": "true",
            "ruling": "True"
        },
        "subject": [
            {
                "subject": "Foreign Policy",
                "subject_slug": "foreign-policy"
            },
            {
                "subject": "Human Rights",
                "subject_slug": "human-rights"
            },
            {
                "subject": "Immigration",
                "subject_slug": "immigration"
            },
            {
                "subject": "Terrorism",
                "subject_slug": "terrorism"
            }
        ],
        "ruling_link_text": "Clinton says US needs to do more",
        "speaker": {
            "last_name": "Pence",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/AP_VASH107_CAMPAIGN_2016_PE.jpg",
            "name_slug": "mike-pence",
            "first_name": "Mike",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [
            {
                "last_name": "Clinton",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
                "name_slug": "hillary-clinton",
                "first_name": "Hillary",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/sep/04/mike-pence/mike-pence-cites-clinton-support-more-syrian-refug/",
        "statement_context": "an interview on \"Meet the Press\"",
        "ruling_date": "2016-09-04T17:56:59",
        "statement": "<p>Says Hillary Clinton &quot;wants to increase Syrian refugees to this country by 550 percent.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-07-26",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Howard Dean largely right on Mike Pence's health policy record",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlytrue.png",
            "ruling_slug": "mostly-true",
            "ruling": "Mostly True"
        },
        "subject": [
            {
                "subject": "Federal Budget",
                "subject_slug": "federal-budget"
            },
            {
                "subject": "Health Care",
                "subject_slug": "health-care"
            },
            {
                "subject": "Medicaid",
                "subject_slug": "medicaid"
            },
            {
                "subject": "Medicare",
                "subject_slug": "medicare"
            },
            {
                "subject": "Poverty",
                "subject_slug": "poverty"
            },
            {
                "subject": "Public Health",
                "subject_slug": "public-health"
            }
        ],
        "ruling_link_text": "Pence isn't gung-ho about federal health care",
        "speaker": {
            "last_name": "Dean",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/mugs/mug-howarddean.jpg",
            "name_slug": "howard-dean",
            "first_name": "Howard",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [
            {
                "last_name": "Pence",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/AP_VASH107_CAMPAIGN_2016_PE.jpg",
                "name_slug": "mike-pence",
                "first_name": "Mike",
                "party": {
                    "party": "Republican",
                    "party_slug": "republican"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/aug/08/howard-dean/howard-dean-largely-right-mike-pences-health-polic/",
        "statement_context": "in a speech at the Democratic National Convention",
        "ruling_date": "2016-08-08T10:51:14",
        "statement": "<p>&quot;Mike Pence voted against expanding the Children&rsquo;s Health Insurance program, which Hillary helped to start.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-07-20",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Mike Pence stretches claim of record education spending in Indiana at Republican convention",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-halftrue.png",
            "ruling_slug": "half-true",
            "ruling": "Half-True"
        },
        "subject": [
            {
                "subject": "Education",
                "subject_slug": "education"
            },
            {
                "subject": "State Budget",
                "subject_slug": "state-budget"
            }
        ],
        "ruling_link_text": "Not when adjusted for inflation",
        "speaker": {
            "last_name": "Pence",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/AP_VASH107_CAMPAIGN_2016_PE.jpg",
            "name_slug": "mike-pence",
            "first_name": "Mike",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2016/jul/21/mike-pence/mike-pence-stretches-claim-record-education-spendi/",
        "statement_context": "a speech at the Republican National Convention",
        "ruling_date": "2016-07-21T01:39:32",
        "statement": "<p>Says as Indiana governor, he has made &quot;record investments in education.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-07-20",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Mike Pence touts top Indiana credit rating achieved before he became governor",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlytrue.png",
            "ruling_slug": "mostly-true",
            "ruling": "Mostly True"
        },
        "subject": [
            {
                "subject": "Candidate Biography",
                "subject_slug": "candidates-biography"
            },
            {
                "subject": "Debt",
                "subject_slug": "debt"
            },
            {
                "subject": "Deficit",
                "subject_slug": "deficit"
            },
            {
                "subject": "Economy",
                "subject_slug": "economy"
            },
            {
                "subject": "History",
                "subject_slug": "history"
            },
            {
                "subject": "Job Accomplishments",
                "subject_slug": "job-accomplishments"
            },
            {
                "subject": "State Budget",
                "subject_slug": "state-budget"
            },
            {
                "subject": "State Finances",
                "subject_slug": "state-finances"
            },
            {
                "subject": "States",
                "subject_slug": "states"
            }
        ],
        "ruling_link_text": "Indiana not alone; rating precedes his governorship",
        "speaker": {
            "last_name": "Pence",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/AP_VASH107_CAMPAIGN_2016_PE.jpg",
            "name_slug": "mike-pence",
            "first_name": "Mike",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2016/jul/21/mike-pence/mike-pence-touts-top-indiana-credit-rating-achieve/",
        "statement_context": "a speech at the Republican convention",
        "ruling_date": "2016-07-21T00:59:42",
        "statement": "<p>&quot;We in Indiana have . . . the highest credit rating in the nation.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-07-20",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Mike Pence's inaccurate claim about Clinton's Benghazi role and response",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlyfalse.png",
            "ruling_slug": "barely-true",
            "ruling": "Mostly False"
        },
        "subject": [
            {
                "subject": "Candidate Biography",
                "subject_slug": "candidates-biography"
            }
        ],
        "ruling_link_text": "Both parts of claim are inaccurate",
        "speaker": {
            "last_name": "Pence",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/AP_VASH107_CAMPAIGN_2016_PE.jpg",
            "name_slug": "mike-pence",
            "first_name": "Mike",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [
            {
                "last_name": "Clinton",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
                "name_slug": "hillary-clinton",
                "first_name": "Hillary",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/jul/21/mike-pence/mike-pences-false-claim-about-clintons-role-and-re/",
        "statement_context": "the Republican national convention",
        "ruling_date": "2016-07-21T00:20:13",
        "statement": "<p>&quot;It was Hillary Clinton who left Americans in harm&#39;s way in Benghazi and after four Americans fell said, &#39;What difference at this point does it make?&#39; &quot;</p>\r\n"
    },
    {
        "statement_date": "2016-07-20",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Mike Pence says there are more Hoosiers going to work than ever before",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-halftrue.png",
            "ruling_slug": "half-true",
            "ruling": "Half-True"
        },
        "subject": [
            {
                "subject": "Economy",
                "subject_slug": "economy"
            },
            {
                "subject": "Job Accomplishments",
                "subject_slug": "job-accomplishments"
            },
            {
                "subject": "Jobs",
                "subject_slug": "jobs"
            }
        ],
        "ruling_link_text": "Percentage working is what matters, not raw number",
        "speaker": {
            "last_name": "Pence",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/AP_VASH107_CAMPAIGN_2016_PE.jpg",
            "name_slug": "mike-pence",
            "first_name": "Mike",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2016/jul/20/mike-pence/mike-pence-says-there-are-more-hoosiers-going-work/",
        "statement_context": "a speech at the Republican National Convention in Cleveland",
        "ruling_date": "2016-07-20T23:07:32",
        "statement": "<p>&quot;There are more Hoosiers going to work than ever before.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-07-12",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Pence falsely says Clinton didn't 'send help' during Benghazi attack",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-false.png",
            "ruling_slug": "false",
            "ruling": "False"
        },
        "subject": [
            {
                "subject": "Foreign Policy",
                "subject_slug": "foreign-policy"
            },
            {
                "subject": "Military",
                "subject_slug": "military"
            },
            {
                "subject": "Terrorism",
                "subject_slug": "terrorism"
            }
        ],
        "ruling_link_text": "Wasn't her call",
        "speaker": {
            "last_name": "Pence",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/AP_VASH107_CAMPAIGN_2016_PE.jpg",
            "name_slug": "mike-pence",
            "first_name": "Mike",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [
            {
                "last_name": "Clinton",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
                "name_slug": "hillary-clinton",
                "first_name": "Hillary",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/jul/14/mike-pence/pence-falsely-says-clinton-didnt-send-help-during-/",
        "statement_context": "a speech at a Trump rally",
        "ruling_date": "2016-07-14T17:34:22",
        "statement": "<p>Says&nbsp;Hillary Clinton &quot;took 13 hours to send help to Americans under fire&quot; during the terrorist attack in Benghazi.</p>\r\n"
    },
    {
        "statement_date": "2016-07-12",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Mike Pence offers misleading statistic on employment peak in Indiana",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-halftrue.png",
            "ruling_slug": "half-true",
            "ruling": "Half-True"
        },
        "subject": [
            {
                "subject": "Economy",
                "subject_slug": "economy"
            },
            {
                "subject": "Jobs",
                "subject_slug": "jobs"
            }
        ],
        "ruling_link_text": "Statistic is correct, but nearly meaningless",
        "speaker": {
            "last_name": "Pence",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/AP_VASH107_CAMPAIGN_2016_PE.jpg",
            "name_slug": "mike-pence",
            "first_name": "Mike",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2016/jul/14/mike-pence/mike-pence-offers-misleading-statistic-employment-/",
        "statement_context": "a Donald Trump rally in Indiana",
        "ruling_date": "2016-07-14T17:32:44",
        "statement": "<p>&quot;Today, there are more Hoosiers going to work than ever before in the 200-year history of the great state of Indiana.&quot;</p>\r\n"
    },
    {
        "statement_date": "2015-03-29",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Did Barack Obama vote for Religious Freedom Restoration Act with 'very same' wording as Indiana's?",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-halftrue.png",
            "ruling_slug": "half-true",
            "ruling": "Half-True"
        },
        "subject": [
            {
                "subject": "Civil Rights",
                "subject_slug": "civil-rights"
            },
            {
                "subject": "Diversity",
                "subject_slug": "diversity"
            },
            {
                "subject": "Families",
                "subject_slug": "families"
            }
        ],
        "ruling_link_text": "Words matter, as how people interpret them",
        "speaker": {
            "last_name": "Pence",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/AP_VASH107_CAMPAIGN_2016_PE.jpg",
            "name_slug": "mike-pence",
            "first_name": "Mike",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2015/mar/29/mike-pence/did-barack-obama-vote-religious-freedom-restoratio/",
        "statement_context": "comments on ABC's \"This Week\"",
        "ruling_date": "2015-03-29T18:57:43",
        "statement": "<p>Says&nbsp;Barack Obama voted for the &quot;very same language&quot; of&nbsp;Indiana&#39;s Religious Freedom Restoration Act when he was in the Illinois state Senate. Sexual orientation &quot;doesn&#39;t have anything to do with this law.&quot;</p>\r\n"
    },
    {
        "statement_date": "2011-04-10",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Mike Pence said Republican Medicare proposal gives seniors the same health care as Congress",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlyfalse.png",
            "ruling_slug": "barely-true",
            "ruling": "Mostly False"
        },
        "subject": [
            {
                "subject": "Corrections and Updates",
                "subject_slug": "corrections-and-updates"
            },
            {
                "subject": "Federal Budget",
                "subject_slug": "federal-budget"
            },
            {
                "subject": "Health Care",
                "subject_slug": "health-care"
            },
            {
                "subject": "Medicare",
                "subject_slug": "medicare"
            },
            {
                "subject": "This Week - ABC News",
                "subject_slug": "abc-news-week"
            }
        ],
        "ruling_link_text": "It's different in several ways",
        "speaker": {
            "last_name": "Pence",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/AP_VASH107_CAMPAIGN_2016_PE.jpg",
            "name_slug": "mike-pence",
            "first_name": "Mike",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2011/apr/13/mike-pence/mike-pence-said-republican-medicare-proposal-will-/",
        "statement_context": "an interview on \"This Week with Christiane Amanpour\"",
        "ruling_date": "2011-04-13T17:49:36",
        "statement": "<p>A Republican proposal changes Medicare for those under age 55 so that they will &nbsp;&quot;participate in the same kind of health plan that members of Congress do.&quot;</p>\r\n"
    },
    {
        "statement_date": "2010-07-15",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Mike Pence says Dodd-Frank financial regulation bill \"will kill jobs\"",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlyfalse.png",
            "ruling_slug": "barely-true",
            "ruling": "Mostly False"
        },
        "subject": [
            {
                "subject": "Economy",
                "subject_slug": "economy"
            },
            {
                "subject": "Financial Regulation",
                "subject_slug": "financial-regulation"
            },
            {
                "subject": "Regulation",
                "subject_slug": "market-regulation"
            }
        ],
        "ruling_link_text": "What about jobs saved by the new regulations?",
        "speaker": {
            "last_name": "Pence",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/AP_VASH107_CAMPAIGN_2016_PE.jpg",
            "name_slug": "mike-pence",
            "first_name": "Mike",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2011/jan/21/mike-pence/mike-pence-says-dodd-frank-financial-regulation-bi/",
        "statement_context": "a press release",
        "ruling_date": "2011-01-21T11:11:27",
        "statement": "<p>The financial regulatory bill &quot;will kill jobs.&quot;</p>\r\n"
    },
    {
        "statement_date": "2010-11-07",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Mike Pence says raising taxes lowers tax revenues",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-false.png",
            "ruling_slug": "false",
            "ruling": "False"
        },
        "subject": [
            {
                "subject": "Taxes",
                "subject_slug": "taxes"
            },
            {
                "subject": "This Week - ABC News",
                "subject_slug": "abc-news-week"
            }
        ],
        "ruling_link_text": "News flash: Raising taxes increases revenues",
        "speaker": {
            "last_name": "Pence",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/AP_VASH107_CAMPAIGN_2016_PE.jpg",
            "name_slug": "mike-pence",
            "first_name": "Mike",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2010/nov/09/mike-pence/mike-pence-says-raising-taxes-lowers-tax-revenues/",
        "statement_context": "an interview on \"This Week with Christiane Amanpour.\"",
        "ruling_date": "2010-11-09T16:30:32",
        "statement": "<p>&quot;Anybody who is familiar with the historical data from the IRS knows that raising income tax rates will likely actually reduce federal revenues.&quot;</p>\r\n"
    },
    {
        "statement_date": "2010-07-20",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Mike Pence says Democrats want all of Bush tax cuts to expire",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-false.png",
            "ruling_slug": "false",
            "ruling": "False"
        },
        "subject": [
            {
                "subject": "Taxes",
                "subject_slug": "taxes"
            }
        ],
        "ruling_link_text": "Democrats would at least keep the cuts for all but the richest",
        "speaker": {
            "last_name": "Pence",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/AP_VASH107_CAMPAIGN_2016_PE.jpg",
            "name_slug": "mike-pence",
            "first_name": "Mike",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2010/jul/22/mike-pence/mike-pence-says-democrats-want-all-bush-tax-cuts-e/",
        "statement_context": "a press conference",
        "ruling_date": "2010-07-22T10:02:21",
        "statement": "<p>&quot;Should Democrats get their way, every income tax bracket will increase on Jan. 1, 2011. Every single one.&quot;</p>\r\n"
    },
    {
        "statement_date": "2010-05-02",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Republican Mike Pence says Obama cut budget for illegal immigration effort",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-false.png",
            "ruling_slug": "false",
            "ruling": "False"
        },
        "subject": [
            {
                "subject": "Immigration",
                "subject_slug": "immigration"
            }
        ],
        "ruling_link_text": "More for real Border Patrol officers, less for Bush's virtual fence  ",
        "speaker": {
            "last_name": "Pence",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/AP_VASH107_CAMPAIGN_2016_PE.jpg",
            "name_slug": "mike-pence",
            "first_name": "Mike",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2010/may/05/mike-pence/republican-says-obama-cut-budget-illegal-immigrati/",
        "statement_context": "an interview on NBC's 'Meet the Press' ",
        "ruling_date": "2010-05-05T11:48:51",
        "statement": "<p>&quot;This administration and this Congress have been systematically cutting funding to border security since the Democrats took control.&quot;</p>\r\n"
    },
    {
        "statement_date": "2009-12-08",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Pence says Democrats' plan to spend TARP money on economic stimulus is unlawful",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-halftrue.png",
            "ruling_slug": "half-true",
            "ruling": "Half-True"
        },
        "subject": [
            {
                "subject": "Economy",
                "subject_slug": "economy"
            },
            {
                "subject": "Federal Budget",
                "subject_slug": "federal-budget"
            },
            {
                "subject": "Stimulus",
                "subject_slug": "stimulus"
            }
        ],
        "ruling_link_text": "Actually, Congress makes the law",
        "speaker": {
            "last_name": "Pence",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/AP_VASH107_CAMPAIGN_2016_PE.jpg",
            "name_slug": "mike-pence",
            "first_name": "Mike",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2009/dec/08/mike-pence/pence-says-democrats-plan-spend-tarp-money-economi/",
        "statement_context": "a speech on the House floor",
        "ruling_date": "2009-12-08T18:53:02",
        "statement": "<p>&quot;To use money from the TARP fund in the manner that is being discussed by the White House and congressional Democrats would be a violation of the law.&quot;</p>\r\n"
    },
    {
        "statement_date": "2009-11-30",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Rep. Mike Pence says Democratic health plan would drive up family premiums ",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlyfalse.png",
            "ruling_slug": "barely-true",
            "ruling": "Mostly False"
        },
        "subject": [
            {
                "subject": "Health Care",
                "subject_slug": "health-care"
            }
        ],
        "ruling_link_text": "Only true for a small percentage of people",
        "speaker": {
            "last_name": "Pence",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/AP_VASH107_CAMPAIGN_2016_PE.jpg",
            "name_slug": "mike-pence",
            "first_name": "Mike",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2009/dec/01/mike-pence/rep-mike-pence-says-democratic-health-plan-would-/",
        "statement_context": "a press release",
        "ruling_date": "2009-12-01T17:29:29",
        "statement": "<p>Under the Democratic health plan, families &quot;will be forced to spend an additional $2,100 a year to keep their current health care.&quot;</p>\r\n"
    },
    {
        "statement_date": "2009-11-05",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "U.S. Rep. Mike Pence says CBO confirms GOP health plan reduces insurance premiums up to 10 percent",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-halftrue.png",
            "ruling_slug": "half-true",
            "ruling": "Half-True"
        },
        "subject": [
            {
                "subject": "Health Care",
                "subject_slug": "health-care"
            }
        ],
        "ruling_link_text": "Only if you are among the 15 percent in the small group market",
        "speaker": {
            "last_name": "Pence",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/AP_VASH107_CAMPAIGN_2016_PE.jpg",
            "name_slug": "mike-pence",
            "first_name": "Mike",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2009/nov/06/mike-pence/us-rep-mike-pence-says-cbo-confirms-gop-health-pla/",
        "statement_context": "a press release",
        "ruling_date": "2009-11-06T13:58:24",
        "statement": "<p>&quot;As a result of the House Republican bill, the nonpartisan Congressional Budget Office now confirms that families will see their health care premiums reduced by up to 10 percent.&quot;</p>\r\n"
    },
    {
        "statement_date": "2009-06-10",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Pence claims that Obama said energy costs will skyrocket with a cap-and-trade plan",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-true.png",
            "ruling_slug": "true",
            "ruling": "True"
        },
        "subject": [
            {
                "subject": "Climate Change",
                "subject_slug": "climate-change"
            },
            {
                "subject": "Energy",
                "subject_slug": "energy"
            }
        ],
        "ruling_link_text": "Obama said it first: Electricity costs will \"skyrocket\" under cap and trade.",
        "speaker": {
            "last_name": "Pence",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/AP_VASH107_CAMPAIGN_2016_PE.jpg",
            "name_slug": "mike-pence",
            "first_name": "Mike",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2009/jun/11/mike-pence/pence-claims-obama-said-energy-costs-will-skyrocke/",
        "statement_context": "MSNBC interview.",
        "ruling_date": "2009-06-11T17:22:51",
        "statement": "<p>Contends that President Obama &quot;literally said (if) his cap-and-trade proposals were to pass, that utility rates, his words now, would, &#39;necessarily skyrocket.&#39;&quot;</p>\r\n"
    },
    {
        "statement_date": "2009-05-12",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "120 million \"deprived\" of health care is not correct",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-false.png",
            "ruling_slug": "false",
            "ruling": "False"
        },
        "subject": [
            {
                "subject": "Health Care",
                "subject_slug": "health-care"
            }
        ],
        "ruling_link_text": "A big number used wrong",
        "speaker": {
            "last_name": "Pence",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/AP_VASH107_CAMPAIGN_2016_PE.jpg",
            "name_slug": "mike-pence",
            "first_name": "Mike",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2009/may/19/mike-pence/120-million-deprived-health-care-not-correct/",
        "statement_context": "an e-mail",
        "ruling_date": "2009-05-19T18:34:44",
        "statement": "<p>The Democrats propose &quot;a government-controlled health care plan that will deprive roughly 120 million Americans of their current health care coverage.&quot;</p>\r\n"
    },
    {
        "statement_date": "2009-03-17",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Tens of billions in AIG bailout went to foreign companies",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-true.png",
            "ruling_slug": "true",
            "ruling": "True"
        },
        "subject": [
            {
                "subject": "Economy",
                "subject_slug": "economy"
            }
        ],
        "ruling_link_text": "Merci beaucoup, American taxpayer",
        "speaker": {
            "last_name": "Pence",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/AP_VASH107_CAMPAIGN_2016_PE.jpg",
            "name_slug": "mike-pence",
            "first_name": "Mike",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2009/mar/20/mike-pence/tens-billions-aig-bailout-went-foreign-comanies/",
        "statement_context": "a TV interview",
        "ruling_date": "2009-03-20T14:39:35",
        "statement": "<p>&quot;Tens of billions of dollars (from taxpayer-funded bailouts) ... flowed straight through AIG into the coffers of foreign corporations and foreign banks.&quot;</p>\r\n"
    },
    {
        "statement_date": "2009-02-12",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "No money in the stimulus for San Francisco mice",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-false.png",
            "ruling_slug": "false",
            "ruling": "False"
        },
        "subject": [
            {
                "subject": "Federal Budget",
                "subject_slug": "federal-budget"
            },
            {
                "subject": "Stimulus",
                "subject_slug": "stimulus"
            }
        ],
        "ruling_link_text": "No mouse in the house — or in the bill",
        "speaker": {
            "last_name": "Pence",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/AP_VASH107_CAMPAIGN_2016_PE.jpg",
            "name_slug": "mike-pence",
            "first_name": "Mike",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2009/feb/13/mike-pence/no-money-stimulus-san-francisco-mice/",
        "statement_context": "a statement on Fox News Channel.",
        "ruling_date": "2009-02-13T17:46:11",
        "statement": "<p>The stimulus has &quot;$30 million in there to protect mice in San Francisco.&quot;</p>\r\n"
    },
    {
        "statement_date": "2009-02-03",
        "statement_type": {
            "statement_type": "Attack"
        },
        "ruling_headline": "Stimulus has money to help fish, off-roaders",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-true.png",
            "ruling_slug": "true",
            "ruling": "True"
        },
        "subject": [
            {
                "subject": "Economy",
                "subject_slug": "economy"
            },
            {
                "subject": "Federal Budget",
                "subject_slug": "federal-budget"
            },
            {
                "subject": "Stimulus",
                "subject_slug": "stimulus"
            }
        ],
        "ruling_link_text": "He's right on these",
        "speaker": {
            "last_name": "Pence",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/AP_VASH107_CAMPAIGN_2016_PE.jpg",
            "name_slug": "mike-pence",
            "first_name": "Mike",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2009/feb/04/mike-pence/stimulus-has-money-help-fish-roaders/",
        "statement_context": "a speech",
        "ruling_date": "2009-02-04T18:28:13",
        "statement": "<p>The stimulus bill contains &quot;$20 million for the removal of small to medium-sized fish passage barriers&quot; and &quot;$25 million to rehabilitate off-roading trails for ATVs.&quot;</p>\r\n"
    }
]
pence=pence.filter(function(item){return speakerCheck(item, "mike-pence")});

var rubio=[
    {
        "statement": "<p>Foreign aid &quot;is less than 1 percent of our federal budget.&quot;</p>\r\n\r\n<div>&nbsp;</div>\r\n",
        "statement_url": "/truth-o-meter/statements/2016/mar/11/marco-rubio/marco-rubio-says-foreign-aid-less-1-percent-federa/",
        "target": [],
        "statement_context": "a GOP debate at the University of Miami",
        "statement_date": "2016-03-11",
        "speaker": {
            "first_name": "Marco",
            "last_name": "Rubio",
            "name_slug": "marco-rubio",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Marco_Rubio.jpg",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "subject": [
            {
                "subject_slug": "corrections-and-updates",
                "subject": "Corrections and Updates"
            },
            {
                "subject_slug": "federal-budget",
                "subject": "Federal Budget"
            },
            {
                "subject_slug": "foreign-policy",
                "subject": "Foreign Policy"
            }
        ],
        "ruling_date": "2016-03-11T00:35:58",
        "ruling_link_text": "A pretty small slice of the pie",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Marco Rubio says foreign aid is less than 1 percent of federal budget",
        "ruling": {
            "ruling_slug": "true",
            "ruling": "True",
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-true.png"
        }
    },
    {
        "statement": "<p>Like Marco Rubio, Sen. Barack Obama had &quot;one of the worst attendance records in the Senate.&quot;</p>\r\n",
        "statement_url": "/truth-o-meter/statements/2016/mar/08/right-rise/right-rise-right-raise-criticism-candidates-rubio-/",
        "target": [
            {
                "first_name": "Barack",
                "last_name": "Obama",
                "name_slug": "barack-obama",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_OBAMA_1.jpg",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            },
            {
                "first_name": "Marco",
                "last_name": "Rubio",
                "name_slug": "marco-rubio",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Marco_Rubio.jpg",
                "party": {
                    "party": "Republican",
                    "party_slug": "republican"
                }
            }
        ],
        "statement_context": "a television ad.",
        "statement_date": "2016-03-01",
        "speaker": {
            "first_name": "",
            "last_name": "Right to Rise",
            "name_slug": "right-rise",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/logo_header.png",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "subject": [
            {
                "subject_slug": "candidates-biography",
                "subject": "Candidate Biography"
            },
            {
                "subject_slug": "congress",
                "subject": "Congress"
            },
            {
                "subject_slug": "florida",
                "subject": "Florida"
            },
            {
                "subject_slug": "foreign-policy",
                "subject": "Foreign Policy"
            },
            {
                "subject_slug": "history",
                "subject": "History"
            },
            {
                "subject_slug": "job-accomplishments",
                "subject": "Job Accomplishments"
            },
            {
                "subject_slug": "campaign-advertising",
                "subject": "Negative Campaigning"
            },
            {
                "subject_slug": "voting-record",
                "subject": "Voting Record"
            }
        ],
        "ruling_date": "2016-03-08T12:51:40",
        "ruling_link_text": "Two absentee senators",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Right to Rise correct on comparison between 'worst attendance records' of Marco Rubio, Barack Obama",
        "ruling": {
            "ruling_slug": "true",
            "ruling": "True",
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-true.png"
        }
    },
    {
        "statement": "<p>China is &quot;practicing how to blow up our satellites.&quot;</p>\r\n",
        "statement_url": "/truth-o-meter/statements/2016/feb/04/marco-rubio/marco-rubio-says-china-practicing-how-blow-our-sat/",
        "target": [],
        "statement_context": "a town hall in Manchester, N.H.",
        "statement_date": "2016-02-04",
        "speaker": {
            "first_name": "Marco",
            "last_name": "Rubio",
            "name_slug": "marco-rubio",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Marco_Rubio.jpg",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "subject": [
            {
                "subject_slug": "china",
                "subject": "China"
            },
            {
                "subject_slug": "foreign-policy",
                "subject": "Foreign Policy"
            },
            {
                "subject_slug": "military",
                "subject": "Military"
            },
            {
                "subject_slug": "space",
                "subject": "Space"
            }
        ],
        "ruling_date": "2016-02-04T19:46:07",
        "ruling_link_text": "They are -- and we're working on similar technology",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Marco Rubio says China is 'practicing how to blow up our satellites'",
        "ruling": {
            "ruling_slug": "true",
            "ruling": "True",
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-true.png"
        }
    },
    {
        "statement_date": "2017-04-09",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Donald Trump's Syria strike looks a lot like Barack Obama's plan, despite what Rubio, others say",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-false.png",
            "ruling_slug": "false",
            "ruling": "False"
        },
        "subject": [
            {
                "subject": "Foreign Policy",
                "subject_slug": "foreign-policy"
            }
        ],
        "ruling_link_text": "Faulty memory of 2013",
        "speaker": {
            "last_name": "Rubio",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Marco_Rubio.jpg",
            "name_slug": "marco-rubio",
            "first_name": "Marco",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2017/apr/12/marco-rubio/trumps-strikes-syria-look-lot-obamas-2013-proposal/",
        "statement_context": "an interview on ABC \"This Week\"",
        "ruling_date": "2017-04-12T11:22:05",
        "statement": "<p>The Obama administration&rsquo;s 2013 Syria proposal &quot;had no clear objective,&quot; while Trump&rsquo;s Syria strike &quot;had a clear strategic objective.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-03-11",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Marco Rubio says foreign aid is less than 1 percent of federal budget",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-true.png",
            "ruling_slug": "true",
            "ruling": "True"
        },
        "subject": [
            {
                "subject": "Corrections and Updates",
                "subject_slug": "corrections-and-updates"
            },
            {
                "subject": "Federal Budget",
                "subject_slug": "federal-budget"
            },
            {
                "subject": "Foreign Policy",
                "subject_slug": "foreign-policy"
            }
        ],
        "ruling_link_text": "A pretty small slice of the pie",
        "speaker": {
            "last_name": "Rubio",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Marco_Rubio.jpg",
            "name_slug": "marco-rubio",
            "first_name": "Marco",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2016/mar/11/marco-rubio/marco-rubio-says-foreign-aid-less-1-percent-federa/",
        "statement_context": "a GOP debate at the University of Miami",
        "ruling_date": "2016-03-11T00:35:58",
        "statement": "<p>Foreign aid &quot;is less than 1 percent of our federal budget.&quot;</p>\r\n\r\n<div>&nbsp;</div>\r\n"
    },
    {
        "statement_date": "2016-03-01",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Right to Rise correct on comparison between 'worst attendance records' of Marco Rubio, Barack Obama",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-true.png",
            "ruling_slug": "true",
            "ruling": "True"
        },
        "subject": [
            {
                "subject": "Candidate Biography",
                "subject_slug": "candidates-biography"
            },
            {
                "subject": "Congress",
                "subject_slug": "congress"
            },
            {
                "subject": "Florida",
                "subject_slug": "florida"
            },
            {
                "subject": "Foreign Policy",
                "subject_slug": "foreign-policy"
            },
            {
                "subject": "History",
                "subject_slug": "history"
            },
            {
                "subject": "Job Accomplishments",
                "subject_slug": "job-accomplishments"
            },
            {
                "subject": "Negative Campaigning",
                "subject_slug": "campaign-advertising"
            },
            {
                "subject": "Voting Record",
                "subject_slug": "voting-record"
            }
        ],
        "ruling_link_text": "Two absentee senators",
        "speaker": {
            "last_name": "Right to Rise",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/logo_header.png",
            "name_slug": "right-rise",
            "first_name": "",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [
            {
                "last_name": "Obama",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_OBAMA_1.jpg",
                "name_slug": "barack-obama",
                "first_name": "Barack",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            },
            {
                "last_name": "Rubio",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Marco_Rubio.jpg",
                "name_slug": "marco-rubio",
                "first_name": "Marco",
                "party": {
                    "party": "Republican",
                    "party_slug": "republican"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/mar/08/right-rise/right-rise-right-raise-criticism-candidates-rubio-/",
        "statement_context": "a television ad.",
        "ruling_date": "2016-03-08T12:51:40",
        "statement": "<p>Like Marco Rubio, Sen. Barack Obama had &quot;one of the worst attendance records in the Senate.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-02-25",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "We Googled 'Trump Polish workers.' Here's what we found",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-halftrue.png",
            "ruling_slug": "half-true",
            "ruling": "Half-True"
        },
        "subject": [
            {
                "subject": "Candidate Biography",
                "subject_slug": "candidates-biography"
            },
            {
                "subject": "Immigration",
                "subject_slug": "immigration"
            }
        ],
        "ruling_link_text": "200 Polish workers used for Trump Tower",
        "speaker": {
            "last_name": "Rubio",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Marco_Rubio.jpg",
            "name_slug": "marco-rubio",
            "first_name": "Marco",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [
            {
                "last_name": "Trump",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
                "name_slug": "donald-trump",
                "first_name": "Donald",
                "party": {
                    "party": "Republican",
                    "party_slug": "republican"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/feb/25/marco-rubio/marco-rubio-says-donald-trump-had-pay-1-million-hi/",
        "statement_context": "the GOP primary debate in Texas",
        "ruling_date": "2016-02-25T23:30:47",
        "statement": "<p>Says Donald Trump hired illegal workers &quot;from Poland and he had to pay a million dollars or so in a judgment.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-02-25",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Marco Rubio: We 'wiped out' Obamacare 'bailout fund' for insurance companies",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlyfalse.png",
            "ruling_slug": "barely-true",
            "ruling": "Mostly False"
        },
        "subject": [
            {
                "subject": "Health Care",
                "subject_slug": "health-care"
            }
        ],
        "ruling_link_text": "The risk corridors saga is far from over",
        "speaker": {
            "last_name": "Rubio",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Marco_Rubio.jpg",
            "name_slug": "marco-rubio",
            "first_name": "Marco",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2016/feb/25/marco-rubio/rubio-we-wiped-out-obamacare-bailout-fund-insuranc/",
        "statement_context": "comments during the Houston GOP debate",
        "ruling_date": "2016-02-25T23:26:57",
        "statement": "<p>&quot;When they passed Obamacare, they put a bailout fund in Obamacare. &hellip; We led the effort and wiped out that bailout fund.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-01-26",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Marco Rubio says two-thirds of U.S. kids can't read at grade level",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-halftrue.png",
            "ruling_slug": "half-true",
            "ruling": "Half-True"
        },
        "subject": [
            {
                "subject": "Education",
                "subject_slug": "education"
            }
        ],
        "ruling_link_text": "Not the only statistic, but a credible one",
        "speaker": {
            "last_name": "Rubio",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Marco_Rubio.jpg",
            "name_slug": "marco-rubio",
            "first_name": "Marco",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2016/feb/18/marco-rubio/marco-rubio-says-two-thirds-us-kids-cant-read-grad/",
        "statement_context": "a column posted on Medium.com",
        "ruling_date": "2016-02-18T17:02:20",
        "statement": "<p>&quot;Two-thirds of our kids can&rsquo;t read at grade level.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-02-14",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Do presidents stop nominating judges in final year?",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-false.png",
            "ruling_slug": "false",
            "ruling": "False"
        },
        "subject": [
            {
                "subject": "Supreme Court",
                "subject_slug": "supreme-court"
            }
        ],
        "ruling_link_text": "Expert: 'He's clearly wrong'",
        "speaker": {
            "last_name": "Rubio",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Marco_Rubio.jpg",
            "name_slug": "marco-rubio",
            "first_name": "Marco",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2016/feb/14/marco-rubio/do-presidents-stop-nominating-judges-final-year/",
        "statement_context": "comments on \"Meet the Press\"",
        "ruling_date": "2016-02-14T16:14:41",
        "statement": "<p>&quot;There comes a point in the last year of the president, especially in their second term, where you stop nominating&quot; both Supreme Court justices and Court of Appeals judges.</p>\r\n"
    },
    {
        "statement_date": "2016-02-06",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Marco Rubio says Hillary Clinton supports abortions 'even on the due date'",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-false.png",
            "ruling_slug": "false",
            "ruling": "False"
        },
        "subject": [
            {
                "subject": "Abortion",
                "subject_slug": "abortion"
            },
            {
                "subject": "Candidate Biography",
                "subject_slug": "candidates-biography"
            }
        ],
        "ruling_link_text": "Due date abortions don't exist",
        "speaker": {
            "last_name": "Rubio",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Marco_Rubio.jpg",
            "name_slug": "marco-rubio",
            "first_name": "Marco",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [
            {
                "last_name": "Clinton",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
                "name_slug": "hillary-clinton",
                "first_name": "Hillary",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/feb/10/marco-rubio/marco-rubio-says-hillary-clinton-supports-abortion/",
        "statement_context": "the GOP primary debate in New Hampshire",
        "ruling_date": "2016-02-10T10:00:00",
        "statement": "<p>Says Hillary Clinton &quot;believes that all abortions should be legal, even on the due date of that unborn child.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-02-04",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Marco Rubio says China is 'practicing how to blow up our satellites'",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-true.png",
            "ruling_slug": "true",
            "ruling": "True"
        },
        "subject": [
            {
                "subject": "China",
                "subject_slug": "china"
            },
            {
                "subject": "Foreign Policy",
                "subject_slug": "foreign-policy"
            },
            {
                "subject": "Military",
                "subject_slug": "military"
            },
            {
                "subject": "Space",
                "subject_slug": "space"
            }
        ],
        "ruling_link_text": "They are -- and we're working on similar technology",
        "speaker": {
            "last_name": "Rubio",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Marco_Rubio.jpg",
            "name_slug": "marco-rubio",
            "first_name": "Marco",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2016/feb/04/marco-rubio/marco-rubio-says-china-practicing-how-blow-our-sat/",
        "statement_context": "a town hall in Manchester, N.H.",
        "ruling_date": "2016-02-04T19:46:07",
        "statement": "<p>China is &quot;practicing how to blow up our satellites.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-01-31",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Marco Rubio incorrectly says illegal immigrant population is higher than 5 years ago",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-false.png",
            "ruling_slug": "false",
            "ruling": "False"
        },
        "subject": [
            {
                "subject": "Immigration",
                "subject_slug": "immigration"
            }
        ],
        "ruling_link_text": "It's actually stabilized in recent years.",
        "speaker": {
            "last_name": "Rubio",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Marco_Rubio.jpg",
            "name_slug": "marco-rubio",
            "first_name": "Marco",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2016/jan/31/marco-rubio/marco-rubio-incorrectly-says-illegal-immigrant-pop/",
        "statement_context": "an interview on NBC's \"Meet the Press\"",
        "ruling_date": "2016-01-31T15:28:04",
        "statement": "<p>&quot;We have more illegal immigrants here&quot; than we did five years ago.</p>\r\n"
    },
    {
        "statement_date": "2016-01-17",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Rubio wrongly credits Reagan for 1981 release of hostages from Iran",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-pantsonfire.gif",
            "ruling_slug": "pants-fire",
            "ruling": "Pants on Fire!"
        },
        "subject": [
            {
                "subject": "Foreign Policy",
                "subject_slug": "foreign-policy"
            }
        ],
        "ruling_link_text": "Carter's team did the diplomatic work",
        "speaker": {
            "last_name": "Rubio",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Marco_Rubio.jpg",
            "name_slug": "marco-rubio",
            "first_name": "Marco",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2016/jan/17/marco-rubio/rubio-wrongly-credits-reagan-1981-release-hostages/",
        "statement_context": "an interview on \"Meet the Press\"",
        "ruling_date": "2016-01-17T17:31:26",
        "statement": "<p>Hostages were released as soon as Ronald Reagan took office because Iran perceived that America was &quot;no longer under the command of someone weak.&quot;</p>\r\n"
    },
    {
        "statement_date": "2016-01-14",
        "statement_type": {
            "statement_type": "Attack"
        },
        "ruling_headline": "Rubio mischaracterizes Cruz's statement on birthright citizenship",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlyfalse.png",
            "ruling_slug": "barely-true",
            "ruling": "Mostly False"
        },
        "subject": [
            {
                "subject": "Immigration",
                "subject_slug": "immigration"
            }
        ],
        "ruling_link_text": "Cruz changed focus on action, not principle",
        "speaker": {
            "last_name": "Rubio",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Marco_Rubio.jpg",
            "name_slug": "marco-rubio",
            "first_name": "Marco",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [
            {
                "last_name": "Cruz",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/CRUZPFTNEW.jpg",
                "name_slug": "ted-cruz",
                "first_name": "Ted",
                "party": {
                    "party": "Republican",
                    "party_slug": "republican"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/jan/15/marco-rubio/rubio-mischaracterizes-cruzs-statement-birthright-/",
        "statement_context": "a Republican presidential debate in North Charleston, S.C.",
        "ruling_date": "2016-01-15T12:20:12",
        "statement": "<p>Says Sen. Ted Cruz used to be &quot;in favor of birthright citizenship&quot; but is now against it.</p>\r\n"
    },
    {
        "statement_date": "2016-01-04",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Hillary Clinton's Syrian airstrikes claim against Marco Rubio ignores difference in strategy",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlytrue.png",
            "ruling_slug": "mostly-true",
            "ruling": "Mostly True"
        },
        "subject": [
            {
                "subject": "Candidate Biography",
                "subject_slug": "candidates-biography"
            },
            {
                "subject": "Congress",
                "subject_slug": "congress"
            },
            {
                "subject": "Foreign Policy",
                "subject_slug": "foreign-policy"
            },
            {
                "subject": "History",
                "subject_slug": "history"
            },
            {
                "subject": "Terrorism",
                "subject_slug": "terrorism"
            }
        ],
        "ruling_link_text": "But he did want to arm Syrian moderates",
        "speaker": {
            "last_name": "Clinton",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
            "name_slug": "hillary-clinton",
            "first_name": "Hillary",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [
            {
                "last_name": "Rubio",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Marco_Rubio.jpg",
                "name_slug": "marco-rubio",
                "first_name": "Marco",
                "party": {
                    "party": "Republican",
                    "party_slug": "republican"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2016/jan/07/hillary-clinton/hillary-clintons-syrian-air-strikes-claim-against-/",
        "statement_context": "a posting on the Clinton website",
        "ruling_date": "2016-01-07T10:00:00",
        "statement": "<p>&quot;Marco Rubio voted against authorizing President Obama to strike Syria after Assad used chemical weapons on his own people.&quot;</p>\r\n"
    },
    {
        "statement_date": "2015-12-15",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Cruz muddles accusation against Rubio's 2013 immigration bill",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-false.png",
            "ruling_slug": "false",
            "ruling": "False"
        },
        "subject": [
            {
                "subject": "Foreign Policy",
                "subject_slug": "foreign-policy"
            },
            {
                "subject": "Immigration",
                "subject_slug": "immigration"
            }
        ],
        "ruling_link_text": "Misinterpreting how the Gang of Eight treated refugees",
        "speaker": {
            "last_name": "Cruz",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/CRUZPFTNEW.jpg",
            "name_slug": "ted-cruz",
            "first_name": "Ted",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [
            {
                "last_name": "Rubio",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Marco_Rubio.jpg",
                "name_slug": "marco-rubio",
                "first_name": "Marco",
                "party": {
                    "party": "Republican",
                    "party_slug": "republican"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2015/dec/18/ted-cruz/cruz-muddles-accusation-against-rubios-immigration/",
        "statement_context": "a Republican presidential debate in Las Vegas",
        "ruling_date": "2015-12-18T12:38:39",
        "statement": "<p>&quot;One of the most troubling aspects of the Rubio-Schumer Gang of Eight bill was that it gave President Obama blanket authority to admit refugees, including Syrian refugees, without mandating any background checks whatsoever.&quot;</p>\r\n"
    },
    {
        "statement_date": "2015-12-15",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Rubio and Cruz spar over domestic surveillance program",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-halftrue.png",
            "ruling_slug": "half-true",
            "ruling": "Half-True"
        },
        "subject": [
            {
                "subject": "Privacy",
                "subject_slug": "privacy"
            },
            {
                "subject": "Terrorism",
                "subject_slug": "terrorism"
            }
        ],
        "ruling_link_text": "Some streamlining, but no new legal powers",
        "speaker": {
            "last_name": "Rubio",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Marco_Rubio.jpg",
            "name_slug": "marco-rubio",
            "first_name": "Marco",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2015/dec/16/marco-rubio/rubio-and-cruz-spar-over-domestic-surveillance-pro/",
        "statement_context": "a Republican presidential debate in Las Vegas",
        "ruling_date": "2015-12-16T17:55:34",
        "statement": "<p>Regarding the USA Freedom Act, &quot;There is nothing we are allowed to do under this bill that we could not do before.&quot;</p>\r\n"
    },
    {
        "statement_date": "2015-12-15",
        "statement_type": {
            "statement_type": "Attack"
        },
        "ruling_headline": "Rand Paul said that Marco Rubio is for an 'open border'",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-pantsonfire.gif",
            "ruling_slug": "pants-fire",
            "ruling": "Pants on Fire!"
        },
        "subject": [
            {
                "subject": "Immigration",
                "subject_slug": "immigration"
            }
        ],
        "ruling_link_text": "2013 bill included extensive border security",
        "speaker": {
            "last_name": "Paul",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Rand_Paul.jpg",
            "name_slug": "rand-paul",
            "first_name": "Rand",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [
            {
                "last_name": "Rubio",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Marco_Rubio.jpg",
                "name_slug": "marco-rubio",
                "first_name": "Marco",
                "party": {
                    "party": "Republican",
                    "party_slug": "republican"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2015/dec/15/rand-paul/rand-paul-said-marco-rubio-open-border/",
        "statement_context": "in the CNN debate in Las Vegas",
        "ruling_date": "2015-12-15T23:39:48",
        "statement": "<p>Says Marco Rubio &quot;is the one for an open border.&quot;</p>\r\n\r\n<div>&nbsp;</div>\r\n"
    },
    {
        "statement_date": "2015-12-13",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Marco Rubio says the states have always defined marriage",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-halftrue.png",
            "ruling_slug": "half-true",
            "ruling": "Half-True"
        },
        "subject": [
            {
                "subject": "Gays and Lesbians",
                "subject_slug": "gays-and-lesbians"
            },
            {
                "subject": "Marriage",
                "subject_slug": "marriage"
            }
        ],
        "ruling_link_text": "Gay marriage not 1st time SCOTUS intervened",
        "speaker": {
            "last_name": "Rubio",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Marco_Rubio.jpg",
            "name_slug": "marco-rubio",
            "first_name": "Marco",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2015/dec/13/marco-rubio/marco-rubio-says-states-have-always-defined-marria/",
        "statement_context": "an interview on NBC's \"Meet the Press\"",
        "ruling_date": "2015-12-13T17:02:27",
        "statement": "<p>&quot;The states have always defined marriage.&quot;</p>\r\n"
    },
    {
        "statement_date": "2015-12-13",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Marco Rubio largely right that only 3 or 4 countries are taking significant military shots at ISIS ",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlytrue.png",
            "ruling_slug": "mostly-true",
            "ruling": "Mostly True"
        },
        "subject": [
            {
                "subject": "Military",
                "subject_slug": "military"
            },
            {
                "subject": "Terrorism",
                "subject_slug": "terrorism"
            }
        ],
        "ruling_link_text": "Data is opaque, but Rubio seems in the ballpark",
        "speaker": {
            "last_name": "Rubio",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Marco_Rubio.jpg",
            "name_slug": "marco-rubio",
            "first_name": "Marco",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2015/dec/13/marco-rubio/marco-rubio-appears-right-only-3-or-4-countries-ar/",
        "statement_context": "an interview with NBC's \"Meet the Press\"",
        "ruling_date": "2015-12-13T09:42:30",
        "statement": "<p>&quot;Three or four countries&quot; out of roughly 60 in the anti-ISIS coalition &quot;are providing military force.&quot;</p>\r\n"
    },
    {
        "statement_date": "2015-12-06",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Marco Rubio: 700,000 Americans could be affected by bill tying terrorist watch list to gun purchases",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlyfalse.png",
            "ruling_slug": "barely-true",
            "ruling": "Mostly False"
        },
        "subject": [
            {
                "subject": "Guns",
                "subject_slug": "guns"
            },
            {
                "subject": "Homeland Security",
                "subject_slug": "homeland-security"
            }
        ],
        "ruling_link_text": "Off by hundreds of thousands",
        "speaker": {
            "last_name": "Rubio",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Marco_Rubio.jpg",
            "name_slug": "marco-rubio",
            "first_name": "Marco",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2015/dec/06/marco-rubio/marco-rubio-says-700000-americans-could-be-affecte/",
        "statement_context": "an interview on CNN's \"State of the Union\"",
        "ruling_date": "2015-12-06T17:49:16",
        "statement": "<p>&quot;There are over 700,000 Americans on some watch list or another that would all be captured&quot; in a Democratic amendment intended to stop suspected terrorists from buying guns.</p>\r\n"
    },
    {
        "statement_date": "2015-11-10",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Marco Rubio said wrongly that welders make more money than philosophers",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-false.png",
            "ruling_slug": "false",
            "ruling": "False"
        },
        "subject": [
            {
                "subject": "Education",
                "subject_slug": "education"
            },
            {
                "subject": "Income",
                "subject_slug": "income"
            },
            {
                "subject": "Jobs",
                "subject_slug": "jobs"
            }
        ],
        "ruling_link_text": "Not in this universe",
        "speaker": {
            "last_name": "Rubio",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Marco_Rubio.jpg",
            "name_slug": "marco-rubio",
            "first_name": "Marco",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2015/nov/11/marco-rubio/marco-rubio-welders-more-money-philosophers/",
        "statement_context": "the fourth GOP primary debate.",
        "ruling_date": "2015-11-11T13:51:14",
        "statement": "<p>&quot;Welders make more money than philosophers.&quot;</p>\r\n"
    },
    {
        "statement_date": "2015-10-28",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Marco Rubio says biggest percentage gains from his tax plan will accrue to lowest-income groups",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-halftrue.png",
            "ruling_slug": "half-true",
            "ruling": "Half-True"
        },
        "subject": [
            {
                "subject": "Taxes",
                "subject_slug": "taxes"
            }
        ],
        "ruling_link_text": "Measured one way, not another",
        "speaker": {
            "last_name": "Rubio",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Marco_Rubio.jpg",
            "name_slug": "marco-rubio",
            "first_name": "Marco",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2015/nov/04/marco-rubio/marco-rubio-says-biggest-percentage-gains-his-tax-/",
        "statement_context": "a Republican presidential debate in Boulder, Colo.",
        "ruling_date": "2015-11-04T13:18:07",
        "statement": "<p>Under his tax plan, &quot;the greatest gains, percentage-wise,&quot; will be &quot;at the lower end of our plan.&quot;</p>\r\n"
    },
    {
        "statement_date": "2015-10-28",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Rubio says more businesses are closing than opening for the first time in 35 years",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-halftrue.png",
            "ruling_slug": "half-true",
            "ruling": "Half-True"
        },
        "subject": [
            {
                "subject": "Corrections and Updates",
                "subject_slug": "corrections-and-updates"
            },
            {
                "subject": "Economy",
                "subject_slug": "economy"
            },
            {
                "subject": "Small Business",
                "subject_slug": "small-business"
            }
        ],
        "ruling_link_text": "UPDATED: Latest Census data shows beginning of new trend",
        "speaker": {
            "last_name": "Rubio",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Marco_Rubio.jpg",
            "name_slug": "marco-rubio",
            "first_name": "Marco",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2015/oct/28/marco-rubio/rubio-says-more-businesses-are-closing-opening-fir/",
        "statement_context": "the third Republican presidential debate",
        "ruling_date": "2015-10-28T21:54:00",
        "statement": "<p>&quot;For the first time in 35 years, we have more businesses closing than starting.&quot;</p>\r\n"
    },
    {
        "statement_date": "2015-09-20",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Marco Rubio says CNN debate had no question on debt and little about the economy",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlytrue.png",
            "ruling_slug": "mostly-true",
            "ruling": "Mostly True"
        },
        "subject": [
            {
                "subject": "Debates",
                "subject_slug": "debates"
            },
            {
                "subject": "Elections",
                "subject_slug": "elections"
            }
        ],
        "ruling_link_text": "There was some discussion, but not much",
        "speaker": {
            "last_name": "Rubio",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Marco_Rubio.jpg",
            "name_slug": "marco-rubio",
            "first_name": "Marco",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2015/sep/20/marco-rubio/marco-rubio-says-cnn-debate-had-no-question-debt-a/",
        "statement_context": "an interview on \"This Week.\"",
        "ruling_date": "2015-09-20T16:05:27",
        "statement": "<p>&quot;We had a three-hour debate, no discussion about the national debt, very little about the economy.&quot;</p>\r\n"
    },
    {
        "statement_date": "2015-09-16",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Donald Trump says Marco Rubio has 'worst voting record there is today'",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlytrue.png",
            "ruling_slug": "mostly-true",
            "ruling": "Mostly True"
        },
        "subject": [
            {
                "subject": "Candidate Biography",
                "subject_slug": "candidates-biography"
            }
        ],
        "ruling_link_text": "Rubio missed a third of votes",
        "speaker": {
            "last_name": "Trump",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_TRUMP_CAMPAIGN_5.jpg",
            "name_slug": "donald-trump",
            "first_name": "Donald",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [
            {
                "last_name": "Rubio",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Marco_Rubio.jpg",
                "name_slug": "marco-rubio",
                "first_name": "Marco",
                "party": {
                    "party": "Republican",
                    "party_slug": "republican"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2015/sep/17/donald-trump/trump-says-marco-rubio-has-worst-voting-record-the/",
        "statement_context": "the second GOP primary debate.",
        "ruling_date": "2015-09-17T00:28:51",
        "statement": "<p>Says Marco Rubio has &quot;the worst voting record there is today.&quot;</p>\r\n"
    },
    {
        "statement_date": "2015-08-06",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Marco Rubio slams Dodd-Frank, gets his numbers wrong",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlyfalse.png",
            "ruling_slug": "barely-true",
            "ruling": "Mostly False"
        },
        "subject": [
            {
                "subject": "Financial Regulation",
                "subject_slug": "financial-regulation"
            }
        ],
        "ruling_link_text": "Actual number is less than half of what he said",
        "speaker": {
            "last_name": "Rubio",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Marco_Rubio.jpg",
            "name_slug": "marco-rubio",
            "first_name": "Marco",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2015/aug/12/marco-rubio/marco-rubio-slams-dodd-frank-gets-his-numbers-wron/",
        "statement_context": "the first GOP primary debate.",
        "ruling_date": "2015-08-12T16:24:37",
        "statement": "<p>&quot;Over 40 percent of small and mid-size banks that loan money to small businesses have been wiped out since Dodd-Frank has passed.&quot;</p>\r\n"
    },
    {
        "statement_date": "2015-08-06",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Rubio says Hillary Clinton in government longer than any Republican running",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlyfalse.png",
            "ruling_slug": "barely-true",
            "ruling": "Mostly False"
        },
        "subject": [
            {
                "subject": "Candidate Biography",
                "subject_slug": "candidates-biography"
            }
        ],
        "ruling_link_text": "They've got some long resumes",
        "speaker": {
            "last_name": "Rubio",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Marco_Rubio.jpg",
            "name_slug": "marco-rubio",
            "first_name": "Marco",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2015/aug/07/marco-rubio/rubio-says-hillary-clinton-office-longer-any-repub/",
        "statement_context": "comments at a GOP debate in Cleveland",
        "ruling_date": "2015-08-07T00:55:38",
        "statement": "<p>Says Hillary Clinton has &quot;been in office and in government longer than anybody else running here tonight.&quot;</p>\r\n"
    },
    {
        "statement_date": "2015-07-19",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Marco Rubio says Iran deal breaks 'anytime, anywhere' inspection promise by Barack Obama",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-halftrue.png",
            "ruling_slug": "half-true",
            "ruling": "Half-True"
        },
        "subject": [
            {
                "subject": "Foreign Policy",
                "subject_slug": "foreign-policy"
            },
            {
                "subject": "Nuclear",
                "subject_slug": "nuclear"
            }
        ],
        "ruling_link_text": "A top aide said it, once or maybe twice",
        "speaker": {
            "last_name": "Rubio",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Marco_Rubio.jpg",
            "name_slug": "marco-rubio",
            "first_name": "Marco",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2015/jul/19/marco-rubio/rubio-iran-deal-breaks-anytime-anywhere-inspection/",
        "statement_context": "comments on CNN's \"State of the Union\"",
        "ruling_date": "2015-07-19T16:52:10",
        "statement": "<div id=\":cg.ma\">\r\n<div dir=\"ltr\" id=\":cg.co\">The Iran deal &quot;violates promises the president made to the American people.&quot; ...&nbsp;&quot;It is not an anytime, anywhere inspection process.&quot;</div>\r\n</div>\r\n\r\n<div id=\":ch.ma\">\r\n<div id=\":ch.at\">&nbsp;</div>\r\n</div>\r\n"
    },
    {
        "statement_date": "2015-07-13",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Would Rubio's tax plan mean a big break for millionaires? ",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlytrue.png",
            "ruling_slug": "mostly-true",
            "ruling": "Mostly True"
        },
        "subject": [
            {
                "subject": "Taxes",
                "subject_slug": "taxes"
            }
        ],
        "ruling_link_text": "Lower taxes, for millionaires too",
        "speaker": {
            "last_name": "Clinton",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
            "name_slug": "hillary-clinton",
            "first_name": "Hillary",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [
            {
                "last_name": "Rubio",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Marco_Rubio.jpg",
                "name_slug": "marco-rubio",
                "first_name": "Marco",
                "party": {
                    "party": "Republican",
                    "party_slug": "republican"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2015/jul/16/hillary-clinton/would-rubios-tax-plan-mean-big-break-millionaires/",
        "statement_context": "a speech",
        "ruling_date": "2015-07-16T10:00:00",
        "statement": "<p>&quot;Sen. Rubio&rsquo;s (tax plan) would cut taxes for households making around $3 million a year by almost $240,000, which is way more than three times the earnings of a typical family.&quot;</p>\r\n"
    },
    {
        "statement_date": "2015-06-02",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Marco Rubio says for first time in 35 years, 'we have more businesses dying than we do starting'",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-true.png",
            "ruling_slug": "true",
            "ruling": "True"
        },
        "subject": [
            {
                "subject": "Economy",
                "subject_slug": "economy"
            },
            {
                "subject": "Small Business",
                "subject_slug": "small-business"
            }
        ],
        "ruling_link_text": "Respected think tank report backs it up",
        "speaker": {
            "last_name": "Rubio",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Marco_Rubio.jpg",
            "name_slug": "marco-rubio",
            "first_name": "Marco",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2015/jun/02/marco-rubio/marco-rubio-says-first-time-35-years-we-have-more-/",
        "statement_context": "a speech in Orlando, Fla.",
        "ruling_date": "2015-06-02T13:37:13",
        "statement": "<p>&quot;For the first time in 35 years, we have more businesses dying than we do starting.&quot;</p>\r\n"
    },
    {
        "statement_date": "2015-05-05",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Hillary Clinton says 'not one' GOP presidential contender backs path to citizenship",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlyfalse.png",
            "ruling_slug": "barely-true",
            "ruling": "Mostly False"
        },
        "subject": [
            {
                "subject": "Immigration",
                "subject_slug": "immigration"
            }
        ],
        "ruling_link_text": "She missed at least one candidate",
        "speaker": {
            "last_name": "Clinton",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/GYI_659046701_585968470.jpg",
            "name_slug": "hillary-clinton",
            "first_name": "Hillary",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [
            {
                "last_name": "Bush",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Jeb_Bush.jpg",
                "name_slug": "jeb-bush",
                "first_name": "Jeb",
                "party": {
                    "party": "Republican",
                    "party_slug": "republican"
                }
            },
            {
                "last_name": "Graham",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Lindsey_Graham.jpg",
                "name_slug": "lindsey-graham",
                "first_name": "Lindsey",
                "party": {
                    "party": "Republican",
                    "party_slug": "republican"
                }
            },
            {
                "last_name": "Rubio",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Marco_Rubio.jpg",
                "name_slug": "marco-rubio",
                "first_name": "Marco",
                "party": {
                    "party": "Republican",
                    "party_slug": "republican"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2015/may/07/hillary-clinton/hillary-clinton-says-not-one-gop-presidential-cont/",
        "statement_context": "an appearance at a high school in Las Vegas, Nev.",
        "ruling_date": "2015-05-07T16:29:20",
        "statement": "<p>&quot;Not a single Republican candidate, announced or potential, is clearly and consistently supporting a path to citizenship. Not one.&quot;</p>\r\n"
    },
    {
        "statement_date": "2015-04-13",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Do Iran and the United States disagree on the nuclear deal framework?",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-true.png",
            "ruling_slug": "true",
            "ruling": "True"
        },
        "subject": [
            {
                "subject": "Foreign Policy",
                "subject_slug": "foreign-policy"
            },
            {
                "subject": "Nuclear",
                "subject_slug": "nuclear"
            }
        ],
        "ruling_link_text": "The differences could kill the deal",
        "speaker": {
            "last_name": "Rubio",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Marco_Rubio.jpg",
            "name_slug": "marco-rubio",
            "first_name": "Marco",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2015/may/01/marco-rubio/iran-united-states-disagree-nuclear-deal-framework/",
        "statement_context": "an interview on National Public Radio",
        "ruling_date": "2015-05-01T09:49:46",
        "statement": "<p>&quot;The Iranians are now saying that what we&#39;re saying the deal is and what they understand it to be are two different things.&quot;</p>\r\n"
    },
    {
        "statement_date": "2015-04-25",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Marco Rubio says he is more experienced and qualified than Barack Obama was during presidential run",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-halftrue.png",
            "ruling_slug": "half-true",
            "ruling": "Half-True"
        },
        "subject": [
            {
                "subject": "Candidate Biography",
                "subject_slug": "candidates-biography"
            }
        ],
        "ruling_link_text": "Rubio has more time in office, but Obama had more jobs",
        "speaker": {
            "last_name": "Rubio",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Marco_Rubio.jpg",
            "name_slug": "marco-rubio",
            "first_name": "Marco",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2015/apr/29/marco-rubio/rubio-says-he-more-experienced-and-qualified-obama/",
        "statement_context": "a meeting with the Des Moines Register editorial board",
        "ruling_date": "2015-04-29T11:28:28",
        "statement": "<p>&quot;I&#39;m running for office with much more experience and qualifications than Barack Obama had when he ran.&quot;</p>\r\n"
    },
    {
        "statement_date": "2015-04-19",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "'With certainty' cap-and-trade would wreck the economy, Rubio says",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-false.png",
            "ruling_slug": "false",
            "ruling": "False"
        },
        "subject": [
            {
                "subject": "Cap and Trade",
                "subject_slug": "cap-and-trade"
            },
            {
                "subject": "Climate Change",
                "subject_slug": "climate-change"
            }
        ],
        "ruling_link_text": "Existing programs haven't devastated anything",
        "speaker": {
            "last_name": "Rubio",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Marco_Rubio.jpg",
            "name_slug": "marco-rubio",
            "first_name": "Marco",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2015/apr/23/marco-rubio/rubio-cap-and-trade-would-hurt-economy-might-not-h/",
        "statement_context": "an interview on CBS' Face the Nation",
        "ruling_date": "2015-04-23T17:21:41",
        "statement": "<p>&quot;I can tell you with certainty (cap&nbsp;and&nbsp;trade)&nbsp;would have a devastating impact on our economy.&quot;</p>\r\n"
    },
    {
        "statement_date": "2015-02-27",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Marco Rubio: At least three sectors of the border are 'completely insecure'",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlyfalse.png",
            "ruling_slug": "barely-true",
            "ruling": "Mostly False"
        },
        "subject": [
            {
                "subject": "Homeland Security",
                "subject_slug": "homeland-security"
            },
            {
                "subject": "Immigration",
                "subject_slug": "immigration"
            }
        ],
        "ruling_link_text": "One? Sure. Three? Not backed up",
        "speaker": {
            "last_name": "Rubio",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Marco_Rubio.jpg",
            "name_slug": "marco-rubio",
            "first_name": "Marco",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2015/mar/05/marco-rubio/marco-rubio-least-three-sectors-border-are-complet/",
        "statement_context": "a speech at CPAC",
        "ruling_date": "2015-03-05T10:50:55",
        "statement": "<p>&quot;There are at least three sectors of the border, one in particular, that are just completely insecure.&quot;</p>\r\n"
    },
    {
        "statement_date": "2015-01-13",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Marco Rubio in new book: People on welfare 'lose more in benefits than they would earn in salary'",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlyfalse.png",
            "ruling_slug": "barely-true",
            "ruling": "Mostly False"
        },
        "subject": [
            {
                "subject": "Poverty",
                "subject_slug": "poverty"
            },
            {
                "subject": "Welfare",
                "subject_slug": "welfare"
            }
        ],
        "ruling_link_text": "It pays to work",
        "speaker": {
            "last_name": "Rubio",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Marco_Rubio.jpg",
            "name_slug": "marco-rubio",
            "first_name": "Marco",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2015/jan/14/marco-rubio/new-book-marco-rubio-says-lose-more-benefits-they-/",
        "statement_context": "his book, \"American Dreams\"",
        "ruling_date": "2015-01-14T11:56:56",
        "statement": "<p>&quot;If people work and make more money, they lose more in benefits than they would earn in salary.&quot;</p>\r\n"
    },
    {
        "statement_date": "2015-01-12",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Marco Rubio says college administrators have 'more than doubled over the last 25 years'",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlytrue.png",
            "ruling_slug": "mostly-true",
            "ruling": "Mostly True"
        },
        "subject": [
            {
                "subject": "Education",
                "subject_slug": "education"
            }
        ],
        "ruling_link_text": "Claim gets an A-minus",
        "speaker": {
            "last_name": "Rubio",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Marco_Rubio.jpg",
            "name_slug": "marco-rubio",
            "first_name": "Marco",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2015/jan/12/marco-rubio/marco-rubio-says-college-administrators-have-more-/",
        "statement_context": "a book",
        "ruling_date": "2015-01-12T17:01:58",
        "statement": "<p>Administrative employees at colleges and universities&nbsp;have &quot;more than doubled over the last 25 years, outpacing the growth of students by more than 2 to 1.&quot;</p>\r\n"
    },
    {
        "statement_date": "2014-12-17",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Marco Rubio says Castros, not embargo, reason Cubans don't have Internet",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlytrue.png",
            "ruling_slug": "mostly-true",
            "ruling": "Mostly True"
        },
        "subject": [
            {
                "subject": "Economy",
                "subject_slug": "economy"
            },
            {
                "subject": "Foreign Policy",
                "subject_slug": "foreign-policy"
            },
            {
                "subject": "Technology",
                "subject_slug": "technology"
            }
        ],
        "ruling_link_text": "Castros have kept Cubans from connecting",
        "speaker": {
            "last_name": "Rubio",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Marco_Rubio.jpg",
            "name_slug": "marco-rubio",
            "first_name": "Marco",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2014/dec/19/marco-rubio/marco-rubio-says-castros-not-embargo-reason-cubans/",
        "statement_context": "",
        "ruling_date": "2014-12-19T10:57:40",
        "statement": "<p>&quot;The reason why Cubans don&#39;t have access to 21st century telecommunications &mdash; like smart phones, like access to the Internet &mdash; is because it is illegal in Cuba.&quot;</p>\r\n"
    },
    {
        "statement_date": "2014-12-17",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Marco Rubio says talks with Cuba produced no commitment to democratic reforms",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlytrue.png",
            "ruling_slug": "mostly-true",
            "ruling": "Mostly True"
        },
        "subject": [
            {
                "subject": "Foreign Policy",
                "subject_slug": "foreign-policy"
            },
            {
                "subject": "Human Rights",
                "subject_slug": "human-rights"
            }
        ],
        "ruling_link_text": "Little to nothing on paper",
        "speaker": {
            "last_name": "Rubio",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Marco_Rubio.jpg",
            "name_slug": "marco-rubio",
            "first_name": "Marco",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [
            {
                "last_name": "Obama",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_OBAMA_1.jpg",
                "name_slug": "barack-obama",
                "first_name": "Barack",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2014/dec/18/marco-rubio/marco-rubio-says-talks-cuba-produced-no-commitment/",
        "statement_context": "a press conference",
        "ruling_date": "2014-12-18T18:01:20",
        "statement": "<p>In the U.S. agreement with the Cuban government, &quot;no commitment was made to allowing the establishment of political parties or to even begin the semblance of a transition to a democracy.&quot;</p>\r\n"
    },
    {
        "statement_date": "2014-05-20",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Marco Rubio says surface temperatures on Earth 'have stabilized'",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlyfalse.png",
            "ruling_slug": "barely-true",
            "ruling": "Mostly False"
        },
        "subject": [
            {
                "subject": "Climate Change",
                "subject_slug": "climate-change"
            },
            {
                "subject": "Corrections and Updates",
                "subject_slug": "corrections-and-updates"
            },
            {
                "subject": "Environment",
                "subject_slug": "environment"
            }
        ],
        "ruling_link_text": "There's been a pause, but don't expect it to last",
        "speaker": {
            "last_name": "Rubio",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Marco_Rubio.jpg",
            "name_slug": "marco-rubio",
            "first_name": "Marco",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2014/may/27/marco-rubio/marco-rubio-surface-temperatures-earth-have-st/",
        "statement_context": "an interview with Fox News' Bill O'Reilly",
        "ruling_date": "2014-05-27T14:43:17",
        "statement": "<p>Surface temperatures on Earth &quot;have stabilized.&quot;</p>\r\n"
    },
    {
        "statement_date": "2014-05-11",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Marco Rubio says humans are not causing climate change ",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-false.png",
            "ruling_slug": "false",
            "ruling": "False"
        },
        "subject": [
            {
                "subject": "Climate Change",
                "subject_slug": "climate-change"
            },
            {
                "subject": "Corrections and Updates",
                "subject_slug": "corrections-and-updates"
            },
            {
                "subject": "Energy",
                "subject_slug": "energy"
            },
            {
                "subject": "Environment",
                "subject_slug": "environment"
            },
            {
                "subject": "Science",
                "subject_slug": "science"
            }
        ],
        "ruling_link_text": "97 percent of findings that took a position disagree",
        "speaker": {
            "last_name": "Rubio",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Marco_Rubio.jpg",
            "name_slug": "marco-rubio",
            "first_name": "Marco",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2014/may/13/marco-rubio/marco-rubio-says-humans-are-not-causing-climate-ch/",
        "statement_context": "an interview on ABC's \"This Week\"",
        "ruling_date": "2014-05-13T16:07:55",
        "statement": "<p>Human activity is not &quot;causing these dramatic changes to our climate.&quot;</p>\r\n"
    },
    {
        "statement_date": "2014-04-01",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Rubio says health care law fell short of goal for 30 million signups",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlyfalse.png",
            "ruling_slug": "barely-true",
            "ruling": "Mostly False"
        },
        "subject": [
            {
                "subject": "Health Care",
                "subject_slug": "health-care"
            }
        ],
        "ruling_link_text": "Not the plan for year one",
        "speaker": {
            "last_name": "Rubio",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Marco_Rubio.jpg",
            "name_slug": "marco-rubio",
            "first_name": "Marco",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2014/apr/04/marco-rubio/rubio-says-health-care-law-fell-short-goal-30-mill/",
        "statement_context": "an interview on Fox's 'Hannity'",
        "ruling_date": "2014-04-04T10:13:29",
        "statement": "<p>Says the goal of the Affordable Care Act was to get 30 million people insured, but it only got 7 million.</p>\r\n"
    },
    {
        "statement_date": "2014-03-10",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Facebook meme claims Rand Paul and Marco Rubio have anti-science views on dinosaurs, earth's age",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-pantsonfire.gif",
            "ruling_slug": "pants-fire",
            "ruling": "Pants on Fire!"
        },
        "subject": [
            {
                "subject": "Religion",
                "subject_slug": "religion"
            },
            {
                "subject": "Science",
                "subject_slug": "science"
            }
        ],
        "ruling_link_text": "Yabba dabba doo, this is untrue!",
        "speaker": {
            "last_name": "Facebook posts",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Facebook_icon_1.jpg",
            "name_slug": "facebook-posts",
            "first_name": "",
            "party": {
                "party": "None",
                "party_slug": "none"
            }
        },
        "target": [
            {
                "last_name": "Paul",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Rand_Paul.jpg",
                "name_slug": "rand-paul",
                "first_name": "Rand",
                "party": {
                    "party": "Republican",
                    "party_slug": "republican"
                }
            },
            {
                "last_name": "Rubio",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Marco_Rubio.jpg",
                "name_slug": "marco-rubio",
                "first_name": "Marco",
                "party": {
                    "party": "Republican",
                    "party_slug": "republican"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2014/mar/25/facebook-posts/facebook-meme-claims-rand-paul-and-marco-rubio-hav/",
        "statement_context": "a post from Being Liberal",
        "ruling_date": "2014-03-25T15:35:20",
        "statement": "<p>Says Marco Rubio believes the earth is 9,000 years old and that humans hunted dinosaurs to extinction; says&nbsp; Rand Paul believes the earth is 10,000 years old and God removed dinosaurs &quot;to make space for humans.&quot;</p>\r\n"
    },
    {
        "statement_date": "2014-03-23",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Marco Rubio said Americans increasingly want health law repealed",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlyfalse.png",
            "ruling_slug": "barely-true",
            "ruling": "Mostly False"
        },
        "subject": [
            {
                "subject": "Health Care",
                "subject_slug": "health-care"
            },
            {
                "subject": "Polls and Public Opinion",
                "subject_slug": "polls"
            }
        ],
        "ruling_link_text": "That percentage of voters stayed constant",
        "speaker": {
            "last_name": "Rubio",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Marco_Rubio.jpg",
            "name_slug": "marco-rubio",
            "first_name": "Marco",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2014/mar/25/marco-rubio/marco-rubio-said-americans-increasingly-want-healt/",
        "statement_context": "a video to supporters",
        "ruling_date": "2014-03-25T14:50:48",
        "statement": "<p>&quot;Americans increasingly want (the Affordable Care Act) to be repealed.&quot;</p>\r\n"
    },
    {
        "statement_date": "2014-01-12",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Marco Rubio says Medicaid expansion money 'will go away'",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlyfalse.png",
            "ruling_slug": "barely-true",
            "ruling": "Mostly False"
        },
        "subject": [
            {
                "subject": "Health Care",
                "subject_slug": "health-care"
            }
        ],
        "ruling_link_text": "States never asked to pay more than 10%",
        "speaker": {
            "last_name": "Rubio",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Marco_Rubio.jpg",
            "name_slug": "marco-rubio",
            "first_name": "Marco",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2014/jan/13/marco-rubio/marco-rubio-says-medicaid-expansion-money-will-go-/",
        "statement_context": "comments on CBS' \"Face the Nation\"",
        "ruling_date": "2014-01-13T11:35:03",
        "statement": "<p>&quot;Under Obamacare, when you turn Medicaid over to the states ... the money will be available up front for the expansion for a few years. Then, the money will go away.&quot;</p>\r\n"
    },
    {
        "statement_date": "2014-01-08",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Marco Rubio says marriage 'decreases the probability of child poverty by 82 percent'",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlytrue.png",
            "ruling_slug": "mostly-true",
            "ruling": "Mostly True"
        },
        "subject": [
            {
                "subject": "Children",
                "subject_slug": "children"
            },
            {
                "subject": "Families",
                "subject_slug": "families"
            },
            {
                "subject": "Marriage",
                "subject_slug": "marriage"
            },
            {
                "subject": "Poverty",
                "subject_slug": "poverty"
            }
        ],
        "ruling_link_text": "Accurate, except for a few quibbles",
        "speaker": {
            "last_name": "Rubio",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Marco_Rubio.jpg",
            "name_slug": "marco-rubio",
            "first_name": "Marco",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2014/jan/09/marco-rubio/marco-rubio-says-marriage-decreases-probability-ch/",
        "statement_context": "a speech",
        "ruling_date": "2014-01-09T17:47:15",
        "statement": "<p>Marriage &quot;decreases the probability of child poverty by 82 percent.&quot;</p>\r\n"
    },
    {
        "statement_date": "2013-11-23",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Iranian official called Israel 'rabid dog,' accused U.S. of war crimes, says Rubio",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-true.png",
            "ruling_slug": "true",
            "ruling": "True"
        },
        "subject": [
            {
                "subject": "Foreign Policy",
                "subject_slug": "foreign-policy"
            },
            {
                "subject": "Nuclear",
                "subject_slug": "nuclear"
            }
        ],
        "ruling_link_text": "Right on both counts",
        "speaker": {
            "last_name": "Rubio",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Marco_Rubio.jpg",
            "name_slug": "marco-rubio",
            "first_name": "Marco",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2013/nov/27/marco-rubio/iranian-official-called-israel-rabid-dog-accused-u/",
        "statement_context": "a press release",
        "ruling_date": "2013-11-27T15:19:05",
        "statement": "<p>&quot;Just days ago, Iran&#39;s Supreme Leader (Ali) Khamenei, who will oversee implementation of this agreement, was calling Israel a &#39;rabid dog&#39; and accusing the United States of war crimes.&quot;</p>\r\n"
    },
    {
        "statement_date": "2013-10-20",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Marco Rubio says he never favored a government shutdown and voted to fully fund the government",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlyfalse.png",
            "ruling_slug": "barely-true",
            "ruling": "Mostly False"
        },
        "subject": [
            {
                "subject": "Federal Budget",
                "subject_slug": "federal-budget"
            },
            {
                "subject": "Health Care",
                "subject_slug": "health-care"
            }
        ],
        "ruling_link_text": "Statements and votes undermine his claim",
        "speaker": {
            "last_name": "Rubio",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Marco_Rubio.jpg",
            "name_slug": "marco-rubio",
            "first_name": "Marco",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2013/oct/23/marco-rubio/marco-rubio-says-he-never-favored-government-shutd/",
        "statement_context": "an interview on \"Fox News Sunday\"",
        "ruling_date": "2013-10-23T10:30:27",
        "statement": "<p>&quot;I never was in favor of shutting down the government. &hellip; (I) voted to fund the government fully.&quot;</p>\r\n"
    },
    {
        "statement_date": "2013-08-09",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Group backing Barack Obama says Marco Rubio is a \"climate change denier\"",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlytrue.png",
            "ruling_slug": "mostly-true",
            "ruling": "Mostly True"
        },
        "subject": [
            {
                "subject": "Climate Change",
                "subject_slug": "climate-change"
            },
            {
                "subject": "Environment",
                "subject_slug": "environment"
            },
            {
                "subject": "Science",
                "subject_slug": "science"
            }
        ],
        "ruling_link_text": "He denied it once clearly; other times he's been more cagey",
        "speaker": {
            "last_name": "Organizing for Action",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Obama_logo.jpg",
            "name_slug": "organizing-action",
            "first_name": "",
            "party": {
                "party": "Democrat",
                "party_slug": "democrat"
            }
        },
        "target": [
            {
                "last_name": "Rubio",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Marco_Rubio.jpg",
                "name_slug": "marco-rubio",
                "first_name": "Marco",
                "party": {
                    "party": "Republican",
                    "party_slug": "republican"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2013/aug/16/organizing-action/group-backing-barack-obama-says-marco-rubio-climat/",
        "statement_context": "an email to Obama supporters in Florida",
        "ruling_date": "2013-08-16T14:01:59",
        "statement": "<p>Sen. Marco Rubio &quot;refuses to accept the basic science&quot; on climate change and is &quot;a climate change denier.&quot;</p>\r\n"
    },
    {
        "statement_date": "2013-07-31",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Marco Rubio says union for IRS workers is 'begging' to be let out of Obamacare",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlyfalse.png",
            "ruling_slug": "barely-true",
            "ruling": "Mostly False"
        },
        "subject": [
            {
                "subject": "Health Care",
                "subject_slug": "health-care"
            },
            {
                "subject": "Unions",
                "subject_slug": "unions"
            }
        ],
        "ruling_link_text": "There's a whole lot more to the story",
        "speaker": {
            "last_name": "Rubio",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Marco_Rubio.jpg",
            "name_slug": "marco-rubio",
            "first_name": "Marco",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2013/aug/01/marco-rubio/marco-rubio-says-union-irs-workers-begging-be-let-/",
        "statement_context": "an interview with Fox News' Sean Hannity",
        "ruling_date": "2013-08-01T16:57:57",
        "statement": "<p>&quot;Even the employees&rsquo; union for the IRS -- the very people in charge of enforcing this law -- are begging to be let out from under this law.&quot;</p>\r\n"
    },
    {
        "statement_date": "2013-07-25",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Sen. Marco Rubio says 75% of small businesses say they’ll fire workers or cut hours under Obamacare",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-pantsonfire.gif",
            "ruling_slug": "pants-fire",
            "ruling": "Pants on Fire!"
        },
        "subject": [
            {
                "subject": "Economy",
                "subject_slug": "economy"
            },
            {
                "subject": "Health Care",
                "subject_slug": "health-care"
            },
            {
                "subject": "Jobs",
                "subject_slug": "jobs"
            },
            {
                "subject": "Small Business",
                "subject_slug": "small-business"
            }
        ],
        "ruling_link_text": "Study he cites suggests less than 10 percent",
        "speaker": {
            "last_name": "Rubio",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Marco_Rubio.jpg",
            "name_slug": "marco-rubio",
            "first_name": "Marco",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2013/jul/29/marco-rubio/sen-marco-rubio-says-75-small-businesses-say-theyl/",
        "statement_context": "a FoxNews.com op-ed",
        "ruling_date": "2013-07-29T13:55:41",
        "statement": "<p>Under Obamacare, &quot;75 percent of small businesses now say they are going to be forced to either fire workers or cut their hours.&quot;</p>\r\n"
    },
    {
        "statement_date": "2013-06-16",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Rep. Dana Rohrabacher says Sen. Marco Rubio’s claims differ in Spanish",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-mostlyfalse.png",
            "ruling_slug": "barely-true",
            "ruling": "Mostly False"
        },
        "subject": [
            {
                "subject": "Candidate Biography",
                "subject_slug": "candidates-biography"
            },
            {
                "subject": "Immigration",
                "subject_slug": "immigration"
            }
        ],
        "ruling_link_text": "Same bill in any language",
        "speaker": {
            "last_name": "Rohrabacher",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Rohrabacher.png",
            "name_slug": "dana-rohrabacher",
            "first_name": "Dana",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [
            {
                "last_name": "Rubio",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Marco_Rubio.jpg",
                "name_slug": "marco-rubio",
                "first_name": "Marco",
                "party": {
                    "party": "Republican",
                    "party_slug": "republican"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2013/jun/20/dana-rohrabacher/rep-dana-rohrabacher-says-sen-marco-rubios-claims-/",
        "statement_context": "an interview on WND Radio",
        "ruling_date": "2013-06-20T15:05:30",
        "statement": "<p>\r\n\tOn immigration reform, Marco Rubio &quot;all along has been saying, &#39;We have to have border security first&#39; &quot; and then &quot;he gets on Spanish TV, he ends up saying, &#39;No, no. That will never get in the way.&#39; &quot;</p>\r\n"
    },
    {
        "statement_date": "2013-04-30",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Marco Rubio says Obama shows ‘reluctance’ to enforce immigration law",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-halftrue.png",
            "ruling_slug": "half-true",
            "ruling": "Half-True"
        },
        "subject": [
            {
                "subject": "Immigration",
                "subject_slug": "immigration"
            }
        ],
        "ruling_link_text": "Reluctance, or different priorities?",
        "speaker": {
            "last_name": "Rubio",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Marco_Rubio.jpg",
            "name_slug": "marco-rubio",
            "first_name": "Marco",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [
            {
                "last_name": "Obama",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_OBAMA_1.jpg",
                "name_slug": "barack-obama",
                "first_name": "Barack",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2013/may/07/marco-rubio/marco-rubio-says-obama-shows-reluctance-enforc/",
        "statement_context": "a Fox News interview",
        "ruling_date": "2013-05-07T11:00:27",
        "statement": "<p>\r\n\t&quot;We are dealing with an administration that, quite frankly, has shown a reluctance to enforce the immigration law.&quot;</p>\r\n"
    },
    {
        "statement_date": "2013-04-17",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Immigrants would get free cell phones under new proposal, bloggers claim",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-false.png",
            "ruling_slug": "false",
            "ruling": "False"
        },
        "subject": [
            {
                "subject": "Immigration",
                "subject_slug": "immigration"
            },
            {
                "subject": "Welfare",
                "subject_slug": "welfare"
            }
        ],
        "ruling_link_text": "Twisting the meaning of a border security program",
        "speaker": {
            "last_name": "Bloggers",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/mugs/mug-bloggers.jpg",
            "name_slug": "blog-posting",
            "first_name": "",
            "party": {
                "party": "None",
                "party_slug": "none"
            }
        },
        "target": [
            {
                "last_name": "Rubio",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Marco_Rubio.jpg",
                "name_slug": "marco-rubio",
                "first_name": "Marco",
                "party": {
                    "party": "Republican",
                    "party_slug": "republican"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2013/apr/19/blog-posting/immigrants-would-get-free-cell-phones-under-new-pr/",
        "statement_context": "blog posts on the Internet",
        "ruling_date": "2013-04-19T14:16:23",
        "statement": "<p>\r\n\tProposed immigration legislation would give new immigrants &quot;a taxpayer-funded cellular phone.&quot;</p>\r\n"
    },
    {
        "statement_date": "2013-04-14",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Sen. Marco Rubio says immigration bill is not amnesty",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-halftrue.png",
            "ruling_slug": "half-true",
            "ruling": "Half-True"
        },
        "subject": [
            {
                "subject": "Immigration",
                "subject_slug": "immigration"
            }
        ],
        "ruling_link_text": "Depends on your definition of amnesty",
        "speaker": {
            "last_name": "Rubio",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Marco_Rubio.jpg",
            "name_slug": "marco-rubio",
            "first_name": "Marco",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [],
        "statement_url": "/truth-o-meter/statements/2013/apr/17/marco-rubio/sen-marco-rubio-says-immigration-bill-not-amnesty/",
        "statement_context": "an interview on \"Fox News Sunday\"",
        "ruling_date": "2013-04-17T11:45:25",
        "statement": "<p dir=\"ltr\" id=\"internal-source-marker_0.266222978980711\" style=\"line-height:1.15;margin-top:0pt;margin-bottom:0pt;\">\r\n\tThe immigration proposal from the Gang of Eight &quot;is not amnesty.&quot;</p>\r\n"
    },
    {
        "statement_date": "2013-03-31",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Mark Kelly says 94 percent of Floridians support universal background checks",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-true.png",
            "ruling_slug": "true",
            "ruling": "True"
        },
        "subject": [
            {
                "subject": "Guns",
                "subject_slug": "guns"
            }
        ],
        "ruling_link_text": "Sunshine State supports gun sale checks ",
        "speaker": {
            "last_name": "Kelly",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/MarkKelly.jpg",
            "name_slug": "mark-kelly",
            "first_name": "Mark",
            "party": {
                "party": "Newsmaker",
                "party_slug": "newsmaker"
            }
        },
        "target": [
            {
                "last_name": "Rubio",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Marco_Rubio.jpg",
                "name_slug": "marco-rubio",
                "first_name": "Marco",
                "party": {
                    "party": "Republican",
                    "party_slug": "republican"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2013/apr/02/mark-kelly/mark-kelly-says-94-percent-floridians-support-univ/",
        "statement_context": "an interview on 'Fox News Sunday'",
        "ruling_date": "2013-04-02T17:21:45",
        "statement": "<p>\r\n\tSays &quot;94 percent of (Marco Rubio&#39;s) constituents support a universal background check.&quot;</p>\r\n"
    },
    {
        "statement_date": "2013-02-12",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Marco Rubio says sequester was Obama’s idea",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-halftrue.png",
            "ruling_slug": "half-true",
            "ruling": "Half-True"
        },
        "subject": [
            {
                "subject": "Federal Budget",
                "subject_slug": "federal-budget"
            },
            {
                "subject": "Military",
                "subject_slug": "military"
            }
        ],
        "ruling_link_text": "Obama opposes the cuts",
        "speaker": {
            "last_name": "Rubio",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Marco_Rubio.jpg",
            "name_slug": "marco-rubio",
            "first_name": "Marco",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [
            {
                "last_name": "Obama",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_OBAMA_1.jpg",
                "name_slug": "barack-obama",
                "first_name": "Barack",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2013/feb/12/marco-rubio/marco-rubio-says-sequester-was-obamas-idea/",
        "statement_context": "the Republican response to the State of the Union",
        "ruling_date": "2013-02-12T23:51:16",
        "statement": "<p>\r\n\tMilitary spending cuts, known as the sequester, were President Barack Obama&rsquo;s idea.</p>\r\n"
    },
    {
        "statement_date": "2013-01-17",
        "statement_type": {
            "statement_type": "Claim"
        },
        "ruling_headline": "Marco Rubio says after D.C. passed gun laws, 'violence skyrocketed'",
        "ruling": {
            "canonical_ruling_graphic": "http://static.politifact.com.s3.amazonaws.com/rulings/tom-halftrue.png",
            "ruling_slug": "half-true",
            "ruling": "Half-True"
        },
        "subject": [
            {
                "subject": "Crime",
                "subject_slug": "crime"
            },
            {
                "subject": "Criminal Justice",
                "subject_slug": "criminal-justice"
            },
            {
                "subject": "Drugs",
                "subject_slug": "drugs"
            },
            {
                "subject": "Government regulation",
                "subject_slug": "government-regulation"
            },
            {
                "subject": "Guns",
                "subject_slug": "guns"
            },
            {
                "subject": "Public Safety",
                "subject_slug": "public-safety"
            }
        ],
        "ruling_link_text": "Violence rose and fell, rose and fell",
        "speaker": {
            "last_name": "Rubio",
            "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/Marco_Rubio.jpg",
            "name_slug": "marco-rubio",
            "first_name": "Marco",
            "party": {
                "party": "Republican",
                "party_slug": "republican"
            }
        },
        "target": [
            {
                "last_name": "Obama",
                "canonical_photo": "http://static.politifact.com.s3.amazonaws.com/politifact/mugs/NYT_OBAMA_1.jpg",
                "name_slug": "barack-obama",
                "first_name": "Barack",
                "party": {
                    "party": "Democrat",
                    "party_slug": "democrat"
                }
            }
        ],
        "statement_url": "/truth-o-meter/statements/2013/jan/28/marco-rubio/marco-rubio-says-after-dc-passed-gun-laws-viol/",
        "statement_context": "an interview on Fox News",
        "ruling_date": "2013-01-28T16:28:26",
        "statement": "<p>\r\n\t&quot;Washington, D.C., had some of the strictest gun laws in the country. And when they passed them, violence skyrocketed.&quot;</p>\r\n"
    }
]
rubio=rubio.filter(function(item){return speakerCheck(item, "marco-rubio")});
