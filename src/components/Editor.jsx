import { Component, useState } from "react";

export default class Editor extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
    };
  }

  render() {
    return (
      <div className="main-box">
        <div className="first-box">
          <textarea
            onChange={(e) => {
              this.setState({ value: e.target.value });
            }}
            value={this.state.value}
          ></textarea>
        </div>
        <div className="second-box">
          <h3 className="h3">{this.state.value}</h3>
        </div>
      </div>
    );
  }
}