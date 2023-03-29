active = true
var drank = {"bier": {name: "bier", price : 2, amount: 0}, "wijn": {name: "wijn", price: 4, amount: 0}, "fris": {name: "fris", price: 3, amount: 0}}

while (active) {
    userInput = prompt("Wat wilt u bestellen?").toLowerCase();
    drankSelect(userInput)
}
function drankSelect(drankInput){
    if (drankInput in drank){
        orderAmount = parseInt(prompt("Hoeveel " + drankInput + " wilt u?"))
        drank[drankInput].amount += orderAmount
    } else if(drankInput == "stop"){
        drankReceipt()
        active = false;
    } else {
        console.log("Dit hebben wij niet..");
    }   
}

function drankReceipt(){
    totaal = drank.bier.price * drank.bier.amount + drank.wijn.price * drank.wijn.amount + drank.fris.price * drank.fris.amount
    console.log("Bonnetje:");
    if (drank.bier.amount > 0){
    console.log(drank.bier.amount + "x bier: " + drank.bier.amount * drank.bier.price + " euro.");
    }
    if(drank.wijn.amount > 0){
    console.log(drank.wijn.amount + "x wijn: " + drank.wijn.amount * drank.wijn.price + " euro.");
    }
    if(drank.fris.amount > 0){
    console.log(drank.fris.amount + "x fris: " + drank.fris.amount * drank.fris.price + " euro.");
    }
    console.log("Totaal prijs is: " + totaal.toFixed(2) + " euro.")
}