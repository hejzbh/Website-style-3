const zatvori = document.querySelector('#close')
const sec = document.querySelector('.absolute-section')

zatvori.addEventListener('click', function() {
zatvori.classList.toggle('is-active')
sec.classList.toggle('active')
})