export enum PageRoute {
  HOME = 'HOME',
  GALLERY = 'GALLERY',
  CONTACT = 'CONTACT',
  GALLERY2 = 'GALLERY2',
}

export interface GalleryItem {
  id: number;
  //fileName: string;
  url: string;
  caption: string;
  added_date: Date
}

export interface ContactFormState {
  name: string;
  email: string;
  message: string;
}

//new
export type GetSupplierInput = { id: string }

export type CreateSupplierInput = {
    name: string,
    phoneNumber: string;
    emailAddress: string;
}

export type Supplier = {
    id: string;
    name: string;
    phoneNumber: string;
    emailAddress: string;
    createdOn: string;
    createdBy: string
}

export interface DataA {
    _id: number,
    id: string,
    userName: string,
    amount: number,
    description: string,
    time: string,
}