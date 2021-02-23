const slider = document.querySelector('#slider');
let sliderSection = document.querySelectorAll('.slider__section');
let sliderSectionLast = sliderSection [sliderSection.lenght -1];

const btnLeft = document.querySelector('#btnLeft');
const btnRight = document.querySelector('#btnRight');

slider.insertAdjacentElement ('afterbegin', sliderSectionLast);

function Next(){
    let sliderSectionFirst = document.querySelectorAll('.slider__section') [0];
    slider.style.marginLeft = '-200%';
    slider.style.transition = 'all 0.5s';
    setTimeout (function(){
        slider.style.transition = 'none';
        slider.insertAdjacentElement ('beforeend', sliderSectionFirst);
        slider.style.marginLeft = '-100%';
    })
}

function Prev(){
    let sliderSectionFirst = document.querySelectorAll('.slider__section') [0];
    slider.style.marginLeft = '0';
    slider.style.transition = 'all 0.5s';
    setTimeout (function(){
        slider.style.transition = 'none';
        slider.insertAdjacentElement ('afterbegin', sliderSectionLast);
        slider.style.marginLeft = '-100%';
    })
}

btnRight.addEventListener('click', function(){
    Next();
} );

btnLeft.addEventListener('click', function(){
    Prev();
} );