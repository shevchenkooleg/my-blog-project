import { render } from '@testing-library/react';
import { Suspense, type ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18nForTest from 'shared/config/i18n/i18nForTest';

export function renderWithTranslation (component: ReactNode) {
    return render(
        <I18nextProvider i18n={i18nForTest}>
            <Suspense fallback=''>
                {component}
            </Suspense>
        </I18nextProvider>
    );
}
