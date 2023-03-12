import { Suspense, useEffect } from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from "app/providers/router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { getUserIsInit, userActions } from "entities/User";


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
