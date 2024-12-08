import logo from "@/assets/img/brand.png";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import FAQSection from "./faqSection";
import Features from "./features";
import { HeroSection } from "./hero-section";
import HowToSection from "./howToSection";
import Footer from "./footer";

function Landing() {
  return (
    // <div className="w-screen h-screen bg-slate-50/10">
    //   <div className="flex flex-col items-center justify-center">
    //     <Card className="shadow-none">
    //       <CardHeader>
    //         <CardTitle>Ventura</CardTitle>
    //         <CardDescription>Fund the Future!</CardDescription>
    //       </CardHeader>
    //       <CardContent>
    //         <img src={logo} className="App-logo" alt="logo" />
    //       </CardContent>
    //       <CardFooter>
    //         <p>This is the start</p>
    //       </CardFooter>
    //     </Card>
    //   </div>
    // </div>

    <div>
      <div className="content-wrap px-4 lg:px-0">
        <HeroSection />
        {/* <TestimonialsSection /> */}
      </div>
       <div className="content-wrap px-4 lg:px-0">
        <Features />
        {/* <TestimonialsSection /> */}
      </div>
      <div className="content-wrap px-4 lg:px-0">
        <HowToSection />
        {/* <TestimonialsSection /> */}
      </div>
      <div className="content-wrap px-4 lg:px-0">
        <FAQSection />
      </div>

      <div className="h-12"></div> {/* Adds fixed spacing of 12 units */}
      
      <Footer />
    </div>
  );
}

export default Landing;
