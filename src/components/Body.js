import RestaurantCrad from "./RestaurantCrad";

import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurant, setlistOfRestaurant] = useState([]);
  const [filtredRestaurantList, setFiltredRestaurantList] = useState([]);
  const [searchText, setSearcText] = useState("");

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9083215&lng=77.6050777&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const resautantList =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setlistOfRestaurant(resautantList);
    setFiltredRestaurantList(resautantList);
  };

  useEffect(() => {
    fetchData();
  }, []);

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
    <div className="body">
      <div className="search-restaurant">
        <div className="filter">
          <div>
            <button
              className="filter-btn"
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
              className="filter-btn"
              onClick={() => setFiltredRestaurantList(listOfRestaurant)}
            >
              All Restuarnts
            </button>
          </div>
        </div>
        <div className="search-input">
          {/* <input
            type="text"
            id="searchBox"
            placeholder="Search"
            onChange={(event) => {
              const searchText = event?.target?.value?.trim();

              if (searchText?.length > 3) {
                const filteredList = listOfRestaurant.filter((res) =>
                  res.info.name
                    .toLocaleLowerCase()
                    .includes(searchText.toLocaleLowerCase(), 0)
                );
                setlistOfRestaurant(filteredList);
              } else {
                setlistOfRestaurant(restautntList);
              }
            }}
          /> */}
          <input
            type="text"
            placeholder="Search"
            value={searchText}
            onChange={(e) => {
              setSearcText(e.target.value);
              if (e?.target?.value?.length === 0) {
                setFiltredRestaurantList(listOfRestaurant);
              }
            }}
          />
          <button
            id="searchBtn"
            className="search-btn"
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
      <div className="res-conatiner">
        {filtredRestaurantList.map((resObj) => (
          <Link
            className="res-link-card"
            to={"/restaurants/" + resObj?.info?.id}
            key={resObj?.info?.id}
          >
            <RestaurantCrad resData={resObj} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
