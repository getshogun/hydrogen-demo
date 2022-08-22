import { Link, useCart } from "@shopify/hydrogen";

export default function Header({ shop }) {
  return (
    <header class="p-3 text-bg-dark sticky-top">
      <div class="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a
            href="/"
            className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
          >
            {shop.name}
          </a>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <Link to="/" className="nav-link px-2 text-white">
                Home
              </Link>
            </li>
          </ul>

          <div className="text-end">
            <CartIcon />
          </div>
        </div>
      </div>
    </header>
  );
}

function CartIcon() {
  const { totalQuantity, checkoutUrl } = useCart();

  if (totalQuantity < 1) {
    return null;
  }
  return (
    <Link to={checkoutUrl}>
      <div className="position-relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="#ffffff"
          width="30"
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
