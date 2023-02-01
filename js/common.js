$(document).ready(function () {

    //메인 숫자 counterUp
      $('.counterup_obj').counterUp({
            duration: 50
      });
    
 //Heater 검색영역
    $(".searchBtn").click(function () {
        $(".searchDiv").slideToggle();
    });
    $('.searchBtn').on('click', function() {
        $('.searchBtn .icon').toggleClass('active');
    });

    /*메뉴 슬라이드 */
    $(".subMenuLi").click(function () {
        $(".hiddenMenu").slideToggle();
        $(".arrowImg").toggleClass('rotate');
    });

});
