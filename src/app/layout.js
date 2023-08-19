import './globals.css'
import { Yanone_Kaffeesatz, Zilla_Slab, Oswald, Assistant, Space_Grotesk } from 'next/font/google'

import { Providers } from './GlobalRedux/provider'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

const inter = Space_Grotesk({ subsets: ['latin'], weight: ['400'] })

export const metadata = {
  title: 'The Concerto',
  description: 'about culture and city',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
