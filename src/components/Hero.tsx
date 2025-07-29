import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface HeroProps {
  scrollToSection: (id: string) => void;
}

export default function Hero({ scrollToSection }: HeroProps) {
  return (
    <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 animate-fade-in">
            Turvallisuus ei ole
            <span className="text-primary block">satunnaista</span>
            <span className="text-2xl md:text-3xl font-normal text-muted-foreground block mt-4">
              – se on ammattitaitoa
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in">
            Rakennamme Uudellemaalle turvallisempaa arkea tapahtumiin ja ravintoloihin
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button 
              size="lg" 
              className="text-lg px-8 py-3"
              onClick={() => scrollToSection('contact')}
            >
              Pyydä tarjous
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-3"
              onClick={() => scrollToSection('services')}
            >
              Tutustu palveluihin
            </Button>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-primary/10 rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/4 right-10 w-16 h-16 bg-secondary/20 rounded-full animate-pulse delay-1000"></div>
    </section>
  );
}