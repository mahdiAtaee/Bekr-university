const menuBtn = document.querySelector('.menu_btn');
const menu = document.getElementById("menu");
let menuOpen = false;


menuBtn.addEventListener('click', function () {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menu.classList.add('active');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menu.classList.remove('active');
        menuOpen = false;
    }
});

$(".acc-title").click(function () {
    $(this).parent().parent().find(".acc-title").css({ 'background': 'url(../img/icons8-left-arrow-64.png) no-repeat left center', 'background-size':'20px'})
    $(this).parent().parent().find(".acc-content").slideUp()
    if ($(this).next(".acc-content").css("display") == "none") {
        $(this).next(".acc-content").slideDown();
        $(this).css({ 'background': 'url(../img/icons8-expand-arrow-30.png) no-repeat left center', 'background-size':'20px'})
    }
});


window.onscroll = function () {
    scrollTop();
}
var elem = document.getElementsByClassName("arrow-top")[0];

function scrollTop() {
    if (window.pageYOffset >= 400) {
        elem.style.display = 'block';
    }else{
        elem.style.display = 'none';
    }
}

elem.addEventListener('click',function(){
    window.scrollTo(0,0);
});

$('.arrow-top').hover(function(){
    $(this).css({'background':'url(../img/up-arrow-blue.png)','background-size':'cover'})
},function () {
    $(this).css({'background':'url(../img/up-arrow.png)','background-size':'cover'})
});

