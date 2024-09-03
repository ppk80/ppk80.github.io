var dragItem = null;
var offsetX, offsetY;

document.addEventListener('mousedown', function(e) {
    if (e.target.tagName === 'IMG') {
        dragItem = e.target;
        offsetX = e.clientX - dragItem.getBoundingClientRect().left;
        offsetY = e.clientY - dragItem.getBoundingClientRect().top;
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    }
});

document.addEventListener('dragstart', function(e) {
    if (e.target.tagName === 'IMG') {
        e.preventDefault(); // Prevent default drag behavior
    }
});

function onMouseMove(e) {
    if (dragItem) {
        let newX = e.clientX - offsetX;
        let newY = e.clientY - offsetY;

        // Constrain the image within the viewport
        const rect = dragItem.getBoundingClientRect();
        const minX = 0;
        const minY = 0;
        const maxX = window.innerWidth - rect.width;
        const maxY = window.innerHeight - rect.height;

        // Ensure the image stays within bounds
        newX = Math.max(minX, Math.min(newX, maxX));
        newY = Math.max(minY, Math.min(newY, maxY));

        dragItem.style.left = newX + 'px';
        dragItem.style.top = newY + 'px';
    }
}

function onMouseUp() {
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
    dragItem = null;
}

// Function to position images based on percentages
function positionImage(img, xPercent, yPercent) {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const imgWidth = img.offsetWidth;
    const imgHeight = img.offsetHeight;

    // Calculate position based on percentages
    const posX = (screenWidth * xPercent / 100) - (imgWidth / 2);
    const posY = (screenHeight * yPercent / 100) - (imgHeight / 2);

    img.style.left = `${posX}px`;
    img.style.top = `${posY}px`;
}

// Initialize images with desired positions
const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');
const img4 = document.getElementById('img4');

positionImage(img1, 50, 25);
positionImage(img2, 50, 50);
positionImage(img3, 50, 75); 

