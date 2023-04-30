import { type StateSchema } from "app/providers/StoreProvider";

export const getProfileAge = (state: StateSchema) => state?.profile?.data?.age || undefined
