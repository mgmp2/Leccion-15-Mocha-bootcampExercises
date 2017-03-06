window.addEventListener('load', function translate(){
	var title = document.getElementById("form-signin-heading");
	var email = document.getElementById("inputEmail");
	var password = document.getElementById("inputPassword");

	var remember	= document.getElementsByTagName("span")[2];
	var button	= document.getElementsByClassName("btn")[0];

	title.innerHTML 		= "Por favor Inicie Sesión";
	email.placeholder 	= "Correo Electronico";
	password.placeholder= "Contraseña";
	remember.innerHTML = "Recordar datos";
	button.innerHTML		= "Iniciar Sesion";

}
);

function mostrarDatos(){
	var emailError = document.getElementById("errorEmail");
	var passError	= document.getElementById("errorPass");

	if(inputEmail.value == ""){
		emailError.innerHTML = "Ingrese correo válido";
	}
	else if(inputPassword.value == ""){
		passError.innerHTML = "Ingrese contraseña valida"
	}
	else{
		document.getElementById("mostrar").innerHTML = "<strong>Datos del usuario</strong><br>"+
																										"El correo Electronico ingresado es: <br>"+
																										inputEmail.value +
																										"La clave ingresada es:<br>" + inputPassword.value;
	}

}
