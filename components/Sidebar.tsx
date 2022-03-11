import { useSession } from "next-auth/react"

const Sidebar = () => {
  const { data } = useSession();
  return (
    <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px]">
      Sidebar Menu
    </div>
  )
}

export default Sidebar