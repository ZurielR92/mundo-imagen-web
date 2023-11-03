'use client'
import { FC, ReactNode, useReducer, useEffect } from 'react'
import DataContext from './DataContext'
import { dataReducer } from '..'
import { useSearchParams } from 'next/navigation'

interface Props {
    children: ReactNode
}

export interface DataState {
   products: string[]
   vendor: string
}

const DATA_INITIAL_STATE: DataState = {
   products: [],
   vendor: '3017497431'
}

const DataProvider:FC<Props> = ( { children } ) => {

   const [state, dispatch] = useReducer(dataReducer, DATA_INITIAL_STATE)
   const searchParams = useSearchParams();

    const handleRemoveProduct = ( id: number ) => {
        dispatch({ type:'Cart - Remove Product', payload:id })
    }

    const handleAddProduct = ( product:string ) => {
        dispatch({ type:'Cart - Add Product', payload:product })
    }

   const setVendor = () => {
      const vendor = searchParams.get('v');
      switch (vendor) {
         case undefined:
            dispatch({type: 'vendor - Set Vendor', payload: '3017497431'})
            break;
         case '1':
            dispatch({type:'vendor - Set Vendor', payload: '3136509196'})
            break;
         case '2':
            dispatch({type:'vendor - Set Vendor', payload: '3138497451'})
         default:
            break;
      }
   }

   useEffect(()=>{
      setVendor();
   },[])

   return (
      <DataContext.Provider value={{
         ...state,

         //Methods
         setVendor,
         handleAddProduct,
         handleRemoveProduct
      }}>
         { children }
      </DataContext.Provider>
   )
}   

export default DataProvider