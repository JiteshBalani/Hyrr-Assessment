
import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AppRegistrationOutlinedIcon from '@mui/icons-material/AppRegistrationOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useNavigate } from 'react-router-dom';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  const navigate = useNavigate();

  React.useEffect(() => {
    navigate('/');
  }, [navigate]);

  return (
    <Box sx={{ width: 'stretch'}} className='bottom-0 fixed'>
      <BottomNavigation
      sx={{backgroundColor: 'black'}}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          switch (newValue) {
            case 0:
              navigate('/');
              break;
            case 1:
                navigate('/login');
              break;
            default:
              break;
          }
        }}
      >
        <BottomNavigationAction sx={{color: 'white'}} label="Home" icon={<HomeOutlinedIcon />} />
        <BottomNavigationAction sx={{color: 'white'}} label="Login" icon={<LoginOutlinedIcon />} />
         
      </BottomNavigation>
    </Box>
  );
}
          