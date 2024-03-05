
import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import { useNavigate } from 'react-router-dom';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  const navigate = useNavigate();

  React.useEffect(() => {
    navigate('/');
  }, [navigate]);

  return (
    <Box  className='top-0 fixed w-screen'>
      <BottomNavigation
      sx={{backgroundColor: '#F0F3FF', borderBottom: 4, borderColor: '#15F5BA'}}
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
        <BottomNavigationAction sx={{color: 'black'}} label="HOME" icon={<HomeOutlinedIcon />} />
        <BottomNavigationAction sx={{color: 'black'}} label="LOGIN" icon={<LoginOutlinedIcon />} />
         
      </BottomNavigation>
    </Box>
  );
}
          