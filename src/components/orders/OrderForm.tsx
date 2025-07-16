
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Save } from "lucide-react";

interface OrderFormProps {
  order?: any;
  onSuccess: () => void;
}

export function OrderForm({ order, onSuccess }: OrderFormProps) {
  const [formData, setFormData] = useState({
    customer: order?.customer || "",
    product: order?.product || "",
    quantity: order?.quantity || "",
    price: order?.price || "",
    status: order?.status || "pending",
    notes: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Saving order:", formData);
    onSuccess();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="customer">Nama Pelanggan</Label>
          <Input
            id="customer"
            placeholder="Masukkan nama pelanggan"
            value={formData.customer}
            onChange={(e) => handleInputChange("customer", e.target.value)}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="product">Produk</Label>
          <Select 
            value={formData.product} 
            onValueChange={(value) => handleInputChange("product", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Pilih produk" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Kaos Polo Premium">Kaos Polo Premium</SelectItem>
              <SelectItem value="Kemeja Formal Slimfit">Kemeja Formal Slimfit</SelectItem>
              <SelectItem value="Jaket Denim Casual">Jaket Denim Casual</SelectItem>
              <SelectItem value="Celana Chino Premium">Celana Chino Premium</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="quantity">Jumlah</Label>
          <Input
            id="quantity"
            type="number"
            placeholder="0"
            value={formData.quantity}
            onChange={(e) => handleInputChange("quantity", e.target.value)}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="price">Harga Satuan</Label>
          <Input
            id="price"
            type="number"
            placeholder="0"
            value={formData.price}
            onChange={(e) => handleInputChange("price", e.target.value)}
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="status">Status Pesanan</Label>
        <Select 
          value={formData.status} 
          onValueChange={(value) => handleInputChange("status", value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Pilih status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="pending">Menunggu</SelectItem>
            <SelectItem value="processing">Diproses</SelectItem>
            <SelectItem value="shipped">Dikirim</SelectItem>
            <SelectItem value="delivered">Selesai</SelectItem>
            <SelectItem value="cancelled">Dibatalkan</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="notes">Catatan</Label>
        <Textarea
          id="notes"
          placeholder="Catatan tambahan untuk pesanan"
          value={formData.notes}
          onChange={(e) => handleInputChange("notes", e.target.value)}
        />
      </div>

      <div className="flex justify-end gap-4 pt-6">
        <Button type="submit" className="gap-2">
          <Save className="h-4 w-4" />
          Simpan Pesanan
        </Button>
      </div>
    </form>
  );
}
