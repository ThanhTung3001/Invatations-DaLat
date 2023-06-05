import React from "react";
import { DATE_START } from "../../constants/date";
import Countdown from "react-countdown";
import CardTimer from "../../components/card/CardTimer";

export default function SessionFirstPage() {
  return (
    <div className="h-[100vh] background-image-full flex items-center justify-center relative">
      <Countdown
        date={DATE_START}
        className="text-gray-800 text-8xl"
        autoStart
        intervalDelay={0}
        renderer={(props) => {
          return (
            <>
              <div className="flex container justify-center items-center flex-col ">
                <div className="overlay-bg"></div>
                <div className="header-content relative z-10">
                  <div className="text-center text-2xl mb-8 text-white max-w-2xl cursor-pointer">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Labore molestias nihil voluptatibus nobis eligendi possimus
                    ea doloremque ipsa cupiditate, esse modi vitae ipsam{" "}
                    <strong> tempore</strong> eius officiis dolore aperiam
                    veniam!
                  </div>
                </div>
                <div className="flex box-timer space-x-4 relative z-50">
                  <CardTimer value={props.days} text="Days" />
                  <CardTimer value={props.hours} text="Hours" />
                  <CardTimer value={props.minutes} text="Minutes" />
                  <CardTimer value={props.seconds} text="Seconds" />
                </div>
                <div className="flex justify-center mt-8 relative z-50">
                  <button className="bg-red-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-md">
                    Discovery
                  </button>
                </div>
              </div>
            </>
          );
        }}
      />
    </div>
  );
}
