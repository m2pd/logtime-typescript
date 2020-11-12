export interface LogtimeEditPage{
  activity: string;
  comment: string;
  cost: number;
  createdAt: string;
  date: string;
  description: string;
  enable: boolean;
  id: number;
  overtime: boolean;
  projectTitle: string;
  title: string;
  updatedAt: string;
  userId: number;
}

export interface LogtimePutPage{
  activity: string;
  comment: string;
  cost: number;
  createdAt: string;
  dateString: string;
  description: string;
  enable: boolean;
  id: number;
  overtime: boolean;
  projectTitle: string;
  title: string;
  updatedAt: string;
  userId: number;
}

export interface Logtime{
  userId:number;
  dateString: string;
  cost: number;
  description: string;
  projectTitle: string;
  overtime: boolean;
  title: string;
  activity: string;
}

export interface LogtimeForm{
  activity: string;
  cost: number;
  dateString: string;
  description: string;
  overtime: boolean;
  projectTitle: string;
  title: string;
}

export interface initialValuesAddEditForm{
  dateString: string;
  overtime: boolean;
  cost: number;
  title: string;
  description: string;
  projectTitle: string;
  activity: string;
}

export interface User{
  id: number;
  fullName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  team: string;
  active: boolean;
  roles : string[];
}