=========================================================
   1) 카드 뒷면 이미지
========================================================= */
const BACK_URL =
  "https://files.cdn-files-a.com/uploads/10331168/2000_6931252094089.png";

/* =========================================================
   2) 55장 카드 앞면 이미지 매핑
========================================================= */
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
  W10:"https://files.cdn-files-a.com/uploads/10331168/2000_693125200e61a.png",
  W11:"https://files.cdn-files-a.com/uploads/10331168/2000_693125207d2b0.png",

  F1: "https://files.cdn-files-a.com/uploads/10331168/2000_693125215994e.png",
  F2: "https://files.cdn-files-a.com/uploads/10331168/2000_69312521cf263.png",
  F3: "https://files.cdn-files-a.com/uploads/10331168/2000_69312521c190f.png",
  F4: "https://files.cdn-files-a.com/uploads/10331168/2000_69312521e93c6.png",
  F5: "https://files.cdn-files-a.com/uploads/10331168/2000_69312521f07aa.png",
  F6: "https://files.cdn-files-a.com/uploads/10331168/2000_693125221afd8.png",
  F7: "https://files.cdn-files-a.com/uploads/10331168/2000_69312522226b7.png",
  F8: "https://files.cdn-files-a.com/uploads/10331168/2000_6931252224881.png",
  F9: "https://files.cdn-files-a.com/uploads/10331168/2000_693125223cff8.png",
  F10:"https://files.cdn-files-a.com/uploads/10331168/2000_693125223d298.png",
  F11:"https://files.cdn-files-a.com/uploads/10331168/2000_693125224e6c8.png",

  E1: "https://files.cdn-files-a.com/uploads/10331168/2000_6931252097fce.png",
  E2: "https://files.cdn-files-a.com/uploads/10331168/2000_69312520a2e69.png",
  E3: "https://files.cdn-files-a.com/uploads/10331168/2000_69312520ab9e3.png",
  E4: "https://files.cdn-files-a.com/uploads/10331168/2000_69312520b4ef1.png",
  E5: "https://files.cdn-files-a.com/uploads/10331168/2000_69312520c3f06.png",
  E6: "https://files.cdn-files-a.com/uploads/10331168/2000_693125211e929.png",
  E7: "https://files.cdn-files-a.com/uploads/10331168/2000_6931252128609.png",
  E8: "https://files.cdn-files-a.com/uploads/10331168/2000_6931252125906.png",
  E9: "https://files.cdn-files-a.com/uploads/10331168/2000_6931252136194.png",
  E10:"https://files.cdn-files-a.com/uploads/10331168/2000_6931252146ada.png",
  E11:"https://files.cdn-files-a.com/uploads/10331168/2000_693125215955f.png",

  M1: "https://files.cdn-files-a.com/uploads/10331168/2000_6931252288a59.png",
  M2: "https://files.cdn-files-a.com/uploads/10331168/2000_6931252293c57.png",
  M3: "https://files.cdn-files-a.com/uploads/10331168/2000_69312522a5609.png",
  M4: "https://files.cdn-files-a.com/uploads/10331168/2000_69312522b281e.png",
  M5: "https://files.cdn-files-a.com/uploads/10331168/2000_6931252318ea0.png",
  M6: "https://files.cdn-files-a.com/uploads/10331168/2000_69312522eb1e4.png",
  M7: "https://files.cdn-files-a.com/uploads/10331168/2000_69312523120ef.png",
  M8: "https://files.cdn-files-a.com/uploads/10331168/2000_6931252311ecd.png",
  M9: "https://files.cdn-files-a.com/uploads/10331168/2000_693125232bf28.png",
  M10:"https://files.cdn-files-a.com/uploads/10331168/2000_6931252339422.png",
  M11:"https://files.cdn-files-a.com/uploads/10331168/2000_6931252369f77.png",

  S1: "https://files.cdn-files-a.com/uploads/10331168/2000_693125233eb03.png",
  S2: "https://files.cdn-files-a.com/uploads/10331168/2000_6931e65e2f5de.png",
  S3: "https://files.cdn-files-a.com/uploads/10331168/2000_693125235a74e.png",
  S4: "https://files.cdn-files-a.com/uploads/10331168/2000_6931252389ee1.png",
  S5: "https://files.cdn-files-a.com/uploads/10331168/2000_693125239933a.png",
  S6: "https://files.cdn-files-a.com/uploads/10331168/2000_69312523a35fc.png",
  S7: "https://files.cdn-files-a.com/uploads/10331168/2000_69312523cee0d.png",
  S8: "https://files.cdn-files-a.com/uploads/10331168/2000_6931e31ad7c77.png",
  S9: "https://files.cdn-files-a.com/uploads/10331168/2000_693125240f44f.png",
  S10:"https://files.cdn-files-a.com/uploads/10331168/2000_693125241f093.png",
  S11:"https://files.cdn-files-a.com/uploads/10331168/2000_693125241cf29.png"
};
/* =========================================================
   2-1) 카드 한글 라벨 (원하시는 대로 수정 가능)
========================================================= */
const cardLabelMap = {
  W1: "W1 - 씨앗",
  W2: "W2 - 발아",
  W3: "W3 - 뿌리",
  W4: "W4 - 가지치기",
  W5: "W5 - 잎",
  W6: "W6 - 햇살",
  W7: "W7 - 바람",
  W8: "W8 - 나이테",
  W9: "W9 - 숲",
  W10:"W10 - 수확",
  W11:"W11 - 재생",

  F1: "F1 - 불씨",
  F2: "F2 - 점화",
  F3: "F3 - 불꽃",
  F4: "F4 - 열정",
  F5: "F5 - 광휘",
  F6: "F6 - 경쟁",
  F7: "F7 - 정화",
  F8: "F8 - 변형",
  F9: "F9 - 축제",
  F10:"F10 - 내적불",
  F11:"F11 - 불사조",

  E1: "E1 - 기반",
  E2: "E2 - 구조",
  E3: "E3 - 인내",
  E4: "E4 - 자원",
  E5: "E5 - 책임",
  E6: "E6 - 경계",
  E7: "E7 - 경작",
  E8: "E8 - 비옥",
  E9: "E9 - 안정",
  E10:"E10 - 유산",
  E11:"E11 - 중심",

  M1: "M1 - 원광",
  M2: "M2 - 채광",
  M3: "M3 - 추출",
  M4: "M4 - 정련",
  M5: "M5 - 단조",
  M6: "M6 - 합금",
  M7: "M7 - 형상",
  M8: "M8 - 보물",
  M9: "M9 - 나눔",
  M10:"M10 - 관",
  M11:"M11 - 오라클",

  S1: "S1 - 물방울",
  S2: "S2 - 흐름",
  S3: "S3 - 연결",
  S4: "S4 - 성찰",
  S5: "S5 - 꿈",
  S6: "S6 - 적응",
  S7: "S7 - 심해",
  S8: "S8 - 치유",
  S9: "S9 - 지혜",
  S10:"S10 - 평화",
  S11:"S11 - 영원"
};

/* =========================================================
   3) 카드 코드 배열 생성
========================================================= */
const cardCodes = Object.keys(cardImageMap);

/* =========================================================
   4) 카드 클릭 → 앞면 표시
========================================================= */
function flipCard(card) {
  const code = card.dataset.code;
  const imgUrl = cardImageMap[code];

  // 모든 카드 초기화 (한 장만 앞면/강조되도록)
  const allCards = document.querySelectorAll(".card");
  allCards.forEach((c) => {
    c.classList.remove("flipped");
    c.style.backgroundImage = `url('${BACK_URL}')`;
  });

  // 선택 카드 앞면 표시 + 강조
  card.style.backgroundImage = `url('${imgUrl}')`;
  card.classList.add("flipped");

  const box = document.getElementById("selected-card-box");
  if (box) {
    box.innerText = "선택된 카드: " + code + " (" + (cardLabelMap[code] || "").replace(code + " - ", "") + ")";
  }
  // 🔥 한글 라벨 표시 부분 (이게 꼭 있어야 함)
  const labelBox = document.getElementById("selected-card-label");
  if (labelBox) {
    labelBox.innerText = cardLabelMap[code] || "";

  
  }
}

/* 

=========================================================
   5) 카드 섞기 (슬라이드 셔플 애니메이션 포함)
========================================================= */
function spreadCards() {
  const area = document.getElementById("card-area");
  if (!area) return;

  // 1) 셔플 애니메이션 시작
  //   CSS에서 #card-area.shuffling .card 에 animation 이 걸려 있음
  area.classList.add("shuffling");

  // 2) 카드 섞기
  const shuffled = [...cardCodes].sort(() => Math.random() - 0.5);

  // 3) 기존 카드 제거 후 새 카드 생성
  area.innerHTML = "";

  shuffled.forEach((code) => {
    const card = document.createElement("div");
    card.className = "card";
    card.style.backgroundImage = `url('${BACK_URL}')`; // 뒷면
    card.dataset.code = code;

    card.onclick = () => flipCard(card);

    area.appendChild(card);
  });

  // 4) 선택 텍스트 초기화
  const box = document.getElementById("selected-card-box");
  if (box) {
    box.innerText = "선택된 카드: 없음";
  }

  // 5) 애니메이션 끝난 뒤 클래스 제거 (CSS duration 0.45s 기준)
  setTimeout(() => {
    area.classList.remove("shuffling");
  }, 480);
}
/* =========================================================
   6) 페이지 로드시 자동 섞기
========================================================= */
window.addEventListener("load", spreadCards);

/* =========================================================
   7) 외부 버튼에서도 실행 가능 (다시 섞기 버튼)
========================================================= */
window.spreadCards = spreadCards;

function goToAI() {
  window.location.href = 
 "https://www.5zen.org/ai-%EC%9E%90%EB%8F%99%ED%95%B4%EC%84%A4-%EC%84%9C%EB%B9%84%EC%8A%A4";
  
  
  }


