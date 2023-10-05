import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo.png';

const Footer = () => {
    return (
        <Box mt='80px' bgcolor='#fff3f4'>
            <Stack gap='40px' alignItems='center' px='40px' pt='24px'>
                <Stack direction='row' justifyContent='center' alignItems='center'>
                    <img src={Logo} alt="logo" width='20px' height='40px' />
                    <Typography variant='h6' pl='20px'>gymfit</Typography>
                </Stack>
                <Typography variant='h5' pb='40px' mt='20px'>
                    Made with ❤️ by Singh, Animesh
                </Typography>
            </Stack>
        </Box>
    )
}

export default Footer