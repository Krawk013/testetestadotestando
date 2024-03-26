const backButton = document.getElementById('backButton');
const forwardButton = document.getElementById('forwardButton');
const urlInput = document.getElementById('urlInput');
const goButton = document.getElementById('goButton');
const contentFrame = document.getElementById('contentFrame');

backButton.addEventListener('click', () => {
    contentFrame.contentWindow.history.back();
});

forwardButton.addEventListener('click', () => {
    contentFrame.contentWindow.history.forward();
});

goButton.addEventListener('click', () => {
    contentFrame.src = urlInput.value;
});
