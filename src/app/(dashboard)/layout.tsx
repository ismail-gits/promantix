
interface dashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: dashboardLayoutProps) {
  return (
    <div>
      {children}
    </div>
  )
}