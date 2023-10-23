import Image from 'next/image'
import { FC } from 'react'

//Importacion de estilos
import styles from './FadeSlide.module.scss'

//Propiedades que recibe el componente
interface Props {
}


export const FadeSlide:FC<Props> = () => {
    return (
        <div className={ styles.fadeslide }>
            <div className={ styles.slide }>
                <div className={ styles.content }>
                    <h2>Letreros Neonflex</h2>
                </div>
                <img src='/img/varios/neonflex_1.png'/>
            </div>
            <div className={ styles.slide }>
                <div className={ styles.content }>
                    <h2>Camisetas Personalizadas</h2>
                </div>
                <img src='/img/varios/camisetas.png'/>
            </div>
            <div className={ styles.slide }>
                <div className={ styles.content }>
                    <h2>Avisos Luminosos</h2>
                </div>
                <img src='/img/varios/caja_luz_1.png'/>
            </div>
            <div className={ styles.slide }>
                <div className={ styles.content }>
                    <h2>Pendones</h2>
                </div>
                <img src='/img/varios/pendones_1.png'/>
            </div>
            <div className={ styles.slide }>
                <div className={ styles.content }>
                    <h2>Agendas Personalizadas</h2>
                </div>
                <img src='/img/varios/agendas_personalizadas.png'/>
            </div>
        </div>
    )

}