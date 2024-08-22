$(document).ready(function () {
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
    // "searching": false,
    // "info": false,
    // "dom": '<"top"i>rt<"bottom"lfp><"clear">'
    // scrollX: true
  });
  // END DATATABLES
});




