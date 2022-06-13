import React, { PureComponent } from "react";
import "./GuessItem.css"

export default class GuessItem extends PureComponent {
  constructor(props) {
    super(props);
  }
  render () {
    let clazz = "freezing";
    let message = "Freezing";
    if(this.props.item.distance < 80) {
      clazz = "cold";
      message = "Cold";
    }
    if(this.props.item.distance < 70) {
      clazz = "warm";
      message = "Warm";
    }
    if(this.props.item.distance < 55) {
      clazz = "hot";
      message = "Hot!!";
    }
    if(this.props.item.distance == 0) {
      clazz = "win";
      message = "Got it!";
    }
    return(
    <div className={"guess-item "+clazz}>
      {this.props.item.emoji} {message}
    </div>
)
  }
}
