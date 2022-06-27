import React, { PureComponent } from "react";
import "./EmojiPanel.css";
import EmojiItem from "./EmojiItem";
import { EmojiDistance } from "./Data";

export interface Props {
  items: EmojiDistance[],
  best_guess: number,
  update: (item: EmojiDistance) => void,
}

export default class EmojiPanel extends PureComponent<Props> {
  render () {
    var items = this.props.items.map((item, i) => {
      return (
        <EmojiItem key={i} item={item} update={this.props.update} best_guess={this.props.best_guess}/>
      );
    });

    return (
    <span className="emoji-panel">
      {items}
    </span>
    );
  }
}
