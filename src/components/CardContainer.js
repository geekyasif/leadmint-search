import React from "react";
import Card from "./Card";

function CardContainer({ data }) {
  return (
    <div>
      {data?.map((item) => (
        <div key={item.appId} className="px-4">
          <Card item={item} />
        </div>
      ))}
    </div>
  );
}

export default CardContainer;
