import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TabPanel from '@mui/lab/TabPanel';
import Box from '@mui/material/Box';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import Login from '../components/login';
import Signup from '../components/signup';

function SignInOutContainer() {
  const paperStyle = {
    width: 400,
    margin: "20px auto"
  }
  const tablePanelStyle = {
    padding: 0,
  }

    const [value, setValue] = React.useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
      setValue(newValue);
    };

    return (
//     <Container fixed>
//     <TabContext value={value}>
//         <Paper elevation={10} sx={paperStyle}>
//             <Tabs value={value} onChange={handleChange} aria-label="disabled tabs example">
//                 <Tab label="Sign In" />
//                 <Tab label="Sign Up" />
//             </Tabs>
//         </Paper>
//     </TabContext>
//     <TabPanel value='1'></TabPanel>
//     </Container>
//   );
//!  --------------------------------------------------
    <Paper elevation={20} style={paperStyle}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Sign In" value="1" sx = {{width:200}}/>
            <Tab label="Sign Up" value="2" sx = {{width:200}}/>
          </TabList>
        </Box>
        <TabPanel sx={tablePanelStyle} value="1">
          <Login handleChange={handleChange}/>
        </TabPanel>
        <TabPanel sx={tablePanelStyle} value="2">
          <Signup handleChange={handleChange}/> 
        </TabPanel>
      </TabContext>
    </Paper>
  );
}

export default SignInOutContainer