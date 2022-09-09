import React from "react";
import CardItem from "./CardItem";
import { useSelector, useDispatch } from "react-redux";
// import { clearCart } from "../features/cart/cartSlice";
import { openModal } from "../features/cart/modal/modalSlice";
import { openAddModal } from "../features/addModal/addModalSlice";


const CardContainer = () => {
  const dispatch = useDispatch();
  const { cartItems, total, amount } = useSelector((store) => store.cart);
  // const {cartItems, total, amount} = useSelector((store) => store.addItem)

  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2> your bag</h2>
          <h4 className="empty-cart"> is currently empty.</h4>
        </header>
      </section>
    );
  }

  return (
    <section className="cart">
      <header>
        <h2>your bag</h2>
      </header>
      <button
        // type="button"
        className="btn confirm-btn"
        onClick={()=>dispatch(openAddModal())}
      >
        Add Item
      </button>
      <div>
        {cartItems.map((item) => {
          return <CardItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        {/* <div className="cart-total">
          <h4>
            total <span>${total.toFixed(2)}</span>
          </h4>
        </div> */}
        <button className="btn clear-btn" onClick={() => dispatch(openModal())}>
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CardContainer;
