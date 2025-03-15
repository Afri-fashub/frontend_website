import React from 'react';

const FemaleHubCard = ({ femaleHubItem }) => {
  return (
    <div className="bg-gray-100 rounded-lg shadow-md overflow-hidden p-4">
      {/* Outfit Image */}
      <div className="relative w-full flex justify-center">
        <img
          src={femaleHubItem.outfit} // Uses the correct image from props
          className="object-cover w-full max-w-[250px] h-auto rounded-lg"
          alt={femaleHubItem.outfitName}
        />
      </div>

      {/* Buy Button */}
      <div className="flex justify-end mt-3">
        <button className="bg-green-500 text-white py-1 px-4 rounded-full text-sm hover:bg-green-600">
          Buy
        </button>
      </div>

      {/* Outfit Details */}
      <div className="mt-4 text-gray-700 text-sm space-y-2">
        <div className="flex justify-between">
          <span className="font-semibold">Outfit Name:</span>
          <span>{femaleHubItem.outfitName}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Outfit Price:</span>
          <span>{femaleHubItem.outfitPrice}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Designer Name:</span>
          <span>{femaleHubItem.designerName}</span>
        </div>
      </div>
    </div>
  );
};

export default FemaleHubCard;