export interface Company {
  businessId: string;
  registrationDate: string;
  companyForm?: string;
  detailsUri?: string;
  name: string;
}
export interface Details {
  businessId: string;
  name: string;
  registrationDate: string;
  companyForm?: string;
  detailsUri?: null;
  liquidations?: Liquidation[];
  names: Name[];
  auxiliaryNames?: Name[];
  addresses?: Address[];
  companyForms?: CompanyForm[];
  businessLines?: BusinessLine[];
  languages?: Language[];
  registeredOffices?: Office[];
  contactDetails?: ContactDetail[];
  registeredEntries?: Entry[];
  businessIdChanges?: BusinessIdChange[];
}
interface Name {
  source?: number;
  order: number;
  version: number;
  registrationDate: string;
  endDate?: string;
  name: string;
  language?: string;
}
interface Address {
  source?: number;
  version: number;
  registrationDate: string;
  endDate?: string;
  careOf?: string;
  street?: string;
  postCode?: string;
  city?: string;
  language?: string;
  type: number;
  country?: string;
}
interface CompanyForm {
  source?: number;
  version: number;
  registrationDate: string;
  endDate?: string;
  name: string;
  language?: string;
  type: string;
}
interface Liquidation {
  source?: number;
  version: number;
  registrationDate: string;
  endDate?: string;
  name: string;
  language?: string;
  type: string;
}
interface BusinessLine {
  source?: number;
  order: number;
  version: number;
  registrationDate: string;
  endDate?: string;
  name: string;
  language?: string;
}
interface Language {
  source?: number;
  version: number;
  registrationDate: string;
  endDate?: string;
  name: string;
  language?: string;
}
interface Office {
  source?: number;
  order: number;
  version: number;
  registrationDate: string;
  endDate?: string;
  name: string;
  language?: string;
}
interface ContactDetail {
  source?: number;
  version: number;
  registrationDate: string;
  endDate?: string;
  language?: string;
  value: string;
  type: string;
}
interface Entry {
  description: string;
  status: number;
  registrationDate: string;
  endDate?: string;
  register: number;
  language?: string;
  authority: number;
}
interface BusinessIdChange {
  source?: number;
  description: string;
  reason: string;
  changeDate?: string;
  change: number;
  oldBusinessId: string;
  newBusinessId: string;
  language?: string;
}
