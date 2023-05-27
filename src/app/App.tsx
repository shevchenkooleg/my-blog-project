import { Suspense, useEffect } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppRouter } from "./providers/router";
import { Navbar } from "@/widgets/Navbar";
import { Sidebar } from "@/widgets/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { getUserIsInit, userActions } from "@/entities/User";
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';


const App = () => {
    const { theme } = useTheme();
    const dispatch = useDispatch()
    const isInit = useSelector(getUserIsInit)

    useEffect(() => {
        dispatch(userActions.initAuthData())
    }, [dispatch])

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback=''>
                <Navbar/>
                <div className="content-page">
                    <Sidebar/>
                    {isInit && <AppRouter/>}
                </div>
            </Suspense>
        </div>
    );
};

export default App;
