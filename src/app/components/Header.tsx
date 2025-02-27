import Link from "next/link"
import SearchBar from "./SearchBar"

export default function Header() {
  return (
    <header className="bg-secondary shadow-sm">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between border-b border-accent-grey py-6">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary">
              Bicycle Marketplace
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              href="/bicycles"
              className="inline-block bg-primary py-2 px-4 border border-transparent rounded-md text-base font-medium text-secondary hover:bg-accent-grey"
            >
              All Bicycles
            </Link>
            <SearchBar />
          </div>
        </div>
      </nav>
    </header>
  )
}

