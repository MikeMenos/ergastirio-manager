import { IStoreInfo } from "@/lib/interfaces";

const data: IStoreInfo[] =
    [
        
    ]


export default function Stores() {

    return (
        data.map(item => (
            // <StoreCard data={item} />
        ))
    );
}
