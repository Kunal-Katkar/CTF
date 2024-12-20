// Select the hidden button and the "show" button
let hiddenBtn = document.getElementById('openLinkBtn');



// Add a click event listener to the hidden button
hiddenBtn.addEventListener('click', () => {
    // Open Google in a new tab
    window.open('https://drive.google.com/file/d/1SX7nWsd_OXcsIV3UCRYTTpQ7nEkGtG6i/view', '_blank');
});
