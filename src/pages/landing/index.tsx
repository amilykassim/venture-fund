import logo from "@/assets/img/brand.png";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function Landing() {
  return (
    <div className="w-screen h-screen bg-slate-50/10">
      <div className="flex flex-col items-center justify-center">
        <Card className="shadow-none">
          <CardHeader>
            <CardTitle>Ventura</CardTitle>
            <CardDescription>Fund the Future!</CardDescription>
          </CardHeader>
          <CardContent>
            <img src={logo} className="App-logo" alt="logo" />
          </CardContent>
          <CardFooter>
            <p>This is the start</p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default Landing;
