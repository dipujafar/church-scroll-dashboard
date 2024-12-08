"use client";
import { Tabs, Upload, UploadFile } from "antd";
import Image from "next/image";

import EditProfileForm from "./EditProfileForm";
import ChangePasswordForm from "./ChangePasswordForm";
import { Camera } from "lucide-react";

const ProfileContainer = () => {
  return (
    <div className="py-8 rounded font-urbanist">
      <div className=" flex items-center justify-center h-[200px]">
        <div className="flex items-center gap-x-5">
          <div className="max-w-[112px] max-h-[112px] z-10 *:relative">
            <Image
              src={"/user3.jpg"}
              alt="user image"
              width={1200}
              height={1200}
              className="size-28 rounded-full "
            />
            <Upload
              listType="picture"
              maxCount={1}
              className="!w-[100px]"
              style={{ width: "100px", overflow: "hidden" }}
            >
              <div className="bg-white text-black text-lg p-1 rounded-full flex items-center justify-center -translate-y-8 translate-x-20 absolute top-0">
                <Camera size={16} />
              </div>
            </Upload>
          </div>

          <div className="text-black">
            <h2 className="font-bold text-2xl">Uzzal Bhowmik </h2>
            <p className="text-xl mt-1">Admin</p>
          </div>
        </div>
      </div>

      {/* forms */}
      <div className="w-1/2 mx-auto mt-10">
        <Tabs defaultActiveKey="1" centered>
          <Tabs.TabPane tab="Edit Profile" key="1" className="text-black">
            <EditProfileForm />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Change Password" key="2" className="text-black">
            <ChangePasswordForm />
          </Tabs.TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default ProfileContainer;
