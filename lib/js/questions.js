//get 10 statements from data
function display(polObj){
    var name = polObj.speaker.first_name + " " + polObj.speaker.last_name;
    var statement = polObj.statement;
    rulings.push(polObj.ruling.ruling);

    var big = $("<div />");
    big.addClass("claim");
    $("body").append(big);
    var h1 = $("<h1 />");
    h1.text(name);
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

    big.css({"padding-left": "20px", "padding-right": "20px", "padding-bottom": "10px", "border": "5px solid black", "border-radius": "20px",
    "margin": "20px"});
    //buttons.css({"margin": "0 auto"});

    _true.click(function(){
        polObj["choice"] = true;
        if (check(statements)){
            $(".select").hide();
            for(var i=0; i<statements.length; i++){
                $("body").append("<p>"+rulings[i]+"</p>");
            }
        }
    })
    _false.click(function(){
        polObj["choice"] = false;
        if (check(statements)){
            $(".select").hide();
        }
        for(var i=0; i<statements.length; i++){
            $("body").append("<p>"+rulings[i]+"</p>");
        }
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
        display(statements[i]);
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

