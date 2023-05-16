import ClientOnly from './components/ClientOnly'

import RegisterModal from './components/modals/RegisterModal'

import Navbar from './components/navbar/Navbar'
import './globals.css'
import { Nunito } from 'next/font/google'
import ToasterProvider from './providers/ToasterProvider'


const nunito = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'Arbolista',
  description: 'Catalogo de Especies de Plantas Nativas de Guayaquil, Ecuador',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <ClientOnly>
          <ToasterProvider />
          <RegisterModal />
          <Navbar />
        </ClientOnly>
        {children}
        
      </body>
    </html>
  )
}
