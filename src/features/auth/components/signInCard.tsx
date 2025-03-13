"use client"

import { z } from "zod"
import { FcGoogle } from "react-icons/fc"
import { FaGithub } from "react-icons/fa"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod" 
import Link from "next/link"
 
import { DottedSeparator } from "@/components/dotted-separator"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { signInSchema } from "../schemas"
import { useSignin } from "../api/useSignin"

export const SignInCard = () => {
  const { mutate, isPending } = useSignin()

  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  })

  const onSubmit = (values: z.infer<typeof signInSchema>) => {
    mutate({ json: values })
  }

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
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
              disabled={isPending}
              size="lg"
              className="w-full"
            >
              Sign In
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
          Sign in with Google
        </Button>
        <Button
          variant={"secondary"}
          disabled={false}
          size={"lg"}
          className="w-full"
        >
          <FaGithub className="mr-2 size-5"/>
          Sign in with Github
        </Button>
      </CardContent>
      <div className="px-7 ">
        <DottedSeparator/>
        <CardContent className="flex items-center justify-center pt-4">
          <p>
            Don't have an account?
            <Link href={'/signup'}>
              <span className="text-blue-700 ">&nbsp;Sign Up</span>
            </Link>
          </p>
        </CardContent>
      </div>
    </Card>
  )
}