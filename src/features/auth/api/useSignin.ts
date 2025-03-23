import { useRouter } from "next/navigation";
import { InferResponseType, InferRequestType } from "hono";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { client } from "@/lib/rpc";

type RequestType = InferRequestType<typeof client.api.auth.signin.$post>
type ResponseType = InferResponseType<typeof client.api.auth.signin.$post>

export const useSignin = () => {
  const router = useRouter() 
  const queryClient = useQueryClient()

  const mutation = useMutation<
    ResponseType,
    Error,
    RequestType
  >({
    mutationFn: async (json) => {
      const response = await client.api.auth.signin.$post(json)
      return await response.json()
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["current"] })
      router.refresh()
    }
  })

  return mutation
}