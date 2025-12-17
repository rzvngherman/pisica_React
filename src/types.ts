export enum PageRoute {
  HOME = 'HOME',
  GALLERY = 'GALLERY',
  CONTACT = 'CONTACT'
}

export interface GalleryItem {
  id: number;
  url: string;
  caption: string;
}

export interface ContactFormState {
  name: string;
  email: string;
  message: string;
}