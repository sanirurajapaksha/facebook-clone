import React from "react";

function Rooms(props) {
  const onlineUsers = [];
  return (
    <div className="flex w-full h-20 justify-center items-center">
      <div className="h-16 w-10/12 mx-20 rounded-lg shadow-md border-2 bg-green-200">
        <div className="h-10 w-36 rounded-full bg-gray-400"></div>
        {onlineUsers.map((users) => {
          <div className="w-10 h-10 rounded-full bg-gray-400"></div>;
        })}
      </div>
    </div>
  );
}

export default Rooms;
