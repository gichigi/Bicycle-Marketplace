"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function SearchBar() {
  const [query, setQuery] = useState("")
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    router.push(`/bicycles?search=${encodeURIComponent(query)}`)
  }

  return (
    <form onSubmit={handleSearch} className="flex">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search bicycles..."
        className="px-4 py-2 border border-accent-grey rounded-l-md focus:ring-accent-green focus:border-accent-green"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-primary text-secondary rounded-r-md hover:bg-accent-grey focus:outline-none focus:ring-2 focus:ring-accent-green focus:ring-offset-2"
      >
        Search
      </button>
    </form>
  )
}

