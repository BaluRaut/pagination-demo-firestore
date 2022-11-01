import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {Login} from "./components/Login";
import {HomeContainer} from "./components/HomeContainer";
// import * as routes from '../constants/routes';
//
// import PublicRoute from './PublicRoute';
//
// import Landing from '../components/Landing';
// import SignUpContainer from '../containers/SignUpContainer';
// import NotFound from '../components/NotFound';
// import {SignInContainer} from "../containers/SignInContainer";
// import PrivateRoute from "./PrivateRoute";
// import {HomeContainer} from "../containers/HomeContainer";


const AppRoutes = (props) => {
    console.log("line 16 ", props);
    return (
        <Routes>
            <Route  path="/" component={Login} />

            {/*<Route*/}
            {/*    path={routes.SIGN_IN}*/}
            {/*    element={<PublicRoute  component={SignInContainer} />}*/}
            {/*/>*/}
            <Route
                path="dashboard"
                component={HomeContainer}
            />
            {/*<Route path="*" element={<NotFound />} />*/}
        </Routes>
    );
};

export default AppRoutes;