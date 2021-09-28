// alert(20);
// window.alert('Hello world!');


//console
/*
console.log(10);
console.log(undefined);
console.log('test');
console.log('1');
console.log(null);
console.log(true);
console.log(false);
*/

//variable 
//имя переменной начинается с буквы, или _, или $. Это латиница, которая пишется без проблеов. Цифры в середине, конце, но не в начале. Все значения регистрозависимые. Например user и User это две разные переменные. Пишем в стиле camelCase

// //создание переменной
// let num1;
// //инициализация
// num1 = 33;
// //логирование
// console.log('num1 =',num1);

// let num2 = 28;

// num1 = 44
// console.log('num1 = ',num1);

// const num3 = 77;

// {
//     let num3 = 'qwerty';
//     console.log('num2 = ',num2);
//     console.log('num3 = ',num3);
// }


// let num = 10;
// console.log(num, typeof num);

// let str = 'ten';
// console.log(num, typeof str);

// let varNull = null;
// console.log(varNull, typeof varNull);

// let varUndefined = undefined;
// console.log(varUndefined, typeof varUndefined);

/*
false
0 +0 -0
'' // empty string
NaN
null
undefined
*/

// let condition = true;
// if(condition) {
//     console.log(condition);
// }

// let condition = false;
// if(condition) {
//     console.log(condition);
// }

// let condition = 0.0001;
// if(condition) {
//     console.log(condition);
// }

// console.log(12%5);

// let messageUser = 'Masha tells: \u2721\n\t\'Hello\''

// console.log(messageUser);

// let iter = 5;

// iter++;

// console.log(iter++);

// console.log(iter);

// let a = 1;

// let b = 2;

// let c = a++;

// console.log(c);
// console.log(a);
// console.log(b);

// let number = '44';

// console.log(+number);

// let num1 = 10;

// console.log(num1<=10);

/* Logic multiction AND && */
// Return the last truth or the first false;

// 1*0=0 0*1=0 0*0=0 1*1=1

/* Logic addiction OR || */
// Return or the first truth, or the last false;

// 1+0=1 0+1=1 0+0=0 1+1=2

// let cound ='' || 0;
// console.log(cond);

// let number = 21;

// let min = 10;
// let max = 20;

// if(number<min || number>max) {
//     console.log('You win', number)
// }

// let number = 12;

// number += 10;

// number %= 5;

// number **= 3;

// number /= number;

// number *= 4;

// console.log(number);



// let number1 = 45;
// let number2 = 12;
// console.log(number1+number2);
// console.log(number1-number2);
// console.log(number1*number2);
// console.log(number1/number2);
// console.log(number1%number2);

// let num = 101;
// let boolean = true;
// let language = 'Java';
// let name = 'Elon Musk';
// let emptyValue = null;

// let number3 = 23;

// number3 += 11;
// console.log(number3);

// number3 /= 2;
// console.log(number3);

// number3--;
// console.log(number3);

// number3 *= 11;
// console.log(number3);

// number3++;
// console.log(number3);

// number3 %= 5;
// console.log(number3);


// let userInput = prompt ('Enter number: ');
// console.log(userInput);
// console.log(isNaN(Number(userInput)));
// console.log(typeof Number(userInput));


// let isNotNumber = userInput === '' || userInput === null || isNaN(Number(userInput));
// if(isNotNumber){
//     console.log('error');
// }else {
//     console.log('well done');
// }


const myFirstFunction = function () {
    console.log('text in function');
}

myFirstFunction();
console.log(myFirstFunction);


const getSumTwoNums = function () {
    let userInput1 = promt('enter first number');
    let userInput2 = promt('enter second number');
        
    let checkEmpty = userInput1 === '' || userInput1 === null || userInput2 === '' || userInput2 === null;

    let sum = Number(userInput1) + Number(userInput2);

    if(checkEmpty || isNaN(sum)){
        console.log('error');
    }else{
        console.log(userInput1,'+',userInput2,'=',sum)
    }
}

getSumTwoNums();