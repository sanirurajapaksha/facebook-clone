import React from "react";
import Stories from "../Components/Feed Components/Middle Side/Stories";

function Feed(props) {
  return (
    <div className="flex flex-row h-screen">
      <div className="w-0 md:w-1/4">
        <div></div>
      </div>
      <div className="w-full md:w-1/2">
        <Stories />
      </div>
      <div className="w-0 md:w-1/4">
        <div></div>
      </div>
    </div>
  );
}

export default Feed;
