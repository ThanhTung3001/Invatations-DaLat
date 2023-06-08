import { Checkbox } from 'antd'

const items = [
    {
        name: "Áo đồng phục FTECH",
        id: 1
    },
    {
        name: "Áo dresscode",
        id: 2
    },
    {
        name: "Quần áo ấm",
        id: 3
    },
    {
        name: "Đồ dùng cá nhân",
        id: 4
    },
    {
        name: "Giày thể thao",
        id: 5
    },
    {
        name: "Điện thoại",
        id: 6
    },
    {
        name: "Các loại dây sạc ",
        id: 7
    },
    {
        name: "Kem chống nắng",
        id: 8
    },
    {
        name: "Giấy tờ tùy thân",
        id: 9
    },
    {
        name: "Money money",
        id: 10
    },
    {
        name: "Các loại thuốc cá nhân",
        id: 11
    },
    {
        name: "Snack ăn thêm",
        id: 12
    },
    {
        name: "Đồ skincare",
        id: 13
    },
    {
        name: "Mũ che nắng",
        id: 14
    },
    {
        name: "Máy ảnh",
        id: 15
    },
    {
        name: "Các đồ dùng cá nhân khác",
        id: 16
    }

]

export default function SessionCheckList() {
    return (
        <div className="custom-shape-divider-top-1685952780 h-100vh bg-transparent">
            <div className="w-full">

                <div className="container flex items-center justify-center flex-col h-[100vh]">
                    <p className="lg:text-6xl text-primary font-extrabold mb-1 animate__wobble text-4xl">
                        CHECKLIST
                    </p>

                    <p className="lg:text-2xl font-thin text-gray-600 sm:text-xl">COMPANY TRIP</p>
                    <div className="flex justify-center lg:px-32" >
                        <p > Chào mừng các bạn FTECHers Đà Nẵng đã đến với Đà Lạt nheee!
                            Với tin thần làm nhiệt tình, chơi hết mình, Company Trip 2023 tại FTECH mong muốn sẽ mang lại những cảm xúc trọn vẹn và vui vẻ nhất đến với tất cả các thành viên FTECHers Đà Nẵng. Bên cạnh đó, chuyến đi Đà Lạt lần này còn là hành trình của sự gắn kết và thấu hiểu, giúp tái tạo năng lượng sau thời gian làm việc hăng say, thổi bùng lên ngọn lửa nhiệt huyết chinh phục những thử thách phía trước.
                            Chúc các bạn FTECHers Đà Nẵng sẽ có một chuyến đi thật nhiều an toàn và nhiều niềm vuiii.</p>
                    </div>
                    <div className="flex w-full flex-wrap">
                        {
                            items.map((e) => {
                                return (
                                    <div key={e.id} className='item-check lg:w-1/6 sm:w-1/3 w-1/2 flex mt-2'>
                                        <Checkbox className='text-start' >{e.name}</Checkbox>
                                    </div>)
                            })
                        }

                    </div>

                </div>
            </div>
        </div>
    )
}
