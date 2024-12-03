import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { NavLink as Link } from "react-router-dom";
import logo from "@/assets/img/logo.png";
export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          {/* Left column - Logo */}
          <div className="flex items-center justify-center md:w-1/4">
            <img
              src={logo}
              alt="Company Logo"
              width={80}
              height={80}
              className="dark:invert"
            />
          </div>

          <div className="flex flex-wrap justify-center md:justify-between md:w-1/2 space-y-8 md:space-y-0">
            <div className="w-full sm:w-1/2 md:w-auto px-4">
              <h3 className="font-semibold text-lg mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Use Cases
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-full sm:w-1/2 md:w-auto px-4">
              <h3 className="font-semibold text-lg mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-full sm:w-1/2 md:w-auto px-4">
              <h3 className="font-semibold text-lg mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Help Center
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex items-center justify-center md:w-1/4">
            <img
              src="/placeholder.svg?height=120&width=120"
              alt="Company Pass QR Code"
              width={120}
              height={120}
              className="dark:invert"
            />
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            &copy; 2025 Your Company. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="#" className="text-muted-foreground hover:text-primary">
              <Facebook size={20} />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link to="#" className="text-muted-foreground hover:text-primary">
              <Twitter size={20} />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link to="#" className="text-muted-foreground hover:text-primary">
              <Instagram size={20} />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link to="#" className="text-muted-foreground hover:text-primary">
              <Linkedin size={20} />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
