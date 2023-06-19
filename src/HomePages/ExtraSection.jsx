import React, { useEffect, useState } from "react";
import girl from "../assets/images/girls.jpg";
import useCounter from "../Components/useCounter";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const ExtraSection = () => {
  const [progress, setProgress] = useState(0);
  const num = useCounter();

  useEffect(() => {
    // Simulate progress updates
    AOS.init();

    if (AOS) {
      const interval = setInterval(() => {
        setProgress((prevProgress) => prevProgress + 1);
      }, 100);
      return () => clearInterval(interval);
    }
  }, [progress]);

  return (
    <div data-aos="fade-up">
      <div className="container mx-auto my-5 md:flex border-8 rounded-xl border-blue-200 ">
        <div
          style={{
            backgroundImage:
              "url('https://previews.123rf.com/images/oconner/oconner1011/oconner101100006/8283176-abstract-blue-and-green-background-for-design.jpg')",
          }}
          className="p-10 bg-cover "
        >
          <h1 className={`text-xl md:text-5xl font-bold  md:mx-w-2xl `}>
            Committed To The Best Result.Join US Now!
          </h1>
          <p className="font-semibold">
            At [Fashion Institute], we are dedicated to delivering the best
            results to our valued community. Whether you are looking to expand
            your knowledge, enhance your skills, or explore new horizons, our
            team of experts is here to guide you every step of the way. With a
            focus on excellence and a passion for growth, we provide a
            supportive and engaging learning environment that empowers you to
            reach your full potential. Join us today and unlock a world of
            opportunities as we embark on a transformative journey together.
            Experience the difference and embrace a brighter future with
            [Fashion Institute].
          </p>
          <div className="text-blue-700 font-bold">
            <div className="mt-5">
              <div className="flex justify-between">
                <p>Practical Knowledge</p>
                <p>{Math.min(progress, 92)}%</p>
              </div>
              <progress
                className="progress progress-primary w-full"
                value={Math.min(progress, 92)}
                max="100"
              >
                92%
              </progress>
            </div>
            <div>
              <div className="flex justify-between">
                <p>Pass Percentage</p>
                <p>{Math.min(progress, 98)}%</p>
              </div>
              <progress
                className="progress progress-success w-full"
                value={Math.min(progress, 98)}
                max="100"
              ></progress>
            </div>
            <div>
              <div className="flex justify-between">
                <p>Happy Students</p>
                <p>{Math.min(progress, 90)}%</p>
              </div>
              <progress
                className="progress progress-secondary w-full"
                value={Math.min(progress, 90)}
                max="100"
              ></progress>
            </div>
            <Link to="login">
              <button className="rounded-full px-4 py-1  text-white bg-blue-600 hover:bg-blue-700">
                Join Us Now
              </button>
            </Link>
          </div>
        </div>
        <div>
          <img className="h-full object-cover" src={girl} alt="girl" />
        </div>
      </div>
    </div>
  );
};

export default ExtraSection;
