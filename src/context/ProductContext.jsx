import { createContext } from "react";
import products from "../products";

export const ProductContext = createContext();

const ProductContextProvider = ({children}) => {
    const value = {products}
    return(
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductContextProvider;