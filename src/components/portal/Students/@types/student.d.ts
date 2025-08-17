export interface Student {
  id: string; // UUID/string id
  firstName: string;
  lastName?: string;
  fatherName?: string;
  rollNumber: string;
  grade: Grade;
  phone?: string;
  email?: string;
  subjectsAssigned?: string[]; // keep for future; count shown for now
}

export type StudentFormValues = {
  firstName: string;
  lastName?: string;
  fatherName?: string;
  rollNumber: string;
  grade: Grade;
  phone?: string;
  email?: string;
};
