import React from "react";
import ReactDOM from "react-dom";
import data from "../../ResturantData.json";
import ResturantCard from "./Resturant.js";
import { useState } from "react";

const Body = () => {
  const [ResturantList, setResturantList] = useState(data);

  return (
    <div className="res-container">
      <button
        onClick={() => {
          const filterlist = data.filter((res) => data.avgRating > 4);
          setResturantList(filterlist);
        }}
      />
      {ResturantList.data.map((resturant) => (
        <ResturantCard key={resturant.data.id} resData={resturant} />
      ))}
    </div>
  );
};

export default Body;
