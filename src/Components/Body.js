import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import ResturantCard from "./Resturant.js";
import { useState } from "react";
import badge_image from "../../public/images/badge.png";
const Body = () => {
  function filterdata(searchText, resturant) {
    const searchdata = resturant.filter((resturant) => {
      if (resturant.data.name.includes(searchText)) {
        return resturant.data;
      }
    });
    return searchdata;
  }

  const [ResturantList, setResturantList] = useState([]);
  const [SearchText, setSearchText] = useState(" ");

  getswiggydata = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0972121&lng=72.9135629&page_type=DESKTOP_WEB_LISTING"
    );
    const jsondata = await data.json();
    setResturantList(jsondata?.data?.cards[2]?.data?.data?.cards);
    console.log(jsondata);
    return;
  };

  useEffect(() => {
    getswiggydata();
  }, []);


  if(ResturantList.length == 0)
  {
    return <div> Loading....</div>
  }
  else {
  return (
    <>
      <div className="buttons">
        <div className="search">
          <input
            type="text"
            className="search-input"
            placeholder="Search"
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="search-btn"
            onClick={() => {
              const searchdata = filterdata(SearchText, ResturantList);
              setResturantList(searchdata);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="TopRatedResturant"
          onClick={() => {
            const filterlist = data.filter((res) => res.data.avgRating >= 4);
            console.log(parseInt(filterlist[0].data.avgRating));
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
}
export default Body;
