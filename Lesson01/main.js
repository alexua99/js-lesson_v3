// defer and async
// defer = не синхроннна підгрузка але чекає поки підгрузиться Html
// async = Синхронна підгрузка

// var let const

// var a = 4;
// var a = 10;

// let a = 4;
// a = "Sasha"
// const b = 1;
// b = " sasha"

let snak_case = 20;
const COLOR_RED = 99;
const _apiKey = "dfav#FF!@$FE";

const camelCase = "test";

// let sasha-test = 123;



//===== Вивід данних ====== ///
let out = document.querySelector('.out');
out.innerHTML = 4;

console.log(out)



// Old
//alert('Alert')
//document.write('Test')


//===== Ввід данних ====== ///

// let pr1 = +prompt("Перше число")
// let pr2 = +prompt("Друге число")

let inp1 = document.querySelector('.inp1')
let inp2 = document.querySelector('.inp2')

let btn = document.querySelector('.btn')

// Проста подія по кліку

btn.onclick = () => {
    out.innerHTML = +inp1.value + +inp2.value
}
