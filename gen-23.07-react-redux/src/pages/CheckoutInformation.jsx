import Header from "../components/Header";
import Footer from "../components/Footer";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function ProductCatalogue() {
  // Form Validation
  const schema = yup.object().shape({
    name: yup.string().required("Full Name is required"),
    phone: yup.number().typeError("Phone Number is required"),
    city: yup.string().required("City is required"),
    payment: yup.string().required("Payment Method is required"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // Order Product
  const { dataCheckout } = useSelector((state) => state.checkout);
  console.log(dataCheckout);

  // Send Checkout Data to JSON API
  const navigate = useNavigate();
  const onSubmitForm = async (data) => {
    console.log(data);

    const payload = {
      custtomerName: data.name,
      custtomerphone: data.phone,
      customerCity: data.city,
      customerPayment: data.payment,
      productTitle: dataCheckout.title,
      productTotalPrice: dataCheckout.price * dataCheckout.qty,
      productQty: dataCheckout.qty,
    };

    axios
      .post("http://localhost:3000/orders", payload)
      .then(() => {
        console.log("Successfully checkout");
        navigate("/checkout-complete");
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Header />
      <div className="container min-w-full mx-0">
        {/* Second Header */}
        <div className="flex items-center p-4 border-b-2 border-gray-100">
          <div className="ml-1 text-xl font-semibold">
            Checkout: Your Information
          </div>
        </div>

        {/* Shipping Form */}
        <div className="relative mx-auto w-full bg-white">
          <div className="grid min-h-screen grid-cols-9">
            <div className="col-span-full lg:col-span-5">
              <div className="mt-8 p-5 mx-auto w-full max-w-lg rounded-lg border-2 border-gray-100">
                <form
                  action=""
                  className="flex flex-col space-y-4"
                  onSubmit={handleSubmit(onSubmitForm)}
                >
                  {/* Full Name */}
                  <div>
                    <input
                      type="name"
                      id="name"
                      name="name"
                      {...register("name")}
                      placeholder="Full Name"
                      className="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm"
                    />
                    <p className="error text-sm text-red-500 ml-4">
                      {errors.name?.message}
                    </p>
                  </div>

                  {/* Phone Number */}
                  <div className="relative">
                    <input
                      type="text"
                      id="phone-number"
                      name="phone-number"
                      {...register("phone")}
                      placeholder="Phone Number"
                      className="block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 pr-10 text-sm"
                    />
                    <p className="error text-sm text-red-500 ml-4">
                      {errors.phone?.message}
                    </p>
                  </div>

                  {/* City */}
                  <div>
                    <div className="flex flex-wrap">
                      <div className="my-1">
                        <select
                          name="month"
                          {...register("city")}
                          id="month"
                          className="cursor-pointer rounded border-gray-300 bg-gray-50 py-3 px-2 text-sm"
                        >
                          <option value="">City</option>
                          <option value="jakarta">Jakarta</option>
                          <option value="bandung">Bandung</option>
                          <option value="surabaya">Surabaya</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <p className="error text-sm text-red-500 ml-3">
                        {errors.city?.message}
                      </p>
                    </div>
                  </div>

                  {/* Payment Method */}
                  <div>
                    <p>Payment Method</p>
                    <div className="flex rounded-lg border-2 border-gray-100 py-3 pl-3">
                      <div className="flex items-center mr-4">
                        <input
                          id="cash-on-delivery"
                          type="radio"
                          {...register("payment")}
                          value="cash-on-delivery"
                          className="w-4 h-4"
                        />
                        <label
                          htmlFor="cash-on-delivery"
                          className="ml-2 text-sm font-medium"
                        >
                          Cash on Delivery
                        </label>
                      </div>
                      <div className="flex items-center mr-4">
                        <input
                          id="bank-transfer"
                          type="radio"
                          {...register("payment")}
                          value="bank-transfer"
                          className="w-4 h-4"
                        />
                        <label
                          htmlFor="bank-transfer"
                          className="ml-2 text-sm font-medium"
                        >
                          Bank Transfer
                        </label>
                      </div>
                    </div>
                    <div>
                      <p className="error text-sm text-red-500 ml-3">
                        {errors.payment?.message}
                      </p>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded bg-emerald-950 py-2 px-4 text-white font-semibold"
                  >
                    Place Order
                  </button>
                </form>
              </div>
            </div>

            {/* Order Summary */}
            <div className="relative col-span-full flex flex-col lg:col-span-3">
              <h2 className="sr-only">Order summary</h2>
              <div className="relative rounded-lg border-2 border-gray-100 mt-8 p-5">
                <ul className="space-y-5">
                  <li className="flex justify-between">
                    <div className="inline-flex">
                      <img
                        src={dataCheckout.image[0]}
                        alt="Product Image"
                        className="max-h-28"
                      />
                      <div className="ml-3">
                        <p className="text-base font-semibold">
                          {dataCheckout.title}
                        </p>
                        <p className="text-sm text-gray-600 font-semibold">
                          Quantity: {dataCheckout.qty}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm font-semibold">
                      ${dataCheckout.price}
                    </p>
                  </li>
                </ul>
                <div className="my-5 h-0.5 w-full bg-white bg-opacity-30"></div>
                <div className="space-y-2">
                  <p className="flex justify-between text-lg font-bold">
                    <span>Total price:</span>
                    <span>${dataCheckout.qty * dataCheckout.price}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductCatalogue;
