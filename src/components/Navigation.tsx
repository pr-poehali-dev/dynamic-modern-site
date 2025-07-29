import Icon from "@/components/ui/icon";

interface NavigationProps {
  scrollToSection: (id: string) => void;
}

export default function Navigation({ scrollToSection }: NavigationProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <img 
            src="https://cdn.poehali.dev/files/318658ce-521b-41ec-b2cc-ef0fec265cce.png" 
            alt="Sectores" 
            className="h-12 w-auto object-contain"
          />
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('home')}
            className="text-foreground hover:text-primary transition-colors"
          >
            Koti
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="text-foreground hover:text-primary transition-colors"
          >
            Tietoa meistä
          </button>
          <button 
            onClick={() => scrollToSection('services')}
            className="text-foreground hover:text-primary transition-colors"
          >
            Palvelumme
          </button>
          <button 
            onClick={() => scrollToSection('team')}
            className="text-foreground hover:text-primary transition-colors"
          >
            Tiimimme
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-foreground hover:text-primary transition-colors"
          >
            Ota yhteyttä
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden">
          <Icon name="Menu" size={24} />
        </button>
      </div>
    </nav>
  );
}