import { useState } from "react";
import { InvestmentCard } from "../investment-card";
import { Button } from "@/components/ui/button";

export interface AllInvestmentsProps {
  // TODO:
}

export function AllInvestments() {
  const [list, setList] = useState([1, 2, 3, 4, 5, 6]);
  const addMore = () => {
    // TODO:
    const currentList = [...list];
    const additions = [1, 2, 3];
    const newList = currentList.concat(additions);
    setList(newList);
  };
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-3 gap-6">
        {list.map((item, index) => (
          <InvestmentCard
            key={index}
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
        ))}
      </div>
      <div className="mt-4 flex justify-center">
        <Button onClick={addMore}>See more investments</Button>
      </div>
    </div>
  );
}
