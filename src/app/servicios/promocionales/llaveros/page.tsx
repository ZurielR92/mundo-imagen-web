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


const LlaverosPage = () => {

    const list: IProduct[] = []
    const FAQs:{ask:string, response:string}[]=[]
  
    
    categoriesList.find(cat => {
      if (cat.code === '0602') {
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
        
        <TitlePage title='Llaveros Personalizados en Medellín'>
            <Link href={'/'}>Inicio</Link> • <Link href={ '/servicios' } >Servicios</Link> • <Link href={ '/servicios/promocionales' }>Promocionales</Link>
        </TitlePage>

        <Section colorClipTop={'resalt'} invert style={{ paddingTop:100, paddingBottom:100 }} colorClipBottom='dark'>

            <ProductsGrid
                subtitle='¿Que tipo de llaveros necesito para mi empresa?'
                title='Conoce nuestra variedad de Llaveros'
                products={list}
            />

        </Section>

        </>
    )
}

export default LlaverosPage