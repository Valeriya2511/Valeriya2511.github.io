export interface IRowProduct {
  createdAt: string;
  createdBy: { clientId: string; isPlatformClient: boolean };
  id: string;
  key: string;
  lastMessageSequenceNumber: number;
  lastModifiedAt: string;
  lastModifiedBy: { clientId: string; isPlatformClient: boolean };
  lastVariantId: number;
  masterData: { current: {}; staged: {}; published: boolean; hasStagedChanges: boolean };
  productType: { typeId: string; id: string };
  taxCategory: { typeId: string; id: string };
  version: number;
  versionModifiedAt: string;
}
