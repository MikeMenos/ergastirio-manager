"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CardProduct } from "@/components/cart-product";
import { CartTotals } from "@/components/cart-totals";
import { ICartProductItem } from "@/lib/interfaces";


const data: ICartProductItem[] =
    [
        {
            "FINDOC": "12888",
            "TRDR": "269",
            "BRANCH": "0",
            "MTRL": "2777",
            "Qty1": "40",
            "Qty2": "4",
            "SUPPLIER": "ERGASTIRI",
            "CODE": "00007",
            "FULL_DESCRIPTION": "ΚΟΤΟΠΙΤΑ ΖΥΜΩΤΗ κατ/ψ συσκευασμένη 40 τμχ",
            "TITLE": "Κοτοπιτα ζυμωτη",
            "DESCRIPTION": "Κατ/ψ Συσκευασμένη 40 Τμχ",
            "PRICE_PER_MU1": "1.09",
            "INVOICE_UNIT": "Τεμάχια",
            "ORDER_UNIT": "Κιβώτια",
            "SXESI": "40",
            "MANUFACTOR": "Εργαστήρι",
            "CATEGORY": "01.Προϊόν",
            "IMAGE": "01104356965223/BAC5208E23EA663A.jpg",
            "MARKA": "1000",
            "FAMILY": "ΣΦΟΛΙΑΤΑ"
        },
        {
            "FINDOC": "12893",
            "TRDR": "269",
            "BRANCH": "0",
            "MTRL": "2802",
            "Qty1": "40",
            "Qty2": "4",
            "SUPPLIER": "ERGASTIRI",
            "CODE": "00012",
            "FULL_DESCRIPTION": "ΜΗΛΟΠΙΤΑ ΖΥΜΩΤΗ 40 τμχ",
            "TITLE": "Μηλοπιτα",
            "DESCRIPTION": "Κατ/ψ 40 Τμχ",
            "PRICE_PER_MU1": "1.18",
            "INVOICE_UNIT": "Τεμάχια",
            "ORDER_UNIT": "Κιβώτια",
            "SXESI": "40",
            "MANUFACTOR": "Εργαστήρι",
            "CATEGORY": "01.Προϊόν",
            "IMAGE": "01104356965223/MNO1118E23EA663A.jpg",
            "MARKA": "1000",
            "FAMILY": "ΓΛΥΚΑ"
        },
        {
            "FINDOC": "12894",
            "TRDR": "269",
            "BRANCH": "0",
            "MTRL": "2803",
            "Qty1": "25",
            "Qty2": "1",
            "SUPPLIER": "ERGASTIRI",
            "CODE": "00013",
            "FULL_DESCRIPTION": "ΚΙΜΑΔΟΠΙΤΑ ΖΥΜΩΤΗ 40 τμχ",
            "TITLE": "Κιμαδοπιτα",
            "DESCRIPTION": "Κατ/ψ 40 Τμχ",
            "PRICE_PER_MU1": "1.25",
            "INVOICE_UNIT": "Τεμάχια",
            "ORDER_UNIT": "Κιβώτια",
            "SXESI": "40",
            "MANUFACTOR": "Εργαστήρι",
            "CATEGORY": "01.Προϊόν",
            "IMAGE": "01104356965223/PQR2228E23EA663B.jpg",
            "MARKA": "1000",
            "FAMILY": "ΣΦΟΛΙΑΤΑ"
        },
        {
            "FINDOC": "12895",
            "TRDR": "269",
            "BRANCH": "0",
            "MTRL": "2804",
            "Qty1": "70",
            "Qty2": "7",
            "SUPPLIER": "ERGASTIRI",
            "CODE": "00014",
            "FULL_DESCRIPTION": "ΧΟΡΤΟΠΙΤΑ ΖΥΜΩΤΗ 40 τμχ",
            "TITLE": "Χορτοπιτα",
            "DESCRIPTION": "Κατ/ψ 40 Τμχ",
            "PRICE_PER_MU1": "1.03",
            "INVOICE_UNIT": "Τεμάχια",
            "ORDER_UNIT": "Κιβώτια",
            "SXESI": "40",
            "MANUFACTOR": "Εργαστήρι",
            "CATEGORY": "01.Προϊόν",
            "IMAGE": "01104356965223/STU5208E99EA663A.jpg",
            "MARKA": "1000",
            "FAMILY": "ΣΦΟΛΙΑΤΑ"
        },
        {
            "FINDOC": "12896",
            "TRDR": "269",
            "BRANCH": "0",
            "MTRL": "2805",
            "Qty1": "35",
            "Qty2": "3",
            "SUPPLIER": "ERGASTIRI",
            "CODE": "00015",
            "FULL_DESCRIPTION": "ΖΑΜΠΟΝΟΤΥΡΟΠΙΤΑ ΖΥΜΩΤΗ 40 τμχ",
            "TITLE": "Ζαμπονοτυροπιτα",
            "DESCRIPTION": "Κατ/ψ 40 Τμχ",
            "PRICE_PER_MU1": "1.19",
            "INVOICE_UNIT": "Τεμάχια",
            "ORDER_UNIT": "Κιβώτια",
            "SXESI": "40",
            "MANUFACTOR": "Εργαστήρι",
            "CATEGORY": "01.Προϊόν",
            "IMAGE": "01104356965223/VWX5208E23EA777A.jpg",
            "MARKA": "1000",
            "FAMILY": "ΣΦΟΛΙΑΤΑ"
        },
        {
            "FINDOC": "12897",
            "TRDR": "269",
            "BRANCH": "0",
            "MTRL": "2806",
            "Qty1": "45",
            "Qty2": "4",
            "SUPPLIER": "ERGASTIRI",
            "CODE": "00016",
            "FULL_DESCRIPTION": "ΚΑΣΕΡΟΠΙΤΑ ΖΥΜΩΤΗ 40 τμχ",
            "TITLE": "Κασεροπιτα",
            "DESCRIPTION": "Κατ/ψ 40 Τμχ",
            "PRICE_PER_MU1": "1.14",
            "INVOICE_UNIT": "Τεμάχια",
            "ORDER_UNIT": "Κιβώτια",
            "SXESI": "40",
            "MANUFACTOR": "Εργαστήρι",
            "CATEGORY": "01.Προϊόν",
            "IMAGE": "01104356965223/XYZ5208EE3EA997C.jpg",
            "MARKA": "1000",
            "FAMILY": "ΣΦΟΛΙΑΤΑ"
        }
    ]



export default function Cart() {

    return (
        <div className="flex gap-6 bg-slate-100 px-5">
            <div className="basis-2/3 mt-6">
                <Card className="border border-slate-200/80 shadow-none rounded-2xl bg-white p-6">

                    <CardHeader py-0 border-b border-slate-200>
                        <CardTitle className="text-base sm:text-lg">
                            Σύνοψη Παραγγελίας
                        </CardTitle>
                    </CardHeader>

                    <CardContent className="pb-4 space-y-3 text-sm p-0">
                        {data.map((item) => (
                            <CardProduct key={item.MTRL} item={item} />
                        ))}
                    </CardContent>

                </Card>
            </div>

            <div className="basis-1/3 mt-6">
                <CartTotals items={data} />
            </div>
        </div>

    );
}
