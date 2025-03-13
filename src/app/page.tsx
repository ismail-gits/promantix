"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

import { useCurrent } from "@/features/auth/api/useCurrent"
import { Button } from "@/components/ui/button"
import { useSignout } from "@/features/auth/api/useSignout"

export default function Home() {
  const router = useRouter()
  const { data, isLoading } = useCurrent()
  const { mutate } = useSignout()

  useEffect(() => {
    if (!data && !isLoading) {
      router.push('/signin')
    } 
  }, [data])

  return (
    <div>
      <Button onClick={() => mutate()}>
        Signout
      </Button>
    </div>
  )
}