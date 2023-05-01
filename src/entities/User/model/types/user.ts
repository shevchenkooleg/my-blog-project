export enum UserRole {
    ADMIN = 'ADMIN',
    MANAGER = 'MANAGER',
    USER = 'USER'
}


export interface User {
    id: number | undefined
    username: string | undefined
    avatar?: string
    roles?: UserRole[]
}

export interface UserSchema {
    authData?: User
    _isInit: boolean
}
