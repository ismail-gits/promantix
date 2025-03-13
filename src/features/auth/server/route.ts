import { signInSchema, signUpSchema } from "../schemas";
import { ID } from "node-appwrite";
import { Hono } from "hono";
import { setCookie } from "hono/cookie"

import { zValidator } from "@hono/zod-validator"
import { createAdminClient } from "@/lib/appwrite";
import { AUTH_COOKIE } from "../constants";

const app = new Hono()
  .post('/signup', zValidator("json", signUpSchema), async (c) => {
    const { name, email, password } = c.req.valid('json')

    const { account } = await createAdminClient()

    const user = await account.create(
      ID.unique(),
      email,
      password,
      name
    )

    const session = await account.createEmailPasswordSession(
      email,
      password
    )

    setCookie(c, AUTH_COOKIE, session.secret, {
      path: "/",
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 60 * 60 * 24
    })
    
    return c.json({ user })
  })
  .post('/signin', zValidator("json", signInSchema), async (c) => {
    const { email, password } = c.req.valid('json')

    return c.json({ email, password })
  })

export default app