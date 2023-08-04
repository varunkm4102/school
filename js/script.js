const shownav = document.getElementById("showDrop");
const AniIcon = document.getElementById("animate-icon");
const AniIcon2 = document.getElementById("animate-icon2");
const AniIcon3 = document.getElementById("animate-icon3");
const showContainer = document.querySelector(".dropdown-container");
const bodyEle = document.getElementById("bodyElement");
const loginContainer = document.querySelector(".login-container");
const loginElement = document.getElementById("loginClick");
const SignupElement = document.getElementById("sign-click");
const signInContainer = document.querySelector(".signin-container");
const hideDrop = document.getElementById("hideOption");
const wholeCon = document.querySelector('.whole-container');
const menuBar = document.getElementById('menuBar');
const menuRem  = document.getElementById("menuRem");
const navEl = document.getElementById("nav-element");


menuBar.addEventListener("click", ()=>{
  navEl.style.display = "block";
  menuRem.style.display = "block";
  menuBar.style.display = "none";
});
menuRem.addEventListener("click", () =>{
  navEl.style.display = "none";
  menuRem.style.display = "none";
  menuBar.style.display = "block";
});


shownav.addEventListener("click", () => {
  showContainer.style.display = "block";
  AniIcon.style.transform = "rotate(177deg)";
  // if (signInContainer.style.display === "block") {
  //   loginContainer.style.display = "none";
  // } else {
  //   signInContainer.style.display = "block";
  // }
  shownav.addEventListener("dblclick", () => {
    showContainer.style.display = "none";
    AniIcon.style.transform = "rotate(360deg)";
  });
});

loginElement.addEventListener("click", () => {
  loginContainer.style.display = "block";
  AniIcon2.style.transform = "rotate(177deg)";
  if (loginContainer.style.display === "block") {
    signInContainer.style.display = "none";
    AniIcon3.style.transform = "rotate(360deg)";
  } else {
    signInContainer.style.display = "block";
  }
  loginElement.addEventListener("dblclick", () => {
    loginContainer.style.display = "none";
    AniIcon2.style.transform = "rotate(360deg)";
  });
});

SignupElement.addEventListener("click", () => {
  signInContainer.style.display = "block";
  AniIcon3.style.transform = "rotate(177deg)";
  if (signInContainer.style.display === "block" || signStyle === logStyle) {
    loginContainer.style.display = "none";
    AniIcon2.style.transform = "rotate(360deg)";
  } else {
    loginContainer.style.display = "block";
  }
  SignupElement.addEventListener("dblclick", () => {
    signInContainer.style.display = "none";
    AniIcon3.style.transform = "rotate(360deg)";
  });
});

hideDrop.addEventListener("click", () => {
  signInContainer.style.display = "none";
  loginContainer.style.display = "none";
  showContainer.style.display = "none";
  AniIcon.style.transform = "rotate(360deg)";
  AniIcon2.style.transform = "rotate(360deg)";
  AniIcon3.style.transform = "rotate(360deg)";
});

window.onload = function () {
  showContainer.style.display = "none";
  menuRem.style.display = "none"
  loginContainer.style.display = "none";
  signInContainer.style.display = "none";
};

wholeCon.addEventListener("scroll", ()=>{
  console.log("hello its work");
  // loginContainer.style.display = "none";
  // signInContainer.style.display = "none";
  // showContainer.style.display = "none";
  // AniIcon.style.transform = "rotate(360deg)";
  // AniIcon2.style.transform = "rotate(360deg)";
  // AniIcon3.style.transform = "rotate(360deg)";
});



// signup  form data code


let url = 'https://script.google.com/macros/s/AKfycbxCgIWC0fwIHkmmJLM7Lkw_4jhbptH_m7IgAsB0sElBUMOw8ENI8kxRZfO3BhChJZsb/exec';
const form = document.getElementById("form");

form.addEventListener("submit", (e)=>{
  e.target.btn.innerHTML = "SUBMIT....."
  const getData = new FormData(form);
  fetch(url,{
    method: "POST",
    body:getData
  }).then((res)=>res.text())
  .then((finalRes)=>{
    e.target.btn.innerHTML = "SUBMIT";
    document.getElementById("res").innerHTML = finalRes;
    form.reset();
    setTimeout(()=>{
      document.getElementById("res").innerHTML = '';
    },5000);
    console.log(finalRes)
  })
  e.preventDefault();
})

// login form code
const loginForm = document.getElementById("login-data");

form.addEventListener("submit", (e)=>{
  e.preventDefault();
  const getData = new FormData( loginForm);
  fetch(url,{
    method: "POST",
    body:getData
  }).then((res)=>res.json())
  .then((data)=>{
    if (data.success) {
      // The user logged in successfully.
    } else {
      // The user's credentials were invalid.
    }
  })
})






// SINGIN AND LOGIN WITH JAVASCRIPT COOKIE


