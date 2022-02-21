import React from 'react';
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import Home from './routes/Home';
const ContactUs = React.lazy(() => import('./routes/ContactUs'));
const Privacy = React.lazy(() => import('./routes/Privacy'));
const BarDateDetail = React.lazy(() => import('./routes/BarDateDetail'));
const BarDayDetail = React.lazy(() => import('./routes/BarDayDetail'));
import Navigation from './components/Navigation';
// import OtherComponent from './OtherComponent';
// const OtherComponent = React.lazy(() => import('./OtherComponent'));


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
                            <ContactUs />
                        </Route>
                        <Route path='/privacy-policy'>
                            <Privacy />
                        </Route>                        
                        <Route path='/bar-date-detail/:id'>
                            <BarDateDetail />
                        </Route>
                        <Route path='/bar-day-detail/:id'>
                            <BarDayDetail />
                        </Route>
                    </>
            </Switch>
        </Router>
    )
}

export default AppRouter