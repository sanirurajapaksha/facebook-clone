import React from "react";
import Rooms from "../Components/Feed Components/Middle Side/Rooms";
import Stories from "../Components/Feed Components/Middle Side/Stories";
import Upload from "../Components/Feed Components/Middle Side/Upload";

function Feed(props) {
  return (
    <div className="flex flex-row h-screen">
      <div className="w-0 md:w-1/4">
        <div></div>
      </div>
      <div className="w-full md:w-1/2">
        <Stories />
        <Upload />
        <Rooms />
      </div>
      <div className="w-0 md:w-1/4">
        <div></div>
      </div>
    </div>
  );
}

export default Feed;
