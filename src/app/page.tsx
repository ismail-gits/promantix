import { getCurrent } from "@/features/auth/actions"
import { UserButton } from "@/features/auth/components/userButton"
import { redirect } from "next/navigation"

export default async function Home() {
  const user = getCurrent()

  if (!user) {
    redirect('signin')
  }

  return (
    <div>
      <UserButton/>
    </div>
  )
}