import type {
  Brand,
  Catalog,
  GalleryItem,
  LegalDocument,
  ProductCategory,
  Service,
  Stat,
  ValueProp,
} from "./types";

export const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:8010";

async function getJson<T>(path: string): Promise<T> {
  const res = await fetch(`${API_URL}${path}`);
  if (!res.ok) throw new Error(`Request to ${path} failed with ${res.status}`);
  const json = await res.json();
  return json.data as T;
}

export const getServices = () => getJson<Service[]>("/api/services");
export const getProductCategories = () => getJson<ProductCategory[]>("/api/product-categories");
export const getBrands = () => getJson<Brand[]>("/api/brands");
export const getGallery = () => getJson<GalleryItem[]>("/api/gallery");
export const getStats = () => getJson<Stat[]>("/api/stats");
export const getValueProps = () => getJson<ValueProp[]>("/api/value-props");
export const getLegalDocuments = () => getJson<LegalDocument[]>("/api/legal-documents");
export const getCatalogs = () => getJson<Catalog[]>("/api/catalogs");

export type ContactMessagePayload = {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
};

export async function postContactMessage(payload: ContactMessagePayload) {
  await fetch(`${API_URL}/api/contact-messages`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
}
