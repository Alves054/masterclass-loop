import { Button } from "@/components/ui/button";
import { GraduationCap, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <GraduationCap className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold">Academia Pro</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#cursos" className="text-sm font-medium hover:text-primary transition-colors">
            Cursos
          </a>
          <a href="#sobre" className="text-sm font-medium hover:text-primary transition-colors">
            Sobre
          </a>
          <a href="#depoimentos" className="text-sm font-medium hover:text-primary transition-colors">
            Depoimentos
          </a>
          <a href="#contato" className="text-sm font-medium hover:text-primary transition-colors">
            Contato
          </a>
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="sm">
            Entrar
          </Button>
          <Button variant="hero" size="sm">
            Assinar Agora
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t">
          <nav className="container mx-auto px-4 py-4 space-y-4">
            <a href="#cursos" className="block text-sm font-medium hover:text-primary transition-colors">
              Cursos
            </a>
            <a href="#sobre" className="block text-sm font-medium hover:text-primary transition-colors">
              Sobre
            </a>
            <a href="#depoimentos" className="block text-sm font-medium hover:text-primary transition-colors">
              Depoimentos
            </a>
            <a href="#contato" className="block text-sm font-medium hover:text-primary transition-colors">
              Contato
            </a>
            <div className="flex flex-col space-y-2 pt-4">
              <Button variant="ghost" size="sm">
                Entrar
              </Button>
              <Button variant="hero" size="sm">
                Assinar Agora
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;