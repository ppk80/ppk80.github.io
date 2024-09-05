var dragItem = null;
var offsetX, offsetY;

// Event listeners for mouse events
document.addEventListener('mousedown', startDrag);
document.addEventListener('mousemove', onMouseMove);
document.addEventListener('mouseup', stopDrag);

// Event listeners for touch events
document.addEventListener('touchstart', startDrag);
document.addEventListener('touchmove', onTouchMove);
document.addEventListener('touchend', stopDrag);

function startDrag(e) {
    const target = e.target.tagName === 'IMG' ? e.target : null;
    if (target) {
        dragItem = target;

        // Get the initial offset
        const rect = dragItem.getBoundingClientRect();
        if (e.type === 'mousedown') {
            offsetX = e.clientX - rect.left;
            offsetY = e.clientY - rect.top;
        } else if (e.type === 'touchstart') {
            offsetX = e.touches[0].clientX - rect.left;
            offsetY = e.touches[0].clientY - rect.top;
        }
    }
}

function onMouseMove(e) {
    if (dragItem) {
        const newX = e.clientX - offsetX;
        const newY = e.clientY - offsetY;

        moveItem(newX, newY);
    }
}

function onTouchMove(e) {
    if (dragItem) {
        e.preventDefault(); // Prevent scrolling
        const newX = e.touches[0].clientX - offsetX;
        const newY = e.touches[0].clientY - offsetY;

        moveItem(newX, newY);
    }
}

function moveItem(newX, newY) {
    const viewfinderRect = document.getElementById('viewfinder').getBoundingClientRect();
    const rect = dragItem.getBoundingClientRect();

    const minX = viewfinderRect.left;
    const minY = viewfinderRect.top;
    const maxX = viewfinderRect.right - rect.width;
    const maxY = viewfinderRect.bottom - rect.height;

    const constrainedX = Math.max(minX, Math.min(newX, maxX));
    const constrainedY = Math.max(minY, Math.min(newY, maxY));

    dragItem.style.left = constrainedX + 'px';
    dragItem.style.top = constrainedY + 'px';
}

function stopDrag() {
    dragItem = null;
}
