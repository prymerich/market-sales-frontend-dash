import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Star, Rocket } from "lucide-react";

export const CTASection = () => {
  const benefits = [
    "30-day free trial",
    "No setup fees",
    "24/7 expert support",
    "Cancel anytime"
  ];

  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <Card className="max-w-4xl mx-auto bg-white/95 backdrop-blur-sm border-0 shadow-strong">
          <CardContent className="p-12 text-center">
            <div className="mb-8">
              <div className="flex justify-center items-center mb-4">
                <Rocket className="w-12 h-12 text-accent mr-3" />
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-6 h-6 fill-warning text-warning" />
                  ))}
                </div>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                Join thousands of companies already growing with our platform. 
                Start your journey to exponential growth today.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center justify-center space-x-2 text-success">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="hero" size="lg" className="text-lg px-10 py-6">
                Start Your Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-10 py-6">
                Schedule Demo
              </Button>
            </div>

            <p className="text-sm text-muted-foreground mt-6">
              No credit card required • Get started in under 2 minutes
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};