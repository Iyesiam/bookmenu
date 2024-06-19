const pages = document.querySelectorAll('.page');
let currentPage = 0;

document.getElementById('next').addEventListener('click', () => {
    if (currentPage < pages.length - 1) {
        pages[currentPage].style.animation = 'rollOut 1s forwards';
        pages[currentPage].addEventListener('animationend', () => {
            pages[currentPage].classList.add('hidden');
            currentPage++;
            pages[currentPage].classList.remove('hidden');
            pages[currentPage].style.animation = 'rollIn 1s forwards';
        }, { once: true });
    }
});

document.getElementById('prev').addEventListener('click', () => {
    if (currentPage > 0) {
        pages[currentPage].style.animation = 'rollOut 1s reverse forwards';
        pages[currentPage].addEventListener('animationend', () => {
            pages[currentPage].classList.add('hidden');
            currentPage--;
            pages[currentPage].classList.remove('hidden');
            pages[currentPage].style.animation = 'rollIn 1s reverse forwards';
        }, { once: true });
    }
});
