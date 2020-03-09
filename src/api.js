import axios from "axios";

const API = axios.create({
  baseURL: "https://hacker-news.firebaseio.com/v0",
  timeout: 3000
});

export let api = API;
