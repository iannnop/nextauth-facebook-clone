import Image from "next/image"
import { BellIcon, ChatIcon, HomeIcon, UserGroupIcon, ViewGridIcon, ChevronDownIcon } from "@heroicons/react/solid"
import { FlagIcon, PlayIcon, SearchIcon, ShoppingCartIcon } from "@heroicons/react/outline"
import { useSession, signOut } from "next-auth/react"

interface HeaderIconProps {
  Icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element
}

const Header = () => {
  const { data } = useSession();

  const profilePicture: string = data?.user?.image!

  return (
    <div className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">
      <div className="flex items-center">
        <Image width={48} height={48} layout="fixed" src="/icons/facebook.svg" alt="facebook logo"/>
        <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
          <SearchIcon className="h-6 text-gray-600" />
          <input className="hidden md:inline-flex ml-2 bg-transparent outline-none placeholder-gray-500 flex-shrink" type="text" placeholder="Search Facebook" />
        </div>
      </div>

      <div className="flex justify-center flex-grow">
        <div className="flex space-x-6 md:space-x-2">
          <HeaderIcon Icon={HomeIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>

      <div className="flex items-center sm:space-x-2 justify-end">
        
        { data && data.user &&
          <Image onClick={() => signOut()} className="rounded-full cursor-pointer" src={profilePicture} alt="profile picture" width={40} height={40} layout="fixed" />
        }

        <p className="whitespace-nowrap font-semibold pr-3">{data?.user?.name!}</p>
        <ViewGridIcon className="icon" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <ChevronDownIcon className="icon" />
      </div>
    </div>
  )
}

export default Header

function HeaderIcon ({ Icon }: HeaderIconProps) {
  return (
    <div className="flex items-center rounded-xl cursor-pointer md:px-10 sm:h-14 md:hover:bg-gray-100 active:border-b-2 active:border-blue-500 group">
      <Icon className="h-5 sm:h-7 mx-auto text-center text-gray-500 group-hover:text-blue-500"/>
    </div>
  )
}