import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { ICartProductItem } from "@/lib/interfaces";
import { ShoppingCart } from "lucide-react";

interface CartTotalsProps {
    items: ICartProductItem[];
    onSendOrder?: (items: ICartProductItem[]) => void;
}

export function CartTotals({ items, onSendOrder }: CartTotalsProps) {
    const totals = React.useMemo(() => {
        const totalQty = items.reduce((acc, item) => {
            const qty = Number(item.Qty1) || 0;
            return acc + qty;
        }, 0);

        const totalAmount = items.reduce((acc, item) => {
            const qty = Number(item.Qty1) || 0;
            const price = Number(item.PRICE_PER_MU1) || 0;
            return acc + qty * price;
        }, 0);

        return { totalQty, totalAmount };
    }, [items]);

    const handleSendOrder = () => {
        if (onSendOrder) {
            onSendOrder(items);
        } else {
            // fallback – you can replace this with your real logic / server action
            console.log("Send order payload:", items);
        }
    };

    return (
        <Card className="border border-slate-200 rounded-2xl shadow-none p-6">

            <CardHeader className="px-5 py-0 border-b border-slate-200">
                <CardTitle className="text-base sm:text-lg">
                    Σύνολο Παραγγελίας
                </CardTitle>
            </CardHeader>
            <CardContent className="px-5 pt-0 pb-4 space-y-3 text-sm">
                <div className="flex items-center justify-between">
                    <span className="text-slate-500">Σύνολο τεμαχίων</span>
                    <span className="font-semibold">{totals.totalQty}</span>
                </div>

                <div className="flex items-center justify-between">
                    <span className="text-slate-500">Συνολική αξία</span>
                    <span className="font-semibold text-emerald-600">
                        €{totals.totalAmount.toFixed(2)}
                    </span>
                </div>

                <div className="pt-2">
                    <Button
                        className="w-full gap-2"
                        size="lg"
                        onClick={handleSendOrder}
                        disabled={items.length === 0}
                    >
                        <ShoppingCart className="h-4 w-4" />
                        Αποστολή Παραγγελίας
                    </Button>
                </div>
            </CardContent>
        </Card>

    );
}
