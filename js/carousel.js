$('.carousel').carousel( {
    interval: 2300 ,
    keyboard: false , // t5alini enejem nbadel el slider bel keybord
    // pause: true  // t5alini nbadel el slider wa9tli el mouse ta3mel hover 
    ride: true ,
    number: 10,
    direction: 'right'
    })

            // shaw color option 
document.querySelector(".gear-check").onclick = () => {
    document.querySelector('.option-box').classList.toggle('shaw')
}

            // start change color 
const colors = $('.color-option ul li ')

colors 
.eq(0).css("backgroundColor" , "#df4f5e").end()
.eq(1).css("backgroundColor" , "blue").end()
.eq(2).css("backgroundColor" , "green").end()
.eq(3).css("backgroundColor" , "aqua").end()
.eq(4).css("backgroundColor" , "indigo");

colors.click( function() {

    $("link[href*='thime'").attr('href', $(this).attr('data-value'));

})
            // end change color
            // start loader
$(document).ready(function(){
    
    $('.loading').delay(0).fadeOut( function(){
    }, function(){
        $('body').css('overflow','auto')
        $('.loading').remove()
    })
    
})
            // end loader

$(window).scroll(function(){

    if ($(this).scrollTop() > 1035) {
        $('.to-top').css("right",'10px')
    }else{
        $('.to-top').css("right",'-51px')
    }

})

$('.to-top').click(function(){
    $("html,body").animate({scrollTop: 0},1);
})


// $("html").niceScroll({
//     cursorborderradius : '5px',  // ta3mali border redius
//     cursoropacitymin: 0, // ta3mali opacity lel scroll ki nwa9fou
//     cursoropacitymax: 1, // ta3mali opacity lel scroll ki n7arkou
//     cursorwidth:'8px' , // t5alini net7akem bel width mta3 el scrool 
//     cursorborder:'none', // t7oli border lel scroll
//     cursorcolor: ' rgba(	221,78,92 , 0.7)', // t5alini nbadel color mta3 el scroll
//     zindex:"9999", // te5dem z-index
//     scrollspeed:.1 , // ta3mel speed lel scroll
//     mousescrollstep:50 , // ta3mel speed ken bech ne5dem bel 3ajla mta3 el mouse
//     touchbehavior:false , // t5alini na3mel scroll bel mouse ki nenzel 3leha martin kima bel phone tactil
//     emulatetouch:false, // t5alini na3mel scroll bel mouse ki nenzel 3leha martin kima bel phone tactil
//     hwacceleration:false , // t5alini na3mel scroll bel mouse ki nenzel 3leha martin kima bel phone tactil
//     boxzoom:false , // t5alini na3mel zoom lel site
//     dblclickzoom:false, // t5alini na3mel zoom lel site
//     gesturezoom:false, // t5alini na3mel zoom lel site
//     autohidemode:true, // t5ali el scroll ya3mel hide 
//     background:"", // t5alini na3mel background lel scroll 
//     railalign: 'right', // t5alini na9el el scroll right or left 
//     railvalign: "bottom", // t5alini na9el el scroll top or bottom
//     hidecursordelay:400, // ta3tini delay mta3 el hide lel scroll
    
// });
