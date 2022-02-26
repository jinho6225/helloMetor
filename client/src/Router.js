import React, { lazy, Suspense } from 'react';
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import Home from './routes/Home';
const ContactUs = lazy(() => import('./routes/ContactUs'));
const Privacy = lazy(() => import('./routes/Privacy'));
const BarDateDetail = lazy(() => import('./routes/BarDateDetail'));
const BarDayDetail = lazy(() => import('./routes/BarDayDetail'));
import Navigation from './components/Navigation';
// import OtherComponent from './OtherComponent';
// const OtherComponent = React.lazy(() => import('./OtherComponent'));
const loading = () => <p>Loading</p>;


const AppRouter = () => {
    
    return (
        <Router>
            <Navigation />
            <Switch>
                    <>
                        <Route exact path='/'>
                            <Home />
                        </Route>
                        <Route path='/contactus'>
                            <Suspense fallback={loading()}>
                                <ContactUs />
                            </Suspense>
                        </Route>
                        <Route path='/privacy-policy'>
                            <Suspense fallback={loading()}>
                                <Privacy />
                            </Suspense>
                        </Route>                        
                        <Route path='/bar-date-detail/:id'>
                            <Suspense fallback={loading()}>
                                <BarDateDetail />
                            </Suspense>
                        </Route>
                        <Route path='/bar-day-detail/:id'>
                            <Suspense fallback={loading()}>
                                <BarDayDetail />
                            </Suspense>
                        </Route>
                    </>
            </Switch>
        </Router>
    )
}

export default AppRouter