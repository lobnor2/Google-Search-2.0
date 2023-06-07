import React from "react";

const SearchedItemTemplate = ({ key, data }) => {
  const createMarkup = (html) => {
    return { __html: html };
  };

  return (
    <div className="flex flex-col py-3 max-w-[700px]">
      <div
        className="group cursor-pointer "
        onClick={() => widow.open(data.link)}
      >
        <div className="text-sm truncate text-[#202124]">
          {data.formattedUrl}
        </div>
        <div className="text-xl group-hover:underline text-[#1a0dab] pt-2">
          {data.title}
        </div>
      </div>
      <div
        className="text-sm text-[#4d5156] leading-6 pt-1"
        dangerouslySetInnerHTML={createMarkup(data.htmlSnippet)}
      />
    </div>
  );
};

export default SearchedItemTemplate;
