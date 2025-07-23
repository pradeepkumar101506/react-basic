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

export default RestaurantCrad;
