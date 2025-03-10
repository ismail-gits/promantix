import { useMutation } from "@tanstack/react-query";
import { InferResponseType, InferRequestType } from "hono";

import { client } from "@/lib/rpc";

type RequestType = InferRequestType<typeof client.api.auth.signin.$post>
type ResponseType = InferResponseType<typeof client.api.auth.signin.$post>

export const useSignin = () => {
  const mutation = useMutation<
    ResponseType,
    Error,
    RequestType
  >({
    mutationFn: async (json) => {
      const response = await client.api.auth.signin.$post(json)
      return response.json()
    }
  })

  return mutation
}