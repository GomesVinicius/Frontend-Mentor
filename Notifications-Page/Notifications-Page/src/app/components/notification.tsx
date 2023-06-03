import React from 'react'

import Image, { StaticImageData } from 'next/image'

interface NotificationProps {
  image: StaticImageData
  name: string
  action: string
  message: string
}

const Notification: React.FC<NotificationProps> = (
  props: NotificationProps,
) => {
  return (
    // bg-blue-200
    <div className="bg-blue-200 flex h-[5rem] w-[46rem] justify-start items-center rounded">
      <Image
        src={props.image}
        alt="All Right"
        height={48}
        width={48}
        className="ml-6 mr-4"
      />
      <div className="flex gap-2">
        <div className="">
          <p className="text-blue-700 font-bold">{props.name}</p>
          <p className="text-blue-600">1m ago</p>
        </div>
        <p className="text-blue-700">{props.action}</p>
        <p className="text-blue-600 font-extrabold">{props.message}</p>
        <p className="mt-2 rounded-full w-2 h-2 bg-red-400"></p>
      </div>
    </div>
  )
}

export default Notification
