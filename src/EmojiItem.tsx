import React, { PureComponent } from "react";
import TableCell from "@mui/material/TableCell";
import "./EmojiItem.css";
import { EmojiDistance } from "./Data";

export interface Props {
  item: EmojiDistance,
  best_guess: number,
  update: (item: EmojiDistance) => void,
}

export default class EmojiItem extends PureComponent<Props> {
  onClick = () => {
    this.props.update(this.props.item);
  }
  render () {
    let clazz = "";
    if(this.props.best_guess <= this.props.item.distance && this.props.item.distance >= 80) {
      clazz = "freezing";
    }
    if(this.props.best_guess <= this.props.item.distance &&  this.props.item.distance < 80) {
      clazz = "cold";
    }
    if(this.props.best_guess <= this.props.item.distance && this.props.item.distance < 70) {
      clazz = "warm";
    }
    if(this.props.best_guess <= this.props.item.distance &&  this.props.item.distance < 55) {
      clazz = "hot";
    }

    return(
      <span
      className={"emoji-item " +clazz}
      onClick={this.onClick}>
        {this.props.item.emoji}
      </span>
    );
  }
}
