import Image from 'next/image'
import { Inter } from 'next/font/google'
import Login from '@/components/login'
import Product from "@/components/product";
import Register from '@/components/register';
import Movvie from './Movvie';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      {/* <Login/> */}
      {/* <Product/> */}
      {/* <Register/> */}
      <Movvie/>
    </>
  )
}
