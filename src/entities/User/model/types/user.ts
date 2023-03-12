
export interface User {
    id: number | undefined
    username: string | undefined
}

export interface UserSchema {
    authData?: User
    _isInit: boolean
}
