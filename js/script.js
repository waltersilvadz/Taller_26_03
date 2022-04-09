$(document).ready(()=>{

    var ntemas = 0;
    var nomb;
    var desc;
    var index;
    var page1;
    var d = new Date();
    var month = d.getMonth()+1;
    var day = d.getDate();
    var fech = (day<10?'0':'')+day+'/'+(month<10?'0':'')+month+'/'+d.getFullYear();

    $("#agregar").click(function(){
        abrir();
        if (ntemas != 0) {
            $("#notemas").remove();
        };
    });

    $("#codigo").val(ntemas);
    $('#fecha').val(fech);
    $("#nombreTemas").bind("input propertychange",function(event){
        if (isNaN($("#nombreTemas").val())) {
            nomb = true;
        } else {
            nomb = false;
        };
        campos();
    });

    $("#descripcionTema").bind("input propertychange",function(event){
        if (isNaN($("#descripcionTema").val())) {
            desc = true;
        } else {
            desc = false;
        };
        campos();
    });

    $("#btnagregar").click(function(){
        $('#listatemas').html('<div class="col-12 border shadow p-3 mt-5 rounded"><div class="d-flex"><input type="radio" class="form-check-input mb-2 mb-lg-0" id="radio1" name="optradio" value="option1"><h2 class="ms-auto mb-2 mb-lg-0">Tema 1</h2><a class="btn ms-auto mb-2 mb-lg-0" data-bs-toggle="collapse" data-bs-target="#tema1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16"><path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/></svg></a></div><div id="tema1" class="collapse"><div class="col p-4"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p></div><div class="col d-flex align-items-right justify-content-right"><a class="link-dark ms-auto mb-2 mb-lg-0" href="#">Ver más...</a></div></div></div>');
        cerrar();
    });

    function campos(){
        if (nomb && desc == true) {
            $("#btnagregar").removeAttr('disabled');
        } else {
            $("#btnagregar").attr('disabled','disabled');
        };
    };

    function abrir(){
        page1="";
        if (!page1) {
            page1 = window.open("pages/page1.html");
            ntemas++;
            page1.onbeforeunload=() => {
                cerrar();
            }
        }
    };

    function cerrar(){
        page1 = window.close();
        page1="";
    }

});