import {useRef, useEffect} from 'react';
import {useCart} from '@shopify/hydrogen';

export default function PageBuilderProvider({children}) {
  const ref = useRef(null);
  const {linesAdd} = useCart();

  useEffect(() => {
    const addToCart = async (event) => {
      event.preventDefault();
      event.stopImmediatePropagation();

      const formData = Object.fromEntries(new FormData(event.target));
      const {quantity: quantity, id: productId} = formData;

      linesAdd({
        merchandiseId: `gid://shopify/ProductVariant/${productId}`,
        quantity: Number(quantity) || 1,
      });
    };

    const element = ref.current;
    element.addEventListener('submit', addToCart);

    const event = new Event('pagebuilder:load', {
      bubbles: true,
      cancelable: true,
    });
    element.dispatchEvent(event);

    return () => {
      element.removeEventListener('submit', addToCart);
    };
  }, [linesAdd]);

  return <div ref={ref}>{children}</div>;
}
