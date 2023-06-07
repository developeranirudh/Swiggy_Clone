import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import ResturantCard from "./Resturant.js";
import { useState } from "react";
import badge_image from "../../public/images/badge.png";
const Body = () => {
  function filterdata(searchText, resturant) {
    const searchdata = resturant.filter((resturant) => {
      if (resturant.data.name.toLowerCase().includes(searchText)) {
        return resturant.data;
      }
    });
    return searchdata;
  }

  const [ResturantList, setResturantList] = useState([]);
  const [SearchText, setSearchText] = useState(" ");
  const [FilterResturant, SetFilterResturant] = useState(ResturantList);

  getswiggydata = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0972121&lng=72.9135629&page_type=DESKTOP_WEB_LISTING"
    );
    const jsondata = await data.json();
    setResturantList(jsondata?.data?.cards[2]?.data?.data?.cards);
    SetFilterResturant(jsondata?.data?.cards[2]?.data?.data?.cards);
    return;
  };

  useEffect(() => {
    getswiggydata();
  }, []);

  // Conditional Rendering
  if (ResturantList.length == 0) {
    return <div> Loading....</div>;
  } else {
    return (
      <>
        <div className="buttons">
          <div className="search">
            <input
              type="text"
              className="search-input"
              placeholder="Search"
              onChange={(e) => {
                setSearchText(e.target.value.toLowerCase());
              }}
            ></input>
            <button
              className="search-btn"
              title="Search"
              onClick={() => {
                const searchdata = filterdata(SearchText, ResturantList);
                SetFilterResturant(searchdata);
              }}
            >
              Search
            </button>
          </div>
          <button
            title="Top Rated Resturant In Town 🌟"
            className="TopRatedResturant"
            onClick={() => {
              const filterlist = FilterResturant.filter((res) => res.data.avgRating >= 4.5);
              console.log(parseInt(filterlist[0].data.avgRating));
              SetFilterResturant(filterlist);
            }}
          >
            <img className="badge_image" src={badge_image} alt="image" />
          </button>
        </div>
        <div className="res-container">
          {FilterResturant.map((resturant) => (
            <ResturantCard key={resturant.data.id} resData={resturant} />
          ))}
        </div>
      </>
    );
  }
};
export default Body;
