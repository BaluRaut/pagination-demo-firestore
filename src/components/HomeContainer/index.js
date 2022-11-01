import React, {Component, useEffect, useState} from 'react';
import App from "../../App";

import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "../../firebase";
import {useNavigate} from "react-router-dom";

export const HomeContainer = (props) => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (!user) {
      window.lastRoute = "/dashboard";
      navigate("/");
    }
  }, [user, loading]);
  return (<> {user && (<App/>) } </> )
}
