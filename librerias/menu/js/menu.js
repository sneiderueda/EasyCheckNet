function salir(){
	location.href = "../../../index.html";
}

function usuarios(){
	$('.contenido').css('display','block');
	$("#contenido").html("<iframe class='iframe' src='../../usuarios/vista/usuario.html'></iframe>");
}
	