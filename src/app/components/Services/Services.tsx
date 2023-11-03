import { Section } from '@/Components/Section';
import { TitleSection } from '@/Components';

import styles from './Services.module.scss';
import Link from 'next/link';


const Services = () => {
    return (
        <Section colorClipTop='resalt' colorClipBottom='primary' style={{paddingBottom:100, paddingTop:100}}>
            <TitleSection title={<>Nuestros <strong>Servicios</strong></>} subtitle='Soluciones impresionantes para Tu Empresa'/>
            <p className={styles.text}>
                En Grupo Mundo Imagen ofrecemos una amplia gama de servicios de litografía y publicidad para satisfacer tus necesidades comerciales. Ya sea que necesites impresión de alta calidad, diseño gráfico creativo o estrategias publicitarias efectivas, estamos aquí para ofrecerte servicios excepcionales que impulsarán tu marca y harán que tu negocio destaque en Medellín y más allá. Descubre cómo nuestros servicios pueden ayudarte a alcanzar tus objetivos comerciales.
            </p>
            <div className={styles.grid}>
                <div className={styles.service}>
                    <h2>Publicidad Impresa</h2>
                    <nav>
                        <ul>
                            <li>
                                <Link href={'/servicios/publicidad_impresa/plegables'}>Plegables</Link>
                            </li>
                            <li>
                                <Link href={'/servicios/publicidad_impresa/tarjetas_de_presentacion'}>Tarjetas de Presentación</Link>
                            </li>
                            <li>
                                <Link href={'/servicios/publicidad_impresa/volantes'}>Volantes</Link>
                            </li>
                            <li>
                                <Link href={'/servicios/publicidad_impresa/afiches'}>Afiches</Link>
                            </li>
                            <li>
                                <Link href={'/servicios/publicidad_impresa/etiquetas'}>Etiquetas</Link>
                            </li>
                            <li>
                                <Link href={'/servicios/publicidad_impresa/imanes'}>Imanes Publicitarios</Link>
                            </li>
                            <li>
                                <Link href={'/servicios/publicidad_impresa/stickers'}>Stickers</Link>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className={styles.service}>
                    <h2>Papelería Comercial</h2>
                    <nav>
                        <ul>
                            <li>
                                <Link href={'/servicios/papeleria_comercial/agendas_personalizadas'}>Cuadernos & Agendas</Link>
                            </li>
                            <li>
                                <Link href={'/servicios/papeleria_comercial/carpetas_personalizadas'}>Carpetas Personalizadas</Link>
                            </li>
                            <li>
                                <Link href={'/servicios/papeleria_comercial/hojas_membrete'}>Hojas Membrete</Link>
                            </li>
                            <li>
                                <Link href={'/servicios/papeleria_comercial/talonarios'}>Talonarios</Link>
                            </li>
                            <li>
                                <Link href={'/servicios/papeleria_comercial/tacos_notas'}>Tacos de Notas</Link>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className={styles.service}>
                    <h2>Publicidad Exterior</h2>
                    <nav>
                        <ul>
                            <li>
                                <Link href={'/servicios/publicidad_exterior/avisos_luminosos'}>Avisos Luminosos</Link>
                            </li>
                            <li>
                                <Link href={'/servicios/publicidad_exterior/pasacalles'}>Pasacalles</Link>
                            </li>
                            <li>
                                <Link href={'/servicios/publicidad_exterior/rompetraficos'}>Rompetraficos</Link>
                            </li>
                            <li>
                                <Link href={'/servicios/publicidad_exterior/bastidores'}>Bastidores</Link>
                            </li>
                            <li>
                                <Link href={'/servicios/publicidad_exterior/avisos_neonflex'}>Avisos en Neonflex</Link>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className={styles.service}>
                    <h2>Gran Formato</h2>
                    <nav>
                        <ul>
                            <li>
                                <Link href={'/servicios/gran_formato/vinilos_adhesivos'}>Vinilos Adhesivos</Link>
                            </li>
                            <li>
                                <Link href={'/servicios/gran_formato/microperforados'}>Microperforados</Link>
                            </li>
                            <li>
                                <Link href={'/servicios/gran_formato/decoracion_vehicular'}>Decoración Vehicular</Link>
                            </li>
                            <li>
                                <Link href={'/servicios/gran_formato/pendones'}>Pendones</Link>
                            </li>
                            <li>
                                <Link href={'/servicios/gran_formato/senalizacion'}>Señalización</Link>
                            </li>
                            <li>
                                <Link href={'/servicios/gran_formato/plotter_de_corte'}>Plotter de Corte</Link>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className={styles.service}>
                    <h2>Promocionales</h2>
                    <nav>
                        <ul>
                            <li>
                                <Link href={'/servicios/promocionales/lapiceros_personalizados'}>Lapiceros</Link>
                            </li>
                            <li>
                                <Link href={'/servicios/promocionales/llaveros'}>Llaveros</Link>
                            </li>
                            <li>
                                <Link href={'/servicios/promocionales/termos'}>Termos</Link>
                            </li>
                            <li>
                                <Link href={'/servicios/promocionales/mugs'}>Mugs</Link>
                            </li>
                            <li>
                                <Link href={'/servicios/promocionales/camisetas'}>Camisetas</Link>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className={styles.service}>
                    <h2>Cajas & Empaques</h2>
                    <nav>
                        <ul>
                            <li>
                                <Link href={'/servicios/cajas_y_empaques/cajas_plegadizas'}>Cajas Plegadizas</Link>
                            </li>
                            <li>
                                <Link href={'/servicios/cajas_y_empaques/bolsas_de_papel'}>Bolsas de Papel</Link>
                            </li>
                        </ul>
                    </nav>
                </div>

            </div>
        </Section>
    )
}


export default Services;