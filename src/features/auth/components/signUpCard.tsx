"use client"

import { FcGoogle } from "react-icons/fc"
import { FaGithub } from "react-icons/fa"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

import { DottedSeparator } from "@/components/dotted-separator"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { signUpSchema } from "../schemas"


export const SignUpCard = () => {
  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: ""
    }
  })

  const onSubmit = (values: z.infer<typeof signUpSchema>) => {
    console.log({values})
  }

  return (
    <Card className="w-full h-full md:w-[487px] border-none shadow-none">
      <CardHeader className="flex items-center justify-center text-center">
        <CardTitle className="text-2xl">
          Sign Up
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
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              name="name"
              control={form.control}
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        type="text"
                        placeholder="Enter your name"
                      />
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )
              }}
            />
            <FormField
              name="email"
              control={form.control}
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        type="email"
                        placeholder="Enter your email"
                      />
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )
              }}
            />
            <FormField
              name="password"
              control={form.control}
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        type="password"
                        placeholder="Enter your password"
                      />
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )
              }}
            />
            <Button
              disabled={false}
              size="lg"
              className="w-full"
            >
              Sign Up
            </Button>
          </form>
        </Form>
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
      <div className="px-7 ">
        <DottedSeparator/>
        <CardContent className="flex items-center justify-center pt-4">
          <p>
            Already have an account?
            <Link href={'/signin'}>
              <span className="text-blue-700 ">&nbsp;Sign In</span>
            </Link>
          </p>
        </CardContent>
      </div>
    </Card>
  )
}