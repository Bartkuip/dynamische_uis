var image = document.getElementById("image");
var bullet = document.getElementById("bullet");
image.style.backgroundPosition = `164px 0px`;
image.style.left = "0px"
image.style.top = "0px"


document.onkeydown = checkKey;
image.style.transform = "rotate(90deg)"


function checkKey(e) {
	console.log("key nr = " + e.keyCode);
    e = e || window.event;

    const diff = 10;
    const breach = 84;
    
    let position = parseInt(image.style.backgroundPosition);
    let left = parseInt(image.style.left);
    let top = parseInt(image.style.top);

    if(e.keyCode == 32){
    	console.log("spacebar");
    } else if (e.keyCode == '38') {  // up arrow
        console.log("Up arrow");
        image.style.transform = "rotate(0deg)"
        top -= diff
        image.style.top = top.toString() + 'px'

        position += breach
        image.style.backgroundPosition = position.toString() + 'px 0px'
    } else if (e.keyCode == '40') { // down arrow
        console.log("down arrow");
        image.style.transform = "rotate(180deg)"
        top += diff
        image.style.top = top.toString() + 'px'

        position += breach
        image.style.backgroundPosition = position.toString() + 'px 0px'
    } else if (e.keyCode == '37') { // left arrow
    	console.log("left arrow");
        image.style.transform = "rotate(270deg)"
        left -= diff
        image.style.left = left.toString() + 'px'

        position += breach
        image.style.backgroundPosition = position.toString() + 'px 0px'
    } else if (e.keyCode == '39') {   // right arrow
    	console.log("right arrow");
        image.style.transform = "rotate(90deg)"
        left += diff
        image.style.left = left.toString() + 'px'

        position += breach
        image.style.backgroundPosition = position.toString() + 'px 0px'
    	 // check goed de rupsband
    }
}