let dateform = document.querySelector(".date");
let ay = document.querySelector(".ay");
let yil = document.querySelector(".yil");
let gun = document.querySelector(".gun");
let gunSonuc = document.querySelector(".günSonuc");
let aySonuc = document.querySelector(".aySonuc");
let yilSonuc = document.querySelector(".yılSonuc");


function handleFormSubmit(e) {
  e.preventDefault();
  dateform.classList.add("validated");
  if(dateform.checkValidity()) {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth(); 
    let yyyy = today.getFullYear();
    let sonucGun = dd - gun.value;
    let sonucAy =  mm - ay.value ;
    let sonucYil = yyyy - yil.value;

    

    gunSonuc.innerText = sonucGun;
    aySonuc.innerText = sonucAy;
    yilSonuc.innerText = sonucYil;
  }
  

}
dateform.addEventListener("submit", handleFormSubmit);
