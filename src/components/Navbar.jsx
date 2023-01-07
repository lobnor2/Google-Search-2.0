import React from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import Search from "./Search";

const Navbar = ({ setDarkTheme, darkTheme }) => {
  return (
    <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-300">
      <div className="flex justify-between items-center space-x-5 w-screen">
        <Link to="/">
          <p className="text-2xl  text-white bg-blue-500 px-2 py-1 rounded dark:by-gray-500 dark:text-gray-900">
            Google
          </p>
        </Link>
        <button
          type="button"
          onClick={() => setDarkTheme(!darkTheme)}
          className="text-xl dark:bg-gray-50 dark:text:gray-900 bg-white border text-gray-600 rounded-full px-2 py-1 hover:shadow-lg"
        >
          {darkTheme ? "Light 💡" : "Dark 🌙"}
        </button>
      </div>
      <Search />
    </div>
  );
};

export default Navbar;
