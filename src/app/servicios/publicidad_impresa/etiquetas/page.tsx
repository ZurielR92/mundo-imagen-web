import React from 'react'
import { ProductsGrid } from '../../../../Components/Products/ProductGrid'
import { TitlePage } from '../../../../Components/TitlePage'
import { categoriesList } from '../../../../data/products'
import { IProduct } from '../../../../interfaces/Product'
import { Section } from '../../../../Components/Section'
import Link from 'next/link'

const EtiquetasPage = () => {

    const list: IProduct[] = []
    const FAQs:{ask:string, response:string}[]=[]
  
    categoriesList.find(cat => {
      if (cat.code === '0105') {
        cat.FAQs?.forEach(element => {
          FAQs.push(element)
        })
        cat.products?.forEach(element => {
          list.push(element)
        });
      }
    })


    return (

        <>
        <TitlePage title='Etiquetas en Medellín'>
            <Link href={'/'}>Inicio</Link> • <Link href={ '/servicios' } >Servicios</Link> • <Link href={ '/servicios/publicidad_impresa' }>Publicidad_impresa</Link>
        </TitlePage>

        <Section colorClipTop={'resalt'} invert style={{ paddingTop:100, paddingBottom:100 }} colorClipBottom='dark'>
            <ProductsGrid
                subtitle='¿Que tipo de etiquetas necesito para mi empresa?'
                title='Conoce nuestra variedad de Etiquetas'
                products={list}
            />
        </Section>
        </>
    )

}

export default EtiquetasPage