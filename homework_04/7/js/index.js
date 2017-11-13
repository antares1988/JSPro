/*7-е Получить на ввод количество рублей и копеек и вывести в правильной форме в виде текста, например, три рубля, одиннадцать рублей
тридцать пять копеек, двадцать две копейки.*/
var rub = prompt("Введите количество рублей");
var arr = rub.split('');
arr.reverse();
var unit, teen, hundred;

if (rub.length <= 3 && rub.length != 0) {
    switch (arr[0]) {
    case "0":
        unit = "рублей";
        break;
    case "1":
        unit = "один рубль";
        break;
    case "2":
        unit = "два рубля";
        break;
    case "3":
        unit = "три рубля";
        break;
    case "4":
        unit = "четыре рубля";
        break;
    case "5":
        unit = "пять рублей";
        break;
    case "6":
        unit = "шесть рублей";
        break;
    case "7":
        unit = "семь рублей";
        break;
    case "8":
        unit = "восемь рублей";
        break;
    case "9":
        unit = "девять рублей";
        break;
    }

    switch (arr.length > 1 && arr[1,
    0]) {
    case "1", "0":
        teen = "десять рублей";
        break;
    case "1", "1":
        teen = "одинадцать рублей";
        break;
    case "1", "2":
        teen = "двенадцать рублей";
        break;
    case "1", "3":
        teen = "тринадцать рублей";
        break;
    case "1", "4":
        teen = "четырнадцать рублей";
        break;
    case "1", "5":
        teen = "пятнадцать рублей";
        break;
    case "1", "6":
        teen = "шестнадцать рублей";
        break;
    case "1", "7":
        teen = "семнадцать рублей";
        break;
    case "1", "8":
        teen = "восемнадцать рублей";
        break;
    case "1", "9":
        teen = "девятнадцать рублей";
        break;
    }
    switch (arr[1]) {
    case "2":
        teen = ("двадцать " + unit);
        break;
    case "3":
        teen = ("тридцать " + unit);
        break;
    case "4":
        teen = ("сорок " + unit);
        break;
    case "5":
        teen = ("пятьдесят " + unit);
        break;
    case "6":
        teen = ("шестьдесят " + unit);
        break;
    case "7":
        teen = ("семьдесят " + unit);
        break;
    case "8":
        teen = ("восемьдесят " + unit);
        break;
    case "9":
        teen = ("девяносто " + unit);
        break;
    }
    switch (arr[2]) {
    case "1":
        hundred = ("сто " + teen);
        break;
    case "2":
        hundred = ("двести " + teen);
        break;
    case "3":
        hundred = ("триста " + teen);
        break;
    case "4":
        hundred = ("четыриста " + teen);
        break;
    case "5":
        hundred = ("пятьсот " + teen);
        break;
    case "6":
        hundred = ("шестьсот " + teen);
        break;
    case "7":
        hundred = ("семьсот " + teen);
        break;
    case "8":
        hundred = ("восемьсот " + teen);
        break;
    case "9":
        hundred = ("девятьсот " + teen);
        break;
    }
} else if (rub.length <= 0) {
    alert("Вам подкинуть?");
} else {
    alert("Ого, а Вы налоги заплатили?");
}

var kop = prompt("Введите количество копеек");
var arrKop = kop.split('');
arrKop.reverse();
var unitKop, teenKop;

if (kop.length <= 2) {
    switch (arrKop[0]) {
    case "0":
        unitKop = "копеек";
        break;
    case "1":
        unitKop = "одна копейка";
        break;
    case "2":
        unitKop = "две копейки";
        break;
    case "3":
        unitKop = "три копейки";
        break;
    case "4":
        unitKop = "четыре копейки";
        break;
    case "5":
        unitKop = "пять копеек";
        break;
    case "6":
        unitKop = "шесть копеек";
        break;
    case "7":
        unitKop = "семь копеек";
        break;
    case "8":
        unitKop = "восемь копеек";
        break;
    case "9":
        unitKop = "девять копеек";
        break;
    }

    switch (arrKop.length > 1 && arrKop[1,
    0]) {
    case "1", "0":
        teenKop = "десять копеек";
        break;
    case "1", "1":
        teenKop = "одинадцать копеек";
        break;
    case "1", "2":
        teenKop = "двенадцать копеек";
        break;
    case "1", "3":
        teenKop = "тринадцать копеек";
        break;
    case "1", "4":
        teenKop = "четырнадцать копеек";
        break;
    case "1", "5":
        teenKop = "пятнадцать копеек";
        break;
    case "1", "6":
        teenKop = "шестнадцать копеек";
        break;
    case "1", "7":
        teenKop = "семнадцать копеек";
        break;
    case "1", "8":
        teenKop = "восемнадцать копеек";
        break;
    case "1", "9":
        teenKop = "девятнадцать копеек";
        break;
    }
    switch (arrKop[1]) {
    case "2":
        teenKop = ("двадцать " + unitKop);
        break;
    case "3":
        teenKop = ("тридцать " + unitKop);
        break;
    case "4":
        teenKop = ("сорок " + unitKop);
        break;
    case "5":
        teenKop = ("пятьдесят " + unitKop);
        break;
    case "6":
        teenKop = ("шестьдесят " + unitKop);
        break;
    case "7":
        teenKop = ("семьдесят " + unitKop);
        break;
    case "8":
        teenKop = ("восемьдесят " + unitKop);
        break;
    case "9":
        teenKop = ("девяносто " + unitKop);
        break;
    }

} else {
    alert("Некорректно заполнены данные");
}
var rubAlert, kopAlert;
if (arr.length == 0) {
    rubAlert = "Ноль рублей"
} else if (arr.length == 1) {
    rubAlert = unit;
} else if (arr.length == 2) {
    rubAlert = teen;
} else if (arr.length == 3) {
    rubAlert = hundred;
}
if (arrKop.length == 0) {
    kopAlert = "Ноль копеек"
} else if (arrKop.length == 1) {
    kopAlert = unitKop;
} else if (arrKop.length == 2) {
    kopAlert = teenKop;
}

alert(rubAlert + " " + kopAlert);