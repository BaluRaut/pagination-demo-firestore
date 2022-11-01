import React, {Component, useEffect, useState} from 'react';
import { useHistory, Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

import {
    Button,
    CircularProgress,
    Dialog,
    DialogContent,
    Divider,
    TextField,
    Typography,
    withMobileDialog
} from "@material-ui/core";
import {useImmer} from "use-immer";

// Styles
import { makeStyles } from "@material-ui/core/styles";

import {styles} from "./styles";
import {logInWithEmailAndPassword, auth} from "../firebase";
import {LinearProgress} from "@mui/material";
const useStyles = makeStyles(styles);

export const Login = (props) =>  {
    const [state, setState] = useImmer({
        email: '',
        password: '',
        isOpen: false,
        loading: false
    });
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    const classes = useStyles();
    useEffect(() => {
        if (loading) {
            // maybe trigger a loading screen
            return;
        }
        if (user) {
            if(window.lastRoute === "/data-entry") {
                navigate("//data-entry");
            } else
            if(window.lastRoute === "/dashboard") {
                navigate("/dashboard");
            } else {
                navigate("/dashboard");
            }
        }
        else {
            setState((draft) =>{ draft.isOpen =true;});
        }
    }, [user, loading]);
    const onCloseModal = () => {
        setState((draft) =>{ draft.isOpen =false;});
    };


    const handleSubmit =async (e) => {
        e.preventDefault();
        setState((draft)=> {draft.loading= true;});
        const { email, password } = state;
        try {
           await logInWithEmailAndPassword(email, password);
        } catch(error) {
            setState((draft)=> {draft.loading= false;});
        };
    };

    return (
        <>            {loading && (<LinearProgress color="success" />)}
        <Dialog
            open={state.isOpen}
            transitionDuration={100}
            classes={{ paper: classes.paper }}
        >
            <DialogContent>

                <form onSubmit={handleSubmit}>
                    <TextField
                        fullWidth
                        margin="dense"
                        label={"Email"}
                        onChange={event => {
                            setState((draft) => { draft.email =event.target.value; return draft;});
                        }}
                    />
                    <br/>
                    <TextField
                        fullWidth
                        margin="dense"
                        label={"Password"}
                        type="password"
                        onChange={event => {
                            setState((draft) => { draft.password =event.target.value; return draft;});
                        }}
                    />

                    <br/>
                    <Button
                        fullWidth={true}
                        variant="contained"
                        color="primary"
                        className={classes.buttonSuccess}
                        type="submit"
                        onClick={handleSubmit}
                    >
                        Login
                        {loading && (
                            <CircularProgress size={24} className={classes.buttonProgress} />
                        )}
                    </Button>
                </form>

                <Divider />
            </DialogContent>
        </Dialog>
            </>
    );
}