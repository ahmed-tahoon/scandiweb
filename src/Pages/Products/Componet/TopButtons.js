import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const TopButtons = ({selectedProducts,handleDeleteSelected }) => {
  const nav = useNavigate()

  const goToAddProduct = () => {
    nav("/add-product");
  };
  return (
    <React.Fragment>
     <div className="flex justify-between items-center mb-4 bg-gray-200 p-4 rounded-md">
          <div className="flex-grow" />
          <div className="flex items-center space-x-4">
            <button onClick={goToAddProduct} className="bg-gradient-to-r from-green-500 to-green-700 text-white font-bold py-2 px-4 rounded-md hover:from-green-700 hover:to-green-900">
              ADD
            </button>
            {selectedProducts.length > 0 && (
              <button
                onClick={handleDeleteSelected}
                className="bg-gradient-to-r from-red-500 to-red-700 text-white font-bold py-2 px-4 rounded-md hover:from-red-700 hover:to-red-900"
              >
                Mass Delete ({selectedProducts.length})
              </button>
            )}
          </div>
        </div>
    </React.Fragment>
  );
};

export default TopButtons;
