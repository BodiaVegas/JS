// - Є змінна х, якій ви надаєте довільне числове значення.
let x = confirm("Is x not equal to zero?");
//     Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
if (x) {
    document.write(`<div>true</div>`);
} else { document.write(`<div>false</div>`);
}
let a = 100500;
if (a === 0) {
    console.log('true')
} else {
    console.log('false')
}
let b = 1;
if (b === 0) {
    console.log('true')
} else {
    console.log('false')
}
let c = 0;
if (c === 0) {
    console.log('true')
} else {
    console.log('false')
}
let d = -3;
if (d === 0) {
    console.log('true')
} else {
    console.log('false')
}
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = prompt("how many minutes on your clock?");
if (time >= 0 && time<=15) {
    console.log('first quarter')
} else if (time>=16 && time<=30) {console.log('second quarter')}
else if (time>=31 && time<=45) {console.log('third quarter')}
else if (time>=46 && time<=59) {console.log('fourth quarter')}
else {console.log('uncorrect')}
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = prompt('Write a number of the day')
if (day>=1 && day<=10) {console.log('first decade')}
else if (day>=11 && day<=20) {console.log('second decade')}
else if (day>=21 && day<=31) {console.log('third decade')}
else {console.log('Impossible')}
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let xxx = prompt("what is ordinal number of the week?");
switch (xxx) {
    case '1': console.log('Monday Visiting Lecture');
    break;
    case "2": console.log('Tuesday Doing my homework');
    break;
    case '3': console.log('Wednesday visiting second lecture');
    break;
    case '4': console.log('Thursday Doing homework');
    break;
    case '5': console.log('Friday Rest day');
    break;
    case '6': console.log('Saturday cleaning the room');
    break;
    case '7': console.log('Sunday Rest day');
    break;
    default: console.log('Error')
}
//     - Користувач вводить або має два числа.
let xx = prompt('Enter the first figure');
let yy = prompt('Enter the Second figure')
//         Потрібно знайти та вивести максимальне число з тих двох .
if (xx > yy) {console.log(xx)}
else if (yy > xx) {console.log(yy)}
else if (yy === xx) {console.log('both figure are equal')}
//         Також потрібно врахувати коли введені рівні числа.