"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

import { useCurrent } from "@/features/auth/api/useCurrent"

export default function Home() {
  const router = useRouter()
  const { data, isLoading } = useCurrent()

  useEffect(() => {
    if (!data && !isLoading) {
      router.push('/signin')
    } 
  }, [data])

  return (
    <div>
      Home Page
      Only visible to authorized user
    </div>
  )
}