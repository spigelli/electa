import { useSession } from "next-auth/react"

export function AuthChecker() {
  const { data: session, status } = useSession()

  if (status === "authenticated") {
    return <p>Signed in as {session?.user?.email}</p>
  }

  return <p>Not signed in</p>
}
