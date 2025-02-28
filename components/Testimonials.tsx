import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

interface TestimonialProps {
  quote: string
  author: string
  role: string
  initials: string
  type: "buyer" | "seller" | "both"
}

function Testimonial({ quote, author, role, initials, type }: TestimonialProps) {
  return (
    <Card className="h-full bg-white shadow-sm hover:shadow-md transition-shadow border-t-4 border-slate-600">
      <CardContent className="p-6 pt-8 flex flex-col h-full">
        <div className="flex items-start mb-4">
          <span className="text-slate-400 text-4xl font-serif">"</span>
        </div>
        <blockquote className="text-gray-700 flex-grow italic">
          {quote}
        </blockquote>
        <div className="flex items-end mb-2">
          <span className="text-slate-400 text-4xl font-serif ml-auto">"</span>
        </div>
      </CardContent>
      <CardFooter className="px-6 pb-6 pt-0 flex items-center">
        <Avatar className="h-10 w-10 mr-3 border-2 border-slate-200">
          <AvatarFallback className="bg-slate-100 text-slate-600">{initials}</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-medium text-slate-800">{author}</p>
          <p className="text-sm text-slate-500">{role}</p>
        </div>
        <Badge variant="outline" className="ml-auto">
          {type === "buyer" ? "Buyer" : type === "seller" ? "Seller" : "Buyer & Seller"}
        </Badge>
      </CardFooter>
    </Card>
  )
}

export default function Testimonials() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-100 to-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4 text-slate-800">What Our Users Say</h2>
        <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
          Hear from our community of cyclists who have found their perfect rides or sold their bicycles on our marketplace.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Testimonial 
            quote="I found my dream bike on this marketplace. The process was smooth and the seller was great! Would definitely recommend to any cycling enthusiast."
            author="Sarah L." 
            role="Mountain Bike Enthusiast"
            initials="SL"
            type="buyer"
          />
          <Testimonial 
            quote="As a seller, I appreciate how easy it is to list and manage my bike inventory here. The platform is intuitive and the customer support is excellent."
            author="Mike T." 
            role="Bike Shop Owner"
            initials="MT"
            type="seller"
          />
          <Testimonial 
            quote="The variety of bikes available is impressive. I've both bought and sold here with great experiences. This has become my go-to platform for all things bicycle."
            author="Emma R." 
            role="Cycling Enthusiast"
            initials="ER"
            type="both"
          />
        </div>
      </div>
    </section>
  )
} 