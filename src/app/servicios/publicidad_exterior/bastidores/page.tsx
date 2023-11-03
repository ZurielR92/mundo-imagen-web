import React from 'react'
import { ProductsGrid } from '../../../../Components/Products/ProductGrid'
import { TitlePage } from '../../../../Components/TitlePage'
import { categoriesList } from '../../../../data/products'
import { IProduct } from '../../../../interfaces/Product'
import { Section } from '../../../../Components/Section'
import Link from 'next/link'

const RompetraficosPage = () => {

    const list: IProduct[] = []
    const FAQs:{ask:string, response:string}[]=[]
  
    categoriesList.find(cat => {
      if (cat.code === '0405') {
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
        <TitlePage title='Bastidores en Medellín'>
            <Link href={'/'}>Inicio</Link> • <Link href={ '/servicios' } >Servicios</Link> • <Link href={ '/servicios/cajas_y_empaques' }>Cajas & Empaques</Link>
        </TitlePage>

        <Section colorClipTop={'resalt'} invert style={{ paddingTop:100, paddingBottom:100 }} colorClipBottom='dark'>
            <ProductsGrid
                subtitle='¿Cual tipo de bastidor necesitas?'
                title='Conoce nuestra variedad de Bastidores'
                products={list}
            />
        </Section>
        </>
    )

}

export default RompetraficosPage