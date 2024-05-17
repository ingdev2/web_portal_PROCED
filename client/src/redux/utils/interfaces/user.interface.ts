interface User {
  id: string;
  name: string;
  last_name: string;
  user_gender: number;
  user_gender_abbrev: string;
  user_id_type: number;
  id_type_abbrev: string;
  id_number: number;
  birthdate: string;
  affiliation_eps: string;
  email: string;
  cellphone: number;
  whatsapp: number;
  authentication_method: number;
  password: string;
  residence_department: string;
  residence_city: string;
  residence_address: string;
  residence_neighborhood: string;
  is_active: boolean;
  accept_terms: boolean;
  eps_company: number;
  company_area: number;
  user_role: number;
  verification_code: number;
  createdAt: string;
  updateAt: string;
  deletedAt: string;
  medical_req: Array<MedicalReq>;
  errors: [];
}
