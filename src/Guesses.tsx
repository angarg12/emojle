import React, { PureComponent } from "react";
import { EmojiDistance } from "./Data";
import "./Guesses.css"
import GuessItem from "./GuessItem";

export interface Props {
  guesses: EmojiDistance[],
}

export default class Guesses extends PureComponent<Props> {
  render () {
    var items = this.props.guesses.map((item, index) => {
      return (
        <GuessItem key={index} item={item} />
      );
    });
    return (
     <span className="guesses">
      {items}
     </span>
    );
  }
}
