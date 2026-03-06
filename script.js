const BACK_URL = "https://files.cdn-files-a.com/uploads/10331168/2000_6931252094089.png";

const cardImageMap = {
  W1: "https://files.cdn-files-a.com/uploads/10331168/2000_6931251fd6fb7.png",
  W2: "https://files.cdn-files-a.com/uploads/10331168/2000_6931251fd4d45.png",
  W3: "https://files.cdn-files-a.com/uploads/10331168/2000_693125200d6b1.png",
  W4: "https://files.cdn-files-a.com/uploads/10331168/2000_693125200fa81.png",
  W5: "https://files.cdn-files-a.com/uploads/10331168/2000_693125200e5d4.png",
  W6: "https://files.cdn-files-a.com/uploads/10331168/2000_69312520101de.png",
  W7: "https://files.cdn-files-a.com/uploads/10331168/2000_693125200fb22.png",
  W8: "https://files.cdn-files-a.com/uploads/10331168/2000_693125203a359.png",
  W9: "https://files.cdn-files-a.com/uploads/10331168/2000_693125200dcbf.png",
  W10: "https://files.cdn-files-a.com/uploads/10331168/2000_693125200e61a.png",
  W11: "https://files.cdn-files-a.com/uploads/10331168/2000_693125207d2b0.png",

  F1: "https://files.cdn-files-a.com/uploads/10331168/2000_693125215994e.png",
  F2: "https://files.cdn-files-a.com/uploads/10331168/2000_69312521cf263.png",
  F3: "https://files.cdn-files-a.com/uploads/10331168/2000_69312521c190f.png",
  F4: "https://files.cdn-files-a.com/uploads/10331168/2000_69312521e93c6.png",
  F5: "https://files.cdn-files-a.com/uploads/10331168/2000_69312521f07aa.png",
  F6: "https://files.cdn-files-a.com/uploads/10331168/2000_693125221afd8.png",
  F7: "https://files.cdn-files-a.com/uploads/10331168/2000_69312522226b7.png",
  F8: "https://files.cdn-files-a.com/uploads/10331168/2000_6931252224881.png",
  F9: "https://files.cdn-files-a.com/uploads/10331168/2000_693125223cff8.png",
  F10: "https://files.cdn-files-a.com/uploads/10331168/2000_693125223d298.png",
  F11: "https://files.cdn-files-a.com/uploads/10331168/2000_693125224e6c8.png",

  E1: "https://files.cdn-files-a.com/uploads/10331168/2000_6931252097fce.png",
  E2: "https://files.cdn-files-a.com/uploads/10331168/2000_69312520a2e69.png",
  E3: "https://files.cdn-files-a.com/uploads/10331168/2000_69312520ab9e3.png",
  E4: "https://files.cdn-files-a.com/uploads/10331168/2000_69312520b4ef1.png",
  E5: "https://files.cdn-files-a.com/uploads/10331168/2000_69312520c3f06.png",
  E6: "https://files.cdn-files-a.com/uploads/10331168/2000_693125211e929.png",
  E7: "https://files.cdn-files-a.com/uploads/10331168/2000_6931252128609.png",
  E8: "https://files.cdn-files-a.com/uploads/10331168/2000_6931252125906.png",
  E9: "https://files.cdn-files-a.com/uploads/10331168/2000_6931252136194.png",
  E10: "https://files.cdn-files-a.com/uploads/10331168/2000_6931252146ada.png",
  E11: "https://files.cdn-files-a.com/uploads/10331168/2000_693125215955f.png",

  M1: "https://files.cdn-files-a.com/uploads/10331168/2000_6931252288a59.png",
  M2: "https://files.cdn-files-a.com/uploads/10331168/2000_6931252293c57.png",
  M3: "https://files.cdn-files-a.com/uploads/10331168/2000_69312522a5609.png",
  M4: "https://files.cdn-files-a.com/uploads/10331168/2000_69312522b281e.png",
  M5: "https://files.cdn-files-a.com/uploads/10331168/2000_6931252318ea0.png",
  M6: "https://files.cdn-files-a.com/uploads/10331168/2000_69312522eb1e4.png",
  M7: "https://files.cdn-files-a.com/uploads/10331168/2000_69312523120ef.png",
  M8: "https://files.cdn-files-a.com/uploads/10331168/2000_6931252311ecd.png",
  M9: "https://files.cdn-files-a.com/uploads/10331168/2000_693125232bf28.png",
  M10: "https://files.cdn-files-a.com/uploads/10331168/2000_6931252339422.png",
  M11: "https://files.cdn-files-a.com/uploads/10331168/2000_6931252369f77.png",

  S1: "https://files.cdn-files-a.com/uploads/10331168/2000_693125233eb03.png",
  S2: "https://files.cdn-files-a.com/uploads/10331168/2000_6931e65e2f5de.png",
  S3: "https://files.cdn-files-a.com/uploads/10331168/2000_693125235a74e.png",
  S4: "https://files.cdn-files-a.com/uploads/10331168/2000_6931252389ee1.png",
  S5: "https://files.cdn-files-a.com/uploads/10331168/2000_693125239933a.png",
  S6: "https://files.cdn-files-a.com/uploads/10331168/2000_69312523a35fc.png",
  S7: "https://files.cdn-files-a.com/uploads/10331168/2000_69312523cee0d.png",
  S8: "https://files.cdn-files-a.com/uploads/10331168/2000_6931e31ad7c77.png",
  S9: "https://files.cdn-files-a.com/uploads/10331168/2000_693125240f44f.png",
  S10: "https://files.cdn-files-a.com/uploads/10331168/2000_693125241f093.png",
  S11: "https://files.cdn-files-a.com/uploads/10331168/2000_693125241cf29.png"
};

const cardCodes = Object.keys(cardImageMap);

function flipCard(card) {
  const code = card.dataset.code;
  const imgUrl = cardImageMap[code];

  document.querySelectorAll(".card").forEach((c) => {
    c.classList.remove("flipped");
    c.style.backgroundImage = `url("${BACK_URL}")`;
  });

  card.style.backgroundImage = `url("${imgUrl}")`;
  card.classList.add("flipped");

  const box = document.getElementById("selected-card-box");
  if (box) box.innerText = "선택된 카드: " + code;
}

function spreadCards() {
  const area = document.getElementById("card-area");
  if (!area) return;

  area.innerHTML = "";

  const shuffled = [...cardCodes].sort(() => Math.random() - 0.5);

  shuffled.forEach((code) => {
    const card = document.createElement("div");
    card.className = "card";
    card.dataset.code = code;
    card.style.backgroundImage = `url("${BACK_URL}")`;
    card.onclick = () => flipCard(card);
    area.appendChild(card);
  });

  const box = document.getElementById("selected-card-box");
  if (box) box.innerText = "선택된 카드: 없음";
}

window.addEventListener("DOMContentLoaded", spreadCards);
window.spreadCards = spreadCards;

