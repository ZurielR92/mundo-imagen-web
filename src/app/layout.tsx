import type { Metadata } from 'next'
import { Inter, Rubik, Pacifico } from 'next/font/google'
import './globals.css'
import { ContextWrapper } from '@/context'
import { Footer } from '@/Components/Footer'
import { ChatWidget } from '@/Components/MaterialZ/ChatWidget'
import { CartMenu } from '@/Components/CartMenu'
import Header from '@/Components/Header'

const rubik = Rubik({
  subsets:['latin'],
  display:'swap',
  variable: '--font-rubik'
})
const pacifico = Pacifico({
  subsets:['latin'],
  display:'swap',
  variable:'--font-pacifico',
  weight:['400']
})

export const metadata: Metadata = {
  title: 'Litografía en Medellín | Mundo Imagen Publicidad',
  description: 'Ofrecemos servicios de litografía y publicidad en Medellín. Impresión de calidad, diseño gráfico y soluciones publicitarias para tu negocio. ¡Contáctanos hoy!',
  themeColor:'#fff',
  icons:{
    apple:'/icon-512x512.png',
    icon: {
      url: "/favicon.png",
      type: "image/png",
    },
    shortcut: { url: "/favicon.png", type: "image/png" },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html lang="es">
      <body className={`${rubik.variable} ${pacifico.variable}`}>
        <ContextWrapper>
          <Header/>
          <CartMenu/>
          {children}
          <ChatWidget/>
          <Footer/>
        </ContextWrapper>
      </body>
    </html>
  )
}
