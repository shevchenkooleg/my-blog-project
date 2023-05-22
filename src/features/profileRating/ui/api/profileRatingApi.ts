import { rtkApi } from "@/shared/api/rtkApi";
import { type Rating } from "@/entities/Rating";

interface GetProfileRatingArg {
    profileId: string
    userId: string
}

interface RateProfileArg {
    profileId: string
    userId: string
    rate: number
}

const profileRatingApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getProfileRating: build.query<Rating[], GetProfileRatingArg>({
            query: ({ userId, profileId }) => ({
                url: '/profile-ratings',
                params: {
                    userId,
                    profileId
                }
            })
        }),
        rateProfile: build.mutation<void, RateProfileArg>({
            query: (args) => ({
                url: '/profile-ratings',
                method: 'POST',
                body: args
            })
        })
    })
})

export const useGetProfileRating = profileRatingApi.useGetProfileRatingQuery
export const useRateProfile = profileRatingApi.useRateProfileMutation
