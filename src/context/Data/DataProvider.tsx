'use client'
import { FC, ReactNode, useReducer } from 'react'
import DataContext from './DataContext'
import { dataReducer } from '..'

interface Props {
    children: ReactNode
}

export interface DataState {
   products: string[]
}

const DATA_INITIAL_STATE: DataState = {
   products: [],
}

const DataProvider:FC<Props> = ( { children } ) => {

   const [state, dispatch] = useReducer(dataReducer, DATA_INITIAL_STATE)

    const handleRemoveProduct = ( id: number ) => {
        dispatch({ type:'Cart - Remove Product', payload:id })
    }

    const handleAddProduct = ( product:string ) => {
        dispatch({ type:'Cart - Add Product', payload:product })
    }

   return (
      <DataContext.Provider value={{
         ...state,

         //Methods
         handleAddProduct,
         handleRemoveProduct
      }}>
         { children }
      </DataContext.Provider>
   )
}   

export default DataProvider