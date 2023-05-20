import delivery from "../../public/images/delivery.png"
const ResturantCard = (props) => {
    const {name,cuisines,costForTwo,minDeliveryTime}=props.resData.data
    return (
      <div className="rescard">
        <img
          className="res-logo"
          src={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
            props.resData.data.cloudinaryImageId
          }
        ></img>
        <h3 className="restitle">{name}</h3>
        <h4 className="rescuisines">{cuisines.join(",  ")}</h4>
        <h5 className="resinfo" >{`Cost For Two: ` + costForTwo / 100} &#8377;</h5>
        <div className="resdelivery-container"> <h5  className="resdeliverytime">{`Delivery Time: `+minDeliveryTime+` MINS`}</h5><img className="resdelivery-image" src={delivery} alt="image" /></div>
      </div>
    );
  };

export default ResturantCard