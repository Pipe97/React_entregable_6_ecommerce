import { useSelector } from "react-redux";
import CartElement from "../components/cart/CartElement";
import usePurchase from "../hooks/usePurchase";

const CartPage = () => {
  const cart = useSelector((states) => states.cart);

  const totalPrice = cart.reduce((acc, cv) => {
    const subtotal = cv.quantity * cv.product.price;
    return acc + subtotal;
  }, 0);

  const { makePurchase } = usePurchase();

  const handlePurchase = () => {
    makePurchase();
  };

  return (
    <section>
      <h2>Cart</h2>
      <div>
        {cart.map((prod) => (
          <CartElement key={prod.id} prod={prod} />
        ))}
      </div>
      <footer>
        <div>
          <span>total: </span>
          <span>{totalPrice}</span>
        </div>
        <button onClick={handlePurchase}>Purchase this cart</button>
      </footer>
    </section>
  );
};

export default CartPage;
