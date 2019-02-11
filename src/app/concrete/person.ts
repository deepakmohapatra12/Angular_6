// export class Person{
//     constructor(
//         public id:number,
//         public firstname:string,
//         public lastname:string,
//         public email:string,
//         public mobilenumber:number,
//         public departments:number,
//         public gender:string,
//         public country:string,
//         public state:string
//         ){

//     }
// }

export interface Person{
    id:number;
    firstname:string;
    lastname:string;
    email:string;
    mobile:number;
    gender:string;
    country:number;
    department:string;
    state:number;
}


export enum NumEnum{
    ONE = 1,
    TWO = 2,
    THREE = 3
}

export class Employee {
    constructor(public id: number, public name: string) { 
    }
  }

// export class Person{
//     constructor(public personId:number,public name:string,public age:number){

//     }
// }