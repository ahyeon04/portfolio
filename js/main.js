$(function(){
    $('nav').hide()
    $(window).scroll(function(){
        let num = $(this).scrollTop()
        console.log(num)

        if(num>780){
            $('nav').fadeIn()
        }else{
            $('nav').fadeOut()
        }
    })
    $('header .inner ul.gnb li').click(function(){
        $('header .inner ul.gnb li').removeClass('on')
        $(this).addClass('on')
    })
    $('header .inner ul.gnb li:eq(0) a,h1 a').click(function(){
        $('html,body').animate({scrollTop:0},1000)
    })
    $('header .inner ul.gnb li:eq(1) a').click(function(){
        $('html,body').animate({scrollTop:1080},1000)
    })
    $('header .inner ul.gnb li:eq(2) a').click(function(){
        $('html,body').animate({scrollTop:2959},1000)
    })
    $('header .inner ul.gnb li:eq(3) a').click(function(){
        $('html,body').animate({scrollTop:4040},1000)
    })

    $('nav ul li:eq(1) a').css({color:'#fff',fontSize:20})
    $(window).scroll(function(){
        let num = $(this).scrollTop()

        if(num>0 && num<1079){
            $('nav ul li a').css({color:'rgba(255,255,255,0.3)',fontSize:15})
            $('nav ul li:eq(0) a').css({color:'#fff',fontSize:20})
        }
        if(num>1079 && num<2958){
            $('nav ul li a').css({color:'rgba(255,255,255,0.3)',fontSize:15})
            $('nav ul li:eq(1) a').css({color:'#fff',fontSize:20})
        }
        if(num>2958 && num<4039){
            $('nav ul li a').css({color:'rgba(255,255,255,0.3)',fontSize:15})
            $('nav ul li:eq(2) a').css({color:'#fff',fontSize:20})
        }
        if(num>4039){
            $('nav ul li a').css({color:'rgba(255,255,255,0.3)',fontSize:15})
            $('nav ul li:eq(3) a').css({color:'#fff',fontSize:20})
        }

        if(num>1500){
            $('.chart_wrap .ps span').css({width:"90%"})
        }else{
            $('.chart_wrap .ps span').css({width:0})
        }
        if(num>1500){
            $('.chart_wrap .ill span').css({width:"80%"})
        }else{
            $('.chart_wrap .ill span').css({width:0})
        }
        if(num>1500){
            $('.chart_wrap .fi span').css({width:"99.3%"})
        }else{
            $('.chart_wrap .fi span').css({width:0})
        }
        if(num>1500){
            $('.chart_wrap .m span').css({width:"90%"})
        }else{
            $('.chart_wrap .m span').css({width:0})
        }
        if(num>1500){
            $('.chart_wrap .c span').css({width:"90%"})
        }else{
            $('.chart_wrap .c span').css({width:0})
        }
        if(num>1500){
            $('.chart_wrap .js span').css({width:"60%"})
        }else{
            $('.chart_wrap .js span').css({width:0})
        }
        if(num>1500){
            $('.chart_wrap .jq span').css({width:"80%"})
        }else{
            $('.chart_wrap .jq span').css({width:0})
        }
        if(num>1500){
            $('.chart_wrap .vue span').css({width:"60%"})
        }else{
            $('.chart_wrap .vue span').css({width:0})
        }
    })
    $('nav ul li:eq(0) a').click(function(){
        $('html,body').animate({scrollTop:0},1000)
    })
    $('nav ul li:eq(1) a').click(function(){
        $('html,body').animate({scrollTop:1080},1000)
    })
    $('nav ul li:eq(2) a').click(function(){
        $('html,body').animate({scrollTop:2959},1000)
    })
    $('nav ul li:eq(3) a').click(function(){
        $('html,body').animate({scrollTop:4040},1000)
    })

    $('section#work .inner .tab ul li').click(function(){
        $('section#work .inner .tab ul li').removeClass('on')
        $(this).addClass('on')
    })

    $('.img_wrap').slick({
        autoplay: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrow:true,
        // dots: true,
      });

      $('.img_wrap .img a').lightBox({
        overlayBgColor:'#000',
        overlayOpacity:0.9,
        imageLoading:"./images/lightbox-ico-loading.gif",
        imageBtnClose:"./images/lightbox-btn-close.gif",
        imageBtnPrev:"./images/lightbox-btn-prev.gif",
        imageBtnNext:"./images/lightbox-btn-next.gif",
        txtImage:"작품",
        containerResizeSpeed:500,
    })
})