import { removerItem } from "../../store/cartSlice/CartSlice";
import "./cart.css";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const productsCart = useSelector((state) => state.cart.products);

  const dispatch = useDispatch();

  let total = 0;

  const removeFromCart = (item) => {
    dispatch(removerItem(item));
  };
  return (
    <>
      <div className="carts">
       <div className="pro-map">
       {productsCart.map((product) => {
          total = total + product.price;
          return (
            <div className="product-cart container">
              <img src={product.image ? product.image  : product.thumbnail  } alt="product" />
              <div className="product-cart-deatils">
                <p>{product.title}</p>
                <h2>Price : {product.price} $</h2>
              </div>
              <button
                onClick={() => removeFromCart(product.id)}
                className="remove"
              >
                Remove From Cart
              </button>
            </div>
          );
        })}
       </div>

      <div className="total container">
        <h2>Total : {total.toString().slice(0 , 6)}$</h2>
      </div>
      </div>

    </>
  );
};

export default Cart;
