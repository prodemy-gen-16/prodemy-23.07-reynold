// import {ReactComponent  as MenuBurger} from '../assets/svg/menu-burger.svg';

function Header() {
  return (
    <div>
      <div className="flex items-center justify-between p-3 border-b-2 border-gray-100">
        {/* Menu Burger Icon*/}
        <div className="h-7 w-7">
          {/* <MenuBurger/> */}
        </div>

        <h1 className="text-2xl">Swag Labs</h1>

        {/* Cart Icon*/}
        <div className="h-7 w-7">

        </div>
      </div>

      <div className="p-4 border-b-2 border-gray-100">
        {/* Back Arrow Icon*/}
        <div className="flex">

          <a
            href="../../gen-23.07-css-advanced/product.html"
            className="ml-1 text-green-900 hover:text-green-500"
          >
            Back to products
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header
