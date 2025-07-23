import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";

const useRestaurantMenu = (restId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu(restId);
  }, []);
  const fetchMenu = async (restId) => {
    const data = await fetch(MENU_API + restId);
    const json = await data.json();
    setResInfo(json?.data);
  };
  return resInfo;
};

export default useRestaurantMenu;
