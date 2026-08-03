export type Localized = { id: string; en: string; zh: string };

export type Service = {
  icon: string;
  image: string;
  title: string;
  desc: Localized;
};

export type ProductItem = {
  name: string;
  desc: Localized;
  icon: string;
  image: string;
  brand: string | null;
};

export type ProductCategory = {
  key: string;
  label: string;
  image: string;
  items: ProductItem[];
};

export type Brand = {
  name: string;
};

export type GalleryItem = {
  image: string;
  caption: Localized;
};

export type Stat = {
  value: number;
  suffix: string;
  label: Localized;
};

export type ValueProp = {
  title: Localized;
  desc: Localized;
};

export type LegalDocument = {
  title: Localized;
  file: string;
};

export type Catalog = {
  title: Localized;
  cover: string | null;
  file: string;
};
