let hunger = 100;
let happiness = 100;
let cleanliness = 100;
let sleepy = 100;

const hungerStat = document.getElementById("hunger");
const happinessStat = document.getElementById("happiness");
const cleanlinessStat = document.getElementById("cleanliness");
const sleepyStat = document.getElementById("sleepy");

function eatApple() {
    happiness += 10;
    hunger += 10;
    cleanliness += 10; 
    happinessStat.innerText = "Happiness: " + happiness + "%";
    hungerStat.innerText = "Hunger: " + hunger + "%"; 
    cleanlinessStat.innerText = "Cleanliness: " + cleanliness + "%"; 
}
setInterval(function() {
    hunger -= 1;
    hungerStat.innerText = 'Hunger: ' + hunger + '%';
    if (hunger <= 0) {
        alert('Your pet has died from hunger!');
        location.reload();
    }
}, 2000);
 setInterval(function() {
    happiness -= 1;
    happinessStat.innerText = 'Happiness: ' + happiness + '%';
    if (happiness <= 0) {
        alert('Your pet has died from sadness!');
        location.reload();
    }
}, 6000);
 setInterval(function() {
    cleanliness -= 1;
    cleanlinessStat.innerText = 'Cleanliness: ' + cleanliness + '%';
    if (cleanliness <= 0) {
        alert('Your pet has died from dirtiness!');
        location.reload();
    }
}, 6000);
 setInterval(function() {
    sleepy -= 1;
    sleepyStat.innerText = 'Sleepy: ' + sleepy + '%';
    if (sleepy <= 0) {
        alert('Your pet has died from sleepiness!');
        location.reload();
    }
}, 6000);

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");


var snake = {
    x: 10,
    y: 10,
    size: 50,
    dx: 0,
    dy: 0,
    image: new Image(),
    imageSrc: "capy.png"
};

var food = {
    x: Math.floor(Math.random() * canvas.width / snake.size) * snake.size,
    y: Math.floor(Math.random() * canvas.height / snake.size) * snake.size,
    size: snake.size,
    image: new Image(),
    imageSrc: "food.png"
};

var score = 0;
var highScore = localStorage.getItem("high-score") || 0;

snake.image.src = snake.imageSrc;
food.image.src = food.imageSrc;

document.addEventListener("keydown", function (event) {
    if (event.keyCode === 37 && snake.dx === 0) {
        snake.dx = -snake.size;
        snake.dy = 0;
    } else if (event.keyCode === 38 && snake.dy === 0) {
        snake.dy = -snake.size;
        snake.dx = 0;
    } else if (event.keyCode === 39 && snake.dx === 0) {
        snake.dx = snake.size;
        snake.dy = 0;
    } else if (event.keyCode === 40 && snake.dy === 0) {
        snake.dy = snake.size;
        snake.dx = 0;
    }
});

function drawSnake() {
    ctx.drawImage(snake.image, snake.x, snake.y, snake.size, snake.size);

    snake.size += 1;
    if (snake.size > 200){
        snake.size = 200;
    }
}

function moveSnake() {
    snake.x += snake.dx;
    snake.y += snake.dy;
    
    if (snake.x + snake.size < 0) {
        snake.x = canvas.width;
    } else if (snake.x >= canvas.width) {
        snake.x = -snake.size;
    } else if (snake.y + snake.size < 0) {
        snake.y = canvas.height;
    } else if (snake.y >= canvas.height) {
        snake.y = -snake.size;
    }
}


function drawFood() {
    ctx.drawImage(food.image, food.x, food.y, food.size, food.size);
}

function checkCollision() {
    if (snake.x < food.x + food.size &&
        snake.x + snake.size > food.x &&
        snake.y < food.y + food.size &&
        snake.y + snake.size > food.y) {
        score++;
        if (score > highScore) {
            highScore = score;
            localStorage.setItem("high-score", highScore);
            document.getElementById("high-score").textContent = highScore;
        }
        document.getElementById("score").textContent = score;
        eatApple();
        food.x = Math.floor(Math.random() * canvas.width / snake.size) * snake.size;
        food.y = Math.floor(Math.random() * canvas.height / snake.size) * snake.size;
    }
}


function resetGame() {
    score = 0;
    document.getElementById("score").textContent = score;
    snake.x = 10;
    snake.y = 10;
    snake.dx = 0;
    snake.dy = 0;
    food.x = Math.floor(Math.random() * canvas.width / snake.size) * snake.size;
    food.y = Math.floor(Math.random() * canvas.height / snake.size) * snake.size;
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawSnake(100);
    moveSnake();
    drawFood();
    checkCollision();
    if (score > 0 && score % 10 === 0) {
        snake.size = 50;
    } else {
        snake.size = 50;
    }
}

var intervalId;

function startGame() {
    document.getElementById("high-score").textContent = highScore;
    intervalId = setInterval(draw, 200);
}

document.getElementById("start-button").addEventListener("click", function () {
    startGame();
});

document.getElementById("reset-button").addEventListener("click", function () {
    clearInterval(intervalId);
    resetGame();
});

draw();