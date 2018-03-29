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
        reveal(statements);
    })
    _false.click(function(){
        polObj["choice"] = false;
        polObj["answer"] = polObj.choice == (polObj.ruling.ruling == "True" || polObj.ruling.ruling == "Mostly True" || polObj.ruling.ruling == "Half-True");
        _false.css({"background-color": "#999999", "color": "black"});
        _true.css({"background-color": "#000000", "color": "white"});
        reveal(statements);
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
    return statements;
}

//returns true if every statement has a key called "choice"
//look up array method ".every()"
//when true or false is clicked, it hides the buttons div (look up hide method)
function check(statements){
    return statements.every(function(item){
        return (item.choice !== undefined);
    })
    // for(var i=0; i<statements.length; i++){
    //     if(!(typeof statements[i].choice !== 'undefined')){
    //         return false;
    //     }
    // }
    // return true;
}

function reveal(statements){
    if(check(statements)){
        $("body").append("<ol></ol>");
        $(".select").hide();
        //$(".number"+i).css("border", "5px solid red");
        for(var i=0; i<statements.length; i++){
            $("ol").append("<li>" + rulings[i] + "</li>");
            if(!statements[i].answer){
                $("#number"+i).css("border", "5px solid red");
            }
            //if(statements[i].choice == true)
            //$(".number"+i).css("border", "5px solid red");
        }
    }
}