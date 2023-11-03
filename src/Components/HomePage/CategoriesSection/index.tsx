import { FC } from 'react'
import { ICategory } from '../../../interfaces'
import { CategoriesCard } from '../../Categories/CategoriesCard'
import { Section } from '../../Section'
import { TitleSection } from '../../TitleSection'

//Importacion de estilos
import styles from './CategoriesSection.module.scss'

//Propiedades que recibe el componente
interface Props {
    categories: ICategory[]
}


export const CategoriesSection:FC<Props> = ({ categories }) => {
    return (
        <>
        <Section invert style={{padding:'100px 0'}} colorClipTop={'primary'} colorClipBottom='resalt' >
            <TitleSection title={<>Algunos de nuestros <strong>Productos</strong></>} subtitle='Conoce nuestro amplio catalogo'/>
            <div className={ styles.grid }>
                {
                    categories.map( category => {
                        return (
                            <CategoriesCard category={ category } key={ category.code }/>
                        )
                    } )
                }
            </div>
        </Section>
        </>
    )

}