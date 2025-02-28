import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface TestimonialProps {
  quote: string;
  author: string;
  handle: string;
  position?: string;
  gradientFrom: string;
  gradientTo: string;
  size?: "small" | "large";
}

function Testimonial({ 
  quote, 
  author, 
  handle, 
  position, 
  gradientFrom, 
  gradientTo,
  size = "small" 
}: TestimonialProps) {
  return (
    <Card className={`h-full bg-white shadow-sm hover:shadow-md transition-shadow border border-gray-200 rounded-xl overflow-hidden ${size === "large" ? "row-span-2" : ""}`}>
      <CardContent className="p-0">
        <div className="flex flex-col h-full">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <div className={`w-10 h-10 rounded-full bg-gradient-to-br from-${gradientFrom} to-${gradientTo} mr-3 flex-shrink-0`}></div>
              <div>
                <p className="font-semibold text-gray-900">{author}</p>
                <p className="text-sm text-gray-500">{handle}</p>
                {position && <p className="text-xs text-gray-400">{position}</p>}
              </div>
            </div>
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

export default function Testimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Don't take it from us</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See what other people have to say.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">
          {/* Featured testimonial - spans 2 rows */}
          <div className="lg:col-span-1 row-span-2">
            <Testimonial 
              quote="This is the best thing since sliced bread. I cannot believe I did not think of it myself. The bicycle marketplace has completely transformed how I buy and sell bikes. The interface is intuitive, the community is fantastic, and I've found some incredible deals."
              author="Parl Coppa"
              handle="@coppalipse"
              position="Professional Cyclist"
              gradientFrom="blue-400"
              gradientTo="indigo-600"
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
              gradientFrom="emerald-400"
              gradientTo="teal-600"
            />
          </div>
          
          <div>
            <Testimonial 
              quote="Can easily recommend! Found my dream road bike in just two days of browsing."
              author="Alex"
              handle="@alex"
              position="Weekend Rider"
              gradientFrom="amber-400"
              gradientTo="orange-600"
            />
          </div>
          
          <div>
            <Testimonial 
              quote="Perfect for my use case. I sell vintage bicycles and this platform connects me with the right buyers."
              author="Joshua"
              handle="@joshua"
              position="Vintage Bike Collector"
              gradientFrom="rose-400"
              gradientTo="pink-600"
            />
          </div>
          
          <div>
            <Testimonial 
              quote="Excellent product! The verification process ensures I'm buying quality bikes from trusted sellers."
              author="Mandy"
              handle="@mandy"
              position="Triathlon Competitor"
              gradientFrom="purple-400"
              gradientTo="violet-600"
            />
          </div>
        </div>
      </div>
    </section>
  )
}