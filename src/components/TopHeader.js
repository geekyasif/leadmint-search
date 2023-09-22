import React from "react";

function TopHeader() {
  return (
    <div className="flex justify-between ">
      <p className="text-[10px] lg:text-sm text-gray-600 relative">
        Search for Android App<span className="text-red-500 mx-1">*</span>
        <span className="border-2 border-gray-400 rounded-full px-1 text-[10px] lg:text-xs text-gray-900 ml-1">
          ?
        </span>
      </p>
      <p className="text-[10px] lg:text-sm text-gray-600">
        Store Location : India{" "}
        <span className="text-blue-500 font-semibold">Change</span>
      </p>
    </div>
  );
}

export default TopHeader;
