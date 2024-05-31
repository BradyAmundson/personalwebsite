import React, { useEffect, useRef, useState } from "react";
import "./Spin.css";

const Spin = ({ children }) => {
  const [hasReachedPosition, setHasReachedPosition] = useState(false);
  const containerRef = useRef(null);
  const numChildren = React.Children.count(children);

  useEffect(() => {
    const handleScroll = () => {
      if (
        !hasReachedPosition &&
        window.scrollY >= 4600 &&
        window.scrollY <= 6200
      ) {
        setHasReachedPosition(true);
      }

      if (hasReachedPosition && containerRef.current) {
        if (window.scrollY >= 6200) {
          setHasReachedPosition(false);
        }
        const rotation = window.scrollY * 0.3; // Adjust rotation speed as needed
        if (containerRef.current) {
          containerRef.current.style.transform = `rotate(${rotation}deg)`;

          const childrenElements = containerRef.current.children;
          for (let i = 0; i < childrenElements.length; i++) {
            const angle = (360 / numChildren / 2) * i + rotation;
            const normalizedAngle = ((angle % 360) + 360) % 360;

            // Calculate opacity based on angle relative to 90 degrees

            let opacity;
            if (normalizedAngle >= 0 && normalizedAngle <= 90) {
              opacity = 1 - normalizedAngle / 90;
            } else if (normalizedAngle > 90 && normalizedAngle <= 180) {
              opacity = 1 - (normalizedAngle - 90) / 90;
            } else if (normalizedAngle > 180 && normalizedAngle <= 270) {
              opacity = (normalizedAngle - 180) / 90;
            } else {
              opacity = 1 - (normalizedAngle - 270) / 90;
            }

            childrenElements[i].style.opacity = opacity;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasReachedPosition]);

  return (
    <div className="spin-container" ref={containerRef}>
      {React.Children.map(children, (child, index) => {
        const angle = (360 / numChildren / 2) * index + 90;
        const radius = 700;

        // Calculate the position of each child
        const xPos = radius * Math.cos((angle * Math.PI) / 180);
        const yPos = radius * Math.sin((angle * Math.PI) / 180);

        let initialOpacity;
        if (angle >= 0 && angle <= 90) {
          initialOpacity = 1 - angle / 90;
        } else if (angle > 90 && angle <= 180) {
          initialOpacity = 1 - (angle - 90) / 90;
        } else if (angle > 180 && angle <= 270) {
          initialOpacity = 0;
        } else {
          initialOpacity = (angle - 270) / 90;
        }

        return (
          <div
            key={index}
            className="spin-item"
            style={{
              transform: `translate(-50%, -50%) translate(${xPos}px, ${yPos}px) rotate(${angle}deg)`,
              opacity: initialOpacity,
            }}
          >
            {child}
          </div>
        );
      })}
    </div>
  );
};

export default Spin;
