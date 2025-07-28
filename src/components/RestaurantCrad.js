import { CDN_URL } from "../utils/constants";

const RestaurantCrad = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, sla } = resData?.info;
  return (
    <div className="bg-gray-100 rounded-lg shadow-lg p-4 m-2 transition hover:shadow-xl active:scale-95 min-h-[410px] h-[410px] flex flex-col overflow-hidden cursor-pointer">
      <img
        className="w-full h-60 object-cover rounded-md mb-4"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="text-lg font-semibold mb-1 truncate">{name}</h3>
      <h5 className="text-sm text-gray-600 mb-1 truncate">
        {cuisines.join(", ")}
      </h5>
      <h5 className="text-sm text-yellow-600 mb-1">{avgRating} Rating</h5>
      <h5 className="text-sm text-green-600 mt-auto truncate">
        {sla.slaString} Delivery
      </h5>
    </div>
  );
};

// Higher Order Component to add Veg label
// This component will wrap the RestaurantCrad and add a Veg label on top

export const withVegLabel = (RestaurantCrad) => {
  return (props) => {
    return (
      <div className="relative">
        <div className="inline-flex items-center bg-green-600 text-white px-3 py-1 text-sm font-semibold absolute top-0 left-2 rounded shadow z-10">
          Veg
          <div className="w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-green-600 absolute -right-2"></div>
        </div>
        <RestaurantCrad {...props} />
      </div>
    );
  };
};

export default RestaurantCrad;
