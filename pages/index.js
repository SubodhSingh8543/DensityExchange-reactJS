import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Greeting from '@/Components/greeting'
import RotatingBoxes from '@/Components/motionIcons'
import ChangeDivSize from '@/Components/changingmobiledivsize'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
     <Greeting/>

     <RotatingBoxes/>

     {/* <ChangeDivSize/> */}
    </>
  )
}
