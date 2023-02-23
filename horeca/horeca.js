var test = true
var drank = {}
var drank = {"bier": {name: "bier", price : 2.30, amount: 0}, "wijn": {name: "wijn", price: 4.50, amount: 0}, "fris": {name: "fris", price: 2.00, amount: 0}}
//drank.bier.amount += 
//drank['bier']['amount'] += parseInt()


while (test) {
    userInput = prompt("Wat wilt u bestellen?").toLowerCase();
    if (userInput in drank){
        orderAmount = parseInt(prompt("Hoeveel " + userInput + " wilt u?"))
        drank.userInput.amount += orderAmount
    } else if(userInput == "stop"){
        var test = false;
    } else {
        console.log("Dit ken ik niet.");
    }
}
console.log("Bonnetje:")
console.log(drank); 
/*for (var key in drank) {
    console.log(drank); 

} */
