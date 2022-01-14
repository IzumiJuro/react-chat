import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import * as React from 'react';


interface AppProps { 
    handleChange: (event: any, newValue: string)=>void;
};

function Signup({handleChange}: AppProps) {
    const paperStyle = {
        p: 2.5,
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
                    <Typography variant='h4' gutterBottom component='div'>Sign Up</Typography>
                    <Typography variant='caption'>Please fill this form to create an account</Typography>
                </Grid>
                <TextField label='Username' placeholder='Enter username' fullWidth required></TextField>
                <TextField label='Email' placeholder='Enter email' type='password' fullWidth required></TextField>
                <TextField label='Phone Number' placeholder='Enter phone number' fullWidth required></TextField>
                <TextField label='Password' placeholder='Enter password' fullWidth required></TextField>
                <TextField label='Confirm Password' placeholder='Enter password' fullWidth required></TextField>
                <Button type='submit' color='primary' variant='contained' fullWidth>Sign up</Button>
                <Typography variant='body1'> Already have an account?
                    <Link href='#' onClick={() => handleChange("event", "1")}>
                        Sign In!
                    </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Signup