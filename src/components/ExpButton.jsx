import React from "react";

const ExpButton = () => {
  return (
    <div className="mt-[400px] md:mt-[450px] flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
      <button className="text-xl md:text-2xl px-12 py-1.5 md:px-10 md:py-2 rounded-md text-black bg-white opacity-70 hover:opacity-100 duration-1000">
        Explore Inventory
      </button>
      <button className="text-xl md:text-2xl px-16 py-1.5 md:px-10 md:py-2 rounded-md text-white bg-black opacity-70 hover:opacity-100 duration-1000">
        Custom Order
      </button>
    </div>
  );
};

export default ExpButton;
