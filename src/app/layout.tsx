import type { Metadata } from 'next'
import { Inter, Rubik, Pacifico } from 'next/font/google'
import './globals.css'
import { ContextWrapper } from '@/context'
import { Footer } from '@/Components/Footer'
import { ChatWidget } from '@/Components/MaterialZ/ChatWidget'
import { CartMenu } from '@/Components/CartMenu'
import Header from '@/Components/Header'
import Head from 'next/head'
import Script from 'next/script'

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
      <Script strategy='beforeInteractive' src='https://www.googletagmanager.com/gtag/js?id=AW-11403069413'/>
      <Script id='google-tag' strategy='afterInteractive'>
        {
          `
            window.dataLayer = window.dataLayer || [];
            function gtag(){ window.dataLayer.push(arguments)}
            gtag('js', new Date());
            gtag('config', 'AW-11403069413');

            function gtag_report_conversion(url) {
              var callback = function () {
                if (typeof(url) != 'undefined') {
                  window.location = url;
                }
              };
              gtag('event', 'conversion', {
                  'send_to': 'AW-11403069413/8fIZCPHSp_UYEOWPtL0q',
                  'event_callback': callback
              });
              return false;
            }
          `
        }

      </Script>
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
