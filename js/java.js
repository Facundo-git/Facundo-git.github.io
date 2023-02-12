var a;
function show_hide_datos(){
    if(a==1){
        document.getElementById("datos").style.display="block";
        return a=0;
    }
    else{
        document.getElementById("datos").style.display="none";
        return a=1;
    }
}
var b;
function show_hide_idiomas(){
    if(b==1){
        document.getElementById("idiomas").style.display="block";
        return b=0;
    }
    else{
        document.getElementById("idiomas").style.display="none";
        return b=1;
    }
}
var c;
function show_hide_contactos(){
    if(c==1){
        document.getElementById("contactos").style.display="block";
        return c=0;
    }
    else{
        document.getElementById("contactos").style.display="none";
        return c=1;
    }
}
var d;
function show_hide_formacion(){
    if(d==1){
        document.getElementById("formacion").style.display="block";
        return d=0;
    }
    else{
        document.getElementById("formacion").style.display="none";
        return d=1;
    }
}
var e;
function show_hide_interes(){
    if(e==1){
        document.getElementById("interes").style.display="block";
        return e=0;
    }
    else{
        document.getElementById("interes").style.display="none";
        return e=1;
    }
}