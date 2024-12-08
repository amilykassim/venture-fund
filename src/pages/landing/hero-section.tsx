import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="py-20 text-center">
      <div className="container mx-auto px-4">
        <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          VENTURA, YOUR FUTURE
          <br />
          <span className="text-gray-600">BEGINS HERE</span>
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600">
        Ventura is your launchpad to success. Dare to dream, and we’ll fund the journey! 
        Whether you're building the next big thing or looking to back innovation, we're turning groundbreaking ideas into reality.
        </p>
        <Button className="rounded-full px-8 py-6 text-lg">
          Get started
        </Button>
      </div>
    </section>
  )
}

