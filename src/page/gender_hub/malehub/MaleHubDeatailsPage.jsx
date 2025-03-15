import React from 'react';
import { useParams } from 'react-router-dom';
import { TbCurrencyNaira } from "react-icons/tb";
import maleHubData from '../../../Data/data';

const MaleHubDetailsPage = () => {
  const { id } = useParams(); // Get the product ID from the URL

  // Find the selected product
  const maleHubItem = maleHubData.find((item) => item.id === parseInt(id));

  // If product is not found, show an error message
  if (!maleHubItem) {
    return <h2 className="text-center text-red-500 text-xl mt-10">Product Not Found</h2>;
  }

  // Extract the designer name and filter other outfits by the same designer
  const otherDesigns = maleHubData.filter(
    (item) => item.designerName === maleHubItem.designerName
    //  && item.id !== maleHubItem.id
  );

  return (
    <section className='max-w-[1280px] mt-[3rem] mx-auto p-6'>
      <section className='flex gap-10 w-full h-full'>
        {/* Main Outfit Image */}
        <div className="">
          <img src={maleHubItem.outfit} className='h-full' alt={maleHubItem.outfitName} />
        </div>
        
        {/* Outfit Details */}
        <div className="grid gap-[2rem]">
          <div className="grid gap-[2rem] px-2">
            <div className='grid gap-2'>
              <p className="text-2xl font-semibold">{maleHubItem.outfitName}</p>
              <p className="text-gray-600">Designer: {maleHubItem.designerName}</p>
              <p className='flex items-center text-lg font-semibold text-green-600'>
                <TbCurrencyNaira className='text-xl' />
                {maleHubItem.outfitPrice} NGN
              </p>
            </div>
            <p className='max-w-[45ch] text-gray-700'>
              This outfit is designed for elegance and comfort, suitable for various occasions. Available in multiple sizes, with custom options on request.
            </p>
          </div>
          <button className='w-[200px] h-[40px] bg-black text-white rounded-full text-lg'>
            Add To Cart
          </button>
        </div>
      </section>

      {/* Other Designs from This Designer */}
      {otherDesigns.length > 0 && (
        <section className='grid gap-[2rem] text-center mt-[3rem]'>
          <p className="text-xl font-semibold">Other Designs from {maleHubItem.designerName}</p>
          <section className='flex justify-center gap-8 overflow-x-auto'>
            {otherDesigns.map((design) => (
              <div key={design.id} className="cursor-pointer">
                <img 
                  src={design.outfit} 
                  className="rounded-lg w-[150px] h-[150px] object-cover"
                  alt={design.outfitName}
                />
              </div>
            ))}
          </section>
        </section>
      )}
    </section>
  );
};

export default MaleHubDetailsPage;
