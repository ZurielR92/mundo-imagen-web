import { DataState } from "./DataProvider"

type DataActionTipe =
   | { type: 'Cart - Add Product', payload: string }
   | { type: 'Cart - Remove Product', payload: number }
   | { type: 'vendor - Set Vendor', payload: string}

export const dataReducer = (state: DataState, action: DataActionTipe): DataState => {

   switch (action.type) {
      case 'Cart - Add Product':
         return {
            ...state,
            products: [...state.products, action.payload]
         }
      case 'Cart - Remove Product':
         return {
            ...state,
            products: state.products.filter((product, id) => action.payload != id)
         }
      case 'vendor - Set Vendor':
         return {
            ...state,
            vendor: action.payload
         }

      default:
         return state
   }

}