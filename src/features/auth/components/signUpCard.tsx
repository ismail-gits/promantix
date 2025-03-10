"use client"

import { useState } from "react"
import { FcGoogle } from "react-icons/fc"
import { FaGithub } from "react-icons/fa"
import Link from "next/link"

import { DottedSeparator } from "@/components/dotted-separator"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export const SignUpCard = () => {
  const [ email, setEmail ] = useState("")
  const [ password, setPassword ] = useState("")
  const [ name, setName ] = useState("")

  return (
    <Card className="w-full h-full md:w-[487px] border-none shadow-none">
      <CardHeader className="flex items-center justify-center text-center">
        <CardTitle className="text-2xl">
          Welcome Back!
        </CardTitle>
        <CardDescription>
          By signing up, you agree to our {" "}
          <Link href={'/privacy'}>
            <span className="text-blue-700">Privacy Policy</span>
          </Link>{" "}
          and {" "}
          <Link href={"/terms"}>
            <span className="text-blue-700">Terms of Service</span>
          </Link>
        </CardDescription>
      </CardHeader>
      <div className="px-7 mb-2">
        <DottedSeparator/>
      </div>
      <CardContent>
        <form className="space-y-4">
          <Input
             required
             type="name"
             value={name}
             onChange={(e) => {
              setName(e.target.value)
             }}
             placeholder="Enter your name"
             disabled={false}
          />
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
            Sign up
          </Button>
        </form>
      </CardContent>
      <div className="px-7 pt-2">
        <DottedSeparator/>
      </div>
      <CardContent className="px-7 py-2 flex flex-col space-y-4">
        <Button
          variant={"secondary"}
          disabled={false}
          size={"lg"}
          className="w-full"
        >
          <FcGoogle className="mr-2 size-5"/>
          Sign up with Google
        </Button>
        <Button
          variant={"secondary"}
          disabled={false}
          size={"lg"}
          className="w-full"
        >
          <FaGithub className="mr-2 size-5"/>
          Sign up with Github
        </Button>
      </CardContent>
    </Card>
  )
}