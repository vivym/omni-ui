import { getServerSession } from 'next-auth/next'

export default async function AssistantPage() {
  const session = await getServerSession()

  console.log(session)

  return (
    <main>233</main>
  )
}
