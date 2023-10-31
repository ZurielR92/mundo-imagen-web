'use client'

import { FC, useContext, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './HeaderFallback.module.scss'
import { IconsSocial } from '../IconsSocial'
import { CartIcon, SimpleDownArrow } from '../MaterialZ/Icons'
import { ButtonMenuAnimated } from '../MaterialZ'
import UIContext from '@/context/UI/UIContext'

interface Props {

}

const HeaderFallback:FC<Props> = () => {

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

            





        </nav>
        <div onClick={ toggleCart } className={ styles.cart }>
            <CartIcon width={30} fill='#fff'/>
        </div>
    </header>

  )
}

export default HeaderFallback