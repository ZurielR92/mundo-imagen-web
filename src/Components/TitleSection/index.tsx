import { FC, ReactNode } from 'react'

//Importacion de estilos
import styles from './TitleSection.module.scss'

//Propiedades que recibe el componente
interface Props {
    title: string | ReactNode
    subtitle: string
    mode?: 'default' | 'white'
}


export const TitleSection:FC<Props> = ({ title, subtitle, mode = 'default' }) => {
    return (
        <div className={ `${styles.titlesection} ${ mode === 'white' ? styles.white : '' }` }>

            <span className={ styles.subtitle }>{ subtitle }</span>
            <h1 className={ styles.title }>{ title }</h1>

        </div>
    )

}