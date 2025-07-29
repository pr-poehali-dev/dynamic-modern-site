import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function Team() {
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
  );
}