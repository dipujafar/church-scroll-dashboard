"use client";
import { Button } from "antd";
import CreateSubscriptionModal from "./CreateSubscriptionModal";
import { useState } from "react";
import { Dot } from "lucide-react";
const packages = [
  {
    _id: 1,
    monthlyPlan: {
      duration: "monthly",
      price: 29,
    },
    yearlyPlan: {
      duration: "yearly",
      price: 299,
    },
    title: "Flexible Monthly Plan",
    description: "Small to medium-sized churches looking to grow.",
    memberLimit: "1-500",
  },
  {
    _id: 1,
    monthlyPlan: {
      duration: "monthly",
      price: 55,
    },
    yearlyPlan: {
      duration: "yearly",
      price: 549,
    },
    title: "Flexible Monthly Plan",
    description: "Growing churches that need advanced tools and reporting.",
    memberLimit: "1-1,000",
  },
];

const ManageSubscriptionContainer = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="w-[70%] mx-auto">
        <Button onClick={() => setOpen(true)} className="w-full py-5 ">
          Create subscription panel
        </Button>
      </div>
      <div className="mt-10 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3  gap-5 xl:w-[90%] mx-auto">
        {packages.map((data) => (
          <div className="flex flex-col justify-center items-center bg-[#ebf7ff] py-7 px-5 rounded-xl gap-y-3 text-center">
            <h1 className=" font-medium text-black/80">
              For {data?.memberLimit} Church Members
            </h1>

            {/* monthly plan */}
            <div>
              <h3 className="text-2xl font-semibold">
                ${data?.monthlyPlan?.price}/
                <span className="text-lg font-medium">monthly</span>
                <br />
              </h3>
              <p className="text-lg font-medium text-black">
                Flexible Monthly Plan
              </p>
            </div>

            <p className="text-xl font-medium text-black">or</p>

            <div>
              <h3 className="text-2xl font-semibold">
                ${data?.yearlyPlan?.price}/
                <span className="text-lg font-medium">yearly</span>
                <br />
              </h3>
              <p className="text-lg font-medium text-black">
                Flexible Yearly Plan
              </p>
            </div>

            <p className="max-w-sm text-black">{data?.description}</p>
            <div className="flex justify-center gap-x-3">
              <Button className="border-primary-blue text-primary-blue px-10 py-5">
                Edit
              </Button>
              <Button className="bg-transparent border-red-500 text-red-500 hover:bg-primary-blue/80 px-10 py-5">
                Delete
              </Button>
            </div>
          </div>
        ))}
        {/* custom plan */}
        <div className=" bg-[#ebf7ff] py-7 px-5 rounded-xl space-y-5 ">
          <h1 className=" text-xl font-medium text-black/80 text-center">
            For 1,001+ Church Members
          </h1>

          {/* features */}
          <ul className="min-h-[210px]">
            <li className=" text-lg  flex  text-gray-700 ">
              -Manage an unlimited number of members.
            </li>
            <li className=" text-lg  flex text-gray-700 text-start">
              -Full customization of the platform for your church's needs.
            </li>
            <li className="  flex  text-lg  text-gray-700  ">
              -FLarge churches that require a custom solution to manage
              extensive operations.
            </li>
          </ul>
        </div>
      </div>
      <CreateSubscriptionModal
        open={open}
        setOpen={setOpen}
      ></CreateSubscriptionModal>
    </div>
  );
};

export default ManageSubscriptionContainer;
