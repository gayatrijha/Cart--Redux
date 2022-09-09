import Navbar from "./components/Navbar";
import CardContainer from "./components/CardContainer";
import {useDispatch, useSelector} from 'react-redux'
import { calculateTotal, getCartItems } from "./features/cart/cartSlice";
import { useEffect } from "react";
import Modal from "./components/Modal";
import AddModal from "./components/AddModal";


function App() {
  const {cartItems, isLoading} = useSelector((store)=>store.cart);
  const {isOpen} = useSelector((store)=>store.modal);
  const {isAddOpen} =useSelector((store)=>store.addmodal)

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(calculateTotal());
  }, [cartItems]);
 
  useEffect(()=>{
    dispatch(getCartItems())
  },[]);

  if(isLoading){
    return  <div className="loading"> <h1>Loading...</h1></div>
  }


  return (
    <>
      {isOpen &&<Modal/>}
      {isAddOpen && <AddModal/>}
      <Navbar/>
      <CardContainer/>
    </>
  )
  
}
export default App;
