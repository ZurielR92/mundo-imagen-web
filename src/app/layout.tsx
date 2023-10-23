import type { Metadata } from 'next'
import { Inter, Rubik, Pacifico } from 'next/font/google'
import './globals.css'
import { Header } from '@/Components'
import { ContextWrapper } from '@/context'
import { Footer } from '@/Components/Footer'
import { ChatWidget } from '@/Components/MaterialZ/ChatWidget'
import { CartMenu } from '@/Components/CartMenu'

const inter = Inter({ subsets: ['latin'] })
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
  title: 'Mundo Imagen | Litografía en Medellín',
  manifest:'/manifest.json',
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
