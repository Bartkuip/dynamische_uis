color = ["red", "purple", "blue", "black"]

for(let i = 1; i< 31; i++){
    let button = document.createElement('button');
    button.innerText= i;
    button.setAttribute('onclick', 'testFunction(this)') // of ipv van i this gebruiken
    document.querySelector('#container').appendChild(button);

}

function testFunction(button){
    buttonColor = button.style.backgroundColor;
    colorIndex = color.indexOf(buttonColor);
    button.style.backgroundColor = color[0];
    if(buttonColor == color[0]){
        button.style.backgroundColor = color[1]; 
    }else if(buttonColor == color[1]){
        button.style.backgroundColor = color[2];
    }else if(buttonColor == color[2]){
        button.style.backgroundColor = color[3];
    } else if(buttonColor == color[3]) {
        button.remove()
    }
}

// lijst maken met alle kleuren, index opvragen van de kleur
