import React, { useState } from "react";

const SizeTable = () => {
  const [selectedCategory, setSelectedCategory] = useState("Men");

  const mensData = [
    { size: "S", neck: "14-14.5", chest: "34 - 36", sleeve: "32.5 - 33" },
    { size: "M", neck: "15-15.5", chest: "38 - 40", sleeve: "33.5 - 34" },
    { size: "L", neck: "16-16.5", chest: "42 - 44", sleeve: "34.5 - 35" },
    { size: "XL", neck: "17-17.5", chest: "46 - 48", sleeve: "35.5 - 36" },
    { size: "XXL", neck: "18-18.5", chest: "50 - 52", sleeve: "36.5 - 37" },
    { size: "3XL", neck: "19-19.5", chest: "54 - 56", sleeve: "37.5 - 38" },
  ]
  const mensData1 = [
    { size: "30", waist: "32 1/2" },
    { size: "31", waist: "32 1/2" },
    { size: "32", waist: "32 1/2" },
    { size: "33", waist: "32 1/2" },
    { size: "34", waist: "32 1/2" },
    { size: "35", waist: "32 1/2" },
    { size: "36", waist: "32 1/2" },
    { size: "37", waist: "32 1/2" },
  ];

  const womensData = [
    { size: "XS", neck: "12-12.5", chest: "30 - 32", sleeve: "30.5 - 31" },
    { size: "S", neck: "13-13.5", chest: "32 - 34", sleeve: "31.5 - 32" },
    { size: "M", neck: "14-14.5", chest: "34 - 36", sleeve: "32.5 - 33" },
    { size: "L", neck: "15-15.5", chest: "36 - 38", sleeve: "33.5 - 34" },
    { size: "XL", neck: "16-16.5", chest: "38 - 40", sleeve: "34.5 - 35" },
  ];


  const womensData1 = [
    { size: "30", waist: "32 1/3" },
    { size: "31", waist: "32 1/2" },
    { size: "32", waist: "32 1/2" },
    { size: "33", waist: "32 1/2" },
    { size: "34", waist: "32 1/2" },
    { size: "35", waist: "32 1/2" },
    { size: "36", waist: "32 1/2" },
    { size: "37", waist: "32 1/2" },
  ];

  return (
    <div className="">
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-semibold mt-5">Fit Guide</h2>
      </div>
      <div className="flex w-full border-gray-300 my-9 px-4 sm:px-8 lg:px-16 py-6">
        <button
          onClick={() => setSelectedCategory("Men")}
          className={`flex-grow py-3 text-sm font-medium ${
            selectedCategory === "Men"
              ? "bg-orange-500 text-white"
              : "bg-white text-gray-800"
          } rounded-l-full transition`}
        >
          Men
        </button>
        <button
          onClick={() => setSelectedCategory("Women")}
          className={`flex-grow py-3 text-sm font-medium ${
            selectedCategory === "Women"
              ? "bg-orange-500 text-white"
              : "bg-white text-gray-800"
          } rounded-r-full transition`}
        >
          Women
        </button>
      </div>
      <div>
        <div className="overflow-x-auto px-4 sm:px-8 lg:px-16 py-6">
            {selectedCategory === 'Men' ? (
      <h2 className="text-xl font-semibold mb-2">Men's Top Fit Guide</h2>
    ) : selectedCategory === 'Women' ? (
      <h2 className="text-xl font-semibold mb-2">Women's Top Fit Guide</h2>
    ) : null}

          <p className="text-gray-600 mb-6">
            To find your perfect fit, check your measurements against the size
            chart below.
          </p>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Size
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Neck
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Chest
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Sleeve/Arm
                </th>
              </tr>
            </thead>
            <tbody>
              {(selectedCategory === "Men" ? mensData : womensData).map(
                (row, index) => (
                  <tr key={index} className="odd:bg-white even:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">
                      {row.size}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {row.neck}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {row.chest}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {row.sleeve}
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
        <div className="overflow-x-auto px-4 sm:px-8 lg:px-16 py-6">
        <h2 className="text-xl font-semibold mb-2"> Top Fit Guide</h2>
        <p className="text-gray-600 mb-6">
          To find your perfect fit, check your measurements against the size
          chart below.
        </p>
        <table className=" md:w-2/4 w-3/4 border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2 text-left">
                Size
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Waist
              </th>
            </tr>
          </thead>
          <tbody>
            {(selectedCategory === "Men" ? mensData1 : womensData1).map(
              (row, index) => (
                <tr key={index} className="odd:bg-white even:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">
                    {row.size}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {row.waist}
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
      </div>
      <div className="bg-[#FFF8F2] py-10 text-center">
        <h2 className="text-2xl font-semibold mb-2">Got More Questions?</h2>
        <p className="text-gray-600 mb-8">
          Our Customer service team are always available to help you out
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-lg font-medium mb-2">Call Us</h3>
            <p className="text-gray-700">+2340000000000</p>
            <p className="text-gray-700">+2340000000000</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-lg font-medium mb-2">Start a Chat</h3>
            <p className="text-gray-700">loremipsum@gmail.com</p>
            <p className="text-gray-700">loremipsum@gmail.com</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-lg font-medium mb-2">Send an Email</h3>
            <p className="text-gray-700">loremipsum@gmail.com</p>
            <p className="text-gray-700">loremipsum@gmail.com</p>
          </div>
        </div>
      </div>
      {/* <div className="flex justify-center">
      <div className="mt-6 bg-gradient-to-r from-[#e87a00] via-[#f4bd80] to-white w-3/4 h-1 "></div>
      </div> */}
    </div>
  );
};

export default SizeTable;
