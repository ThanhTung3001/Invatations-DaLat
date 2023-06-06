import { Slider } from "antd";
import { useEffect, useRef, useState } from "react";
import "./index.css";
import 'animate.css';
import ScrollReveal from 'scrollreveal';
import BusIcon from "../../components/icons/Bus";
import { motion } from 'framer-motion';


export default function SessionSecondPage() {
  const [range, setRange] = useState<number>(0);
  const titleElement = useRef<HTMLParagraphElement>(null);
  const descriptionElement = useRef<HTMLParagraphElement>(null);
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

  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'bottom',
      distance: '50px',
      duration: 1000,
      easing: 'ease-in-out',
      mobile: false
    });

    sr.reveal(descriptionElement?.current as any);

    return () => sr.destroy();
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setRange((prevValue) => {
        if (prevValue === 100) {
          clearInterval(interval);
          return prevValue;
        } else {
          return prevValue + 1;
        }
      });
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, [range]);
  return (
    <div className="custom-shape-divider-top-1685952780 h-100vh">
      <div className="w-full">

        <div className="container flex items-center justify-center flex-col h-[100vh]">
          <p ref={titleElement} className="text-6xl text-primary font-extrabold mb-1 animate__wobble">
            INVITATION
          </p>

          <p className="text-2xl font-thin text-gray-600" ref={descriptionElement}>COMPANY TRIP</p>
          <div className="flex justify-center w-full items-center mt-8">
            <div className="from-place mr-4">
              <p className="text-3xl mb-0 font-bold">Đà Nẵng</p>
            </div>
            <div className="w-[60%]">
              <motion.div initial={{ x: 0 }} animate={{ x: 300 }} transition={{
                duration: 4,
                
              }}>
                <BusIcon />
              </motion.div>
              <Slider style={{ margin: 4, marginTop: -4 }} range value={[0, 100]} disabled />
            </div>
            <div className="to-place ml-4">
              <p className="text-3xl text-center mb-0 font-bold">Đà Lạt</p>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4 mt-8">
            <div className="place-center">
              <div className="title-main flex justify-start flex-col items-start">
                <h3 className="text-xl font-bold">Địa điểm tập trung:</h3>
                <p className="card-content text-start text-sm">
                  Công ty FTECH sô 3 Lê Đình Lý, phường Vĩnh Trung, quận Thanh
                  Khê, TP Đà Nẵng
                </p>
              </div>
            </div>
            <div className="place-center">
              <div className="title-main flex justify-start flex-col items-start">
                <h3 className="text-xl font-bold">Thời gian khởi hành:</h3>
                <p className="card-content text-start text-sm">15/06/2023 18h00</p>
              </div>
            </div>
            <div className="place-center">
              <div className="title-main flex justify-start flex-col items-start">
                <h3 className="text-xl font-bold">Liên hệ hỗ trợ: </h3>
                <p className="card-content text-start text-sm">
                  - Đặng Hoàng Như Nguyện - 0384316186 <br />- Lê Hồ Lộc An -
                  0776912567
                </p>
              </div>
            </div>
            <div className="place-center">
              <div className="title-main flex justify-start flex-col items-start">
                <h3 className="text-xl font-bold">Địa điểm tập trung:</h3>
                <p className="card-content text-start text-sm">
                  Công ty FTECH sô 3 Lê Đình Lý, phường Vĩnh Trung, quận Thanh
                  Khê, TP Đà Nẵng
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
// Đà Nẵng


