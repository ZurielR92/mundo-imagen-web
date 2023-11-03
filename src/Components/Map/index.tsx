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
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d63458.33822101667!2d-75.5757075!3d6.2444641!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4428f0d4783785%3A0x196c7694ee5e48b5!2sGrupo%20Mundo%20Imagen%20S.a.s!5e0!3m2!1ses-419!2sco!4v1699036665592!5m2!1ses-419!2sco" 
                style={{border:0}} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy='no-referrer-when-downgrade'
            />
        </div>
    )

}