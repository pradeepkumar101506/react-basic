import { useState } from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ResCategory from "./ResCategory";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { restId } = useParams();
  const [showIndex, setShowIndex] = useState(0);

  const resInfo = useRestaurantMenu(restId);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, costForTwoMessage, cuisines } =
    resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(categories);

  return (
    <div className="flex items-center justify-center">
      <div className="shadow-2xl p-4 m-4 border border-gray-200 w-5xl max-h-screen overflow-y-auto text-center">
        <h3 className="text-xl font-bold">{name}</h3>
        <h5>
          {cuisines.join(",")}-{costForTwoMessage}
        </h5>
        <h3>Menu</h3>
        {categories.map((category, index) => (
          <ResCategory
            onClick={() => console.log("clicked", index)}
            key={index}
            data={category?.card?.card}
            showItems={showIndex === index ? true : false}
            setShowIndex={() => {
              if (showIndex === index) {
                setShowIndex(null);
                return;
              }
              setShowIndex(index);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
