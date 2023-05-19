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
        <h3>{name}</h3>
        <h4>{cuisines.join(",  ")}</h4>
        <h5>{`Cost For Two: ` + costForTwo / 100}</h5>
        <h5>{minDeliveryTime}</h5>
      </div>
    );
  };

export default ResturantCard