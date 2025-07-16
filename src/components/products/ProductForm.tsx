
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Save } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

interface ProductFormProps {
  product?: any;
  onSuccess: () => void;
}

export function ProductForm({ product, onSuccess }: ProductFormProps) {
  const [scheduledDate, setScheduledDate] = useState<Date>();
  const [formData, setFormData] = useState({
    name: product?.name || "",
    category: product?.category || "",
    weight: product?.weight || "",
    price: product?.price || "",
    status: product?.status || "draft",
    description: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Saving product:", { ...formData, scheduledDate });
    // Implement save logic
    onSuccess();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="productName">Nama Produk</Label>
          <Input
            id="productName"
            placeholder="Masukkan nama produk"
            value={formData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="category">Kategori</Label>
          <Select 
            value={formData.category} 
            onValueChange={(value) => handleInputChange("category", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Pilih kategori" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Kaos">Kaos</SelectItem>
              <SelectItem value="Kemeja">Kemeja</SelectItem>
              <SelectItem value="Jaket">Jaket</SelectItem>
              <SelectItem value="Celana">Celana</SelectItem>
              <SelectItem value="Aksesoris">Aksesoris</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="weight">Berat (gram)</Label>
          <Input
            id="weight"
            type="number"
            placeholder="0"
            value={formData.weight}
            onChange={(e) => handleInputChange("weight", e.target.value)}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="price">Harga per Satuan</Label>
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

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="status">Status</Label>
          <Select 
            value={formData.status} 
            onValueChange={(value) => handleInputChange("status", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Pilih status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="draft">Draft</SelectItem>
              <SelectItem value="schedule">Schedule</SelectItem>
              <SelectItem value="post">Post</SelectItem>
            </SelectContent>
          </Select>
        </div>
        {formData.status === "schedule" && (
          <div className="space-y-2">
            <Label>Tanggal Posting</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !scheduledDate && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {scheduledDate ? format(scheduledDate, "PPP") : "Pilih tanggal"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={scheduledDate}
                  onSelect={setScheduledDate}
                  initialFocus
                  className="pointer-events-auto"
                />
              </PopoverContent>
            </Popover>
          </div>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Deskripsi Produk</Label>
        <Textarea
          id="description"
          placeholder="Jelaskan detail produk"
          value={formData.description}
          onChange={(e) => handleInputChange("description", e.target.value)}
        />
      </div>

      <div className="flex justify-end gap-4 pt-6">
        <Button type="submit" className="gap-2">
          <Save className="h-4 w-4" />
          Simpan Produk
        </Button>
      </div>
    </form>
  );
}
