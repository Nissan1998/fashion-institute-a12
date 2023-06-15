import React, { useEffect, useState } from "react";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolledHeight = window.scrollY;
      const scrollPercentage = (scrolledHeight / totalHeight) * 100;
      setProgress(scrollPercentage);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed top-0 right-0 h-full w-2 bg-gray-200">
      <div
        className="h-full rounded-full bg-blue-500"
        style={{ height: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
