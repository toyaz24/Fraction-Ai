import React, { useState } from "react";
import "./heroBanner.css";
import contactSalesIcon from "../../src/Assets/contactSalesIcon.svg";
import FractionGroup from "../../src/Assets/FractionGroup.svg";
import GoBrowserIcon from "../../src/Assets/GoBrowserIcon.svg";
import GoCloudUploadIcon from "../../src/Assets/GoCloudUploadIcon.svg";
import MdOnedemandVideoIcon from "../../src/Assets/MdOndemandVideoIcon.svg";
import MdImageIcon from "../../src/Assets/MdImageIcon.svg";
import VideoPlayer from "../VideoPlayer/VideoPlayer";

export default function HeroBanner() {
  let iconArray = [
    { iconName: "MdImageIcon", icon: MdImageIcon },
    { iconName: "GoBrowserIcon", icon: GoBrowserIcon },
    { iconName: "GoCloudUploadIcon", icon: GoCloudUploadIcon },
    { iconName: "MdOnedemandVideoIcon", icon: MdOnedemandVideoIcon },
  ];

  const [url, setUrl] = useState("");

  return (
    <>
      <div className=" mx-md-5 hero-banner">
        <h1 className="hero-text m-0">Supercharge AI Using</h1>
        <h1 className="hero-text m-0 human-powered-text-color">
          Human Powered Data
        </h1>
        <h4 className="mt-4 subheader-hero-banner-text m-0">
          High quality training data curated by a diverse and skilled crowd,
        </h4>
        <h4 className="subheader-hero-banner-text m-0">
          tailored for your machine learning projects
        </h4>

        <div className="pt-4 pb-4  contact-sales">
          <button className="btn btn-primary rounded-pill bookdemo-btn-bg-color">
            Contact Sales
            <img src={contactSalesIcon} />
          </button>
        </div>
        <div className="d-flex justify-content-center">
          <div className="tablet-container">
            <div className="tablet">
              <div className="tablet-header">
                <div className="fraction-tablet-icon">
                  <img className="fraction-group-icon" src={FractionGroup} />
                </div>
                <div className="w-100  mb-3 d-flex input-container ">
                  <input
                    type="text"
                    className="form-control input-video-url w-75"
                    placeholder="Enter video URL"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                  />
                </div>
              </div>
              <div className="d-flex h-100">
                <div className=" pt-3 tablet-sidebar">
                  {iconArray.map((el, index) => (
                    <img className="p-2 sidebar-icons" src={el.icon} key={index} />
                  ))}
                </div>
                <VideoPlayer url={url} />
              </div>
            </div>
          </div>
        </div>
      </div>
      );
    </>
  );
}
