import { IMAGE_CDN_URL } from "../utils/constants";

const ItemList = ({ item }) => {
  console.log(IMAGE_CDN_URL);
  return (
    <div className="flex items-center justify-between border-b border-gray-200 mb-2 p-2">
      <div className="p-4 flex flex-col w-100 text-left">
        <h3 className="text-lg">{item?.card?.info?.name}</h3>
        <small className="text-gray-600 mt-1">
          {item?.card?.info?.description}
        </small>
      </div>
      <div className="relative flex-shrink-0 w-40 h-40">
        <img
          src={`${IMAGE_CDN_URL}${item?.card?.info?.imageId}`}
          alt={item?.card?.info?.name}
          className="w-35 h-35 object-cover rounded-lg "
        />
        {/* transition-transform duration-300 hover:scale-110 */}
        <button className="absolute bottom-2 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-500 transition-colors">
          Add +
        </button>
      </div>
    </div>
  );
};

export default ItemList;
