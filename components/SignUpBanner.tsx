import { Button } from "@/components/ui/button"
import Link from "next/link"

/**
 * SignUpBanner Component
 * 
 * A call-to-action banner that encourages users to sign up as sellers.
 * Features a prominent heading, descriptive text, and a sign-up button.
 * 
 * The banner uses a slate gradient background to stand out from other sections
 * and draw attention to the call-to-action button.
 * 
 * This component is typically placed near the bottom of the page, before the footer,
 * to capture users who have browsed through the content and may be interested in selling.
 */
export default function SignUpBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-slate-700 to-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Banner heading */}
        <h2 className="text-3xl font-bold text-white mb-4">Ready to Sell Your Bike?</h2>
        
        {/* Banner description */}
        <p className="text-white text-lg mb-8">
          Join our marketplace and reach thousands of potential buyers!
        </p>
        
        {/* Call-to-action button */}
        <Button 
          asChild 
          className="bg-slate-600 text-white hover:bg-slate-500 transition-colors"
        >
          <Link href="/signup">Sign Up to Sell</Link>
        </Button>
      </div>
    </section>
  )
} 