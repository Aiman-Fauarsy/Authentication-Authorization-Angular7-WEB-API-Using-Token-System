//
// The User Class/Model, Values where taking from database table, the values must be the same columns inisde the database
// so it can use the functions posts/get...etc without any null objects that are not exists in the table
export class User {
    Firstname:string;
    Lastname:string;
    Username:string;
    Password:string;
    Email:string;
    Role:number
}
