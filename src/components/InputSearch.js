import React from "react";

function InputSearch({ searchText, setSearchText }) {
  return (
    <div className="flex relative items-center mt-2">
      <svg
        className="absolute top-2 lg:top-3  left-3 lg:left-4"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="20"
        height="20"
        viewBox="0 0 24 24"
      >
        <path d="M22 20L20 22 14 16 14 14 16 14z"></path>
        <path d="M9,16c-3.9,0-7-3.1-7-7c0-3.9,3.1-7,7-7c3.9,0,7,3.1,7,7C16,12.9,12.9,16,9,16z M9,4C6.2,4,4,6.2,4,9c0,2.8,2.2,5,5,5 c2.8,0,5-2.2,5-5C14,6.2,11.8,4,9,4z"></path>
        <path
          d="M13.7 12.5H14.7V16H13.7z"
          transform="rotate(-44.992 14.25 14.25)"
        ></path>
      </svg>

      <input
        className=" pl-10 lg:pl-12 p-2 border-2 rounded border-blue-300 w-full mb-2 placeholder:lg:text-sm  text-xs lg:text-sm focus:outline-none focus:border-blue-500 placeholder:text-xs"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        type="text"
        placeholder="Enter app name, package name or Playstore URL"
      />
    </div>
  );
}

export default InputSearch;
