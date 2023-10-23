'use client'

import { FC, ReactNode, useReducer } from 'react'
import { uiReducer } from './uiReducer'
import UIContext from './UIContext'

interface Props {
    children: ReactNode
}

export interface UIState {
   isShowMenu: boolean
   isShowServices: boolean
   isShowCart: boolean
}

const UI_INITIAL_STATE: UIState = {
   isShowMenu: false,
   isShowServices: false,
   isShowCart: false
}
const UIProvider:FC<Props> = ( { children } ) => {

    const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE)

    const toggleCart = () => {
        dispatch({ type: 'UI - Toggle Cart' })
    }

    const showMenu = () => {
        dispatch({ type: 'UI - Show Menu' })
    }
    const hideMenu = () => {
        dispatch({ type: 'UI - Hide Menu' })
    }
   const showServices = () => {
      dispatch({ type: 'UI - Show Services' })
   }
   const hideServices = () => {
      dispatch({ type: 'UI - Hide Services' })
   }

   return (
      <UIContext.Provider value={{
         ...state,
         //Methods
         toggleCart,
         showMenu,
         hideMenu,
         showServices,
         hideServices
      }}>
         { children }
      </UIContext.Provider>
   )
}

export default UIProvider