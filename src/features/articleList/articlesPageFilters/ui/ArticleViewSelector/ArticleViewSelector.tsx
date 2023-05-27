import cls from "./ArticleViewSelector.module.scss"
import { classNames } from "@/shared/lib/classNames/classNames";
import { memo } from "react";
import { ArticleView } from "@/entities/Article";
import ListIcon from '@/shared/assets/icons/List-icon.svg'
import TiledIcon from '@/shared/assets/icons/Tiled-icon.svg'
import { Button, ButtonTheme } from "@/shared/ui/Button";
import { Icon } from "@/shared/ui/Icon";
import { useSelector } from "react-redux";
import { getArticlesPageFiltersPageView } from "../../model/selectors/articlesPageFiltersSelectors";
import { articlesPageFiltersActions } from "../../model/slice/articlesPageFiltersSlice";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";

interface ArticleViewSelectorProps {
    className?: string
}


const viewTypes = [
    {
        view: ArticleView.SMALL,
        icon: TiledIcon
    },
    {
        view: ArticleView.BIG,
        icon: ListIcon
    }
]

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
    const { className } = props
    const view = useSelector(getArticlesPageFiltersPageView)
    const dispatch = useAppDispatch()

    const onClick = (newView: ArticleView) => () => {
        dispatch(articlesPageFiltersActions.setView(newView))
    }

    return (
        <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
            {viewTypes.map(viewType => (
                <Button
                    key={viewType.view}
                    theme={ButtonTheme.CLEAR}
                    onClick={onClick(viewType.view)}
                >
                    <Icon
                        Svg={viewType.icon}
                        className={classNames('', { [cls.selected]: viewType.view === view }, [])}
                    />
                </Button>
            ))}
        </div>
    );
});

ArticleViewSelector.displayName = 'ArticleViewSelector'
