import { FC } from 'react'

//Importacion de estilos
import styles from './Map.module.scss'

//Propiedades que recibe el componente
interface Props {
}


export const Map:FC<Props> = () => {
    return (
        <div className={ styles.mapa_responsivo }>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.641408377599!2d-70.79263018512438!3d-33.510705607992584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c3e8a65494eb%3A0xbac70845994649f3!2sImpulso%20Publicitario!5e0!3m2!1ses!2sco!4v1673639258559!5m2!1ses!2sco" 
                style={{border:0}} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy='no-referrer-when-downgrade'
            />
        </div>
    )

}