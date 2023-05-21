import { useTranslation } from "react-i18next";
import { Page } from "@/widgets/Page/ui/Page";

const ForbiddenPage = () => {
    const { t } = useTranslation()


    return (
        <Page>
            {t('Доступ к данной странице запрещен')}
        </Page>
    );
};

export default ForbiddenPage;


