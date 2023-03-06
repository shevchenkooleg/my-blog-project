import { classNames } from "shared/lib/classNames/classNames";
import { type FC, useEffect } from 'react';
import { DynamicModuleLoader, type ReducerList } from "shared/components/DynamicModuleLoader";
import { profileReducer } from "entities/Profile/model/slice/profileSlice";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { fetchProfileData, ProfileCard } from "entities/Profile";

const reducers: ReducerList = {
    profile: profileReducer
}

interface ProfilePageProps {
    className?: string
}

const ProfilePage: FC<ProfilePageProps> = (props) => {
    const { className } = props
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchProfileData())
    }, [dispatch])



    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
            <div className={classNames('', {}, [className])}>
                <ProfileCard/>
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage
