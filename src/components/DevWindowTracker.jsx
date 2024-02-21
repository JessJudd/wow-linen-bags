import { useState, useEffect } from "react";

export const DevWindowTracker = () => {
  const [browserWidth, setBrowserWidth] = useState(window.innerWidth);

  console.log("component rendered");

  useEffect(() => {
    function watchWidth() {
      console.log("setting up...");
      setBrowserWidth(window.innerWidth);
    }

    window.addEventListener("resize", watchWidth);

    return function () {
      console.log("cleaning up...");
      window.removeEventListener("resize", watchWidth);
    };
  }, []);

  return <span>{browserWidth}</span>;
};
