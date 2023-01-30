$(document).ready(function(){
    $('.header').height($(window).height());
   
    $(".navbar a").click(function(){
        $("body,html").animate({
            scrollTop:$("#" + $(this).data('value')).offset().top
        },1000)
     
    })
    
    $(".btn-enquiry").click(function(){
        alert('Thank you for your enquiry. We will get back to you soon.')
     
    })
   
   })