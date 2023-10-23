import { FC, ReactNode, useContext } from 'react'
import styles from './LayoutMain.module.scss'
import { Header } from '../Header';
import { Footer } from '../Footer';
import { ChatWidget } from '../MaterialZ/ChatWidget';
import Head from 'next/head';
import { CartMenu } from '../CartMenu';
import { CartIcon } from '../MaterialZ/Icons';

interface Props {
    children: ReactNode
}

export const LayoutMain: FC<Props> = ( { children } ) => {



  return (
    <>
      <Head>
        <title>Impulso Publicitario</title>
        <meta name="description" content="Expertos en la producción de todo tipo de material publicitario impreso" />
        <link rel="icon" href="/icon_impulso.png" />

        <meta property='og:title' content='Impulso Publicitario'/>
        <meta property='og:description' content='Agencia de Publicidad en la ciudad de Santiago, ¡Tu marca en las mejores manos!'/>
        <meta property='og:url' content='https://impulsopublicitario.cl' />
        <meta property="og:type" content="website" />
      </Head>

    <Header/>
    <CartMenu/>
    <main>
      { children }
    </main>
    <ChatWidget/>
    <Footer/>

    </>
  )
}