import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function About() {
  return (
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
  );
}