// Splash Screen Disappears After 3 Seconds
setTimeout(() => {
    document.getElementById('splash-screen').style.display = 'none';
}, 7000);

// Interactive Love Button
const loveButton = document.getElementById('love-button');
const surpriseMessage = document.getElementById('surprise-message');

loveButton.addEventListener('click', () => {
    surpriseMessage.classList.add('visible');
    triggerConfetti();
});

// Confetti Animation
function triggerConfetti() {
    const confettiSettings = { target: 'confetti-canvas' };
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();

    setTimeout(() => {
        confetti.clear();
    }, 3000); // Confetti lasts for 3 seconds
}



// Countdown Timer
const countdown = () => {
    const targetDate = new Date('February 14, 2024 00:00:00').getTime();
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;
};

setInterval(countdown, 1000);

// Typewriter Effect for Love Message

const partnerName = "Abhishek"; // Replace with your partner's name
const message = `You are the most amazing person in my life, ${partnerName}. Every moment with you is a treasure, and I cherish every second we spend together. 
You make my world brighter, and I am so grateful to have you by my side. I love you more than words can express. 
Happy Valentine's Day, my love! ❤️`;

let index = 0;

const typewriter = () => {
    if (index < message.length) {
        document.getElementById('dynamic-message').innerText += message.charAt(index);
        index++;
        setTimeout(typewriter, 50); // Adjust speed here
    }
};

typewriter();

document.getElementById('partner-name').textContent = partnerName;
document.getElementById('dynamic-message').textContent = dynamicMessage;







