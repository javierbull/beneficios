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
  });

  $(".showAdminPanel-colaboradores").click(function () {
    $("#dashboard-panel").hide();
    $("#colaboradores-panel").show();
    $("#empresa-panel").hide();
  });

  $(".showAdminPanel-empresa").click(function () {
    $("#dashboard-panel").hide();
    $("#colaboradores-panel").hide();
    $("#empresa-panel").show();
  });
  // end show admib panels

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
});

