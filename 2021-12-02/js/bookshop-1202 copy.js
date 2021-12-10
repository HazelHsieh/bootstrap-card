const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});


const productswiper = new Swiper(".productswiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
        // when window width is >= px
        769: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        // when window width is >= px
        993: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        
      },

      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
});


        