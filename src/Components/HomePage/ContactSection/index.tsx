'use client'
import { FC, useContext } from 'react'
import { Section } from '../../Section'

//Importacion de estilos
import styles from './ContactSection.module.scss'
import { DataContext } from '@/context'

//Propiedades que recibe el componente
interface Props {
}


export const ContactSection:FC<Props> = () => {
    const { vendor } = useContext( DataContext );
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
                        <p>+57 {vendor}</p>
                        <strong>Correo Electrónico</strong>
                        <p>ventas@mundo-imagen.com</p>
                    </div>

                </div>
            </Section>   
        </>
    )

}