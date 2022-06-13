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
    this.state.history = {
    };
  }
  setUpRound() {
    this.won = false;
    this.tries = 0;
    this.target = randomEmoji();
    this.state = {items: distancesToTarget(this.target), guesses: []};
    this.setState(this.state);
  }
  isEnded() {
  }
  update(guess) {
    this.tries++;
    const new_guesses = this.addItem(guess);
    // const new_items = this.filter(guess);

    this.setState({guesses: new_guesses})
    if(guess.distance === 0) {
      this.won = true;
      this.state.history[this.tries] = this.state.history[this.tries] + 1 || 1;
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
    let bestGuess = 100;
    if(this.state.guesses.length > 0) {
      bestGuess = this.state.guesses[this.state.guesses.length-1].distance;
    }

    let panel = <EmojiPanel items={this.state.items} update={this.update} best_guess={bestGuess}/>

    let hist = [];
    for(let i = 0; i < 10; i++){
      let exes = "";
      for(let j = 0; j < this.state.history[i]; j++){
        exes += "x";
      }
      hist.push(<div>{i}:{exes}</div>)
    }

    return (
      <div id="main">
        <Header />
        <p>{hist}</p>
        <Guesses guesses={this.state.guesses} />
        <p>Guesses: {this.state.guesses.length}</p>
        {panel}
        <button onClick={this.setUpRound}>Restart</button>
      </div>
    );
  }
}
