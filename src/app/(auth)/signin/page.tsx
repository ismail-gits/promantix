import { redirect } from "next/navigation";

import { getCurrent } from "@/features/auth/actions";
import { SignInCard } from "@/features/auth/components/signInCard";

export default async function SignInPage() {
  const user = await getCurrent()

  if (user) {
    redirect('/')
  }

  return <SignInCard/>
}