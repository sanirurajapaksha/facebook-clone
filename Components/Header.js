import React from "react";
import {
  SearchIcon,
  HomeIcon,
  UserGroupIcon,
  PhoneIcon,
  UsersIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";

function Header(props) {
  return (
    <div className="flex flex-row justify-between bg-white shadow-md h-14 w-full">
      {/* {Left Header Part START} */}
      <div className="flex flex-row">
        <img
          className="mt-1 mb-1"
          src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png"
          alt="Facebook icon"
        />
        <div className="flex flex-row">
          <SearchIcon className="w-5 h-5 relative top-1/3 left-2 text-gray-500" />
          <input
            className="border-2 rounded-full h-10 w-60 mt-2 -ml-6 pl-9 pb-1 bg-gray-100 focus:outline-none"
            placeholder="Search on Facebook"
          />
        </div>
      </div>
      {/* Center Header */}
      <div className="flex space-x-5 mt-2">
        <div className="flex h-12 w-24 focus-within:ring-2 hover:bg-gray-200 hover:rounded-t-md justify-center items-center">
          <HomeIcon className="h-8 text-gray-500" />
        </div>
        <div className="flex h-12 w-24 hover:bg-gray-200 hover:rounded-t-md justify-center items-center">
          <UserGroupIcon className="h-8 text-gray-500" />
        </div>
        <div className="flex h-12 w-24 hover:bg-gray-200 hover:rounded-t-md justify-center items-center">
          <UsersIcon className="h-8 text-gray-500" />
        </div>
        <div className="flex h-12 w-24 hover:bg-gray-200 hover:rounded-t-md justify-center items-center">
          <PhoneIcon className="h-8 text-gray-500" />
        </div>
        <div className="flex h-12 w-24 hover:bg-gray-200 hover:rounded-t-md justify-center items-center">
          <ShoppingCartIcon className="h-8 text-gray-500" />
        </div>
      </div>
      {/*Header Right*/}
      <div className="flex space-x-5">
        <div className="w-10 h-10 rounded-full bg-red-200" />
        <div className="w-10 h-10 rounded-full bg-red-200" />
        <div className="w-10 h-10 rounded-full bg-red-200" />
        <div className="w-10 h-10 rounded-full bg-red-200" />
        <div className="w-10 h-10 rounded-full bg-red-200" />
      </div>
    </div>
  );
}
export default Header;
