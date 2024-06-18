const pages = document.querySelectorAll('.page');
let currentPage = 0;

document.getElementById('next').addEventListener('click', () => {
    if (currentPage < pages.length - 1) {
        pages[currentPage].style.transform = 'rotateY(-180deg)';
        currentPage++;
    }
});

document.getElementById('prev').addEventListener('click', () => {
    if (currentPage > 0) {
        currentPage--;
        pages[currentPage].style.transform = 'rotateY(0deg)';
    }
});
