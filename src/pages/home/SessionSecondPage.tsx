import { Slider } from "antd";
import { useEffect, useState } from "react";
import "./index.css";

export default function SessionSecondPage() {
  const [range, setRange] = useState<number>(0);

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
        {/* <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg> */}
        <div className="container flex items-center justify-center flex-col h-[100vh]">
          <p className="text-6xl text-primary font-extrabold mb-1">
            INVITATION
          </p>
          <p className="text-2xl font-thin text-gray-600 ">COMPANY TRIP</p>
          <div className="flex justify-center w-full items-center mt-8">
            <div className="from-place mr-8">
              <p className="text-3xl">Đà Nẵng</p>
            </div>
            <div className="w-[60%]">
              <Slider range value={[0, range]} disabled />
            </div>
            <div className="to-place  ml-8">
              <p className="text-3xl">Đà Lạt</p>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-2 mt-8">
            <div className="place-center">
              <div className="title-main flex justify-start flex-col items-start">
                <h3 className="text-xl font-bold">Địa điểm tập trung:</h3>
                <p className="card-content text-start">
                  Công ty FTECH sô 3 Lê Đình Lý, phường Vĩnh Trung, quận Thanh
                  Khê, TP Đà Nẵng
                </p>
              </div>
            </div>
            <div className="place-center">
              <div className="title-main flex justify-start flex-col items-start">
                <h3 className="text-xl font-bold">Thời gian khởi hành:</h3>
                <p className="card-content text-start">15/06/2023 18h00</p>
              </div>
            </div>
            <div className="place-center">
              <div className="title-main flex justify-start flex-col items-start">
                <h3 className="text-xl font-bold">Liên hệ hỗ trợ: </h3>
                <p className="card-content text-start">
                  - Đặng Hoàng Như Nguyện - 0384316186 <br />- Lê Hồ Lộc An -
                  0776912567
                </p>
              </div>
            </div>
            <div className="place-center">
              <div className="title-main flex justify-start flex-col items-start">
                <h3 className="text-xl font-bold">Địa điểm tập trung:</h3>
                <p className="card-content text-start">
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
