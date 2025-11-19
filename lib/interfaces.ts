export interface IStoreInfo {
    TRDR: string
    KEY_CODE: string
    BRANCH: string
    TYPOS: string
    BRANCHES: string
    NAME: string
    AFM: string
    ADDRESS: string
    DISTRICT?: string
    CITY: string
    ZIP: string
    PIN_A: string
    PIN_B: string
    PAYMENT?: string
}

export interface IProductCategories {
    FAMILY: string;
}

export interface IProductItem {
  SUPPLIER: string;
  MTRL: string;
  CODE: string;
  FULL_DESCRIPTION: string;
  TITLE: string;
  DESCRIPTION: string;
  PRICE_PER_MU1: string;   
  INVOICE_UNIT: string;
  ORDER_UNIT: string;
  SXESI: string;
  MANUFACTOR: string;
  CATEGORY: string;
  MARKA: string;
  FAMILY: string;
  IMAGE?: string;
};



