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
            {
                invert
                    ? (
                        <>
                            <div style={{ display: colorClipTop ? 'block':'none'  }} className={ `${ styles.clip1 } ${ getColor( colorClipTop ) }` }></div>
                            <div style={{ display: colorClipBottom ? 'block':'none'  }} className={ `${ styles.clip2 } ${ getColor( colorClipBottom ) }` }></div>
                        </>
                    ) : ( 
                        <>
                            <div style={{ display: colorClipTop ? 'block':'none'  }} className={ `${ styles.clip3 } ${ getColor( colorClipTop ) }` }></div>
                            <div style={{ display: colorClipBottom ? 'block':'none'  }} className={ `${ styles.clip4 } ${ getColor( colorClipBottom ) }` }></div>
                        </>
                     )
            }


            { children } 
        </section>
    )

}