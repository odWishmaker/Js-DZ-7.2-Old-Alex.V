// ДЗ 20. DOM начало
// В html создать 12 div
// С помощью js найти эти div
// Всем четным div добавить текст
//  "Я четный элемент №(добавить сюда номер по порядку)"
// Всем нечетным div добавить текст 
// "Я нечетный элемент №(добавить сюда номер по порядку)"


let allDiv = document.getElementsByTagName('div');

for (let i = 1; i <= allDiv.length; i++) {
    console.log(allDiv)
    if (i % 2 ) {
        allDiv[i - 1].innerText = ' Четный элемент № ' + (i + 1) / 2;
    } else {
        allDiv[i - 1].innerText = 'Нечетный элемент № ' + i / 2;
    }
}

console.log(allDiv);
