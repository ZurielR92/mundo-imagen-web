'use client'
import { FC, ReactNode } from 'react';
import { DataProvider, UIProvider } from '.';


interface Props {
    children: ReactNode
}

const ContextsProvider:FC<Props> = ({children}) => {
    return (
        <UIProvider>
            <DataProvider>
                {children}
            </DataProvider>
        </UIProvider>
    )
}



export default ContextsProvider