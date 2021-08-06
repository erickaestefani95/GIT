/*
    Document   : init
    Created on : 05/08/2021, 08:00:00
    Author     : EB
*/
    
    var domain = "http://localhost:9000/";
    var postInterno = "api/usuarioMS/creatUserInterno";
    var postExterno = "api/usuarioMS/creatUserExterno";
    var getInterno = "api/usuarioMS/getUserInterno";
    var getExterno = "api/usuarioMS/getUserExterno";

    function init(){

        var btnLeft = $("#idLeft");
            $("<button>").addClass("material-icons mdc-top-app-bar__navigation-icon mdc-icon-button").html("person_add").click(function(){
                nuevoUsuarioInterno();
            }).appendTo(btnLeft);       
            $("<button>").addClass("material-icons mdc-top-app-bar__navigation-icon mdc-icon-button").html("contact_mail").click(function(){
                nuevoUsuarioExterno();
            }).appendTo(btnLeft);

        var content = $("#headerId");
        getApi(getInterno, function(data){
            tablaInterno(content , data, "Usuario Interno");
        },function(error){
            alert("Mensaje: No cargan datos Usuarios Interno");
        });
        
        getApi(getExterno, function(data){
            tablaExterno(content , data, "Usuario Externo");
        },function(error){
            alert("Mensaje: No cargan datos Usuarios Externo");
        });
    }

    function creatUserInterno(idCed, name, last, area, genered, contracted){

        var json = {
            "idUser": idCed,
            "name": name,
            "last": last,
            "area": area,
            "gender": genered,
            "contracted": contracted
        };
        var ws = {
            url: domain+postInterno
        };    
        $.ajax({
             type: "POST",
             url: ws.url,
             data: JSON.stringify(json),
             contentType: "application/json; charset=utf-8",
             crossDomain: true,
             dataType: "json",
             headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
             },
             success: function (json, status, jqXHR) {
                 alert("Se ha ingresado");
             },
             error: function (jqXHR, status) {
                 console.log(jqXHR);
             }
        });   
    }
    
    function creatUserExterno(idCed, name, last, bachelorDegree, phone, email){

        var json = {
            "idUser": idCed,
            "name": name,
            "last": last,
            "bachelorDegree": bachelorDegree,
            "phone": phone,
            "email": email
        };
        var ws = {
            url: domain+postExterno
        };    
        $.ajax({
             type: "POST",
             url: ws.url,
             data: JSON.stringify(json),
             contentType: "application/json; charset=utf-8",
             crossDomain: true,
             dataType: "json",
             headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
             },
             success: function (json, status, jqXHR) {
                 alert("Se ha ingresado");
             },
             error: function (jqXHR, status) {
                 console.log(jqXHR);
             }
        });   
    }
    
    function getApi(url,fnSuccess,fnError){
        var ws = {
            url: domain+url
        };
        $.ajax({
             type: "GET",
             url: ws.url,	
             contentType: "application/json; charset=utf-8",
             crossDomain: true,
             dataType: "json",
             headers: {
                'Content-Type': 'application/json'
             },
             success: function (data, status, jqXHR) {
                    if(fnSuccess){
                        fnSuccess(data);
                    }
                    console.log(data);

             },
             error: function (jqXHR, status) {
                 if(fnError){
                     fnError();
                 }    		 
             }
        }); 
    }
    
    function tablaInterno(content, json, title){

        content.children().remove();
        
        if(!json){
            return null;
        }

        if(json){

            var center = $("<center>").css({"margin-top":"15px"}).appendTo(content);
                $("<h2>").html(title).appendTo(center);
                var tabla = $("<div>").addClass("mdc-data-table").appendTo(center);
                    var tablaContainer = $("<div>").addClass("mdc-data-table__table-container").appendTo(tabla);
                        var table = $("<table>").addClass("mdc-data-table__table").appendTo(tablaContainer);
                            var thead = $("<thead>").appendTo(table);
                                var tr = $("<tr>").addClass("mdc-data-table__header-row").appendTo(thead);                                   
                                    $("<th>").css({"text-align":"center"}).addClass("mdc-data-table__header-cell mdc-data-table__header-cell--numeric").html("idUser").appendTo(tr);
                                    $("<th>").css({"text-align":"center"}).attr({width:"150px"}).addClass("mdc-data-table__header-cell mdc-data-table__header-cell--numeric").html("Nombre").appendTo(tr);
                                    $("<th>").css({"text-align":"center"}).addClass("mdc-data-table__header-cell mdc-data-table__header-cell--numeric").html("Apellido").appendTo(tr);
                                    $("<th>").css({"text-align":"center"}).addClass("mdc-data-table__header-cell mdc-data-table__header-cell--numeric").html("Area").appendTo(tr);
                                    $("<th>").css({"text-align":"center"}).addClass("mdc-data-table__header-cell mdc-data-table__header-cell--numeric").html("Genero").appendTo(tr);
                                    $("<th>").css({"text-align":"center"}).attr({width:"150px"}).addClass("mdc-data-table__header-cell mdc-data-table__header-cell--numeric").html("Contratado").appendTo(tr);
                            var tbody = $("<tbody>").addClass("mdc-data-table__content").appendTo(table);

                            for (var i of json){

                                var tr = $("<tr>").addClass("mdc-data-table__row").appendTo(tbody);
                                    $("<td>").css({"text-align":"left","text-transform":"capitalize"}).addClass("mdc-data-table__cell mdc-data-table__cell--numeric").html(i.idUser).appendTo(tr); 
                                    $("<td>").css({"text-align":"left","text-transform":"capitalize"}).addClass("mdc-data-table__cell mdc-data-table__cell--numeric").html(i.name).appendTo(tr); 
                                    $("<td>").css({"text-align":"left","text-transform":"capitalize"}).addClass("mdc-data-table__cell mdc-data-table__cell--numeric").html(i.last).appendTo(tr); 
                                    $("<td>").css({"text-align":"left","text-transform":"capitalize"}).addClass("mdc-data-table__cell mdc-data-table__cell--numeric").html(i.area).appendTo(tr); 
                                    $("<td>").css({"text-align":"left","text-transform":"capitalize"}).addClass("mdc-data-table__cell mdc-data-table__cell--numeric").html(i.gender).appendTo(tr);
                                    $("<td>").css({"text-align":"left","text-transform":"capitalize"}).addClass("mdc-data-table__cell mdc-data-table__cell--numeric").html(i.contracted).appendTo(tr); 
                            }  
        }
    }
    
    function tablaExterno(content, json, title){

        content.children().remove();
        
        if(!json){
            return null;
        }

        if(json){

            var center = $("<center>").css({"margin-top":"15px"}).appendTo(content);
                $("<h2>").html(title).appendTo(center);
                var tabla = $("<div>").addClass("mdc-data-table").appendTo(center);
                    var tablaContainer = $("<div>").addClass("mdc-data-table__table-container").appendTo(tabla);
                        var table = $("<table>").addClass("mdc-data-table__table").appendTo(tablaContainer);
                            var thead = $("<thead>").appendTo(table);
                                var tr = $("<tr>").addClass("mdc-data-table__header-row").appendTo(thead);                                   
                                    $("<th>").css({"text-align":"center"}).addClass("mdc-data-table__header-cell mdc-data-table__header-cell--numeric").html("idUser").appendTo(tr);
                                    $("<th>").css({"text-align":"center"}).attr({width:"150px"}).addClass("mdc-data-table__header-cell mdc-data-table__header-cell--numeric").html("Nombre").appendTo(tr);
                                    $("<th>").css({"text-align":"center"}).addClass("mdc-data-table__header-cell mdc-data-table__header-cell--numeric").html("Apellido").appendTo(tr);
                                    $("<th>").css({"text-align":"center"}).addClass("mdc-data-table__header-cell mdc-data-table__header-cell--numeric").html("Profesión").appendTo(tr);
                                    $("<th>").css({"text-align":"center"}).addClass("mdc-data-table__header-cell mdc-data-table__header-cell--numeric").html("Telefono").appendTo(tr);
                                    $("<th>").css({"text-align":"center"}).attr({width:"150px"}).addClass("mdc-data-table__header-cell mdc-data-table__header-cell--numeric").html("Email").appendTo(tr);
                            var tbody = $("<tbody>").addClass("mdc-data-table__content").appendTo(table);

                            for (var i of json){

                                var tr = $("<tr>").addClass("mdc-data-table__row").appendTo(tbody);
                                    $("<td>").css({"text-align":"left","text-transform":"capitalize"}).addClass("mdc-data-table__cell mdc-data-table__cell--numeric").html(i.idUser).appendTo(tr); 
                                    $("<td>").css({"text-align":"left","text-transform":"capitalize"}).addClass("mdc-data-table__cell mdc-data-table__cell--numeric").html(i.name).appendTo(tr); 
                                    $("<td>").css({"text-align":"left","text-transform":"capitalize"}).addClass("mdc-data-table__cell mdc-data-table__cell--numeric").html(i.last).appendTo(tr); 
                                    $("<td>").css({"text-align":"left","text-transform":"capitalize"}).addClass("mdc-data-table__cell mdc-data-table__cell--numeric").html(i.bachelorDegree).appendTo(tr); 
                                    $("<td>").css({"text-align":"left","text-transform":"capitalize"}).addClass("mdc-data-table__cell mdc-data-table__cell--numeric").html(i.phone).appendTo(tr);
                                    $("<td>").css({"text-align":"left","text-transform":"capitalize"}).addClass("mdc-data-table__cell mdc-data-table__cell--numeric").html(i.email).appendTo(tr); 
                            }  
        }
    }

    function nuevoUsuarioInterno(){

        var contentDialog = $("<div>");
            var dialogTitle = $("<div>").css({margin:"15px 5px 0px"}).appendTo(contentDialog); 
                tf = new mdcTextFields(dialogTitle);           
                tf.addTextFieldOutlined("idCed", "Cedula", "assignment_ind")
                  .addTextFieldOutlined("name", "Nombre", "perm_identity")
                  .addTextFieldOutlined("last", "Apellido", "assignment_ind")
                  .addTextFieldOutlined("area", "Area", "business_center")
                  .addTextFieldOutlined("genered", "Genero", "perm_identity")
                  .addTextFieldOutlined("contracted", "Contratado", "manage_accounts");

        var dialog = new mdcDialog("Agregar Usuario Interno", contentDialog)
            .addButton("btAceptar","Aceptar")
            .open()
            .setFnClick(function(id){
             switch(id){
                 case "btAceptar":

                    var idCed = tf.getValue("idCed");
                    var name = tf.getValue("name");
                    var last = tf.getValue("last");
                    var area = tf.getValue("area");
                    var genered = tf.getValue("genered");
                    var contracted = tf.getValue("contracted");

                    creatUserInterno(idCed, name, last, area, genered, contracted);                                  
                    dialog.close();
                 break;                                 
             }                                
        });
    }

    function nuevoUsuarioExterno(){

        var contentDialog = $("<div>");
            var dialogTitle = $("<div>").css({margin:"15px 5px 0px"}).appendTo(contentDialog); 
                tf = new mdcTextFields(dialogTitle);           
                tf.addTextFieldOutlined("idCed", "Cedula", "assignment_ind")
                  .addTextFieldOutlined("name", "Nombre", "perm_identity")
                  .addTextFieldOutlined("last", "Apellido", "assignment_ind")
                  .addTextFieldOutlined("bachelorDegree", "Profesión", "perm_identity")
                  .addTextFieldOutlined("phone", "Telefono", "phone")
                  .addTextFieldOutlined("email", "Email", "alternate_email");

        var dialog = new mdcDialog("Agregar Usuario Externo", contentDialog)
            .addButton("btAceptar","Aceptar")
            .open()
            .setFnClick(function(id){
             switch(id){
                 case "btAceptar":

                    var idCed = tf.getValue("idCed");
                    var name = tf.getValue("name");
                    var last = tf.getValue("last");
                    var bachelorDegree = tf.getValue("bachelorDegree");
                    var phone = tf.getValue("phone");
                    var email = tf.getValue("email");

                    creatUserExterno(idCed, name, last, bachelorDegree, phone, email);                                  
                    dialog.close();
                 break;                                 
             }                                
        });
    }