import { Sidebar } from "@/components/Sidebar"

interface dashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: dashboardLayoutProps) {
  return (
    <div className="min-h-screen">
      <div className="flex w-full h-full">
        <div className="fixed left-0 top-0 hidden lg:block lg:w-[264px] h-full overflow-y-auto">
          <Sidebar/>
        </div>
        <div className="lg:pl-[264px]">
          <div className="mx-auto max-w-screen-2xl h-4">
            {/* TODO: NavBar */}
            <main className="h-full py-8 px-6 flex flex-col">
              {children} 
            </main>
          </div>
        </div>
      </div>
    </div>
  )
}