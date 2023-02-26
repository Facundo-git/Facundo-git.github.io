var a;
function show_hide_datos(){
    if(a==1){
        document.getElementById("datos").style.display="none";
        document.getElementById("boton_datos").innerHTML="&#9745;"
        return a=0;
    }
    else{
        document.getElementById("datos").style.display="block";
        document.getElementById("boton_datos").innerHTML="&#9746;"
        return a=1;
    }
}
var b;
function show_hide_idiomas(){
    if(b==1){
        document.getElementById("idiomas").style.display="none";
        document.getElementById("boton_idiomas").innerHTML="&#9745;"
        return b=0;
    }
    else{
        document.getElementById("idiomas").style.display="block";
        document.getElementById("boton_idiomas").innerHTML="&#9746;"
        return b=1;
    }
}
var c;
function show_hide_contactos(){
    if(c==1){
        document.getElementById("contactos").style.display="none";
        document.getElementById("boton_contactos").innerHTML="&#9745;"
        return c=0;
    }
    else{
        document.getElementById("contactos").style.display="block";
        document.getElementById("boton_contactos").innerHTML="&#9746;"
        return c=1;
    }
}
var d;
function show_hide_formacion(){
    if(d==1){
        document.getElementById("formacion").style.display="none";
        document.getElementById("boton_formacion").innerHTML="&#9745;"
        return d=0;
    }
    else{
        document.getElementById("formacion").style.display="block";
        document.getElementById("boton_formacion").innerHTML="&#9746;"
        return d=1;
    }
}
var e;
function show_hide_interes(){
    if(e==1){
        document.getElementById("interes").style.display="none";
        document.getElementById("boton_interes").innerHTML="&#9745;"
        return e=0;
    }
    else{
        document.getElementById("interes").style.display="block";
        document.getElementById("boton_interes").innerHTML="&#9746;"
        return e=1;
    }
}