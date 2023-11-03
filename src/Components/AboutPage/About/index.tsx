import Image from 'next/image'
import { FC } from 'react'
import { Section } from '../../Section'
import { TitleSection } from '../../TitleSection'

//Importacion de estilos
import styles from './About.module.scss'

//Propiedades que recibe el componente
interface Props {
}


export const About:FC<Props> = () => {
    return (
        <Section colorClipTop='light' colorClipBottom='dark' invert style={{ padding:'40px' }}>

            <div className={ styles.grid }>

                <div className={ styles.container_img }>
                    <Image src={ '/img/about.jpg' } fill alt=''/>
                </div>

                <div>
                    <TitleSection title='Nuestra Empresa' subtitle='Somos Grupo Mundo Imagen'/>
                    <p>
                        En primer lugar aquí podrá imprimir todo lo que necesita para su empresa. Garantizamos su comodidad en entregas rápidas y precios para todos los bolsillos. Como resultado nuestro compromiso como imprenta es entregar la más alta calidad en impresión, uno de los principales argumentos son precio y calidad y nos encontramos ubicados en el en el barrio patronato de recoleta donde podrá ver todo los productos.
                    </p>
                </div>

            </div>

        </Section>
    )

}