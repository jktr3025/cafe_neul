$(function () {

    //메뉴
    $(".main > li, .sub_bg").hover(function () {
        $(".sub, .sub_bg").stop().slideDown()

    }, function () {
        $(".sub, .sub_bg").stop().slideUp()
    }) //main > li, .sub_bg").hover

    // //이미지 슬라이드
    setInterval(function(){
        $(".move").animate({left: "-100%"},500,function (){ 
        $(".move").css({left: "0"})
        $(".move").append($(".move li").first())
        })
    },2500) //setInterval


    //md 상품
    $(".cont4_list").slick({
        autoplay : true,
        autoplaySpeed : 1000,
        slidesToShow : 5,
        slidesToScroll: 1,
        // pauseOnDotsHover: true,
        pauseOnHover : true,

        responsive: [
            { breakpoint: 431,
              settings: {
        // autoplay : false,

                slidesToShow: 3,
                slidesToScroll: 1,
                arrows:false,
              }
            }
          ]


    })

    //md 단추 호버시 멈춤
    $(".cont4_list .slick-arrow").hover(function(){
        $(".cont4_list").slick("slickPause")
    }, function(){
        $(".cont4_list").slick("slickPlay")
    })

    //pop 닫기
    $(".pop a").click(function(){
        $(".pop").css({display:"none"})
    })

    //430px 메뉴 클릭
    // if($(window).width() < 430){
    //     $(".click_menu").click(function(){
    //         $(".click_menu").toggleClass("on")
    //         $(".nav").toggleClass("on")
    //     })
    // }//if
    if($(window).width() < 431){
        $(".click_menu").click(function(){
            $(".click_menu").toggleClass("on")
            $(".nav").toggleClass("on")
        })
    }//if







    

}) //jquery