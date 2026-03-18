// Configurar la fecha de la boda: 19 de diciembre de 2026 a las 16:00
const weddingDate = new Date('December 19, 2026 16:00:00').getTime();

const countdown = setInterval(() => {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = days < 10 ? '0' + days : days;
    document.getElementById('hours').innerText = hours < 10 ? '0' + hours : hours;
    document.getElementById('minutes').innerText = minutes < 10 ? '0' + minutes : minutes;
    document.getElementById('seconds').innerText = seconds < 10 ? '0' + seconds : seconds;

    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById('timer').innerHTML = "¡HOY ES EL GRAN DÍA!";
    }
}, 1000);

function playMusic() {
    alert("Iniciando experiencia con música... (Aquí conectaremos el audio después)");
}

function startExperience() {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
}