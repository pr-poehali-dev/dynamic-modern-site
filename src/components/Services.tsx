import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface ServicesProps {
  scrollToSection: (id: string) => void;
}

export default function Services({ scrollToSection }: ServicesProps) {
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

  return (
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
  );
}