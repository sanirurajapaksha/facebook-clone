import React from "react";

function Upload() {
  return (
    <div className="flex h-36 w-full justify-center items-center">
      <div className="flex flex-col divide-y-2 w-10/12 h-32 mx-20 rounded-lg shadow-md border-2">
        <div className="w-full">
          <div className="flex flex-row justify-center items-center h-16">
            <div className="w-10 h-10 rounded-full bg-gray-600 mr-4"></div>
            <div className="w-10/12 h-10 rounded-full bg-gray-300"></div>
          </div>
        </div>
        <div className="w-full">
          <div className="flex flex-row h-16 mt-2 justify-evenly">
            <div className="w-1/4 rounded-full h-10 bg-gray-300"></div>
            <div className="w-1/4 rounded-full h-10 bg-gray-300"></div>
            <div className="w-1/4 rounded-full h-10 bg-gray-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Upload;
