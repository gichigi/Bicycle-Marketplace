import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function SignUpBanner() {
  return (
    <section className="py-16 bg-green-500">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Ready to Sell Your Bike?</h2>
        <p className="text-white text-lg mb-8">
          Join our marketplace and reach thousands of potential buyers!
        </p>
        <Button 
          asChild 
          className="bg-black text-white hover:bg-gray-800 transition-colors"
        >
          <Link href="/signup">Sign Up to Sell</Link>
        </Button>
      </div>
    </section>
  )
} 