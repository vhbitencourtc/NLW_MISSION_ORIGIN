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
// Mudando o Header da página assim que acionar o Scroll
const header = document.querySelector('#header')
const navHeight = header.offsetHeight
// Criou uma nova função para agrupar todos os Scroll
function changeHeaderWhenScroll() {
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
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
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
// Botão UP voltar ao Topo
const BackToTopButton = document.querySelector('.back-to-top')

// Criou uma nova função para agrupar todos os BackToTop
function backToTop() {
  if (window.scrollY >= 560) {
    // Se o Window ScrollY for maior que 560...
    BackToTopButton.classList.add('show')
  } else {
    BackToTopButton.classList.remove('show')
    // Se o Window ScrollY for menor que 560...
  }
}
/*LINK ATIVO - SEÇÃO VISÍVEL NA PÁGINA*/
const sections = document.querySelectorAll('main section[id')
function activeMenuAtCurrentSection() {
  /*Traço virtual que irão funcionar ao passar cada section na page*/

  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
  activeMenuAtCurrentSection()
})
