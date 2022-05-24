$(document).ready(function(){
    $("#sidebar-menu").on("click", function(){
        $("#sidebar").toggleClass("show")
        // $("html").addClass("backdrop")
        // window.scrollTo(0, 0);
        $('html, body').animate({scrollTop:0}, 'slow');
        $('#sidebar').animate({scrollTop:0}, 'fast');
    })

    $('html, body').on('click', function (e) {
        if (e.target == document.documentElement) {
            e.preventDefault();
            if ($(window).width() < 992) {
                $('#sidebar').removeClass("show");
                // $('html').removeClass('backdrop')
            }
        }
    });

    

    // $(window).bind("resize", function () {
    //     if ($(this).width() > 992) {
    //         // $('html').removeClass('backdrop')
    //     } 
    // });

    

    // tagbarmodal

    $('.targetbar').each(function () {
        $(this).find('.targetbar-bar').animate({
            width: $(this).attr('data-percent')+"%"
        }, 0);
       
    });

    $('.targetbar').each(function () {
        if($(this).attr('data-percent')<=33){
            $(this).find(".targetbar-bar").addClass("success");
        }else if($(this).attr('data-percent')>=34 && $(this).attr('data-percent')<=66){
            $(this).find(".targetbar-bar").addClass("warning");
        }else {
            $(this).find(".targetbar-bar").addClass("danger");
        }
       
    });
    
    

    //edição de dados conf. dados//
    // $(".chosen-select").chosen({
    //     disable_search_threshold: 5,
    //     width: "100%"
    // });

    $(document).on("click", "li.sidebar-nav-item", function (e) {
        // e.preventDefault()
        $(".sidebar-nav li.sidebar-nav-item").removeClass("active");    
        $(this).addClass("active");
        $("#sidebar").toggleClass("show")
    });

    //menu js teste

    $("#resumoConsulta").on('click', function(){
        $(".result-container .card").addClass("hide")
        $("#resultadoResumoConsulta").removeClass("hide")
    })

    $("#dadosCadastrais").on('click', function(){
        $(".result-container .card").addClass("hide")
        $("#resultadoDadosCadastrais").removeClass("hide")
    })

    $("#endereco").on('click', function(){
        $(".result-container .card").addClass("hide")
        $("#resultadoEnderecos").removeClass("hide")
    })

    $("#endereco").on('click', function(){
        $(".result-container .card").addClass("hide")
        $("#resultadoEnderecos").removeClass("hide")
    })

    $("#emails").on('click', function(){
        $(".result-container .card").addClass("hide")
        $("#resultadoEmails").removeClass("hide")
    })

    $("#telefones").on('click', function(){
        $(".result-container .card").addClass("hide")
        $("#resultadoTelefones").removeClass("hide")
    })
    $("#score").on('click', function(){
        $(".result-container .card").addClass("hide")
        $("#resultadoScore").removeClass("hide")
    })
    $("#socios").on('click', function(){
        $(".result-container .card").addClass("hide")
        $("#resultadoSocios").removeClass("hide")
    })
    $("#representantes").on('click', function(){
        $(".result-container .card").addClass("hide")
        $("#resultadoRepresentantes").removeClass("hide")
    })
    $("#detalhePefin").on('click', function(){
        $(".result-container .card").addClass("hide")
        $("#resultadoDetalhePefin").removeClass("hide")
    })
    $("#detalheRefin").on('click', function(){
        $(".result-container .card").addClass("hide")
        $("#resultadoDetalheRefin").removeClass("hide")
    })
    $("#detalheCcf").on('click', function(){
        $(".result-container .card").addClass("hide")
        $("#resultadoDetalheCcf").removeClass("hide")
    })
    $("#detalheDividaVenc").on('click', function(){
        $(".result-container .card").addClass("hide")
        $("#resultadoDetalheDividaVenc").removeClass("hide")
    })
    $("#detalheBvs").on('click', function(){
        $(".result-container .card").addClass("hide")
        $("#resultadoDetalheBvs").removeClass("hide")
    })
    $("#detalheProtesto").on('click', function(){
        $(".result-container .card").addClass("hide")
        $("#resultadoDetalheProtesto").removeClass("hide")
    })
})



var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
