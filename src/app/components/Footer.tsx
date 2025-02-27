import Link from "next/link"

export default function Footer() {
  const footerLinks = [
    { title: "About Us", href: "#" },
    { title: "Contact", href: "#" },
    { title: "Terms of Service", href: "#" },
    { title: "Privacy Policy", href: "#" },
    { title: "FAQ", href: "#" },
  ]

  return (
    <footer className="bg-primary text-secondary">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Bicycle Marketplace</h3>
            <p className="text-sm">Find your perfect ride or sell your bicycle with ease.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-sm hover:text-accent-green transition duration-300">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm hover:text-accent-green transition duration-300">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-accent-green transition duration-300">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-accent-green transition duration-300">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-sm mb-4">Stay updated with our latest offers and news.</p>
            <input type="email" placeholder="Enter your email" className="w-full px-3 py-2 text-primary rounded-md" />
          </div>
        </div>
        <div className="mt-8 border-t border-accent-grey pt-8 text-center">
          <p className="text-sm">&copy; 2023 Bicycle Marketplace. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

