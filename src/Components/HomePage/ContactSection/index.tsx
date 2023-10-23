import { FC } from 'react'
import { Section } from '../../Section'

//Importacion de estilos
import styles from './ContactSection.module.scss'

//Propiedades que recibe el componente
interface Props {
}


export const ContactSection:FC<Props> = () => {
    return (
        <>
            <Section style={{ padding:'40px 0' }} colorClipTop='resalt' colorClipBottom='dark'>
                <div className={ styles.grid }>

                    <div>
                        <span>Contacta con nosotros</span>
                        <h2>Enviar mensaje</h2>
                        <form action="">
                            <input type="text" placeholder='Ingrese su nombre completo'/>
                            <input type="text" placeholder='Numero de teléfono'/>
                            <input type="text" placeholder='Dirección de correo electrónico'/>
                            <input type="text" placeholder='¿Que estas bucando?'/>
                            <div>
                                <button>Enviar Ahora</button>
                            </div>
                        </form>
                    </div>

                    <div>
                        <span>Información de contacto</span>
                        <h2>Detalles</h2>
                        <strong>Dirección:</strong>
                        <p>Carrera 45 # 30 - 45</p>
                        <strong>Teléfono:</strong>
                        <p>+57 313 708 29 92</p>
                        <strong>Correo Electrónico</strong>
                        <p>ventas@mundoimagen.com</p>
                    </div>

                </div>
            </Section>   
        </>
    )

}