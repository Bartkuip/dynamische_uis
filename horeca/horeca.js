var test = true
var drank = {}
while (test) {
    userInput = prompt("Wat wilt u bestellen?").toLowerCase();
    //userInput.toLowerCase().includes("bier", "wijn", "fris") werkt niet :( )
    if (userInput == "bier" || userInput == "wijn" || userInput == "fris"){
        if (!(userInput in drank)){
            orderAmount = parseInt(prompt("Hoeveel " + userInput + " wilt u?"))
            drank[userInput] = orderAmount
        } else {
            orderAmount = parseInt(prompt("Hoeveel " + userInput + " wilt u?"))
            drank[userInput] += orderAmount
        }    
    } else if(userInput == "stop"){
        var test = false;
    } else {
        console.log("Dit ken ik niet.");
    }
}
console.log("Bonnetje:")
for (var key in drank) {
    console.log(drank[key] + "x " + key); 
}
