'use strict'

// ) Реализовать метод flat для MyArray (сделать как точную
// копию метода flat у Array; Использовать рекурсию; Пример
// у вас есть в репозитории с урока.)
/* function MyArray() {
    this.length = 0;

    for (let i = 0; i < arguments.length; i++) {
        this[this.length] = arguments[i];
        this.length++;
    }

    // MyPush
    this.myPush = (function() {
            for (let i = 0; i < arguments.length; i++) {
                this[this.length] = arguments[i];
                this.length++;
            }
            return this;
        })
        // MyPop
    this.myPop = (function() {
        arguments[0] = this[this.length - 1];
        delete(this[this.length - 1]);
        this.length--;
        //console.log(arguments[0]); // log deleted element
        return arguments[0]; //  return deleted element
    })

    // MyForEach
    this.myForEach = function(callback) {
        for (let i = 0; i < this.length; i++) {
            callback(this[i], i, this);
        }
    };

    // MyFlat
    this.myFlat = function(depth = 0) {
        if (depth < 0) {
            console.error("need positive value");
            return;
        }
        let flatArr = [];
        if (depth === 0) {
            return flatArr;
        }

        return this.reduce((acc, val) => Array.isArray(val) ?
            acc.concat(myFlat(val)) : acc.concat(val), []);
    }
}

let myArrOne = new MyArray([1, 2], 3, [4, [5]]);
console.log("===== MyArray =====", myArrOne);

myArrOne.myPush(666, 777);
console.log("===== PUSH =====", myArrOne);

console.log(myArrOne.myPop());
console.log("===== After POP =====", myArrOne);

myArrOne.myForEach((elem, index) => console.log(`${elem = elem*2}`));

console.log(myArrOne.myFlat(1)); // [1, 2, 3, 4, [5]]
console.log(myArrOne.myFlat()); // [1, 2, 3, 4, 5] */


// 3) Написать функцию logParenthis используя массивы, а не шаблонные
// строки. Функция может скобки как возвращать строку, так и просто выводить в консоль.
// logParenthis(3) // ((()))
// logPar
/* const logPar = function(num) {
    if (num === 0) return "no parenthesis";
    if (num === 1) return "()";
    let arr = [];
    for (let i = 0; i < num; i++) {
        arr.length++;
        arr[i] = "(";
    }
    for (let j = num; j < num * 2; j++) {
        arr.length++;
        arr[j] = ")";
    }
    return arr.toString().replace(/,/g, '');
    // logPar(num - 1);
};
// v2
function logPar2(num) {
    if (num === 0) {
        return "no parenthesis";
    } else if (num === 1) {
        return "()";
    } else {
        return `(${logPar2(num - 1)})`;
    }
}
console.log(logPar(30));
console.log(logPar2(30)); */



// 4) Создать объект user'а. У объекта есть имя, дата рождения(Использовать Date в js), количество отработанных часов за месяц и ставка за час.
// Реализовать геттеры (get age) на получение возраста и заработной платы.
/* const user = {
    name: "name",
    birthDay: new Date('August 19, 1975 23:15:30'),
    workedHours: 160,
    hourlyRate: 30,

    get getBirthDate() {
        return `${this.birthDay.getDate()} ` +
            `${this.birthDay.getMonth()} ` +
            `${this.birthDay.getFullYear()}`;
    },
    get getAge() {
        let currentDate = new Date();
        return (currentDate.getFullYear()) - (this.birthDay.getFullYear());
    },
    get getWage() {
        return this.workedHours * this.hourlyRate;
    },
}

console.log(user.getBirthDate);
console.log(user.getAge);
console.log(user.getWage); */



// Practice
// 1. Нужно написать функцию,принимающую строкув качестве аргумента
// и возвращающуюколичество гласниых, которые содержаться встроке.
// "а", "е", "і", "о"
/* function howMuchМowels(string) {
    const newString = string.split("");
    let amount = 0;
    let len = newString.length;
    for (let i = 0; i < len; i++) {
        switch (newString[i]) {
            case "a":
                amount++;
                break;
            case "e":
                amount++;
                break;
            case "i":
                amount++;
                break;
            case "o":
                amount++;
                break;
        }
    }
    return amount;
}
let str = "kjhdfsgjkjloidhsaf";
// let str = "iioioioiede";
console.log(howMuchМowels(str)); */

// 2)Требуется написать функцию, выводящую в консоль числа от 1 до n, где n — это целое число, которая функция принимает в качестве параметра, с такими условиями:
// вывод fizzbuzz вместо чисел, кратных как 3, так и 5.
// вывод fizz вместо чисел, кратных 3;
// вывод buzz вместо чисел, кратных 5;
/* function outputNums(num) {
    for (let i = 0; i < num; i++) {
        if ((i % 3 === 0) && (i % 5 === 0)) {
            console.log("fizzbuzz");
        } else if (i % 5 === 0) {
            console.log("buzz");
        } else if (i % 3 === 0) {
            console.log("fizz");
        } else {
            console.log(i);
        }
    }
    return 0;
}
let num = 100;
outputNums(num); */

// 3) Создайте функцию avg() , которая будет находить среднее значение по всем своим аргументам.
/* function avg(...rest) {
    let len = rest.length;
    let sum = 0;
    for (let i = 0; i < len; i++) {
        sum += Number(rest[i]);
    }
    return sum;
}
console.log(avg(1, 2, 3, 4, 5, 6)); */


// 4) Напишите функцию addNum(n), которая вернёт другую функцию. Возвращенная функция должна складывать получаемый аргумент с аргументом n возвращающей функции.
// замыкание.
/* function addNum(n) {
    let num = 0;

    return function() {
        return num += n;
    };
}

let res = addNum(3);
console.log(res());
console.log(res());
console.log(res()); */

// 5) Напишите функцию operation(num1, num2, fn), в которой num1 и num2 — числовые переменные, а fn — функция, которая берет два аргумента
// и выполняет математическую операцию над ними
/* const operation = (num1, num2, fn) => fn(num1, num2);
const fn = (numA, numB) => numA + numB;
console.log(operation(3, 3, fn)); */