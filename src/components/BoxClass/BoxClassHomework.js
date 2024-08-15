import React, { Component } from "react";
import "../Box/Box.css";

export default class BoxClassHomework extends Component {
  constructor(props) {
    super(props);
    this.result = "";
  }
  getResult = () => {
    if (
      this.props.title === "Computer" &&
      this.props.result !== "tie" &&
      this.props.result !== ""
    ) {
      this.result = this.props.result === "win" ? "lose" : "win";
    } else {
      this.result = this.props.result;
    }
  };

  render() {
    this.getResult();
    return (
      <div className={`box ${this.result}`}>
        <h1>{this.props.title}</h1>
        <h2 data-testid="item-name">
          {this.props.item && this.props.item.name}
        </h2>
        {this.props.item && (
          <figure>
            <img src={this.props.item.img} alt={this.props.item.name} />
          </figure>
        )}
        {this.props.item && <figcaption>{this.result}</figcaption>}
      </div>
    );
  }
}
