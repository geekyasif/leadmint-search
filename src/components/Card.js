import React from "react";

// {
// "appName":"Roblox",
// "developer":"Roblox Corporation",
// "icon":"https://play-lh.googleusercontent.com/WNWZaxi9RdJKe2GQM3vqXIAkk69mnIl4Cc8EyZcir2SKlVOxeUv9tZGfNTmNaLC717Ht",
// "url":"https://play.google.com/store/apps/details?id=com.roblox.client",
// "appId":"com.roblox.client"

// }

function Card({ item }) {
  return (
    <div className="bg-white m-2 p-2 flex gap-8 items-center rounded">
      <div className="">
        <img src={item?.icon} className="w-[50px] h-[50px] rounded-lg" />
      </div>
      <div>
        <p className="text-sm lg:text-lg font-bold">{item?.appName}</p>
        <p className="text-xs">{item?.developer}</p>
        <a
          src={item?.url}
          target="_blank"
          className="text-xs text-blue-500 cursor-pointer"
        >
          Download
        </a>
      </div>
    </div>
  );
}

export default Card;
