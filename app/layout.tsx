import ClientOnly from './components/ClientOnly'

import RegisterModal from './components/modals/RegisterModal'
import LoginModal from './components/modals/LoginModal'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import './globals.css'
import { Nunito } from 'next/font/google'
import ToasterProvider from './providers/ToasterProvider'
import getCurrentUser from './actions/getCurrentUser'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'Arbolista',
  description: 'Catalogo de Especies de Plantas Nativas de Guayaquil, Ecuador',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={nunito.className}>
        <ClientOnly>
          <ToasterProvider />
          <RegisterModal />
          <LoginModal />
        </ClientOnly>
        <Header currentUser={currentUser}/>
        <div className='my-auto'>{children}</div>
        <Footer />
      </body>
    </html>
  )
}
