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
   vendor: '3136509196'
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
            break;
         case '3':
            dispatch({type:'vendor - Set Vendor', payload: '3176493432'})
            break;
         case '4':
            dispatch({type:'vendor - Set Vendor', payload: '3154886256'})
            break;
         case '5':
            dispatch({type:'vendor - Set Vendor', payload: '3113172224'})
            break;
         case '6':
            dispatch({type:'vendor - Set Vendor', payload: '3108305458'})
            break;
         case '7':
            dispatch({type:'vendor - Set Vendor', payload: '3117613737'})
            break;
         case '8':
            dispatch({type:'vendor - Set Vendor', payload: '3173708232'})
            break;
         default:
            break;
      }
   }

   useEffect(()=>{
      setVendor();
   },[]);

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