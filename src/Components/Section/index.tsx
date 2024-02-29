import { CSSProperties, FC, ReactNode } from 'react'

//Importacion de estilos
import styles from './Section.module.scss'

//Propiedades que recibe el componente
interface Props {
    children?: ReactNode
    colorClipTop?: 'primary' | 'secondary' | 'resalt' | 'dark' | 'light' | null
    colorClipBottom?: 'primary' | 'secondary' | 'resalt' | 'dark' | 'light' | null
    invert?: boolean
    style?: CSSProperties
}


export const Section:FC<Props> = ({ style, children, colorClipBottom=null, colorClipTop=null, invert }) => {

    const getColor = ( color: string | null ) => {
        switch (color) {
            case 'primary':
                return styles.primary
            case 'secondary':
                return styles.secondary
            case 'resalt':
                return styles.resalt
            case 'dark':
                return styles.dark
            case 'light':
                return styles.light
            default:
                return styles.primary
        }
    }

    return (
        <section style={ style } className={ styles.section }>
            { children } 
        </section>
    )

}