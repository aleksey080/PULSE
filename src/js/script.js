/*const { name } = require("browser-sync");

var name = "Alexey";

let number = 7;
const pi = 3.14;

number = 4;

let leftBorderWidth = 200;*/

//let answer = confirm("Вам есть 18?");
//console.log(answer);

//let answer = prompt("Вам есть 18?", "");
//console.log(answer);

//console.log(4+8)


//let isChecked = true,
    //isClose = true;

//console.log(isChecked && isClose);

//console.log(isChecked || isClose);


//if(2*4 == 8*6) {
    //console.log('Верно')
//} else {
    //console.log('Ошибка')
//

//let answer = confirm("вам есть 18?")
//if(answer) {
    //console.log('проходите') 
//} else {
    //console.log('уходите')
//}


//const num = 50;

//if (num < 49) {
   // console.log('неправильно')
//} else if (num > 100) {
   // console.log('много')
//} else {
   // console.log('верно')
//}

//number
//String - "" , '' ,
//true/false
//null
//undefined
/*let obj = {
    name:  'apple',
    color: 'green',
    weight: 200
}*/
//Simbol
//alert(1234);
//console.log(dfsddg);
//confirm("вам есть 18?")

//alert('Я JavaScript!');

/*for(let i = 1; i < 8; i ++) {
    console.log(i);
}*/

/*function logging(a, b) {
    console.log(a + b)
}

logging(3, 7);*/

$(document).ready(function(){
    $('.carusel__inner').slick({
        speed: 1300,
        adaptiveHeight: true,
        prevArrow:'<button type="button" class="slick-prev"><img src="icons/left-solid.png"></button>',
        nextArrow:'<button type="button" class="slick-next"><img src="icons/right-solid.png"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
        ]
      });
  });