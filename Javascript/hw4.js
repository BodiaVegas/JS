// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function square1 (a,b) {
    let res1 = a * b;
    return res1;
}
let res2 = square1(10, 13);
console.log(res2);
// - створити функцію яка обчислює та повертає площу кола з радіусом r
function square2 (r) {
    let res2 = 3.14 *(r**2);
    return res2;
}
let res3 = square2(13);
console.log(res3);
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function square3 (h, q) {
    let res3 = 2*3.14*h*q;
    return res3;
}
let res4 = square3(13, 5);
console.log(res4);
// - створити функцію яка приймає масив та виводить кожен його елемент
let data = [1,10,23,45,56,78,90,120,143,156,167,197,199,204,215];
function massiveDisplayer(array) {
    for (const item of array) {console.log(item)}
        
    }
massiveDisplayer(data)
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function paragraphCreator(c) {
    document.write(`<div>${c}</div>`)
}
paragraphCreator(`Amazing`)
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function liCreator(d) {
    document.write(`<ul>
             <li>${d}</li>
             <li>${d}</li>
             <li>${d}</li>
</ul>`);
}
liCreator(`Li`)
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function liCreator2(e,n) {
    document.write(`<ul>`)
    for (let i = 0; i < n; i++) {
           document.write(`<li>${e}</li>`)
           }
document.write(`</ul>`)
}
liCreator2(`Sad`,5);
    function liElem(text, num) {
    document.write(`<ul>`)
    for (let i = 0; i < num; i++) {
        document.write(`<li>${text}</li>`)

    }
    document.write(`</ul>`)
}

liElem('Hello', 3);
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let massive = [1,5,10,30,'fgh', 'tyu', 'asdf', true, false, true, true];
function arrayDisplay (array) {
    document.write(`<ul>`)
    for (const argument of array) {
        document.write(`<li>${argument}</li>`)

    }
    document.write(`</ul>`)

}
arrayDisplay(massive)
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let massive2 = [
    {
        id: 123,
        name: 'vasya',
        age: 24,
    },
    {
        id: 345,
        name: 'bodia',
        age: 28,
    },
    {
        id: 598,
        name: 'nazar',
        age: 35,
    }
]
function objectDisplay(arr) {
    for (const arrElement of arr) {
        document.write(`<div>${arrElement.id}  ${arrElement.name} ${arrElement.age}</div>`)
    }
}
objectDisplay(massive2)
// - створити функцію яка повертає найменьше число з масиву
let numbers = [1,3,5,6,7,8,9,12,34,56,12,-1,2,45,34,7890,678,456,345]
function minimizer(data) {
  let min = data[0];
    for (const item of data) {
        if(item<min) {min=item}
    }
    return min
}
console.log(minimizer(numbers));
                                                                         // Для себе
let numbers2 = [12,12,3,-2,89,78,456,-23,-234,-56,-78,123,345, 234, 234,3456789,]
function maximizer(num) {
    let max = num[0];
    for (const item of num) {
        if(item>max) {max=item}

    }
    return max
}
console.log(maximizer(numbers2))
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->1
arr67 = [1,2,5];
function summ(array6) {
    let s = 0;
    for (const item of array6) {
        s = s + item;
    }
    return s;
}
console.log(summ(arr67));