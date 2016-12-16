

    

    function openNav(a) {
        if (a == 1) { document.getElementById("video-objekt").innerHTML = '<iframe id="film" class="videoWrapper-iframe" src="https://www.youtube.com/embed/pX9n3nMLPR8" frameborder="0" allowfullscreen></iframe>' }
        else if (a == 2) { document.getElementById("video-objekt").innerHTML = '<iframe class="videoWrapper-iframe" src="https://www.youtube.com/embed/oCs7-fMNqzM" frameborder="0" allowfullscreen></iframe>' }
        else if (a == 3) { document.getElementById("video-objekt").innerHTML = '<iframe class="videoWrapper-iframe" src="https://www.youtube.com/embed/Mprwljl7vh0" frameborder="0" allowfullscreen></iframe>' }
        else { document.getElementById("video-objekt").innerHTML = '<iframe class="videoWrapper-iframe" src="https://www.youtube.com/embed/L1vlK2o7fwg" frameborder="0" allowfullscreen></iframe>' }
        document.getElementById("myNav").style.width = "100%";
        document.getElementById("homeIcon").style.visibility = "hidden";
        document.getElementById("backIcon").style.visibility = "hidden";
        $("body").css("overflow", "hidden");

    }

function closeNav() {
    
    document.getElementById("video-objekt").innerHTML = "";
    document.getElementById("myNav").style.width = "0%";
    document.getElementById("homeIcon").style.visibility = "visible";
    document.getElementById("backIcon").style.visibility = "visible";
   
    $("body").css("overflow", "auto");
  
}

