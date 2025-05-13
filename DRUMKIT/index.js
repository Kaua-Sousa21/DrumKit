'use strict';

const sons = {
    'C': 'kick.wav',
    'N': 'kick.wav',
    'V': 'snare.wav',
    'B': 'snare.wav',
    'Z': 'stick.wav',
    'D': 'hihat-closed.wav',
    'A': 'hihat-closed.wav',
    'S': 'hihat-open.wav',
    'F': 'tom-1.wav',
    'G': 'tom-2.wav',
    'H': 'tom-3.wav',
    'J': 'tom-4.wav',
    'M': 'tom-5.wav',
    'U': 'crash.wav',
    'W': 'ride.wav',
    'X': 'clap.wav'
};

const volumes = {
    'C': 1.0,   // Kick 1
    'N': 1.0,   // Kick 2
    'V': 1.0,   // Snare 1
    'B': 1.0,   // Snare 2
    'Z': 1.0,   // stick
    'D': 0.5,   // Closed HiHat
    'A': 0.25,  // Open HiHat
    'S': 0.5,   // Mid HiHat
    'F': 1.0,   // Tom HH
    'G': 1.0,   // Tom H
    'H': 1.0,   // Tom M
    'J': 1.0,   // Tom L
    'M': 1.0,   // Tom LL
    'U': 0.5,   // Crash
    'W': 0.5,    // Ride
    'X': 1.0,
};

const criarDiv = (texto) => {
    const div = document.createElement('div');
    div.classList.add('key');
    div.textContent = texto;
    div.id = texto;
    document.getElementById('container').appendChild(div);
};

const exibir = (sons) => Object.keys(sons).forEach(criarDiv);

const tocarSom = (letra) => {
    const audio = new Audio(`assets/sounds/${sons[letra]}`);
    audio.volume = volumes[letra] ?? 1.0; // usa 1.0 se não tiver volume definido
    audio.play();
};

const adicionarEfeito = (letra) => {
    document.getElementById(letra).classList.add('active');
};

const removerEfeito = (letra) => {
    const div = document.getElementById(letra);
    const removeActive = () => div.classList.remove('active');
    div.addEventListener('transitionend', removeActive, { once: true });
};

const ativarDiv = (evento) => {
    const letra = evento.type === 'click' ? evento.target.id : evento.key.toUpperCase();
    const letraPermitida = sons.hasOwnProperty(letra);
    if (letraPermitida) {
        adicionarEfeito(letra);
        tocarSom(letra);
        removerEfeito(letra);
    }
};

exibir(sons);

document.getElementById('container').addEventListener('click', ativarDiv);

window.addEventListener('keydown', ativarDiv);

