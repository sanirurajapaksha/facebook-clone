import React from "react";

function Stories() {
  function windowSize() {
    if (window.screen.width > 400) {
      console.log(window.screen.width);
    }
  }

  return (
    <div className="flex flex-row bg-red-200 h-60 w-full lg:justify-center">
      <div className="w-28 h-48 bg-blue-200 my-6 mx-1"></div>
      <div className="w-28 h-48 bg-blue-200 my-6 mx-1"></div>
      <div className="w-28 h-48 bg-blue-200 my-6 mx-1"></div>
      <div className="w-28 h-48 bg-blue-200 my-6 mx-1"></div>
      {windowSize === true ? (
        <div className="w-28 h-48 bg-blue-200 my-6 mx-1"></div>
      ) : null}
    </div>
  );
}

export default Stories;
