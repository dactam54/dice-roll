const dice = document.querySelector('.dice');
const rollBtn = document.querySelector('.roll');
const result =  document.getElementById('result');

const randomDice = () => {
    const random = Math.floor(Math.random() * 10);
    if (random >= 1 && random <= 6) {
        rollDice(random);
    }
    else {
        randomDice();
    }
}

const rollDice = random => {
    dice.style.animation = 'rolling 4s';
    setTimeout(() => {
        switch (random) {
            case 1:
                dice.style.transform = 'rotateX(0deg) rotateY(0deg)';
                result1 = 1;
                result.innerHTML = `Result : 1`;
                break;
            case 6:
                dice.style.transform = 'rotateX(180deg) rotateY(0deg)';
                result1 = 6;
                result.innerHTML = `Result : 6`;
                break;
            case 2:
                dice.style.transform = 'rotateX(-90deg) rotateY(0deg)';
                result1 = 2;
                result.innerHTML = `Result : 2`;
                break;
            case 5:
                dice.style.transform = 'rotateX(90deg) rotateY(0deg)';
                result1 = 5;
                result.innerHTML = `Result : 5`;
                break;
            case 3:
                dice.style.transform = 'rotateX(0deg) rotateY(90deg)';
                result1 = 3;
                result.innerHTML = `Result : 3`;
                break;
            case 4:
                dice.style.transform = 'rotateX(0deg) rotateY(-90deg)';
                result1 = 4;
                result.innerHTML = `Result : 4`;
                break;
            default:
                break;
        }
        dice.style.animation = 'none';
    }, 3050);
}
rollBtn.addEventListener('click', randomDice);







