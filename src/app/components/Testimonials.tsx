export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      quote: "I found my dream bike on this marketplace. The process was smooth and the seller was great!",
      author: "Sarah L.",
    },
    {
      id: 2,
      quote: "As a seller, I appreciate how easy it is to list and manage my bike inventory here.",
      author: "Mike T.",
    },
    {
      id: 3,
      quote: "The variety of bikes available is impressive. I've both bought and sold here with great experiences.",
      author: "Emma R.",
    },
  ]

  return (
    <section className="bg-accent-grey py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-primary mb-8">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-secondary p-6 rounded-lg shadow-md">
              <p className="text-primary mb-4">"{testimonial.quote}"</p>
              <p className="text-accent-green font-semibold">- {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

