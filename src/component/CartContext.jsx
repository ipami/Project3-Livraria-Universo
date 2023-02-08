import { createContext } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) =>{
    const [cart, setCart] ={}
    const addToCart = product =>{
        setCart()
    }
    return(
        <CartContext.Provider value={{opa:1}}>
            {children}
        </CartContext.Provider>
    )
}