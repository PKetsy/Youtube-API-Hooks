import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";

import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "../hooks/useVideos";

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null); //manages selected videos
  const [videos, search] = useVideos("React Hooks 2020");
  //calling our custom hook ^ that gives us back an array with 2 elements ; our list of videos, and a function to search for videos

  useEffect(() => {
    setSelectedVideo(videos[0]); //anytime we get a new list of videos, we will automatically select the 1st video in the list
  }, [videos]);

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
