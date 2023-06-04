import React from 'react'

import Image, { StaticImageData } from 'next/image'

interface NotificationProps {
  image: StaticImageData
  name: string
  timeEvent: string
  action: string
  origin?: string
  read: boolean
  message?: string
  imageReacted?: StaticImageData
  group?: boolean
}
const Notification: React.FC<NotificationProps> = (
  props: NotificationProps,
) => {
  return (
    <div
      className={`${
        props.read ? 'bg-white' : 'bg-blue-100'
      } flex h-min-[12rem] w-[46rem] justify-start items-start rounded pt-4 pb-4`}
    >
      <Image
        src={props.image}
        alt="All Right"
        height={48}
        width={48}
        className="ml-6 mr-4"
      />
      <div className="flex justify-between items-center w-full">
        <div className="flex justify-start items-start gap-1 flex-col">
          <div className="flex justify-start items-start gap-1">
            <p>
              <span className="text-blue-700 font-black">{props.name}</span>{' '}
              <span className="text-blue-600 font-medium">{props.action}</span>{' '}
              <span
                className={`${
                  props.group ? 'text-blue-900' : 'text-blue-600'
                } font-extrabold`}
              >
                {props.origin}
              </span>
            </p>
            {props.read ? null : (
              <p className="mt-[0.6rem] rounded-full w-2 h-2 bg-red-400"></p>
            )}
          </div>
          <p className="text-blue-500 font-medium">{props.timeEvent}</p>
          {props.message ? (
            <div className="border-[1px] p-4 border-blue-300 rounded">
              <p className="text-blue-600 font-medium">{props.message}</p>
            </div>
          ) : null}
        </div>
        {/* Imagem a direita */}
        {props.imageReacted ? (
          <Image
            src={props.imageReacted}
            alt="Chess Image"
            height={48}
            width={48}
            className="right-0"
          />
        ) : null}
      </div>
    </div>
  )
}

export default Notification
