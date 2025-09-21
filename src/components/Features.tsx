import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Scale, 
  Heart, 
  Monitor, 
  BookOpen, 
  Award, 
  Users, 
  Clock, 
  Download,
  Smartphone,
  Trophy,
  TrendingUp
} from "lucide-react";

const Features = () => {
  const courses = [
    {
      icon: Code,
      title: "Programação & TI",
      description: "Python, JavaScript, React, Node.js, DevOps, Cybersecurity",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      courses: "45+ cursos"
    },
    {
      icon: Scale,
      title: "Direito & Advocacia",
      description: "Direito Civil, Penal, Trabalhista, Tributário, OAB",
      color: "text-amber-600",
      bgColor: "bg-amber-50",
      courses: "35+ cursos"
    },
    {
      icon: Heart,
      title: "Medicina & Saúde",
      description: "Clínica Médica, Cirurgia, Cardiologia, Dermatologia",
      color: "text-red-600",
      bgColor: "bg-red-50",
      courses: "40+ cursos"
    },
    {
      icon: Monitor,
      title: "Marketing Digital",
      description: "SEO, Google Ads, Facebook Ads, Analytics, E-commerce",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      courses: "25+ cursos"
    }
  ];

  const benefits = [
    {
      icon: BookOpen,
      title: "Conteúdo Premium",
      description: "Materiais exclusivos criados por especialistas reconhecidos no mercado"
    },
    {
      icon: Clock,
      title: "Acesso 24/7",
      description: "Estude quando e onde quiser, no seu próprio ritmo"
    },
    {
      icon: Download,
      title: "Download Offline",
      description: "Baixe as aulas e estude mesmo sem conexão com a internet"
    },
    {
      icon: Smartphone,
      title: "Multi-Plataforma",
      description: "Acesse pelo computador, tablet ou smartphone"
    },
    {
      icon: Award,
      title: "Certificados Válidos",
      description: "Certificados reconhecidos pelo mercado e integração com LinkedIn"
    },
    {
      icon: Users,
      title: "Comunidade Ativa",
      description: "Networking com mais de 50.000 profissionais"
    }
  ];

  return (
    <section id="cursos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            📚 Áreas de Conhecimento
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Uma Plataforma, <span className="text-primary">Infinitas Carreiras</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Por apenas R$ 350/mês, tenha acesso completo a todos os cursos de todas as áreas. 
            Sem limites, sem restrições.
          </p>
        </div>

        {/* Course Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {courses.map((course, index) => (
            <Card key={index} className="group hover:shadow-custom-lg transition-all duration-300 border-0 shadow-custom-md">
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 ${course.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <course.icon className={`h-8 w-8 ${course.color}`} />
                </div>
                <CardTitle className="text-xl mb-2">{course.title}</CardTitle>
                <Badge variant="outline" className="w-fit mx-auto">
                  {course.courses}
                </Badge>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center leading-relaxed">
                  {course.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Por que Escolher a <span className="text-primary">Academia Pro?</span>
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex gap-4 group">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">{benefit.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 bg-gradient-card rounded-2xl p-8 shadow-custom-lg">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">200+</div>
              <div className="text-muted-foreground">Cursos Disponíveis</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">50.000+</div>
              <div className="text-muted-foreground">Alunos Ativos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">5.000+</div>
              <div className="text-muted-foreground">Horas de Conteúdo</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">98%</div>
              <div className="text-muted-foreground">Satisfação</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;