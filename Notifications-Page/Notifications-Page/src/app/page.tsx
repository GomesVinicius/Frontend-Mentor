import Notification from './components/notification'

import ImageName from '../assets/avatar-mark-webber.webp'

export default function Home() {
  return (
    // bg-gray-300
    <main className="bg-gray-900 h-screen flex justify-center items-center">
      {/* bg-white */}
      <div className="bg-gray-500 h-[54rem] w-[50rem] rounded-xl">
        <div className="flex justify-between items-center m-8">
          <p className="text-black font-bold">Notifications 3</p>
          <p className="text-black">Mark all read</p>
        </div>

        <div className="m-8 flex justify-between items-start flex-col h-full">
          <Notification
            name="Mark Weber"
            action="reacted to your recent posto"
            message="My first tournament today!"
            image={ImageName}
          />
        </div>
      </div>
    </main>
  )
}
