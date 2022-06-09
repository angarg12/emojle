import React, { PureComponent } from "react";

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
      <button className="btn btn-default btn-lg" onClick={this.onClick}>
        {this.props.item.emoji}
      </button>
    );
  }
}
