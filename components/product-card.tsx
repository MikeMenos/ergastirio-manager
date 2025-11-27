"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
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
    <Card className="border border-slate-200/80 shadow-none rounded-2xl bg-white mt-6">
      <CardContent className="p-4 sm:p-5">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
         
          <div className="flex-shrink-0">
            <div className="h-20 w-20 sm:h-24 sm:w-24 rounded-xl bg-slate-50 overflow-hidden">
              <img
                src={product.IMAGE || placeholderImage}
                alt={product.TITLE}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

       
          <div className="flex-1 flex flex-col gap-2 text-sm">
           
            <div className="flex items-start justify-between gap-2">
              <div>
                <div className="font-medium text-[15px] sm:text-base">
                  {product.TITLE || product.FULL_DESCRIPTION}
                </div>
                <div className="text-xs text-slate-500">
                  {product.DESCRIPTION || product.FULL_DESCRIPTION}
                </div>
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

           
            <div className="flex flex-wrap gap-2 text-[11px] sm:text-xs text-slate-600">
              <span className="inline-flex items-center rounded-full border border-slate-200 px-2 py-1">
                {product.SXESI} τεμάχια / {product.ORDER_UNIT.toLowerCase()}
              </span>
              <span className="inline-flex items-center rounded-full border border-slate-200 px-2 py-1">
                Προμηθευτής:
                <span className="ml-1 font-medium">{product.SUPPLIER}</span>
              </span>
            </div>

         
            <div className="grid grid-cols-2 gap-1 text-[11px] sm:text-xs text-slate-500">
              <div className="flex gap-1">
                <span className="font-medium text-slate-600">Κωδικός:</span>
                <span className="tabular-nums">{product.CODE}</span>
              </div>
              <div className="flex gap-1 justify-start sm:justify-end">
                <span className="font-medium text-slate-600">MTRL:</span>
                <span className="tabular-nums">{product.MTRL}</span>
              </div>
            </div>

         
            <div className="border-t border-slate-100 pt-2 mt-1 text-[11px] sm:text-xs text-slate-500">
              Μονάδα τιμολόγησης: {product.INVOICE_UNIT} · Μονάδα παραγγελίας:{" "}
              {product.ORDER_UNIT} (σχέση: {product.SXESI})
            </div>
          </div>

        
          <div className="flex flex-col justify-between items-end gap-3 min-w-[130px] sm:min-w-[150px]">
            {/* Price block */}
            {/* <div className="text-right">
              <div className="text-xs text-slate-500">Τιμή</div>
              <div className="text-base sm:text-lg font-semibold tabular-nums">
                {formattedPrice}
              </div>
              <div className="text-[11px] text-slate-500">
                / {product.INVOICE_UNIT}
              </div>
            </div> */}

          
            <div className="flex flex-col items-end gap-2">
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

              <Button
                size="sm"
                className="whitespace-nowrap gap-1"
                onClick={handleAddToOrder}
              >
                <ShoppingCart className="h-4 w-4" />
                Προσθήκη
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
