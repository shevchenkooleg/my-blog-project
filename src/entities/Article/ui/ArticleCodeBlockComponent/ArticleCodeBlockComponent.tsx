import cls from "./ArticleCodeBlockComponent.module.scss"
import { classNames } from "@/shared/lib/classNames/classNames";
import { memo } from "react";
import { type ArticleCodeBlock } from "../../model/types/article";
import { Code } from "@/shared/ui/Code";

interface ArticleCodeBlockComponentProps {
    className?: string
    block: ArticleCodeBlock
}

export const ArticleCodeBlockComponent = memo((props: ArticleCodeBlockComponentProps) => {
    const { className, block } = props

    return (
        <Code text={block.code} className={classNames(cls.ArticleCodeBlockComponent, {}, [className])}/>
    );
});

ArticleCodeBlockComponent.displayName = 'ArticleCodeBlockComponent'
