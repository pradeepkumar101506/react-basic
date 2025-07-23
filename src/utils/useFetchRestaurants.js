import { RESTAURANT_LIST_API } from "./constants";

import { useEffect, useState } from "react";

const useFetchRestaurants = () => {
  const [restaurants, setRestaurants] = useState([]);

  const fetchRestaurants = async () => {
    const data = await fetch(RESTAURANT_LIST_API);
    const json = await data.json();
    const restaurantList =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setRestaurants(restaurantList);
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);

  return restaurants;
};

export default useFetchRestaurants;
