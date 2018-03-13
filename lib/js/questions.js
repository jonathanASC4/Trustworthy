//get 10 statements from data
function display(polObj, i){
    var name = polObj.speaker.first_name + " " + polObj.speaker.last_name;
    var statement = polObj.statement;
    rulings.push(polObj.ruling.ruling);

    var redGreen = $("<div />");
    redGreen.addClass("number"+i);

    var big = $("<div />");
    big.addClass("claim");
    $("body").append(big);
    var h1 = $("<h1 />");
    h1.text((i+1) + ": " + name + " said:");
    big.append(h1);
    big.append(statement);

    var buttons = $("<div />");
    buttons.addClass("select");
    big.append(buttons);

    var _true = $("<button />");
    _true.text("True");
    var _false = $("<button />");
    _false.text("False");
    buttons.append(_true);
    buttons.append(_false);

    _true.click(function(){
        polObj["choice"] = true;
        _true.css({"background-color": "#999999", "color": "black"});
        _false.css({"background-color": "#000000", "color": "white"});
        reveal(statements);
    })
    _false.click(function(){
        polObj["choice"] = false;
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
        superarray = obama.concat(hillary, bernie);
    }
    if (party == "R"){
        superarray = trump.concat(pence, rubio);
    }
    for (i=0; i<10; i++){
        statements.push(superarray.splice(Math.floor(Math.random()*superarray.length), 1)[0]);
    }
    $("button").remove();
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
    for(var i=0; i<statements.length; i++){
        if(typeof statements[i].choice !== 'undefined'){
            //console.log("yes")
        } else{
            return false;
        }
    }
    return true;
}

function reveal(statements){
    if(check(statements)){
        $("body").append("<ol></ol>");
        $(".select").hide();
        $(".number"+i).css("border", "5px solid red");
        for(var i=0; i<statements.length; i++){
            $("ol").append("<li>" + rulings[i] + "</li>");
            //if(statements[i].choice == true)
            //$(".number"+i).css("border", "5px solid red");
        }
    }
}