import { type StateSchema } from "@/app/providers/StoreProvider";
import { Currency } from "@/entities/Currency";

export const getProfileCurrency = (state: StateSchema) => state?.profile?.data?.currency || Currency.RUB
