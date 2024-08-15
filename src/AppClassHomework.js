import React, { Component } from "react";
import "./App.css";
import imagePaper from "./assets/images/paper.png";
import imageRock from "./assets/images/rock.png";
import imageScissors from "./assets/images/scissors.png";
import BoxClassHomework from "./components/BoxClass/BoxClassHomework";

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

export default class AppClassHomework extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userSelect: null,
      computerSelect: null,
      result: "",
    };
  }

  play = (userChoice) => {
    let computerChoice = this.randomChoice();
    this.setState({
      userSelect: choice[userChoice],
      computerSelect: computerChoice,
      result: this.judgement(choice[userChoice], computerChoice),
    });
  };
  randomChoice = () => {
    const itemArray = Object.keys(choice);
    const randomItem = Math.floor(Math.random() * itemArray.length);
    const final = itemArray[randomItem];
    return choice[final];
  };
  judgement = (user, computer) => {
    if (user.name === computer.name) {
      return "tie";
    } else if (user.name === "Rock")
      return computer.name === "Scissors" ? "win" : "lose";
    else if (user.name === "Scissors")
      return computer.name === "Paper" ? "win" : "lose";
    else if (user.name === "Paper")
      return computer.name === "Rock" ? "win" : "lose";
  };

  render() {
    return (
      <main>
        <section className="rpsGame">
          <div className="boxWrapper">
            <BoxClassHomework
              title="You"
              item={this.state.userSelect}
              result={this.state.result}
            />
            <BoxClassHomework
              title="Computer"
              item={this.state.computerSelect}
              result={this.state.result}
            />
          </div>
          <div className="buttonWrapper">
            <button onClick={() => this.play("scissors")}>✌</button>
            <button onClick={() => this.play("rock")}>✊</button>
            <button onClick={() => this.play("paper")}>🖐</button>
          </div>
        </section>
      </main>
    );
  }
}
