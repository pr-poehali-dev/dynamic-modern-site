import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function Index() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      title: "Tapahtumien järjestyksenvalvonta",
      description: "Ammattitaitoinen turvallisuuspalvelu kaikenlaisiin tapahtumiin",
      icon: "Users"
    },
    {
      title: "Ravintoloiden järjestyksenvalvonta",
      description: "Kokeneita portsareita ja turvahenkilöstöä baareihin ja yökerhoihin",
      icon: "Shield"
    },
    {
      title: "Ensiapupalvelut",
      description: "Koulutettu ensiapuhenkilöstö tapahtumiin ja hätätilanteisiin",
      icon: "Heart",
      image: "https://cdn.poehali.dev/files/c8ec5548-4fde-4089-a442-c848bbbba2e5.jpeg"
    }
  ];

  const additionalServices = [
    "Suunnittelu ja avustaminen lupa-asioissa",
    "Pelastussuunnitelman laatiminen", 
    "Turvallisuusjohtaminen",
    "Turvallisuuspäällikköpalvelut",
    "Järjestyksenvalvonta",
    "Turvatarkastukset",
    "Ensiapupalvelut",
    "Jälkitoimenpiteiden toteuttaminen",
    "Naulakkopalvelut"
  ];

  const teamMembers = [
    {
      name: "Nikita Gruzinskiy",
      role: "Hallituksen puheenjohtaja",
      description: "6 vuoden kokemus ravintola- ja tapahtumaturvallisuudesta, erityisesti haastavissa järjestyksenvalvontatehtävissä sekä esimiestehtävissä.",
      icon: "Crown"
    },
    {
      name: "Ville Mäkelä", 
      role: "Toimitusjohtaja",
      description: "Yli kuuden vuoden kokemus vaativista järjestyksenvalvonta- ja alan esimiestehtävistä. Syvällinen ymmärrys turvallisuusalasta.",
      icon: "Briefcase"
    },
    {
      name: "Nuuradin Mungani",
      role: "Toimitusjohtajan sijainen", 
      description: "Monikielinen turvallisuusalan ammattilainen, yli kuuden vuoden kokemus alalta. Asiakaspalvelukeskeinen lähestymistapa.",
      icon: "Users"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
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

      {/* Hero Section */}
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

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
              Tietoa <span className="text-primary">Meistä</span>
            </h2>
            <div className="text-center mb-16">
              <p className="text-2xl font-light text-muted-foreground mb-2">
                Me emme arvaile, me ennakoimme.
              </p>
              <p className="text-2xl font-light text-muted-foreground">
                Me emme vain näy – me turvaamme.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Meille turvallisuus tarkoittaa enemmän kuin vain näkyvää läsnäoloa – 
                  se on ennakointia, vastuuta ja ammattitaitoa. Tavoitteemme on, että 
                  asiakkaat viihtyvät ja henkilökunta voi keskittyä omaan työhönsä.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Sectoresin tiimi koostuu kokeneista ja monikielisistä turvallisuusalan 
                  ammattilaisista, jotka ymmärtävät asiakaspalvelun ja turvallisuuden 
                  merkityksen. Rakennamme Uudellemaalle turvallisempaa arkea tapahtumiin 
                  ja ravintoloihin, ammattitaidolla ja varmuudella.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Hommat tehdään kunnolla alusta asti, ja jokainen vuoro on meille 
                  mahdollisuus vaikuttaa asiakkaan kokemukseen sekä rakentaa mainettamme.
                </p>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 text-white">
                  <Icon name="Shield" size={48} className="mb-4" />
                  <h4 className="text-xl font-semibold mb-4">Miksi valita Sectores?</h4>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start">
                      <Icon name="Check" size={16} className="mr-2 mt-1 flex-shrink-0" />
                      <span>Turvallisuus ensin – ennakoimme ja ennaltaehkäisemme</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="Check" size={16} className="mr-2 mt-1 flex-shrink-0" />
                      <span>Ammattitaitoiset ja koulutetut järjestyksenvalvojat</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="Check" size={16} className="mr-2 mt-1 flex-shrink-0" />
                      <span>Monikielinen, helposti lähestyttävä tiimi</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="Check" size={16} className="mr-2 mt-1 flex-shrink-0" />
                      <span>Kilpailukykyinen hinta, joustava aikataulu</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="Check" size={16} className="mr-2 mt-1 flex-shrink-0" />
                      <span>Räätälöity turvallisuussuunnittelu</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Benefits Grid */}
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center border-2 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="ShieldCheck" size={32} className="text-primary" />
                  </div>
                  <CardTitle>Turvallisempi ympäristö</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Hallittu ilmapiiri lisää asiakastyytyväisyyttä ja houkuttelee uusia asiakkaita
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center border-2 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Scale" size={32} className="text-primary" />
                  </div>
                  <CardTitle>Lakisääteinen ratkaisu</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Järjestyksenvalvojamme ovat alan ammattilaisia ja noudattavat tarkasti lakia
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center border-2 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Users" size={32} className="text-primary" />
                  </div>
                  <CardTitle>Henkilökunnan tuki</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Kun turvallisuus on hoidettu, työntekijät voivat keskittyä palveluun
                  </CardDescription>
                </CardContent>
              </Card>
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
              Tarjoamme laajan valikoiman turvallisuuspalveluja, jotka räätälöimme aina asiakkaidemme tarpeiden mukaan
            </p>
            
            {/* Main Services */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {services.map((service, index) => (
                <Card 
                  key={index} 
                  className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50 overflow-hidden"
                >
                  {service.image && (
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <CardHeader className="text-center">
                    {!service.image && (
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon name={service.icon as any} size={32} className="text-primary" />
                      </div>
                    )}
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

            {/* Additional Services */}
            <div className="bg-muted/50 rounded-2xl p-8 mb-12">
              <h3 className="text-2xl font-semibold text-center mb-6">Lisäpalvelumme</h3>
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                {additionalServices.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-background rounded-lg">
                    <Icon name="Check" size={20} className="text-primary flex-shrink-0" />
                    <span className="text-sm">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing Information */}
            <div className="bg-primary/5 rounded-2xl p-8 mb-12">
              <h3 className="text-2xl font-semibold text-center mb-6">Hinnoittelu</h3>
              <p className="text-lg text-muted-foreground leading-relaxed text-center max-w-4xl mx-auto">
                Tarjoamme kilpailukykyisen ja selkeästi eritellyn hinnoittelun, joka perustuu tapahtuman tai 
                kohteen yksilöllisiin tarpeisiin. Räätälöimme tarjouksen aina asiakaskohtaisesti, läpinäkyvästi 
                ja kustannustehokkaasti.
              </p>
            </div>

            <div className="bg-muted/50 rounded-2xl p-8 mb-12">
              <h3 className="text-2xl font-semibold text-center mb-6">Mitä saat, kun valitset meidät?</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Icon name="Check" size={20} className="text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span>Täysin räätälöidyn turvallisuusratkaisun</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" size={20} className="text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span>Kokenutta ja koulutettua henkilökuntaa</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" size={20} className="text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span>Ensiapu- ja kriisiosaamista hätätilanteiden varalle</span>
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Icon name="Check" size={20} className="text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span>Näkyvän mutta huomaavaisen turvallisuustiimin</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" size={20} className="text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span>Läpinäkyvän hinnoittelun ja joustavan aikataulun</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" size={20} className="text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span>Kilpailukykyisen hinnan ja korkean laadun</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="text-center">
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

      {/* Team Section */}
      <section id="team" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              Tiimimme
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="text-center border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                  <CardHeader>
                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name={member.icon as any} size={32} className="text-white" />
                    </div>
                    <CardTitle className="text-xl">{member.name}</CardTitle>
                    <div className="text-primary font-medium">{member.role}</div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {member.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
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
                      <div className="text-white/80">Management@sectores.fi</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <Icon name="Instagram" size={24} />
                    </div>
                    <div>
                      <div className="font-semibold">Instagram</div>
                      <div className="text-white/80">@Sectores.fi</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <Icon name="Facebook" size={24} />
                    </div>
                    <div>
                      <div className="font-semibold">Facebook</div>
                      <a 
                        href="https://www.facebook.com/profile.php?id=61574191452174" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white/80 hover:text-white transition-colors"
                      >
                        Sectores Facebook
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <Icon name="MapPin" size={24} />
                    </div>
                    <div>
                      <div className="font-semibold">Sijainti</div>
                      <div className="text-white/80">Uusimaa, Suomi</div>
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
                <form 
                  className="space-y-4"
                  action="mailto:Management@sectores.fi"
                  method="post"
                  encType="text/plain"
                >
                  <div>
                    <input 
                      type="text" 
                      name="name"
                      placeholder="Nimi" 
                      required
                      className="w-full p-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      name="email"
                      placeholder="Sähköposti" 
                      required
                      className="w-full p-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <input 
                      type="tel" 
                      name="phone"
                      placeholder="Puhelinnumero" 
                      className="w-full p-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <textarea 
                      name="message"
                      placeholder="Kuvaile turvallisuustarpeitasi..." 
                      rows={4}
                      required
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
            <div className="flex items-center justify-center mb-6">
              <img 
                src="https://cdn.poehali.dev/files/318658ce-521b-41ec-b2cc-ef0fec265cce.png" 
                alt="Sectores" 
                className="h-12 w-auto object-contain"
              />
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