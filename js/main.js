(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        margin: 30,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);

document.getElementById('enviar_whatsapp').addEventListener('click', function() {
    var paquete = document.getElementById('paquete').value;
    var fecha_ingreso = document.getElementById('fecha_ingreso').value;
    var fecha_salida = document.getElementById('fecha_salida').value;
    var duracion = document.getElementById('duracion').value;
    
    var mensaje = "¡Hola! Estoy interesado en el paquete " + paquete + " para las fechas del " + fecha_ingreso + " al " + fecha_salida + ". Duración: " + duracion + ".";
    
    var numero_whatsapp = "573204122089";
    var url_whatsapp = "whatsapp://send?phone=" + numero_whatsapp + "&text=" + encodeURIComponent(mensaje);
    
    window.location.href = url_whatsapp;
});

    document.getElementById('sendMessageButton').addEventListener('click', function() {
        var nombre = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var asunto = document.getElementById('subject').value;
        var mensaje = document.getElementById('message').value;

        var numero_whatsapp = "573204122089";
        var mensaje_whatsapp = "Nombre: " + nombre + "  Email: " + email + "   Asunto: " + asunto + "   Mensaje: " + mensaje;

        var url_whatsapp = "https://wa.me/" + numero_whatsapp + "?text=" + encodeURIComponent(mensaje_whatsapp);

        window.open(url_whatsapp, '_blank');
    });

