import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <div className="bg-slate-50 px-4 py-12 md:py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-2xl">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
            RAISE FOUR YOUR VENTURE
          </h1>
          <p className="text-xl text-muted-foreground mb-8 rounded-2xl">
            Join founders who are raising capital on Ventura.
          </p>
          <Button size="lg" className="bg-teal-700 hover:bg-teal-800">
            Get started
          </Button>
        </div>
        <div className="relative w-full md:w-1/3">
          <img
            src="/placeholder.svg"
            alt="Business professional"
            width={500}
            height={400}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
