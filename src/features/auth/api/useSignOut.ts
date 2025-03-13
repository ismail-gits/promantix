import { useMutation, useQueryClient } from "@tanstack/react-query";
import { InferResponseType } from "hono";

import { client } from "@/lib/rpc";
import { useRouter } from "next/navigation";

type ResponseType = InferResponseType<typeof client.api.auth.signout.$post>

export const useSignout = () => {
  const router = useRouter()
  const queryClient = useQueryClient()

  const mutation = useMutation<
    ResponseType,
    Error
  >({
    mutationFn: async () => {
      const response = await client.api.auth.signout.$post()
      return await response.json()
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["current"] })
      router.refresh()
    }
  })

  return mutation
}