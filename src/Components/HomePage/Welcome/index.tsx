import Image from 'next/image'
import { FC } from 'react'

//Importacion de estilos
import styles from './WelcomeHome.module.scss'

//Propiedades que recibe el componente
interface Props {
}


export const WelcomeHome:FC<Props> = () => {
    return (
        <div className={ styles.welcomehome }>
            <div className={ styles.clip }></div>

            <div className={ styles.grid }>
                <div>
                    <span>Bienvenidos a Grupo Mundo Imagen</span>
                    <h1>
                        <strong>Litografía</strong>, <br/>
                        Gran Formato <br/>
                        y Promocionales <br/>
                        en <strong>Medellín</strong>
                    </h1>
{/*                     <p>
                        Con una trayectoria de 30 años en el mercado, nuestra experiencia se traduce en impresiones de alta calidad y soluciones creativas para tu empresa, desde la impresión offset o litografía hasta proyectos personalizados. ¡Contactanos hoy! y descubre como te podemos ayudar a conseguir tus objetivos en materia de artes gráficas.
                    </p>
                    <button>Quiero una cotización</button> */}
                </div>

                <div className={styles.imageContainer}>
                    <Image src={'/img/welcome.webp'} width={400} height={390} priority alt='Bienvenidos a Grupo Mundo Imagen'/>
                </div>

            </div>
        </div>
    )

}