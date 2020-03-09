import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { api } from "./api";

class Page extends React.Component {
  state = {
    stories: []
  };
  componentDidMount() {
    api.get("topstories.json?print=pretty").then(res => {
      const stories = res.data;
      this.setState({ stories });
    });
  }

  render() {
    return (
      <ul>
        {this.state.stories.map(story => (
          <li key={story}>{story}</li>
        ))}
      </ul>
    );
  }
}

ReactDOM.render(<Page />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
