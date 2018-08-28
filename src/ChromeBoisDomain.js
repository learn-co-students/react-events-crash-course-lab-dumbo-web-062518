import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {

  handleMouseMove = (event) => {
    const myX = event.clientX
    const myY = event.clientY
    return drawChromeBoiAtCoords(myX, myY);
  }

  handleToggle = (event) => {
    /* TODO: Create an event handler which, when fired, invokes the provided
     * `toggleCycling` function with no arguments. Don't forget the click event
     * listener that should fire it!
     */
    return toggleCycling()
  }

  handleKeyPress = (event) => {
    /* TODO: Add an event listener to the `<canvas>` element to capture when a key
    /* is pressed. When a key is pressed, an event handler should invoke the the
    /* provided `resize` function with a single argument of either '+' or '-'
    /* if the key pressed was 'a', then it should call `resize` with '+'
    /* if the key pressed was 's', then it should call `resize` with '-'
    */
    if(event.key === 'a'){
      return resize('+')
    } else if (event.key === 's') {
      return resize('-')
    } else {
      console.log("Have you heard the tale of Darth Plagueis the wise? I thought not. It's not a story the Jedi would tell you. It's a Sith legend. Darth Plagueis was a Dark Lord of the Sith, so powerful and so wise he could use the Force to influence the midichlorians to create life… He had such a knowledge of the dark side, he could even keep the ones he cared about from dying. He became so powerful… the only thing he was afraid of was losing his power, which eventually, of course, he did. Unfortunately, he taught his apprentice everything he knew, then his apprentice killed him in his sleep. Ironic. He could save others from death, but not himself.")
    }
  }



  render() {
    return (
      <canvas
        onMouseMove={this.handleMouseMove}
        onClick={this.handleToggle}
        onKeyPress={this.handleKeyPress}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
