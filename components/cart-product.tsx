// components/cart/cart-item.tsx
import * as React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Trash2, Minus, Plus } from "lucide-react";
import { ICartProductItem } from "@/lib/interfaces";

interface ICartProductProps {
    item: ICartProductItem;
}

export function CardProduct({ item }: ICartProductProps) {
    const qty = Number(item.Qty1) || 0;
    const pricePerUnit = Number(item.PRICE_PER_MU1) || 0;
    const lineTotal = qty * pricePerUnit;

    return (
        <Card className="w-full border border-slate-200/80 shadow-sm rounded-2xl">
            <CardContent className="p-4 sm:p-5">
                <div className="flex gap-4 sm:gap-5">
                    {/* Image */}
                    <div className="relative h-20 w-20 sm:h-24 sm:w-24 shrink-0 overflow-hidden rounded-xl bg-slate-100">
                        {/* If images are served from a specific base URL, prepend it here */}
                        <Image
                            src={`/${item.IMAGE}`}
                            alt={item.TITLE}
                            fill
                            className="object-contain p-1"
                        />
                    </div>

                    {/* Main content */}
                    <div className="flex flex-1 flex-col justify-between gap-2">
                        {/* Title + remove */}
                        <div className="flex items-start justify-between gap-2">
                            <div>
                                <h3 className="font-medium text-sm sm:text-base">
                                    {item.TITLE}
                                </h3>
                                <p className="text-xs sm:text-sm text-slate-500 line-clamp-2">
                                    {item.DESCRIPTION}
                                </p>
                                <p className="mt-1 text-[11px] sm:text-xs text-slate-400">
                                    Κωδικός: <span className="font-mono">{item.CODE}</span> · Προμηθευτής:{" "}
                                    <span className="font-medium">{item.SUPPLIER}</span>
                                </p>
                            </div>

                            <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 text-slate-400 hover:text-red-500"
                            >
                                <Trash2 className="h-4 w-4" />
                            </Button>

                        </div>

                        <Separator className="my-1 sm:my-2" />

                        {/* Bottom row: price & quantity controls */}
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
                            {/* Price info */}
                            <div className="text-xs sm:text-sm">
                                <div className="font-semibold">
                                    €{pricePerUnit.toFixed(2)}
                                    <span className="ml-1 text-slate-500 text-[11px]">
                                        / {item.INVOICE_UNIT.toLowerCase()}
                                    </span>
                                </div>
                                <div className="text-slate-500 text-[11px] sm:text-xs">
                                    {item.SXESI} τεμάχια ανά {item.ORDER_UNIT.toLowerCase()}
                                </div>
                                <div className="mt-1 font-medium text-[13px] sm:text-sm">
                                    Σύνολο: <span className="text-emerald-600">€{lineTotal.toFixed(2)}</span>
                                </div>
                            </div>

                            {/* Quantity controls */}
                            <div className="flex items-center justify-start sm:justify-end gap-2">

                                <Button
                                    variant="outline"
                                    size="icon"
                                    className="h-8 w-8 rounded-full"
                                    disabled={qty <= 1}
                                >
                                    <Minus className="h-4 w-4" />
                                </Button>


                                <div className="min-w-[3rem] text-center text-sm font-medium">
                                    {qty} <span className="text-[11px] text-slate-500">τεμ.</span>
                                </div>


                                <Button
                                    variant="outline"
                                    size="icon"
                                    className="h-8 w-8 rounded-full"
                                >
                                    <Plus className="h-4 w-4" />
                                </Button>

                            </div>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
