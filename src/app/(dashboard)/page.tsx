import { redirect } from "next/navigation"

import { getCurrent } from "@/features/auth/actions"
import { CreateWorkspaceForm } from "@/features/workspaces/components/createWorkspaceForm"

export default async function DashboardPage() {
  const user = await getCurrent()

  if (!user) {
    redirect('/signin')
  }

  return (
    <div className="bg-neutral-500 p-4">
      <CreateWorkspaceForm/>
    </div>
  )
}