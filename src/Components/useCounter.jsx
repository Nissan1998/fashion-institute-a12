import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const useCounter = () => {
  const num = (
    <>
      <div>
        <div className="Counter">
          <div className="bg-red-500 content" />
          <VisibilitySensor>
            {({ isVisible }) => (
              <div style={{ height: 100 }}>
                {isVisible ? <CountUp end={100} /> : null}
              </div>
            )}
          </VisibilitySensor>
        </div>
      </div>
    </>
  );
  return num;
};

export default useCounter;
