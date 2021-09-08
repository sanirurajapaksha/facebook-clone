import React from "react";
import Posts from "../Components/Feed Components/Middle Side/Posts";
import Rooms from "../Components/Feed Components/Middle Side/Rooms";
import Stories from "../Components/Feed Components/Middle Side/Stories";
import Upload from "../Components/Feed Components/Middle Side/Upload";

function Feed() {
  return (
    <div className="flex flex-row h-screen">
      <div className="mt-14 w-1/2">
        <div></div>
      </div>
      <div className="mt-14 w-full">
        <div>
          <Stories />
          <Upload />
          <Rooms />
          <Posts />
        </div>
      </div>
      <div className="mt-14 w-1/2">
        <div></div>
      </div>
    </div>
  );
}

export default Feed;
