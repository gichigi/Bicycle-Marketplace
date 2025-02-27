export default function SignUpBanner() {
  return (
    <section className="bg-accent-green py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-secondary mb-4">Ready to Sell Your Bike?</h2>
        <p className="text-secondary mb-8">Join our marketplace and reach thousands of potential buyers!</p>
        <button className="bg-primary text-secondary py-2 px-6 rounded-md hover:bg-accent-grey transition duration-300">
          Sign Up to Sell
        </button>
      </div>
    </section>
  )
}

