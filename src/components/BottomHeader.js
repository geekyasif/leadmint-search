import React from "react";

function BottomHeader() {
  return (
    <div className="flex gap-2 items-center px-8">
     <div className=" w-5 h-5 bg-blue-100 flex items-center justify-center rounded-full">
     <p className="font-semibold text-blue-500">
        +
      </p>
     </div>
      <p className="text-blue-500 text-xs lg:text-base">
        Can't Find your app? Add it Manually
      </p>
    </div>
  );
}

export default BottomHeader;
