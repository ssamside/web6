// Додаємо слухач подій після завантаження сторінки
document.addEventListener('DOMContentLoaded', () => {
    // Змінити текст заголовка при наведенні на нього
    const header = document.querySelector('header h1');
    header.addEventListener('mouseover', () => {
        header.style.transform = 'scale(1.2)';
        header.style.transition = 'transform 0.3s';
    });

    header.addEventListener('mouseout', () => {
        header.style.transform = 'scale(1)';
    });

    // Динамічні елементи каталогу
    const categories = document.querySelectorAll('.category');
    categories.forEach((category) => {
        // Анімація при натисканні
        category.addEventListener('click', () => {
            category.style.transition = 'transform 0.3s';
            category.style.transform = 'scale(1.1)';
            setTimeout(() => {
                category.style.transform = 'scale(1)';
            }, 300);
        });
    });
});
