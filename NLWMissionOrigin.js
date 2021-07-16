// DOM Documento Object Model
// Selecionando o Header NAV
const nav = document.querySelector('#header nav')
// Selecionando a toggle
const toggle = document.querySelectorAll('nav .toggle')
// For para percorrer o elemento toggle
for (const element of toggle) {
  // O evento está percorrendo a FOR, ao momento do Click, ele inserir via Toggle a class SHOW. E ao clicar no X, ele retira o SHOW!
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}
// Ao clicar no texto C/ Strong, irá para Início
const strong = document.querySelectorAll('header strong')
for (const element of strong) {
  element.addEventListener('click', function () {
    window.scrollTo(0, 0)
  })
}

const links = document.querySelectorAll('nav ul li a')
for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

// Criou uma nova função para agrupar todos os Scroll
function changeHeaderWhenScroll() {
  // Mudando o Header da página assim que acionar o Scroll
  const header = document.querySelector('#header')
  const navHeight = header.offsetHeight

  if (window.scrollY >= navHeight) {
    // Se o scroll for maior que a altura do header...
    header.classList.add('scroll')
  } else {
    // Scroll menor que altura do header
    header.classList.remove('scroll')
  }
}

//Testimonials  - Swiper
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  mousewheel: true,
  keyboard: true
})

//ScrollReveal - Mostrar elementos quando der um scroll na página
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text, 
#services header, #services .card,
#testimonials header, #testimonials .testimonials
#contact .text, #contact .links,
footer .brand, footer .text
  `,
  { interval: 100 }
)

// Criou uma nova função para agrupar todos os BackToTop
function backToTop() {
  // Botão UP voltar ao Topo
  const BackToTopButton = document.querySelector('.back-to-top')

  if (window.scrollY >= 1020) {
    // Se o Window ScrollY for maior que 560...
    BackToTopButton.classList.add('show')
  } else {
    BackToTopButton.classList.remove('show')
    // Se o Window ScrollY for menor que 560...
  }
}

window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
})
