const search = document.querySelector('#search-bar')
const abs = document.querySelector('.absolute-section')

search.addEventListener('click', function() {
search.classList.toggle('is-active')
abs.classList.toggle('active')
})