window.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".header__ul"),
    menuItem = document.querySelectorAll(".header__li"),
    hamburger = document.querySelector(".hamburger");

  hamburger.addEventListener("click", (e) => {
    hamburger.classList.toggle("header__hamburger_active");
    menu.classList.toggle("header__list_active");
  });


  menuItem.forEach((item) => {
    item.addEventListener("click", (e) => {
      hamburger.classList.toggle("header__hamburger_active");
      menu.classList.toggle("header__list_active");
    });
  });
  
  const faqs = document.querySelectorAll(".faq__faq"); 

  faqs.forEach(faq => {
    faq.addEventListener('click', () =>  {
      faq.classList.toggle("active")
    });
  });

//   function scrollToElement(selector) {
//     $('html, body').animate({
//       scrollTop: $(selector).offset().top
//     }, 2000);
//   };

//   $(document).on('click', 'a.smooth', function () {
//     scrollToElement($(this).attr('href'));
//   });
});
