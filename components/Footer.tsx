import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface FooterLinkProps {
  href: string
  children: React.ReactNode
}

function FooterLink({ href, children }: FooterLinkProps) {
  return (
    <Link 
      href={href} 
      className="text-gray-600 hover:text-black transition-colors"
    >
      {children}
    </Link>
  )
}

function FooterHeading({ children }: { children: React.ReactNode }) {
  return <h3 className="text-black font-bold text-lg mb-4">{children}</h3>
}

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 py-12 border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Marketplace Info */}
          <div>
            <FooterHeading>Bicycle Marketplace</FooterHeading>
            <p className="text-gray-600 mb-4">
              Find your perfect ride or sell your bicycle with ease.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <FooterHeading>Quick Links</FooterHeading>
            <ul className="space-y-2">
              <li><FooterLink href="/about">About Us</FooterLink></li>
              <li><FooterLink href="/contact">Contact</FooterLink></li>
              <li><FooterLink href="/terms">Terms of Service</FooterLink></li>
              <li><FooterLink href="/privacy">Privacy Policy</FooterLink></li>
              <li><FooterLink href="/faq">FAQ</FooterLink></li>
            </ul>
          </div>

          {/* Connect With Us */}
          <div>
            <FooterHeading>Connect With Us</FooterHeading>
            <ul className="space-y-2">
              <li><FooterLink href="https://facebook.com">Facebook</FooterLink></li>
              <li><FooterLink href="https://twitter.com">Twitter</FooterLink></li>
              <li><FooterLink href="https://instagram.com">Instagram</FooterLink></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <FooterHeading>Newsletter</FooterHeading>
            <p className="text-gray-600 mb-4">
              Stay updated with our latest offers and news.
            </p>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white border-gray-300 text-gray-800 placeholder:text-gray-400 focus:border-slate-500"
              />
              <Button 
                className="bg-slate-700 hover:bg-slate-600 transition-colors"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-500">
          <p>© {new Date().getFullYear()} Bicycle Marketplace. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 