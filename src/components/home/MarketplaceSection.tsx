
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Star } from "lucide-react";

const marketplaceData = [
  {
    name: "Shopee",
    status: "Active",
    orders: 45,
    rating: 4.8,
    revenue: "Rp 12.5M"
  },
  {
    name: "Tokopedia",
    status: "Active", 
    orders: 32,
    rating: 4.6,
    revenue: "Rp 8.7M"
  },
  {
    name: "Lazada",
    status: "Pending",
    orders: 18,
    rating: 4.4,
    revenue: "Rp 5.2M"
  }
];

export function MarketplaceSection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Marketplace Integration</CardTitle>
        <CardDescription>Status integrasi dengan platform marketplace</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {marketplaceData.map((marketplace) => (
            <div key={marketplace.name} className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="font-medium text-sm">{marketplace.name[0]}</span>
                </div>
                <div>
                  <h4 className="font-medium">{marketplace.name}</h4>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    {marketplace.rating} • {marketplace.orders} pesanan
                  </div>
                </div>
              </div>
              <div className="text-right">
                <Badge variant={marketplace.status === "Active" ? "default" : "secondary"}>
                  {marketplace.status}
                </Badge>
                <p className="text-sm font-medium mt-1">{marketplace.revenue}</p>
              </div>
            </div>
          ))}
          <Button variant="outline" className="w-full gap-2">
            <ExternalLink className="h-4 w-4" />
            Kelola Marketplace
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
