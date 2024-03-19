import React, {useState } from "react";
import ReactPlayer from "react-player";
import ArrowLeftIcon from "../../src/Assets/ArrowLeftIcon.svg";
import ArrowRightIcon from "../../src/Assets/ArrowRightIcon.svg";
import "./videoplayer.css";
import ConfirmationModal from "./ConfirmationModal";

const VideoPlayer = ({ url }) => {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [startTime, setStartTime] = useState(0);
  const [stopTime, setStopTime] = useState(0);
  const [description, setDescription] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleProgress = (state) => {
    setProgress(state.played);
    setCurrentTime(state.playedSeconds);

    if (playing) {
      if (startTime === 0) {
        setStartTime(state.playedSeconds);
      }
    }
  };

  const handleStop = () => {
    if (playing) {
      setStopTime(currentTime);
    } else {
      setStartTime(currentTime);
    }
  };

  const handleSeekMouseDown = () => {
    setPlaying(false);
  };

  const handleSeekMouseUp = () => {
    setPlaying(true);
  };

  const handleMouseMove = (e) => {};

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleProgressBarClick = (e) => {
    e.preventDefault();
    const rect = e.currentTarget.getBoundingClientRect();
    const clickedX = e.clientX - rect.left;
    const progressBarWidth = rect.width;
    const clickedPercentage = clickedX / progressBarWidth;
    const newProgress = parseFloat(clickedPercentage.toFixed(2));
    const newTime = newProgress * duration;
  };

  return (
    <div className="p-md-4 p-2 video-player-container">
      <ReactPlayer
        url={url}
        playing={playing}
        onProgress={handleProgress}
        onDuration={(duration) => setDuration(duration)}
        className="player-content"
      />

      <div className="progress-bar-container d-flex">
        <button
          className="btn btn-primary start-player-button start-custom-mg"
          onClick={() => {
            setStartTime(currentTime);
          }}
        >
          Start
          <img className="arrow-btn" src={ArrowLeftIcon} />
        </button>
        <div className="progress-bar-wrapper w-100">
          {startTime !== 0 && (
            <div
              className="vertical-line start-line"
              style={{ left: `${(startTime / duration) * 100}%` }}
            >
              <div
                className="tooltip start-tooltip"
                style={{ top: "100%", left: "-50%" }}
              >
                {Math.floor(startTime)}
              </div>
            </div>
          )}

          {stopTime !== 0 && (
            <div
              className="vertical-line stop-line"
              id="sdfghj"
              style={{ left: `${(stopTime / duration) * 100}%` }}
              data-toggle="tooltip"
              title="Tooltip on top"
              data-placement="right"
            ></div>
          )}

          <input
            type="range"
            className="duration-range"
            min={0}
            max={1}
            step="any"
            value={progress}
            // onChange={handleSeekChange}
            onMouseDown={handleSeekMouseDown}
            onMouseUp={handleSeekMouseUp}
            onClick={handleProgressBarClick}
          />
          <div
            className="progress-indicator"
            style={{ width: `${progress * 100}%` }}
          ></div>
        </div>

        <button
          className="btn btn-primary start-player-button stop-custom-mg"
          onClick={handleStop}
        >
          Stop
          <img className="arrow-btn" src={ArrowRightIcon} />
        </button>
      </div>
      <div className="description-input-container mt-2">
        <label htmlFor="description" className="description-label">
          Video Description:
        </label>
        <input
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="write Description of Above Mentioned Video here ...."
          rows={4}
          cols={50}
          className="form-control"
        />
      </div>

      <div className="pt-3 d-flex justify-content-center">
        <button
          className="btn btn-primary start-player-button"
          onClick={handleModalOpen}
        >
          Submit
        </button>
      </div>
      <ConfirmationModal
        show={showModal}
        onHide={handleModalClose}
        startTooltipTime={startTime}
        stopTooltipTime={stopTime}
        description={description}
      />
    </div>
  );
};

export default VideoPlayer;
