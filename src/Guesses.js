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
    const max_guesses = 8;
    return (
     <div>
      {items}
      <p> Guesses left {max_guesses-this.props.guesses.length}</p>
     </div>
    );
  }
}
