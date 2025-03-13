import { useMutation } from "@tanstack/react-query";
import { InferResponseType, InferRequestType } from "hono";

import { client } from "@/lib/rpc";

type RequestType = InferRequestType<typeof client.api.auth.signout.$post>
type ResponseType = InferResponseType<typeof client.api.auth.signout.$post>

export const useSignin = () => {
  const mutation = useMutation<
    ResponseType,
    Error,
    RequestType
  >({
    mutationFn: async () => {
      const response = await client.api.auth.signout.$post()
      return await response.json()
    }
  })

  return mutation
}