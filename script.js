const pages = document.querySelectorAll('.page');
let currentPage = 0;

function updateZIndex() {
    pages.forEach((page, index) => {
        page.style.zIndex = (pages.length - Math.abs(currentPage - index)).toString();
    });
}

document.getElementById('next').addEventListener('click', () => {
    if (currentPage < pages.length - 1) {
        pages[currentPage].style.transform = 'rotateY(-180deg)';
        currentPage++;
        updateZIndex();
    }
});

document.getElementById('prev').addEventListener('click', () => {
    if (currentPage > 0) {
        currentPage--;
        pages[currentPage].style.transform = 'rotateY(0deg)';
        updateZIndex();
    }
});

// Initial zIndex setup
updateZIndex();
