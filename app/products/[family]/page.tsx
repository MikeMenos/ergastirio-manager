import ProductCard from "@/components/product-card";
import { IProductItem } from "@/lib/interfaces";

const data: IProductItem[] =
    [
        {
            "SUPPLIER": "ERGASTIRI",
            "MTRL": "2854",
            "CODE": "00326",
            "FULL_DESCRIPTION": "ΒΑΣΗ ΖΥΜΗΣ ΠΙΤΣΑΣ",
            "TITLE": "Βαση ζυμησ",
            "DESCRIPTION": "Πιτσασ",
            "PRICE_PER_MU1": "2.6",
            "INVOICE_UNIT": "Κιλά",
            "ORDER_UNIT": "Κιβώτια",
            "SXESI": "6",
            "MANUFACTOR": "Εργαστήρι",
            "CATEGORY": "01.Προϊόν",
            "MARKA": "1000",
            "FAMILY": "ΣΦΟΛΙΑΤΑ"
        },
        {
            "SUPPLIER": "ERGASTIRI",
            "MTRL": "2752",
            "CODE": "00227",
            "FULL_DESCRIPTION": "Medium Ντονατ Βερικοκο κτψ συσκ. 12 τεμ.",
            "TITLE": "Medium ντονατ",
            "DESCRIPTION": "Βερικοκο Κτψ Συσκ. 12 Τεμ.",
            "PRICE_PER_MU1": "0.75",
            "INVOICE_UNIT": "Τεμάχια",
            "ORDER_UNIT": "Κιβώτια",
            "SXESI": "12",
            "MANUFACTOR": "ΛΙΧΟΥΔΗΣ",
            "CATEGORY": "01.Προϊόν",
            "IMAGE": "01104356965223/4643C76C1B645B32.jpg",
            "MARKA": "1001",
            "FAMILY": "DONUT"
        },
        {
            "SUPPLIER": "ERGASTIRI",
            "MTRL": "2915",
            "CODE": "00385",
            "FULL_DESCRIPTION": "ΜΠΙΣΚΟΤΟ CRUMBLE 750γρ.",
            "TITLE": "Μπισκοτο crumble",
            "DESCRIPTION": "750γρ.",
            "PRICE_PER_MU1": "8.74",
            "INVOICE_UNIT": "Τεμάχια",
            "ORDER_UNIT": "Τεμάχια",
            "SXESI": "1",
            "MANUFACTOR": "Τρίτος",
            "CATEGORY": "01.Προϊόν",
            "MARKA": "9999",
            "FAMILY": "ΑΛΛΟ"
        },
        {
            "SUPPLIER": "ERGASTIRI",
            "MTRL": "2875",
            "CODE": "00347",
            "FULL_DESCRIPTION": "ΜΠΟΥΓΑΤΣΑ ΚΡΕΜΑ ΣΦΟΛΙΑΤΑ κτψ 75 τεμ.",
            "TITLE": "Μπουγατσα κρεμα",
            "DESCRIPTION": "Σφολιατα Κτψ 75 Τεμ.",
            "PRICE_PER_MU1": "0.5",
            "INVOICE_UNIT": "Τεμάχια",
            "ORDER_UNIT": "Κιβώτια",
            "SXESI": "75",
            "MANUFACTOR": "Εργαστήρι",
            "CATEGORY": "01.Προϊόν",
            "IMAGE": "01104356965223/084BA22DC4764227.jpg",
            "MARKA": "1000",
            "FAMILY": "ΣΦΟΛΙΑΤΑ"
        }
    ]


export default function FamilyProducts() {

    return (
        data.map(item => (
            <ProductCard product={item} key={item.MTRL} />
        ))
    );
}
