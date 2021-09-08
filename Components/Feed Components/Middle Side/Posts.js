import React from "react";

function Posts(props) {
  return (
    <div className="flex w-full">
      <div className="flex flex-col flex-grow w-10/12 mx-20 rounded-lg shadow-md border-2  mb-10">
        <div className="flex flex-row w-full h-12 bg-red-200 justify-between items-center">
          <div className="w-10 h-10 ml-4 rounded-full bg-gray-400"></div>
          <div className="flex flex-col absolute ml-16 w-80 h-10 bg-green-300">
            <div className="w-full text-gray-600 font-bold">
              Saniru Rajapaksha
            </div>
            <div className="w-full text-gray-600 text-xs">
              4 September at 18:20
            </div>
          </div>
          <div className="w-9 h-9 mr-4 bg-green-300 rounded-full"></div>
        </div>
        <div className="flex flex-row w-full mt-2 bg-blue-300 justify-start items-center">
          <div className="flex w-full mx-4 bg-yellow-600">
            This isthe Lorem ips lorem ipsum dolor sit amet, consectetur adip
            lorem30 lorem ipsum dolor sit amet lorem ipsum dolor sit amet This
          </div>
        </div>
        <div className="flex w-full h-80 mt-2 bg-purple-600">
          <div className=""></div>
        </div>
        <div className="flex divide-y-2 flex-col w-full h-20 bg-pink-400 justify-center">
          <div className="flex flex-row w-full h-9 bg-yellow-500 justify-between items-center">
            <div className="w-52 h-8 ml-4 bg-gray-400 rounded-full"></div>
            <div className="flex h-8 mr-4 bg-gray-400 rounded-full">Sample</div>
          </div>
          <div className="flex flex-row w-full h-10 bg-green-500 items-center">
            <div className="flex-1 flex-row justify-around items-center">
              <div className="w-16 h-8 bg-gray-300"></div>
              <div className="w-16 h-8 bg-gray-300"></div>
              <div className="w-16 h-8 bg-gray-300"></div>
            </div>
            <div className="flex-1 w-14 h-8 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
