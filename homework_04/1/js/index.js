//1-е Получить сумму кубов первых n натуральных чисел
function result() {
    for (var i = firstNum; i <= secondNum; i++) {
        sum = i * i * i + sum;
    }
}
var firstNum, secondNum, sum = 0;
firstNum = +prompt("Введите первое число");
secondNum = +prompt("Введите второе число");
if (isNaN(firstNum) || isNaN(secondNum)) {
    alert("Вы не знаете что такое числа?")
} else {
    if (firstNum > secondNum) {
        [firstNum,secondNum] = [secondNum, firstNum];
        result();
    } else {
        result();
    }
    alert("Сумма кубов чисел от" + " " + firstNum + " " + "до" + " " + secondNum + " " + "равна " + sum);
}