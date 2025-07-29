import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function Contact() {
  return (
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
  );
}