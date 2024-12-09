import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function NavTabs() {
  return (
    <div className="border-b">
      <div className="container mx-auto px-4">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList>
            <TabsTrigger value="overview" className="text-sm font-semibold">
              OVERVIEW
            </TabsTrigger>
            <TabsTrigger value="news" className="text-sm font-semibold">
              NEWS
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
}
