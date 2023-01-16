import React from 'react'

const ProductsItem = ({ data, addToCart }) => {
    let{id, name, price, input} = data

    return (
        <div className='font-Papyrus flex justify-between py-2 border-b border-button '>
            <h4 className=''>{name}</h4>
            <h4 className=''>{input}</h4>
            <h5 className=''>${price}</h5>
            <button className='p-1 shadow-inner rounded-lg border border-button focus:text-white focus:bg-logo' onClick={() => addToCart(id)}> añadir</button>
        </div>
    )
}

export default ProductsItem
