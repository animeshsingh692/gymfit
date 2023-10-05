import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
    return (
        <Box
            sx={{
                mt: { lg: '50px', xs: '0' }
            }}
            p="20px"
        >
            <Typography variant='h3' mb={5}>
                Exercises that target the {' '}
                <span style={{ color: "#ff2625" }}>same muscle</span>
                {' '} group
            </Typography>
            <Stack
                direction="row"
                sx={{ p: '2', position: 'relative' }}
            >
                {targetMuscleExercises.length ?
                    <HorizontalScrollbar data={targetMuscleExercises} />
                    : <Loader />
                }
            </Stack>

            <Typography variant='h3' mb={5}>
                Exercises that use the {' '}
                <span style={{ color: "#ff2625" }}>same equipment</span>
            </Typography>
            <Stack
                direction="row"
                sx={{ p: '2', position: 'relative' }}
            >
                {equipmentExercises.length ?
                    <HorizontalScrollbar data={equipmentExercises} />
                    : <Loader />
                }
            </Stack>
        </Box>
    )
}

export default SimilarExercises