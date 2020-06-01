// Created by: Truzz Blogg
// Youtube Link: https://youtu.be/Dv-ZFh5RqFc

let btn_green = document.getElementById('btngreen');
let btn_blue = document.getElementById('btnblue');
let btn_pink = document.getElementById('btnpink');
let btn_tomato = document.getElementById('btntomato');
let btn_default = document.getElementById('btndefault');
let box = document.querySelector('.box');

function changeColorBtn1() {
  if(btn_green.value == "green") {
    box.style.background = btn_green.value;
    console.log(btn_green);
  }
}

function changeColorBtn2() {
  if(btn_blue.value == "blue") {
    box.style.background = btn_blue.value
    console.log(btn_blue) 
  }
}

function changeColorBtn3() {
  if(btn_pink.value == "pink") {
    box.style.background = btn_pink.value
    console.log(btn_pink) 
  }
}

function changeColorBtn4() {
  if(btn_tomato.value == "tomato") {
    box.style.background = btn_tomato.value
    console.log(btn_tomato) 
  }
}

function changeColorBtn5() {
  if(btn_default.value == "default") {
    box.style.background = "#556677"
    console.log(btn_default) 
  }
}



