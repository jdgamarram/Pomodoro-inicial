let workTime = 25 * 60; // 25 minutos en segundos
let breakTime = 5 * 60; // 5 minutos en segundos
let timeLeft = workTime; // Tiempo inicial
let timerInterval; // Variable para el intervalo
let isWorking = true; // Estado del temporizador (trabajo o descanso)

// Elementos del DOM
const timerDisplay = document.getElementById('timer');
const statusDisplay = document.getElementById('status');
const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');

// Función para iniciar el temporizador
function startTimer() {
    if (!timerInterval) {
        timerInterval = setInterval(updateTimer, 1000);
    }
}

// Función para pausar el temporizador
function pauseTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
}

// Función para reiniciar el temporizador
function resetTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
    isWorking = true;
    timeLeft = workTime;
    updateDisplay();
}

// Función para actualizar el temporizador
function updateTimer() {
    if (timeLeft > 0) {
        timeLeft--;
    } else {
        clearInterval(timerInterval);
        isWorking = !isWorking; // Cambia entre trabajo y descanso
        timeLeft = isWorking ? workTime : breakTime; // Asigna el nuevo tiempo
        startTimer(); // Reinicia el temporizador automáticamente
    }
    updateDisplay();
}

// Función para actualizar la pantalla
function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    statusDisplay.textContent = isWorking ? 'Tiempo de Trabajo' : 'Tiempo de Descanso';
    document.body.style.backgroundColor = isWorking ? '#f4f4f4' : '#d4edda'; // Cambia el color de fondo
}

// Event listeners para los botones
startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);

// Inicializar la pantalla
updateDisplay();