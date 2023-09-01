// Change header's background

window.addEventListener('scroll', () => {
    document.querySelector('.nav').classList.toggle('window-scroll', window.scrollY > 0)
})

var swiper = new Swiper(".popular__container", {
    spaceBetween: 32,
    grabCursos: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: 'true',

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });