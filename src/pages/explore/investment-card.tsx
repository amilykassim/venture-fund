import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface InvestmentCardProps {
  title: string;
  description: string;
  image: string;
  badge?: string;
  stats: {
    raised: string;
    investors: number;
    minInvestment: string;
  };
}

export function InvestmentCard({
  title,
  description,
  image,
  badge,
  stats,
}: InvestmentCardProps) {
  return (
    <Card className="overflow-hidden shadow-none">
      <div className="relative">
        {badge && (
          <div className="absolute top-2 left-2 bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
            {badge}
          </div>
        )}
        <img
          src={image}
          alt={title}
          width={400}
          height={250}
          className="w-full h-[200px] object-cover"
        />
      </div>
      <CardHeader>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-4 text-sm">
          <div>
            <p className="font-bold text-primary">{stats.raised}</p>
            <p className="text-muted-foreground">Raised</p>
          </div>
          <div>
            <p className="font-bold">{stats.investors}</p>
            <p className="text-muted-foreground">Investors</p>
          </div>
          <div>
            <p className="font-bold">{stats.minInvestment}</p>
            <p className="text-muted-foreground">Min. Investment</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
