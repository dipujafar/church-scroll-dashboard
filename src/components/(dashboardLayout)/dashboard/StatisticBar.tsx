import Image from "next/image";
import userIcon from "@/assets/Icons/user.png";
import churchIcon from "@/assets/Icons/churchUser.png";
import memberIcon from "@/assets/Icons/totalUser.png";
import earingIcon from "@/assets/Icons/dollar.png";

const StatisticBar = () => {
  return (
    <div className="flex flex-wrap  flex-col lg:flex-row gap-y-2 gap-x-2 justify-between  font-roboto text-black">
      {/* total user */}
      <div className=" flex-1 py-5   rounded-xl flex 2xl:gap-x-6 gap-x-2 px-4 2xl:px-8 items-center border">
        <div className="bg-[#303060] 2xl:p-4 p-2 rounded-2xl">
          <Image
            src={userIcon}
            alt="user"
            width={40}
            height={40}
            className="2xl:size-10 size-6"
          />
        </div>
        <div className="flex flex-col ">
          <p className="truncate 2xl:text-xl text-base">Total User</p>
          <h4 className="xl:text-4xl text-2xl font-medium text-[#303060]">
            518
          </h4>
        </div>
      </div>
      {/* total church */}
      <div className="flex-1 py-5   rounded-xl flex 2xl:gap-x-6 gap-x-2 px-4 2xl:px-8 items-center border">
        <div className="bg-[#303060] 2xl:p-4 p-2 rounded-2xl">
          <Image
            src={churchIcon}
            alt="user"
            width={40}
            height={40}
            className="2xl:size-10 size-6"
          />
        </div>
        <div className="flex flex-col ">
          <p className="truncate 2xl:text-xl text-base ">Total Churches</p>
          <h4 className="xl:text-4xl text-2xl font-medium text-[#303060]">
            118
          </h4>
        </div>
      </div>
      {/* total members */}
      <div className="flex-1 py-5  rounded-xl flex 2xl:gap-x-6 gap-x-2 px-4 2xl:px-8 items-center border">
        <div className="bg-[#303060] 2xl:p-4 p-2 rounded-2xl">
          <Image
            src={memberIcon}
            alt="user"
            width={40}
            height={40}
            className="2xl:size-10 size-6"
          />
        </div>
        <div className="flex flex-col ">
          <p className="truncate 2xl:text-xl text-base">Total Members</p>
          <h4 className="xl:text-4xl text-2xl font-medium text-[#303060]">
            72
          </h4>
        </div>
      </div>
      {/* total members */}
      <div className=" flex-1 py-5   rounded-xl flex 2xl:gap-x-6 gap-x-2 px-4 2xl:px-8 items-center border">
        <div className="bg-[#303060] 2xl:p-4 p-2 rounded-2xl">
          <Image
            src={earingIcon}
            alt="user"
            width={40}
            height={40}
            className="2xl:size-10 size-6"
          />
        </div>
        <div className="flex flex-col ">
          <p className="truncate 2xl:text-xl text-base">Total Earning</p>
          <h4 className="xl:text-4xl text-2xl font-medium text-[#303060]">
            $1500
          </h4>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default StatisticBar;
