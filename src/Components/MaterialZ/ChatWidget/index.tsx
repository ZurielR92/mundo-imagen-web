'use client'
import Image from 'next/image'
import { FC, useState, useContext } from 'react'
import { SendIcon, WsIcon } from '../Icons'

//Importacion de estilos
import styles from './ChatWidget.module.scss'
import { DataContext } from '@/context'

//Propiedades que recibe el componente
interface Props {
    active?: boolean
    onClick?: () => void
}


export const ChatWidget:FC<Props> = ({ active, onClick }) => {

    const { vendor } = useContext(DataContext)
    const [ act, setAct ] = useState( false );

    const handleToogleActivate = () => {
        setAct( !act );
    }
    const handleSendMessage = () => {
        // @ts-ignore
        gtag_report_conversion();
        const url = `https://api.whatsapp.com/send?phone=57${vendor}&text=Hola!%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios."`
        const win = window.open(url, '_blank');
        win?.focus();
        setAct(!act)
    }

    return (
        <>

            <div className={ `${ styles.chat } ${ act && styles.active}` }>
                <div className={ styles.header }>
                    <div className={ styles.avatar }>
                        <Image src={ '/icon_mundo_imagen.jpg' } width={ 52 } height={ 52 } alt='Mundo Imagen' />
                    </div>
                    <div className={ styles.texto }>
                        <div className={ styles.nombre }>Mundo Imagen</div>
                        <div className={ styles.estado }>¡Damos vida a tus ideas!</div>
                    </div>
                    <div onClick={ handleToogleActivate } className={ styles.close }>x</div>
                </div>
                <div className={ styles.body }>
                    <div className={ styles.dentro }>
                        <div className={ styles.dialogo }>
                            <div className={ styles.nombre }>Mundo Imagen</div>
                            <div className={ styles.texto }>
                                <p>¡Hola! 👋</p>
                                <p>Bienvenido, cuentanos</p>
                                <p>¿Como podemos ayudarte?</p>
                            </div>
                            <div className={ styles.hora }>16:54</div>
                        </div>
                    </div>
                </div>
            </div>
            <div onClick={ !act ? handleToogleActivate : handleSendMessage  } className={ `${styles.burbuja} ${ act && styles.active }` }>
                {
                    !act
                        ? <WsIcon width={ 38 } fill='#fff'/>
                        : <span>Iniciar Chat <SendIcon width={ 20 } fill='#fff'/></span>
                }
            </div>

        </>
    )

}