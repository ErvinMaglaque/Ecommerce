searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () =>{
  searchForm.classList.toggle('active');
}

let loginForm = document.querySelector('.login-form-container');
document.querySelector('#login-btn').onclick = () =>{
  loginForm.classList.toggle('active');
}
document.querySelector('#close-login-btn').onclick = () =>{
  loginForm.classList.remove('active');
}



window.onscroll = () =>{
  searchForm.classList.remove('active');
  
  if(window.scrollY > 80){
    document.querySelector('.header .header-2').classlist.add('active');
    
  }else{
    document.querySelector('.header .header-2').classlist.remove('active');  
  }
  
}
window.onload = () =>{
  
  if(window.scrollY > 80){
    document.querySelector('.header .header-2').classlist.add('active');
    
  }else{
    document.querySelector('.header .header-2').classlist.remove('active');  
  }
}

var swiper = new Swiper (".books-slider",{
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction:false,
  },
  breakpoints: {
    0:{
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    2048: {
      slidesPerView: 4,
    },
  },
});
var swiper = new Swiper (".featured-slider",{
  spaceBetween: 10,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction:false,
  },
  navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  breakpoints: {
    0:{
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    2048: {
      slidesPerView: 4,
    },
  },
});

var swiper = new Swiper (".arrivals-slider",{
  spaceBetween: 10,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction:false,
  },
  breakpoints: {
    0:{
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper (".reviews-slider",{
  spaceBetween: 10,
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction:false,
  },
  breakpoints: {
    0:{
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
var swiper = new Swiper (".blogs-slider",{
  spaceBetween: 10,
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction:false,
  },
  breakpoints: {
    0:{
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
var loader = document.getElementById("preloader");
window.addEventListener("load",function(){
  loader.style.display = "none";
})


const scriptURL = 'https://script.google.com/macros/s/AKfycbwODiM2hwe54PwlyDd6_BRlGDAa7JAaGcBUJwVTYL3jkld45eaP9l6eRfFU8E64oqoVog/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      msg.innerHTML = "Sent Successfully"
      setTimeout(function(){
        msg.innerHTML = ""
      },5000)
      form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})
