var test = true
var drank = {"bier": {name: "bier", price : 2.30, amount: 0}, "wijn": {name: "wijn", price: 4.50, amount: 0}, "fris": {name: "fris", price: 2.00, amount: 0}}

while (test) {
    userInput = prompt("Wat wilt u bestellen?").toLowerCase();
    if (userInput in drank){
        orderAmount = parseInt(prompt("Hoeveel " + userInput + " wilt u?"))
        drank[userInput].amount += orderAmount
    } else if(userInput == "stop"){
        var test = false;
    } else {
        console.log("Dit ken ik niet.");
    }
}
console.log("Bonnetje:");
console.log(drank.bier.amount + "x bier: " + Math.round(drank.bier.amount * drank.bier.price) + " euro."); 
console.log(drank.wijn.amount + "x wijn: " + Math.round(drank.wijn.amount * drank.wijn.price) + " euro."); 
console.log(drank.fris.amount + "x fris: " + Math.round(drank.fris.amount * drank.fris.price) + " euro.");
console.log("Totaal bedrag is: " + drank.bier.price + drank.wijn.price + drank.fris.price);
