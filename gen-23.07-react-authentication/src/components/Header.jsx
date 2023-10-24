import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { resetAuthData } from "../store/reducers/authSlice";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const dataCheckout = useSelector((state) => state.cart);
  const user = useSelector((state) => state.auth.user);

  const [showDropdown, setShowDropdown] = useState(false);

  const isLoggedIn = useSelector((state) => state.auth.token !== "");

  const handleLogout = () => {
    dispatch(resetAuthData());
    navigate("/login");
  };

  return (
    <>
      <div className="flex items-center justify-between p-3 border-b-2 border-gray-100 mx-0">
        {/* Menu Burger Icon*/}
        <div className="h-7 w-7">
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
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>

        <Link to={"/"} className="text-2xl">
          Swag Labs
        </Link>

        <div className="flex items-center justify-end">
          {/* Cart */}
          <div>
            <Link to={"/checkout-information"} className="h-7 w-7">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
              </svg>

              {/* Display Cart Item Quantity */}
              {dataCheckout.totalQuantity > 0 ? (
                <span className="absolute top-2 right-2 w-[18px] h-[18px] bg-green-500 text-white text-xs rounded-full flex items-center justify-center">
                  {dataCheckout.totalQuantity}
                </span>
              ) : (
                <div></div>
              )}
            </Link>
          </div>

          {/* Profile */}
          {isLoggedIn && (
            <div
              className="ml-1 cursor-pointer"
              onClick={() => setShowDropdown(!showDropdown)}
            >
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
                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              {showDropdown && (
                <div className="rounded-lg absolute bg-white border-2 border-gray-200 w-20 mt-1 right-3">
                  <div className="flex justify-center p-1">{user.username}</div>
                  <div className="border-b-2 border-gray-200 mx-0"></div>
                  <div className="m-1 bg-red-500 rounded-lg p-1 text-white flex justify-center" onClick={handleLogout}>Logout</div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Header;
