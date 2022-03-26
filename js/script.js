$(document).ready(()=>{

    var ntemas = 0;
    var nomb;
    var desc;

    $("#agregar").click(function(){
        ntemas++;
        if (ntemas == 1) {
            $("#notemas").remove();
        };
        $("#listatemas").html('<div class="col-12 col-md-8 border shadow p-3 mt-5 rounded"><div class="m-3"><h2>Agregar Tema</h2></div><div class="m-2"><div class="col-12 pt-2"><label class="form-label">Código: </label></div><div class="col-12"><input class="form-control" type="text" name="codigo" id="codigo" disabled></div><div class="col-12 pt-2"><label class="form-label">Nombre del Tema: </label></div><div class="col-12"><input class="form-control" type="text" name="nombreTema" id="nombreTema"></div><div class="col-12 pt-2"><label class="form-label">Descripción del Tema: </label></div><div class="col-12"><textarea name="descripciontema" class="form-control" id="descripcionTema" cols="30" rows="7" maxlength="500" style="resize: none;"></textarea></div><div class="col-12 pt-2"><label class="form-label">Fecha de Registro: </label></div><div class="col-12"><input class="form-control" type="date" name="fecha" id="fecha" disabled></div><div class="col-12 mt-5 d-flex"><button class="btn btn-primary ms-auto mb-2 mb-lg-0" id="btnagregar" disabled>Agregar Tema</button></div></div></div>');
        $("#codigo").val(ntemas);
        $("#nombreTema").bind("input propertychange",function(event){
            if ($("#nombreTema").val() != "") {
                nomb = true;
            } else {
                nomb = false;
            };
         });
         $("#descripcionTema").bind("input propertychange",function(event){
            if ($("#descripcionTema").val() != "") {
                desc = true;
            } else {
                desc = false;
            };
         });
         if (nomb && desc == true) {
            $("#btnagregar").removeAttr('disabled');
         } else {
            $("#btnagregar").attr('disabled','disabled');
         };
    });



    $("#nombreTema").bind("input propertychange",function(event){
        console.log($("#nombreTema").val())
     });
 

    $("#nombreTema").change(function(){
        nombre = $("nombreTema").val();
        console.log(nombre);
        if (nombre != 0) {
            $("#btnagregar").removeAttr('disabled');
        }
    });
});