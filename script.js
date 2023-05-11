$(document).ready(function() {
    let position = 0;
    const slidesToShow = 3;
    const slidesToScroll = 1;
    const container = $('.slider_container');
    const track = $('.slider_track');
    const item = $('.slider_item');
    const btnPrev = $('.btn_prev');
    const btnNext = $('.btn_next');
    const itemCount = item.length;
    const itemWidth = (container.width() / slidesToShow)+9;
    const movePosition = (slidesToScroll * itemWidth);
    
    
    item.each(function (index, item) {
        $(item).css({
            minWidth: itemWidth,
        });
    });
    
    btnPrev.click(function() {
        position += movePosition;
        
        setPosition();
        checkBtns();
    });
    
    btnNext.click(function() {
         position -= movePosition;
        
        setPosition();
        checkBtns();
    });
    
    const setPosition = () => {
        track.css({
            transform: `translateX(${position}px)`
        });
    };
    
    const checkBtns = () => {
        btnPrev.prop('disabled', position >= 0);
        btnNext.prop('disabled', position <= -(itemCount-slidesToShow)*itemWidth);
    };
    
    checkBtns();
    
    
    let position1 = 0;
    const slidesToShow1 = 6;
    const slidesToScroll1 = 1;
    const container1 = $('.slider_container1');
    const track1 = $('.slider_track1');
    const item1 = $('.slider_item1');
    const btnPrev1 = $('.btn_prev1');
    const btnNext1 = $('.btn_next1');
    const itemCount1 = item1.length;
    const itemWidth1 = (container1.width() / slidesToShow1);
    const movePosition1 = (slidesToScroll1 * itemWidth1);
    
    
    item1.each(function (index, item) {
        $(item1).css({
            minWidth: itemWidth1,
        });
    });
    
    btnPrev1.click(function() {
        position1 += movePosition1;
        
        setPosition1();
        checkBtns1();
    });
    
    btnNext1.click(function() {
         position1 -= movePosition1;
        
        setPosition1();
        checkBtns1();
    });
    
    const setPosition1 = () => {
        track1.css({
            transform: `translateX(${position1}px)`
        });
    };
    
    const checkBtns1 = () => {
        btnPrev1.prop('disabled', position1 >= 0);
        btnNext1.prop('disabled', position1 <= -(itemCount1-slidesToShow1)*itemWidth1);
    };
    
    checkBtns1();
    
    
    $("img").hover(function() {
        var src = this.src;
        this.src = $(this).data("img");
        $(this).data("img", src);
    });
    
    /* Индекс слайда по умолчанию */
var slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
    showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides(slideIndex -= 1);  
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Основная функция слайдера */
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("about_item");
    var dots = document.getElementsByClassName("slider-dots_item");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
   
    
    
    
});

/* Индекс слайда по умолчанию */
var slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
    showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides(slideIndex -= 1);  
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Основная функция слайдера */
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("about_item");
    var dots = document.getElementsByClassName("slider-dots_item");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

































