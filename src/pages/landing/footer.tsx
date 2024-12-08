import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#f8f9fa] border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img 
              src="/logo.png" 
              alt="Ventura Logo" 
              className="h-16 mb-4"
            />
            <p className="text-gray-600 text-sm">
              Ventura is your launchpad to success. Dare to dream, and we’ll fund the journey! Whether you're building the next big thing or looking to back innovation we're turning groundbreaking ideas into reality.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="text-gray-600 hover:text-[#4318FF] text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-[#4318FF] text-sm">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-[#4318FF] text-sm">
                  News & Updates
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-[#4318FF] text-sm">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-600 text-sm">
                <Phone className="h-4 w-4" />
                <span>+250 788 xxx xxx</span>
              </li>
              <li className="flex items-center gap-2 text-gray-600 text-sm">
                <Mail className="h-4 w-4" />
                <span>info@ventura.rw</span>
              </li>
              <li className="flex items-center gap-2 text-gray-600 text-sm">
                <MapPin className="h-4 w-4" />
                <span>Kigali, Rwanda</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="text-gray-600 hover:text-[#4318FF]">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-[#4318FF]">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-[#4318FF]">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-[#4318FF]">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} Ventura. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="#" className="text-sm text-gray-600 hover:text-[#4318FF]">
                Privacy Policy
              </Link>
              <Link to="#" className="text-sm text-gray-600 hover:text-[#4318FF]">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

