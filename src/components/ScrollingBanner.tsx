import React from "react";
import Marquee from "react-fast-marquee";
import { flags } from "../data/flags";
import "./../styles/ScrollingBanner.css";

const ScrollingBanner: React.FC = () => {
  return (
    <div className="scrolling-banner">
      <Marquee gradient={false} speed={30} style={{ overflow: "visible" }}>
        {flags.map((flag) => (
          <a
            key={flag.id}
            href={`/${flag.id}`}
            className="scrolling-item"
            title={flag.name}
          >
            <img
              src={flag.image.icon}
              alt={flag.name}
              className="scrolling-image"
            />
          </a>
        ))}
      </Marquee>
    </div>
  );
};

export default ScrollingBanner;
