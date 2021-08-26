import React from "react";

function Rooms(props) {
  return (
    <div className="flex flex-row w-full h-20 justify-center items-center">
      <div className="flex flex-nowrap h-16 w-10/12 mx-20 rounded-lg shadow-md border-2 justify-center items-center">
        <div className="h-10 w-36 rounded-full bg-gray-400"></div>
        <div className="flex flex-row w-2/3 h-10 ml-1 items-center justify-evenly">
          <div className="w-10 h-10 rounded-full bg-gray-400"></div>
          <div className="w-10 h-10 rounded-full bg-gray-400"></div>
          <div className="w-10 h-10 rounded-full bg-gray-400"></div>
          <div className="w-10 h-10 rounded-full bg-gray-400"></div>
          <div className="w-10 h-10 rounded-full bg-gray-400"></div>
        </div>
      </div>
    </div>
  );
}

export default Rooms;

// {onlineUsers.map(({users}) => {
//     <div className="w-10 h-10 rounded-full bg-gray-400">
//       <img src="users" alt="profile pic" />
//     </div>;
//   })}
// const onlineUsers = [
//     "https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg?resize=768,512",
//   ];
