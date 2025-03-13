import { QueryClient, useMutation } from "@tanstack/react-query";
import { InferResponseType, InferRequestType } from "hono";

import { client } from "@/lib/rpc";
import { useRouter } from "next/navigation";

type RequestType = InferRequestType<typeof client.api.auth.signin.$post>
type ResponseType = InferResponseType<typeof client.api.auth.signin.$post>

export const useSignin = () => {
  const router = useRouter() 
  const queryClient = new QueryClient()

  const mutation = useMutation<
    ResponseType,
    Error,
    RequestType
  >({
    mutationFn: async (json) => {
      const response = await client.api.auth.signin.$post(json)
      return await response.json()
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["current"] })
      router.refresh()
    }
  })

  return mutation
}