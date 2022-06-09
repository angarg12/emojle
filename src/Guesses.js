import React, { PureComponent } from "react";

import GuessItem from "./GuessItem";

export default class Guesses extends PureComponent {
  constructor(props) {
    super(props);
  }
  render () {
    var items = this.props.guesses.map((item, index) => {
      return (
        <GuessItem key={index} item={item} />
      );
    });
    return (
     <div> {items}</div>
    );
  }
}
