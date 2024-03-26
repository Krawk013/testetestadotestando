const backButton = document.getElementById('backButton');
const forwardButton = document.getElementById('forwardButton');
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const contentFrame = document.getElementById('contentFrame');

backButton.addEventListener('click', () => {
    contentFrame.contentWindow.history.back();
});

forwardButton.addEventListener('click', () => {
    contentFrame.contentWindow.history.forward();
});

searchButton.addEventListener('click', () => {
    const searchTerm = encodeURIComponent(searchInput.value.trim());
    const searchUrl = `https://www.google.com/search?q=${searchTerm}`;
    contentFrame.src = searchUrl;
});
