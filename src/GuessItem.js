import React, { PureComponent } from "react";

export default class GuessItem extends PureComponent {
  constructor(props) {
    super(props);
  }
  render () {
    return(
      <p>{this.props.item.emoji} <progress value={100-this.props.item.distance} max="100"/></p>
    );
  }
}
