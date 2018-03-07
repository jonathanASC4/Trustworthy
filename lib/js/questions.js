//get 10 statements from data
function display(polObj){
    
    var name = polObj.speaker.first_name + " " + polObj.speaker.last_name;
    console.log(name);
    var statement = polObj.statement;
    console.log(statement);
    var ruling = polObj.ruling.ruling;
    console.log(ruling);
    return ["<p>"+name+"</p>", statement, "<p>"+ruling+"</p>"];
}

function getQ(party){
    var superarray = [];
    var statements = [];
    if (party == "D"){
        superarray = obama.concat(hillary, bernie);
    }
    if (party == "R"){
        superarray = trump.concat(pence, rubio);
    }
    for (i=0; i<10; i++){
        statements.push(superarray.splice(Math.floor(Math.random()*superarray.length), 1)[0]);
    }
    console.log(statements);
    for (var i=0; i<10; i++){
        $("body").append(display(/*"<p>"+*/statements[i])[0]/*+"</p>"*/);
        $("body").append(display(statements[i])[1]);
        $("body").append(display(/*"<p>"+*/statements[i])[2]/*+"</p>"*/);
    }
    $("button").remove();
    return statements;
}


/*for (var i=0; i<10; i++){
        if (select1 == 0){
            select2 = Math.round(Math.random(bernie.length));
            statements.push(bernie[select2]);
        } else if (select1 == 1){
            select2 = Math.round(Math.random(obama.length));
            statements.push(obama[select2]);
        } else {
            select2 = Math.round(Math.random(hillary.length));
            statements.push(hillary[select2]);
    }
}
*/