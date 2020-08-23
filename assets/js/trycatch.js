"use strict";

/* console.log("before");

// x = 10 + y;

function logToFile(err) {
    console.log("===");
    console.log(err);
    console.log("===");
}

function pow(base, exp) {
    if (typeof base === "string") {
        throw new TypeError("must be a number");
    }
    if (exp === 0) {
        return 1;
    }
    return base * pow(base, exp - 1);
}

function dangerousCode() {
    try {
        console.log("try 1");
        const res = pos(2, 4);
        console.log("try 2");
    } catch (err) {
        console.log("CATCH");
        if (err instanceof Error) {
            console.log("true")
        };

        if (err instanceof RangeError) {
            console.log("RangeError", err);
        }
        if (err instanceof TypeError) {
            console.log("TypeError", err);
        }
        logToFile(err);
        throw err;

    } finally {
        console.log("FINALLY");
    }
}

try {
    console.lo("second try");
    dangerousCode();
} catch (err) {
    console.log("Second catch", err);
}
console.log("after"); */

// practice
// 1. text-transform: capitalize
/* function toJadenCase(string) {
    return string
        .split(" ")
        .map((word) => `${word.charAt(0).toUpperCase()}${word.slice(1)}`)
        .join(" ");
}

let test = toJadenCase("after danger code declaration");
console.log(test); */

// 2.Напишите функцию, котораявозвращает все значенияпереданного свойства
// из массиваобъектов. getPropertyValues(array, name);

const db = [
  {
    name: "testName1",
    age: 20,
  },
  {
    name: "testName2",
    age: 21,
  },
];

function getPropertyValues(db, prop) {
  return db.map((item) => item[prop]);
}

console.log(getPropertyValues(db, "age"));

// 3 Напишитефункцию, которая очищает массив от ложных (falsy) значений

// 4. Напишите функцию removeItem(array, item), которая удаляет определенное
// значение из массива
// removeItem([3,5,7,8,5,5,5,5,5,5,5,],5); // [3,5,7]
/* function removeItem(arr, item) {
    if (typeof arr === 'string') {
        let newArr = arr.split("");
    }
    if (typeof item === 'string') {
        let newItem = item.split("");
    }
    let res = newArr.filter(newItem => {
        newArr !== newItem;;
    })

}

console.log(removeItem("kjsdfk", "ksf")); */
/* function countVowels(string) {
    const vowels = ["a", "e", "i", "o", "u"];
    return string.split("").filter((letter) => 
    vowels.includes(letter)).length;
} */

// 6 вернуть массив состоящий
// из наибольших чисел каждого массива
const entArray = [
  [1, 2, 3, 9],
  [5, 18, 0, 32],
  [3, 5, 129, 5],
  [28, 99, 2, 34],
];

function getMaxEntries(arr) {
  return arr.map((subArray) => Math.max(...subArray));
}

let res = getMaxEntries(entArray);
