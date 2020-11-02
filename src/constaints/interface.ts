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
