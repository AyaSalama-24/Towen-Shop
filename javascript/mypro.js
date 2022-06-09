var slides = Array(3);
// imgs
slides[0] = "imges/cl_bg6.jpg";
slides[1] = "imges/cl_bg3.jpg";
slides[2] = "imges/cl_bg14.jpg";
slides[3] = "imges/cl_bg12.jpg";
slides[4] = "imges/cl_bg7.webp";

var slide = document.getElementById("first_img");
var currentImg = 1,
    ImgNum = 5;

// for prev button..
function pre_img() {
    if (currentImg > 0) {
        slide.src = slides[currentImg - 1];
        currentImg -= 1;
    } else {
        slide.src = slides[0];
    }
}
// for next button..
function next_img() {
    if (currentImg < ImgNum - 1) {
        slide.src = slides[currentImg + 1];
        currentImg += 1;
    } else {
        slide.src = slides[2];
    }
}
var timer,
    i = 1;
// Display
function Play_img() {
    timer = setTimeout(Play_img, 1000);
    if (i > 5) i = 1;
    slide.src = slides[i - 1];
    i++;
}
// Stop
function stop_img() {
    clearTimeout(timer);
}

//end slider

//card and filter

var products = [{
        src: "./imges/cl_k3.jpg",
        price: 20,
        title: "product",
        category: "kids",
    },
    { src: "./imges/cl_m1.webp", price: 30, title: "pro1", category: "men" },
    { src: "./imges/cl_w6.webp", price: 70, title: "pro6", category: "women" },

    { src: "./imges/cl_m4.jpg", price: 40, title: "pro2", category: "men" },
    { src: "./imges/cl_k4.jpg", price: 90, title: "product4", category: "kids" },
    { src: "./imges/cl_w4.webp", price: 80, title: "pro5", category: "women" },
    { src: "./imges/cl_k7.jpg", price: 70, title: "product3", category: "kids" },
    { src: "./imges/cl_m3.jpeg", price: 50, title: "pro3", category: "men" },

    { src: "./imges/cl_w3.webp", price: 60, title: "pro7", category: "women" },

    { src: "./imges/cl_w6.webp", price: 30, title: "pro8", category: "women" },
    { src: "./imges/cl_m4.jpg", price: 60, title: "pro4", category: "men" },
    { src: "./imges/cl_k6.jpg", price: 50, title: "product2", category: "kids" },
];
var productDiv = "";
var mydiv = document.getElementById("products");
for (var i = 0; i < products.length; i++) {
    productDiv += `<div   class=" col-xl-3 col-md-6 text-center"><img class="img-fluid"  src=${products[i].src}><h2 >${products[i].title}</h2><button class="btn btn-outline-success  addBtns" >add ${products[i].price} $</button></div>`;
}
mydiv.innerHTML = productDiv;

function fireFunAdd() {
    var btn = document.querySelectorAll(".addBtns");
    for (var i = 0; i < btn.length; i++) {
        btn[i].addEventListener("click", add);
    }
}
fireFunAdd();
var price = 0;

function add(e) {
    console.log(e.target.innerHTML.split(" ")[1]);
    var pricepro = parseInt(e.target.innerHTML.split(" ")[1]);
    price += pricepro;
    var pri = document.getElementById("price");
    pri.innerHTML = price;
}
var categryInner = "";
var cat = document.getElementById("categry");
var categery = [];
for (var i = 0; i < products.length; i++) {
    if (!categery.includes(products[i].category)) {
        categery.push(products[i].category);
        categryInner += `<button  class="btn btn-outline-success catBtn">${products[i].category}</button>`;
    }
}

cat.innerHTML = categryInner;

var catBtn = document.getElementsByClassName("catBtn");
for (var i = 0; i < catBtn.length; i++) {
    catBtn[i].addEventListener("click", showCat);
}

var productCat = "";

function showCat(e) {
    console.log(e.target.innerHTML);
    for (var i = 0; i < products.length; i++) {
        if (e.target.innerHTML == products[i].category) {
            productCat += `<div   class=" col-xl-3 col-md-6 text-center"><img class="img-fluid"  src=${products[i].src}><h2 >${products[i].title}</h2><button class="btn btn-outline-success  addBtns" >add ${products[i].price} $</button></div>`;
        }
    }

    mydiv.innerHTML = productCat;
    productCat = "";
    fireFunAdd();
}

//navbar
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
    ) {
        document.getElementById("navbar").classList.add("bg-dark", "shadow");
    } else {
        document.getElementById("navbar").classList.remove("bg-dark", "shadow");
    }
}

// form validation
var fName = document.getElementById("name");
var fEmail = document.getElementById("exampleFormControlInput1");
var fBtn = document.getElementById("fbtn");
var form1 = document.getElementById("form");
//
var nameError = document.getElementById("name-error");
var emailError = document.getElementById("email-error");
var subError = document.getElementById("sub-error");
var messageError = document.getElementById("message-error");
var submitError = document.getElementById("submit-error");

function validateName() {
    var namee = document.getElementById("name").value;
    if (namee.length == 0) {
        nameError.innerHTML = "Name is required";
        return false;
    }
    if (!namee.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = "write full name";
        return false;
    }
    nameError.innerHTML = "valid";
    return true;
}

function validateEmail() {
    var emailee = document.getElementById("exampleFormControlInput1").value;
    if (emailee.length == 0) {
        emailError.innerHTML = "email is required";
        return false;
    }
    if (!emailee.match(/.+@.{2,}\..{2,4}$/)) {
        emailError.innerHTML = "email invalid";
        return false;
    }
    emailError.innerHTML = "valid";
    return true;
}

function validateMessage() {
    var messagee = document.getElementById("exampleFormControlTextarea1").value;
    var recuire = 20;
    var left = recuire - messagee.length;
    if (left > 0) {
        messageError.innerHTML = left + "more characture required";
        return false;
    }
    messageError.innerHTML = "valid";
    return true;
}

function validateForm() {
    if (!validateName() || !validateEmail() || validateMessage())
        submitError.style.display = "block";
    submitError.innerHTML = "please fix to submit";
    setTimeout(function() {
        submitError.style.display = "none";
    }, 3000);
    return false;
}

function gotohead() {
    scrollTo(0, 0);
}

// document.forms[0].onsubmit = function(e) {};

// form1.addEventListener("submit", (e) => {
//     e.preventDefault();
// });

var dumyCont = document.getElementById("dumycont");

function gotocontact() {
    gotocontact();
}