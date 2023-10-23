import Image from 'next/image'
import { FC } from 'react'
import { ContainerObserved, FlipCard } from '../../MaterialZ'
import { TitleSection } from '../../TitleSection'

//Importacion de estilos
import styles from './SecondSection.module.scss'

//Propiedades que recibe el componente
interface Props {
}


export const SecondSection:FC<Props> = () => {
    return (
        <div className={ styles.secondsection }>
            <div className={ styles.clip }></div>
            <div className={ styles.clip2 }></div>

            <div className={ styles.content }>

                <TitleSection title='¿Por que nosotros?' subtitle='¿Necesitas un proveedor de material publicitario?'/>

                <div className={ styles.grid }>
                    <FlipCard className={ styles.flipcard }>
                    <div>
                        <div>
                          <Image src={ '/img/menu/publicidad_impresa_banner_1.png' } fill alt=''/>
                        </div>
                        <div>
                          <h3>Calidad Garantizada</h3>
                        </div>
                    </div>
                    <div>
                        <strong>Calildad Garantizada</strong>
                        <p>
                        Un excelente equipo de profesionales y tecnología de última generación garantizan la máxima calidad de nuestro servicio.
                        </p>
                    </div>
                  </FlipCard>
                  <FlipCard className={ styles.flipcard }>
                    <div>
                      <div>
                        <Image src={ '/img/menu/papeleria_comercial_banner_1.png' } fill alt=''/>
                      </div>
                      <div>
                        <h3>Rapidez y Eficacia</h3>
                      </div>
                    </div>
                    <div>
                        <strong>Rapidez y Eficacia</strong>
                        <p>
                        ¿Para cuando lo necesitas? Entendemos tus urgencias y nos adaptamos a tus necesidades. Consúltanos.
                        </p>
                    </div>
                  </FlipCard>
                  <FlipCard className={ styles.flipcard }>
                    <div>
                      <div>
                        <Image src={ '/img/menu/impresion_laser_banner_1.png' } fill alt=''/>
                      </div>
                      <div>
                        <h3>Precios Económicos</h3>
                      </div>
                    </div>
                    <div>
                        <strong>Precios Económicos</strong>
                        <p>
                        Echa un vistazo a nuestros precios, y comprobarás lo competitivos que son en cualquiera de los productos.
                        </p>
                    </div>
                  </FlipCard>
                  <FlipCard className={ styles.flipcard }>
                    <div>
                      <div>
                        <Image src={ '/img/menu/publicidad_exterior_banner_1.png' } fill alt=''/>
                      </div>
                      <div>
                        <h3>Trato Personalizado</h3>
                      </div>
                    </div>
                    <div>
                        <strong>Trato Personalizado</strong>
                        <p>
                        Trabajamos de forma flexible y personalizada, ajustándonos en cada momento a tus necesidades.
                        </p>
                    </div>
                  </FlipCard>
                  <FlipCard className={ styles.flipcard }>
                    <div>
                        <div>
                          <Image src={ '/img/menu/diseno_grafico_banner_1.png' } fill alt=''/>
                        </div>
                        <div>
                          <h3>Seriedad y Experiencia</h3>
                        </div>
                    </div>
                    <div>
                        <strong>Seriedad y Experiencia</strong>
                        <p>
                        Más de 5 años de experiencia en el sector de las artes gráficas. Todos los trabajos se realizan íntegramente en nuestros talleres.
                        </p>
                    </div>
                  </FlipCard>
                  <FlipCard className={ styles.flipcard }>
                    <div>
                      <div>
                        <Image src={ '/img/menu/gran_formato_banner_1.png' } fill alt=''/>
                      </div>
                      <div>
                        <h3>Envíos Nacionales</h3>
                      </div>
                    </div>
                    <div>
                        <strong>Envíos Nacionales</strong>
                        <p>
                        Para todos tus pedidos en la web el envío a cualquier punto de Chile te saldrá gratuito.
                        </p>
                    </div>
                  </FlipCard>
                </div>
            </div>





            {/* <div className={ styles.clip }></div>
            <div className={ styles.clip2 }></div>
            <div className={ styles.content }>
                <div className={ styles.grid }>
                  <FlipCard className={ styles.flipcard }>
                    <div>Hola</div>
                    <div>chao</div>
                  </FlipCard>
                  <FlipCard className={ styles.flipcard }>
                    <div>Hola</div>
                    <div>chao</div>
                  </FlipCard>
                  <FlipCard className={ styles.flipcard }>
                    <div>Hola</div>
                    <div>chao</div>
                  </FlipCard>
                  <FlipCard className={ styles.flipcard }>
                    <div>Hola</div>
                    <div>chao</div>
                  </FlipCard>
                  <FlipCard className={ styles.flipcard }>
                    <div>Hola</div>
                    <div>chao</div>
                  </FlipCard>
                  <FlipCard className={ styles.flipcard }>
                    <div>Hola</div>
                    <div>chao</div>
                  </FlipCard>
                </div>

            </div> */}
        </div>
    )

}