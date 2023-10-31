import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { IconsSocial } from '../IconsSocial'

//Importacion de estilos
import styles from './Footer.module.scss'

//Propiedades que recibe el componente
interface Props {
}


export const Footer:FC<Props> = () => {
    return (
        <div className={ styles.footer }>

            <div className={ styles.grid } >
                <div>
                    <Image alt='' priority src={'/logo_mundo_imagen_light.png'} width={250} height={56}/>   
                    <p>
                        Nuestra Litografía, ubicada en la Ciudad de Medellín, cuenta con el talento humano, tecnología y experiencia para afrontar los retos que propongan nuestros clientes y poder satisfacer todas sus necesidades en materia de artes gráficas.
                    </p>
                </div>
                <nav>
                    <h2>Nuestros Servicios</h2>
                    <ul>
                        <li>
                            <Link href={'/servicios/publicidad_impresa'}>Publicidad Impresa</Link>
                        </li>
                        <li>
                            <Link href={'/servicios/papelería_comercial'}>Papelería Comercial</Link>
                        </li>
                        <li>
                            <Link href={'/servicios/impresion_laser'}>Impresión Laser</Link>
                        </li>
                        <li>
                            <Link href={'/servicios/publicidad_exterior'}>Publicidad Exterior</Link>
                        </li>
                        <li>
                            <Link href={'/servicios/gran_formato'}>Gran Formato</Link>
                        </li>
                        <li>
                            <Link href={'/servicios/souvenirs_publicitarios'}>Souvenirs Publicitarios</Link>
                        </li>
                        <li>
                            <Link href={'/servicios/diseño_grafico'}>Diseño Gráfico</Link>
                        </li>
                    </ul>
                </nav>
                <div>
                    <h3>Siguenos</h3>
                    <IconsSocial/>
                </div>
            </div>
            <div className={ styles.copyright }>
                Copyright 2023 | Desarrollado y Posicionado por Grupo VR
            </div>

        </div>
    )

}
