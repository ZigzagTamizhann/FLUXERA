
document.addEventListener("DOMContentLoaded", function() {
    const popup = document.getElementById('popup');
    const phoneLink = document.getElementById('phone-link');
  
    const openPopup = () => {
        popup.classList.add('open-popup');
    };
  
    const closePopup = () => {
        popup.classList.remove('open-popup');
    };
  
    phoneLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default action of the link
        openPopup(); // Open the popup when the phone icon is clicked
    });

    // Optionally, you can add a delay to automatically close the popup
    setTimeout(closePopup, 5000); // Close after 5 seconds
});
