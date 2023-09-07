import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';

const Exercisecard = ({ exercise }) => {
    return (
        <Link className='exercise-card' to={`exercise\${exercise.id}`}>
            <img src={exercise.gifUrl} alt={exercise.name} loading='lazy' />
            <Stack
                direction='row'
            >
                <Button
                    sx={{
                        ml: '21px',
                        color: '#fff',
                        background: '#ffa9a9',
                        fontSize: '14px',
                        borderRadius: '20px',
                        textTransform: 'capitalize'
                    }}
                >
                    {exercise.bodyPart}
                </Button>
                <Button
                    sx={{
                        ml: '21px',
                        color: '#fff',
                        background: '#fcc757',
                        fontSize: '14px',
                        borderRadius: '20px',
                        textTransform: 'capitalize'
                    }}
                >
                    {exercise.target}

                </Button>


            </Stack>
            <Typography
                color='#000'
                mt='11px'
                ml='21px'
                pb='10px'
                fontWeight='bold'
                fontSize='22px'
                textTransform='capitalize'

            >
                {exercise.name}
            </Typography>
        </Link>
    )
}

export default Exercisecard