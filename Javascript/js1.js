// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
let a;
a = `hello`;
let b;
b = `owu`;
let c;
c = `com`;
let d;
d = `ua`;
let e;
e = 1;
let f;
f = 10;
let g;
g = -999;
let h;
h = 123;
let i;
i = 3.14;
let j;
j = 2.7;
let k;
k = 6>5;
let l;
l = 5>6;
let bool1 = 5 == `5`;
let bool2 = 5 === '5';
// let result = confirm(`are you older than 18?`)
// console.log(result)

//     Вивести кожну змінну за допомогою: console.log , alert, document.write
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);
console.log(h);
console.log(i)
console.log(j);
console.log(k)
console.log(l)
console. log(bool1)
console.log(bool2)
// - Створити об'єкт book з наступними полями :
// назва, (тип string)
// кількість сторінок (числовий тип),
// жанр (string)
let book1 = {
    name : 'macroeconomics',
    nPages : 616,
    type : `scientific`,
}
console.log(book1)

// - Створити об'єкт book з наступними полями :
// назва, (тип string)
// кількість сторінок (числовий тип),
// жанр (string)
// автори (тип - масив, кожен елемент масиву - це стрінга)
let book2 = {
    name : 'microeconomics',
    nPages : 312,
    type : `scientific`,
    authors : [`bodia`,`vasia`,`ira`,`oksana`]
}
console.log(book2)
let avgPages = (book1.nPages + book2.nPages)/2;
console.log(avgPages)
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
let firstName;
firstName = `bohdan `,
    console.log(firstName)
let middleName;
middleName = `bohdanovych `,
    console.log(middleName)
let lastName;
lastName = `brychka `,
    console.log(lastName)
let person = (firstName  +  middleName  +  lastName);
console.log(person)

// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль
let x = prompt(firstName);
console.log(x)
let y = prompt(middleName);
console.log(y)
let z = prompt(lastName);
console.log(z)
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
let n = 100;
let v = '100';
let w = true;
console.log(typeof (n))
console.log(typeof (v))
console.log(typeof (w))
// - Створити масив об'єктів з назвою books з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт
let books = [
        {name: `Macroeconomics`, pages: 600, type: `scientific`,
            authors: [
                    {name: 'andriy', age: 61, position: `professor`},
                {name: 'petya', age: 41, position: `docent`}]  },
    {name: `Microeconomics`, pages: 400, type: `scientific`,
        authors: [
            {name: 'bohdan', age: 52, position: `professor`},
            {name: 'nadia', age: 41, position: `docent`}]}
]
console.log(books[0])
console.log(books[1])
console.log(books[0].authors[1].age)
// 5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// Значення площі зберігати в змінній s.
let height = 23;
    let width = 10;
    let s = (0.5*(height)*(width));
console.log(s)
// 6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
// результат помістіть у змінну v.
let heightC = 23;
let dc = 4;
let q = (3.14*((dc/2)**2)*heightC);
console.log(q)
// 7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
// Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).
let ones = 3;
let twos = 4;
let p = ((ones**2+twos**2)^0.5);
console.log(p)

// - Визначити відповідний оператор в виразах що б вийшов відповідний результат.
//     В однакових виразах не використовувати однакові оператори!!!
//     5 ? 6 -> true
5 > 6 -> false
5 = 6 -> false
5 == 6 -> false
10 = 10 -> true
10 == 10 -> true
10 < 10 -> false
10 < 10 -> false
10 > 10 -> false
123 === '123' -> false
123 == '123' -> true