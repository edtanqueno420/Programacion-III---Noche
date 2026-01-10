import { createContext } from 'react';


/** Tipo del producto */
export interface CartItem {
  id: number;
  name: string;
}


/** Tipo del contexto */
export interface CartContextType {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: number) => void;
}


/** Contexto tipado */
export const CartContext = createContext<CartContextType>({
  items: [],
  addItem: () => {},
  removeItem: () => {}
});
