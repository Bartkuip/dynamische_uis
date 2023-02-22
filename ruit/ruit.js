userInput = parseInt(prompt("Hoeveel?"))
line='';

for (loop = 1; loop <= userInput; loop++) {
    for(left=1; left <=loop; left++) {
        if(left == 1){
            line += left;
        } else {
            line+= '-' + left;
        } 
    }
    line+= "<br>";
}

for (loop = userInput-1; loop >= 1; loop--) {
    for(left=1; left <=loop; left++) {
        if(left == 1){
            line += left;
        } else {
            line+='-'+ left;
        }
    }
    line+= "<br>";
}

document.getElementById('diamond').innerHTML=line;

