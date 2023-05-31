import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/google-logo.png";
import SearchInput from "./SearchInput";
import ProfileIcon from "./ProfileIcon";
import { Context } from "../utils/ContextApi";
import { menu } from "../utils/Constants";

const SearchResultHeader = () => {
  const [selectedMenu, setSelectedMenu] = useState("All");
  const clickHandler = (menu) => {
    setSelectedMenu(menu.name);
  };
  return (
    <div className="p-[15px] pb-0 md:pr-5 md:pl-20 md:pt-7 border-b border-[#ebebeb] flex md:block flex-col items-center sticky">
      <div className="flex items-center justify-between w-full ">
        <div className="flex items-center grow">
          <img src={Logo} alt="" className="hidden md:block w-[92px] mr-10" />
          <SearchInput from="searchResult" />
        </div>
        <div className="hidden md:block">
          <ProfileIcon />
        </div>
      </div>
      <div className="flex ml-[-12px] mt-3 ">
        {menu.map((menu, index) => (
          <span
            className={`flex relative items-center p-3 text-[#5f6368] cursor-pointer ${
              selectedMenu === menu.name ? "text-[#1a73e8]" : ""
            }`}
            key={index}
            onClick={() => clickHandler(menu)}
          >
            <span className="hidden md:block mr-2">{menu.icon}</span>
            <span className="hidden md:block mr-2 text-sm">{menu.name}</span>
            {selectedMenu === menu.name && (
              <span className="h-[3px] w-[calc(100%-20px)] absolute bg-[#1a73e8] bottom-0 left-[10px]" />
            )}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SearchResultHeader;
