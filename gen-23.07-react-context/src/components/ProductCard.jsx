import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import useSWR from "swr";

function ProductCard() {
  const { id } = useParams();

  const getProduct = (url) => axios.get(url).then((res) => res.data);

  const { data } = useSWR(`http://localhost:3000/products/${id}`, getProduct);

  const thumbnails = data?.image;

  const [mainImageSrc, setMainImageSrc] = useState(thumbnails?.[0]);
  const [selectedThumbnail, setSelectedThumbnail] = useState(0);

  useEffect(() => {
    setMainImageSrc(thumbnails?.[selectedThumbnail]);
  }, [thumbnails, selectedThumbnail]);

  return (
    <div className="container min-w-full mx-0">
      {/* Second Header */}
      <div className="flex items-center p-4 border-b-2 border-gray-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>

        <Link
          to={"/products"}
          className="ml-1 text-green-900 hover:text-green-500"
        >
          Back to products
        </Link>
      </div>

      {/* Product Details */}
      <section className="flex flex-col m-10 justify-center items-center sm:items-start sm:flex-row">
        {/* Thumbnails */}
        <div className="flex flex-row mb-4 sm:mr-4 sm:flex-col">
          {thumbnails?.map((thumbnail, index) => (
            <img
              key={index}
              className={`w-[80px] h-[120px] object-cover rounded-lg mr-2 sm:mb-2 ${
                selectedThumbnail === index ? "border-2 border-gray-300" : ""
              }`}
              src={thumbnail}
              alt={`Thumbnail ${index + 1}`}
              onClick={() => {
                setMainImageSrc(thumbnail);
                setSelectedThumbnail(index);
              }}
            />
          ))}
        </div>

        <div className="w-3/4 flex flex-col rounded-lg border-2 border-gray-100 sm:flex-row">
          {/* Image */}
          <img
            id="main-image"
            className="lg:max-w-[500px] lg:min-h-[625px] object-cover sm:w-2/5 sm:rounded-tl-lg sm:rounded-bl-lg"
            src={mainImageSrc}
            alt={data?.title}
          />

          {/* Product Information */}
          <div className="flex flex-col justify-start p-6">
            <div className="mb-7">
              {/* Title */}
              <h5 className="mb-2 text-xl font-medium text-lime-950">
                {data?.title}
              </h5>
              {/* Release Date */}
              <p className="mb-2 text-sm font-light text-gray-700">
                {data?.releaseDate}
              </p>
              {/* Description */}
              <p className="text-ellipsis overflow-hidden">
                {data?.description}
              </p>
            </div>

            <div>
              {/* Price */}
              <p className="mb-7 text-xl font-semibold text-lime-950">
                ${data?.price}
              </p>
              {/* Button */}
              <button className="w-full h-8 px-5 border-x border-y border-emerald-950 rounded-md sm:w-36 hover:bg-emerald-950 hover:text-white">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductCard;
