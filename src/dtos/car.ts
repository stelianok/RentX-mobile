export interface ISchedule {
  startDate: Date;
  endDate: Date;
  numberOfDays: number;
}

export interface ICar {
  brand: string;
  name: string;
  image: any;
  price: number;
  fuel_type?: 'eletric' | 'gas' | 'alcohol';
  schedule: ISchedule;
}
