import React from "react";
import ReactDOM from "react-dom";
import data from "../../ResturantData.json";
import ResturantCard from "./Resturant.js";
import { useState } from "react";

const Body = () => {
  const [ResturantList, setResturantList] = useState(data);

  return (
    <>
      <button
        onClick={() => {
          const filterlist = data.filter((res) => res.data.avgRating >= 4);
          console.log(parseInt(filterlist[0].data.avgRating))
          setResturantList(filterlist);
        }}
      >
        Top Rated Resturant
      </button>
      <div className="res-container">
        {ResturantList.map((resturant) => (
          <ResturantCard key={resturant.data.id} resData={resturant} />
        ))}
      </div>
    </>
  );
};

export default Body;
