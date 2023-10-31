'use client'
import { FC, ReactNode } from 'react'
import styles from './LayoutMain.module.scss'
import { Footer } from '../Footer';
import { ChatWidget } from '../MaterialZ/ChatWidget';
import { CartMenu } from '../CartMenu';
import dynamic from 'next/dynamic';
import  HeaderFallback from '../HeaderFallback/HeaderFallback';

interface Props {
    children: ReactNode
}

export const LayoutMain: FC<Props> = ( { children } ) => {

  const Header = dynamic(()=> import('../../Components/Header'),{
    loading: ()=> <HeaderFallback/>
  })

  return (
    <>

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