
export interface User {
    id: number | undefined
    username: string | undefined
    avatar?: string
}

export interface UserSchema {
    authData?: User
    _isInit: boolean
}
