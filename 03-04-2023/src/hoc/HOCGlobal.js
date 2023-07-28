import React from "react";

const HOCGlobal = (OriginalComponent) => {
  class Newcomponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        items: [],
      };
    }
    componentDidMount() {
      window
        .fetch("https://jsonplaceholder.typicode.com/posts")
        .then((respons) =>
          respons
            .json()
            .then((data) =>
              this.setState((prev) => ({ items: [...prev.items, data] }))
            )
        )
        .catch((error) => console.log(error));
    }
    render() {
      console.log(this.state.items);
      return <OriginalComponent value={this.state.items} />;
    }
  }
  return Newcomponent;
};

export default HOCGlobal;
