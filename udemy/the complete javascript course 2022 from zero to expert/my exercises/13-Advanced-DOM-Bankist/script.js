'use strict';

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector("#section--1");

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const nav = document.querySelector('.nav');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabContent = document.querySelectorAll('.operations__content');

const openModal = function() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

///////////////////////////////////////
// Modal window


btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));
for (let i = 0; i < btnsOpenModal.length; i++)
    btnsOpenModal[i].addEventListener('click', openModal);
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});
//button scrolling
btnScrollTo.addEventListener('click', function(e) {
    const s1cords = section1.getBoundingClientRect();
    console.log(s1cords)
    console.log(e.target.getBoundingClientRect());
    console.log('current scroll (x,y)', window.pageXOffset, window.pageYOffset);
    console.log('height/width viewport', document.documentElement.clientHeight, document.documentElement.clientWidth);

    //scrolling
    window.scrollTo(s1cords.left + window.pageXOffset, s1cords.top + window.pageYOffset);
    window.scrollTo({
        left: s1cords.left + window.pageXOffset,
        top: s1cords.top + window.pageYOffset,
        behavior: "smooth",

    })
    section1.scrollIntoView({ behavior: 'smooth' });

});
/////////////////////////////
//page navigation
// document.querySelectorAll('.nav__link').forEach(function(el) {
//     el.addEventListener('click', function(e) {
//         e.preventDefault();
//         const id = this.getAttribute('href');
//         console.log(id);
//         document.querySelector(id).scrollIntoView({ behavior: 'smooth' });


//     });
// });


//1.add event listner to common parent element
//2.determine what element originated the event
document.querySelector('.nav__links').addEventListener('click', function(e) {
        console.log(e.target);
        //Matching strategy
        e.preventDefault();
        if (e.target.classList.contains('nav__link')) {
            // console.log('LINK')
            const id = e.target.getAttribute('href');
            console.log(id);
            document.querySelector(id).scrollIntoView({ behavior: 'smooth' });


        }
    })
    // tabbed component

// tabs.forEach(t => t.addEventListener('click', () => console.log('TAB')))
tabsContainer.addEventListener('click', function(e) {
    // const clicked = e.target.parentElement;
    const clicked = e.target.closest('.operations__tab')
    console.log(clicked);
    // guard clause
    if (!clicked) return;
    //active tab

    tabs.forEach(T => T.classList.remove('operations__tab--active'))
    tabContent.forEach(c => c.classList.remove('operations__content--active'));
    clicked.classList.add('operations__tab--active');
    //activate content area;
    console.log(clicked.dataset.tab)
    document.querySelector(`.operations__content--${clicked.dataset.tab}`)
        .classList.add('operations__content--active');
});

//menu fade animation
const handleHover = function(e) {
    // console.log(this, e.currentTarget);
    if (e.target.classList.contains('nav__link')) {
        const link = e.target;
        // console.log(link);
        const siblings = link.closest('.nav').querySelectorAll('.nav__link');
        // console.log(siblings)
        const logo = link.closest('.nav').querySelector('img');
        // console.log(logo)
        siblings.forEach(el => {
            if (el !== link)
                el.style.opacity = this;

        });
        logo.style.opacity = this;
    }

};

//passing arguments into handler
// nav.addEventListener('mouseover', function(e) {
//     handleHover(e, 0.5)
// })
nav.addEventListener('mouseover', handleHover.bind(0.5));

// nav.addEventListener('mouseout', function(e) {
//         handleHover(e, 1);
//     })

nav.addEventListener('mouseout', handleHover.bind(1));




//sticky navigation

//const initialCoords = section1.getBoundingClientRect();
// console.log(initialCoords);
// window.addEventListener('scroll', function(e) {
//     console.log(window.scrollY);
//     if (window.scrollY > initialCoords.top) nav.classList.add('sticky');
//     else nav.classList.remove('sticky');

// });

window.addEventListener('scroll', function(e) {
    if (window.scrollY > section1.getBoundingClientRect().top)
        nav.classList.add('sticky');
    else
        nav.classList.remove('sticky');


})

//sticky navigation: intersection opserver api 

// const obsCallback = function(entries, observer) {
//     entries.forEach(entry => {
//         console.log(entry);

//     })
// }
// const obsOption = {
//     root: null,
//     threshold: [0, 1, 0.2],

// };
// const observer = new IntersectionObserver(obsCallback, obsOption);
// observer.observe(section1);



const header = document.querySelector('.header');
// const navHeight = nav.getBoundingClientRect().height;
// console.log(navHeight);
// const stickyNav = function(entries) {
//     const [entry] = entries;
//     console.log(entry);
//     if (!entry.isIntersecting)
//         nav.classList.add('sticky');
//     else nav.classList.remove('sticky');
// };
// const headerObserver = new IntersectionObserver(stickyNav, {
//     root: null,
//     threshold: 0,
//     rootMargin: '-90px',
// });
// headerObserver.observe(header);





//reveal section
const allsection = document.querySelectorAll('.section')
const revealSection = function(entries, observer) {
    const [entry] = entries;
    console.log(entry);


    if (!entry.isIntersecting) return;
    entry.target.classList.remove('section--hidden');
    observer.unobserve(entry.target);
}
const sectionobserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0,
})
allsection.forEach(function(section) {
        sectionobserver.observe(section);
        // section.classList.add('section--hidden');

    })
    //lazy loading image
const imgTarget = document.querySelectorAll('img[data-src]');
const loadImg = function(entries, observer) {
    const [entry] = entries;
    console.log(entry);
    if (!entry.isIntersecting) return;

    // replace src with data-src
    entry.target.src = entry.target.dataset.src;
    entry.target.addEventListener('load', function() {
        entry.target.classList.remove('lazy-img')

    });
    observer.unobserve(entry.target);
};
const imgObserver = new IntersectionObserver(loadImg, {
    root: null,
    threshold: 0,
    rootMargin: '200px',
});
imgTarget.forEach(img => imgObserver.observe(img))
    //slider
const slider = function() {
    const slides = document.querySelectorAll('.slide');
    const btnLeft = document.querySelector('.slider__btn--left')
    const btnRight = document.querySelector('.slider__btn--right')
    let currentSlide = 0;
    const maxSlide = slides.length;
    const dotContainer = document.querySelector('.dots');

    // slides.forEach((s, i) => s.style.transform = `translateX(${100*i}%)`);
    // //0,100%,200%,300%


    //functions
    const createDots = function() {
        slides.forEach((_, i) => {

            dotContainer.insertAdjacentHTML('beforeend', `<button class="dots__dot" data-slide="${i}"></button> `)
        })
    };
    const activateDots = function(slide) {
        document.querySelectorAll('.dots__dot').forEach(dot => dot.classList.remove('dots__dot--active'));
        document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add('dots__dot--active');
    };
    const goToSlide = function(slide) {
        slides.forEach((s, i) => s.style.transform = `translateX(${100*(i-slide)}%)`);
        //curent slide=1:-100%,0,100%,200%
    }

    //next slide
    const nextSlide = function() {
        if (currentSlide === maxSlide - 1) {
            currentSlide = 0;
        } else {
            currentSlide++;
        }
        goToSlide(currentSlide);
        activateDots(currentSlide);

    };
    const prevSlide = function() {
        if (currentSlide === 0) {
            currentSlide = maxSlide - 1;
        } else {
            currentSlide--;
        }
        goToSlide(currentSlide);
        activateDots(currentSlide)
    }
    const init = function() {
        goToSlide(0);
        createDots();
        activateDots(0);
    }
    init()
        //event handler
    btnRight.addEventListener('click', nextSlide)
    btnLeft.addEventListener('click', prevSlide)
    document.addEventListener('keydown', function(e) {
        console.log(e);
        if (e.key === 'ArrowLeft') prevSlide();
        e.key === 'ArrowRight' && nextSlide();
    });
    dotContainer.addEventListener('click', function(e) {
        if (e.target.classList.contains("dots__dot")) {
            const slide = e.target.dataset;
            goToSlide(slide);
        }
    });
};
slider();
/////////////////////////////////
//select elments
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);
// const header = document.querySelector('.header')
// const allsection = document.querySelectorAll('.section')
// console.log(allsection);
// document.getElementById('section--1');
// const allbuttons = document.getElementsByTagName('button');
// console.log(allbuttons);
// console.log(document.getElementsByClassName('.btn'));



// //creating and inserting elements
// // .insertadjacenthtml
// const message = document.createElement('div');
// message.classList.add('cookie-message')
//     // message.textContent = 'we use cookied for improved functionality and analytics'
// message.innerHTML = 'we use cookied for improved functionality and analytics.<button class="btn btn--close-cookie"> go it </button>'
//     // header.prepend(message);
// header.append(message);
// // header.append(message.cloneNode(true));
// // header.before(message);
// // header.after(message);


// //delete elements

// document.querySelector('.btn--close-cookie').addEventListener('click', function() {
//     // message.remove();
//     message.parentElement.removeChild(message);

// });
// //styles
// message.style.backgroundColor = '#37383d'
// message.style.width = '100%';
// console.log(message.style.height)
// console.log(message.style.backgroundColor)
// console.log(getComputedStyle(message).color)
// console.log(getComputedStyle(message).height)
// message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';
// document.documentElement.style.setProperty('--color-primary', 'orangered');

// //atributes
// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// console.log(logo.src)
// console.log(logo.className)
//     //non-standered
// console.log(logo.designer)
// console.log(logo.getAttribute('designer'));
// logo.setAttribute('company', 'bankist');
// console.log(logo.getAttribute('src'));
// const link = document.querySelector('.twitter-link');
// console.log(link.href)
// console.log(link.getAttribute('href'))

// //data atributes
// console.log(logo.getAttribute('data-version-number'));
// console.log(logo.dataset.versionNumber);
// //classes
// logo.classList.add('c', 'j')
// logo.classList.remove('c', 'j');
// logo.classList.toggle('c');
// logo.classList.contains('c');
// //don't use
// logo.className = 'jonas'





// const h1 = document.querySelector('h1');
// const alertH1 = h1.addEventListener('mouseenter', function(e) {
//     alert('addEventlistener:Greate! you are reading the heading :D');

// });
// h1.addEventListener('mouseenter', alertH1);

// setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 1000);


// h1.onmouseenter = function(e) {
//     alert('addEventlistener:Greate! you are reading the heading :D');
// };

// const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () => `rgb(${randomInt(0,255)},${randomInt(0,255)},${randomInt(0,255)})`;
// console.log(randomColor());
// document.querySelector('.nav__link').addEventListener('click', function(e) {
//     this.style.backgroundColor = randomColor();
//     console.log('link', e.target, e.currentTarget)

//     //stoppropagation
//     e.stopPropagation();

// });
// document.querySelector('.nav__links').addEventListener('click', function(e) {
//     this.style.backgroundColor = randomColor();
//     console.log('container', e.target, e.currentTarget)

// });
// document.querySelector('.nav').addEventListener('click', function(e) {
//     this.style.backgroundColor = randomColor();
//     console.log('nav', e.target, e.currentTarget)

// }, true);

// //going downards:child
// const h1 = document.querySelector('h1');
// console.log(h1.querySelectorAll('.highLight'));
// console.log(h1.childNodes);
// console.log(h1.children);
// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color = 'red';
// //going upwards child
// console.log(h1.parentNode);
// console.log(h1.parentElement);
// h1.closest('.header').style.background = 'var(--gradient-secondary';
// h1.closest('h1').style.background = 'var(--gradient-primary)';


// //going sideways:siblings
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);
// console.log(h1.previousSibling);
// console.log(h1.nextSibling);
// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(function(el) {
//     if (el !== h1)
//         el.style.transform = 'scale(0.5)';
// });


//life cycle dom
document.addEventListener('DOMContentLoaded', function(e) {

    console.log('html parsed and dom tree built', e)
})
window.addEventListener('load', function(e) {
    console.log('page fully loaded', e)
})
window.addEventListener('beforeunload', function(e) {
    e.preventDefault();
    console.log(e);
    e.returnValue = '';
})