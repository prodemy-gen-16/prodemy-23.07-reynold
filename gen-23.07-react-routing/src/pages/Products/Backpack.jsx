function Backpack() {
  return (
    <section className="flex flex-col m-10 justify-center items-center sm:items-start sm:flex-row">
      {/* Preview Image */}
      <div className="flex flex-row mb-4 sm:mr-4 sm:flex-col">
        <img
          className="thumbnail thumb-img mr-2 sm:mb-2"
          src="img/backpack.jpg"
          alt=""
          onClick="changeImage('img/backpack.jpg', this)"
        />
        <img
          className="thumbnail thumb-img mr-2 sm:mb-2"
          src="https:/images.asos-media.com/products/chernyj-fakturnyj-ryukzak-asos/8082738-1-black?$n_960w$&wid=952&fit=constrain"
          alt=""
          onClick="changeImage('https:/images.asos-media.com/products/chernyj-fakturnyj-ryukzak-asos/8082738-1-black?$n_960w$&wid=952&fit=constrain', this)"
        />
        <img
          className="thumbnail thumb-img"
          src="https:/i.pinimg.com/originals/1a/20/c5/1a20c5f989549551a09b68e1daad45ef.jpg"
          alt=""
          onClick="changeImage('https:/i.pinimg.com/originals/1a/20/c5/1a20c5f989549551a09b68e1daad45ef.jpg', this)"
        />
      </div>

      <div className="w-3/4 flex flex-col rounded-lg border-2 border-gray-100 sm:flex-row">
        {/* Image */}
        <img
          id="main-image"
          className="lg:max-w-[500px] lg:min-h-[625px] object-cover sm:w-2/5 sm:rounded-tl-lg sm:rounded-bl-lg"
          src="/gen-23.07-javascript-basic/img/backpack.jpg"
          alt=""
        />

        <div className="flex flex-col justify-start p-6">
          <div className="mb-7">
            {/* Title */}
            <h5 className="mb-2 text-xl font-medium text-lime-950">
              Sauce Labs Backpack
            </h5>
            Description
            <p className="text-ellipsis overflow-hidden">
              carry.allTheThings() with the sleek, streamlined Sly Pack that
              melds uncompromising style with unequaled laptop and tablet
              protection.
            </p>
          </div>

          <div>
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

export default Backpack;
