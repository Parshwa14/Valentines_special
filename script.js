const form = document.getElementById('login-form');
const codeInput = document.getElementById('code');
const submitBtn = document.getElementById('submit-btn');
const resultDiv = document.getElementById('result');

const secretCode = 'Golu'; // Replace with your secret code
const nextPageUrl = 'main.html'; // Replace with the URL of the new page

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const userInput = codeInput.value.trim();

    if (userInput === secretCode) {
        resultDiv.innerHTML = '&#x1F497; Mera Ladduuuu &#x1F497;';
        resultDiv.style.color = '#ff3b5c';
        resultDiv.style.fontSize = '22px';
        resultDiv.className = 'correct-code';

        // Floating heart effect
        const hearts = document.createElement('div');
        hearts.innerHTML = '&#x1F496;&#x1F496;&#x1F496;';
        hearts.style.position = 'absolute';
        hearts.style.left = '50%';
        hearts.style.top = '50%';
        hearts.style.transform = 'translate(-50%, -50%)';
        hearts.style.fontSize = '50px';
        hearts.style.animation = 'floatUp 2s ease-in-out';
        document.body.appendChild(hearts);

        setTimeout(() => {
            hearts.remove();
            window.location.href = nextPageUrl;
        }, 2000);
    } else {
        resultDiv.innerHTML = '&#x1F621; Battameej...<br>Apna naam enter kare!';
        resultDiv.style.color = 'red';
        resultDiv.className = 'wrong-code';

        // Shake effect
        form.classList.add('shake');
        setTimeout(() => {
            form.classList.remove('shake');
        }, 500);
    }
});

// Heartfall Effect - Falling Hearts Border (All Sides)
function createHeartBorder() {
    const heart = document.createElement('div');
    heart.classList.add('falling-heart');
    heart.innerHTML = '&#x1F497;';
    document.body.appendChild(heart);

    const size = Math.random() * 15 + 7.5;
    heart.style.fontSize = `${size}px`;

    const side = Math.floor(Math.random() * 4);

    if (side === 0) {
        heart.style.left = `${Math.random() * window.innerWidth}px`;
        heart.style.top = '35px';
        heart.style.animation = 'heartFall linear infinite';
    } else if (side === 1) {
        heart.style.left = `${Math.random() * window.innerWidth}px`;
        heart.style.bottom = '35px';
        heart.style.animation = 'heartRise linear infinite';
    } else if (side === 2) {
        heart.style.left = '35px';
        heart.style.top = `${Math.random() * window.innerHeight}px`;
        heart.style.animation = 'heartMoveRight linear infinite';
    } else {
        heart.style.right = '35px';
        heart.style.top = `${Math.random() * window.innerHeight}px`;
        heart.style.animation = 'heartMoveLeft linear infinite';
    }

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeartBorder, 200);

const style = document.createElement('style');
style.innerHTML = `
    @keyframes floatUp {
        0% { transform: translate(-50%, -50%) scale(0.5); opacity: 1; }
        100% { transform: translate(-50%, -150%) scale(1.5); opacity: 0; }
    }

    .shake {
        animation: shake 0.5s ease-in-out;
    }

    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        50% { transform: translateX(5px); }
        75% { transform: translateX(-5px); }
    }

    .falling-heart {
        position: absolute;
        pointer-events: none;
        opacity: 1;
    }

    @keyframes heartFall {
        0% { transform: translateY(0px) rotate(0deg); opacity: 1; }
        100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
    }

    @keyframes heartRise {
        0% { transform: translateY(0px) rotate(0deg); opacity: 1; }
        100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
    }

    @keyframes heartMoveRight {
        0% { transform: translateX(0px) rotate(0deg); opacity: 1; }
        100% { transform: translateX(100vw) rotate(360deg); opacity: 0; }
    }

    @keyframes heartMoveLeft {
        0% { transform: translateX(0px) rotate(0deg); opacity: 1; }
        100% { transform: translateX(-100vw) rotate(360deg); opacity: 0; }
    }
`;
document.head.appendChild(style);
