import { Button } from "@/components/ui/button";
import { Filters } from "./filters";
import { Hero } from "./hero";
import { InvestmentsCards } from "./investments-card";
import { NavTabs } from "./nav-tabs";

function Explore() {
  return (
    <main>
      <Hero />
      <div className="mt-4">
        <NavTabs />
      </div>
      <div className="container mx-auto px-4 py-8">
        <Filters />
      </div>
      <InvestmentsCards
        {...{
          title: "MOST MOMENTUM",
          description:
            "Offerings that have raised the most money in the last few days",
          onNext: () => {},
          onPrevious: () => {},
          onSeeAll: () => {},
        }}
      />
      <InvestmentsCards
        {...{
          title: "MOST FUNDED",
          description: "Offerings that have raised the most money fo far",
          onNext: () => {},
          onPrevious: () => {},
          onSeeAll: () => {},
        }}
      />
      <InvestmentsCards
        {...{
          title: "RECENTLY LAUNCHED",
          description: "Most recently launched offerings",
          onNext: () => {},
          onPrevious: () => {},
          onSeeAll: () => {},
        }}
      />
      <InvestmentsCards
        {...{
          title: "CLOSING SOON",
          description: "Offerings that will be closing soon",
          onNext: () => {},
          onPrevious: () => {},
          onSeeAll: () => {},
        }}
      />
      <div className="flex items-center justify-center">
        <Button>See all Offerings</Button>
      </div>
    </main>
  );
}

export default Explore;
