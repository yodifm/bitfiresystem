export type Localized = { id: string; en: string; zh: string };

export type Service = {
  icon: string;
  title: string;
  desc: Localized;
};

export type ProductItem = {
  name: string;
  desc: Localized;
  icon: string;
  image: string;
};

export type ProductCategory = {
  key: string;
  label: string;
  image: string;
  items: ProductItem[];
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

export type Certification = {
  icon: string;
  label: Localized;
};
