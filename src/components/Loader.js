import React from "react";

function Loader() {
  return (
    <div className="bg-white m-2 p-2 flex gap-8 items-center rounded pl-6">
      <div className="w-[50px] h-[50px] rounded-lg animate-pulse bg-gradient-to-r from-[#f6f7f8] via-[#edeef1] to-[#f6f7f8]"></div>
      <div className="animate-pulse w-full">
        <div className="h-3 w-52 bg-gradient-to-r from-[#f6f7f8] via-[#edeef1] to-[#f6f7f8] rounded-md"></div>
        <div className="h-3 w-56 bg-gradient-to-r from-[#f6f7f8] via-[#edeef1] to-[#f6f7f8] rounded-md mt-2"></div>
        <div className="h-3 w-64 bg-gradient-to-r from-[#f6f7f8] via-[#edeef1] to-[#f6f7f8] rounded-md mt-2"></div>
      </div>
    </div>
  );
}

export default Loader;
