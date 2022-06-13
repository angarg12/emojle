import React, { PureComponent } from "react";
import "./EmojiPanel.css";
import EmojiItem from "./EmojiItem";

export default class EmojiPanel extends PureComponent {
  constructor(props) {
    super(props);
  }
  render () {
    var items = this.props.items.map((item, i) => {
      return (
        <EmojiItem key={i} item={item} update={this.props.update} best_guess={this.props.best_guess}/>
      );
    });

    return (
    <div className="emoji-panel">
      {items}
    </div>
    );
  }
}
