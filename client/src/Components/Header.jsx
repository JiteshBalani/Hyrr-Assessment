import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function MenuAppBar() {

    return (
        <Box sx={{ flexGrow: 1}}>

            <AppBar position="static" sx={{ backgroundColor: 'black', color: 'white' }}>
                <Toolbar>

                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        art IKLE
                    </Typography>
                    <a href='https://github.com/JiteshBalani/Hyrr-Assessment' target='blank' className='flex justify-center items-center px-5 space-y-[2px] mx-2'>
                        <GitHubIcon sx={{ color: 'white', height: 35 }} />
                        <span className='text-white text-md'>🔗</span>
                    </a>
                </Toolbar>
            </AppBar>
        </Box>
    );
}