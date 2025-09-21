import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star, Users, Award, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-education.jpg";

const Hero = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-5" />
      
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <Badge variant="secondary" className="w-fit">
              🚀 Transforme sua Carreira Agora
            </Badge>
            
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Domine <span className="text-primary">Todas as Profissões</span> por apenas{" "}
                <span className="text-accent font-extrabold">R$ 350/mês</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                Acesso ilimitado a cursos de <strong>TI, Programação, Advocacia, Medicina</strong> e muito mais. 
                Uma assinatura, infinitas possibilidades de crescimento profissional.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                <span><strong>350+</strong> Alunos</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                <span><strong>200+</strong> Cursos</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-accent fill-accent" />
                <span><strong>4.9/5</strong> Avaliação</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="group">
                Começar Agora - R$ 350/mês
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl">
                Ver Demonstração
              </Button>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <TrendingUp className="h-4 w-4 text-success" />
              <span>+2.500 profissionais se inscreveram este mês</span>
            </div>
          </div>

          {/* Right image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-custom-xl">
              <img
                src={heroImage}
                alt="Profissionais estudando na Academia de Cursos"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            
            {/* Floating stats */}
            <div className="absolute -top-4 -right-4 bg-card rounded-xl p-4 shadow-custom-lg border">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-success rounded-full animate-pulse" />
                <span className="text-sm font-medium">1.247 online agora</span>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-card rounded-xl p-4 shadow-custom-lg border">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Taxa de Aprovação</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;