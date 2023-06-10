import React from "react";
import girl from "../assets/images/girls.jpg";

const ExtraSection = () => {
  return (
    <div>
      <div className="container mx-auto my-5 md:flex border-8 rounded-xl border-blue-200 ">
        <div className="bg-base-100 p-10 ">
          <h1 className={`text-xl md:text-5xl font-bold mx-w-2xl `}>
            Committed To The Best Result.Join US Now!
          </h1>
          <p>
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
          <div className="text-blue-500 font-bold">
            <div className="mt-5">
              <div className="flex justify-between">
                <p>Practical Knowledge</p>
                <p>92%</p>
              </div>
              <progress
                className="progress progress-info w-full"
                value="92"
                max="100"
              >
                92%
              </progress>
            </div>
            <div>
              <div className="flex justify-between">
                <p>Pass Percentage</p>
                <p>98%</p>
              </div>
              <progress
                className="progress progress-info w-full"
                value="98"
                max="100"
              ></progress>
            </div>
            <div>
              <div className="flex justify-between">
                <p>Happy Students</p>
                <p>90%</p>
              </div>
              <progress
                className="progress progress-info w-full"
                value="90"
                max="100"
              ></progress>
            </div>
            <button className="rounded-full px-4 py-1  text-white bg-blue-600 hover:bg-blue-700">
              Join Us Now
            </button>
          </div>
        </div>
        <div className="bg-red-500">
          <img className="h-full object-cover" src={girl} alt="girl" />
        </div>
      </div>
    </div>
  );
};

export default ExtraSection;
