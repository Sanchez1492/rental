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