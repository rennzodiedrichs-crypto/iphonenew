import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Product {
  name: string;
  badge: string;
  specs: string;
  model: string;
  highlight?: string;
  image?: string;
}

interface QuickViewModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const QuickViewModal = ({ product, isOpen, onClose }: QuickViewModalProps) => {
  if (!product) return null;

  const waText = encodeURIComponent(
    `Olá! Tenho interesse no ${product.name} ${product.specs.split(" · ")[0]}. Poderia me passar mais informações?`
  );

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] bg-void border-border text-foreground overflow-hidden">
        <DialogHeader>
          <DialogTitle className="font-cormorant text-3xl font-bold">
            {product.name}
          </DialogTitle>
          <div className="flex gap-2 mt-2">
            <Badge variant="outline" className="border-gold/30 text-gold uppercase tracking-wider">
              {product.badge}
            </Badge>
            {product.highlight && (
              <Badge className="bg-gold/10 text-gold border-gold/20">
                {product.highlight}
              </Badge>
            )}
          </div>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
          <div className="relative aspect-square bg-gradient-to-br from-surface-2 to-surface rounded-xl flex items-center justify-center overflow-hidden border border-border">
            <span className="font-cormorant text-[8rem] font-bold absolute text-foreground opacity-[0.03] select-none">
              {product.model}
            </span>
            {product.image ? (
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain relative z-10 p-4"
              />
            ) : (
              <div className="text-muted-foreground/20 italic">Imagem em breve</div>
            )}
            <div className="absolute inset-0 bg-gold/5 pointer-events-none" />
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <h4 className="font-outfit font-semibold text-lg mb-4 text-primary">Especificações</h4>
              <ul className="space-y-3">
                {product.specs.split(" · ").map((spec, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-white/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold/50" />
                    {spec}
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 p-4 rounded-lg bg-surface border border-border">
                <p className="text-xs text-white/40 uppercase tracking-widest mb-1">Status</p>
                <p className="text-sm font-medium">Disponível para pronta entrega em Palmas</p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3">
              <Button 
                className="w-full bg-primary text-black hover:bg-gold-bright transition-all"
                onClick={() => window.open(`https://wa.me/5563930002112?text=${waText}`, '_blank')}
              >
                Tenho Interesse
              </Button>
              <Button 
                variant="outline" 
                className="w-full border-white/10 text-white/60 hover:text-white"
                onClick={onClose}
              >
                Voltar
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default QuickViewModal;
