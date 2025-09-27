type Role = 'admin' | 'user';

export default interface IUser {
    _id: string,
    email: string,
    password?: string,
    isActive: boolean,
    role: Role
}

export interface ILoginFormData {
    email: string,
    password: string
}