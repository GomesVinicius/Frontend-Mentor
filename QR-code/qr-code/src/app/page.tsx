import Image from "next/image"
import qrCodeImage from './assets/image-qr-code.png'

import { Outfit } from 'next/font/google'

const outfit = Outfit({ subsets: ['latin'], weight: ['400', '700'] })

export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen w-screen bg-blue-200">
      <div className="bg-white w-96 h-[36rem] rounded-3xl flex justify-start items-center flex-col pt-5 pl-5 pr-5 text-center">
        <Image src={qrCodeImage} alt="" className="rounded-2xl"/>

        <p className={`${outfit.className} font-bold text-3xl mt-4 text-[#1f3251]`}>Improve your front-end skills by building projects</p>
        <br />
        <p className={`${outfit.className} font-extralight text-base text-[#7b879d]`}>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
      </div>
    </main>
  )
}
