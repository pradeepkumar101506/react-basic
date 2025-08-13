import { useState } from "react";
import ItemList from "./ItemList";

const ResCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div className="m-4 p-4 rounded-lg h-auto">
      <div className="flex justify-between items-center shadow-2xl">
        <div className="text-lg font-semibold flex items-center ">
          {data?.title}
          {data?.itemCards?.length > 0 && (
            <span className="text-sm text-gray-500 ml-1">
              ({data?.itemCards?.length})
            </span>
          )}
        </div>
        <div
          className="text-lg font-semibold cursor-pointer"
          onClick={handleClick}
        >
          {/* Down arrow using Tailwind and SVG */}
          <svg
            className={`w-5 h-5 inline-block text-gray-600 transition-transform duration-200 ${
              showItems ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
      {showItems && (
        <div className="flex flex-col">
          {data?.itemCards?.map((item) => (
            <ItemList key={item?.card?.info?.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ResCategory;
