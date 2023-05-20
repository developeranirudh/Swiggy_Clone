import React from "react";
import ReactDOM from "react-dom";
import data from "../../ResturantData.json";
import ResturantCard from "./Resturant.js";
import { useState } from "react";
import badge_image from "../../public/images/badge.png"
const Body = () => {
  const [ResturantList, setResturantList] = useState(data);

  return (
    <>
    <div className="buttons">
      <button className="TopRatedResturant"
        onClick={() => {
          const filterlist = data.filter((res) => res.data.avgRating >= 4);
          console.log(parseInt(filterlist[0].data.avgRating))
          setResturantList(filterlist);
        }}
      >
     <img className="badge_image" src={badge_image} alt="image" />
      </button>
      </div>
      <div className="res-container">
        {ResturantList.map((resturant) => (
          <ResturantCard key={resturant.data.id} resData={resturant} />
        ))}
      </div>
    </>
  );
};

export default Body;
