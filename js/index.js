$(function () {

    var mainSlideOption = {
        arrows: false,
        vertical: true,
    }

    $('.gnb li').eq(0).addClass('on')

    var mainSlide = $('.mainSlide').slick(mainSlideOption);

    mainSlide.on('wheel', function (e) {
        var delta = e.originalEvent.deltaY;
        console.log(delta)
        delta > 0
            ? mainSlide.slick('slickNext')
            : mainSlide.slick('slickPrev')
    });

    mainSlide.on('afterChange', function (e, s, idx) {
        $('.gnb li')
            .eq(idx)
            .addClass('on')
            .siblings()
            .removeClass('on');

        idx % 2 === 0
            ?
            $('.gnb').css({
                color: '#333'
            })
            :
            $('.gnb').css({
                color: '#fff'
            });
            // 페이지 바뀔때 메뉴 글자 색 바뀌게 하는
    })

    $('.gnb li').on('click', function (e) {
        e.preventDefault();
        var idx = $(this).index();
        mainSlide.slick('slickGoTo', idx)
    });



















})