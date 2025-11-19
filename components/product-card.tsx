"use client"

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { IProductItem } from "@/lib/interfaces";

export const placeholderImage =
  "https://via.placeholder.com/300x200?text=No+Image";



interface ProductCardProps {
  product: IProductItem;
  onAddToOrder?: (product: IProductItem) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToOrder }) => {
  const priceNum = Number(product.PRICE_PER_MU1);
  const formattedPrice = Number.isFinite(priceNum)
    ? priceNum.toFixed(2)
    : product.PRICE_PER_MU1;

  return (
    <Card className="w-full max-w-md rounded-2xl shadow-sm overflow-hidden">
      {/* IMAGE */}
      <div className="w-full h-48 bg-muted flex items-center justify-center overflow-hidden">
        <img
          src={product.IMAGE || placeholderImage}
          alt={product.TITLE}
          className="w-full h-full object-cover"
        />
      </div>

      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <div>
            <CardTitle className="text-lg">
              {product.TITLE || product.FULL_DESCRIPTION}
            </CardTitle>
            <CardDescription className="text-sm">
              {product.DESCRIPTION || product.FULL_DESCRIPTION}
            </CardDescription>
          </div>
          <div className="flex flex-col items-end gap-1">
            <Badge variant="outline" className="text-xs">
              {product.CATEGORY}
            </Badge>
            <Badge className="text-xs">{product.FAMILY}</Badge>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-3 text-sm">
        <div className="flex items-center justify-between">
          <span className="font-medium">Κωδικός</span>
          <span className="tabular-nums">{product.CODE}</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="font-medium">MTRL</span>
          <span className="tabular-nums">{product.MTRL}</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="font-medium">Προμηθευτής</span>
          <span>{product.SUPPLIER}</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="font-medium">Εργαστήρι</span>
          <span>{product.MANUFACTOR}</span>
        </div>

        <div className="border-t pt-3 space-y-1">
          <div className="flex items-center justify-between">
            <span className="font-medium">Τιμή</span>
            <span className="font-semibold tabular-nums">
              {formattedPrice} / {product.INVOICE_UNIT}
            </span>
          </div>
          <p className="text-xs text-muted-foreground">
            Μονάδα τιμολόγησης: {product.INVOICE_UNIT} · Μονάδα παραγγελίας:{" "}
            {product.ORDER_UNIT} (σχέση: {product.SXESI})
          </p>
        </div>
      </CardContent>

      <CardFooter className="flex justify-between items-center">
        <span className="text-xs text-muted-foreground">
          Μάρκα: {product.MARKA}
        </span>
        <Button size="sm" onClick={() => onAddToOrder?.(product)}>
          Προσθήκη στην παραγγελία
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
