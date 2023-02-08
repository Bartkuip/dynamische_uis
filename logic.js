console.log('Nu zitten we in de logic');


function clickedButton(event){
    console.log('Clicked button');

    var name = prompt("wat is je naam?")

    var div = document.getElementById("result")
    div.innerHTML = 'Hallo vanuit de button ' + name;
    div.classList.toggle('clicked')
}

function hoverButton(event){
    console.log('Hovered button')
}


button = document.getElementById("start");
button.onclick = clickedButton;
button.onmouseover = hoverButton;

//console.dir(button);
// 8clickedButton(1);