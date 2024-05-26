export type OffertPage = "Offre" | "Postuler";

export interface Offert {
  id: string;
  reference_number: string;
  lang: string;
  title: string;
  description: string;
  complementary_description: string;
  creation_date: string;
  desactivation_date?: null;
  number_position_left: string;
  number_total_position: string;
  facility_logo: string;
  company_logo: string;
  company_id?: null;
  facility_name: string;
  facility_description: string;
  facility_address_1: string;
  facility_address_2: string;
  facility_city: string;
  facility_phone: string;
  facility_province: string;
  facility_country: string;
  benefits?: BenefitsEntity[] | null;
  skills?: null[] | null;
  categories?: null[] | null;
  questions?: null;
  published: string;
}
export interface BenefitsEntity {
  cb_id: string;
  cb_name: string;
  cb_language: string;
}

export interface ApplyOffert {
  first_name: string;
  last_name: string;
  email: string;
  cell_phone_number: string;
  cv: string | Blob;
  il: File;
  terms: string;
}
