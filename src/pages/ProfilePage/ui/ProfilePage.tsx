import { classNames } from "shared/lib/classNames/classNames";
import { type FC } from 'react';
import { Page } from "widgets/Page/ui/Page";
import { VStack } from "shared/ui/Stack";
import { EditableProfileCard } from "features/EditableProfileCard";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Text } from "shared/ui/Text/Text"


interface ProfilePageProps {
    className?: string
}

const ProfilePage: FC<ProfilePageProps> = (props) => {
    const { className } = props
    const { t } = useTranslation('profile')
    const { id } = useParams<{ id: string }>()

    if (!id) {
        return <Text
            title={t('Произошла непредвиденная ошибка')}
            text={t('Попробуйте перезагрузить страницу')}
        />
    }

    return (
        <Page className={classNames('', {}, [className])}>
            <VStack gap={'16'} max>
                <EditableProfileCard id={id}/>
            </VStack>
        </Page>
    );
};

export default ProfilePage
