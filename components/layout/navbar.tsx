import useScroll from '@/libs/hooks/use-scroll'

export default function NavBar() {
  const scrolled = useScroll(50)

  return (
    <nav
      className={`fixed top-0 w-full ${
        scrolled
          ? 'border-b border-gray-200 bg-white/50 backdrop-blur-xl'
          : 'bg-white/0'
      } z-30 transition-all`}
    >

    </nav>
  )
}
