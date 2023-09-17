export interface IProduct {
  categories: [];
  categoryOrderHints: {};
  createdAt: string;
  hasStagedChanges: boolean;
  id: string;
  key: string;
  lastModifiedAt: string;
  masterVariant: { attributes: []; assets: []; images: []; prices: []; key: string };
  name: { en: string; de: string };
  productType: { typeId: string; id: string };
  published: boolean;
  searchKeywords: {};
  slug: { en: string; de: string };
  taxCategory: { typeId: string; id: string };
  variants: [];
  version: number;
}
