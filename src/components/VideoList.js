import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        onVideoSelect={onVideoSelect}
        video={video}
      />
    );
  });

  // take each of the video objects, pass them as props, into each video item we create,
  //  which will let us customize the contents.

  return <div className='ui relaxed divided list'> {renderedList} </div>;
};

export default VideoList;

// with lists, the key function is to remember the MAP function.  Whenever we ever want to render a list, we will use MAP
//  very helpful to define a key on the root element we are rendering into the list.  A key should be consistent and unchanging
//   between each record between re-renders.
