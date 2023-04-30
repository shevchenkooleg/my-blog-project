import { type StateSchema } from "app/providers/StoreProvider";
import { Country } from "entities/Country/model/types/country";

export const getProfileCountry = (state: StateSchema) => state?.profile?.data?.country || Country.Russia
