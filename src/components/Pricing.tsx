import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight, Star } from "lucide-react";

const Pricing = () => {
  const features = [
    "Acesso TOTAL a todos os 200+ cursos",
    "Novas aulas adicionadas semanalmente",
    "Certificados válidos em todas as áreas",
    "Download para estudar offline",
    "Suporte 24/7 de especialistas",
    "Acesso à comunidade exclusiva",
    "Materiais complementares (PDFs, exercícios)",
    "Integração direta com LinkedIn",
    "Trilhas de aprendizado personalizadas",
    "Quizzes e avaliações interativas"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            💎 Plano Único
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Um Preço, <span className="text-primary">Todas as Profissões</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Diferente de outras plataformas que cobram por curso, aqui você paga uma vez e 
            tem acesso a TUDO. Sem pegadinhas, sem taxas extras.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="relative border-2 border-primary shadow-custom-xl">
            {/* Popular badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-gradient-accent text-accent-foreground px-6 py-2 text-sm font-semibold">
                ⭐ MAIS POPULAR
              </Badge>
            </div>

            <CardHeader className="text-center pt-12 pb-8">
              <CardTitle className="text-2xl mb-4">Assinatura Premium</CardTitle>
              
              <div className="space-y-2">
                <div className="flex items-center justify-center gap-2">
                  <span className="text-5xl font-bold text-primary">R$:350</span>
                  <div className="text-left">
                    <div className="text-muted-foreground text-sm">/mês</div>
                    <div className="text-muted-foreground text-xs">por pessoa</div>
                  </div>
                </div>
                
                <div className="text-muted-foreground">
                  <span className="line-through">R$ 15.000</span> economize R$ 10.000/mês
                </div>
              </div>

              <div className="flex items-center justify-center gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-accent fill-accent" />
                ))}
                <span className="ml-2 text-sm text-muted-foreground">4.9/5 (2.847 avaliações)</span>
              </div>
            </CardHeader>

            <CardContent className="space-y-8">
              {/* Comparison */}
              <div className="bg-muted/30 rounded-xl p-6">
                <h4 className="font-semibold text-center mb-4">Compare com a Concorrência:</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2">
                    <div className="font-medium text-destructive">❌ Outras Plataformas:</div>
                    <div>• R$ 500-2.000 POR CURSO</div>
                    <div>• Acesso limitado por tempo</div>
                    <div>• Sem suporte personalizado</div>
                    <div>• Certificados genéricos</div>
                  </div>
                  <div className="space-y-2">
                    <div className="font-medium text-success">✅ Academia Pro:</div>
                    <div>• R$:350 por TODOS os cursos</div>
                    <div>• Acesso vitalício enquanto assinante</div>
                    <div>• Suporte 24/7 especializado</div>
                    <div>• Certificados reconhecidos</div>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4">
                <h4 className="font-semibold text-center">Tudo Incluso na Sua Assinatura:</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="space-y-4 pt-4">
                <Button variant="hero" size="xl" className="w-full group">
                  Começar Agora - Garantia de 30 Dias
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <div className="text-center space-y-2">
                  <p className="text-sm text-muted-foreground">
                    🔒 Pagamento 100% seguro • Cancele quando quiser
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Mais de 2.500 profissionais se inscreveram este mês
                  </p>
                </div>
              </div>

              {/* Guarantee */}
              <div className="bg-success/10 border border-success/20 rounded-xl p-4 text-center">
                <div className="font-semibold text-success mb-1">Garantia de 30 Dias</div>
                <div className="text-sm text-muted-foreground">
                  Não ficou satisfeito? Devolvemos 100% do seu dinheiro, sem perguntas.
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Pricing;