import React, { useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import VideoPlayer from "./VideoPlayer";

const ExerciseVideos = ({ exerciseVideos, exerciseName }) => {
    const [clickedVideoDetails, setClickedVideoDetails] = useState({
        source: "",
        title: "",
    });

    const [clickedId, setClickedId] = useState(-1);

    const handleClick = (videoData) => {
        setClickedVideoDetails({
            source: `https://www.youtube.com/embed/${videoData.videoId}?autoplay=1&mute=1`,
            title: videoData.title,
        });
        setClickedId(videoData.videoId)
    };

    if (!exerciseVideos.length) return "Loading...";
    return (
        <Box
            sx={{
                marginTop: { lg: "200px", xs: "20px" },

            }}
            p="20px"
        >
            <Typography variant="h3" mb="33px">
                Watch{" "}
                <span style={{ color: "#ff2625", textTransform: "capitalize" }}>
                    {exerciseName}
                </span>{" "}
                exercise videos
            </Typography>
            <Stack
                justifyContent="space-around"
                flexWrap="wrap"
                alignItems="center"
                sx={{
                    flexDirection: { lg: "row" },

                }}
            >
                {exerciseVideos?.slice(0, 3).map((item) => (
                    // <a
                    //     key={index}
                    //     className="exercise-video"
                    //     href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                    //     target='_blank'
                    //     rel='noreferrer'
                    // >
                    <div style={{ width: "320px", minHeight: "300px" }} key={item.video.videoId}>
                        {clickedVideoDetails.source?.length > 0 && clickedId === item.video.videoId ? (
                            <VideoPlayer clickedVideoDetails={clickedVideoDetails} />
                        ) : (
                            <img
                                width="320"
                                height="240"
                                src={item.video.thumbnails[0].url}
                                alt={item.video.title}
                                onClick={() => handleClick(item.video)}
                            />
                        )}
                        <Box>
                            <Typography variant="h5" color="#000">
                                {item.video.title}
                            </Typography>
                            <Typography variant="h6" color="#000">
                                {item.video.channelName}
                            </Typography>
                        </Box>
                    </div>
                    // </a>
                ))}
            </Stack>
        </Box>
    );
};

export default ExerciseVideos;
