import { useState } from "react";

function ShippingDetails() {
  // const [name, setName] = useState("");
  // const [phoneNumber, setPhoneNumber] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    payment: "",
  })

  return (
    <div className="container min-w-full mx-0">
      {/* Second Header */}
      <div className="flex items-center p-4 border-b-2 border-gray-100">
        <div className="ml-1 text-xl font-semibold">
          Checkout: Your Information
        </div>
      </div>

      {/* Shipping Form */}
      <div className="relative mx-auto w-full bg-white">
        <div className="grid min-h-screen grid-cols-10">
          <div className="col-span-full lg:col-span-6">
            <div className="mt-8 p-5 mx-auto w-full max-w-lg rounded-lg border-2 border-gray-100">
              <form action="" className="flex flex-col space-y-4">
                {/* Full Name */}
                <div>
                  <input
                    type="name"
                    id="name"
                    name="name"
                    value={formData.name}
                    placeholder="Full Name"
                    className="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm shadow-sm outline-none transition"
                  />
                </div>

                {/* Phone Number */}
                <div className="relative">
                  <input
                    type="text"
                    id="phone-number"
                    name="phone-number"
                    value={formData.phone}
                    placeholder="Phone Number"
                    className="block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 pr-10 text-sm shadow-sm outline-none transition"
                  />
                  <img
                    src="/images/uQUFIfCYVYcLK0qVJF5Yw.png"
                    alt=""
                    className="absolute bottom-3 right-3 max-h-4"
                  />
                </div>

                {/* Address */}
                <div>
                  <p>Address</p>
                  <div className="mr-6 flex flex-wrap">
                    <div className="my-1">
                      <select
                        name="month"
                        value={formData.city}
                        id="month"
                        className="cursor-pointer rounded border-gray-300 bg-gray-50 py-3 px-2 text-sm shadow-sm outline-none transition"
                      >
                        <option value="">City</option>
                        <option value="">Jakarta</option>
                        <option value="">Bandung</option>
                        <option value="">Surabaya</option>
                      </select>
                    </div>
                    {/* <div className="my-1 ml-3 mr-6">
                      <select
                        name="year"
                        id="year"
                        className="cursor-pointer rounded border-gray-300 bg-gray-50 py-3 px-2 text-sm shadow-sm outline-none transition"
                      >
                        <option value="">Year</option>
                      </select>
                    </div>
                    <div className="relative my-1">
                      <label htmlFor="security-code" className="sr-only">
                        Security code
                      </label>
                      <input
                        type="text"
                        id="security-code"
                        name="security-code"
                        className="block w-36 rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition"
                      />
                    </div> */}
                  </div>
                </div>

                {/* Payment Method */}
                <div>
                  <p>Payment Method</p>
                  <div className="flex rounded-lg border-2 border-gray-100 py-3 pl-3">
                    <div className="flex items-center mr-4">
                      <input
                        id="inline-radio"
                        type="radio"
                        value={formData.payment}
                        name="inline-radio-group"
                        className="w-4 h-4"
                      />
                      <label
                        htmlFor="inline-radio"
                        className="ml-2 text-sm font-medium"
                      >
                        Cash on Delivery
                      </label>
                    </div>
                    <div className="flex items-center mr-4">
                      <input
                        id="inline-2-radio"
                        type="radio"
                        value={formData.payment}
                        name="inline-radio-group"
                        className="w-4 h-4"
                      />
                      <label
                        htmlFor="inline-2-radio"
                        className="ml-2 text-sm font-medium"
                      >
                        Bank Transfer
                      </label>
                    </div>
                  </div>
                </div>
              </form>

              <button
                type="submit"
                className="mt-4 w-full rounded bg-emerald-950 py-2 px-4 text-white font-semibold"
              >
                Place Order
              </button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="relative col-span-full flex flex-col py-6 pl-8 pr-4 sm:py-12 lg:col-span-4 lg:py-24">
            <h2 className="sr-only">Order summary</h2>
            <div className="relative">
              <ul className="space-y-5">
                <li className="flex justify-between">
                  <div className="inline-flex">
                    <img src="" alt="Product Image" className="max-h-16" />
                    <div className="ml-3">
                      <p className="text-base font-semibold">Product Name</p>
                    </div>
                  </div>
                  <p className="text-sm font-semibold">$260.00</p>
                </li>
              </ul>
              <div className="my-5 h-0.5 w-full bg-white bg-opacity-30"></div>
              <div className="space-y-2">
                <p className="flex justify-between text-lg font-bold">
                  <span>Total price:</span>
                  <span>$510.00</span>
                </p>
                <p className="flex justify-between text-sm font-medium">
                  <span>Vat: 10%</span>
                  <span>$55.00</span>
                </p>
              </div>
            </div>
            <div className="relative mt-10">
              <h3 className="mb-5 text-lg font-bold">Support</h3>
              <p className="text-sm font-semibold">
                +01 653 235 211{" "}
                <span className="font-light">(International)</span>
              </p>
              <p className="mt-1 text-sm font-semibold">
                support@nanohair.com <span className="font-light">(Email)</span>
              </p>
              <p className="mt-2 text-xs font-medium">
                Call us now htmlFor payment related issues
              </p>
            </div>
            <div className="relative mt-10 flex">
              <p className="flex flex-col">
                <span className="text-sm font-bold">Money Back Guarantee</span>
                <span className="text-xs font-medium">
                  within 30 days of purchase
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShippingDetails;
