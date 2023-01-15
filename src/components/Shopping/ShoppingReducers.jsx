import { TYPES } from "./ShoppingAction";

export const shoppingInitialState = {
    products: [
        { id: 1, name: 'Alcancía Marrano', price: 30, input: '' },
        { id: 2, name: 'Alcancía Doble Nivel 1', price: 35, input: '' },
        { id: 3, name: 'Alcancía Doble Nivel 2', price: 35, input: '' },
        { id: 4, name: 'Nombres Alacena', price: 10, input: '' },
        { id: 5, name: 'Símbolos', price: 10, input: '' },
        { id: 6, name: 'Memes', price: 10, input: '' },
        { id: 7, name: 'Nombres', price: 10, input: '' },
        { id: 8, name: 'Video juegos', price: 30, input: '' },
    ],
    cart:[]
}

export function shoppingReducer(state, action) {
    switch (action.type) {
        case TYPES.ADD_TO_CART: {
            let newItem = state.products.find(
                (product) => product.id === action.payload);
            console.log(newItem)
            
            // return {
            //     ...state,
            //         cart: [...state.cart, newItem],
            // }
            let iteminCart = state.cart.find(item => item.id === newItem.id);
            
            return iteminCart
                ? {
                    ...state,
                    cart:state.cart.map((item) =>
                        item.id === newItem.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                    ),
                }
                : {
                    ...state,
                    cart: [...state.cart, {...newItem, quantity: 1}],
                }
            
        }
        case TYPES.REMOVE_ONE_FROM_CART: {
            let itemToDelete = state.cart.find((item) => item.id === action.payload);

            return itemToDelete.quantity > 1
                ? {
                    ...state,
                    cart: state.cart.map((item) =>
                        item.id === action.payload
                            ? { ...item, quantity: item.quantity - 1 }
                            : item
                    ),
                }
                : {
                    ...state,
                    cart: state.cart.filter((item) => item.id !== action.payload)
                }
        }
        case TYPES.REMOVE_ALL_FROM_CART: {
            return{
            ...state,
                cart: state.cart.filter((item) => item.id !== action.payload)
            }
        }
        case TYPES.CLEAR_CART:
            return shoppingInitialState;    
        default:
            return state;
    }
}