import NavBar from './navbar'

export default function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/*
        This layout requires updating your template:

        ```
        <html class="h-full">
        <body class="h-full">
        ```
      */}
      <div className="min-h-full">
        <NavBar />
        <main>
          {children}
        </main>
      </div>
    </>
  )
}
