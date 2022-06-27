import React, { PureComponent } from "react";
import { EmojiDistance } from "./Data";
import "./GuessItem.css"

export interface Props {
  item: EmojiDistance
}

export default class GuessItem extends PureComponent<Props> {
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
    <span className={"guess-item "+clazz}>
      {this.props.item.emoji} {message}
    </span>
)
  }
}
