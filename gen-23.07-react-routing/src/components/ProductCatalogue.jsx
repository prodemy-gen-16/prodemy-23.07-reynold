import { useState, useEffect } from "react";
import productData from "../data/ProductData.json";

function ProductCatalogue() {
  const initialData = productData.products;

  const [data, setData] = useState(initialData);
  const [selectedSortOption, setSelectedSortOption] = useState();

  // Set Products Sorting by Recent Date by Default
  useEffect(() => {
    sortProducts("recent");
  }, []);

  const sortProducts = (sortType) => {
    // Change Button Color When Selected
    setSelectedSortOption(sortType);

    const sortedData = [...data].sort((a, b) => {
      if (sortType === "lowToHigh") {
        return parseFloat(a.price) - parseFloat(b.price); // Sort Products by Lowest Price
      } else if (sortType === "highToLow") {
        return parseFloat(b.price) - parseFloat(a.price); // Sort Products by Highest Price
      } else if (sortType === "recent") {
        return new Date(b.releaseDate) - new Date(a.releaseDate); // Sort Products by Recent Date
      }
    });

    setData(sortedData);
  };

  return (
    <>
      {/* Second Header */}
      <div className="p-4 border-b-2 border-gray-100">
        <div className="flex justify-between">
          <div className="ml-1 text-xl font-semibold">Products</div>

          <div>
            <select
              className="border-2 border-gray-200 rounded-sm"
              name="filter"
            >
              <option value="name-asc">Name (A to Z)</option>
              <option value="name-des">Name (Z to A)</option>
              <option value="price-asc">Price (low to high)</option>
              <option value="name-des">Price (high to low)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Filter/Sort */}
      <div className="w-3/4 h-8 mx-auto flex gap-x-5 my-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"
          />
        </svg>

        <button
          className={`w-auto px-5 border-x border-y border-emerald-950 rounded-md ${
            selectedSortOption === "lowToHigh"
              ? "bg-emerald-950 text-white"
              : "hover:bg-emerald-950 hover:text-white"
          }`}
          onClick={() => sortProducts("lowToHigh")}
        >
          Low to High
        </button>

        <button
          className={`w-auto px-5 border-x border-y border-emerald-950 rounded-md ${
            selectedSortOption === "highToLow"
              ? "bg-emerald-950 text-white"
              : "hover:bg-emerald-950 hover:text-white"
          }`}
          onClick={() => sortProducts("highToLow")}
        >
          High to Low
        </button>

        <button
          className={`w-auto px-5 border-x border-y border-emerald-950 rounded-md ${
            selectedSortOption === "recent"
              ? "bg-emerald-950 text-white"
              : "hover:bg-emerald-950 hover:text-white"
          }`}
          onClick={() => sortProducts("recent")}
        >
          Latest
        </button>
      </div>

      {/* Products List */}
      <div className="w-3/4 mx-auto grid grid-cols-1 lg:grid-cols-2 justify-items-center justify-center gap-y-5 gap-x-14 my-5">
        {data.map((item) => (
          <div
            className="flex flex-col rounded-lg border-2 border-gray-100 sm:flex-row"
            key={item.id}
          >
            {/* Image */}
            <img
              className="lg:w-[160px] object-cover sm:w-2/5 sm:rounded-tl-lg sm:rounded-bl-lg"
              src={item.image[0]}
              alt="Products"
            />

            <div className="flex flex-col justify-between p-6">
              <div className="mb-10">
                {/* Title */}
                <h5 className="mb-2 text-xl font-medium text-lime-950 hover:text-emerald-500">
                  <a href="">{item.title}</a>
                </h5>
                {/* Release Date */}
                <p className="mb-2 text-sm font-light text-gray-700">
                  {item.releaseDate.toString()}
                </p>
                {/* Description */}
                <p className="text-ellipsis overflow-hidden">
                  {item.description}
                </p>
              </div>

              <div className="flex flex-row justify-between">
                {/* Price */}
                <p className="text-xl font-semibold text-lime-950">
                  ${item.price}
                </p>
                {/* Button */}
                <button className="w-36 h-8 px-5 border-x border-y border-emerald-950 rounded-md hover:bg-emerald-950 hover:text-white">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProductCatalogue;
