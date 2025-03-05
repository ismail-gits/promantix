"use client"

import { DottedSeparator } from "@/components/dotted-separator"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export const SignInCard = () => {
  const [ email, setEmail ] = useState("")
  const [ password, setPassword ] = useState("")

  return (
    <Card className="w-full h-full md:w-[487px] border-none shadow-none">
      <CardHeader className="flex items-center justify-center text-center">
        <CardTitle className="text-2xl">
          Welcome Back!
        </CardTitle>
      </CardHeader>
      <div className="px-7 mb-2">
        <DottedSeparator/>
      </div>
      <CardContent>
        <form className="space-y-4">
          <Input
             required
             type="email"
             value={email}
             onChange={(e) => {
              setEmail(e.target.value)
             }}
             placeholder="Enter your email"
             disabled={false}
          />
          <Input
             required
             type="password"
             value={password}
             onChange={(e) => {
              setPassword(e.target.value)
             }}
             placeholder="Enter your password"
             disabled={false}
             min={8}
             max={256}
          />
          <Button
            disabled={false}
            size="lg"
            className="w-full"
          >
            Login
          </Button>
        </form>
      </CardContent>
      <div className="px-7">
        <DottedSeparator/>
      </div>
      <CardContent className="p-7 flex flex-col space-y-4">
        <Button
          variant={"secondary"}
          disabled={false}
          size={"lg"}
          className="w-full"
        >
          Login with Google
        </Button>
        <Button
          variant={"secondary"}
          disabled={false}
          size={"lg"}
          className="w-full"
        >
          Login with Github
        </Button>
      </CardContent>
    </Card>
  )
}