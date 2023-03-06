import { type StateSchema } from "app/providers/StoreProvider";
import { Country } from "shared/const/common";

export const getProfileCountry = (state: StateSchema) => state?.profile?.data?.country || Country.Russia
