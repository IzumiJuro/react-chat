import { Button, Container, FormControlLabel, Grid, Link, Paper, TextField, Typography, Checkbox, Avatar  } from '@mui/material';
import * as React from 'react';
import LoginIcon from '@mui/icons-material/Login';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { spacing } from '@mui/system';

interface AppProps { 
    handleChange: (event: any, newValue: string)=>void;
};

function Login({handleChange}: AppProps) {
    const paperStyle = {
        p: 2.5, // 默认一个单位为8px
        height: '70vh',
        width: 360,
        margin: "0 auto"
    }
    
 

    return(
        <Grid>
            <Paper sx={paperStyle}>
                <Grid
                container
                direction='column'
                justifyContent='center' 
                alignItems='center'
                >
                    <LoginIcon></LoginIcon>
                    <Typography variant='h4' gutterBottom component='div'>Sign In</Typography>
                </Grid>
                <TextField label='Username' placeholder='Enter username' fullWidth required></TextField>
                <TextField label='Password' placeholder='Enter password' type='password' fullWidth required></TextField>
                <FormControlLabel
                    control={
                        <Checkbox 
                        name='checkedB'
                        color='primary'
                        />}
                    label='Remember me'
                />
                <Button type='submit' color='primary' variant='contained' fullWidth>Sign in</Button>
                <Typography>
                    <Link href='#'>
                        Forget password?
                    </Link>
                </Typography>
                <Typography variant='body1'> Don't have an account?
                    <Link href='#' onClick={() => handleChange("event", "2")}>
                        Sign Up
                    </Link>
                </Typography>
            </Paper>
        </Grid>
        // <Grid>
        //     <Paper  style={paperStyle}>
        //         <Grid alignItems='center'>
        //              <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
        //             <h2>Sign In</h2>
        //         </Grid>
        //         <TextField label='Username' placeholder='Enter username' fullWidth required/>
        //         <TextField label='Password' placeholder='Enter password' type='password' fullWidth required/>
        //         <FormControlLabel
        //             control={
        //             <Checkbox
        //                 name="checkedB"
        //                 color="primary"
        //             />
        //             }
        //             label="Remember me"
        //          />
        //         <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
        //         <Typography >
        //              <Link href="#" >
        //                 Forgot password ?
        //         </Link>
        //         </Typography>
        //         <Typography > Do you have an account ?
        //              <Link href="#" onClick={()=>handleChange("event",'2')} >
        //                 Sign Up 
        //         </Link>
        //         </Typography>
        //     </Paper>
        // </Grid>
    )
}


export default Login