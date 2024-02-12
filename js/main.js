$(document).ready(function() {
  // INCREMENTO - DECREMENTO =================

  $('.qtybutton').on('click', function() {
    var $button = $(this);
    var oldValue = $button.parent().find("input").val();
    if ($button.text() == "+") {
      var newVal = parseFloat(oldValue) + 1;
    } else {
      // Don't allow decrementing below zero
      if (oldValue > 1) {
        var newVal = parseFloat(oldValue) - 1;
      } else {
        newVal = 1;
      }
    }
    $button.parent().find("input").val(newVal);
  });

  // FIN INCREMENTO - DECREMENTO

  // BTN FAVORITE
  $(".favorite").click(function() {
    $(this).toggleClass("far fas");
  });
  // FIN BTN FAVORITE

  // OPEN FILTER MOBILE

  $('#btnFilterMobile').click(function() {
    $('.filter-mobile').animate({
      left: 0
    }, 300);
    $('.header-filter-mobile').animate({
      left: 0
    }, 300);
    $('.footer-filter-mobile').animate({
      left: 0
    }, 300);
  });
  // FIN OPEN FILTER MOBILE

  // CLOSE FILTER MOBILE
  $('.closeFilterMobile').click(function() {
    $('.filter-mobile').animate({
      left: '-110%'
    }, 300);
    $('.header-filter-mobile').animate({
      left: '-110%'
    }, 300);
    $('.footer-filter-mobile').animate({
      left: '-110%'
    }, 300);
  });

  // FIN CLOSE FILTER MOBILE

  // OPEN MAIN MENU MOBILE
  $('#btnMenuMobile').click(function() {
    $('.main-menu-mobile').animate({
      left: 0
    }, 300);
  });
  // FIN OPEN MAIN MENU MOBILE

  // CLOSE MAIN MENU MOBILE
  $('.closeMenuMobile').click(function() {
    // $('.wrap-categorias').hide();
    $('.main-menu-mobile').animate({
      left: '-110%'
    }, 300);
  });

  // FIN CLOSE MAIN MENU MOBILE

  // OPEN MENU PEFIL MOBILE
  $('#btnMenuPerfilMobile').click(function() {
    $('.menu-perfil-mobile').animate({
      left: 0
    }, 300);
  });

  // CLOSE MAIN MENU MOBILE
  $('.closeMenuPerfilMobile').click(function() {
    // $('.wrap-categorias').hide();
    $('.menu-perfil-mobile').animate({
      left: '-110%'
    }, 300);
  });
  // FIN OPEN MENU PERFIL MOBILE

  // OPEN SEARCHER MENU MOBILE
  $('#btnSearcherMobile').click(function() {
    $('.searcher-mobile').animate({
      left: 0
    }, 300);
  });
  // FIN OPEN SEARCHER MENU MOBILE

  // CLOSE SEARCHER MENU MOBILE
  $('.closeSearcherMobile').click(function() {
    // $('.wrap-categorias').hide();
    $('.searcher-mobile').animate({
      left: '-110%'
    }, 300);
  });

  // FIN CLOSE SEARCHER MENU MOBILE

  // OPEN ORDER MENU MOBILE
  $('#btnOrderMobile').click(function() {
    $('.menu-order-mobile').animate({
      right: 0
    }, 300);
  });
  // FIN OPEN ORDER MENU MOBILE

  // CLOSE ORDER MENU MOBILE
  $('.closeOrderMobile').click(function() {
    // $('.wrap-categorias').hide();
    $('.menu-order-mobile').animate({
      right: '-110%'
    }, 300);
  });

  $('.form-group-customRadio .custom-radio').click(function() {
    // $('.wrap-categorias').hide();
    $('.menu-order-mobile').animate({
      right: '-110%'
    }, 300);
  });

  // FIN CLOSE ORDER MENU MOBILE

  // MOVIE TRAILER
  /* Get iframe src attribute value i.e. YouTube video url
  and store it in a variable */
  var url = $("#video").attr('src');

  /* Remove iframe src attribute on page load to
  prevent autoplay in background */
  $("#video").attr('src', '');

  /* Assign the initially stored url back to the iframe src
    attribute when modal is displayed */
  $("#modalTrailer").on('shown.bs.modal', function() {
    $("#video").attr('src', url);
  });

  /* Assign empty url value to the iframe src attribute when
  modal hide, which stop the video playing */
  $("#modalTrailer").on('hide.bs.modal', function() {
    $("#video").attr('src', '');
  });
  // FIN MOVIE TRAILER

  // TOOLTIP
  $('[data-toggle="tooltip"]').tooltip();
  // FIN TOOLTIP

  // FILE INPUT
  $(".custom-file-input").on("change", function() {
    var fileName = $(this).val().split("\\").pop();
    $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
  });

  // END FILE INPUT


  $('[data-toggle="tooltip"]').tooltip();

  // SHOW HIDE RADIO BUTTONS DATOS ENTREGA

  $("#customPersonaCargoYo").click(function() {
    $("#boxCargoPedidoDeliveryOtro").hide();
    $("#boxCargoPedidoDeliveryYo").show();
  });

  $("#customPersonaCargoOtro").click(function() {
    $("#boxCargoPedidoDeliveryOtro").show();
    $("#boxCargoPedidoDeliveryYo").hide();
  });

  $("#radioEntregaDelivery").click(function() {
    $("#datosEntregaDelivery").show();
    $("#datosEntregaOficina").hide();
  });

  $("#radioEntregaOficina").click(function() {
    $("#datosEntregaDelivery").hide();
    $("#datosEntregaOficina").show();
  });

  $("#customPersonaCargoRecojoYo").click(function() {
    $("#boxCargoPedidoOficinaOtro").hide();
    $("#boxCargoPedidoOficinaYo").show();
  });

  $("#customPersonaCargoRecojoOtro").click(function() {
    $("#boxCargoPedidoOficinaOtro").show();
    $("#boxCargoPedidoOficinaYo").hide();
  });

  // SHOW HIDE RADIO BUTTONS DATOS ENTREGA

  // SHOW HIDE FIELDSET NUEVA DIRECCION
  $("#guardar-direccion").click(function() {
    $("#fieldset-primera-direccion").hide();
    $("#fieldset-datos-envio").show();
  });
  // END SHOW HIDE FIELDSET NUEVA DIRECCION

  // SHOW BTNS EDIT PERFIL
  $("#edit-datosPersonales").click(function() {
    $(".wrap-content-btn-perfil").show();
    $("#edit-datosPersonales").hide();
  });

  $("#cancelar-edit-datosPersonales").click(function() {
    $(".wrap-content-btn-perfil").hide();
    $("#edit-datosPersonales").show();
  });
  // END SHOW BTNS EDIT PERFIL

 // UPLOAD PICTURE PROFILE
  function readURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function(e) {
        $('#imagePreview').css('background-image', 'url(' + e.target.result + ')');
        $('#imagePreview').hide();
        $('#imagePreview').fadeIn(650);
      }
      reader.readAsDataURL(input.files[0]);
    }
  }
  $("#imageUpload").change(function() {
    readURL(this);
  });

  // END UPLOAD PICTURE PROFILE

  // ACCORDION FILTER

  $(".accordion-card-header").click(function() {
    $(".accordion-less").toggleClass("show hide");
    $(".accordion-more").toggleClass("show hide");
  });

  $(".accordion-header-vales").click(function() {
    $(".accordion-less-vales").toggleClass("show hide");
    $(".accordion-more-vales").toggleClass("show hide");
  });

  $(".accordion-header-envio").click(function() {
    $(".accordion-less-envio").toggleClass("show hide");
    $(".accordion-more-envio").toggleClass("show hide");
  });

  $(".accordion-header-delivery").click(function() {
    $(".accordion-less-delivery").toggleClass("show hide");
    $(".accordion-more-delivery").toggleClass("show hide");
  });

  $(".accordion-header-delivery-proveedor").click(function() {
    $(".accordion-less-delivery-proveedor").toggleClass("show hide");
    $(".accordion-more-delivery-proveedor").toggleClass("show hide");
  });
  // END ACCORDION FILTER

  // TIEMPO CAROUSEL PRINCIPAL HOME
  $('#main-carousel').carousel({
    interval: 4000
  })

  $('#carouselModal').carousel({
    interval: 4000
  })
  // END TIEMPO CAROUSEL PRINCIPAL HOME

  // Load modal
  $(function() {
    $("#modal-flyer-carousel").modal();
  });
  // End load modal


 // CITY SELECTOR PACKS
  $(function() {
    $('#citySelectorPacks').change(function() {
      $('.section-wrap-packs-cards').hide();
      $('#' + $(this).val()).show();
    });
  });
  // END CITY SELECTOR PACKS

  // TABS HOVER
  $('.nav-tabs-hover > li').click(function() {
    event.preventDefault();
    $(this).find('a').tab('show');
  });

  // END TABS HOVER

// LOGO EMPRESA FORMULARIO PEDIDO GH
$('#input-preview-img-gh').change(function(){
  var curElement = $('#preview-logo-empresa-gh');
  console.log(curElement);
  var reader = new FileReader();

  reader.onload = function (e) {
      // get loaded data and render thumbnail.
      curElement.attr('src', e.target.result);
  };

  // read the image file as a data URL.
  reader.readAsDataURL(this.files[0]);
});
// END LOGO EMPRESA FORMULARIO PEDIDO GH

// Mostrar orden de compra
$("#customCheckDatosOrdenCompra").click(function () {
  if ($(this).is(":checked")) {
      $(".ordenDeCompraBox").show();
  } else {
      $(".ordenDeCompraBox").hide();
  }
});
// End mostrar orden de compra

// Sidebar active item
$(".sidebar-item-btn").on('click', function(){
  $(".sidebar-item-btn").removeClass('active-item');
  $(this).addClass('active-item');
});

$(".btn-sidebar-toggle").click(function(){
  $(".sidebar-list-collapse").toggle();
});

// End sidebar item active

// Active thumbnails
$('.thumbnail-item').on('click', function() {
  $('.thumbnail-item').removeClass('thumbnail-item-focus');
  $(this).toggleClass('thumbnail-item-focus');
})
// end Active thumbnails

// Datatables
$('.dtable').DataTable({
  scrollX: true,
  //para cambiar el lenguaje a español
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
      "sNext": "Siguiente",
      "sPrevious": "Anterior"
    },
    "sProcessing": "Procesando...",
  }

});
// End datatables

  // Show hide panels admin
  $(".showAdminPanel-dashboard").click(function() {
    $("#dashboard-panel").show();
    $("#valesCorporativos-panel").hide();
  });

  $(".showAdminPanel-valesSolicitados").click(function() {
    $("#dashboard-panel").hide();
    $("#valesCorporativos-panel").show();
  });
  // End show hide panels admin

// SHOW ACTIVE FOCUS STEPPER

 
});
