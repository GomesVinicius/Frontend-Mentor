import Image from 'next/image'

import React from 'react'
import facebook from './assets/icon-facebook.svg'
import pinterest from './assets/icon-pinterest.svg'
import twitter from './assets/icon-twitter.svg'

interface TooltipProps {
    visible: Boolean
}

const Tooltip: React.FC<TooltipProps> = (props: TooltipProps) => {
    return (
        <>
            {
                props.visible ?
            <div
                className="bg-blue-600 w-72 h-14 absolute mb-36 flex justify-center items-center p-9 rounded-xl">
                <div className="text-white font-thin text-sm pr-10">S H A R E</div>
                <div className="border-solid border-t-[#48556A] border-t-8 border-x-transparent border-x-8 border-b-0 mt-20"></div>
                <div className="flex justify-between items-center">
                    <Image className="mr-4 cursor-pointer" src={facebook} alt='' />
                    <Image className="mr-4 cursor-pointer" src={twitter} alt='' />
                    <Image className="cursor-pointer" src={pinterest} alt='' />
                </div>
            </div> : <div></div>
            }
        </>
    )
}

export default Tooltip
