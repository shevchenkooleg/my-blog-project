import cls from "./AddCommentForm.module.scss"
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import { Input } from "shared/ui/Input/Input";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { DynamicModuleLoader, type ReducerList } from "shared/components/DynamicModuleLoader";
import { getAddCommentFormText } from "../../model/selectors/addCommentsFormSelectors";
import { useSelector } from "react-redux";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { addCommentFormActions, addCommentFormReducer } from "../../model/slice/addCommentFormSlice";
import { HStack } from "shared/ui/Stack";

export interface AddCommentFormProps {
    className?: string
    onSendComment: (text: string) => void
}

const AddCommentForm = memo((props: AddCommentFormProps) => {
    const { t } = useTranslation('comments')
    const { className, onSendComment } = props
    const text = useSelector(getAddCommentFormText)
    const dispatch = useAppDispatch()

    const onCommentTextChange = useCallback((value: string) => {
        dispatch(addCommentFormActions.setText(value))
    }, [dispatch])

    const onSendHandler = useCallback(() => {
        onSendComment(text || '')
        onCommentTextChange('')
    }, [onSendComment, onCommentTextChange, text])

    const reducers: ReducerList = {
        addCommentForm: addCommentFormReducer
    }


    return (
        <DynamicModuleLoader reducers={reducers}>
            <HStack max className={classNames(cls.AddCommentForm, {}, [className])}>
                <Input
                    className={cls.input}
                    placeholder={t('Введите текст комментария')}
                    value={text}
                    onChange={onCommentTextChange}
                />
                <Button
                    theme={ButtonTheme.OUTLINE}
                    onClick={onSendHandler}
                >
                    {t('Отправить')}
                </Button>
            </HStack>
        </DynamicModuleLoader>
    );
});

export default AddCommentForm

AddCommentForm.displayName = 'AddCommentForm'
