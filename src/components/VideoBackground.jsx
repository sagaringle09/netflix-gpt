import { useSelector } from "react-redux";
import useTrailerVideo from "../hooks/useTrailerVideo";

const VideoBackground = () => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  console.log(trailerVideo);
  //call TrailerVideo Api
  useTrailerVideo();
  if (!trailerVideo || !trailerVideo.key) return null;
  return (
    <div className="">
      <iframe
        className="aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
