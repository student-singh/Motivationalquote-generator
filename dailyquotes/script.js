document.addEventListener('DOMContentLoaded', function() {
    const popupBox = document.querySelector('.popup-box');
    const closeBtn = document.querySelector('.close-btn');
  
    // Show the pop-up box when the page is loaded
    popupBox.style.display = 'block';
  
    // Close the pop-up box when the close button is clicked
    closeBtn.addEventListener('click', function() {
      popupBox.style.display = 'none';
    });
  });
  