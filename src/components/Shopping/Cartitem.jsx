import React from 'react'
import { RiDeleteBin4Fill, RiDeleteBack2Fill } from 'react-icons/ri'


const Cartitem = ({ data, delFromCart }) => {
    // let {id, name, price, input, quantity} = data
    let {id, name, price, input, quantity} = data

    return (
        <div className='py-5 flex flex-col '>
            <div className='flex flex-row justify-between border-b border-button py-2'>   
                <h4 className=''>{name}</h4>
                <h4 className=' divide-y-2'>${price}</h4>
            </div>  
            <div className='flex flex-row justify-between border-b border-button py-2'>
                <h4 className=''>Cantidad</h4>
                <p>{quantity}</p>
            </div> 
            <div className='flex flex-row justify-between border-b border-button py-2'>
                <h4 className=''>total producto</h4>
                <p>${price * quantity}</p>
            </div>    
                <h4 className=''>{input}</h4>
            <div className='flex flex-row py-2 justify-between'>   
                <button className=''
                    alt='eliminar un producto'
                    onClick={() => delFromCart(id)}><RiDeleteBack2Fill />
                    <p className='text-xs text-neutral-500'>eliminar un producto</p>
                </button>
                <br></br>
                <button className=''
                    alt='eliminar todo el producto'
                    onClick={() => delFromCart(id, true)}><RiDeleteBin4Fill />
                    <p className='text-xs text-neutral-500 '>eliminar todo el producto</p>
                </button>
            </div> 
        </div>
    )
}

export default Cartitem
