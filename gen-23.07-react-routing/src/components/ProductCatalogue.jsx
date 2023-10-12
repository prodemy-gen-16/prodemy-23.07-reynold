import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import productData from "../data/ProductData.json";

function ProductCatalogue() {
  const navigate = useNavigate();

  const initialData = productData.products;

  const [data, setData] = useState(initialData);
  const [selectedSortOption, setSelectedSortOption] = useState();

  // Set Products Sorting by Latest Date by Default
  useEffect(() => {
    sortProducts("latest");
  }, []);

  const handleSortChange = (event) => {
    const sortType = event.target.value;
    setSelectedSortOption(sortType);
    sortProducts(sortType);
  };

  const sortProducts = (sortType) => {
    // Change Button Color When Selected
    setSelectedSortOption(sortType);

    const sortedData = [...data].sort((a, b) => {
      if (sortType === "lowToHigh") {
        return parseFloat(a.price) - parseFloat(b.price); // Sort Products by Lowest Price
      } else if (sortType === "highToLow") {
        return parseFloat(b.price) - parseFloat(a.price); // Sort Products by Highest Price
      } else if (sortType === "latest") {
        return new Date(b.releaseDate) - new Date(a.releaseDate); // Sort Products by Latest Date
      }
    });

    setData(sortedData);
  };

  const handleGoToDetail = (id) => {
    navigate(`/products/${id}`);
  };

  return (
    <>
      {/* Second Header */}
      <div className="p-4 border-b-2 border-gray-100">
        <div className="flex justify-between">
          <div className="ml-1 text-xl font-semibold">Products</div>

          {/* Sort Options */}
          <div>
            <select
              className="border-2 border-gray-200 rounded-sm"
              name="filter"
              value={selectedSortOption}
              onChange={handleSortChange}
            >
              <option value="latest">Latest</option>
              <option value="lowToHigh">Low to High</option>
              <option value="highToLow">High to Low</option>
            </select>
          </div>
        </div>
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
              className="lg:max-w-[160px] lg:min-h-[200px] object-cover sm:w-2/5 sm:rounded-tl-lg sm:rounded-bl-lg"
              src={item.image[0]}
              alt="Products"
            />

            <div className="flex flex-col justify-between p-6">
              <div className="mb-10">
                {/* Title */}
                <h5 className="mb-2 text-xl font-medium text-lime-950 hover:text-emerald-500">
                  <button onClick={() => handleGoToDetail(item.id)}>
                    {item.title}
                  </button>
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
