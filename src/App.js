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
    this.target = randomEmoji();
    this.state = {items: distancesToTarget(this.target), guesses: []};
  }
  update(guess) {
    const new_guesses = this.addItem(guess);
    const new_items = this.filter(guess);

    this.setState({items:new_items, guesses: new_guesses})
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
    return (
      <div id="main">
        <Header />
        <Guesses guesses={this.state.guesses} />
        <EmojiPanel items={this.state.items} update={this.update}/>
      </div>
    );
  }
}
