document.addEventListener("DOMContentLoaded", function () {
  const flashcards = [
    {
      english: "Where is the check-in counter?",
      thai: "เคาน์เตอร์เช็คอินอยู่ตรงไหนคะ",
      roman: "kao-ter check-in yùu dtrong-năi ká",
      audio: "checkin-counter-thai.m4a",
      id: "checkin-counter"
    },
    {
      english: "How many bags can I check in?",
      thai: "ฉันโหลดกระเป๋าได้กี่ใบคะ",
      roman: "chăn lòht grà-bpăo dâi gìi bai ká",
      audio: "How-many-bags-can-I-check-in-thai.m4a",
      id: "How-many-bags"
    },
    {
      english: "I would like to check in.",
      thai: "ฉันขอเช็คอินค่ะ",
      roman: "chăn khŏr check-in ká",
      audio: "i-want-to-checkin.mp3",
      id: "i-want-to-checkin"
    },
    {
      english: "Here is my passport.",
      thai: "นี่พาสปอร์ตของฉันค่ะ",
      roman: "nîi passport khŏng chăn ká",
      audio: "my-passport-thai.m4a",
      id: "my-passport"
    }
    // Add more flashcards
  ];

  let current = 0;
  const front = document.getElementById("front");
  const back = document.getElementById("back");

  function flipCard() {
    front.classList.toggle("hidden");
    back.classList.toggle("hidden");
  }

  function playAudio(id) {
    const audio = document.getElementById("audio-" + id);
    if (audio) {
      audio.currentTime = 0;
      audio.play();
    }
  }

  function nextCard() {
    current++;
    if (current >= flashcards.length) {
      alert("🎉 You've finished the review!");
      return;
    }

    front.classList.remove("hidden");
    back.classList.add("hidden");

    const card = flashcards[current];
    front.textContent = card.english;
    back.innerHTML = `
      <p class="thai-translation">${card.thai}</p>
      <p class="thai-romanization"><em>${card.roman}</em></p>
      <button class="audio-button" onclick="event.stopPropagation(); playAudio('${card.id}')">
      <span class="material-symbols-outlined" style="font-size: 24px;" >
        volume_up
        </span>
        </button>
      <audio id="audio-${card.id}" src="../audio/thai/airport/${card.audio}"></audio>
    `;
  }

  // Make functions available globally
  window.flipCard = flipCard;
  window.playAudio = playAudio;
  window.nextCard = nextCard;
});
