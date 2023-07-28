import React from "react";

const GlobalHOC = (WrappedComponent) => {
  class NewComponent extends React.Component {
    state = {
      // name:"Harish"
      items: "",
    };
    componentDidMount() {
      window
        .fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) =>
          res.json().then((data) => {
            // console.log(data);
            this.setState((prevState) => ({
              items: [...prevState.items, data],
            }));
          })
        )
        .catch((err) => console.log(err));
    }
    render() {
      // console.log(this.state.items);
      return <WrappedComponent value={this.state.items} />;
    }
  }
  return NewComponent;
};

export default GlobalHOC;
