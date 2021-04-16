import axios from "axios";
export function getTopStories() {
  return axios
    .get("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty")
    .then((response) => {
      return response.data;
    });
}
export function getStoryDetail(id) {
    return axios
    .get(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
    .then((response) => {
      return response.data;
    });
}