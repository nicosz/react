import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartContextProvider({ children }) {

    const [cart, setCart] = useState([])

    function addToCart(producto, count) {
        let itemInAlreadyTocart = cart.find(itemIncart => itemIncart.id === producto.id)

        if (itemInAlreadyTocart) {
            itemInAlreadyTocart.count += count
            setCart([...cart])
        } else {
            setCart([...cart, { ...producto, count }])
        }
    }

    function clear() {
        setCart([])
    }

    function removeItem(id) {
        setCart(cart.filter((item) => item.id !== id))
    }

    function substract(id) {
        let ItemRequested = cart.find(itemIncart => itemIncart.id === id)

        if (ItemRequested.count > 1) {
            ItemRequested.count--
            setCart([...cart])
        } else {
            removeItem(id)
        }

    }

    function totalCount() {
        return cart.reduce((acc, actual) => acc + actual.count, 0)
    }

    function total() {
        return cart.reduce((prev, curr) => prev + curr.count * curr.price, 0)
    }

    return (
        <CartContext.Provider value={{ addToCart, clear, removeItem, substract, total, totalCount, cart,  }}>
            {children}
        </CartContext.Provider>
    )

}