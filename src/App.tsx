import React, { PureComponent } from "react";
import Header from "./Header";
import Guesses from "./Guesses";
import EmojiPanel from "./EmojiPanel";
import { randomEmoji, distancesToTarget, EmojiDistance } from "./Data";

export interface Props {}

export interface State {
  history: Record<number, number>,
  won: boolean,
  tries: number,
  target: string,
  items: EmojiDistance[],
  guesses: EmojiDistance[],
}

export default class App extends PureComponent<Props, State> {
  constructor (props: Props) {
    super(props);

    this.state = this.randomState();
  }
  
  randomState = () : State => {
    const target = randomEmoji();
    const distances = distancesToTarget(target);

    return {
      history: {},
      won: false,
      tries: 0,
      target: target,
      items: distances,
      guesses: [],
    };
  }

  setUpRound = () => {
    this.setState(this.randomState());
  }

  isEnded() {
  }

  update = (guess: EmojiDistance) => {
    const new_guesses = this.addItem(guess);
    // const new_items = this.filter(guess);

    this.setState({guesses: new_guesses, tries: this.state.tries + 1})
    if(guess.distance === 0) {
      this.setState({won:true})
      this.state.history[this.state.tries] = this.state.history[this.state.tries] + 1 || 1;
    }
  }

  addItem = (guess: EmojiDistance) => {
    return this.state.guesses.concat(guess);
  }

  filter = (guess: EmojiDistance) => {
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

    let hist = [];
    for(let i = 0; i < 10; i++){
      let exes = "";
      for(let j = 0; j < this.state.history[i]; j++){
        exes += "x";
      }
      hist.push(<div key={i}>{i}:{exes}</div>)
    }

    return (
      <div id="main">
        <Header />
        <div>{hist}</div>
        <Guesses guesses={this.state.guesses} />
        <p>Guesses: {this.state.guesses.length}</p>
        <EmojiPanel items={this.state.items} update={this.update} best_guess={bestGuess}/>
        <button onClick={this.setUpRound}>Restart</button>
      </div>
    );
  }
}
