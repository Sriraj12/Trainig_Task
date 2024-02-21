import React from 'react';
import { useState } from 'react';
// import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom'
import { Avatar, Grid, Button, TextField, Paper} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {useSelector,useDispatch} from 'react-redux';
import { signup } from '../service/action'; 
import Signup from './Signup';


function Login (props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const sign = useSelector((state) => state.sign_in)

    const [user,setUser] = useState({
        username:"",
        password:"",
    });
    return (
        <Grid>
            <Paper elevation={10} className="user">
                <Grid align="center">
                    <Avatar><LockOutlinedIcon /></Avatar>
                    <h2>Login</h2>
                </Grid>
                <div className="name">
                    <TextField
                        required
                        id="outlined"
                        label="Username"
                        className="username"
                        placeholder='Enter user name'
                        fullWidth
                        value={user.username}
                        autoComplete='off'
                        onChange={(e) => setUser(prev=>({...prev,username: e.target.value}))}
                        // helperText ={uerror}
                        // error={uerror}
                    
                    />
                </div>
                <div className="pass">
                    <TextField
                        required
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        className="password"
                        placeholder='Enter password'
                        fullWidth
                        value={user.password}
                        autoComplete='off'
                        onChange={(e) => setUser(prev=>({...prev, password: e.target.value}))}
                        // helperText ={perror}
                    />
                </div>
                <div className="button1">
                <Button 
                variant="contained" 
                fullWidth 
                onClick = {() => dispatch(signup())}
                >
                Sign In</Button>
                </div>
                <div>
                    <Button
                    variant ="contained"
                    fullWidth
                    color="inherit"
                    onClick ={() => {navigate("/signup");}} 
                    >Sign Up</Button>
                </div>
            </Paper>
        </Grid>
    );
}

export default Login;

// () => dispatch(Action())


