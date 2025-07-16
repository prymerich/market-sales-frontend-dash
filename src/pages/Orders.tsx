
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { OrderTable } from "@/components/orders/OrderTable";
import { OrderForm } from "@/components/orders/OrderForm";
import { OrderDashboard } from "@/components/orders/OrderDashboard";
import { SalesStatistics } from "@/components/orders/SalesStatistics";
import { Plus } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export default function Orders() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingOrder, setEditingOrder] = useState(null);

  const handleAddOrder = () => {
    setEditingOrder(null);
    setIsFormOpen(true);
  };

  const handleEditOrder = (order: any) => {
    setEditingOrder(order);
    setIsFormOpen(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Manajemen Pesanan</h2>
          <p className="text-muted-foreground">
            Kelola pesanan dan analisis penjualan
          </p>
        </div>
        <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
          <DialogTrigger asChild>
            <Button onClick={handleAddOrder} className="gap-2">
              <Plus className="h-4 w-4" />
              Tambah Pesanan
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>
                {editingOrder ? "Edit Pesanan" : "Tambah Pesanan Baru"}
              </DialogTitle>
            </DialogHeader>
            <OrderForm
              order={editingOrder}
              onSuccess={() => setIsFormOpen(false)}
            />
          </DialogContent>
        </Dialog>
      </div>

      <OrderDashboard />

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Daftar Pesanan</CardTitle>
            <CardDescription>
              Kelola status dan detail pesanan pelanggan
            </CardDescription>
          </CardHeader>
          <CardContent>
            <OrderTable onEdit={handleEditOrder} />
          </CardContent>
        </Card>

        <SalesStatistics />
      </div>
    </div>
  );
}
