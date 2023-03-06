import { type StateSchema } from "app/providers/StoreProvider";
import { Currency } from "shared/const/common";

export const getProfileCurrency = (state: StateSchema) => state?.profile?.data?.currency || Currency.RUB
