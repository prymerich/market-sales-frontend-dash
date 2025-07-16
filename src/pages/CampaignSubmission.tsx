
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Save, Send } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

export default function CampaignSubmission() {
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [formData, setFormData] = useState({
    name: "",
    budget: "",
    budgetDetails: "",
    targetMarket: "",
    description: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSaveDraft = () => {
    console.log("Saving draft:", { ...formData, startDate, endDate });
    // Implement draft saving logic
  };

  const handleSubmit = () => {
    console.log("Submitting campaign:", { ...formData, startDate, endDate });
    // Implement campaign submission logic
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Pengajuan Kampanye</h2>
        <p className="text-muted-foreground">
          Buat kampanye pemasaran baru untuk meningkatkan penjualan produk
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Informasi Kampanye</CardTitle>
          <CardDescription>
            Isi detail kampanye yang akan dijalankan
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="campaignName">Nama Kampanye</Label>
              <Input
                id="campaignName"
                placeholder="Masukkan nama kampanye"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="budget">Perkiraan Anggaran</Label>
              <Input
                id="budget"
                placeholder="Rp 0"
                value={formData.budget}
                onChange={(e) => handleInputChange("budget", e.target.value)}
              />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label>Tanggal Mulai</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !startDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {startDate ? format(startDate, "PPP") : "Pilih tanggal mulai"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={startDate}
                    onSelect={setStartDate}
                    initialFocus
                    className="pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div className="space-y-2">
              <Label>Tanggal Selesai</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !endDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {endDate ? format(endDate, "PPP") : "Pilih tanggal selesai"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={endDate}
                    onSelect={setEndDate}
                    initialFocus
                    className="pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="budgetDetails">Rincian Anggaran</Label>
            <Textarea
              id="budgetDetails"
              placeholder="Jelaskan rincian penggunaan anggaran kampanye"
              value={formData.budgetDetails}
              onChange={(e) => handleInputChange("budgetDetails", e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="targetMarket">Target Pasar</Label>
            <Select onValueChange={(value) => handleInputChange("targetMarket", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Pilih target pasar" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="remaja">Remaja (17-25 tahun)</SelectItem>
                <SelectItem value="dewasa-muda">Dewasa Muda (26-35 tahun)</SelectItem>
                <SelectItem value="dewasa">Dewasa (36-45 tahun)</SelectItem>
                <SelectItem value="semua">Semua Kelompok Usia</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Deskripsi Kampanye</Label>
            <Textarea
              id="description"
              placeholder="Jelaskan detail kampanye dan strategi yang akan digunakan"
              value={formData.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
            />
          </div>

          <div className="flex gap-4 pt-6">
            <Button variant="outline" onClick={handleSaveDraft} className="gap-2">
              <Save className="h-4 w-4" />
              Simpan Draft
            </Button>
            <Button onClick={handleSubmit} className="gap-2">
              <Send className="h-4 w-4" />
              Ajukan Kampanye
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
