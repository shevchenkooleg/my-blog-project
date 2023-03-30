import { useTranslation } from "react-i18next";
import { Page } from "widgets/Page/ui/Page";

const MainPage = () => {
    const { t } = useTranslation('main')


    return (
        <Page>
            {t('главная страница')}
        </Page>
    );
};

export default MainPage;


