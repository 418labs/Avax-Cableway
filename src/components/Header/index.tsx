import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
            Sleet
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/" className="hover:text-blue-500 transition duration-300">Home</Link></li>
            <li><Link href="/deploy" className="hover:text-blue-500 transition duration-300">Deploy</Link></li>
            <li><Link href="/dashboard" className="hover:text-blue-500 transition duration-300">Dashboard</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
