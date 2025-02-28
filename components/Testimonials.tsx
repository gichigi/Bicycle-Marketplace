import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

/**
 * Interface for Testimonial component props
 * @property {string} quote - The testimonial text
 * @property {string} author - Name of the person giving the testimonial
 * @property {string} handle - Social media handle or username
 * @property {string} position - Optional job title or role
 * @property {string} size - Optional size variant ('small' or 'large')
 */
interface TestimonialProps {
  quote: string;
  author: string;
  handle: string;
  position?: string;
  size?: "small" | "large";
}

/**
 * Testimonial Card Component
 * 
 * Displays a single testimonial with author information and quote.
 * Can be rendered in two sizes: small (default) or large.
 * Large testimonials have bigger text and can span multiple rows in a grid.
 */
function Testimonial({ 
  quote, 
  author, 
  handle, 
  position, 
  size = "small" 
}: TestimonialProps) {
  return (
    <Card className={`h-full bg-white shadow-sm hover:shadow-md transition-shadow border border-gray-200 rounded-xl overflow-hidden ${size === "large" ? "row-span-2" : ""}`}>
      <CardContent className="p-0">
        <div className="flex flex-col h-full">
          <div className="p-6">
            {/* Author info with avatar */}
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-600 to-slate-800 mr-3 flex-shrink-0"></div>
              <div>
                <p className="font-semibold text-gray-900">{author}</p>
                <p className="text-sm text-gray-500">{handle}</p>
                {position && <p className="text-xs text-gray-400">{position}</p>}
              </div>
            </div>
            {/* Testimonial quote */}
            <blockquote className="text-gray-700">
              {size === "large" ? (
                <p className="text-lg font-medium mb-2">"{quote}"</p>
              ) : (
                <p className="text-sm">"{quote}"</p>
              )}
            </blockquote>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

/**
 * Testimonials Section Component
 * 
 * Displays a grid of testimonials with a featured testimonial on the left
 * that spans two rows, and four regular testimonials arranged in a grid.
 * 
 * The component uses a responsive grid layout that adjusts based on screen size:
 * - Mobile: Single column
 * - Tablet: Two columns
 * - Desktop: Three columns with the featured testimonial spanning two rows
 */
export default function Testimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Don't take it from us</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See what other people have to say.
          </p>
        </div>
        
        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">
          {/* Featured testimonial - spans 2 rows */}
          <div className="lg:col-span-1 row-span-2">
            <Testimonial 
              quote="This is the best thing since sliced bread. I cannot believe I did not think of it myself. The bicycle marketplace has completely transformed how I buy and sell bikes. The interface is intuitive, the community is fantastic, and I've found some incredible deals."
              author="Parl Coppa"
              handle="@coppalipse"
              position="Professional Cyclist"
              size="large"
            />
          </div>
          
          {/* Regular testimonials */}
          <div>
            <Testimonial 
              quote="After using this, I cannot imagine going back to the old way of doing things. The bicycle marketplace has made finding rare parts so much easier!"
              author="Mathew"
              handle="@heymatt_oo"
              position="Mountain Bike Enthusiast"
            />
          </div>
          
          <div>
            <Testimonial 
              quote="Can easily recommend! Found my dream road bike in just two days of browsing."
              author="Alex"
              handle="@alex"
              position="Weekend Rider"
            />
          </div>
          
          <div>
            <Testimonial 
              quote="Perfect for my use case. I sell vintage bicycles and this platform connects me with the right buyers."
              author="Joshua"
              handle="@joshua"
              position="Vintage Bike Collector"
            />
          </div>
          
          <div>
            <Testimonial 
              quote="Excellent product! The verification process ensures I'm buying quality bikes from trusted sellers."
              author="Mandy"
              handle="@mandy"
              position="Triathlon Competitor"
            />
          </div>
        </div>
      </div>
    </section>
  )
}