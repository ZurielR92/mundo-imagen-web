import Image from 'next/image';
import { useRouter } from 'next/router'
import { FC } from 'react'

//Importacion de estilos
//import styles from './SiteInConstruction.module.scss'

//Propiedades que recibe el componente
interface Props {
}


export const SiteInConstruction:FC<Props> = () => {

    const router = useRouter();

    return (
        <section style={{ background:'#FFF', width:'100vw', height:'100vh', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center' }}>
        <Image src={ '/img/404.png' } width={ 280 } height={ 202 } alt='Pagina en construcción' />
        <h1 style={{ color:'#212121', margin:'0' }}>Pagina en construcción</h1>
        <p style={{ color:'#757575', maxWidth:'600px', textAlign:'center', fontSize:'18px', margin:'0' }}>
            Esta pagina se encuentra actualmente en construcción, estamos trabajando para 
            ponerla a tu disposición lo antes posible
        </p>
        <button 
            style={{
                height:'40px',
                border:'none',
                borderRadius:'10px',
                width:'250px',
                marginTop:'20px',
                background: '#FEC931',
                cursor:'pointer',
                color:'#212121',
                fontSize:'17px',
                fontWeight:'bold'
            }}
            onClick={ () => router.back() }
        >Volver Atras</button>
    </section>
    )

}