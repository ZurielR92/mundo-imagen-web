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

        <div className={styles.card}>
        <div className={styles['img-box']}>
          <Image src={category.displayImage} width={370} height={270} alt={category.altDisplay}/>
        </div>
        <div className={styles['text-box']}>
          <Link href={category.url}>
              <h2>{category.name}</h2>
          </Link>
          <div className={styles['meta-info']}>
            <p>
              {category.minQuantity <= 1 ? 'Desde ' : `${category.minQuantity} unidades desde `}<span>{ formatPeso(category.basicPrice) }</span>
            </p>
          </div>
          <p>{ category.shortDescription }</p>
          <Link className={ styles['read-more'] } href={ category.url }>
            Ver mas...
          </Link>
        </div>
      </div>
    )

}