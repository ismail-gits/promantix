import { useMutation, useQueryClient } from "@tanstack/react-query";
import { InferResponseType, InferRequestType } from "hono";

import { client } from "@/lib/rpc";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

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
    onSuccess: () => {
      toast.success("Welcome to Promantix! Your journey starts now")
      queryClient.invalidateQueries({ queryKey: ["current"] })
      router.refresh()
    },
    onError: () => {
      toast.error("Unable to create account, please try again")
    }
  })

  return mutation
}