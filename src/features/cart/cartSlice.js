import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import cartItems from '../../cartItems'

const url = `https://course-api.com/react-useReducer-cart-project`;

const initialState = {
  cartItems: [
    {
      id: "",
      title: "Samsung Galaxy S8",
      price: "399.99",
      img: "https://dl.airtable.com/.attachments/64b266ad865098befbda3c3577a773c9/24497852/yedjpkwxljtb75t3tezl.png",
      amount: 1,
    },
    {
      id: "recB6qcHPxb62YJ75",
      title: "google pixel",
      price: "499.99",
      img: "https://dl.airtable.com/.attachments/91c88ae8c1580e2b762ecb3f73ed1eed/a633139a/phone-1_gvesln.png",
      amount: 1,
    },
    {
      id: "recdRxBsE14Rr2VuJ",
      title: "Xiaomi Redmi Note 2",
      price: "699.99",
      img: "https://dl.airtable.com/.attachments/bae9208dc34f35128749ecda5b999e84/337c285d/phone-3_h2s6fo.png",
      amount: 1,
    },
    {
      id: "recwTo160XST3PIoW",
      title: "Samsung Galaxy S7",
      price: "599.99 ",
      img: "https://dl.airtable.com/.attachments/91ee456448cef47deec553a2ea3fa8ad/b08bec68/phone-2_ohtt5s.png",
      amount: 1,
    },
  ],
  amount: 4,
  total: 0,
  isLoading: false,
};

export const getCartItems = createAsyncThunk("cart/getCartItems", () => {
  return fetch(url)
    .then((resp) => resp.json())
    .catch((err) => console.log(err));
});

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
      // return { cartItems:[]};
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increase: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount + 1;
    },
    decrease: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount - 1;
    },
    calculateTotal: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
    addToStore: (state = initialState, action) => {
    console.log(action.payload)
      return{
        cartItems:[...state.cartItems, action.payload]
      }

    }
  },
  // extraReducers:{
  //     [getCartItems.pending]: (state)=>{
  //         state.isLoading= true
  //     },
  //     [getCartItems.fulfilled]: (state, action)=>{
  //         state.isLoading= false
  //         state.cartItems= action.payload

  //     },
  //     [getCartItems.rejected]: (state)=>{
  //         state.isLoading= false
  //     }
  // }
});
// console.log(cartSlice);

export const {
  clearCart,
  removeItem,
  increase,
  decrease,
  calculateTotal,
  addToStore,
} = cartSlice.actions;
export default cartSlice.reducer;
