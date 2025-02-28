import { Card, CardContent } from "@/components/ui/card"

interface TestimonialProps {
  quote: string
  author: string
  authorColor?: string
}

function Testimonial({ quote, author, authorColor = "text-green-500" }: TestimonialProps) {
  return (
    <Card className="h-full bg-white shadow-sm hover:shadow-md transition-shadow">
      <CardContent className="p-6 flex flex-col h-full">
        <blockquote className="text-gray-800 flex-grow">"{quote}"</blockquote>
        <p className={`mt-4 ${authorColor} font-medium`}>- {author}</p>
      </CardContent>
    </Card>
  )
}

export default function Testimonials() {
  return (
    <section className="py-16 bg-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Testimonial 
            quote="I found my dream bike on this marketplace. The process was smooth and the seller was great!" 
            author="Sarah L." 
          />
          <Testimonial 
            quote="As a seller, I appreciate how easy it is to list and manage my bike inventory here." 
            author="Mike T." 
          />
          <Testimonial 
            quote="The variety of bikes available is impressive. I've both bought and sold here with great experiences." 
            author="Emma R." 
          />
        </div>
      </div>
    </section>
  )
} 