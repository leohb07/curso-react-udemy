import { Component } from "react";

import './styles.css'

export class Button extends Component {
  render() {
    return (
      <button 
        className="button" 
        onClick={this.props.click}
        disabled={this.props.disabled}
      >
        {this.props.text}
      </button>
    )
  }
}