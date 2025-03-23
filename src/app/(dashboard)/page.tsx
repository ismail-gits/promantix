import { redirect } from "next/navigation"

import { getCurrent } from "@/features/auth/actions"
import { UserButton } from "@/features/auth/components/userButton"

export default async function DashboardPage() {
  const user = await getCurrent()

  if (!user) {
    redirect('/signin')
  }

  return (
    <div>
      <UserButton/>
    </div>
  )
}