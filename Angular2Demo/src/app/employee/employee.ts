export interface IEmployee
{

    code: string;
    name: string;
    gender: string;
    salary: number;
    dateofbirth: string;
   // department?: string;

   // computeMonthlySalary(salary: number): number;
}
/*
export class Employee implements IEmployee
{
  //public   code: string;
  //  public   name: string;
  //  public  gender: string;
  //  public  salary: number;
  //  public dateofbirth: string;

    constructor(public code: string,
        public name: string,
        public gender: string,
        public salary: number,
        public dateofbirth: string)
    {

    }


    computeMonthlySalary(salary: number): number
    {
        return salary / 12;
    }
}

*/