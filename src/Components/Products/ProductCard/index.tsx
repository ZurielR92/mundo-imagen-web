'use client'
import Image from 'next/image'
import { ChangeEvent, FC, useState, useRef, useContext } from 'react';
import styles from './ProductCard.module.scss'
import { productPriceConfigInterface } from '../../../interfaces/Product';
import { DataContext, UIContext } from '../../../context';
import { WsIcon } from '../../MaterialZ/Icons';

interface Props {
    img: string
    altImg: string
    title: string
    shortDescription: string
    priceConfig: productPriceConfigInterface
}

export const ProductCard:FC<Props> = ( { img, altImg, title, shortDescription, priceConfig } ) => {

  const { handleAddProduct } = useContext( DataContext )
  const { toggleCart } = useContext( UIContext )

  const selector = useRef<HTMLSelectElement>(null);

  const [quantity, setQuantity] = useState('1');
  const [width, setWidth] = useState('0');
  const [height, setHeight] = useState('0');

  const handleAddtoBudget = () => {
    let product:string = ''
    switch (priceConfig.priceType) {
      case 'Precio Fijo':
        product = `${selector.current?.value} ${title}`;
        break;
      case 'Precio por Cm2':
        product = `${quantity}  ${title} de ${width}x${height}`
        break
    }
    product = product.replace(',','');
    handleAddProduct(product);
    toggleCart();
  }


  const handleSendToWhatsapp = () => {

    switch (priceConfig.priceType) {
      case 'Precio Fijo':
        window.open(
          `https://api.whatsapp.com/send?phone=56946833575&text=Hola!%20estoy%20estoy%20interesado%20en%20${selector.current?.value}%20${title}`,'_blank'
          )
        break;

      case 'Precio por Cm2':
        window.open(
          `https://api.whatsapp.com/send?phone=56946833575&text=Hola!%20estoy%20estoy%20interesado%20en%20${quantity === '0' ? '1' : quantity}%20${title}%20de%20${width}x${height}cm`,'_blank'
          )
        break;
    }



  }




  const handleChangeWidth = (e:ChangeEvent<HTMLInputElement>) => {
    if ( quantity === '' && width === '0' && height > '0' ) {
      setQuantity('1');
    }
    setWidth(e.target.value);
  }

  const handleChangeHeight = (e:ChangeEvent<HTMLInputElement>) => {
    if ( quantity === '' && width === '0' && height === '0' ) {
      setQuantity('1');
    };
    setHeight(e.target.value);
  }




  const notImage:string = '/img/products/not-image.png'

  return (
    <div className={styles.card}>
        <div className={styles['img-box']}>
            <Image src={img === '' ? notImage:img} width={370} height={270} alt={altImg}/>
        </div>
        <h3>{title}</h3>
        <p>
            {shortDescription}
        </p>

        {
          priceConfig.priceType === 'Precio Fijo' ? (
            
            <div className={styles['container-selector']}>
              <label htmlFor="#select-quantity">Selecciona la Cantidad</label>
              <select ref={selector} name="" id="select-quantity">
                {
                  priceConfig.quantities?.map(option => {
                    return (
                    <option key={option} value={option}>{option}</option>
                    )
                  })
                }
              </select>
            </div>

          ):(
            <div className={ styles['container-form'] } >

              <label htmlFor="#Quantity">Cantidad</label>
              <label htmlFor="#Quantity">Ancho</label>
              <label htmlFor="#Quantity">Alto</label>

              <input 
                value={quantity}
                onChange={e => setQuantity(e.target.value) }
                type="number" 
                name="Quantity" 
                id="Quantity" 
              />
              <input 
                value={width}
                onChange={handleChangeWidth}
                type="number" 
                name="" 
                id="" 
              />
              <input 
                value={height}
                onChange={handleChangeHeight}
                type="number" 
                name="" 
                id="" 
              />
            </div>
          )
        }

        <div className={styles['container-buttons']}>

          <button onClick={handleAddtoBudget} className={styles['btn-add-budget']} role="button">AGREGAR A COTIZACIÓN</button>


          <button onClick={handleSendToWhatsapp} className={styles['btn-whatsapp']} role="button"><WsIcon width={ 20 } height={ 20 } fill='#fff'/></button>

        </div>

    </div>
  )
}