import { FC, ReactNode } from 'react'

//Importacion de estilos
import styles from './FlipCard.module.scss'

//Propiedades que recibe el componente
interface Props {
    children: ReactNode
    className?: string
}


export const FlipCard:FC<Props> = ({ children, className }) => {
    return (
        <div className={ `${ styles.card } ${ className }` }>
            { children }
        </div>
    )

}