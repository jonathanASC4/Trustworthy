//get 10 statements from data
var statements = [];
var select1 = Math.round(Math.random(3));
var select2;

for (var i=0; i<10; i++){
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