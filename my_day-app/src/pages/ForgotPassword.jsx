import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Logo from '../img/logo.png';
import Copyright from "../helpers/Copyright";
import { Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        width: 450,
        height: 600,
        borderRadius: 20,
        marginLeft: 750,
        marginTop: 100,
        paddingTop: 10,
    },
    paper: {
        marginTop: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        background: '#508FF4',
        color: '#FFFFFF',
    },
}));


export default function ForgotPassword() {
    const classes = useStyles();

    return (
        <div>
        <Paper className={classes.root} elevation={10}>
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div className={classes.paper}>
                <img src={Logo} alt={"logo"} style={{width: '45%', height: '45%'}}/>
                <br/>
                <Typography component="h1" variant="h5">
                    Forgot Password
                </Typography>
                <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <Typography variant="body2" color="error" align="center">
                        {"Make sure the email adress you entered is active!"}
                    </Typography>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Send
                    </Button>
                </form>
            </div>
            <Box mt={8}>
                <Copyright/>
            </Box>
        </Container>
        </Paper>
        </div>
    );
}
