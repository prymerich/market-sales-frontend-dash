import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Megaphone, 
  Users, 
  BarChart3, 
  Mail, 
  Target, 
  Zap,
  Globe,
  MessageSquare,
  TrendingUp
} from "lucide-react";

export const ServicesGrid = () => {
  const services = [
    {
      icon: Megaphone,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing campaigns across all channels",
      features: ["SEO & SEM", "Social Media", "Content Marketing", "PPC Advertising"],
      color: "text-accent"
    },
    {
      icon: Users,
      title: "Lead Generation",
      description: "Advanced lead generation and qualification systems",
      features: ["Lead Scoring", "CRM Integration", "Automated Nurturing", "Conversion Tracking"],
      color: "text-primary"
    },
    {
      icon: BarChart3,
      title: "Sales Analytics",
      description: "Deep insights into your sales performance and trends",
      features: ["Performance Dashboards", "Forecasting", "Pipeline Analysis", "ROI Tracking"],
      color: "text-success"
    },
    {
      icon: Mail,
      title: "Email Marketing",
      description: "Personalized email campaigns that convert",
      features: ["Automation", "Segmentation", "A/B Testing", "Personalization"],
      color: "text-warning"
    },
    {
      icon: Target,
      title: "Sales Optimization",
      description: "Optimize your sales process for maximum efficiency",
      features: ["Process Automation", "Sales Training", "Territory Management", "Commission Tracking"],
      color: "text-info"
    },
    {
      icon: Zap,
      title: "Marketing Automation",
      description: "Streamline your marketing with intelligent automation",
      features: ["Workflow Builder", "Trigger-based Actions", "Multi-channel Campaigns", "Behavioral Tracking"],
      color: "text-accent"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Complete Marketing & Sales Suite
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to drive growth, from lead generation to closing deals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            
            return (
              <Card key={index} className="group hover:shadow-strong transition-all duration-500 transform hover:scale-105 bg-gradient-card border-0 overflow-hidden">
                <CardHeader className="text-center pb-4">
                  <div className="mb-4 mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className={`h-8 w-8 ${service.color}`} />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="gradient" className="w-full group-hover:shadow-medium">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg" className="text-lg px-8 py-4">
            <Globe className="w-5 h-5 mr-2" />
            Explore All Features
          </Button>
        </div>
      </div>
    </section>
  );
};