import React, { PureComponent } from "react";

import EmojiItem from "./EmojiItem";

export default class EmojiPanel extends PureComponent {
  constructor(props) {
    super(props);
  }
  render () {
    var items = this.props.items.map((item, index) => {
      return (
        <EmojiItem key={index} item={item} update={this.props.update}/>
      );
    });
    return (
      <div>
        {items}
      </div>
    );
  }
}
