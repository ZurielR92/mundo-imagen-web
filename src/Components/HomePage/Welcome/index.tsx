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
            <div className={ styles.background }></div>
            <div className={ styles.grid }>
                <div>
                    <span>Bienvenidos a Grupo Mundo Imagen</span>
                    <h1>¡Si puedes imaginarlo, <br/> Podemos hacerlo!</h1>
                    <p>
                        Con una trayectoria de 30 años en el mercado, nuestra experiencia se traduce en impresiones de alta calidad y soluciones creativas para tu empresa, desde la impresión offset o litografía hasta proyectos personalizados. ¡Contactanos hoy! y descubre como te podemos ayudar a conseguir tus objetivos en materia de artes gráficas.
                    </p>
                    <button>Quiero una cotización</button>
                </div>


            </div>
        </div>
    )

}