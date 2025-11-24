"use client";

import * as React from "react";
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
import { Minus, Plus, ShoppingCart } from "lucide-react";

export const placeholderImage =
  "https://via.placeholder.com/300x200?text=No+Image";

interface ProductCardProps {
  product: IProductItem;
  onAddToOrder?: (product: IProductItem, qty: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToOrder }) => {
  const [qty, setQty] = React.useState<number>(1);

  const priceNum = Number(product.PRICE_PER_MU1);
  const formattedPrice = Number.isFinite(priceNum)
    ? priceNum.toFixed(2)
    : product.PRICE_PER_MU1;

  const lineTotal =
    Number.isFinite(priceNum) && Number.isFinite(qty) ? priceNum * qty : 0;

  const handleDecrease = () => {
    setQty((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleIncrease = () => {
    setQty((prev) => prev + 1);
  };

  const handleAddToOrder = () => {
    if (onAddToOrder) {
      onAddToOrder(product, qty);
    }
  };

  return (
    <Card className="w-full max-w-2xl rounded-2xl shadow-sm overflow-hidden">
      <div className="flex flex-col sm:flex-row">
        {/* IMAGE */}
        <div className="w-full sm:w-48 h-48 bg-muted flex items-center justify-center overflow-hidden">
          <img
            src={product.IMAGE || placeholderImage}
            alt={product.TITLE}
            className="w-full h-full object-cover"
          />
        </div>

        {/* CONTENT */}
        <div className="flex-1 flex flex-col">
          <CardHeader className="pb-2">
            <div className="flex items-start justify-between gap-2">
              <div>
                <CardTitle className="text-base sm:text-lg">
                  {product.TITLE || product.FULL_DESCRIPTION}
                </CardTitle>
                <CardDescription className="text-xs sm:text-sm">
                  {product.DESCRIPTION || product.FULL_DESCRIPTION}
                </CardDescription>
              </div>
              <div className="flex flex-col items-end gap-1">
                <Badge variant="outline" className="text-[10px] sm:text-xs">
                  {product.CATEGORY}
                </Badge>
                <Badge className="text-[10px] sm:text-xs">
                  {product.FAMILY}
                </Badge>
              </div>
            </div>
          </CardHeader>

          <CardContent className="space-y-2 text-xs sm:text-sm">
            <div className="grid grid-cols-2 gap-2">
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
                <span className="truncate max-w-[8rem] text-right">
                  {product.SUPPLIER}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="font-medium">Εργαστήρι</span>
                <span className="truncate max-w-[8rem] text-right">
                  {product.MANUFACTOR}
                </span>
              </div>
            </div>

            <div className="border-t pt-2 space-y-1">
              <div className="flex items-center justify-between">
                <span className="font-medium">Τιμή</span>
                <span className="font-semibold tabular-nums">
                  {formattedPrice} / {product.INVOICE_UNIT}
                </span>
              </div>
              <p className="text-[11px] text-muted-foreground">
                Μονάδα τιμολόγησης: {product.INVOICE_UNIT} · Μονάδα
                παραγγελίας: {product.ORDER_UNIT} (σχέση: {product.SXESI})
              </p>
            </div>
          </CardContent>

          <CardFooter className="mt-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            {/* Left side: brand + subtotal */}
            <div className="flex flex-col gap-1 text-xs sm:text-sm">
              <span className="text-muted-foreground">
                Μάρκα: {product.MARKA}
              </span>
            </div>

            {/* Right side: qty controls + button */}
            <div className="flex items-center gap-3">
              {/* QTY controls */}
              <div className="flex items-center gap-1">
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 rounded-full"
                  onClick={handleDecrease}
                  disabled={qty <= 1}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <div className="min-w-[3rem] text-center text-sm font-medium tabular-nums">
                  {qty}
                </div>
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 rounded-full"
                  onClick={handleIncrease}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>

              {/* Add to order */}
              <Button
                size="sm"
                className="whitespace-nowrap gap-1"
                onClick={handleAddToOrder}
              >
                <ShoppingCart className="h-4 w-4" />
                Προσθήκη
              </Button>
            </div>
          </CardFooter>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
