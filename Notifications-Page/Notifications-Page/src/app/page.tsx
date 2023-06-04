import Notification from './components/notification'

import AngelaGray from '../assets/avatar-angela-gray.webp'
import AnnaKim from '../assets/avatar-anna-kim.webp'
import JacobThompson from '../assets/avatar-jacob-thompson.webp'
import KimberlySmith from '../assets/avatar-kimberly-smith.webp'
import MarkWebber from '../assets/avatar-mark-webber.webp'
import NathanPeterson from '../assets/avatar-nathan-peterson.webp'
import RizkyHasanuddin from '../assets/avatar-rizky-hasanuddin.webp'
import PlayingChess from '../assets/image-chess.webp'

export default function Home() {
  return (
    <main className="bg-blue-100 h-screen flex justify-center items-center">
      <div className="bg-white h-[52rem] w-[50rem] rounded-xl">
        <div className="flex justify-between items-center m-8">
          <p className="text-black font-black text-2xl">
            Notifications{' '}
            <span className="bg-blue-900 pl-3 pr-3 pt-[0.1rem] pb-[0.1rem] rounded text-white font-black text-base">
              3
            </span>
          </p>
          <p className="text-blue-600 font-medium">Mark all as read</p>
        </div>
        <div className="m-8 flex justify-items-start gap-2 items-start flex-col h-auto">
          <Notification
            image={MarkWebber}
            name="Mark Webber"
            timeEvent="1m ago"
            action="reacted to your recent posto"
            origin="My first tournament today!"
            read={false}
          />
          <Notification
            image={AngelaGray}
            name="Angela Gray"
            timeEvent="5m ago"
            action="followed you"
            read={false}
          />
          <Notification
            image={JacobThompson}
            name="Jacob Thompson"
            timeEvent="1 day ago"
            action="has joined your group"
            origin="Chess Club"
            read={false}
            group={true}
          />
          <Notification
            image={RizkyHasanuddin}
            name="Rizky Hasanuddin"
            timeEvent="5 day ago"
            action="sent you a private message"
            message="Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game."
            read={true}
          />
          <Notification
            image={KimberlySmith}
            name="Kimberly Smith"
            timeEvent="1 week ago"
            action="commented on your picture"
            imageReacted={PlayingChess}
            read={true}
          />
          <Notification
            image={NathanPeterson}
            name="Nathan Peterson"
            timeEvent="2 week ago"
            action="reacted to your recent post"
            origin="5 end-game strategies to increase your win rate"
            read={true}
          />
          <Notification
            image={AnnaKim}
            name="Anna Kim"
            timeEvent="2 week ago"
            action="left the group"
            origin="Chess Club"
            read={true}
            group={true}
          />
        </div>
      </div>
    </main>
  )
}
