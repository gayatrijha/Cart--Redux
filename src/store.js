import {configureStore} from '@reduxjs/toolkit'
import cartReducer from './features/cart/cartSlice'
import modalReducer from './features/cart/modal/modalSlice';
import modalAddReducer from './features/addModal/addModalSlice'

export  const store= configureStore({
    reducer:{
        cart:cartReducer,
        modal:modalReducer,
        addmodal:modalAddReducer,

    }

});
