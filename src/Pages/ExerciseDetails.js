import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { fetchData, exerciseOptions, ytSearchOptions } from '../utils/FetchData';
import Detail from '../Components/Detail';
import ExerciseVideos from '../Components/ExerciseVideos';
import SimilarExercises from '../Components/SimilarExercises';

const ExerciseDetails = () => {
    const [exerciseDetail, setExerciseDetail] = useState({});
    const [exerciseVideos, setExerciseVideos] = useState([]);
    const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
    const [equipmentExercises, setequipmentExercises] = useState([]);
    const { id } = useParams();
    const exerciseDBURL = 'https://exercisedb.p.rapidapi.com/exercises';
    const youTubeSearchURL = 'https://youtube-search-results.p.rapidapi.com/youtube-search';

    useEffect(() => {
        const fetchExercisesData = async () => {
            const exerciseDetailData = await fetchData(`${exerciseDBURL}/exercise/${id}`, exerciseOptions);
            setExerciseDetail(exerciseDetailData);

            const exerciseVideoData = await fetchData(`${youTubeSearchURL}?q=${exerciseDetailData.name}`
                , ytSearchOptions)
            setExerciseVideos(exerciseVideoData);

            const targetMuscleExerciseData = await fetchData(`${exerciseDBURL}/target/${exerciseDetailData.target}`
                , exerciseOptions);
            setTargetMuscleExercises(targetMuscleExerciseData);

            const equipmentExerciseData = await fetchData(`${exerciseDBURL}/equipment/${exerciseDetailData.equipment}`
                , exerciseOptions);
            setequipmentExercises(equipmentExerciseData);
        }
    }, [id])
    return (
        <Box>
            <Detail exerciseDetail={exerciseDetail} />
            <ExerciseVideos exerciseVideos={exerciseVideos} exerciseName={exerciseDetail.name} />
            <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />
        </Box>
    )
}

export default ExerciseDetails