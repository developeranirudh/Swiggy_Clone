import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
const ResturantMenu =()=>
{
const [Resdata,SetResdata]=useState(null);
const {resid}= useParams();
 useEffect(()=>{
    fetchMenu();

 },[]);
const fetchMenu = async () => {
    const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0972121&lng=72.9135629&restaurantId=`+resid)
   SetResdata(await data.json());
   return;
}
if(Resdata!=null){
console.log(Resdata.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card);
console.log(Resdata.data.cards[0].card.card.info);
}
return(
        <div className="menu">
        <h1></h1>
        <h2>Cuisines:</h2>       
        </div>
    )
}

export default ResturantMenu