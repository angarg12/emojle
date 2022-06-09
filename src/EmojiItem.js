import React, { PureComponent } from "react";
import "./EmojiItem.css";

export default class EmojiItem extends PureComponent {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  onClick() {
    this.props.update(this.props.item);
  }
  render () {
    return(
      <span
      class="component-emoji-item"
      onClick={this.onClick}>
        {this.props.item.emoji}
      </span>
    );
  }
}
