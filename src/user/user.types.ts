export enum Gender {
    Male = 'male',
    Female = 'female',
    Other = 'other'
}

export class UserType {
    name: string;
    username: string;
    mobile_number: number;
    gender: Gender;
    usermail: string;
    password: string;
    isDeleted: Boolean;
}

