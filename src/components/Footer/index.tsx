'use client';
import { Twitter, Linkedin, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">© 2024 418Labs. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">
              <Twitter size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">
              <MessageCircle size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
