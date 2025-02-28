"use client"

import Link from "next/link"
import Image from "next/image"
import Testimonials from "../components/Testimonials"
import SignUpBanner from "../components/SignUpBanner"
import Footer from "../components/Footer"
import FeaturedCategories from "../components/FeaturedCategories"

/**
 * Sample bicycle data for the featured bikes section
 * In a real application, this would come from an API or database
 */
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

/**
 * Main Page Component
 * 
 * This is the homepage of the Bicycle Marketplace application.
 * It combines multiple sections to create a complete landing page experience:
 * 
 * 1. Header - Navigation and search functionality
 * 2. Hero - Main banner with headline and value proposition
 * 3. Categories - Grid of bicycle categories for navigation
 * 4. Featured Bikes - Showcase of highlighted bicycles
 * 5. Testimonials - User reviews and social proof
 * 6. Sign Up Banner - Call-to-action for sellers
 * 7. Footer - Site navigation and additional information
 * 
 * The page uses a consistent color scheme of white, black, and slate,
 * with alternating section backgrounds to create visual separation.
 */
export default function SyntheticV0PageForDeployment() {
  return (
    <div>
      {/* ===== HEADER SECTION ===== */}
      <header className="bg-white shadow-sm">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
          <div className="flex w-full items-center justify-between py-6">
            {/* Logo/Brand */}
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-black hover:text-gray-700 transition-colors">
                Bicycle Marketplace
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              {/* Search Bar */}
              <div className="flex">
                <input
                  type="text"
                  placeholder="Search bicycles..."
                  className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-slate-700 text-white rounded-r-md hover:bg-slate-600 transition-colors"
                >
                  Search
                </button>
              </div>
              {/* Sign In Button */}
              <Link
                href="/signin"
                className="inline-block bg-slate-700 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-slate-600 transition-colors"
              >
                Sign In
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* ===== HERO SECTION ===== */}
      <div className="bg-gradient-to-br from-slate-600 to-slate-800">
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-32">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Find Your Perfect Ride</h1>
              <p className="mt-6 text-lg leading-8 text-gray-200">
                Discover a wide range of quality bicycles from trusted sellers in our marketplace.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ===== CATEGORIES SECTION ===== */}
      {/* Displays bicycle categories for easy navigation */}
      <FeaturedCategories />

      {/* ===== FEATURED BIKES SECTION ===== */}
      <div className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          {/* Section header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Discover Top Bikes</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our selection of premium bicycles.
            </p>
          </div>
          
          {/* Bicycle cards grid */}
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {sampleBicycles.map((bicycle, index) => (
              <div key={bicycle.id} className="group">
                {/* Bicycle image/placeholder */}
                <div className="relative w-full overflow-hidden rounded-lg pb-[60%]">
                  {/* Gradient backgrounds instead of images */}
                  <div 
                    className={`absolute inset-0 bg-gradient-to-br from-slate-600 to-slate-800`}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white text-lg font-medium opacity-80">Bicycle {index + 1}</span>
                    </div>
                  </div>
                </div>
                
                {/* Bicycle details */}
                <h3 className="mt-4 text-lg font-bold text-gray-900">{bicycle.name}</h3>
                <p className="mt-1 text-sm text-gray-500">{bicycle.description}</p>
                
                {/* Price and action button */}
                <div className="mt-4 flex justify-between items-center">
                  <p className="text-lg font-medium text-gray-900">${bicycle.price.toFixed(2)}</p>
                  <button className="bg-slate-700 text-white px-4 py-2 rounded-md hover:bg-slate-600 transition-colors">View Details</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== TESTIMONIALS SECTION ===== */}
      {/* Displays user reviews and testimonials */}
      <Testimonials />

      {/* ===== SIGN UP BANNER ===== */}
      {/* Call-to-action for sellers to join the marketplace */}
      <SignUpBanner />

      {/* ===== FOOTER ===== */}
      {/* Site navigation, links, and additional information */}
      <Footer />
    </div>
  )
}