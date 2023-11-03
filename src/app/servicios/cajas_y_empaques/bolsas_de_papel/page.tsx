import React from 'react'
import { ProductsGrid } from '../../../../Components/Products/ProductGrid'
import { TitlePage } from '../../../../Components/TitlePage'
import { categoriesList } from '../../../../data/products'
import { IProduct } from '../../../../interfaces/Product'
import { Section } from '../../../../Components/Section'
import Link from 'next/link'

interface Props {
    productList: IProduct[]
    FAQsList: { ask:string, response:string }[]
  }


const AgendasPersonalizadasPage = () => {

    const list: IProduct[] = []
    const FAQs:{ask:string, response:string}[]=[]
  
    
    categoriesList.find(cat => {
      if (cat.code === '0705') {
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
        
        <TitlePage title='Bolsas de Papel en Medellín'>
            <Link href={'/'}>Inicio</Link> • <Link href={ '/servicios' } >Servicios</Link> • <Link href={ '/servicios/cajas_y_empaques' }>Cajas & Empaques</Link>
        </TitlePage>

        <Section colorClipTop={'resalt'} invert style={{ paddingTop:100, paddingBottom:100 }} colorClipBottom='dark'>

            <ProductsGrid
                subtitle='¿Cual bolsa necesito para mi empresa?'
                title='Conoce nuestra variedad de Bolsas de Papel'
                products={list}
            />

        </Section>

        </>
    )
}

export default AgendasPersonalizadasPage