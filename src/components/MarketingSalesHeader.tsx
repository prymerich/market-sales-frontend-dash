import { BarChart3, Users, Target, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export const MarketingSalesHeader = () => {
  return (
    <header className="bg-gradient-hero text-primary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Accelerate Your
              <span className="block bg-gradient-to-r from-accent-glow to-primary-glow bg-clip-text text-transparent">
                Growth Story
              </span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-primary-foreground/90 max-w-2xl animate-fade-in">
              Transform your marketing and sales performance with data-driven insights and powerful automation tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-scale-in">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                Start Free Trial
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-white/10 border-white/20 text-white hover:bg-white/20">
                Watch Demo
              </Button>
            </div>
          </div>
          
          <div className="flex-1 max-w-lg">
            <div className="grid grid-cols-2 gap-4 animate-scale-in">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <BarChart3 className="w-8 h-8 mx-auto mb-3 text-accent-glow" />
                <div className="text-2xl font-bold mb-1">300%</div>
                <div className="text-sm text-primary-foreground/80">ROI Increase</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <Users className="w-8 h-8 mx-auto mb-3 text-accent-glow" />
                <div className="text-2xl font-bold mb-1">50K+</div>
                <div className="text-sm text-primary-foreground/80">Active Users</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <Target className="w-8 h-8 mx-auto mb-3 text-accent-glow" />
                <div className="text-2xl font-bold mb-1">95%</div>
                <div className="text-sm text-primary-foreground/80">Target Hit Rate</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <TrendingUp className="w-8 h-8 mx-auto mb-3 text-accent-glow" />
                <div className="text-2xl font-bold mb-1">200%</div>
                <div className="text-sm text-primary-foreground/80">Sales Growth</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};