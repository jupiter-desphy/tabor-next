import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Tabor Barber Shop',
  description: 'by 3rd and 4th generation father and son barbers',
  themeColor: 'black',
  keywords: ['Barber shop', 'barber', 'shave', 'haircut', 'salon', 'straight razor shave', 'best Portland barbers']
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        <div>
          {children}
        </div>
      </body>
    </html>
  )
}
