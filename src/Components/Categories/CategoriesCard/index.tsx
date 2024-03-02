'use client'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { ICategory } from '../../../interfaces'
import { Variants, motion } from 'framer-motion'

//Importacion de estilos
import styles from './CategoriesCard.module.scss'

//Propiedades que recibe el componente
interface Props {
    category: ICategory
}


export const formatPeso = ( ammount:number ) => {
  const format = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
  })
  return format.format(ammount)
}

const item: Variants = {
  hidden: { 
      y: 20, 
      opacity:0 
  },
  visible: {
      y: 0,
      opacity: 1
  }
}


export const CategoriesCard:FC<Props> = ({ category }) => {

    return (

      <motion.div
        variants={item} 
        className={styles.card2}
        
      >
        <Link href={category.url}>
          <div className={styles['img-box2']}>
            <Image src={category.displayImage} fill alt={category.altDisplay}/>
          </div>  
          <div className={styles.title}>
            {category.name}
          </div>
        </Link>
      </motion.div>
    )

}