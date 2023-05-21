import { type Currency } from "@/entities/Currency/model/types/currency";
import { type Country } from "@/entities/Country/model/types/country";

export interface Profile {
    firstName?: string
    lastName?: string
    age?: number
    currency?: Currency
    country?: Country
    city?: string
    username?: string
    avatar?: string
    id?: string

}

