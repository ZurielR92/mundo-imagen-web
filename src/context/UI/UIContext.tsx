'use client'

import { createContext } from 'react'


interface ContextProps {
   isShowServices: boolean
   isShowMenu: boolean
   isShowCart: boolean

   //Methods
   showMenu: () => void
   hideMenu: () => void
   showServices: () => void
   hideServices: () => void
   toggleCart: () => void
}


const UIContext = createContext( {} as ContextProps )

export default UIContext