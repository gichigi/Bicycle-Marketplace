import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface CategoryCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
}

function CategoryCard({ title, description, icon, href }: CategoryCardProps) {
  return (
    <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all">
      <CardContent className="pt-6">
        <div className="mb-4 flex justify-center">
          <div className="p-3 rounded-full bg-slate-100 text-slate-700">
            {icon}
          </div>
        </div>
        <h3 className="text-xl font-semibold text-center mb-2">{title}</h3>
        <p className="text-gray-600 text-center">{description}</p>
      </CardContent>
      <CardFooter className="flex justify-center pb-6">
        <Button asChild variant="outline" className="border-slate-700 text-slate-700 hover:bg-slate-50 hover:text-slate-800">
          <Link href={href}>Explore {title}</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

export default function FeaturedCategories() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Explore Categories</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find the perfect bike for your riding style.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <CategoryCard 
            title="Road Bikes"
            description="Sleek and fast bikes designed for paved surfaces and speed."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="5.5" cy="17.5" r="3.5"/>
                <circle cx="18.5" cy="17.5" r="3.5"/>
                <path d="M15 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-3 11.5V14l-3-3 4-3 2 3h2"/>
              </svg>
            }
            href="/categories/road-bikes"
          />
          
          <CategoryCard 
            title="Mountain Bikes"
            description="Durable bikes built for off-road trails and rough terrain."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m8 5 2 2-2 2 2 2-2 2"/>
                <path d="m16 5-2 2 2 2-2 2 2 2"/>
                <circle cx="5" cy="18" r="3"/>
                <circle cx="19" cy="18" r="3"/>
                <path d="M10 7h4"/>
                <path d="m9 11 6-1"/>
                <path d="m9 15 6-1"/>
              </svg>
            }
            href="/categories/mountain-bikes"
          />
          
          <CategoryCard 
            title="Urban Commuters"
            description="Practical bikes for daily city riding and commuting."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22v-4"/>
                <path d="M12 13V8"/>
                <path d="m15 5 3-3"/>
                <path d="M18 2h-3"/>
                <path d="m6 8 3-3"/>
                <path d="M9 5H6"/>
                <path d="M12 13a4 4 0 0 1 4 4v1a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3v-1a4 4 0 0 1 4-4z"/>
              </svg>
            }
            href="/categories/urban-commuters"
          />
          
          <CategoryCard 
            title="Electric Bikes"
            description="Power-assisted bikes for longer rides with less effort."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 3v4a1 1 0 0 0 1 1h4"/>
                <path d="M17 21h-8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6l4 4v12a2 2 0 0 1-2 2z"/>
                <path d="m11 13-3 3h6l-3 3"/>
              </svg>
            }
            href="/categories/electric-bikes"
          />
        </div>
      </div>
    </section>
  )
} 