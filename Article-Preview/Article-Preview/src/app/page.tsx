import Image from "next/image"

import avatar from './assets/avatar-michelle.jpg'
import drawers from './assets/drawers.jpg'
import share from './assets/icon-share.svg'

export default function Home() {


  return (
    <main className="flex justify-center items-center h-screen bg-gray-200">
      <div className="flex w-[58rem] h-[22rem]">
        <Image style={{objectFit: "cover"}} src={drawers} alt="" className="w-96 rounded-l-2xl" />
        <div className="bg-white h-full rounded-r-2xl flex justify-between items-center flex-col p-12">
          <div className="font-bold text-2xl text-gray-600">Shift the overall look and feel by adding these wonderful touches to furniture in your home</div>
          <div className="font-normal text-gray-400">Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. Ive got some simple tips to help you make any room feel complete.</div>
          <div className="flex justify-between items-center w-full">
            <div className="flex justify-between items-center">
              <Image src={avatar} alt="" className="h-10 w-10 rounded-3xl" />
              <div className="flex flex-col h-full w-full">
                <div className="pl-4 text-gray-600 font-bold">Michelle Appleton</div>
                <div className="pl-4 text-gray-400">28 Jun 2020</div>
              </div>
            </div>
            <div className="bg-gray-200 rounded-3xl w-10 h-10 flex items-center justify-center pb-1">
              <Image className="self-center" src={share} alt="" width={20} height={20}/>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
