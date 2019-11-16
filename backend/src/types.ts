export interface PatientType {
  gender: string;
  age: number;
  disease: string;
  treatmentType: string;
}

export interface UserType {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
}

export interface UserProfile {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  username: string;
}

export interface LoginType {
  access_token: string;
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
}

export interface ValidateType {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  username: string;
}

export type MockType<T> = {
  [P in keyof T]: jest.Mock<{}>;
};
