var test = true
var drank = {"bier": {name: "bier", price : 2.30, amount: 0}, "wijn": {name: "wijn", price: 4.50, amount: 0}, "fris": {name: "fris", price: 2.00, amount: 0}}
var drankBon = {}

while (test){
    drankInput = prompt("Wat wilt u bestellen?").toLowerCase();
    if (drankInput in drank){
        amountInput = parseInt(prompt("Hoeveel " + drankInput + " wilt u?"))
        drinkHandler(drankInput, amountInput)
    } else if (drankInput == "stop") {
        var test = false
    } else {
        alert("Dit drankje hebben wij niet.")
    }
}
function drinkHandler(drink, amount){
    console.log("test")
}

//* while (test) {
//    
//    if (userInput in drank){
//        orderAmount = parseInt(prompt("Hoeveel " + userInput + " wilt u?"))
//        drank[userInput].amount += orderAmount
//    } else if(userInput == "stop"){
//        var test = false;
//    } else {
//        console.log("Dit hebben wij niet..");
//    }
//}
//totaal = drank.bier.price * drank.bier.amount + drank.wijn.price * drank.wijn.amount + drank.fris.price * drank.fris.amount.toFixed(2)
//console.log("Bonnetje:");
//console.log(drank.bier.amount + "x bier: " + drank.bier.amount * drank.bier.price + " euro."); 
//console.log(drank.wijn.amount + "x wijn: " + drank.wijn.amount * drank.wijn.price + " euro."); 
//console.log(drank.fris.amount + "x fris: " + drank.fris.amount * drank.fris.price + " euro.");
//console.log("Totaal prijs is: " + totaal.toFixed(2) + " euro.") 