import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { api } from "./api";

const { GraphQLServer } = require("graphql-yoga");
const fetch = require("node-fetch");

class Page extends React.Component {
  state = {
    stories: []
  };
  async componentDidMount() {
    let stories = [];
    await api.get("topstories.json?print=pretty").then(res => {
      stories = res.data;
    });
    console.log(stories);
    this.setState({ stories });
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
