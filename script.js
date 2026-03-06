
const BACK_URL = "https://files.cdn-files-a.com/uploads/10331168/2000_6931252094089.png";

const cardCodes = ["W1", "W2", "W3", "F1", "F2", "E1", "M1", "S1"];

function flipCard(card) {
  card.classList.toggle("flipped");

  const box = document.getElementById("selected-card-box");
  if (box) {
    box.innerText = "선택된 카드: " + card.dataset.code;
  }
}

function spreadCards() {
  const area = document.getElementById("card-area");
  if (!area) return;

  area.innerHTML = "";

  cardCodes.forEach((code) => {
    const card = document.createElement("div");
    card.className = "card";
    card.dataset.code = code;
    card.style.backgroundImage = `url("${BACK_URL}")`;
    card.onclick = () => flipCard(card);
    area.appendChild(card);
  });

  const box = document.getElementById("selected-card-box");
  if (box) {
    box.innerText = "선택된 카드: 없음";
  }
}

window.addEventListener("DOMContentLoaded", spreadCards);
window.spreadCards = spreadCards;
