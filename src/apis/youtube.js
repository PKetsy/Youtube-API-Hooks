import axios from "axios";

const KEY = "AIzaSyAKEtDiNrDQCC4WW5m3vtz4W6gBxI_kB4M";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: `${KEY}`,
  },
});
