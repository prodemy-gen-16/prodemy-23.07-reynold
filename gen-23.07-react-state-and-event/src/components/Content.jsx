import React from "react";

import BackpackImage from "../img/backpack.jpg";
import BikeLightImage from "../img/bike-light.jpg";
import BlackShirtImage from "../img/black-shirt.jpg";
import JacketImage from "../img/jacket.jpg";
import SweaterImage from "../img/sweater.jpg";
import WhiteShirtImage from "../img/white-shirt.jpg";

const { useState } = React;

function Product() {
  const initialData = [
    {
      title: "Backpack",
      description:
        "Carry all the things with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.",
      price: "29.99",
      image: BackpackImage,
      releaseDate: new Date("2023-10-09")
        .toLocaleDateString("en-us", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    },
    {
      title: "Bike Light",
      description:
        "A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.",
      price: "9.99",
      image: BikeLightImage,
      releaseDate: new Date("2023-09-27")
        .toLocaleDateString("en-us", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    },
    {
      title: "Black Shirt",
      description:
        "Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.",
      price: "15.99",
      image: BlackShirtImage,
      releaseDate: new Date("2023-10-25")
        .toLocaleDateString("en-us", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    },
    {
      title: "Jacket",
      description:
        "It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.",
      price: "49.99",
      image: JacketImage,
      releaseDate: new Date("2023-08-12")
        .toLocaleDateString("en-us", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    },
    {
      title: "Sweater",
      description:
        "Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel.",
      price: "7.99",
      image: SweaterImage,
      releaseDate: new Date("2023-02-01")
        .toLocaleDateString("en-us", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    },
    {
      title: "White Shirt",
      description:
        "This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.",
      price: "15.99",
      image: WhiteShirtImage,
      releaseDate: new Date("2023-10-10")
        .toLocaleDateString("en-us", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    },
  ];

  const [data, setData] = useState(initialData);

  // Sort Products by Lowest Price
  const sortPriceLowest = () => {
    const sortedData = [...data].sort((a, b) => {
      return parseFloat(a.price) - parseFloat(b.price);
    });
    setData(sortedData);
  };

  // Sort Products by Highest Price
  const sortPriceHighest = () => {
    const sortedData = [...data].sort((a, b) => {
      return parseFloat(b.price) - parseFloat(a.price);
    });
    setData(sortedData);
  };

  // Sort Products by Ascending Date
  const sortDateAsc = () => {
    const sortedData = [...data].sort((a, b) => {
      return new Date(a.releaseDate) - new Date(b.releaseDate);
    });
    console.log(sortedData);
    setData(sortedData);
  };

  return (
    <>
      {/* Sorted Buttons */}
      <div className="w-3/4 mx-auto flex justify-end gap-x-5 my-5">
        <button
          className="w-44 h-8 border-x border-y border-emerald-950 rounded-md hover:bg-emerald-950 hover:text-white"
          onClick={sortPriceLowest}
        >
          Low to High
        </button>

        <button
          className="w-44 h-8 border-x border-y border-emerald-950 rounded-md hover:bg-emerald-950 hover:text-white"
          onClick={sortPriceHighest}
        >
          High to Low
        </button>

        <button
          className="w-44 h-8 border-x border-y border-emerald-950 rounded-md hover:bg-emerald-950 hover:text-white"
          onClick={sortDateAsc}
        >
          Latest
        </button>
      </div>

      {/* Product List */}
      <div className="w-3/4 mx-auto grid grid-cols-1 lg:grid-cols-2 justify-items-center justify-center gap-y-5 gap-x-14 my-5">
        {data.map((item, index) => (
          <div
            className="flex flex-col rounded-lg border-2 border-gray-100 sm:flex-row"
            key={index}
          >
            {/* Image */}
            <img
              className="lg:w-[160px] object-cover sm:w-2/5 sm:rounded-tl-lg sm:rounded-bl-lg"
              src={item.image}
              alt="Product"
            />

            <div className="flex flex-col justify-between p-6">
              <div className="mb-10">
                {/* Title */}
                <h5 className="mb-2 text-xl font-medium text-lime-950 hover:text-emerald-500">
                  {item.title}
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

function Content() {
  return <Product />;
}

export default Content;
