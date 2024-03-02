'use client'
import { FC } from 'react'
import { ICategory } from '../../../interfaces'
import { CategoriesCard } from '../../Categories/CategoriesCard'
import { Section } from '../../Section'
import { TitleSection } from '../../TitleSection'
import {Variants, motion} from 'framer-motion'

//Importacion de estilos
import styles from './CategoriesSection.module.scss'

//Propiedades que recibe el componente
interface Props {
    categories: ICategory[]
}

const container: Variants = {
    hidden: {
        opacity:0,
        scale:0
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.2,
            staggerChildren: 0.1
        }
    }
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

const contar = " d1, telemedellin, teleantioquia, alumina, laminaire, municipio sabaneta, mun caldas, mun barbosa, mun girardota, plaza mayor, gorbarnacion antioquia, mana,"


export const CategoriesSection:FC<Props> = ({ categories }) => {
    return (
        <>
        <Section invert style={{padding:'100px 0'}} colorClipTop={'primary'} colorClipBottom='resalt' >
            <TitleSection title={<>ALGUNOS DE <strong> NUESTROS PRODUCTOS</strong></>} subtitle='Conoce nuestro amplio catalogo'/>
            <motion.div
                variants={ container } 
                className={ styles.grid }
                initial='hidden'
                whileInView='visible'
                viewport={{
                    once:true,
                    margin:'50px 0px'
                }}
            >
                {
                    categories.map( category => {
                        return (
                            <CategoriesCard category={ category } key={ category.code }/>
                        )
                    } )
                }
            </motion.div>
        </Section>
        </>
    )

}