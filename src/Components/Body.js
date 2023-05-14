import React from "react";
import ReactDOM from "react-dom";
import data from "../../Resturant data.json";
import ResturantCard from "./Resturant.js";
const Body = () => {
    return (
      <div className="res-container">
       { 
         data.map((resturant) => (<ResturantCard key={resturant.data.id} resData = {resturant}/> ))
       }
      </div>
    );
  };

  export default Body
  