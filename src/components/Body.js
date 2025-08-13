import RestaurantCrad, { withVegLabel } from "./RestaurantCrad";

import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useFetchRestaurants from "../utils/useFetchRestaurants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurant, setlistOfRestaurant] = useState([]);
  const [filtredRestaurantList, setFiltredRestaurantList] = useState([]);
  const [searchText, setSearcText] = useState("");
  const restaurants = useFetchRestaurants();
  const isOnline = useOnlineStatus();

  const RestaurantCradWithVegLabel = withVegLabel(RestaurantCrad);

  useEffect(() => {
    if (restaurants?.length) {
      setlistOfRestaurant(restaurants);
      setFiltredRestaurantList(restaurants);
      // console.log(restaurants);
      // info.veg = true
    }
    if (!isOnline) {
      alert(
        "Looks like you are offline. Please check your internet connection."
      );
      setlistOfRestaurant([]);
      setFiltredRestaurantList([]);
    }
  }, [isOnline, restaurants]);

  useEffect(() => {
    const handelScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 300
      ) {
        console.log("handel scroll is called at last position ");
      }
    };

    window.addEventListener("scroll", handelScroll);
  });

  return listOfRestaurant?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="p-1 m-1">
      <div className="flex items-center">
        <div className="flex items-center w-full p-2 m-2">
          <div className="mr-2">
            <button
              className="px-4 py-2 rounded-lg font-bold shadow-md text-white"
              style={{
                background: "linear-gradient(90deg, #ff7e5f 0%, #feb47b 100%)",
              }}
              onClick={() => {
                const filteredList = listOfRestaurant?.filter(
                  (res) => res.info.avgRating > 4
                );
                setFiltredRestaurantList(filteredList);
              }}
            >
              Top Rated Restaurants
            </button>
          </div>
          <div>
            <button
              className="px-4 py-2 rounded-lg font-semibold bg-gray-100 hover:bg-gray-200 text-gray-800"
              onClick={() => setFiltredRestaurantList(listOfRestaurant)}
            >
              All Restaurants
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2 ml-4">
          <input
            type="text"
            placeholder="Search"
            value={searchText}
            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-300"
            onChange={(e) => {
              setSearcText(e.target.value);
              if (e?.target?.value?.length === 0) {
                setFiltredRestaurantList(listOfRestaurant);
              }
            }}
          />
          <button
            id="searchBtn"
            className="px-4 py-2 rounded-lg font-semibold bg-orange-400 hover:bg-orange-500 text-white"
            onClick={() => {
              const filteredList = listOfRestaurant.filter((res) =>
                res.info.name
                  .toLocaleLowerCase()
                  .includes(searchText.toLocaleLowerCase(), 0)
              );
              setFiltredRestaurantList(filteredList);
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {filtredRestaurantList.map((resObj) => (
          <Link
            className="text-decoration-none color-inherit"
            to={"/restaurants/" + resObj?.info?.id}
            key={resObj?.info?.id}
          >
            {resObj?.info?.veg ? (
              <RestaurantCradWithVegLabel resData={resObj} />
            ) : (
              <RestaurantCrad resData={resObj} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
