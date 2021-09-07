import React from "react";

function Posts(props) {
  return (
    <div className="flex w-full h-36">
      <div className="flex flex-col h-32 w-10/12 mx-20 rounded-lg shadow-md border-2">
        <div className="flex flex-row w-full h-12 bg-red-200 justify-between items-center">
          <div className="w-10 h-10 ml-4 rounded-full bg-gray-400"></div>
          <div className="flex flex-row absolute ml-16 w-80 h-10 bg-green-300"></div>
          <div className="w-10 h-10 mr-4 bg-green-300"></div>
        </div>
        <div className="flex flex-row w-full h-12 bg-blue-300 justify-start items-center"></div>
      </div>
    </div>
  );
}

export default Posts;
