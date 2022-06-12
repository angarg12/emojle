import React, { PureComponent } from "react";
import "./GuessItem.css"

export default class GuessItem extends PureComponent {
  constructor(props) {
    super(props);
  }
  render () {
    let message = <span class="freezing">Freezing</span>
    if(this.props.item.distance < 80) {
      message = <span class="cold">Cold</span>;
    }
    if(this.props.item.distance < 70) {
      message = <span class="warm">Warm</span>;
    }
    if(this.props.item.distance < 55) {
      message = <span class="hot">Hot!!</span>;
    }
    if(this.props.item.distance == 0) {
      message = <span class="win">Got it!</span>;
    }
    return(
      <p>{this.props.item.emoji} {message}</p>
    );
  }
}
