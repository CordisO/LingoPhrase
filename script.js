// Only redirect after loading if on the loading screen
if (document.body.classList.contains("loading-body")) {
  setTimeout(() => {
    window.location.href = "language.html";
  }, 5000);
}

// Audio play function
function playAudio(id) {
  const audio = document.getElementById(`audio-${id}`);
  if (audio) {
    audio.currentTime = 0;
    audio.play();
  }
}