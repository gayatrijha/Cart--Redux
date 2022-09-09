import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { closeAddModal } from "../features/addModal/addModalSlice";
import { addToStore } from "../features/cart/cartSlice";

const AddModal = () => {
  const dispatch = useDispatch();

  const [title, setName] = useState("");
  const [price, setPrice] = useState("");

  // const [price, setPrice] = useState("");

  const handleSubmit= event =>{
    event.preventDefault();
    // console.log(name, price);
    dispatch(addToStore({title,price, amount :1, img:'https://cdn.dribbble.com/users/55871/screenshots/2158022/media/8f2a4a2c9126a9f265fb9e1023b1698a.jpg?compress=1&resize=400x300'}));
    dispatch(closeAddModal());

  }
  const handleChangeName = (text) => {
    setName(text);
  };
  const handleChangePrice = (text) => {
    setPrice(text);
  };
  return (
    <div>
      <aside className="modal-container">
        <div className="modal">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="title"
              name="title"
              className="input"
              placeholder="Item name"
              value={title}
              onChange={e=>handleChangeName(e.target.value)}
            />
            <input
              type="text"
              id="price"
              name="price"
              className="input"
              placeholder="Item price"
              value={price}
              onChange={e=>handleChangePrice(e.target.value)}

            />
         

          <div className="btn-container">
            <button
              type="submit"
              className="btn confirm-btn"
              // onClick={() => {
              //   dispatch(addToStore());
              //   dispatch(closeAddModal());
              // }}
            >
              Add
            </button>
            <button
              type="button"
              className="btn clear-btn"
              onClick={() => {
                dispatch(closeAddModal());
              }}
            >
              cancel
            </button>
          </div>
          </form>
        </div>
      </aside>
    </div>
  );
};

export default AddModal;
