const randomNumber = Math.floor(Math.random() * 100) + 1;
let chance = 10;
let isGameOver = false;

const inputValue = document.querySelector("input");
const submitButton = document.querySelector(".submit");
const chanceText = document.querySelector("h3");
chanceText.textContent = `남은 기회: ${chance}`;

const container = document.querySelector(".container");
const resultText = document.querySelector(".result-text");

const updateSubmit = () => {
  if (isGameOver || chance <= 0) {
    submitButton.disabled = true;
  } else {
    submitButton.disabled = false;
  }
};

// 게임 종료 시 입력창과 버튼 비활성화 코드
const endGame = () => {
  inputValue.disabled = true;
  isGameOver = true;
  updateSubmit();
};

const findNumber = () => {
  if (isGameOver) return;

  const changeNum = parseInt(inputValue.value);

  if (isNaN(changeNum) || changeNum < 1 || changeNum > 100) {
    alert("1부터 100 사이의 숫자만 입력해주세요.");
    inputValue.value = "";
    return;
  }

  chance--;
  chanceText.textContent = `남은 기회: ${chance}`;

  if (changeNum === randomNumber) {
    resultText.textContent = "축하합니다! 맞추셨습니다!";
    endGame();
  } else if (changeNum < randomNumber) {
    resultText.textContent = `${changeNum} UP!`;
  } else {
    resultText.textContent = `${changeNum} DOWN!`;
  }

  if (chance === 0) {
    resultText.textContent = `실패! 정답은 ${randomNumber}였습니다.`;
    endGame();
  }

  inputValue.value = "";
  updateSubmit();
};

updateSubmit();

// 엔터 키로 제출하는 코드 추가
inputValue.addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
    findNumber();
  }
});
submitButton.addEventListener("click", findNumber);
