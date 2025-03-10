import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator"
import { signInSchema, signUpSchema } from "../schemas";

const app = new Hono()
  .post('/login', zValidator("json", signInSchema), (c) => {
    return c.json({Success: "Ok"})
  })

export default app