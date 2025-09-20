import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Dr. Maria Silva",
      role: "Cardiologista",
      avatar: "/api/placeholder/100/100",
      rating: 5,
      text: "Consegui me especializar em cardiologia intervencionista através da plataforma. O conteúdo é excepcional e os professores são referências na área. Minha renda aumentou 300% após os cursos.",
      highlight: "Aumento de 300% na renda"
    },
    {
      name: "João Santos",
      role: "Desenvolvedor Full Stack",
      avatar: "/api/placeholder/100/100", 
      rating: 5,
      text: "Saí de auxiliar administrativo para desenvolvedor sênior em 8 meses. A trilha de programação é completa e prática. Hoje trabalho remotamente ganhando R$ 15.000/mês.",
      highlight: "De auxiliar a desenvolvedor sênior"
    },
    {
      name: "Dra. Ana Costa",
      role: "Advogada Tributarista",
      avatar: "/api/placeholder/100/100",
      rating: 5,
      text: "Os cursos de direito tributário me permitiram abrir meu próprio escritório. Em 6 meses já tinha uma carteira de 50 clientes. O ROI foi incrível - paguei a assinatura no primeiro mês.",
      highlight: "ROI em 1 mês"
    },
    {
      name: "Carlos Mendes",
      role: "Especialista em Marketing",
      avatar: "/api/placeholder/100/100",
      rating: 5,
      text: "Migrei da área financeira para marketing digital. Os cursos são atualizados com as últimas tendências. Hoje gerencio campanhas de R$ 2 milhões mensais para grandes empresas.",
      highlight: "Gerencia R$ 2M em campanhas"
    },
    {
      name: "Rafael Lima",
      role: "DevOps Engineer",
      avatar: "/api/placeholder/100/100",
      rating: 5,
      text: "A seção de DevOps e Cloud Computing é fantástica. Consegui certificações AWS e Azure através dos cursos. Fui promovido a DevOps Senior com aumento de 150% no salário.",
      highlight: "Aumento de 150% no salário"
    },
    {
      name: "Dra. Lucia Ferreira",
      role: "Dermatologista",
      avatar: "/api/placeholder/100/100",
      rating: 5,
      text: "Me especializei em dermatologia estética através da plataforma. Os professores são os mesmos que operam nos melhores hospitais do país. Abri minha clínica e faturo R$ 80k/mês.",
      highlight: "Faturamento R$ 80k/mês"
    }
  ];

  return (
    <section id="depoimentos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            ⭐ Depoimentos Reais
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Histórias de <span className="text-primary">Sucesso Real</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Mais de 50.000 profissionais já transformaram suas carreiras. 
            Veja alguns resultados impressionantes dos nossos alunos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-custom-lg transition-all duration-300 border-0 shadow-custom-md relative">
              <CardContent className="p-6">
                {/* Quote icon */}
                <Quote className="h-8 w-8 text-primary/20 mb-4" />
                
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-accent fill-accent" />
                  ))}
                </div>

                {/* Testimonial text */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Highlight */}
                <div className="bg-success/10 text-success text-sm font-medium px-3 py-1 rounded-full mb-4 w-fit">
                  {testimonial.highlight}
                </div>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={testimonial.avatar} />
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <p className="text-lg mb-4">
            <strong>Você será o próximo caso de sucesso?</strong>
          </p>
          <p className="text-muted-foreground mb-6">
            Junte-se a mais de 50.000 profissionais que já transformaram suas carreiras
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
              <span>2.847 avaliações 5 estrelas</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span>98% de satisfação</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;