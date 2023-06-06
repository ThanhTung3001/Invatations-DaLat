import { LegacyRef, useEffect, useRef, useState } from "react";
import FlipCountdown from '@rumess/react-flip-countdown';
import { DATE_START } from "../../constants/date";
import Countdown from "react-countdown";
import ScrollReveal from 'scrollreveal';

interface PropsElement {
  ref?: LegacyRef<HTMLDivElement>,

}

export default function SessionFirstPage() {
  const titleElement = useRef<HTMLParagraphElement>(null);
  // const [maxWidth,setMaxWidth]=useState<number>(window.);
  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'top',
      distance: '50px',
      duration: 1000,
      easing: 'ease-in-out',
      mobile: false
    });

    sr.reveal(titleElement?.current as any);

    return () => sr.destroy();
  }, []);
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
                  <div className="text-center text-2xl mb-8 text-white max-w-2xl cursor-pointer" ref={titleElement}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Labore molestias nihil voluptatibus nobis eligendi possimus
                    ea doloremque ipsa cupiditate, esse modi vitae ipsam{" "}
                    <strong> tempore</strong> eius officiis dolore aperiam
                    veniam!
                  </div>
                </div>
                <div className="flex box-timer space-x-4 relative z-50">
                  <FlipCountdown
                    hideYear
                    hideMonth
                    endAtZero
                    size='medium' // Options (Default: medium): large, medium, small, extra-small.
                    endAt={'2023-12-12 01:26:58'} // Date/Time
                  />
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
