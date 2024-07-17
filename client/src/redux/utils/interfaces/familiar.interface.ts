interface Familiar {
  id: string;
  name: string;
  last_name: string;
  user_gender: number;
  user_gender_abbrev: string;
  user_id_type: number;
  id_type_abbrev: string;
  id_number: number;
  email: string;
  cellphone: number;
  whatsapp: number;
  authentication_method: number;
  is_active: boolean;
  accept_terms: boolean;
  user_role: number;
  patient_id: string;
  patient_id_number: number;
  patient_name: string;
  patient_id_type_abbrev: string;
  rel_with_patient: number;
  rel_with_patient_abbrev: string;
  verification_code: number;
  idTypesFamiliar: string[];
  createdAt: string;
  updateAt: string;
  deletedAt: string;
  copy_familiar_citizenship_card: string[];
  medical_req: Array<MedicalReq>;
  errors: [];
}
