import React from "react";
import "./Box.css";

const Box = (props) => {
  let result;
  if (
    props.title === "Computer" &&
    props.result !== "tie" &&
    props.result !== ""
  ) {
    // 카드가 computer카드인가? && 결과가 비긴건 아닌가? && props.result에 값이 있는가?
    result = props.result === "win" ? "lose" : "win";
  } else {
    // 위의 경우가 아니라면 props 로 전달된 결과를 그대로 쓴다.
    result = props.result;
  }
  if (props.title === "Computer") {
    console.log("computer", result);
  }

  return (
    <div className={`box ${result}`}>
      <h1>{props.title}</h1>
      <h2 data-testid="item-name">{props.item && props.item.name}</h2>
      {props.item && (
        <figure>
          <img src={props.item.img} alt={props.item.name} />
        </figure>
      )}
      {props.item && <figcaption>{result}</figcaption>}
    </div>
  );
};

export default Box;
