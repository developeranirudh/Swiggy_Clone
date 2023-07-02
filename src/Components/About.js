import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      count:2,
      count2:1

    }
  }
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <h1>{this.state.count}</h1>
      </div>
    );
  }
}

export default About;
