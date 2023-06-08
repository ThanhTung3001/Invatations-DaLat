import { Button } from 'antd';
import './index.css';

import { BsMenuButton } from 'react-icons/bs'
import { useState } from 'react';
import CustomModal from '../../components/Modal/CustomModal';


const firstDay = [
  {
    time: "6h00",
    content: "Đến Đà Lạt"
  }, {
    time: "8h00 - 11h00",
    content: "Tham quan SamtenHills"
  }, {
    time: "12h00 - 13h00",
    content: "Lẩu buffet rau LEGUDA"
  }, {
    time: "13h00 - 15h00",
    content: "Check-in tại khách sạn"
  }, {
    time: "15h00 - 18h00",
    content: "Tham quan Chùa Phước Linh và vườn hoa Cẩm tú cầu"
  }, {
    time: "18h00 - 20h00",
    content: "Ăn tối"
  }, {
    time: "20h00",
    content: "Hoạt động tự do"
  },
];
const secondDay = [
  {
    time: "7h30",
    content: "Thức dậy và ăn uống nạp năng lượng"
  }, {
    time: "9h30 - 11h00",
    content: "Team Building"
  }, {
    time: "11h30 - 14h30",
    content: "Ăn trưa nghỉ ngơi chill tại Đà Lạt"
  }, {
    time: "15h00 - 17h00",
    content: "Thác Datanla"
  }, {
    time: "18h30 - 21h30",
    content: "Gala Dinner - Tham gia giao lưu cồng chiêng với đồng bào K'ho"
  }, {
    time: "21h30",
    content: "Hoạt động tự do"
  },
];

const thirdDay = [
  {
    time: "07h30",
    content: "Thức dậy và ăn uống nạp năng lượng"
  }, {
    time: "8h00 - 11h00",
    content: "Tự do tham quan, vui chơi mua sắm"
  }, {
    time: "11h00 - 12h00",
    content: "Trả phòng và ăn uống"
  }, {
    time: "15h00",
    content: "Khởi hành về Đà Nẵng"
  }, {
    time: "18h30",
    content: "Dùng cơm tối và nghỉ đêm"
  },
];
export default function SessionCalendar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [datePopup, setDatePopup] = useState(firstDay);

  const showModal = (value: number) => {
    switch (value) {
      case 1:
        setDatePopup(firstDay as []);
        break;
      case 2:
        setDatePopup(secondDay as []);
        break;

      case 3:
        setDatePopup(thirdDay as []);
        break;
      default:
        break;
    }
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className="bg-img w-full h-[100vh]">
        <CustomModal open={isModalOpen} onOk={handleOk} onCancel={handleCancel} children={
          <>
            <ul className='container p-0'>
              {
                datePopup.map((e) =>
                  <li className="flex">
                    <p className="timer w-1/3 text-primary text-lg font-bold">
                      {e.time}
                    </p>
                    <p className="timer w-2/3 text-primary text-lg font-medium">
                      {e.content}
                    </p>
                  </li>)
              }
            </ul>
          </>
        } zIndex={100} title={<h3 className='font-bold text-2xl text-primary'>Lịch trình</h3>} />

        <div className="w-full  flex items-center">
          <div className="w-10/12 md:w-7/12 lg:6/12 mx-auto relative">
            <h1 className="lg:text-8xl text-center font-bold text-white md:text-6xl text-2xl lg:py-20 pt-12">
              Timeline
            </h1>
            <div className="border-l-2 mt-10" >
              <div onClick={() => showModal(1)} className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-blue-500 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                <div className="w-5 h-5 bg-blue-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                <div className="w-10 h-1 bg-blue-300 absolute -left-10 z-0"></div>

                <div className="flex-auto">
                  <h1 className="text-lg text-white">Ngày 1</h1>
                  <h1 className="text-xl font-bold text-white">
                    Lên đường đến Đà Lạt thôiii
                  </h1>
                  <h3 className="text-white">16/08</h3>
                </div>
                <div className="hidden">
                  <Button icon={<BsMenuButton color="white" size={24} />} type='text' />
                </div>
              </div>

              <div onClick={() => showModal(2)} className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-primary text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                <div className="w-5 h-5 bg-pink-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                <div className="w-10 h-1 bg-pink-300 absolute -left-10 z-0"></div>

                <div className="flex-auto">
                  <h1 className="text-lg text-white">Ngày 2</h1>
                  <h1 className="text-xl font-bold text-white">
                    Trải nghiệm cực vui cùng teambuilding
                  </h1>
                  <h3 className="text-gray-300">17/08 </h3>
                </div>
                <div className="hidden">
                  <Button icon={<BsMenuButton color="white" size={24} />} type='text' />
                </div>
              </div>

              <div onClick={() => showModal(3)} className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-green-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                <div className="w-5 h-5 bg-green-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                <div className="w-10 h-1 bg-green-300 absolute -left-10 z-0"></div>

                <div className="flex-auto">
                  <h1 className="text-lg text-white">Ngày 3</h1>
                  <h1 className="text-xl font-bold text-white">
                    Chilling tại Đà Lạt
                  </h1>
                  <h3 className="text-white">18/08</h3>
                </div>
                <div className="hidden">
                  <Button icon={<BsMenuButton color="white" size={24} />} type='text' />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div></>

  );
}
