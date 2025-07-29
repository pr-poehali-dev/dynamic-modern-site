import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function Index() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      title: "Tapahtumaturvallisuus",
      description: "Ammattitaitoinen turvallisuuspalvelu kaikenlaisiin tapahtumiin",
      icon: "Users"
    },
    {
      title: "Baariturvallisuus",
      description: "Kokeneita portsareita ja turvahenkilöstöä baareihin ja yökerhoihin",
      icon: "Shield"
    },
    {
      title: "VIP-suojaus",
      description: "Henkilökohtainen turvallisuuspalvelu tärkeille asiakkaille",
      icon: "Star"
    },
    {
      title: "Ennaltaehkäisy",
      description: "Turvallisuusriskien arviointi ja ehkäisevät toimenpiteet",
      icon: "Eye"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img 
              src="https://v3.fal.media/files/koala/eTqd2rF00ao4K_Rn5568w_output.png" 
              alt="Sectores" 
              className="h-10 w-10 object-contain"
            />
            <span className="text-xl font-bold text-primary">SECTORES</span>
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

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 animate-fade-in">
              Luotettava
              <span className="text-primary block">Turvallisuus</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in">
              Ammattitaitoista turvallisuuspalvelua tapahtumiin ja baareihin Suomessa
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

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
              Tietoa <span className="text-primary">Meistä</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-foreground">
                  Kokemusta ja ammattitaitoa
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Sectores on luotettava turvallisuusalan yritys, joka tarjoaa 
                  laadukkaita turvallisuuspalveluja tapahtumiin ja baareihin 
                  ympäri Suomen.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Tiimimme koostuu koulutetuista ammattilaisista, jotka 
                  ymmärtävät turvallisuuden merkityksen ja osaavat toimia 
                  haastavissa tilanteissa.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">10+</div>
                    <div className="text-sm text-muted-foreground">Vuotta kokemusta</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">500+</div>
                    <div className="text-sm text-muted-foreground">Tapahtumaa</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">24/7</div>
                    <div className="text-sm text-muted-foreground">Palvelu</div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 text-white">
                  <Icon name="Shield" size={48} className="mb-4" />
                  <h4 className="text-xl font-semibold mb-4">Laatutakuu</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Icon name="Check" size={16} className="mr-2" />
                      Lisensoituja turva-alan ammattilaisia
                    </li>
                    <li className="flex items-center">
                      <Icon name="Check" size={16} className="mr-2" />
                      Jatkuva koulutus ja sertifiointi
                    </li>
                    <li className="flex items-center">
                      <Icon name="Check" size={16} className="mr-2" />
                      Kattava vakuutusturva
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
              Palvelumme
            </h2>
            <p className="text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
              Tarjoamme monipuolisia turvallisuuspalveluja eri tarpeisiin
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <Card 
                  key={index} 
                  className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50"
                >
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name={service.icon as any} size={32} className="text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('contact')}
                className="text-lg px-8 py-3"
              >
                Kysy lisää palveluista
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
              Ota Yhteyttä
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Oletko kiinnostunut?</h3>
                <p className="text-lg text-white/80 mb-8 leading-relaxed">
                  Ota yhteyttä jo tänään ja keskustellaan turvallisuustarpeistasi. 
                  Tarjoamme räätälöityjä ratkaisuja jokaiseen tilanteeseen.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <Icon name="Phone" size={24} />
                    </div>
                    <div>
                      <div className="font-semibold">Puhelin</div>
                      <div className="text-white/80">+358 40 123 4567</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <Icon name="Mail" size={24} />
                    </div>
                    <div>
                      <div className="font-semibold">Sähköposti</div>
                      <div className="text-white/80">info@sectores.fi</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <Icon name="MapPin" size={24} />
                    </div>
                    <div>
                      <div className="font-semibold">Sijainti</div>
                      <div className="text-white/80">Helsinki, Suomi</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <Icon name="Clock" size={24} />
                    </div>
                    <div>
                      <div className="font-semibold">Aukioloajat</div>
                      <div className="text-white/80">24/7 Hätätilanteissa</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h4 className="text-xl font-semibold mb-6">Pyydä tarjous</h4>
                <form className="space-y-4">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Nimi" 
                      className="w-full p-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder="Sähköposti" 
                      className="w-full p-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <input 
                      type="tel" 
                      placeholder="Puhelinnumero" 
                      className="w-full p-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <textarea 
                      placeholder="Kuvaile turvallisuustarpeitasi..." 
                      rows={4}
                      className="w-full p-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    ></textarea>
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 text-white"
                    size="lg"
                  >
                    Lähetä viesti
                    <Icon name="Send" size={20} className="ml-2" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <img 
                src="https://v3.fal.media/files/koala/eTqd2rF00ao4K_Rn5568w_output.png" 
                alt="Sectores" 
                className="h-8 w-8 object-contain"
              />
              <span className="text-xl font-bold text-primary">SECTORES</span>
            </div>
            <p className="text-muted-foreground mb-8">
              Luotettava kumppanisi turvallisuusasioissa
            </p>
            <div className="border-t pt-8">
              <p className="text-sm text-muted-foreground">
                © 2024 Sectores. Kaikki oikeudet pidätetään.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}