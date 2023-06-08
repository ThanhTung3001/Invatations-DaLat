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
    <div className="custom-shape-divider-top-1685952780 h-100vh bg-transparent">
      <div className="w-full">

        <div className="container flex items-center justify-center flex-col h-[100vh]">
          <p ref={titleElement} className="lg:text-6xl text-primary font-extrabold mb-1 animate__wobble text-4xl">
            INVITATION
          </p>

          <p className="lg:text-2xl font-thin text-gray-600 sm:text-xl" ref={descriptionElement}>COMPANY TRIP</p>
          <div className="flex justify-center lg:px-32" ref={titleElement}>
            <p > Chào mừng các bạn FTECHers Đà Nẵng đã đến với Đà Lạt nheee!
              Với tin thần làm nhiệt tình, chơi hết mình, Company Trip 2023 tại FTECH mong muốn sẽ mang lại những cảm xúc trọn vẹn và vui vẻ nhất đến với tất cả các thành viên FTECHers Đà Nẵng. Bên cạnh đó, chuyến đi Đà Lạt lần này còn là hành trình của sự gắn kết và thấu hiểu, giúp tái tạo năng lượng sau thời gian làm việc hăng say, thổi bùng lên ngọn lửa nhiệt huyết chinh phục những thử thách phía trước.
              Chúc các bạn FTECHers Đà Nẵng sẽ có một chuyến đi thật nhiều an toàn và nhiều niềm vuiii.</p>
          </div>
          <div className="flex justify-center w-full items-center mt-8">
            <div className="from-place mr-4">
              <p className="lg:text-3xl text-center mb-0 font-bold text-base">Đà Nẵng</p>
            </div>
            <div className="w-full">
              <motion.div initial={{ x: 0 }} animate={{ x: 50 }} transition={{
                duration: 2,

              }}>
                <BusIcon />
              </motion.div>
              <Slider style={{ margin: 4, marginTop: -4 }} range value={[0, 100]} disabled />
            </div>
            <div className="to-place ml-4">
              <p className="lg:text-3xl text-center mb-0 font-bold text-base">Đà Lạt</p>
            </div>
          </div>
          <div className="flex justify-center mt-8 flex-wrap lg:12">
            <div className="place-center lg:w-1/3 w-full">
              <div className="title-main flex justify-start flex-col items-start">
                <h3 className="lg:text-2xl font-bold text-lg m-0 text-center">Địa điểm tập trung:</h3>
                <p className="card-content text-start text-sm">
                  Công ty FTECH<br /> Sô 3 Lê Đình Lý, phường Vĩnh Trung, quận Thanh
                  Khê, TP Đà Nẵng
                </p>
              </div>
            </div>
            <div className="place-center  lg:w-1/3 w-full">
              <div className="title-main flex justify-start flex-col items-start">
                <h3 className="lg:text-2xl font-bold text-lg m-0 text-center">Liên hệ hỗ trợ: </h3>
                <p className="card-content text-start text-sm">
                  Đặng Hoàng Như Nguyện - 0384316186 <br /> Lê Hồ Lộc An -
                  0776912567
                </p>
              </div>
            </div>
            <div className="place-center lg:w-1/3 w-full">
              <div className="title-main flex justify-start flex-col items-start">
                <h3 className="lg:text-2xl font-bold text-lg m-0 text-center">Thời gian khởi hành:</h3>
                <p className="card-content text-start text-sm">15/06/2023<br />  18h00</p>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
}
// Đà Nẵng


