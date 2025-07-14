import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown, DollarSign, Users, Target, BarChart3, PieChart, Activity } from "lucide-react";

export const MetricsDashboard = () => {
  const metrics = [
    {
      title: "Total Revenue",
      value: "$2.4M",
      change: "+12.5%",
      trend: "up",
      icon: DollarSign,
      description: "Monthly recurring revenue"
    },
    {
      title: "Active Leads",
      value: "8,429",
      change: "+8.2%",
      trend: "up",
      icon: Users,
      description: "Qualified prospects"
    },
    {
      title: "Conversion Rate",
      value: "24.8%",
      change: "+2.1%",
      trend: "up",
      icon: Target,
      description: "Lead to customer"
    },
    {
      title: "Campaign ROI",
      value: "435%",
      change: "-3.2%",
      trend: "down",
      icon: BarChart3,
      description: "Return on ad spend"
    },
    {
      title: "Customer LTV",
      value: "$12,450",
      change: "+15.7%",
      trend: "up",
      icon: PieChart,
      description: "Lifetime value"
    },
    {
      title: "Monthly Growth",
      value: "18.9%",
      change: "+4.3%",
      trend: "up",
      icon: Activity,
      description: "MoM growth rate"
    }
  ];

  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Real-time Performance Insights
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Monitor your marketing and sales KPIs with our comprehensive analytics dashboard
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            const isPositive = metric.trend === "up";
            
            return (
              <Card key={index} className="hover:shadow-medium transition-all duration-300 transform hover:scale-105 bg-gradient-card border-0">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {metric.title}
                  </CardTitle>
                  <Icon className="h-5 w-5 text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground mb-1">
                    {metric.value}
                  </div>
                  <div className="flex items-center space-x-2">
                    {isPositive ? (
                      <TrendingUp className="h-4 w-4 text-success" />
                    ) : (
                      <TrendingDown className="h-4 w-4 text-destructive" />
                    )}
                    <span className={`text-sm font-medium ${
                      isPositive ? "text-success" : "text-destructive"
                    }`}>
                      {metric.change}
                    </span>
                  </div>
                  <CardDescription className="mt-2">
                    {metric.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};