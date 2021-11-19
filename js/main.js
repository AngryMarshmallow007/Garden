$(function () {

    
    $('.top__slider').slick({
        dots: true, 
        arrows: false,
        fade: true,
        autoplay: true
    });
    
    var toggle = document.querySelector('.nav-toggle');


    // const themeSwitch = document.querySelector('.themeSwitch');
    // const currentTheme = localStorage.getItem("theme");
      
    // if (currentTheme) {
    //   document.documentElement.setAttribute("data-theme", currentTheme);
      
    //   if (currentTheme === "dark") {
    //     themeSwitch.checked = true;
    //   }
    // }
      
    // function switchTheme(event) {
    //   if (event.target.checked) {
    //     document.documentElement.setAttribute("data-theme", "dark");
    //     localStorage.setItem("theme", "dark");
    //   } else {
    //     document.documentElement.setAttribute("data-theme", "light");
    //     localStorage.setItem("theme", "light");
    //   }
    // }
      
    // themeSwitch.addEventListener("change", switchTheme, false);
      
    let darkMode = localStorage.getItem('darkMode');
    const darkModeToggle = document.querySelector('#dark-mode-toggle');

    // check dark mode is enabled
    // if its enable, turn it off
    // if its disable, turn it on

    const enableDarkMode = () => {
      //1. add the class darkmode to the body
      document.body.classList.add('darkmode');
      //2. update darkMode in the localStorage
      localStorage.setItem('darkMode', 'enabled');
    };

    const disableDarkMode = () => {
      //1. add the class darkmode to the body
      document.body.classList.remove('darkmode');
      //2. update darkMode in the localStorage
      localStorage.setItem('darkMode', 'disabled');
    };

    // save darkMode after refreshing page
    if (darkMode === 'enabled') {
      enableDarkMode();
    }

    darkModeToggle.addEventListener('click', () => {
      darkMode =  localStorage.getItem('darkMode');
      if (darkMode != 'enabled') {
        enableDarkMode();
      } else {
        disableDarkMode();
      }
    });


    // let themeSwitch = document.querySelector('.themeSwitch');
    // let body = document.querySelector('body');
    // themeSwitch.onclick = function(){
    // themeSwitch.classList.toggle('active');
    // body.classList.toggle('dark');
    // };
  
    toggle.addEventListener('click', function(e) {
      this.classList.toggle('opened');
    });

    $('menu__list-item').on('hover', function(){ 
        $('.menu__list-link').toggleClass( 'menu__list-link--active');
    });

	$('.nav-toggle').on('click', function(){
		$('.menu__list').toggleClass('menu__list--active');
	});

    var mixer = mixitup('.gallery__inner',{
        load: {
            filter: '.bowls'
        }
    });

});