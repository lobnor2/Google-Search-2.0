import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";

import MicIcon from "../assets/mic.svg";
import ImageIcon from "../assets/image.svg";

const SearchInput = () => {
  const [searchQuery, setSearchQuery] = useState("javascript");

  return (
    <div
      className="border border-[#dfe1ef] h-[46px] w-full md:w-[584px] flex items-center gap-3 px-4 rounded-3xl hover:bg-white hover:shadow-c hover:border-0 focus-within:shadow-c focus-within:border-0"
      id="searchBox"
    >
      <AiOutlineSearch size={18} color="#9aa0a6" />
      <input
        type="text"
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
        onKeyUp={(e) => {
          console.log(e.target.value);
        }}
        value={searchQuery}
        autoFocus
        className="grow outline-0 text-black/[0.87]"
      />
      <div className="flex items-center gap-3">
        {searchQuery && (
          <IoMdClose
            size={20}
            color="#70757a"
            className="cursor-pointer"
            onClick={() => setSearchQuery("")}
          />
        )}

        <img src={MicIcon} alt="mic icon" className="h-6 w-6 cursor-pointer" />
        <img
          src={ImageIcon}
          alt="image icon"
          className="h-6 w-6 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default SearchInput;
