import { type User } from "entities/User";

export interface Comment {
    id: string
    user: User
    text: string
}


// "id": string
// "text": string
// "articleId": string
// "userId": string
