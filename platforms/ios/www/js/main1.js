var db;  
 $(document).ready(function(){  
   $("#tomarFoto").click(function(){  
     navigator.camera.getPicture(exitoFoto,errorFoto,{quality:50});  
   });  
   /*db=window.openDatabase("CONTACTOS2","","DESCRIPCION",200000);  
   db.transaction(function(tx){  
     tx.executeSql("CREATE TABLE CONTACTO(id integer not null primary key autoincrement,nombre,telefono);");  
   },errorDB,exitoDB);  
   $("#insertar").click(function(){  
     db.transaction(function(tx){  
       tx.executeSql("INSERT INTO CONTACTO(nombre,telefono)VALUES('eugenio','4444444');");  
     },errorDB,exitoDB);      
   });  
   $("#leer").click(function(){  
     db.transaction(function(tx){  
       tx.executeSql("SELECT * FROM CONTACTO;",[],function(tx,rs){  
         for(var i=0;i<rs.rows.length;i++){  
           var p=rs.rows.item(i);  
           window.alert("nombre="+p.nombre+"------telefono"+p.telefono);  
         }  
       });  
     },errorDB,exitoDB);      
   }); */


   $("#leer").click(function(){
        /*$.ajax({url: "http://cmcoem.info/webservice.php", 
          success: function(result){
            if(result){
              var Data = $.parseJSON(result);
              $("#div1").html(Data.algo);
            }
          }
        });*/

        $.ajax({
                       type: "POST",
                       contentType: "application/json; charset=utf-8",
                       dataType: "json",
                       url:    "http://cmcoem.info/webservice.php",
                       data: '{}',
                       success: function(msg) {
                        window.alert(msg.algo);
                        //console.log(msg.);
                        $("#div1").html(msg.algo);
                         /*jsonArray = $.parseJSON(msg.d);
                         var $ul = $( '<ul id="details">' );
                         for(i=0; i < jsonArray.length; i++)
                         {
                         $("#details").append('<li id="'+i+'" name="head" >'+jsonArray[i].name+'</li>' );
                         }
                         $('#details').listview('refresh');*/
                       },
                       error: function(msg) {
                        alert("Error");
                       }
        });
    }); 
 }); 

 function exitoFoto(url){  
   $("#contenedorFoto").attr("src",url);  
   $("#contenedorFoto").show();  
 }  
 function errorFoto(){  
   window.alert("error");  
 }  

 /*
 function errorDB(){  
   window.alert("error bd");  
 }  
 function exitoDB(){  
   window.alert("exito bd");  
 }  
 */