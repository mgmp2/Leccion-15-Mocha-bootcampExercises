
var chicas = [
                  { nombre : "Meche", apellido : "Zubieta", promo : "1ra. Promoción", estado : "Trabajando" },
                  { nombre : "Arabela", apellido : "Rojas", promo : "2da. Promoción", estado : "Trabajando" },
                  { nombre : "Maria", apellido : "Rosan", promo : "2da. Promoción", estado : "Trabajando" },
                  { nombre : "Guadalupe", apellido : "Racio", promo : "3ra. Promoción", estado : "Trabajando" },
                  { nombre : "Sara", apellido : "Casa", promo : "3ra. Promoción", estado : "Trabajando" },
                  { nombre : "Daniella", apellido : "Duran", promo : "4ta. Promoción", estado : "Trabajando" },
                  { nombre : "Michelle", apellido : "Seguil", promo : "5ta. Promoción", estado : "Trabajando" },
                  { nombre : "Diana", apellido : "Navarro", promo : "5ta. Promoción", estado : "Trabajando" }
                  ];





    chicas.forEach(function(e){ document.write("<div class='coder'><p>Nombre: "   + e.nombre  + "</p>"+
                                                                  		"<p>Apellido: " + e.apellido+ "</p>"+
                                                                  		"<p>Promoción: "+ e.promo   + "</p>"+
                                                                  		"<p>Estado: "   + e.estado  + "</p></div>"
                                                                      )});
document.getElementById("regresar").onclick=function(){
  window.location="index.html";}
