import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { ICategory } from '../../../interfaces'

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


export const CategoriesCard:FC<Props> = ({ category }) => {

    return (

      <div className={styles.card2}>
        <Link href={category.url}>
          <div className={styles['img-box2']}>
            <Image src={category.displayImage} fill alt={category.altDisplay}/>
          </div>  
          <div className={styles.title}>
            {category.name}
          </div>
        </Link>
      </div>
    )

}