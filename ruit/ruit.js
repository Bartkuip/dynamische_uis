userInput = parseInt(prompt("Hoeveel?"))
line='';

for (loop = 1; loop <= userInput; loop++) {
    for(number=1; number <=loop; number++) {
        if(number == 1){
            line += number;
        } else {
            line+= '-' + number;
        } 
    }
    line+= "<br>";
}

for (loop = userInput-1; loop >= 1; loop--) {
    for(number=1; number <=loop; number++) {
        if(number == 1){
            line += number;
        } else {
            line+='-'+ number;
        }
    }
    line+= "<br>";
}

document.getElementById('diamond').innerHTML=line;

