import { useState } from "react";
import "./App.css";
import imagePaper from "./assets/images/paper.png";
import imageRock from "./assets/images/rock.png";
import imageScissors from "./assets/images/scissors.png";
import Box from "./components/Box/Box";

/**
 * 조건
 * 1. 박스 2개(타이틀, 사진, 결과)
 * 2. 가위바위보 버튼이 있다
 * 3. 버튼을 클릭하면 클릭한 값이 박스에 보임
 * 4. 컴퓨터는 랜덤하게 아이템 선택이 된다
 * 5. 3, 4의 결과를 가지고 누가 이겼는지 승패를 따진다
 * 6. 승패 결과에 따라 테두리 색이 바뀐다 (이기면 초록, 지면 빨강, 비기면 검정)
 */

const choice = {
  rock: {
    name: "Rock",
    img: imageRock,
  },
  scissors: {
    name: "Scissors",
    img: imageScissors,
  },
  paper: {
    name: "Paper",
    img: imagePaper,
  },
};
function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    const computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice], computerChoice));
  };

  const randomChoice = () => {
    const itemArray = Object.keys(choice); //객체에 키 값만 뽑아서 어레이로 만들어주는 함수
    const randomItem = Math.floor(Math.random() * itemArray.length);
    const final = itemArray[randomItem];
    return choice[final];
  };
  const judgement = (user, computer) => {
    if (user.name === computer.name) {
      return "tie";
    } else if (user.name === "Rock")
      return computer.name === "Scissors" ? "win" : "lose";
    else if (user.name === "Scissors")
      return computer.name === "Paper" ? "win" : "lose";
    else if (user.name === "Paper")
      return computer.name === "Rock" ? "win" : "lose";
  };
  return (
    <main>
      <section className="rpsGame">
        <div className="boxWrapper">
          <Box title="You" item={userSelect} result={result} />
          <Box title="Computer" item={computerSelect} result={result} />
        </div>
        <div className="buttonWrapper">
          <button onClick={() => play("scissors")}>✌</button>
          <button onClick={() => play("rock")}>✊</button>
          <button onClick={() => play("paper")}>🖐</button>
        </div>
      </section>
    </main>
  );
}

export default App;
