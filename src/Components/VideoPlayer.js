const VideoPlayer = (clickedVideoDetails) => {
    const { source, title } = clickedVideoDetails?.clickedVideoDetails;
    return <iframe width="320" height="240" title={title} src={source} type="video/mp4" />
}
export default VideoPlayer;