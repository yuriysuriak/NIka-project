const audio = document.querySelector('#audio');
const btnka = document.querySelector('#btnka');

btnka.addEventListener('click', () => {
    audio.isPlaying ? audio.play() : audio.pause();
});

document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('audio');
    const musicToggle = document.getElementById('music-toggle');
    const musicIcon = document.getElementById('music-icon');
    const btnka = document.getElementById('btnka'); // Кнопка для відтворення/пауза музики

    let isPlaying = false; // Початковий стан - музика не грає

    // Додаємо подію на кнопку
    btnka.addEventListener('click', () => {
        if (isPlaying) {
            audio.pause(); // Зупиняємо музику
            musicIcon.src = 'ear-muffs_10898488.png'; // Іконка для музики, коли вона на паузі
            btnka.textContent = 'Play'; // Змінюємо текст кнопки на "Play"
        } else {
            audio.play(); // Відтворюємо музику
            musicIcon.src = '1109198e-eb9d-4b13-ac1f-a83118e94801_removalai_preview.png'; // Іконка для музики, коли вона відтворюється
            btnka.textContent = 'Pause'; // Змінюємо текст кнопки на "Pause"
        }
        isPlaying = !isPlaying; // Перемикаємо стан
    });

    // Додаємо подію на іконку
    musicToggle.addEventListener('click', () => {
        if (isPlaying) {
            audio.pause(); // Зупиняємо музику
            musicIcon.src = '1109198e-eb9d-4b13-ac1f-a83118e94801_removalai_preview.png'; // Іконка для музики, коли вона на паузі
        } else {
            audio.play(); // Відтворюємо музику
            musicIcon.src = 'ear-muffs_10898488.png'; // Іконка для музики, коли вона відтворюється
        }
        isPlaying = !isPlaying; // Перемикаємо стан
    });
});
