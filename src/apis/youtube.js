import axios from "axios";

const KEY = "AIzaSyDl2fX4_1KO8qEga_Fxybo_W-OEYK4oRaI";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: `${KEY}`,
  },
});
