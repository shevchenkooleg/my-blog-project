import cls from "./ArticlesPage.module.scss"
import { classNames } from "shared/lib/classNames/classNames";
import { memo } from "react";
import { ArticleList, ArticleView } from "entities/Article";


interface ArticlesPageProps {
    className?: string
}

const ArticlesPage = (props: ArticlesPageProps) => {
    const { className } = props

    return (
        <div className={classNames(cls.ArticlesPage, {}, [className])}>
            <ArticleList view={ArticleView.SMALL} articles={[]}/>
        </div>
    );
};

export default memo(ArticlesPage)
