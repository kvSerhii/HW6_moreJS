"use strict";

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

// ======== v2 =========
/* function ArrayMethods() {
    this.push = function() {
        for (let i = 0; i < arguments.length; i++) {
            this[this.length++] = arguments[i];
            return this.length;
        }
    }

    this.pop = function() {
        const lastIndex = this.length - 1;
        const lastItem = this[lastIndex];
        delete this[lastIndex];
        --this.length;
        return lastItem;
    }

    this.forEach = function(callback) {
        for (let i = 0; i < this.length; i++) {
            callback(this[i], i, this);
        }
    }

    this.concat = function(array) {
        let result = new MyArray();
        for (let i = 0; i < this.length; i++) {
            result.push(this[i]);
        }
        for (let i = 0; i < array.length; i++) {
            result.push(array[i]);
        }
    }

    this.flat = function(depth = 1) {

        if (depth < 0) {
            console.error("depth must be a positive value");
            return;
        }

        let newArr = new MyArray();

        if (depth === 0) {
            newArr = newArr.concat(this);
            return newArr;
        }
        for (let i = 0; i < this.length; i++) {
            if (Array.isArray(this[i])) {
                // Always array}
                const buffer = this[i].flat(depth - 1);
                newArr = newArr.concat(buffer);

            } else if (this[i] !== undefined) {
                // Always rest
                newArr.push(this[i]);
            }
        }
        return newArr;
    }

    function MyArray() {
        this.length = 0;
        for (let i = 0; i < arguments.length; i++) {
            this[this.length] = arguments[i];
            this.length++;
        }
    }

    MyArray.prototype = new ArrayMethods();
    const myArr = new MyArray("test", "test2", true, [
        [
            [
                [5]
            ]
        ]
    ]); */

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

//v2 through recursive & closure
/* function logP(level) {
        let arr = [];
        logPar3(level);

        function logPar3(number) {
            if (number > 0) {
                arr = [...arr, "("];
                logPar3(number - 1);
                arr = [...arr, ")"];
            }
        }
        return arr.join("");
    }

    console.log(": ", logP(15)); */

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

//v2 with array methods
/* console.log("Count vowels: ", countVowels("string jkhskjldhfgkjsdg iouoiuio"));

    function countVowels(string) {
        const vowels = ["a", "e", "i", "o", "u"];
        return string.split("").filter((letter) => vowels.includes(letter)).length;
    } */

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

//v2 using reduce()
/* console.log(avg(0, 20));

    function avg(...args) {
        return args.reduce((acc, idx) => acc + idx) / args.length;
    } */

// 4) Напишите функцию addNum(n), которая вернёт другую функцию. Возвращенная функция должна складывать получаемый аргумент с аргументом n возвращающей функции.
// замыкание.
/* function addNum(n) {
        let num = n;

        return function() {
            return num += (num+n);
        };
    }

    let res = addNum(3);
    console.log(res());
    console.log(res());
    console.log(res()); */

// v2
/* const test = addNum(5);
    console.log(test(5));

    function addNum(initialValue = 0) {
        let accumulator = initialValue;
        return function(number) {
            return (accumulator = number + accumulator);
        };
    } */

//practice
/* let counter = makeCounter();

    function makeCounter() {
        let counterState = 1;
        return function counterAdd() {
            return ++counterState;
        };
    } */

// 5) Напишите функцию operation(num1, num2, fn), в которой num1 и num2 — числовые переменные, а fn — функция, которая берет два аргумента
// и выполняет математическую операцию над ними
/* const operation = (num1, num2, fn) => fn(num1, num2);
    const fn = (numA, numB) => numA + numB;
    console.log(operation(3, 3, fn)); */

//v2
/* function operation(num1, num2, fn) { //callback function
        return fn(num1, num2);
    }

    console.log(operation(5, 10, (number1, number2) => {
        return number1 + number2;
    })); */

// 6) Создать объект obj, с методами method1(),method2() и method3().
// В методе method3() должна возвращаться строка «метод3».
// Сделайте так, чтобы было возможно выполнение кода obj.method1().method2().method3()
/* const obj = {
        method1() {
            return this;
        },
        method2() {
            return this;
        },
        method3() {
            return "method 3";
        },
    }

    console.log(obj.method1().method2().method3()); */