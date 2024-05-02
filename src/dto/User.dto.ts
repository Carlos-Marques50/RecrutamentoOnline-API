export interface InputUserDto {
  name: string;
  email: string;
  status: boolean;
  password: string;
  level_acess: number;
  company: number;
}

export interface OutputUserDto {
  id: number;
  name: string;
  email: string;
  status: boolean;
  password: string;
  level_acess: number;
  company: number;
  createdDate: Date;
  updatedDate: Date;
}
