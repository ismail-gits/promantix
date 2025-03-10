"use client"

import Image from "next/image"
import { usePathname } from "next/navigation"
import Link from "next/link"

import { Button } from "@/components/ui/button"

interface AuthLayoutProps {
  children: React.ReactNode
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  const pathName = usePathname()
  const isSignIn = pathName === '/signin'

  return (
    <main className="bg-neutral-100 min-h-screen">
      <div className="mx-auto max-w-screen-2xl p-4">
        <nav className="flex justify-between items-center">
          <Image src={"/promantix-logo-3.png"} height={56} width={152} alt="logo"/>
          <Button asChild variant={"secondary"}>
            <Link href={isSignIn ? '/signup' : '/signin'}>
              {isSignIn ? "Sign Up" : "Sign In"}
            </Link>
          </Button>
        </nav>
        <div className="flex flex-col justify-center items-center p-4 md:pt-14">
          {children}
        </div>
      </div>
    </main>
  )
}