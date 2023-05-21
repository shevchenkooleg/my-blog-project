import { classNames } from "@/shared/lib/classNames/classNames";
import { type FC } from 'react';
import { Page } from "@/widgets/Page/ui/Page";
import { VStack } from "@/shared/ui/Stack";
import { EditableProfileCard } from "@/features/EditableProfileCard";
import { useParams } from "react-router-dom";


interface ProfilePageProps {
    className?: string
}

const ProfilePage: FC<ProfilePageProps> = (props) => {
    const { className } = props
    const { id } = useParams<{ id: string }>()

    return (
        <Page className={classNames('', {}, [className])}>
            <VStack gap={'16'} max>
                <EditableProfileCard id={id}/>
            </VStack>
        </Page>
    );
};

export default ProfilePage
