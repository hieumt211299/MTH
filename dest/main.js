// Header
function SelectLang() {
    let lang = document.querySelector('.header__lang');
    let langcurr = document.querySelector('.header__lang-current span')
    let langSelect = document.querySelector('.header__lang-select')
    let langItems = document.querySelectorAll('.lang-select-item')
    // 
    lang.addEventListener('click', function (e) {
        langSelect.classList.toggle('active')
        e.stopPropagation();
    })
    // 
    langItems.forEach(function (item) {
        item.addEventListener('mouseover', function () {
            let langtext = this.textContent;
            let m = langcurr.textContent;
            langcurr.innerHTML = langtext;
            this.innerHTML = m;
        })
    })
    document.addEventListener('click', function () {
        langSelect.classList.remove('active')
    })
}
SelectLang()
// 
function menuMobiehandle() {
    let btnmenu = document.querySelector('.header__btnmenu')
    let navmenu = document.querySelector('.nav')

    btnmenu.addEventListener('click', function (e) {
        btnmenu.classList.toggle('active');
        navmenu.classList.toggle('active');
        e.stopPropagation();
    })
    document.addEventListener('click', function () {
        btnmenu.classList.remove('active');
        navmenu.classList.remove('active');
    })
    function hidenav() {
        btnmenu.classList.remove('active');
        navmenu.classList.remove('active');
    }
    window.addEventListener('resize', function () {
        let window = this.window.innerWidth;
        if (window > 992) {
            hidenav();
        }
    })
}
menuMobiehandle()
// 
function changeBGHeaderOnScroll() {
    let header = document.querySelector('.header')
    let slider = document.querySelector('.slider')
    // 
    document.addEventListener('scroll', function () {
        let scrollY = window.pageYOffset
        if (scrollY > slider.clientHeight) {
            header.classList.add('active');
        }
        else {

            header.classList.remove('active');
        }
    })
}
changeBGHeaderOnScroll()
// Slider

// 
function handleGoToBottom() {
    let gobottom = document.querySelector('.slider__bottom-mouse')
    let main = document.querySelector('main')
    // 
    gobottom.addEventListener('click', function () {
        window.scrollTo({
            "top": main.clientHeight,

            'behavior': 'smooth'
        })
    })
}
handleGoToBottom()
// 
function handleBackToTop() {
    let BackToTop = document.querySelector(".footer__backtop")
    BackToTop.addEventListener('click', function () {
        window.scrollTo({
            "top": 0,
            'behavior': 'smooth'
        })
    })
}
handleBackToTop()
// 
// function changeBGSliderOnClick() {
//     let sliderlistBG = document.querySelectorAll('.slider__item')
//     let number = document.querySelector('.slider__bottom-paging .number')
//     let dot_li = document.querySelectorAll('.slider__bottom-paging .dotted ol li')
//     let currentSlider = 0
//     // tim ra slider active
//     sliderlistBG.forEach(function (itemslider, index) {
//         if (itemslider.classList.contains('active')) {
//             currentSlider = index;
//         }
//     })
//     // chuyen  sang slider tiep theo 
//     let next = document.querySelector('.--next')
//     next.addEventListener('click', function () {
//         sliderlistBG[currentSlider].classList.remove('active');
//         dot_li[currentSlider].classList.remove('is_selected');
//         currentSlider = currentSlider + 1;
//         if (currentSlider > sliderlistBG.length - 1) {
//             currentSlider = 0;
//         }
//         sliderlistBG[currentSlider].classList.add('active')
//         // thay doi so 
//         number.innerHTML = (currentSlider + 1).toString().padStart(2, '0');
//         // cac dot
//         dot_li[currentSlider].classList.add('is_selected')

//     })
//     // chuyen  sang slider truoc do
//     let pre = document.querySelector('.--pre')
//     pre.addEventListener('click', function () {
//         sliderlistBG[currentSlider].classList.remove('active');
//         dot_li[currentSlider].classList.remove('is_selected');
//         currentSlider = currentSlider - 1;
//         if (currentSlider == -1) {
//             currentSlider = sliderlistBG.length - 1;
//         }
//         sliderlistBG[currentSlider].classList.add('active')
//         // thay doi so 
//         number.innerHTML = (currentSlider + 1).toString().padStart(2, '0');

//         // cac dot
//         dot_li[currentSlider].classList.add('is_selected')
//     })
// }
// changeBGSliderOnClick()


//  

// modal video
function HandleModalVideos() {
    let videos = document.querySelectorAll('.video__list .video__list-item .circle img')
    let modalVideo = document.querySelector('.popupvideos')
    let iframe = document.querySelector('.popupvideos .popupvideos__inner .popupvideos__inner-iframe iframe')
    let btnclose = document.querySelector('.popupvideos .popupvideos__inner .popupvideos__inner-close')



    videos.forEach(function (video) {
        video.addEventListener('click', function () {
            modalVideo.classList.add("active")
            let dataID = video.getAttribute('data-video-src')
            console.log(dataID);
            iframe.setAttribute('src', 'https://www.youtube.com/embed/' + dataID + '?autoplay=1')
            console.log(iframe)
        })
    })
    function closemodal() {

        modalVideo.classList.remove('active',)
        iframe.setAttribute('src', '')
    }

    btnclose.addEventListener('click', function (e) {
        closemodal();
    })

    modalVideo.addEventListener('click', function (e) {
        closemodal();
    })
}
HandleModalVideos()


function progressbar() {
    let progressbar = document.querySelector('.progressbar')
    window.addEventListener('scroll', function () {
        let maxheight = document.body.offsetHeight - window.innerHeight;
        let scrollY = this.window.scrollY
        let percent = (scrollY / maxheight) * 100;
        progressbar.style.width = percent + '%';
    })
}
window.addEventListener('load', progressbar())


function handleSliderHero() {
    var slider = document.querySelector('.slider__item-wrap');
    var flktyslider = new Flickity(
        slider,
        {
            // options
            cellAlign: 'left',
            contain: true,
            wrapAround: true,
            prevNextButtons: false,
            // pageDots: false
            on: {
                ready: function () {
                    console.log('Flickity is ready');
                },
                change: function (index) {
                    console.log('Slide changed to' + index);

                    handleNumberSlider(index)
                }
            }
        }
    );

    // control
    let btnnext = document.querySelector('.--next')
    let btnpre = document.querySelector('.--pre')
    btnnext.addEventListener('click', function () {
        flktyslider.next(true)
    })
    btnpre.addEventListener('click', function () {
        flktyslider.previous(true)
    })
    // dotted
    function handleDotsSlider() {
        let dotsSlider = document.querySelector('.flickity-page-dots')
        let dotsSliderBottom = document.querySelector('.slider__bottom-paging')
        dotsSliderBottom.appendChild(dotsSlider)
    }
    handleDotsSlider()
    function handleNumberSlider(index) {
        let number = document.querySelector('.slider__bottom-paging .number')
        number.innerHTML = (index + 1).toString().padStart(2, 0);
    }
}
handleSliderHero()