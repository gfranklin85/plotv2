import ClientPortalContent from './ClientPortalContent'

export default async function ClientPortalPage({ params }: { params: Promise<{ token: string }> }) {
  const { token } = await params

  return <ClientPortalContent token={token} />
}
