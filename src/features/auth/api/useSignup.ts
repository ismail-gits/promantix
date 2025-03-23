import { useMutation, useQueryClient } from "@tanstack/react-query";
import { InferResponseType, InferRequestType } from "hono";

import { client } from "@/lib/rpc";
import { useRouter } from "next/navigation";

type RequestType = InferRequestType<typeof client.api.auth.signup.$post>
type ResponseType = InferResponseType<typeof client.api.auth.signup.$post>

export const useSignup = () => {
  const router = useRouter()
  const queryClient = useQueryClient()

  const mutation = useMutation<
    ResponseType,
    Error,
    RequestType
  >({
    mutationFn: async (json) => {
      const response = await client.api.auth.signup.$post(json)
      return await response.json()
    },
    onSuccess: async () => {
      router.refresh()
      queryClient.invalidateQueries({ queryKey: ["current"] })
    }
  })

  return mutation
}