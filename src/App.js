import React, { PureComponent } from "react";
import Header from "./Header";
import Guesses from "./Guesses";
import EmojiPanel from "./EmojiPanel";
import { randomEmoji, distancesToTarget } from "./Data";

export default class App extends PureComponent {
  constructor (props) {
    super(props);
    this.update = this.update.bind(this);
    this.addItem = this.addItem.bind(this);
    this.filter = this.filter.bind(this);
    this.setUpRound = this.setUpRound.bind(this);
    this.setUpRound();
  }
  setUpRound() {
    this.won = false;
    this.tries = 8;
    this.target = randomEmoji();
    this.state = {items: distancesToTarget(this.target), guesses: []};
    this.setState(this.state);
  }
  isEnded() {
    return this.tries === 0;
  }
  update(guess) {
    this.tries--;
    const new_guesses = this.addItem(guess);
    const new_items = this.filter(guess);

    this.setState({items:new_items, guesses: new_guesses})
    if(new_items.length === 0) {
      this.won = true;
    }
  }
  addItem(guess) {
    return this.state.guesses.concat(guess);
  }
  filter(guess) {
    const items = [];
    for(const item of this.state.items) {
      if(item.distance < guess.distance) {
        items.push(item);
      }
    }
    return items;
  }
  render() {
    let winMessage;
    let loseMessage;
    let panel;
    if(this.won) {
      winMessage = <p>You Won!!</p>;
    } else if(this.tries === 0) {
      loseMessage = <p>The solution is {this.target}. Your highest score is {100-this.state.guesses[this.state.guesses.length-1].distance}.</p>
    } else {
      panel = <EmojiPanel items={this.state.items} update={this.update}/>;
    }


    return (
      <div id="main">
        <Header />
        {winMessage}
        {loseMessage}
        <Guesses guesses={this.state.guesses} />
        {panel}
        <button onClick={this.setUpRound}>Restart</button>
      </div>
    );
  }
}
