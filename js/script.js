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
      if (!menu.contains(e.target)) {
        hamburger.classList.toggle("header__hamburger_active");
        menu.classList.toggle("header__list_active");
      }
    });
  });

  document.addEventListener('click', function (e) {
    if (menu.classList.contains('header__list_active') && !menu.contains(e.target) && !hamburger.contains(e.target)) {
      menu.classList.remove('header__list_active');
      if (hamburger.classList.contains('header__hamburger_active')) {
        hamburger.classList.remove('header__hamburger_active');
      }
    }
  });

  //faqs 

  const faqs = document.querySelectorAll(".faq__faq"); 

  faqs.forEach(faq => {
    faq.addEventListener('click', () =>  {
      faq.classList.toggle("active")
    });
  });

  if (screen.width < 850) {
    const arrow = document.querySelector('.arrow'),
          subMenu = document.querySelector('.header__ul-sub');
          headerLi = document.querySelectorAll('.header__li');

    arrow.addEventListener('click', (e) => {
      subMenu.classList.toggle("block");
    });

    headerLi.forEach(li => {
      li.classList.remove("header__li");
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});