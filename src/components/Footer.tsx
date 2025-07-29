export default function Footer() {
  return (
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
  );
}