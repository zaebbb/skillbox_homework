// functions
const removeClass = (elem, className) => document.querySelectorAll(elem).forEach(elRem => elRem.classList.remove(className))

// scripts
document.addEventListener("DOMContentLoaded", () => {

    // tabs
    document.querySelectorAll('.section-working-item').forEach(el => {
        
        el.addEventListener('click', e => {
            removeClass('.section-working-item', 'active')
            removeClass('.section-working__slider', 'working-slider-active')

            el.classList.add('active')
            let path = e.currentTarget.dataset.path

            document.querySelector(`[data-target="${path}"]`).classList.add('working-slider-active')
        })
    })

    // sliders
    const swiper = new Swiper('.section-slider__container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
      
        // // If we need pagination
        pagination: {
          el: '.section-slider__pagination',
        },
      });

})

