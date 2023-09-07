import React from 'react';
import { Typography, Stack, Button } from '@mui/material';

import BodyPartImg from '../assets/icons/body-part.png';
import equipmentImg from '../assets/icons/equipment.png';
import targetImg from '../assets/icons/target.png';

const Detail = ({ exerciseDetail }) => {
    const { bodyPart, gifURL, name, target, equipment } = exerciseDetail;
    const extraDetail = [
        {
            icon: BodyPartImg,
            name: bodyPart
        },
        {
            icon: targetImg,
            name: target
        },
        {
            icon: equipmentImg,
            name: equipment
        }
    ]
    return (
        <Stack
            gap='20px'
            sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}
        >
            <img src={gifURL} alt={name} loading='lazy' className='detail-image' />
            <Typography variant='h3'>
                {name}
            </Typography>
            <Typography variant='h6'>
                Exercises keep you strong.
                {name} is one of the best exercises to target your
                {target}. It will help you improve your mood and gain energy.
            </Typography>
            {
                extraDetail.map((item) => (
                    <Stack key={item.name} direction='row' gap='24px' alignItems='center'>
                        <Button
                            sx={{ background: '#fff2db', borderRadius: '50%', width: '100px', height: '100px' }}
                        >
                            <img src={item.icon} alt={item.name} style={{ width: '50px', height: '50px' }} />
                        </Button>
                        <Typography textTransform='capitalize' variant='h5'>
                            {item.name}
                        </Typography>
                    </Stack>
                ))
            }
        </Stack>
    )
}

export default Detail