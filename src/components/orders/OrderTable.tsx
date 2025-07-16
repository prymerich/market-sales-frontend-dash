
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Edit, Trash2, Eye, Search } from "lucide-react";

const orders = [
  {
    id: "ORD001",
    customer: "Ahmad Wijaya",
    product: "Kaos Polo Premium",
    quantity: 5,
    total: 425000,
    status: "pending",
    date: "2024-01-15",
  },
  {
    id: "ORD002",
    customer: "Siti Nurhaliza",
    product: "Kemeja Formal Slimfit",
    quantity: 2,
    total: 240000,
    status: "processing",
    date: "2024-01-14",
  },
  {
    id: "ORD003",
    customer: "Budi Santoso",
    product: "Jaket Denim Casual",
    quantity: 1,
    total: 180000,
    status: "shipped",
    date: "2024-01-13",
  },
  {
    id: "ORD004",
    customer: "Maya Sari",
    product: "Celana Chino Premium",
    quantity: 3,
    total: 285000,
    status: "delivered",
    date: "2024-01-12",
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "pending": return "secondary";
    case "processing": return "default";
    case "shipped": return "outline";
    case "delivered": return "success";
    case "cancelled": return "destructive";
    default: return "outline";
  }
};

const getStatusText = (status: string) => {
  switch (status) {
    case "pending": return "Menunggu";
    case "processing": return "Diproses";
    case "shipped": return "Dikirim";
    case "delivered": return "Selesai";
    case "cancelled": return "Dibatalkan";
    default: return status;
  }
};

interface OrderTableProps {
  onEdit: (order: any) => void;
}

export function OrderTable({ onEdit }: OrderTableProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.product.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || order.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const handleDelete = (id: string) => {
    console.log("Deleting order:", id);
    // Implement delete logic
  };

  const handleView = (id: string) => {
    console.log("Viewing order:", id);
    // Implement view logic
  };

  return (
    <div className="space-y-4">
      {/* Filters */}
      <div className="flex gap-4 items-center">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Cari pesanan..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Semua Status</SelectItem>
            <SelectItem value="pending">Menunggu</SelectItem>
            <SelectItem value="processing">Diproses</SelectItem>
            <SelectItem value="shipped">Dikirim</SelectItem>
            <SelectItem value="delivered">Selesai</SelectItem>
            <SelectItem value="cancelled">Dibatalkan</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Table */}
      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID Pesanan</TableHead>
              <TableHead>Pelanggan</TableHead>
              <TableHead>Produk</TableHead>
              <TableHead>Jumlah</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Tanggal</TableHead>
              <TableHead>Aksi</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredOrders.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="font-medium">{order.id}</TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell>{order.product}</TableCell>
                <TableCell>{order.quantity}</TableCell>
                <TableCell>Rp {order.total.toLocaleString()}</TableCell>
                <TableCell>
                  <Badge variant={getStatusColor(order.status) as any}>
                    {getStatusText(order.status)}
                  </Badge>
                </TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleView(order.id)}
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => onEdit(order)}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDelete(order.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
