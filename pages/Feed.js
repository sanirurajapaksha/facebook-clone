import React from "react";

function Feed(props) {
  return (
    <div className="flex flex-row h-screen">
      <div className="w-1/4 bg-green-300">primary</div>
      <div className="w-1/2 bg-blue-300">secondary</div>
      <div className="w-1/4 bg-red-300">last</div>
    </div>
  );
}

export default Feed;
