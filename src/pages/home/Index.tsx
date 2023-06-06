import { Button } from "antd";
import "./index.css";
import SessionFirstPage from "./SessionFirstPage.tsx";
import SessionSecondPage from "./SessionSecondPage.tsx";
import { BsHouseExclamation, BsCalendar2 } from 'react-icons/bs';
import { TbBus } from 'react-icons/tb'
import { useEffect, useRef, useState } from "react";
import ScrollReveal from "scrollreveal";


export default function Index() {
 
  const [choose, setChoose] = useState<number>(0);
  const firstPage = useRef<HTMLDivElement | null>(null);
  const secondPage = useRef<HTMLDivElement | null>(null);
  const menus = [
    {
      index: 0,
      icon: <BsHouseExclamation size={24} color="rgb(59,130,246)" />
    },
    {
      index: 1,
      icon: <TbBus size={24} color={choose!=1?"rgb(59,130,246)":'white'} />
    },
    {
      index: 2,
      icon: <BsCalendar2 size={24} color="rgb(59,130,246)" />
    }
  ];
  const handleClick = (index: number) => {
    setChoose(index);
    switch (index) {
      case 0:
        window.scrollTo({
          top: firstPage.current?.offsetTop,
          behavior: 'smooth'
        });
        break;
      case 1:
        window.scrollTo({
          top: secondPage.current?.offsetTop,
          behavior: 'smooth'
        });
        break;
      default:
        break;
    }

  }
  // useEffect(() => {
  //   const sr = ScrollReveal({
  //     container: document.querySelector('body'),
  //     delay: 200
  //   });

  //   sr.reveal(myElement.current as any, {
  //     duration: 1000,
  //     easing: 'ease-in-out',
  //     container: document.querySelector('body'),
  //     beforeReveal: () => {
  //       window.scrollTo({
  //         top: myElement.current?.offsetTop,
  //         behavior: 'smooth'
  //       });
  //     }
  //   });

  //   return () => sr.destroy();
  // }, []);
  return (
    <div className="w-full h-[100vh]">
      <div className="fixed z-10 right-4 top-[40%] rounded-full">
        <ul className="list pb-4">
          {
            menus.map((e, index) => <li key={index} onClick={() => handleClick(index)} className={`p-3 ${e.index == choose&& choose==1? "bg-blue-500 rounded" : ""} ${e.index == choose?'bg-white rounded':''}`}>{e.icon}</li>)
          }
        </ul>
      </div>

      <div className="first_page" ref={firstPage}>
        <SessionFirstPage />
      </div>
      <div className="second_page" ref={secondPage}>
        <SessionSecondPage />
      </div>

    </div>
  );
}
