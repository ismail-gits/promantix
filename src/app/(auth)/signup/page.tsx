import { redirect } from "next/navigation";

import { getCurrent } from "@/features/auth/actions";
import { SignUpCard } from "@/features/auth/components/signUpCard";

export default async function SignUpPage() {
  const user = await getCurrent()

  if (user) {
    redirect('/')
  }

  return <SignUpCard/>
}