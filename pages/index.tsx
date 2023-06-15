import { Inter } from 'next/font/google'
import Movvie from './Movvie';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Movvie/>
    </>
  )
}
