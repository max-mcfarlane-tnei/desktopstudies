function initialisePage() {
    // alert();
    if($(window).width() > 812){
        // $("#pcBody").show();
        $('#page-content-wrapper-pc').show();
        $("#sidebar").show();

        if($(window).width() > 1440){
        } else {
            // alert();
            // $( ".halfCardCalSel" ).wrap( "<div class='w3-row' style='margin-top:4vh'></div>" );
            // $('.card-header').css('font-size','14px');
        }
    }
    else {
        if(window.orientation == 0){
            $('#turn').css('display','flex');
            $('#page-content-wrapper-mobile').css('display','none');
        }else{
            $('#turn').css('display','none');
            $('#page-content-wrapper-mobile').css('display','block');
        }
        $( window ).on( "orientationchange", function( event ) {
            if(window.orientation == 0){
                $('#turn').css('display','flex');
                $('#page-content-wrapper-mobile').css('display','none');
                location.reload();

            }else{
                $('#turn').css('display','none');
                $('#page-content-wrapper-mobile').css('display','block');
                location.reload();
            }
        });
        window.onscroll = function (e) {  
            $("#sidebar").hide();
        } 
        $('card-header').css('font-size','10pt');

        // $('#page-content-wrapper-mobile').show();
        $('#menuIcon').show();
        $('#logoImg0').show();
        $('#logoImg').hide();
    
        $('#footer').css('margin-left',"0px");
        $('#footer_text').css('font-size',"2vw");
        
        $("#sidebar").css('z-index',"1");
        $("#sidebar").css('margin-top',"-10vh");
        $('#navbar').css('margin-left',"65vh");
        $("#navbar").css('z-index',"3");
        $("#nav").css('z-index',"3");
        $('#logoImg0').css('margin-left',"50vh");
        $('#logoImg0').css('width',"9.5vh");
        $('#logoImg0').css('height',"9.5vh");


        $("#sidebar").css('height',"100vw");
        $('#menuIcon').css('height',"6vh");
        $('#menuIcon').css('margin-left',"1vh");
        $('#menuIcon').css('width',"5.8vh");
        $('#nav').css('height',"10vh");
        
        $('#menuIcon').show();
        $('#logoImg0').show();
        $('#logoImg').hide();



        $('#navbar').text("Historic Data");
        $('#page-content-wrapper-mobile').css('margin-top',"7.6vw");
        
        $('footer').show();

        if($(window).width() <= 320){
            
        }

        $('h4').addClass("mobileH4");

        $("#menuIcon").on("click",function(){
            if($("#sidebar").css("display") == "none")
            {
                $("#sidebar").show();
            } else {
                $("#sidebar").hide();
            }
            
            });

    }
    // alert(screen.orientation.type);
    $("#nav").show();
}
 
    