import { Link, useCart } from "@shopify/hydrogen";

export default function CartIcon() {
  const { totalQuantity, checkoutUrl } = useCart();

  if (totalQuantity < 1) {
    return null;
  }
  return (
    <Link to={checkoutUrl} style={{backgroundColor: '#5e3de8', height: 64, width: 64, position: 'fixed', bottom: 40, right: 40, borderRadius: 50, textAlign: 'center', zIndex: 99999}}>
      <div className="position-relative" style={{marginTop: 10}}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="#ffffff"
          width="40"
        >
          <title>Bag</title>
          <path
            fillRule="evenodd"
            d="M8.125 5a1.875 1.875 0 0 1 3.75 0v.375h-3.75V5Zm-1.25.375V5a3.125 3.125 0 1 1 6.25 0v.375h3.5V15A2.625 2.625 0 0 1 14 17.625H6A2.625 2.625 0 0 1 3.375 15V5.375h3.5ZM4.625 15V6.625h10.75V15c0 .76-.616 1.375-1.375 1.375H6c-.76 0-1.375-.616-1.375-1.375Z"
          />
        </svg>
        <small>
          <span className="position-absolute bottom-0 start-50 badge text-bg-light">
            {totalQuantity}
          </span>
        </small>
      </div>
    </Link>
  );
}
