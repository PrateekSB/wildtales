export interface Patient {
  gender: string;
  age: number;
  treatmentType: string;
  disease: string;
}

export interface GenderFilter {
  male: boolean;
  female: boolean;
  others: boolean;
}

export interface SessionUser {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  username: string;
  access_token: string;
}
