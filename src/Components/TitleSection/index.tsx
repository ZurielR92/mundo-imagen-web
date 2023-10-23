import { FC } from 'react'

//Importacion de estilos
import styles from './TitleSection.module.scss'

//Propiedades que recibe el componente
interface Props {
    title: string
    subtitle: string
}


export const TitleSection:FC<Props> = ({ title, subtitle }) => {
    return (
        <div className={ styles.titlesection }>

            <span className={ styles.subtitle }>{ subtitle }</span>
            <h1 className={ styles.title }>{ title }</h1>

        </div>
    )

}