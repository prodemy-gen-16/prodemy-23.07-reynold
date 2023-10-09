import BackpackImage from "../img/backpack.jpg";
import BikeLightImage from "../img/bike-light.jpg";
import BlackShirtImage from "../img/black-shirt.jpg";
import JacketImage from "../img/jacket.jpg";
import SweaterImage from "../img/sweater.jpg";
import WhiteShirtImage from "../img/white-shirt.jpg";

function Product(props) {
  const {
    title = "{Product Name}",
    description = "{Description}",
    price = "{Price}",
    image
  } = props;
  return (
    <a href="#">
      <div className="flex flex-col rounded-lg border-2 border-gray-100 sm:flex-row">
        {/* Image */}
        <img
          className="lg:w-[160px] object-cover sm:w-2/5 sm:rounded-tl-lg sm:rounded-bl-lg"
          src={image}
          alt="Product"
        />

        <div className="flex flex-col justify-between p-6">
          <div>
            {/* Title */}
            <h5 className="mb-2 text-xl font-medium text-lime-950 hover:text-emerald-500">
              {title}
            </h5>
            {/* Description */}
            <p className="text-ellipsis overflow-hidden">{description}</p>
          </div>

          <div className="flex flex-row justify-between">
            {/* Price */}
            <p className="text-xl font-semibold text-lime-950">{price}</p>
            {/* Button */}
            <button className="w-36 h-8 px-5 border-x border-y border-emerald-950 rounded-md hover:bg-emerald-950 hover:text-white">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </a>
  );
}

function Content() {
  return (
    <section
      id="Projects"
      className="w-3/4 mx-auto grid grid-cols-1 lg:grid-cols-2 justify-items-center justify-center gap-y-5 gap-x-14 mt-10 mb-10"
    >
      <Product
        title={"Backpack"}
        description={
          "Carry all the things with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection."
        }
        price={"$29.99"}
        image={BackpackImage}
      ></Product>

      <Product
        title={"Bike Light"}
        description={
          "A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included."
        }
        price={"$9.99"}
        image={BikeLightImage}
      ></Product>

      <Product
        title={"Bolt T-Shirt"}
        description={
          "Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt."
        }
        price={"$15.99"}
        image={BlackShirtImage}
      ></Product>

      <Product
        title={"Fleece Jacket"}
        description={
          "It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office."
        }
        price={"$49.99"}
        image={JacketImage}
      ></Product>

      <Product
        title={"Onesie"}
        description={
          "Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel."
        }
        price={"$7.99"}
        image={WhiteShirtImage}
      ></Product>

      <Product
        title={"T-Shirt (Red)"}
        description={
          "This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton."
        }
        price={"$15.99"}
        image={SweaterImage}
      ></Product>
    </section>
  );
}

export default Content;
