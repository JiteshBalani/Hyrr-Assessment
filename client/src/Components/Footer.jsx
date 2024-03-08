import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function MenuAppBar() {

    return (
        <Box sx={{ flexGrow: 1}}>

            <AppBar position="static" sx={{ backgroundColor: '#1B1A17',  bottom: 0, position: 'fixed', borderTop: 2, borderColor: '#15F5BA', width: '100vw' }}>
                <Toolbar>

                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'white' }}>
                        art-IKLE
                    </Typography>
                    <a href='https://github.com/JiteshBalani/Hyrr-Assessment' target='blank' className='flex justify-center items-center px-5 space-x-[2px] mx-2 border-white border-2 rounded-lg'>
                        <GitHubIcon sx={{ color: 'white', height: 35 }} />
                        <span className='text-white font-semibold text-md'>Source-Code🔗</span>
                    </a>
                </Toolbar>
            </AppBar>
        </Box>
    );
}