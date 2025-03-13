"use client"

import { Loader } from "lucide-react"

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

import { DottedSeparator } from "@/components/dotted-separator"

import { useSignout } from "../api/useSignout"
import { useCurrent } from "../api/useCurrent"

export const UserButton = () => {
  const { data: user, isLoading } = useCurrent()

  if (isLoading) {
    return (
      <div className="size-10 rounded-full flex items-center justify-center bg-neutral-200 border border-neutral-300">
        <Loader className="size-4 animate-spin text-muted-foreground"/>
      </div>
    )
  }

  if (!user) {
    return null
  }

  const { name, email } = user

  const avatarFallback = name
    ? name.charAt(0).toUpperCase()
    : email.charAt(0).toUpperCase() ?? "U"

  return (
    <Avatar>
      <AvatarFallback>
        {avatarFallback}
      </AvatarFallback>
    </Avatar>
  )
}