import cls from "./ArticleImageBlockComponent.module.scss"
import { classNames } from "shared/lib/classNames/classNames";
import { memo } from "react";
import { type ArticleImageBlock } from "entities/Article/model/types/artiicle";
import { Text, TextAlign } from "shared/ui/Text/Text";

interface ArticleImageBlockComponentProps {
    className?: string
    block: ArticleImageBlock
}

export const ArticleImageBlockComponent = memo((props: ArticleImageBlockComponentProps) => {
    const { className, block } = props

    return (
        <div className={classNames(cls.ArticleImageBlockComponent, {}, [className])}>
            <img alt={block.title} src={block.src} className={cls.img}/>
            {block.title && (
                <Text text={block.title} align={TextAlign.CENTRE}/>
            )}
        </div>
    );
});

ArticleImageBlockComponent.displayName = 'ArticleImageBlockComponent'
