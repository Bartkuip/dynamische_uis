var test = true
orderList = ""
drank = {bier: 12, wijn: 2}
while (test) {
    userInput = prompt("Wat wilt u bestellen?");
    if(userInput == "bier" || userInput == "wijn" || userInput == "fris"){
        orderAmount = parseInt(prompt("Hoeveel " + userInput + " wilt u?"))
        orderList += " " + userInput + " " + orderAmount
    } else if(userInput == "stop"){
        var test = false;
    } else {
        console.log("Dit ken ik niet.");
    }
    
    console.log(orderList);
}


//if (!('water' in drank)){
//    drank['water'] = input van de user
//}