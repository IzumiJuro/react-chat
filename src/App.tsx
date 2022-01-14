import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import axios from 'axios'
import React, { useEffect, useState } from 'react';
import { getHello } from './api/default/default';
import backgroundImage from './Madrid.png';
import LoginIcon from '@mui/icons-material/Login';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Login from './components/login';
import Signup from './components/signup';
import SignInOutContainer from './containers';
import { AppProps, User } from './interfaces';
// axios({
//   url: "localhost:4563",
//   method: "get"
// })
// .then(res => {
//   console.log("res");
// })




// export default App() {
//   return (
//     // <Container fixed>
//     //   <Box sx={{
//     //   display: 'flex',
//     //   width: '100vm',
//     //   height: '100vh',
//     //   backgroundImage: `url(${ backgroundImage })`,
//     //   backgroundSize: 'cover',
//     //   backgroundPosition: 'center',
//     //   backgroundRepeat: 'no-repeat'
//     // }}>
//     //   {/* <Container>
//     //     <Button>11</Button>
//     //   </Container> */
//     //     <Box sx={{
//     //       display: 'flex',
//     //       // justifyContent: 'center',
//     //       // alignItems: 'center',
//     //       // alignContent: 'center',
//     //       flexDirection: 'column'
//     //     }}>
//     //       <TextField
//     //       id="outlined-password-input"
//     //       label="Password"
//     //       type="password"
//     //       autoComplete="current-password"
//     //     />
//     //       <Button variant="outlined" startIcon={<LoginIcon/>}>Login</Button>

//     //     </Box>
//     //   }
//     // </Box>
//     // </Container>
//     // <Grid container compoent='main'>
      
//     // </Grid>
//   );
// }

export default function App() {
  return(
    <>
      <SignInOutContainer/>
    </>
  )
} 
