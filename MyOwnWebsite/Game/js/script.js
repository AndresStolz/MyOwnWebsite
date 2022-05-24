const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');
const btn = document.querySelector('.button');
const play = document.querySelector('.play');

function jump() {
    if (dino.classList != 'jump') {
        dino.classList.add("jump");
    }
    setTimeout (function() {
        dino.classList.remove("jump");
    }, 300)
}

function addScore() {
    if (btn.classList.contains('active')) {
        let setScore = btn.textContent;
        btn.textContent = parseInt(setScore) + 1;
    }
}

document.addEventListener('keydown', e => {
    e.preventDefault();
    cactus.classList.add('active');
    btn.classList.add('active');
    play.style.display = 'none';
    jump();
})

let isAlive = setInterval (function() {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));
    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
        alert(`Game Over\nYour score: ${btn.textContent}`)
        cactus.classList.remove('active');
        btn.classList.remove('active');
        play.style.display = 'block';
        btn.textContent = 0;
    } addScore();
})

