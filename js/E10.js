window.onload = function() {
    var info = document.getElementById("informacion");
    
    var enlaces = document.getElementsByTagName("a");
    info.innerHTML = "Numero de enlaces = " + enlaces.length;

    var mensaje = "El penultimo enlace apunta a: " + enlaces[enlaces.length - 2].href;

    info.innerHTML = info.innerHTML + "<br/>" + mensaje;

    var contador=0;
    for(var i=0; i<enlaces.length; i++)
        if(enlaces[i].href == "http://google.com" || enlaces [i].href == "http://google.com/" )
        contador++;

    info.innerHTML = info.innerHTML + "<br/>" + contador + " enlaces apuntan a: http://google.com" ;

    var parrafos = document.getElementsByTagName("p");
    enlaces = parrafos[2].getElementsByTagName("a"); 

    info.innerHTML = info.innerHTML + "<br/>" + "Numero de enlaces del tercer parrafo = " + enlaces.length;
}
