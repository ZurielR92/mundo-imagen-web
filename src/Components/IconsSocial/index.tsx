import Image from 'next/image'
import { FC } from 'react'

//Importacion de estilos
import styles from './IconsSocial.module.scss'

//Propiedades que recibe el componente
interface Props {
}


export const IconsSocial:FC<Props> = () => {
    return (
        <div className={ styles.iconssocial }>

            <div>
                <Image src={ '/icons/facebook_icon.png' } width={ 40 } height={ 40 } alt='Facebook'/>
            </div>
            <div>
                <Image src={ '/icons/instagram_icon.png' } width={ 40 } height={ 40 } alt='Instagram'/>
            </div>
            <div>
                <Image src={ '/icons/youtube_icon.png' } width={ 40 } height={ 40 } alt='Youtube'/>
            </div>

        </div>
    )

}