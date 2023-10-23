'use client'
import { FC, useContext, useRef } from 'react'
import { DataContext, UIContext } from '../../context'
import { WsIcon } from '../MaterialZ/Icons'

//Importacion de estilos
import styles from './CartMenu.module.scss'

//Propiedades que recibe el componente
interface Props {
    active?: boolean
  }


export const CartMenu:FC<Props> = ({ active }) => {

    let message:string = ''

    //REFERENCIAS AL FORMULARIO
    const txtName = useRef<HTMLInputElement>(null);
    const txtNameError = useRef<HTMLSpanElement>(null);
    const txtEmail = useRef<HTMLInputElement>(null);
    const txtPhone = useRef<HTMLInputElement>(null);
  
    //IMPORTACIONES DE LOS CONTEXTOS
    const { products, handleRemoveProduct } = useContext( DataContext )
    const { toggleCart, isShowCart } = useContext(UIContext)
  
    //METODOS
    const handleSendBudget = () => {
      if ( products.length == 0 ) return;
  
      if ( txtName.current?.value.length == undefined || txtName.current?.value.length < 3 || txtName.current?.value == '') {
        txtName.current?.focus();
        txtNameError.current?.classList.add(`${styles.activo}`)
        return;
      }
  
      message = `https://api.whatsapp.com/send?phone=56946833575&text=Hola!%20muy%20buen%20día%0AMi%20nombre%20es%20${txtName.current.value}%0ANecesito%20por%20favor%20la%20cotización%20de%20los%20productos%20de%20la%20siguiente%20lista:%0A%0A${products.map(product => { return(`${product.replace(' ','%20').replace(',','.')}%0A`)})}`
  
      window.open(message);
  
  
  
    }
  
    const handleBlurName = () => {
      if( products.length == 0 ) return;
      if ( txtName.current?.value.length !== undefined || txtName.current?.value.length !< 3 || txtName.current?.value !== '') {
        txtNameError.current?.classList.remove(`${styles.activo}`)
      }
    }

    return (
        <>

            <div className={`${styles.main} ${isShowCart?styles.activo:''}`}>
                <div className={styles['title-container']}>
                <span className={styles.title}>Mi Cotización</span>
                <span className={ styles.close } onClick={toggleCart}>Cerrar</span>
                </div>

                <div className={styles['form-container']}>

                <span className={styles.title}>¿Cual es tu nombre?</span>
                <span className={styles.subtitle}><br/>Si nos dices tu nombre o el de tu organización, podremos brindarte un experiencia mas personalizada</span>

                <input ref={txtName} onBlur={handleBlurName} type="text"  placeholder='Ingresa tu Nombre*'/>
                <span ref={txtNameError} className={styles.error}>Por favor ingresa tu nombre</span>

            {/*           <input ref={txtEmail} type="email" name="" id="" placeholder='Correo Electronico'/>
                <input ref={txtPhone} type="tel" name="" id="" placeholder='Numero de Teléfono'/> */}

                </div>

                <hr />

                <div className={styles['products-container']}>
                <ul>
                    <span>Lista de Productos</span>

                    <hr />
                    {
                    products.length > 0 ? (
                        products.map(( product, id ) => {
                        return (
                        <li key={id}>
                            <span onClick={() => handleRemoveProduct(id)}>X</span>
                            {product}
                        </li>
                        )
                    })
                    ):(
                        <span><br/><br/><br/>No tienes productos agregados a tu cotización</span>
                    )
                    }
                </ul>
                </div>

                <div className={styles['footer-container']}>
                <hr />
                <p>Para lograr un atención mas personalizada, puede enviar la lista de productos a cotizar a nuestro departamento de ventas via whatsapp. Le estaremos respondiendo en la brevedad posible</p>
                <button onClick={handleSendBudget} className={products.length<1?styles.activo:''}><WsIcon width={ 28 } fill='#fff'/> Solicitar Cotización</button>
                </div>

            </div>
            

        </>
    )

}