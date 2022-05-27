// - створити функцію яка приймає масив та виводить кожен його елемент
let massive = [1,3,5,7,9,11,13,15,17,123,123,345,765,345,9876];
function displayer(array) {
    for (const item of array) {console.log(item);

    }
}
displayer(massive);
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function text(t) {
    document.write(`<div>${t}</div>`)
}
text(`muccaco`);
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function licreator(a) {
    document.write(`<ul>
<li>${a}</li>
<li>${a}</li>
<li>${a}</li>

</ul>`)
}
licreator(`curva`);
// створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function licreator2 (b,c) {
        document.write(`<ul>`)
    for (let i = 0; i < c; i++) {
      document.write(`<li>${b}</li>`)

    }

        document.write(`</ul>`)
}
licreator2(`maccino`,10);
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let data=[1,234,2345,`as`,`ghjk`,`ghjkjk`, true,true, false];
function ds(arr) {
    document.write(`<ul>`)
    for (const item of arr) {
        document.write(`<li>${item}</li>`)

    }


    document.write(`</ul>`)
}
ds(data)
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
function disparr(arr2) {
    document.write(`<div>`)
    for (const item of arr2) {
        document.write(`<div> ${item.id} ${item.name} ${item.age} </div>`)
    }
    document.write(`</div>`)}

disparr(massive2)
// - створити функцію яка повертає найменьше число з масиву
let numbers = [1,3,5,6,7,8,9,12,34,56,12,-1,2,45,34,7890,678,456,345,-1,-56789]
function minimizer(arr3) {
    let min = arr3[0];
    for (const item of arr3) {
        if(item<min) {min=item}

    }
    return min
}
console.log(minimizer(numbers))
;
// - створити функцію яка повертає найільше число з масиву
let numbers2 = [1,3,5,6,7,8,9,12,34,56,12,-1,2,45,34,7890,678,456,345,-1,-56789]
function maximizer(data2) {
    let max = data2[0];
    for (const item of data2) {
        if (item>max) {max=item}
    }
    return max
}
console.log(maximizer(numbers2));