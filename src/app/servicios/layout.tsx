import { ReactNode } from 'react'

interface Props {
    children: ReactNode
}

const ServicesLayout = ({children}:Props) => {
    return (
        <>
            {children}
        </>
    )
}

export default ServicesLayout