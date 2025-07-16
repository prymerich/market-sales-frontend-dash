
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Edit, Trash2, Calendar, Search } from "lucide-react";

const products = [
  {
    id: "PRD001",
    name: "Kaos Polo Premium",
    category: "Kaos",
    weight: 200,
    price: 85000,
    status: "post",
    scheduledDate: null,
  },
  {
    id: "PRD002",
    name: "Kemeja Formal Slimfit", 
    category: "Kemeja",
    weight: 300,
    price: 120000,
    status: "schedule",
    scheduledDate: "2024-12-25",
  },
  {
    id: "PRD003",
    name: "Jaket Denim Casual",
    category: "Jaket", 
    weight: 500,
    price: 180000,
    status: "draft",
    scheduledDate: null,
  },
  {
    id: "PRD004",
    name: "Celana Chino Premium",
    category: "Celana",
    weight: 350,
    price: 95000,
    status: "post",
    scheduledDate: null,
  },
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

interface ProductTableProps {
  onEdit: (product: any) => void;
}

export function ProductTable({ onEdit }: ProductTableProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || product.status === statusFilter;
    const matchesCategory = categoryFilter === "all" || product.category === categoryFilter;
    
    return matchesSearch && matchesStatus && matchesCategory;
  });

  const handleDelete = (id: string) => {
    console.log("Deleting product:", id);
    // Implement delete logic
  };

  const handleSchedule = (id: string) => {
    console.log("Scheduling product:", id);
    // Implement scheduling logic
  };

  return (
    <div className="space-y-4">
      {/* Filters */}
      <div className="flex gap-4 items-center">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Cari produk..."
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
            <SelectItem value="post">Published</SelectItem>
            <SelectItem value="schedule">Scheduled</SelectItem>
            <SelectItem value="draft">Draft</SelectItem>
          </SelectContent>
        </Select>
        <Select value={categoryFilter} onValueChange={setCategoryFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter Kategori" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Semua Kategori</SelectItem>
            <SelectItem value="Kaos">Kaos</SelectItem>
            <SelectItem value="Kemeja">Kemeja</SelectItem>
            <SelectItem value="Jaket">Jaket</SelectItem>
            <SelectItem value="Celana">Celana</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Table */}
      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Kode</TableHead>
              <TableHead>Nama Produk</TableHead>
              <TableHead>Kategori</TableHead>
              <TableHead>Berat (gram)</TableHead>
              <TableHead>Harga</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Jadwal</TableHead>
              <TableHead>Aksi</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredProducts.map((product) => (
              <TableRow key={product.id}>
                <TableCell className="font-medium">{product.id}</TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell>{product.weight}g</TableCell>
                <TableCell>Rp {product.price.toLocaleString()}</TableCell>
                <TableCell>
                  <Badge variant={getStatusColor(product.status)}>
                    {getStatusText(product.status)}
                  </Badge>
                </TableCell>
                <TableCell>
                  {product.scheduledDate ? product.scheduledDate : "-"}
                </TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => onEdit(product)}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleSchedule(product.id)}
                    >
                      <Calendar className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDelete(product.id)}
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
