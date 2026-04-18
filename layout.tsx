export const metadata = {
  title: 'Vibeads - AI Gulf Video',
  description: 'AI Video Generation with a Gulf Touch',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  )
}
