
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye, Edit, MoreHorizontal } from "lucide-react";
import { Link } from "react-router-dom";

const products = [
  {
    id: "PRD001",
    name: "Kaos Polo Premium",
    category: "Kaos",
    price: "Rp 85,000",
    status: "post",
    image: "/placeholder.svg"
  },
  {
    id: "PRD002", 
    name: "Kemeja Formal Slimfit",
    category: "Kemeja",
    price: "Rp 120,000",
    status: "schedule",
    image: "/placeholder.svg"
  },
  {
    id: "PRD003",
    name: "Jaket Denim Casual",
    category: "Jaket",
    price: "Rp 180,000",
    status: "draft",
    image: "/placeholder.svg"
  },
  {
    id: "PRD004",
    name: "Celana Chino Premium",
    category: "Celana",
    price: "Rp 95,000",
    status: "post",
    image: "/placeholder.svg"
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "post": return "default";
    case "schedule": return "secondary";
    case "draft": return "outline";
    default: return "outline";
  }
};

const getStatusText = (status: string) => {
  switch (status) {
    case "post": return "Published";
    case "schedule": return "Scheduled";
    case "draft": return "Draft";
    default: return status;
  }
};

export function ProductView() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Produk Terbaru</CardTitle>
            <CardDescription>Daftar produk yang baru ditambahkan</CardDescription>
          </div>
          <Link to="/products">
            <Button variant="outline" size="sm">
              Lihat Semua
            </Button>
          </Link>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {products.map((product) => (
            <div key={product.id} className="flex items-center gap-3 p-3 border rounded-lg hover:bg-accent/50 transition-colors">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-12 h-12 rounded-lg object-cover bg-muted"
              />
              <div className="flex-1 min-w-0">
                <h4 className="font-medium truncate">{product.name}</h4>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>{product.category}</span>
                  <span>•</span>
                  <span className="font-medium text-foreground">{product.price}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant={getStatusColor(product.status)}>
                  {getStatusText(product.status)}
                </Badge>
                <Button variant="ghost" size="sm">
                  <Eye className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
