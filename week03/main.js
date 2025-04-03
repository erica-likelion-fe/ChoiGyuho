const randomNumber = Math.floor(Math.random() * 100) + 1;
let chance = 10;

const findNumber = () => {
  while (chance > 0) {
    let input = prompt(
      `1부터 100 사이 숫자를 입력하세요. (남은 기회: ${chance})`
    );
    let changeNum = parseInt(input);

    // 유효성 검사용 코드입니다.
    if (isNaN(changeNum) || changeNum < 1 || changeNum > 100) {
      alert("1부터 100 사이 숫자만 입력해주세요.");
      continue;
    }

    // 맞았는지 틀렸는지 판별하는 코드입니다.
    if (changeNum === randomNumber) {
      alert("축하합니다! 맞추셨습니다!");
      return;
    } else if (changeNum > randomNumber) {
      chance--;
      alert(`DOWN! (남은 기회: ${chance})`);
    } else {
      chance--;
      alert(`UP! (남은 기회: ${chance})`);
    }

    // 10번 안에 못 맞췄을 경우 메시지 나오게 하는 코드입니다.
    if (chance === 0) {
      alert("실패!");
    }
  }
};

findNumber();
