// ==== Оператори === //

// + = Додавання
// - = Віднімання
// * = Множення
// / = Ділення

// Цикли
// % = Залишок від Ділення
// ++ = Інкримент (Збільшення на 1)


// Оператори присвоювання

//  = Присвоювання
//  += Додавання


// == порівняння по значенню
// ===  порівняя по значенню і по типу данних
// != не дорівню
// !== не дорівню

//  > Більше 
//  < меньше
//  >=
//  <=


// && Логіяне і
// || логічне або


// if else
// if (Перевірка) {
//     подія
// } if else (Перевірка) {
//     подія
// } 
// else {
//     подія
// }




console.log(Boolean(2 === "2"))
// Приклади

//`` '' ""
let name = "Sas";
let age = 22;

let password = "123";

if (name === "Sasha" || password === "123") {
    console.log("Привіт " + name);
} else {
    console.log("Ви ввели невірний пароль");
}

// Switch





console.log('Sasha' + "=" + age);
console.log(`Sasha = ${age}`);


let out1 = document.querySelector('.out')

out1.innerHTML = `
    <div class="user">
        <h2>${name}</h2>
        <h5>${age}</h5>
    </div>
`



// Інкримент приклад
let out = document.querySelector('h1')
let btn = document.querySelector('.plus')
let minus = document.querySelector('.minus')

let count = 0;
btn.onclick = () => {
    out.innerHTML = count++
}

minus.onclick = () => {
    out.innerHTML = count--
}

// +=

if (document.querySelector('.btn')) {
    let inp = document.querySelector('.inp1')
    let btn3 = document.querySelector('.btn')

    btn3.onclick = () => {
        out1.innerHTML += inp.value + ", "
    }
}


/// Бенз

let select = document.querySelector('.select')
let inp10 = document.querySelector('.inp10')
let out22 = document.querySelector('.out22')
let btn22 = document.querySelector('.btn22')

let a95 = 39;
let a92 = 35;
let a98 = 42;

btn22.onclick = () => {


    // if (select.value === '95') {
    //     console.log(+inp10.value * a95 + "гр");
    // }


    switch (select.value) {
        case '95':
            out22.innerHTML = "A-95  = " + +inp10.value * a95 + "гр";
            break;
        case '92':
            out22.innerHTML = "A-92  = " + +inp10.value * a92 + "гр";
            break;
        case '98':
            out22.innerHTML = "A-98 = " + +inp10.value * a95 + "гр";
            break;
        default:
            out22.innerHTML = "Ви нічого не обрали";

    }

}