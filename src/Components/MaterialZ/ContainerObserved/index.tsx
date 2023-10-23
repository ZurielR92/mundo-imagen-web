'use client'

import { FC, ReactNode, useEffect, useRef, useState } from 'react'

//Importacion de estilos
import styles from './ContainerObserved.module.scss'

//Propiedades que recibe el componente
interface Props {
    children?: ReactNode
    rootMarginTop?: number
    rootMarginBottom?: number
    effect?: effects
    className?: string
}

type effects = 'Fade In' | 'Fade In Left' | 'Fade In Right' | 'Fade In Top' | 'Fade in Bottom'

const getEffect = ( effect:effects | undefined ) => {
    switch (effect) {
        case 'Fade In':
            return styles.fade_in
        case 'Fade In Left':
            return styles.fade_in_left
        case 'Fade In Right':
            return styles.fade_in_right
        case 'Fade In Top':
            return styles.fade_in_top
        case 'Fade In Top':
            return styles.fade_in_bottom
        default:
            return styles.fade_in
    }
}


export const ContainerObserved:FC<Props> = (
    {
        children,
        rootMarginTop=90, 
        rootMarginBottom=90,
        effect,
        className
    }
) => {

    const [stuck, setStuck] = useState(false)
    const ref = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const cachedRef:any = ref.current
        const observer = new IntersectionObserver(
          ([e]) => setStuck(e.intersectionRatio < 1),
          { 
            threshold: [1], 
            rootMargin: `${ rootMarginTop }px 200px ${ rootMarginBottom }px 200px` }
        )
        observer.observe(cachedRef)
        return () => observer.unobserve(cachedRef)
      }, [ref])

    return (
        <div 
            ref={ref} 
            className={ `
                ${ className }
                ${ styles.containerobserved } 
                ${ getEffect( effect ) }
                ${ !stuck && styles.active }` 
            }
        >
            { children }
        </div>
    )

}