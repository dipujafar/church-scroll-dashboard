import { Modal } from "antd";
import userImage from "@/assets/image/user.png";
import Image from "next/image";
import pdfImage from "@/assets/image/pdf.png";

type TPropsType = {
  open: boolean;
  setOpen: (collapsed: boolean) => void;
};
const UserModal = ({ open, setOpen }: TPropsType) => {
  const handleDownloadFile = () => {
    const link = document.createElement("a");
    link.href = "path/to/yourfile.pdf'";
    link.setAttribute("download", "yourfile.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <Modal centered footer={null} open={open} onCancel={() => setOpen(false)}>
      <div className="  rounded-md py-6 mt-8">
        <div className="flex justify-center items-center">
          <div className="relative w-[140px] h-[140px] ">
            <Image
              className="rounded-full border-4 border-white"
              src={userImage}
              alt="account image"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <h2 className=" text-2xl text-center  mt-3 font-bold">
          Nur Mohammad Opu
        </h2>
      </div>
      <div className=" space-y-3 px-6">
        <div>
          <p className=" text-lg font-semibold mb-1">Email</p>
          <p className=" text-lg mt-[-4px] bg-gray-200 py-1 rounded border-b border-black px-2">
            info@gmail.com
          </p>
        </div>
        <div>
          <p className=" text-lg font-semibold mb-1">Contact</p>
          <p className=" text-lg mt-[-4px] bg-gray-200 py-1 rounded border-b border-black px-2">
            08012345678
          </p>
        </div>
        <div>
          <p className=" text-lg font-semibold mb-1">User Type</p>
          <p className=" text-lg mt-[-4px] bg-gray-200 py-1 rounded border-b border-black px-2">
            User
          </p>
        </div>
        {/* this data will be shown base on  user type */}
        <div>
          <p className=" text-lg font-semibold mb-1">Church Name</p>
          <p className=" text-lg mt-[-4px] bg-gray-200 py-1 rounded border-b border-black px-2">
            Hope Community Church
          </p>
        </div>
        <div>
          <p className=" text-lg font-semibold mb-1">Subscription</p>
          <p className=" text-lg mt-[-4px] bg-gray-200 py-1 rounded border-b border-black px-2">
            Monthly
          </p>
        </div>
      </div>
    </Modal>
  );
};

export default UserModal;
