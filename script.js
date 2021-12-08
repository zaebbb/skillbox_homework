document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.section__form--input').forEach(el => {
        el.addEventListener("click", (e) => e.stopPropagation())
    })

    let newChoise = new Choices(document.querySelector('.select'), {
        
    })
})

function toggleCheckbox(e){
    e.classList.toggle('active')
}