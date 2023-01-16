import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { useReducer } from 'react'
import { shoppingInitialState, shoppingReducer } from './Shopping/ShoppingReducers'
import ProductsItem from './ProductsItem'
import CartItem from '../components/Shopping/Cartitem'
import { TYPES } from './Shopping/ShoppingAction'
import { FaTrashAlt } from 'react-icons/fa'

const Shopping = () => {
  
  const [state, dispatch] = useReducer(
    shoppingReducer,
    shoppingInitialState,
  );
  const { products, cart } = state;
  
  const addToCart = (id) => {
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
    console.log(id)
  }

  const delFromCart = (id, all = false) => {
    console.log(id, all)
    if (all) {
      dispatch({ type: TYPES.REMOVE_ALL_FROM_CART, payload: id })
    } else {
      dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, payload: id })
    }
  }

  const clearCart = () => {
    dispatch({type: TYPES.CLEAR_CART})
  }



  return (
    <div>
      <Header />
      <div className='p-10'>
        <h1 className=' text-lg font-Papyrus 2xl:text-xl 2xl:px-44'> Lista de Pedidos</h1>
      </div>
      <div className='flex flex-col rounded-lg border border-button p-5 m-5 lg:mx-20 2xl:mx-44'>
        <div className=''>
          <h2 className='border-b border-button font-Papyrus'>Producto</h2>
          {cart.map((item, index) => (
            <CartItem key={index} data={item} delFromCart={delFromCart} />
          ))} 
          
          <button className='pt-2' alt='borrar todos los pedidos' onClick={clearCart}><FaTrashAlt />
            <p className='text-xs text-neutral-500 '>eliminar todos los pedidos</p>
          </button>
        </div>
      </div>
      <button
        className='font-Papyrus m-5 p-3 w-fit shadow-inner rounded-lg border border-button focus:text-white focus:bg-logo lg:mx-20 2xl:mx-44'>Enviar ideas</button>
      <article className='p-5 m-5 shadow-sm lg:mx-14 2xl:mx-44'>
        <h1 className='font-Papyrus py-5'>Nuestros productos</h1>
        {products.map((product) =>
          <ProductsItem key={product.id} data={product} addToCart={addToCart} />)}
        {/* <MoneyboxN2B1 key={product.id} data={product} addToCart={addToCart} />)} */}
      </article>
      <Footer />
    </div>
  )
}

export default Shopping
