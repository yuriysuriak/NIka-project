document.addEventListener('DOMContentLoaded', function() {
    // Бургер-меню
    const burgerMenu = document.querySelector('.burger-menu');
    const mobileNav = document.querySelector('.mobile-nav');
    
    if (burgerMenu && mobileNav) {
        burgerMenu.addEventListener('click', function() {
            this.classList.toggle('active');
            mobileNav.classList.toggle('active');
        });
        
        // Закриття меню при кліку на пункт
        mobileNav.querySelectorAll('.nav-item').forEach(link => {
            link.addEventListener('click', () => {
                burgerMenu.classList.remove('active');
                mobileNav.classList.remove('active');
            });
        });
    }

    // Плавна прокрутка
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Музичний плеєр
    const musicBtn = document.getElementById('music-btn');
    const bgMusic = document.getElementById('bg-music');
    let isPlaying = false;

    if (musicBtn && bgMusic) {
        musicBtn.addEventListener('click', function() {
            if (isPlaying) {
                bgMusic.pause();
            } else {
                bgMusic.play().catch(error => {
                    console.error('Помилка відтворення:', error);
                });
            }
            isPlaying = !isPlaying;
            updateButtonState();
        });

        function updateButtonState() {
            const icon = musicBtn.querySelector('i');
            icon.className = isPlaying ? 'fas fa-pause' : 'fas fa-play';
            document.getElementById('music-status').textContent = isPlaying ? 'Pause Music' : 'Play Music';
        }
    }
});