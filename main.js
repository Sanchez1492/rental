// Change header's background

window.addEventListener('scroll', () => {
    document.querySelector('.nav').classList.toggle('window-scroll', window.scrollY > 0)
})

// Popular section Swiper
var swiper = new Swiper(".popular__container", {
    spaceBetween: 32,
    grabCursos: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: 'true',

    navigation: {
      nextEl: ".navigation-next",
      prevEl: ".navigation-prev",
    },
  });

// Accordion items

const accordionItems = document.querySelectorAll('.value__accordion--item')

accordionItems.forEach((item) => {
  const accordionHeader = item.querySelector('.value__accordion--header')

  accordionHeader.addEventListener('click', () => {
    const openItem = document.querySelector('.accordion--open')

    toggleItem(item)

    if(openItem && openItem!== item) {
      toggleItem(openItem)
    }
  })

})
const toggleItem = (item) => {
  const accordionContent = item.querySelector('.value__accordion--content')

  if(item.classList.contains('accordion--open')) {
    accordionContent.removeAttribute('style');
    item.classList.remove('accordion--open');
  } else {
    accordionContent.style.height = accordionContent.scrollHeight + 'px';
    item.classList.add('accordion--open');
  }
}

//Scroll Sections Active List

const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

//Scroll Reveal

const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  //reset: true,
})

sr.reveal(`.home__title, .popular__container, .subscribe__container, .footer__container`)
sr.reveal(`.home__description, .footer__info`, {delay: 500})
sr.reveal(`.home__search`, {delay: 600})
sr.reveal(`.home__value`, {delay: 700})
sr.reveal(`.home__images`, {delay: 800, origin: 'bottom'})
sr.reveal(`.logos__img`, {interval: 100})
sr.reveal(`.value__images, .contact__content`, {origin: 'left'})
sr.reveal(`.value__content, .contact__images`, {origin: 'right'})