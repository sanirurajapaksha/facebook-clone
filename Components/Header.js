import React from "react";

function Header(props) {
  return (
    <div className="flex flex-row bg-white shadow-md h-14 w-full">
      <img
        className="mt-1 mb-1"
        src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png"
        alt="Facebook icon"
      />
      <div className="flex flex-row">
        <svg
          class="w-5 h-5"
          fill="none"
          stroke="grey"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
        <input
          className="border-2 rounded-full h-10 w-60 mt-2 -ml-2 pl-5 pb-1 bg-gray-100 focus:outline-none"
          placeholder="Search on Facebook"
        ></input>
      </div>
    </div>
  );
}

export default Header;
