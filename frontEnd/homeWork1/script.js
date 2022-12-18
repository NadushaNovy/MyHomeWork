// функция isAbsoluteBalance принимает на вход строку
// и возвращает true, если в строке поровну символов a и не-а
// И символы "а" идут через один
// пример: isAbsoluteBalance("мама") -> true
// isAbsoluteBalance("папа") -> true
// isAbsoluteBalance("аааббб") -> false

function countLetter(str, letter) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (letter === str[i]) {
         count++
        }
    }
    return count;
}

function isAbsoluteBalance(str) {
  
    for (let i = 0; i < str.length - 1; i++) {
        if (str[i] === str[i + 1]) {
        
            return false;
        } 
        
    }
    return countLetter(str, 'а') === str.length * 0.5; 
}
console.log(isAbsoluteBalance('аааббб'));
console.log(isAbsoluteBalance('мама'));
console.log(isAbsoluteBalance('папа'));
console.log(isAbsoluteBalance('абабаабб'));

// функция getDiagonal принимает стороны параллелипипеда a, b, c
// и возвращает диагональ этого параллелипипеда


function getDiagonal (a, b, c){
    let diagonal = Math.pow(a **2 + b**2 + c**2, 1/2);
    return diagonal;
}
console.log(getDiagonal(4, 5, 6).toFixed(2));

// функция maskWords принимает строку str и число num
// и заменяет num слов на соответствующее количество *
// начиная с конца. Пример console.log(maskWords("Мама мыла раму", 2))
// выведет Мама **** ****

function countWords (str){
    return countLetter(str, " ") + 1;
  }
function maskWords (str, num){
    let result = "";
    let FoundSpace = 0;
    let countWord =  countWords( str, ' ')

    for (let i = 0; i < str.length; i++) {
       
        if (countWord >= num){
            let space = countWord - num;

        
        if (str[i] === " "){
            FoundSpace++;  
        }
        let letter;
        if (str[i] === " "){
            letter = " ";
        } else if (FoundSpace >= space){
            letter = '*';
        } else {
            letter = str[i];
        }
        result = result + letter;
    }
    else {
        let leter;
        if(str[i] === ' '){
            leter = ' ';
        } 
        else{
            leter = '*';
        }
        result += leter; 
    } 
}
    return result;

}

console.log(maskWords("Мама мыла раму", 2 ));

// функция countCats принимает на вход массив строк и возвращает
// количество строк, у которых есть подстрока "cat"
// пример countCats(["cat", "mama-cat", "papa-cat", "dog"]) -> 3

function countCats(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes("cat")) {
            result++;
        }

    }
    return result;

}
console.log(countCats(["cat", "mama-cat", "papa-cat", "dog"]));

// ПРОДВИНУТЫЙ УРОВЕНЬ
// функция flattenArray принимает на вход вложенную структуру
// вида, например, [ 1, 2, [7, 14, -8], [], [ [ [ [ 44 ] ] ] ] ]
// и возвращает её "плоскую" копию
// (в примере: [ 1, 2, 7, 14, -8, 44 ])
// Подсказка: понадобится typeof. В массиве могут быть или другие
// массивы или числа

function flattenArray (arr){
    let newArr = [];
    for (let i = 0; i < arr.length; i++){
  if (typeof arr[i] === 'number'){
    newArr[i] = arr[i];
  }
   else if (typeof arr[i] === 'object'){
    let arrayElement = arr[i];
    for (let j = 0; j < arrayElement.length; j++ ){
    newArr.push(arrayElement[j]);
    
  }
    
}
    }
return newArr;
}
console.log(flattenArray([ 1, 2, [7, 14, -8], [], [ [ [ [ 44 ] ] ] ] ]));


