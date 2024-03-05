import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function MenuAppBar() {

    return (
        <Box sx={{ flexGrow: 1}}>

            <AppBar position="static" sx={{ backgroundColor: '#F0F3FF', color: 'white', bottom: 0, position: 'fixed', borderTop: 4, borderColor: '#15F5BA' }}>
                <Toolbar>

                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'black' }}>
                        art-IKLE
                    </Typography>
                    <a href='https://github.com/JiteshBalani/Hyrr-Assessment' target='blank' className='flex justify-center items-center px-5 space-x-[2px] mx-2 border-black border-2'>
                        <GitHubIcon sx={{ color: 'black', height: 35 }} />
                        <span className='text-black font-semibold text-md'>Source-Code🔗</span>
                    </a>
                </Toolbar>
            </AppBar>
        </Box>
    );
}