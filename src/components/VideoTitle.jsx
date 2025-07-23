const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-70 px-12 text-white absolute">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/3">{overview}</p>
      <div className="">
        <button className="bg-white text-black px-10 py-2 rounded-lg font-bold">
          Play
        </button>
        <button className="bg-gray-500 text-white px-10 py-2 mx-2 rounded-lg font-bold">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
