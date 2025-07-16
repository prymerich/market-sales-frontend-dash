
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const salesTrendData = [
  { month: "Jan", revenue: 12500000 },
  { month: "Feb", revenue: 8700000 },
  { month: "Mar", revenue: 15200000 },
  { month: "Apr", revenue: 11800000 },
  { month: "May", revenue: 18500000 },
  { month: "Jun", revenue: 16200000 },
];

const productSalesData = [
  { name: "Kaos", value: 35, color: "hsl(var(--primary))" },
  { name: "Kemeja", value: 25, color: "hsl(var(--accent))" },
  { name: "Jaket", value: 20, color: "hsl(var(--secondary))" },
  { name: "Celana", value: 15, color: "hsl(var(--muted-foreground))" },
  { name: "Aksesoris", value: 5, color: "hsl(var(--destructive))" },
];

export function SalesStatistics() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Trend Penjualan</CardTitle>
          <CardDescription>Revenue 6 bulan terakhir</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={salesTrendData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis tickFormatter={(value) => `${value / 1000000}M`} />
              <Tooltip 
                formatter={(value: number) => [`Rp ${value.toLocaleString()}`, "Revenue"]}
              />
              <Area 
                type="monotone" 
                dataKey="revenue" 
                stroke="hsl(var(--primary))" 
                fill="hsl(var(--primary))" 
                fillOpacity={0.3}
              />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Penjualan per Kategori</CardTitle>
          <CardDescription>Distribusi penjualan berdasarkan kategori produk</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={productSalesData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {productSalesData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
