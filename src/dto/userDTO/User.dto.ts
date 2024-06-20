export interface InputUserDto {
  name: string;
  email: string;
  password: string;
  status: boolean;
  accessLevelId: string;
  companyId: string;
}

export interface OutputUserDto {
  id: string;
  name: string;
  email: string;
  status: boolean;
  password: string;
  accessLevelId: string;
  companyId: string;
  createdAt: Date;
  updatedAt: Date;
}
