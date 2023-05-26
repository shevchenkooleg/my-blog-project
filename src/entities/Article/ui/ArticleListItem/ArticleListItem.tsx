import cls from "./ArticleListItem.module.scss"
import { classNames } from "@/shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { type HTMLAttributeAnchorTarget, memo } from "react";
import { type Article, type ArticleTextBlock } from "../../model/types/article";
import { Text } from "@/shared/ui/Text/Text";
import { Icon } from "@/shared/ui/Icon/Icon";
import EyeIcon from "@/shared/assets/icons/Eye-Icon.svg"
import { Card } from "@/shared/ui/Card/Card";
import { Avatar } from "@/shared/ui/Avatar/Avatar";
import { Button, ButtonTheme } from "@/shared/ui/Button/Button";
import { ArticleTextBlockComponent } from "../ArticleTextBlockComponent/ArticleTextBlockComponent";
import { AppLink } from "@/shared/ui/AppLink/AppLink";
import { ArticleBlockType, ArticleView } from "../../model/consts/consts";
import { RoutePath } from "@/shared/const/router";

interface ArticleListItemProps {
    className?: string
    isLoading?: boolean
    view: ArticleView
    article: Article
    target?: HTMLAttributeAnchorTarget
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const { t } = useTranslation('articles')
    const { className, view, article, target } = props

    const types = <Text text={article.type.join(', ')} className={cls.types}/>
    const views = (
        <>
            <Text text={String(article.views)} className={cls.views}/>
            <Icon Svg={EyeIcon} className={cls.icon}/>
        </>
    )

    if (view === ArticleView.BIG) {
        const textBlock = article.blocks.find(el => el.type === ArticleBlockType.TEXT) as ArticleTextBlock

        return (
            <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
                <Card>
                    <div className={cls.header}>
                        <Avatar avatar={article.user.avatar} alt={article.user.username} size={30} round={50} />
                        <Text text={article.user.username} className={cls.username}/>
                        <Text text={article.createdAt} className={cls.date}/>
                    </div>
                    <Text title={article.title} className={cls.title}/>
                    {types}
                    <img src={article.img} className={cls.img} alt={article.title}/>
                    {textBlock && <ArticleTextBlockComponent block={textBlock} className={cls.textBlock}/> }
                    <div className={cls.footer}>
                        <AppLink to={RoutePath.article_details + article.id}>
                            <Button theme={ButtonTheme.OUTLINE}>{t('Читать далее')}</Button>
                        </AppLink>
                        {views}
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <AppLink
            target={target}
            to={RoutePath.article_details + article.id}
            className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
        >
            <Card>
                <div className={cls.imageWrapper}>
                    <img src={article.img} className={cls.img} alt={article.title}/>
                    <Text text={article.createdAt} className={cls.date}/>
                </div>
                <div className={cls.infoWrapper}>
                    {types}
                    {views}
                </div>
                <Text text={article.title} className={cls.title}/>
            </Card>
        </AppLink>
    );
})

ArticleListItem.displayName = 'ArticleListItem'
