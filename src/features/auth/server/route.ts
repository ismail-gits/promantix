import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator"
import { signUpSchema } from "../schemas";

const app = new Hono()
  .post('/signup', zValidator("json", signUpSchema), (c) => {
    return c.json({Success: "Ok"})
  })

export default app