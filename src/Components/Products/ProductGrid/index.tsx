import { FC } from 'react'
import { IProduct } from '../../../interfaces/Product'
import { ProductCard } from '../ProductCard'

import styles from './ProductsGrid.module.scss'

interface Props {
  title: string
  subtitle: string
  products: IProduct[]
}

export const ProductsGrid: FC<Props> = ( { title, subtitle, products } ) => {
  return (

    <section className={styles.container}>

      <p>{subtitle}</p>
      <h2>{title}</h2>

      <div className={styles['grid-productos']}>

        {
          products.map(product => {
            return (
              <ProductCard
                key={product.title}
                img={product.img}
                altImg={product.altImg}
                title={product.title}
                shortDescription={product.shortDescription}
                priceConfig={product.priceConfig}
              />
            )
          })
        }
        
      </div>

    </section>

  )
}