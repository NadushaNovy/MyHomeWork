//First level: 1. Linear Search
// Given an array arr[] of N elements, the challenge is to write a function to find a given element x in arr[] .


// Линейный поиск используется для поиска ключевого элемента среди нескольких элементов. 
// Линейный поиск сегодня используется меньше, потому что он медленнее, чем бинарный поиск и хеширование.


// Алгоритм:


// Шаг 1: Обход массива
// Шаг 2: Сопоставьте ключевой элемент (key) с элементом массива
// Шаг 3: Если ключевой элемент найден, верните позицию индекса элемента массива.
// Шаг 4: Если ключевой элемент не найден, верните -1



const arr = [21, 25, 4, 5, 16];
function linearSearch(arr, key) {
for (let i = 0; i < arr.length; i++){
    if( arr[i] === key){
        return i;
    } 
    }
   return -1;
}

console.log(linearSearch(arr, 16 ));


// Find the element that appears once in a sorted array
// Given a sorted array in which all elements occur twice (one after the other) and one element appears only once.


// Простое решение состоит в обходе массива слева направо. Поскольку массив отсортирован, мы легко можем найти нужный элемент.


// Алгоритм:
// Шаг 1: Обход массива через один элемент
// Шаг 2: Если элемент отличается от первого то мы нашли не задублированный элемент
// Шаг 3: Вернем элемент или позицию в массиве
// Шаг 4: Если ключевой элемент не найден, верните -1 


function findElement(array) {
    for (let i = 0; i < array.length; i+=2){
   if(array[i] != array[i+1] ){
    return array[i];
   }
    }
    return -1;

} 
console.log (findElement([1, 1, 2, 2, 4, 4, 5, 6, 6]));
console.log (findElement([1, 1, 2]));