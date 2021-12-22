import React from "react";
import CardBox from "../Card/CardBox";

function MenuItem({ item }) {
  return (
    <div>
      <CardBox title={item.title} id={item.id} />
    </div>
  );
}

export default MenuItem;
