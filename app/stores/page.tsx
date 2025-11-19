import StoreCard from "@/components/store-card";
import { IStoreInfo } from "@/lib/interfaces";

const data: IStoreInfo[] =
    [
        {
            "TRDR": "264",
            "KEY_CODE": "269-12333-19",
            "BRANCH": "19",
            "TYPOS": "IS BRANCH",
            "BRANCHES": "0",
            "NAME": "Test for APP",
            "AFM": "996973228",
            "ADDRESS": "magazi 2",
            "DISTRICT": "NYC",
            "CITY": "ΛΑΜΙΑ",
            "ZIP": "12333",
            "PIN_A": "130565",
            "PIN_B": "1305"
        },
        {
            "TRDR": "269",
            "KEY_CODE": "269-43500-20",
            "BRANCH": "20",
            "TYPOS": "IS BRANCH",
            "BRANCHES": "0",
            "NAME": "Test for APP",
            "AFM": "996973228",
            "ADDRESS": "Μαγαζάρα 33",
            "DISTRICT": "WDC",
            "CITY": "ΗΡΑΚΛΕΙΟ",
            "ZIP": "43500",
            "PIN_A": "130565",
            "PIN_B": "1305"
        },
        {
            "TRDR": "269",
            "KEY_CODE": "269-11253-0",
            "BRANCH": "0",
            "TYPOS": "KENTRIKOS ΠΕΛΑΤΗΣ ME BRANCHES",
            "BRANCHES": "2",
            "NAME": "Test for APP",
            "AFM": "996973228",
            "ADDRESS": "Test 13",
            "CITY": "Athens",
            "ZIP": "11253",
            "PAYMENT": "1003",
            "PIN_A": "130565",
            "PIN_B": "1305"
        }
    ]


export default function Stores() {

    return (
        data.map(item => (
            <StoreCard data={item} />
        ))
    );
}
