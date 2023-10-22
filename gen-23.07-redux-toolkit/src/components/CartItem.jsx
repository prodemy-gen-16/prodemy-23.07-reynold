/* eslint-disable react/prop-types */
function CartItem({ data }) {
  return (
    <li className="flex justify-between">
      <div className="inline-flex">
        <img src={data.image[0]} alt="Product Image" className="max-h-28" />
        <div className="ml-3">
          <p className="text-base font-semibold">{data.title}</p>
          <p className="text-sm text-gray-600 font-semibold">
            Quantity: {data.quantity}
          </p>
        </div>
      </div>
      <p className="text-sm font-semibold">${data.price}</p>
    </li>
  );
}

export default CartItem;
