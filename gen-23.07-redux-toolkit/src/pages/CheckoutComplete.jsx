import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function CheckoutComplete() {
  return (
    <>
      <Header />
      <div className="container min-w-full mx-0">
        {/* Second Header */}
        <div className="flex items-center p-4 border-b-2 border-gray-100">
          <div className="ml-1 text-xl font-semibold">Checkout: Complete!</div>
        </div>

        <div className="flex flex-col justify-center items-center my-10">
          {/* Check Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="SpringGreen"
            className="w-28 h-28"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>

          <h1 className="text-2xl">Thank you for your order!</h1>

          <Link to="/" className="mt-5">
            <button className="w-36 h-8 px-5 border-x border-y rounded-md bg-emerald-950 text-white">
              Back Home
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CheckoutComplete;
