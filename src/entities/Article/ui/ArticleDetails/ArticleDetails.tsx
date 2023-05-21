import cls from "./ArticleDetails.module.scss"
import { classNames } from "@/shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { DynamicModuleLoader, type ReducerList } from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { articleDetailsReducer } from "../../model/slice/articleDetailsSlice";
import { memo, useCallback } from "react";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { fetchArticleById } from "../../model/services/fetchArticleData/fetchArticleById";
import { useSelector } from "react-redux";
import {
    ArticleBlockType,
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading
} from "../../index";
import { Text, TextAlign, TextSize } from "@/shared/ui/Text/Text";
import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";
import { Avatar } from "@/shared/ui/Avatar/Avatar";
import EyeIcon from '@/shared/assets/icons/Eye-Icon.svg'
import CalendarIcon from '@/shared/assets/icons/Calendar-Icon.svg'
import { Icon } from "@/shared/ui/Icon/Icon";
import { type ArticleBlock } from "../../model/types/article";
import { ArticleCodeBlockComponent } from "../ArticleCodeBlockComponent/ArticleCodeBlockComponent";
import { ArticleImageBlockComponent } from "../ArticleImageBlockComponent/ArticleImageBlockComponent";
import { ArticleTextBlockComponent } from "../ArticleTextBlockComponent/ArticleTextBlockComponent";
import { useInitialEffect } from "@/shared/lib/hooks/useInitialEffect/useInitialEffect";
import { HStack, VStack } from "@/shared/ui/Stack";

interface ArticleDetailsProps {
    className?: string
    id?: string
}

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
    const { t } = useTranslation()
    const { className, id } = props
    const dispatch = useAppDispatch()
    const isLoading = useSelector(getArticleDetailsIsLoading)
    const article = useSelector(getArticleDetailsData)
    const error = useSelector(getArticleDetailsError)

    const renderBlock = useCallback((block: ArticleBlock) => {
        switch (block.type) {
            case ArticleBlockType.CODE:
                return <ArticleCodeBlockComponent key={block.id} block={block} className={cls.block}/>;
            case ArticleBlockType.IMAGE:
                return <ArticleImageBlockComponent key={block.id} block={block} className={cls.block}/>;
            case ArticleBlockType.TEXT:
                return <ArticleTextBlockComponent key={block.id} block={block} className={cls.block}/>;
            default:
                return null
        }
    }, [])

    useInitialEffect(() => {
        dispatch(fetchArticleById(id))
    })

    const reducers: ReducerList = {
        articleDetails: articleDetailsReducer
    }

    let content

    if (isLoading) {
        content = (
            <VStack gap={'16'}>
                <HStack justify={'center'} max>
                    <Skeleton className={cls.avatar} width={200} height={200} border={'50%'} />
                </HStack>
                <Skeleton className={cls.title} width={300} height={32} />
                <Skeleton className={cls.skeleton} width={600} height={24} />
                <Skeleton className={cls.skeleton} width={'100%'} height={200} />
                <Skeleton className={cls.skeleton} width={'100%'} height={200} />
            </VStack>
        )
    } else if (error) {
        content = (
            <Text text={t('Произошла ошибка при загрузке статьи')} align={TextAlign.CENTRE}/>
        )
    } else {
        content = (
            <VStack gap={'16'}>
                <HStack justify={'center'} max>
                    <Avatar
                        size={200}
                        avatar={article?.img}
                        className={cls.avatar}
                    />
                </HStack>
                <Text
                    size={TextSize.L}
                    className={cls.title}
                    title={article?.title}
                    text={article?.subtitle}
                />
                <VStack>
                    <HStack gap={'16'} className={cls.articleInfo}>
                        <Icon Svg={EyeIcon} className={cls.icon}/>
                        <Text text={String(article?.views)}/>
                    </HStack>
                    <HStack gap={'16'} className={cls.articleInfo}>
                        <Icon Svg={CalendarIcon} className={cls.icon}/>
                        <Text text={article?.createdAt}/>
                    </HStack>
                </VStack>
                {article?.blocks.map(renderBlock)}
            </VStack>
        )
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
            <div className={classNames(cls.ArticleDetails, {}, [className])}>
                {content}
            </div>
        </DynamicModuleLoader>
    );
});

ArticleDetails.displayName = 'ArticleDetails'
