document.addEventListener('DOMContentLoaded', function() {
    let thumbnails = document.querySelectorAll('.thumbnail');
    let modal = document.getElementById('modal');
    let modalImage = document.getElementById('modalImage');
    let closeModal = document.getElementById('closeModal');
    let prevButton = document.getElementById('prevButton');
    let nextButton = document.getElementById('nextButton');

    let currentIndex;

    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', function() {
            currentIndex = index;
            modalImage.src = thumbnail.src;
            modal.style.display = 'block';
        });
    });

    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    prevButton.addEventListener('click', function() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : thumbnails.length - 1;
        modalImage.src = thumbnails[currentIndex].src;
    });

    nextButton.addEventListener('click', function() {
        currentIndex = (currentIndex < thumbnails.length - 1) ? currentIndex + 1 : 0;
        modalImage.src = thumbnails[currentIndex].src;
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});
