let uitleg = "In een parkeergarage passen 80 auto's op de begane grond en 120 op een verdieping.\n"+
"Vraag het gewenste aantal auto's in de garage en bereken het aantal verdiepingen wat je nodig hebt.";

alert(uitleg);
let gewenste_aantal_autos = parseInt(prompt("Hoeveel autos wilt u kwijt in de parkeergarage?"));
// 
if (gewenste_aantal_autos > 80){
    floors = Math.ceil((gewenste_aantal_autos - 80) / 120);
    var antwoord = "U heeft" + floors + "verdieping(en) nodig";
} else {
    var antwoord = "Je hebt geen extra verdiepingen nodig, alleen de begaande grond.";
};





document.getElementById("antwoord").innerText = antwoord;
console.log("U heeft" + floors + "verdieping(en) nodig")
alert("U heeft" + floors + "verdieping(en) nodig")
