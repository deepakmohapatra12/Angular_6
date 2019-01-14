// export class User {
//     constructor(public username: string, public password: string,
//          public notificationMode: string,public email:string,public mobileNumber:string) { 
//     }
//  } 

export class User {
    username: string;
    password: string;    
    notificationMode: string;
    email: string;
    mobileNumber: string;
    favoriteLocations: string[];
} 

export interface Book{
    id:number;
    name:string;
    category:string;
}


