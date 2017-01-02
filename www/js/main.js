$(document).ready(function(){  

	$("#flogin").submit(function( event ) {
		event.preventDefault();
		var dataform1 = $(this).serialize(); //serializearray
		//contentType: "application/json; charset=utf-8",
		$.ajax({
			type: "POST",
			dataType: "json",
			url: "http://cmcoem.info/webservice.php",
			data: dataform1,
			success: function(result) {
				//window.alert('Entro');
				//console.log(result);
				if(result){
					if(result.status.status == 'susses'){
						$(".navbar-header button").click();
						var listas = '';
						$.each(result.lista_socios, function( key, value ){
							listas += '<tr><td>'+ value.nombre +'</td><td>'+ value.tipo_socio +'</td></tr>';
						});

						listas = '<h3>Bienvenido '+ result.user.name +'. Se ha cargado la lista exitosamente</h3><br/>'+ 
							'<h4>Lista de Socios</h4>'+
							'<table border="1"><tr><td>Nombre</td><td>Tipo de socio</td></tr>'+ listas +'</table>';
						$("#contenido").html( listas );
						
					}else{
						window.alert(result.status.message);
					}
				}else{
					window.alert('Error');
				}
			},
			error: function(msg) {
				window.alert("Error de conexion");
				console.log(msg);
			}
		});

	}); 
}); 
