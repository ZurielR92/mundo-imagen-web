'use client'

import { FC, useContext, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Header.module.scss'
import logic from './headerLogic'
import { IconsSocial } from '../IconsSocial'
import { CartIcon, SimpleDownArrow } from '../MaterialZ/Icons'
import { ButtonMenuAnimated } from '../MaterialZ'
import UIContext from '@/context/UI/UIContext'

interface Props {

}

const Header:FC<Props> = () => {

    const innerWidth = (typeof window === 'undefined') ? 0 : window.innerWidth;
    const esDispositivoMovil = () => innerWidth <= 1048;

    const grid = useRef<HTMLDivElement>(null);
    const contenedorSubCategorias = useRef<HTMLDivElement>(null);

    const { showMenu, isShowCart, toggleCart, hideMenu, isShowMenu, showServices, hideServices, isShowServices } = useContext( UIContext )

    const handleToggleMenu = () => {
        if(isShowServices && !esDispositivoMovil()) {
            hideServices();
            return;
        }
        if (isShowMenu) {
            hideMenu();
            hideServices();
            contenedorSubCategorias.current?.classList.remove(`${ styles.activo }`)
        } else {
            showMenu();
        }
    }

    useEffect(() => {
        logic.initEvents(grid, contenedorSubCategorias);
    }, [])

    const showBacking = () => {
        if ( isShowMenu && esDispositivoMovil() ) {
            return true
        } else if ( isShowCart ) {
            return true
        } else {
            return false
        }
    }



  return (

    <header>
        <nav 
            id="menu"
            className={`${styles.menu}`}
        >

            <div className={`${styles['contenedor']} ${styles['contenedor-botones-menu']}`}>
                


                <Image alt='' priority src={'/logo_mundo_imagen.png'} width={179} height={40}/>



                <ButtonMenuAnimated active={ isShowMenu } onClick={ () => handleToggleMenu() }/>
            </div>




            <div onClick={ isShowCart ? () => toggleCart() : () => handleToggleMenu() } className={ `${ styles.background } ${ showBacking() && styles.activo }` }></div>




            <div 
                className={`${styles["contenedor"]} ${styles['contenedor-enlaces-nav']} ${ isShowMenu && styles.activo }`}>

                <div className={styles['contenedor-logo']}>
                    <Link href={'/'} aria-label='Inicio Mundo Imagen'>
                        <Image alt='' priority src={'/logo_mundo_imagen.png'} width={215} height={48}/>
                    </Link>
                </div>

                <div 
                    onClick={ showServices }
                    className={`${styles['btn-departamentos']}`}
                    id="btn-departamentos">
                        <p>Todos Nuestros <span>SERVICIOS</span></p>
                </div>

                {/* <div className={styles['separador-logo']}></div> */}


                <ul className={`${styles.enlaces}`}>
                    <li>
                        <Link onClick={ handleToggleMenu } href={'/'}>
                                Inicio
                        </Link>
                    </li>
                    <li className={ styles.separador_links }>
                        <span></span>
                    </li>


                    <li className={ styles.desktop }>
                        <span onMouseEnter={ showServices }>
                            Servicios
                            <SimpleDownArrow style={{ marginLeft:'5px' }} width={ 10 }/>
                        </span>
                    </li>


                    <li className={ styles.separador_links }>
                        <span></span>
                    </li>
                    <li>
                        <Link onClick={ handleToggleMenu } href={'/conocenos'}>
                            Conócenos
                        </Link>
                    </li>
                    <li className={ styles.separador_links }>
                        <span></span>
                    </li>
                    <li>
                        <Link onClick={ handleToggleMenu } href={'/contacto'}>
                            Contacto
                        </Link>
                    </li>
                </ul>

                <div className={ styles.separador_movil }></div>

                <IconsSocial/>

            </div>

            <div className={`${styles.contenedor} ${styles['contenedor-grid']}`}>
                <div 
                    onMouseLeave={ () => esDispositivoMovil() ? null : hideServices() }
                    className={`${styles.grid} ${ isShowServices && styles.activo }`} 
                    id="grid"
                    ref={grid}
                >
                        
                        <div className={`${styles.categorias} categorias`}>
                            <button 
                                onClick={ hideServices }
                                className={`${styles['btn-regresar']} btn-regresar`}>
                                    <i className="fas fa-arrow-left"></i>
                                    Regresar
                            </button>
                            <h3
                                className={`${styles.subtitulo}`}>
                                    Categorias
                            </h3>

                            <span data-categoria='1'>Publicidad Impresa <i className="fas fa-angle-right"></i></span>
                            <span data-categoria='2'>Papelería Comercial <i className="fas fa-angle-right"></i></span>
                            {/* <span data-categoria='3'>Impresión Laser <i className="fas fa-angle-right"></i></span> */}
                            <span data-categoria='4'>Publicidad Exterior <i className="fas fa-angle-right"></i></span>
                            <span data-categoria='5'>Gran Formato <i className="fas fa-angle-right"></i></span>
                            <span data-categoria='6'>Promocionales <i className="fas fa-angle-right"></i></span>
                            <span data-categoria='8'>Cajas y Empaques<i className="fas fa-angle-right"></i></span>
                            {/* <span data-categoria='9'>Eventos<i className="fas fa-angle-right"></i></span> */}
                            {/* <span data-categoria='7'>Diseño Gráfico <i className="fas fa-angle-right"></i></span> */}
                        </div>



                        <div 
                        ref={contenedorSubCategorias}
                            className={`${styles['contenedor-subcategorias']} contenedor-subcategorias`}>

                            <div 
                                className={`${styles.subcategoria} subcategoria default`} 
                                data-categoria='1'>
                                    <div className={`${styles['enlaces-subcategoria']}`}>
                                        <button className={`${styles['btn-regresar']} btn-regresar`}>
                                            <i className="fas fa-arrow-left"></i>
                                            Regresar
                                        </button>
                                        <h3 className={`${styles.subtitulo}`}> Publicidad Impresa</h3>
                                        <Link onClick={ handleToggleMenu } href={'/servicios/publicidad_impresa/tarjetas_de_presentacion'}>
                                            Tarjetas de Presentación
                                        </Link>
                                        <Link onClick={ handleToggleMenu } href={'/servicios/publicidad_impresa/volantes'}>
                                            Volantes
                                        </Link>
                                        <Link onClick={ handleToggleMenu } href={'/servicios/publicidad_impresa/afiches'}>
                                            Afiches
                                        </Link>
                                        <Link onClick={ handleToggleMenu } href={'/servicios/publicidad_impresa/etiquetas'}>
                                            Etiquetas
                                        </Link>
                                        <Link onClick={ handleToggleMenu } href={'/servicios/publicidad_impresa/imanes_publicitarios'}>
                                            Imanes Publicitarios
                                        </Link>
                                        <Link onClick={ handleToggleMenu } href={'/servicios/publicidad_impresa/stickers'}>
                                            Stickers
                                        </Link>
                                    </div>

                                <div className={`${styles['banner-subcategoria']}`}>
                                    <div className={styles.img}>
                                            <Image src="/img/menu/publicidad_impresa_banner_1.png" alt="" width={300} height={300}/>
                                    </div>
                                </div>

                                <div className={`${styles['galeria-subcategoria']}`}>
                                        <Image src="/img/menu/publicidad_impresa_galeria_1.png" alt="" width={150} height={150}/>
                                        <Image src="/img/menu/publicidad_impresa_galeria_2.png" alt="" width={150} height={150}/>
                                        <Image src="/img/menu/publicidad_impresa_galeria_3.png" alt="" width={150} height={150}/>
                                        <Image src="/img/menu/publicidad_impresa_galeria_4.png" alt="" width={150} height={150}/>
                                </div>
                            </div>

                            <div className={`${styles.subcategoria} subcategoria`} data-categoria='2'>
                                <div className={`${styles['enlaces-subcategoria']}`}>
                                    <button className={`${styles['btn-regresar']} btn-regresar`}><i className="fas fa-arrow-left"></i>Regresar</button>
                                    <h3 className={`${styles.subtitulo}`}>Papelería Comercial</h3>
                                        <Link onClick={ handleToggleMenu } href={'/servicios/papeleria_comercial/talonarios'}>
                                            Talonarios
                                        </Link>
                                        <Link onClick={ handleToggleMenu } href={'/servicios/papeleria_comercial/hojas_membrete'}>
                                            Hojas Membrete
                                        </Link>
                                        <Link onClick={ handleToggleMenu } href={'/servicios/papeleria_comercial/carpetas_personalizadas'}>
                                            Carpetas Personalizadas
                                        </Link>
                                        <Link onClick={ handleToggleMenu } href={'/servicios/papeleria_comercial/tacos_notas'}>
                                            Tacos de Notas
                                        </Link>
                                        <Link onClick={ handleToggleMenu } href={'/servicios/papeleria_comercial/agendas_personalizadas'}>
                                            Agendas Personalizadas
                                        </Link>
                                </div>

                                <div className={`${styles['banner-subcategoria']}`}>
                                        <Image src="/img/menu/papeleria_comercial_banner_1.png" alt="" width={300} height={300}/>
                                </div>

                                <div className={`${styles['galeria-subcategoria']}`}>
                                        <Image src="/img/menu/papeleria_comercial_galeria_1.png" alt="" width={150} height={150}/>
                                        <Image src="/img/menu/papeleria_comercial_galeria_2.png" alt="" width={150} height={150}/>
                                        <Image src="/img/menu/papeleria_comercial_galeria_3.png" alt="" width={150} height={150}/>
                                        <Image src="/img/menu/papeleria_comercial_galeria_4.png" alt="" width={150} height={150}/>
                                </div>
                            </div>

                            <div className={`${styles.subcategoria} subcategoria`} data-categoria='3'>
                                <div className={`${styles['enlaces-subcategoria']}`}>
                                    <button className={`${styles['btn-regresar']} btn-regresar`}><i className="fas fa-arrow-left"></i>Regresar</button>
                                    <h3 className={`${styles.subtitulo}`}>Impresión Digital</h3>
                                        <Link onClick={ handleToggleMenu } href={'/servicios/impresion_digital/catalogos'}>
                                            Catalogos
                                        </Link>
                                        <Link onClick={ handleToggleMenu } href={'/servicios/impresion_digital/carnets'}>
                                            Carnets
                                        </Link>
                                        <Link onClick={ handleToggleMenu } href={'/servicios/impresion_digital/invitaciones'}>
                                            Invitaciones
                                        </Link>
                                        <Link onClick={ handleToggleMenu } href={'/servicios/impresion_digital/revistas'}>
                                            Revistas
                                        </Link>
                                        <Link onClick={ handleToggleMenu } href={'/servicios/impresion_digital/libros'}>
                                            Stickers
                                        </Link>
                                </div>

                                <div className={`${styles['banner-subcategoria']}`}>
                                        <Image src="/img/menu/impresion_laser_banner_1.png" alt="" width={300} height={300}/>
                                </div>

                                <div className={`${styles['galeria-subcategoria']}`}>
                                        <Image src="/img/menu/impresion_laser_galeria_1.png" alt="" width={150} height={150}/>
                                        <Image src="/img/menu/impresion_laser_galeria_2.png" alt="" width={150} height={150}/>
                                        <Image src="/img/menu/impresion_laser_galeria_3.png" alt="" width={150} height={150}/>
                                        <Image src="/img/menu/impresion_laser_galeria_4.png" alt="" width={150} height={150}/>
                                </div>
                            </div>

                            <div className={`${styles.subcategoria} subcategoria`} data-categoria='4'>
                                <div className={`${styles['enlaces-subcategoria']}`}>
                                    <button className={`${styles['btn-regresar']} btn-regresar`}><i className="fas fa-arrow-left"></i>Regresar</button>
                                    <h3 className={`${styles.subtitulo}`}>Publicidad Exterior</h3>
                                        <Link onClick={ handleToggleMenu } href={'/servicios/publicidad_exterior/avisos_luminosos'}>
                                            Avisos Luminosos
                                        </Link>
                                        <Link onClick={ handleToggleMenu } href={'/servicios/publicidad_exterior/pasacalles'}>
                                            Pasacalles
                                        </Link>
                                        {/* <Link href={'/servicios/publicidad-exterior/vallas'}>
                                            Vallas
                                        </Link> */}
                                        <Link onClick={ handleToggleMenu } href={'/servicios/publicidad_exterior/rompetraficos'}>
                                            Rompetraficos
                                        </Link>
                                        <Link onClick={ handleToggleMenu } href={'/servicios/publicidad_exterior/bastidores'}>
                                            Bastidores
                                        </Link>
                                        <Link onClick={ handleToggleMenu } href={'/servicios/publicidad_exterior/avisos_neonflex'}>
                                            Avisos en Neonflex
                                        </Link>
                                </div>

                                <div className={`${styles['banner-subcategoria']}`}>
                                        <Image src="/img/menu/publicidad_exterior_banner_1.png" alt="" width={300} height={300}/>
                                </div>

                                <div className={`${styles['galeria-subcategoria']}`}>
                                        <Image src="/img/menu/publicidad_exterior_galeria_1.png" alt="" width={150} height={150}/>
                                        <Image src="/img/menu/publicidad_exterior_galeria_2.png" alt="" width={150} height={150}/>
                                        <Image src="/img/menu/publicidad_exterior_galeria_3.png" alt="" width={150} height={150}/>
                                        <Image src="/img/menu/publicidad_exterior_galeria_4.png" alt="" width={150} height={150}/>
                                </div>
                            </div>

                            <div className={`${styles.subcategoria} subcategoria`} data-categoria='5'>
                                <div className={`${styles['enlaces-subcategoria']}`}>
                                    <button className={`${styles['btn-regresar']} btn-regresar`}><i className="fas fa-arrow-left"></i>Regresar</button>
                                    <h3 className={`${styles.subtitulo}`}>Gran Formato</h3>
                                    <Link onClick={ handleToggleMenu } href={'/servicios/gran_formato/vinilos_adhesivos'}>
                                            Vinilos Adhesivos
                                    </Link>
                                    <Link onClick={ handleToggleMenu } href={'/servicios/gran_formato/microperforados'}>
                                            Microperforados
                                    </Link>
                                    <Link onClick={ handleToggleMenu } href={'/servicios/gran_formato/decoracion_vehicular'}>
                                            Decoración Vehicular
                                    </Link>
                                    <Link onClick={ handleToggleMenu } href={'/servicios/gran_formato/pendones'}>
                                            Pendones
                                    </Link>
                                    <Link onClick={ handleToggleMenu } href={'/servicios/gran_formato/senalizacion'}>
                                            Señalización
                                    </Link>
                                    <Link onClick={ handleToggleMenu } href={'/servicios/gran_formato/plotter_corte'}>
                                            Plotter de Corte
                                    </Link>
                                </div>

                                <div className={`${styles['banner-subcategoria']}`}>
                                        <Image src="/img/menu/gran_formato_banner_1.png" alt="" width={300} height={300}/>
                                </div>

                                <div className={`${styles['galeria-subcategoria']}`}>
                                        <Image src="/img/menu/gran_formato_galeria_1.png" alt="" width={150} height={150}/>
                                        <Image src="/img/menu/gran_formato_galeria_2.png" alt="" width={150} height={150}/>
                                        <Image src="/img/menu/gran_formato_galeria_3.png" alt="" width={150} height={150}/>
                                        <Image src="/img/menu/gran_formato_galeria_4.png" alt="" width={150} height={150}/>
                                </div>
                            </div>

                            <div className={`${styles.subcategoria} subcategoria`} data-categoria='6'>
                                <div className={`${styles['enlaces-subcategoria']}`}>
                                    <button className={`${styles['btn-regresar']} btn-regresar`}><i className="fas fa-arrow-left"></i>Regresar</button>
                                    <h3 className={`${styles.subtitulo}`}>Souvenirs Publicitarios</h3>
                                    <Link onClick={ handleToggleMenu } href={'/servicios/souvenirs_publicitarios/lapiceros_personalizados'}>
                                            Lapiceros
                                    </Link>
                                    <Link onClick={ handleToggleMenu } href={'/servicios/souvenirs_publicitarios/llaveros_personalizados'}>
                                            Llaveros
                                    </Link>
                                    <Link onClick={ handleToggleMenu } href={'/servicios/souvenirs_publicitarios/termos_personalizados'}>
                                            Termos
                                    </Link>
                                    <Link onClick={ handleToggleMenu } href={'/servicios/souvenirs_publicitarios/mugs_personalizados'}>
                                            Mugs
                                    </Link>
                                    <Link onClick={ handleToggleMenu } href={'/servicios/souvenirs_publicitarios/camisetas_personalizadas'}>
                                            Camisetas
                                    </Link>
                                    {/* <Link href={'/servicios/souvenirs-publicitarios/gorras'}>
                                            Gorras
                                    </Link> */}
                                </div>

                                <div className={`${styles['banner-subcategoria']}`}>
                                        <Image src="/img/menu/souvenirs_publicitarios_banner_1.png" alt="" width={300} height={300}/>
                                </div>

                                <div className={`${styles['galeria-subcategoria']}`}>
                                        <Image src="/img/menu/souvenirs_publicitarios_galeria_1.png" alt="" width={150} height={150}/>
                                        <Image src="/img/menu/souvenirs_publicitarios_galeria_2.png" alt="" width={150} height={150}/>
                                        <Image src="/img/menu/souvenirs_publicitarios_galeria_3.png" alt="" width={150} height={150}/>
                                        <Image src="/img/menu/souvenirs_publicitarios_galeria_4.png" alt="" width={150} height={150}/>
                                </div>
                            </div>

                            <div className={`${styles.subcategoria} subcategoria`} data-categoria='7'>
                                <div className={`${styles['enlaces-subcategoria']}`}>
                                    <button className={`${styles['btn-regresar']} btn-regresar`}><i className="fas fa-arrow-left"></i>Regresar</button>
                                    <h3 className={`${styles.subtitulo}`}>Diseño Gráfico</h3>
                                    <Link href={'/servicios/desarrollo-web/paginas-web'}>
                                            Diseño de Logos
                                    </Link>
                                    <Link href={'/servicios/desarrollo-web/tiendas-virtuales'}>
                                            Identidad Corporativa
                                    </Link>
                                </div>

                                <div className={`${styles['banner-subcategoria']}`}>
                                        <Image src="/img/menu/diseno_grafico_banner_1.png" alt="" width={300} height={300}/>
                                </div>

                                <div className={`${styles['galeria-subcategoria']}`}>
                                        <Image src="/img/menu/diseno_grafico_galeria_1.png" alt="" width={150} height={150}/>
                                        <Image src="/img/menu/diseno_grafico_galeria_2.png" alt="" width={150} height={150}/>
                                        <Image src="/img/menu/diseno_grafico_galeria_3.png" alt="" width={150} height={150}/>
                                        <Image src="/img/menu/diseno_grafico_galeria_4.png" alt="" width={150} height={150}/>
                                </div>
                            </div>


                            <div className={`${styles.subcategoria} subcategoria`} data-categoria='8'>
                                <div className={`${styles['enlaces-subcategoria']}`}>
                                    <button className={`${styles['btn-regresar']} btn-regresar`}><i className="fas fa-arrow-left"></i>Regresar</button>
                                    <h3 className={`${styles.subtitulo}`}>Cajas y Empaques</h3>
                                        <Link onClick={ handleToggleMenu } href={'/servicios/cajas_y_empaques/cajas_plegadizas'}>
                                            Cajas Plegadizas
                                        </Link>
                                        {/* <Link onClick={ handleToggleMenu } href={'/servicios/cajas_y_empaques/tapa_y_base'}>
                                            Tapa y Base
                                        </Link>
                                        <Link onClick={ handleToggleMenu } href={'/servicios/cajas_y_empaques/funda_y_base'}>
                                            Funda y Base
                                        </Link> */}
                                        <Link onClick={ handleToggleMenu } href={'/servicios/cajas_y_empaques/bolsas_de_papel'}>
                                            Bolsas de Papel
                                        </Link>
                                        {/* <Link onClick={ handleToggleMenu } href={'/servicios/cajas_y_empaques/bolsas_de_tela'}>
                                            Bolsas de Tela
                                        </Link> */}
                                </div>

                                <div className={`${styles['banner-subcategoria']}`}>
                                        <Image src="/img/menu/cajas_banner_1.jpg" alt="" width={300} height={300}/>
                                </div>

                                <div className={`${styles['galeria-subcategoria']}`}>
                                        <Image src="/img/menu/cajas_galeria_1.jpg" alt="" width={150} height={150}/>
                                        <Image src="/img/menu/cajas_galeria_2.jpg" alt="" width={150} height={150}/>
                                        <Image src="/img/menu/cajas_galeria_3.jpg" alt="" width={150} height={150}/>
                                        <Image src="/img/menu/cajas_galeria_4.jpg" alt="" width={150} height={150}/>
                                </div>
                            </div>





                            {/* <div className={`${styles.subcategoria} subcategoria`} data-categoria='9'>
                                <div className={`${styles['enlaces-subcategoria']}`}>
                                    <button className={`${styles['btn-regresar']} btn-regresar`}><i className="fas fa-arrow-left"></i>Regresar</button>
                                    <h3 className={`${styles.subtitulo}`}>Eventos</h3>
                                        <Link onClick={ handleToggleMenu } href={'/servicios/eventos/eventos_corporativos'}>
                                            Eventos Corporativos
                                        </Link>
                                        <Link onClick={ handleToggleMenu } href={'/servicios/eventos/dias_especiales'}>
                                            Días Especiales
                                        </Link>
                                        <Link onClick={ handleToggleMenu } href={'/servicios/eventos/retiros'}>
                                            Retiros
                                        </Link>
                                        <Link onClick={ handleToggleMenu } href={'/servicios/eventos/eventos_de_couching'}>
                                            Eventos de Couching
                                        </Link>
                                </div>

                                <div className={`${styles['banner-subcategoria']}`}>
                                        <Image src="/img/menu/papeleria_comercial_banner_1.png" alt="" width={300} height={300}/>
                                </div>

                                <div className={`${styles['galeria-subcategoria']}`}>
                                        <Image src="/img/menu/papeleria_comercial_galeria_1.png" alt="" width={150} height={150}/>
                                        <Image src="/img/menu/papeleria_comercial_galeria_2.png" alt="" width={150} height={150}/>
                                        <Image src="/img/menu/papeleria_comercial_galeria_3.png" alt="" width={150} height={150}/>
                                        <Image src="/img/menu/papeleria_comercial_galeria_4.png" alt="" width={150} height={150}/>
                                </div>
                            </div> */}


                        </div>
                </div>
            </div>
        </nav>
        <div onClick={ toggleCart } className={ styles.cart }>
            <CartIcon width={30} fill='#fff'/>
        </div>
    </header>

  )
}


export default Header