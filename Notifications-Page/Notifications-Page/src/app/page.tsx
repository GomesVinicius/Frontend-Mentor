export default function Home() {
  return (
    <main className="bg-gray-300 h-screen flex justify-center items-center">
      <div className="bg-white h-[54rem] w-[50rem] rounded-xl">
        <div className="flex justify-between items-center m-8">
          <p className="text-black font-bold">Notifications 3</p>
          <p className="text-black">Mark all read</p>
        </div>

        <div className="m-8 flex justify-between items-start flex-col h-full">
          <p className="text-black">1</p>
          <p className="text-black">1</p>
          <p className="text-black">1</p>
          <p className="text-black">1</p>
          <p className="text-black">1</p>
        </div>
      </div>
    </main>
  )
}
