/**
$.ajax({
    url: 'https://randomuser.me/api/',
    dataType: 'json',
    success: function(data) {
      console.log(data);
    }
  });
  const obj = JSON.parse(resultados);
  console.log(obj);
  document.getElementById("demo").innerHTML = "Nombre: " +obj.nombre+" Edad: "+obj.edad+" Ciudad: "+obj.ciudad;

document.getElementById("metodos").onclick=function(){
  if( Element.getAttribute(a)="0"){
    console.log("Se muestran los matodos de contacto");
    document.getElementById("metodos").style="/*display: none;";
    document.getElementById("metodos").a="1";
  }else{
    console.log("Se ocultan los matodos de contacto");
    document.getElementById("metodos").style.display="none";
    document.getElementById("metodos").a="0";
  }
}
document.getElementById("boton_metodos").addEventListener("click",function(){
  console.log("si ando culiado")
  if(document.getElementById("metodos").a="0"){
    document.getElementById("metodos").removeAttribute("hidden");
    console.log("se muestran los metodos de contacto")
  }else{
    document.getElementById("metodos").setAttribute("hidden")
    console.log("se muestran los metodos de contacto")
  }
})
document.getElementById("boton_metodos").addEventListener("click",function(){
  console.log("se muestran los metodos de contacto");
  document.getElementById("metodos").removeAttribute("style");
})
/*