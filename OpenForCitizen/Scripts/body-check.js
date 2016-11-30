function check(x, y) {
    var Part = "Välj en kroppsdel";
    if ((x >= 0.25 && y >= 0) && (x <= 0.33 && y <= 0.14)) {            //checks frontside head
        Part = "Huvud";
    }
    if ((x >= 0.67 && y >= 0) && (x <= 0.745 && y <= 0.11)) {           //Checks backside head
        Part = "Baksida huvud";
    }
    if ((x >= 0.24 && y >= 0.325) && (x <= 0.34 && y <= 0.467)) {       //Checks stomach
        Part = "Mage";
    }
    if ((x >= 0.23 && y >= 0.225) && (x <= 0.35 && y <= 0.3)) {           //Checks chest
        Part = "Bröst";
    }



    return Part;
}

function getImageCoords(event, img) {
    var posX = event.offsetX ? (event.offsetX) : event.pageX - img.offsetLeft;
    var posY = event.offsetY ? (event.offsetY) : event.pageY - img.offsetTop;
    var width = img.width;
    var height = img.height;
    var pX = posX / width;
    var pY = posY / height;
    var coords = "X: " + posX + ", Y coords: " + posY + "<br>X%: " + pX + ", Y%: " + pY;
    document.getElementById("client").innerHTML =coords;
    document.getElementById("BPart").innerHTML = check(pX, pY);
}