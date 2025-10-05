import { Product } from '@/app/lib/type'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CartItem = Product & { quantity: number }

interface CartState {
  items: CartItem[]
  totalPrice: number
}

const initialState: CartState = {
  items: [],
  totalPrice: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existing = state.items.find((item) => item.id === action.payload.id)
      const quantityToAdd = action.payload.quantity || 1
      if (existing) {
        existing.quantity += quantityToAdd
      } else {
        state.items.push({ ...action.payload, quantity: quantityToAdd })
      }

      state.totalPrice = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
    },

    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
      state.totalPrice = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
    },
    clearCart: (state) => {
      state.items = []
      state.totalPrice = 0
    },
  },
})

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions
export default cartSlice.reducer
