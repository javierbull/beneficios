$(document).ready(function () {
  // alert("Hello! I am an alert box!!");

  // Sidebar active item
  $(".sidebar-item-db").on('click', function () {
    $(".sidebar-item-db").removeClass('active-item');
    $(this).addClass('active-item');
  });

  $(".btn-sidebar-toggle--vales").click(function () {
    $(".sidebar-list-collapse--vales").toggle();
  });

  $(".btn-sidebar-toggle--sedes").click(function () {
    $(".sidebar-list-collapse--sedes").toggle();
  });
  // End sidebar item active

  // Shoe paneld admin
  $(".showAdminPanel-dashboard").click(function () {
    $("#dashboard-panel").show();
    $("#colaboradores-panel").hide();
    $("#empresa-panel").hide();
    $("#sedes-panel").hide();
    $("#contactos-panel").hide();
    $("#colaboradorNuevo-panel").hide();
    $("#contactoNuevo-panel").hide();
    $("#inhouse-panel").hide();
    $("#visitaInhouseNuevo-panel").hide();
    $("#cumples-panel").hide();
  });

  $(".showAdminPanel-colaboradores").click(function () {
    $("#dashboard-panel").hide();
    $("#colaboradores-panel").show();
    $("#empresa-panel").hide();
    $("#sedes-panel").hide();
    $("#contactos-panel").hide();
    $("#colaboradorNuevo-panel").hide();
    $("#contactoNuevo-panel").hide();
    $("#inhouse-panel").hide();
    $("#visitaInhouseNuevo-panel").hide();
    $("#cumples-panel").hide();
  });

  $(".showAdminPanel-colaboradoreNuevo").click(function () {
    $("#dashboard-panel").hide();
    $("#colaboradores-panel").hide();
    $("#empresa-panel").hide();
    $("#sedes-panel").hide();
    $("#contactos-panel").hide();
    $("#colaboradorNuevo-panel").show();
    $("#contactoNuevo-panel").hide();
    $("#inhouse-panel").hide();
    $("#visitaInhouseNuevo-panel").hide();
    $("#cumples-panel").hide();
  });

  $(".showAdminPanel-empresa").click(function () {
    $("#dashboard-panel").hide();
    $("#colaboradores-panel").hide();
    $("#empresa-panel").show();
    $("#sedes-panel").hide();
    $("#contactos-panel").hide();
    $("#colaboradorNuevo-panel").hide();
    $("#contactoNuevo-panel").hide();
    $("#inhouse-panel").hide();
    $("#visitaInhouseNuevo-panel").hide();
    $("#cumples-panel").hide();
  });

  $(".showAdminPanel-sedes").click(function () {
    $("#dashboard-panel").hide();
    $("#colaboradores-panel").hide();
    $("#empresa-panel").hide();
    $("#sedes-panel").show();
    $("#contactos-panel").hide();
    $("#colaboradorNuevo-panel").hide();
    $("#contactoNuevo-panel").hide();
    $("#inhouse-panel").hide();
    $("#visitaInhouseNuevo-panel").hide();
    $("#cumples-panel").hide();
  });

  $(".showAdminPanel-contactos").click(function () {
    $("#dashboard-panel").hide();
    $("#colaboradores-panel").hide();
    $("#empresa-panel").hide();
    $("#sedes-panel").hide();
    $("#contactos-panel").show();
    $("#colaboradorNuevo-panel").hide();
    $("#contactoNuevo-panel").hide();
    $("#inhouse-panel").hide();
    $("#visitaInhouseNuevo-panel").hide();
    $("#cumples-panel").hide();
  });

  $(".showAdminPanel-contactoNuevo").click(function () {
    $("#dashboard-panel").hide();
    $("#colaboradores-panel").hide();
    $("#empresa-panel").hide();
    $("#sedes-panel").hide();
    $("#contactos-panel").hide();
    $("#colaboradorNuevo-panel").hide();
    $("#contactoNuevo-panel").show();
    $("#inhouse-panel").hide();
    $("#visitaInhouseNuevo-panel").hide();
    $("#cumples-panel").hide();
  });

  $(".showAdminPanel-inhouse").click(function () {
    $("#dashboard-panel").hide();
    $("#colaboradores-panel").hide();
    $("#empresa-panel").hide();
    $("#sedes-panel").hide();
    $("#contactos-panel").hide();
    $("#colaboradorNuevo-panel").hide();
    $("#contactoNuevo-panel").hide();
    $("#inhouse-panel").show();
    $("#visitaInhouseNuevo-panel").hide();
    $("#cumples-panel").hide();
  });

  $(".showAdminPanel-nuevaVisitaInhouse").click(function () {
    $("#dashboard-panel").hide();
    $("#colaboradores-panel").hide();
    $("#empresa-panel").hide();
    $("#sedes-panel").hide();
    $("#contactos-panel").hide();
    $("#colaboradorNuevo-panel").hide();
    $("#contactoNuevo-panel").hide();
    $("#inhouse-panel").hide();
    $("#visitaInhouseNuevo-panel").show();
    $("#cumples-panel").hide();
  });

  $(".showAdminPanel-cumples").click(function () {
    $("#dashboard-panel").hide();
    $("#colaboradores-panel").hide();
    $("#empresa-panel").hide();
    $("#sedes-panel").hide();
    $("#contactos-panel").hide();
    $("#colaboradorNuevo-panel").hide();
    $("#contactoNuevo-panel").hide();
    $("#inhouse-panel").hide();
    $("#visitaInhouseNuevo-panel").hide();
    $("#cumples-panel").show();
  });
  // end show admib panels

  // STEPPER ADMIN
  $(".show-stepper-datosContacto").click(function () {
    $("#stepper-datosContacto").show();
    $("#stepper-datosPersonales").hide();
    $("#stepper-configPerfil").hide();
  });

  $(".show-stepper-datosPersonales").click(function () {
    $("#stepper-datosContacto").hide();
    $("#stepper-datosPersonales").show();
    $("#stepper-configPerfil").hide();
  });

  $(".show-stepper-configPerfil").click(function () {
    $("#stepper-datosContacto").hide();
    $("#stepper-datosPersonales").hide();
    $("#stepper-configPerfil").show();
  });
  // END STEPPER ADMIN

  // DATATABLES
  $('.dtable').DataTable({
    "language": {
      "lengthMenu": "Mostrar _MENU_ filas",
      "zeroRecords": "No se encontraron resultados",
      "info": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
      "infoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
      "infoFiltered": "(filtrado de un total de _MAX_ registros)",
      "sSearch": "Buscar:",
      "oPaginate": {
        "sFirst": "Primero",
        "sLast": "Último",
        "sNext": ">",
        "sPrevious": "<"
      },
      "sProcessing": "Procesando...",
    },
    "responsive": true,
    "searching": false,
    "info": false,
    "dom": '<"top"i>rt<"bottom"lfp><"clear">',
  });
  // END DATATABLES

  // CAMBIAR LOGO EMPRESA
  $('#editar-empresa-input-preview-img').change(function () {
    var curElement = $('#editar-empresa-preview-logo-empresa');
    console.log(curElement);
    var reader = new FileReader();

    reader.onload = function (e) {
      // get loaded data and render thumbnail.
      curElement.attr('src', e.target.result);
    };

    // read the image file as a data URL.
    reader.readAsDataURL(this.files[0]);
  });
  // END CAMBIAR LOGO EMPRESA

  // CONTADOR DE CARACTERES MENSAJE PLATAFORMA
  const mensaje = document.getElementById('mensajePlataforma');
  const contador = document.getElementById('contadorCaracteres');

  mensaje.addEventListener('input', function (e) {
    const target = e.target;
    const longitudMax = target.getAttribute('maxlength');
    const longitudAct = target.value.length;
    contador.innerHTML = `${longitudAct}/${longitudMax}`;
  });
  // END CONTADOR DE CARACTERES

});



