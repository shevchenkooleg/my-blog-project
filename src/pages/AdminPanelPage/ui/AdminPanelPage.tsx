import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import { Page } from "widgets/Page";

interface AdminPanelPageProps {
    className?: string
}

const AdminPanelPage = (props: AdminPanelPageProps) => {
    const { t } = useTranslation('admin')
    const { className } = props

    return (
        <Page className={classNames('', {}, [className])}>
            {t('Панель администратора')}
        </Page>
    );
};

export default memo(AdminPanelPage)
