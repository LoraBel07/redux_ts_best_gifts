import { createContext, ReactNode, useContext } from "react";

type ShoppingCartProviderProps = {
	children: ReactNode
}
type ShoppingCartContext = {
	
}

const ShoppingCartContext = createContext()

export function useShoppingCart() {
	return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
	return <ShoppingCartContext.Provider value={{}}>
		{children}
		</ShoppingCartContext.Provider>
}