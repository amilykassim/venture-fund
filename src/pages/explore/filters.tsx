import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function Filters() {
  return (
    <div className="flex gap-4 mb-8">
      <Select>
        <SelectTrigger className="w-[200px] bg-slate-50">
          <SelectValue placeholder="Categories" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Categories</SelectItem>
          <SelectItem value="tech">Technology</SelectItem>
          <SelectItem value="real-estate">Real Estate</SelectItem>
          <SelectItem value="consumer">Consumer</SelectItem>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger className="w-[200px] bg-slate-50">
          <SelectValue placeholder="Sort by Status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="trending">Trending</SelectItem>
          <SelectItem value="closing-soon">Closing Soon</SelectItem>
          <SelectItem value="recently-funded">Recently Funded</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
