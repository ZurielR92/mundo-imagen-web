import { UIState } from "./UIProvider"

type UIActionTipe =
   | { type: 'UI - Show Menu' }
   | { type: 'UI - Hide Menu' }
   | { type: 'UI - Show Services' }
   | { type: 'UI - Hide Services' }
   | { type: 'UI - Toggle Cart' }

export const uiReducer = (state: UIState, action: UIActionTipe): UIState => {

   switch (action.type) {
      case 'UI - Show Menu':
         return {
            ...state,
            isShowMenu: true
         }
      case 'UI - Hide Menu':
         return {
            ...state,
            isShowMenu: false
         }
      case 'UI - Show Services':
         return {
            ...state,
            isShowServices: true
         }
      case 'UI - Hide Services':
         return {
            ...state,
            isShowServices: false
         }
        case 'UI - Toggle Cart':
            return {
                ...state,
               isShowCart: !state.isShowCart
            }

      default:
         return state
   }

}