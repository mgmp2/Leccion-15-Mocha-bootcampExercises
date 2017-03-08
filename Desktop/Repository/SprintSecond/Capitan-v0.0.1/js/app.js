
var sprint1 = document.getElementById("sprint-1");
var sprint2 = document.getElementById("sprint-2");
var sprint3 = document.getElementById("sprint-3");

sprint1.style.display = "none";
sprint2.style.display = "block";
sprint3.style.display = "none";



 function mostrarOcultar1(divtexte) {
  	if(sprint1.style.display == "none" ) {
  		sprint1.style.display = "block";
      sprint2.style.display = "none";
      sprint3.style.display = "none";
  	}
  };

  function mostrarOcultar2 (divtexte) {

    if(sprint2.style.display == "none" ) {
  		sprint2.style.display = "block";
      if(sprint1.style.display == "block"){
        sprint1.style.display = "none";
      }
  	}
};

  function mostrarOcultar3(divtexte) {

  	if (sprint3.style.display == "none" ) {
  		sprint3.style.display = "block";
      if(sprint1.style.display == "block"){
        sprint1.style.display = "none";


      } if(sprint2.style.display = "block"){
        sprint2.style.display = "none";
      }

  	}
  }

  //RESPUESTAS: Sprint 1
  function respuestan1(){
    var sprint1 = document.getElementById("div-quiz-1");
    var r = document.getElementsByClassName("quiz-1");
    var mensaje = document.getElementById("respuesta-1");
    var cont = 0;
    if(r[0].checked || r[1].checked || r[2].checked &&
       r[3].checked || r[4].checked || r[5].checked &&
       r[6].checked || r[7].checked || r[8].checked){

         if(r[0].checked){
           cont ++;
         }
         if(r[5].checked){
           cont ++;
         }
         if(r[8].checked){
           cont++;
         }
         mensaje.innerHTML = "Tienes "+ cont + " correcta(s)";
         sprint1.style.display = "none";
       }else{
         alert("Debe responder todas las preguntas")
       }

  };

  //RESPUESTAS: Sprint 2

  function respuestan2(){
    var sprint2 = document.getElementById("div-quiz-2");
    var r = document.getElementsByClassName("quiz-2");
    var mensaje = document.getElementById("respuesta-2");
    var cont = 0;
    if(r[0].checked || r[1].checked || r[2].checked &&
       r[3].checked || r[4].checked || r[5].checked &&
       r[6].checked || r[7].checked || r[8].checked){
      if(r[1].checked){
        cont ++;
      }
      if(r[3].checked){
        cont ++;
      }
      if(r[7].checked){
        cont++;
      }
    mensaje.innerHTML = "Tienes "+ cont + " correcta(s)";
    sprint2.style.display = "none";
  }
    else{
      alert("Debe responder todas las preguntas")

    }};

    //dropdown
    function myFunction() {

	document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {

	if (!event.target.matches('.dropbtn')) {
		var dropdowns = document.getElementsByClassName("dropdown-content");

		for (var i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
}
