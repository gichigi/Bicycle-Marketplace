"use client"

import Link from "next/link"
import Image from "next/image"

// Sample bicycle data
const sampleBicycles = [
  {
    id: "1",
    name: "Mountain Explorer 1",
    description: "High-performance mountain bike with advanced suspension",
    price: 1299.99,
    image: "/images/placeholder-bicycle.jpg",
  },
  {
    id: "2",
    name: "Mountain Explorer 2",
    description: "High-performance mountain bike with advanced suspension",
    price: 1299.99,
    image: "/images/placeholder-bicycle.jpg",
  },
  {
    id: "3",
    name: "Mountain Explorer 3",
    description: "High-performance mountain bike with advanced suspension",
    price: 1299.99,
    image: "/images/placeholder-bicycle.jpg",
  },
]

export default function SyntheticV0PageForDeployment() {
  return (
    <div>
      {/* Header */}
      <header className="bg-white shadow-sm">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
          <div className="flex w-full items-center justify-between py-6">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-black">
                Bicycle Marketplace
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              {/* Search Bar */}
              <div className="flex">
                <input
                  type="text"
                  placeholder="Search bicycles..."
                  className="px-4 py-2 border border-gray-300 rounded-l-md"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-black text-white rounded-r-md"
                >
                  Search
                </button>
              </div>
              {/* Sign In Button */}
              <Link
                href="/signin"
                className="inline-block bg-black py-2 px-4 border border-transparent rounded-md text-base font-medium text-white"
              >
                Sign In
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <div className="bg-gray-100">
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-32">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-black sm:text-6xl">Find Your Perfect Ride</h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Discover a wide range of quality bicycles from trusted sellers in our marketplace.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Bikes Section */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-black">Featured Bikes</h2>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {sampleBicycles.map((bicycle) => (
              <div key={bicycle.id} className="group">
                <div className="relative w-full overflow-hidden rounded-lg bg-gray-200 pb-[60%]">
                  <Image
                    src={bicycle.image}
                    alt={bicycle.name}
                    fill
                    unoptimized
                    className="absolute h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-4 text-lg font-bold text-gray-900">{bicycle.name}</h3>
                <p className="mt-1 text-sm text-gray-500">{bicycle.description}</p>
                <div className="mt-4 flex justify-between items-center">
                  <p className="text-lg font-medium text-gray-900">${bicycle.price.toFixed(2)}</p>
                  <button className="bg-black text-white px-4 py-2 rounded-md">View Details</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}