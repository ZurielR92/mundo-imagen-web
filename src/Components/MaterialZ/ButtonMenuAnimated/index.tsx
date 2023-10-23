import { FC } from 'react'

//Importacion de estilos
import styles from './ButtonMenuAnimated.module.scss'

//Propiedades que recibe el componente
interface Props {
    onClick?: () => void
    className?:string
    active?:boolean
}


export const ButtonMenuAnimated:FC<Props> = ({ onClick, active }) => {
    return (
        <label  htmlFor='check' className={ `${ styles.buttonmenuanimated } ` }>
            <input className={ `${ active && styles.active }` } onChange={ onClick } type="checkbox" id="check"/> 
            <span></span>
            <span></span>
            <span></span>
        </label>

    )

}