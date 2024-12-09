import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { InvestmentCard } from "./investment-card";

export interface InvestmentsCardsProps {
  title: string;
  description: string;
  onNext: () => void;
  onPrevious: () => void;
  onSeeAll: () => void;
}

export function InvestmentsCards({
  title,
  description,
  onNext,
  onPrevious,
  onSeeAll,
}: InvestmentsCardsProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold mb-2 capitalize">{title}</h2>
          <p className="text-muted-foreground">{description}</p>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="link" onClick={onSeeAll}>
            See All
          </Button>
          <div className="flex gap-2">
            <Button size="icon" variant="outline" onClick={onPrevious}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button size="icon" variant="outline" onClick={onNext}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        <InvestmentCard
          title="Atombeam"
          description="Increasing Machine Bandwidth Up To 4x"
          image="/placeholder.svg"
          badge="ROUND CLOSING"
          stats={{
            raised: "$11.14M",
            investors: 3931,
            minInvestment: "648",
          }}
        />
        <InvestmentCard
          title="StartEngine"
          description="Doubled Revenue YoY in the First Half of"
          image="/placeholder.svg"
          stats={{
            raised: "$2.67M",
            investors: 1151,
            minInvestment: "500",
          }}
        />
        <InvestmentCard
          title="BOXABL"
          description="Mass Production Building System"
          image="/placeholder.svg"
          stats={{
            raised: "$4.49M",
            investors: 1880,
            minInvestment: "1K",
          }}
        />
      </div>
    </div>
  );
}
