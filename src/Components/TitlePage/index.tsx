import { FC, ReactNode } from 'react'

//Importacion de estilos
import styles from './TitlePage.module.scss'

//Propiedades que recibe el componente
interface Props {
    title: string
    children?: ReactNode
}


export const TitlePage:FC<Props> = ({ title, children }) => {
    return (
        <section className={ styles.titlepage }>

            <h1>{title}</h1>
            <div className={ styles.breadcumbs }>
                { children } • { title.slice(0,-12) }
            </div>

        </section>
    )

}