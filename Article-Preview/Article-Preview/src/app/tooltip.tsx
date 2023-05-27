import Image from 'next/image'

import facebook from './assets/icon-facebook.svg'
import pinterest from './assets/icon-pinterest.svg'
import twitter from './assets/icon-twitter.svg'

export default function Tooltip() {
    return (
        <div className="bg-blue-600 w-72 h-14 absolute mb-36 flex justify-center items-center p-9 rounded-xl">
            <div className="text-white font-thin text-sm pr-10">S H A R E</div>
            <div className="flex justify-between items-center">
                <Image className="mr-4" src={facebook} alt='' />
                <Image className="mr-4" src={twitter} alt='' />
                <Image src={pinterest} alt='' />
            </div>

            {/* <div className="w-10 h-10 border-8 border-t-0 border-b-8 bg-blue-900"></div> */}
        </div>
    )
}
