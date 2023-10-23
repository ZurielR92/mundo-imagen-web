import { FC } from 'react'
import { ICategory } from '../../../interfaces'
import { CategoriesCard } from '../../Categories/CategoriesCard'
import { TitleSection } from '../../TitleSection'

//Importacion de estilos
import styles from './ThirdSection.module.scss'

//Propiedades que recibe el componente
interface Props {
    categories: ICategory[]
}


export const ThirdSection:FC<Props> = ({ categories }) => {
    return (
        <div className={ styles.thirdsection }>
            <div className={ styles.clip1 }></div>
            <div className={ styles.clip2 }></div>
            <div className={ styles.content }>
                <TitleSection title='Algunos de Nuestros Productos' subtitle='Conoce nuestro amplio catalogo' />
                <div className={ styles.grid }>

                    {
                        categories.map( categorie => {
                            return (
                                <CategoriesCard category={ categorie } key={ categorie.code }/>
                            )
                        } )
                    }

                </div>
            </div>
        </div>
    )

}