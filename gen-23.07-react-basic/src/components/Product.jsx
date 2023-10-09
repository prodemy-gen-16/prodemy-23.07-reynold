function Product(props) {
  const {children = "{Product Name}"} = props;
  return (
    <section className="flex justify-center">
      <div className="w-[500px] flex flex-col rounded-lg border-2 border-gray-100 sm:flex-row">
        {/* Image */}
        <img
          className="lg:w-[160px] object-cover sm:w-2/5 sm:rounded-tl-lg sm:rounded-bl-lg"
          src="https://www.saucedemo.com/static/media/sauce-backpack-1200x1500.0a0b85a3.jpg"
          alt="Product"
        />

        <div className="flex flex-col justify-start p-6">
          <div className="mb-8">
            {/* Title */}
            <h5 className="mb-2 text-xl font-medium text-lime-950 hover:text-emerald-500">
              {/* Sauce Labs Backpack */}
              {children}
            </h5>
            {/* Description */}
            <p className="text-ellipsis overflow-hidden">
              carry.allTheThings() with the sleek, streamlined Sly Pack that
              melds uncompromising style with unequaled laptop and tablet
              protection.
            </p>
          </div>

          <div className="flex flex-row justify-between">
            {/* Price */}
            <p className="mb-7 text-xl font-semibold text-lime-950">$29.99</p>
            {/* Button */}
            <button className="w-full h-8 px-5 border-x border-y border-emerald-950 rounded-md sm:w-36 hover:bg-emerald-950 hover:text-white">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Product;
