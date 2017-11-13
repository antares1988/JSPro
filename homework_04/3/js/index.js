//3-е Создать массив из n случайных чисел от 0 до 10 и вывести его
var num = +prompt("Введите число");

for (var i = 0; i < num; i++) {
    randomNum = (Math.round((Math.random()) * 10));
    var arra = [i];
    arra.push(randomNum);
    console.log(arra);
}