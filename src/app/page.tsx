import BikeSection from "./components/BikeSection"
import Testimonials from "./components/Testimonials"
import SignUpBanner from "./components/SignUpBanner"
import type { Bicycle } from "@/lib/types"

// This would typically come from an API or database
const featuredBikes: Bicycle[] = [
  {
    id: "1",
    name: "Mountain Explorer",
    description: "A rugged mountain bike for all terrains",
    price: 799.99,
    image: "/images/placeholder-bicycle.jpg",
    seller: "Adventure Bikes",
    condition: "new",
  },
  {
    id: "2",
    name: "City Cruiser",
    description: "Perfect for urban commutes",
    price: 549.99,
    image: "/images/placeholder-bicycle.jpg",
    seller: "Urban Wheels",
    condition: "new",
  },
  {
    id: "3",
    name: "Vintage Road Bike",
    description: "Classic road bike in great condition",
    price: 299.99,
    image: "/images/placeholder-bicycle.jpg",
    seller: "Retro Rides",
    condition: "used",
  },
  {
    id: "4",
    name: "Family Tandem",
    description: "Fun rides for two",
    price: 399.99,
    image: "/images/placeholder-bicycle.jpg",
    seller: "Family Bikes",
    condition: "used",
  },
]

export default function Home() {
  return (
    <div className="bg-secondary">
      <main>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">Find Your Perfect Ride</h1>
              <p className="mt-6 text-lg leading-8 text-accent-grey">
                Discover a wide range of quality bicycles from trusted sellers in our marketplace.
              </p>
            </div>
          </div>
        </div>
        <BikeSection title="Featured Bikes" bicycles={featuredBikes} />
        <Testimonials />
        <SignUpBanner />
      </main>
    </div>
  )
}

