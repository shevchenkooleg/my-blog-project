import { type StateSchema } from "@/app/providers/StoreProvider";
import { Country } from "@/entities/Country";

export const getProfileCountry = (state: StateSchema) => state?.profile?.data?.country || Country.Russia
