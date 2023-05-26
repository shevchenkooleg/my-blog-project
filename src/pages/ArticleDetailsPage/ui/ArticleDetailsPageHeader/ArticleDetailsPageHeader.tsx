import { classNames } from "@/shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import { Button, ButtonTheme } from "@/shared/ui/Button/Button";
import { useNavigate } from "react-router-dom";
import { getArticleDetailsData, getCanEditArticle } from "@/entities/Article";
import { useSelector } from "react-redux";
import { HStack } from "@/shared/ui/Stack";
import { RoutePath } from "@/shared/const/router";

interface ArticleDetailsPageHeaderProps {
    className?: string
}

export const ArticleDetailsPageHeader = memo((props: ArticleDetailsPageHeaderProps) => {
    const { t } = useTranslation('articles')
    const { className } = props
    const navigate = useNavigate()
    const article = useSelector(getArticleDetailsData)
    const canEdit = useSelector(getCanEditArticle)

    const onBackToList = useCallback(() => {
        navigate(RoutePath.articles)
    }, [navigate])
    const onEditArticle = useCallback(() => {
        navigate(`${RoutePath.article_details}${String(article?.id)}/edit`)
    }, [article?.id, navigate])

    return (
        <HStack justify={'between'} max className={classNames('', {}, [className])}>
            <Button
                theme={ButtonTheme.OUTLINE}
                onClick={onBackToList}
            >
                {t('Назад к списку')}
            </Button>
            {canEdit && <Button
                theme={ButtonTheme.OUTLINE}
                onClick={onEditArticle}
            >
                {t('Редактировать')}
            </Button>}
        </HStack>
    );
});

ArticleDetailsPageHeader.displayName = 'ArticleDetailsPageHeader'
