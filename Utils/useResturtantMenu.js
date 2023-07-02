const ResturantData = async (resid) => {
  const data = await fetch(
    `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0972121&lng=72.9135629&restaurantId=` +
      resid
  );
  resdata = await data.json();
  return resdata;
};
