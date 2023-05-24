import ClientOnly from './components/ClientOnly'

import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import ToasterProvider from './providers/ToasterProvider'
import './globals.css'
import { nunito } from '@/app/styles/font'

import getCurrentUser from './actions/getCurrentUser'



export const metadata = {
  title: 'Arbolista',
  description: 'Catalogo de Especies de Plantas Nativas de Guayaquil, Ecuador',
  charSet: 'utf-8',
  icon: '/favicon.ico',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang='es'>
      <body className={nunito.className}>
        <ClientOnly>
          <ToasterProvider />
        </ClientOnly>
        <Header currentUser={currentUser}/>
        <div className='my-auto'>{children}</div>
        <ClientOnly>
          <Footer />
        </ClientOnly>
      </body>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.js" async></script>
    </html>
  )
}
