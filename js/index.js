$(document).ready(function () {
    $(".banner img").mouseover(function(){

        let i = $(".banner img").index(this);
        $(".banner ul p").removeClass("on").eq(i).addClass("on")
    })
    $(".banner img").mouseout(function(){

        $(".banner ul p").removeClass("on")
    })

    $(".collection .menu ul li").mouseover(function(e){
        e.preventDefault();
        let i = $(this).index();
        $(".collection .menu ul li a").removeClass("on").eq(i).addClass("on")
    })

    $(".collection .swiper").eq(0).show()
    $(".collection .menu ul li a").eq(0).addClass("on")
    $(".collection .menu ul li").click(function(e){
        e.preventDefault();

        let i = $(this).index();

        $(".collection .swiper").hide().eq(i).show()
    })



    const swiper = new Swiper(".collection .swiper",{
        autoplay: {
            delay: 2000
        },
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true
            },
            centeredSlides: true,
            spaceBetween: 2,
            slidesPerView: 1
    }) // swiper


});//end