
import { TitleSection } from '@/Components';
import styles from './WhyUs.module.scss';
import Image from 'next/image';


const WhyUs = () => {
    return (
        <section className={styles.whyUs}>
            <TitleSection mode='white' title={<>¿Por que <strong>elegirnos</strong>?</>} subtitle='¿Quienes somos? y...' />
            <p>
                Somos una empresa de litografía y publicidad con sede en Medellín, comprometida con brindar soluciones creativas y de alta calidad a nuestros clientes. Desde hace más de dos décadas, hemos fusionado la experiencia con la innovación para dar vida a proyectos impresos y publicitarios excepcionales. Nuestra pasión por el diseño y la impresión nos impulsa a superar las expectativas y a ser tu elección confiable en Medellín.
            </p>
            <div className={styles.grid}>
                <div>
                    <Image src={'/img/icons/calidad_premium.png'} width={85} height={85} alt='Calidad Premium'/>
                    <strong>Calidad Premium</strong>
                </div>
                <div>
                    <Image src={'/img/icons/creatividad_ilimitada.png'} width={85} height={85} alt='Creatividad Ilimitada'/>
                    <strong>Creatividad Ilimitada</strong>
                </div>
                <div>
                    <Image src={'/img/icons/entrega_a_tiempo.png'} width={85} height={85} alt='Entrega a Tiempo'/>
                    <strong>Entrega a Tiempo</strong>
                </div>
                <div>
                    <Image src={'/img/icons/servicio_personalizado.png'} width={85} height={85} alt='Servicio Personalizado'/>
                    <strong>Servicio Personalizado</strong>
                </div>
            </div>
        </section>
    )
}


export default WhyUs;