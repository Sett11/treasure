function factorial(n) {
    var result = 1;
    while (n) {
        result *= n--;
    }
    return result;
}
console.log(factorial(7));

let clics = 0;
let heady = document.querySelector(".heady");
heady.addEventListener('click', () => {
    heady.classList.add('headyBad');
    clics++
    if (clics === 2) {
        heady.classList.remove('headyBad');
        clics = 0;
    }
});
let button = document.querySelector(".button");
let map = document.querySelector(".map");
let clicS = 0;
button.addEventListener('click', () => {
    map.classList.add('mapOpen');
    clicS++
    if (clicS === 2) {
        map.classList.remove('mapOpen');
        clicS = 0;
    }
})

// Получить случайное число от 0 до size-1
var getRandomNumber = function(size) {
    return Math.floor(Math.random() * size);
};
// Вычислить расстояние от клика (event) до клада (target)
var getDistance = function(event, target) {
    var diffX = event.offsetX - target.x;
    var diffY = event.offsetY - target.y;
    return Math.sqrt((diffX * diffX) + (diffY * diffY));
};
// Получить для расстояния строку подсказки
var getDistanceHint = function(distance) {
    if (distance < 10) {
        return "Обожжешься!";
    } else if (distance < 20) {
        return "Очень-очень горячо!"
    } else if (distance < 30) {
        return "Очень горячо";
    } else if (distance < 60) {
        return "Горячо";
    } else if (distance < 120) {
        return "Тепло";
    } else if (distance < 240) {
        return "Холодно";
    } else if (distance < 480) {
        return "Очень холодно";
    } else if (distance < 580) {
        return "Очень-очень холодно!"
    } else {
        return "Замерзнешь!";
    }
};
// Создаем переменные
var width = 600;
var height = 600;
var clicks = 0;
// Случайная позиция клада
var target = {
    x: getRandomNumber(width),
    y: getRandomNumber(height)
};
let distanceHant = 100;
// Добавляем элементу img обработчик клика
$("#map").click(function(event) {
    clicks++;
    if (clicks > 100) {
        alert("Попробуй ещё, долбоёбик...");
        clicks = 0;
    }
    distanceHant--;
    // Получаем расстояние от места клика до клада
    var distance = getDistance(event, target);
    // Преобразуем расстояние в подсказку
    var distanceHint = getDistanceHint(distance);
    // Записываем в элемент #distance новую подсказку
    $("#distance").text(distanceHint);
    $("#clicks").text(distanceHant);
    // Если клик был достаточно близко, поздравляем с победой
    if (distance < 20) {
        alert("Клад найден! Сделано кликов: " + clicks);
    }
});