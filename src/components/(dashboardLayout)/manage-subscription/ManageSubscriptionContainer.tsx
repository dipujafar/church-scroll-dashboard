"use client";
import { Button } from "antd";
import CreateSubscriptionModal from "./CreateSubscriptionModal";
import { useState } from "react";

const ManageSubscriptionContainer = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="w-[70%] mx-auto">
        <Button onClick={() => setOpen(true)} className="w-full py-5 ">
          Create subscription panel
        </Button>
      </div>
      <div className=" bg-[#ebf7ff] py-10 px-8 rounded-xl gap-y-5 xl:space-y-10 space-y-5 xl:w-[70%] mx-auto mt-5">
        <h1 className="md:text-4xl text-2xl font-semibold capitalize">
          Monthly
        </h1>
        <p className="text-lg">
          Church admins who need short-term access or want to try out
          ChurchScroll's features without a long-term commitment.
        </p>

        <div className="flex justify-between items-center">
          <h2 className="md:text-4xl text-2xl font-semibold ">$29/month</h2>
          <div className="flex gap-x-2 items-center">
            <Button
              onClick={() => setOpen(true)}
              className="bg-primary-blue  hover:bg-primary-blue/80 px-10 py-4"
            >
              Edit
            </Button>
            <Button
              danger
              className="bg-transparent  hover:bg-primary-blue/80 px-10 py-4"
            >
              Delete
            </Button>
          </div>
        </div>
      </div>
      <div className=" bg-[#ebf7ff] py-10 px-8 rounded-xl gap-y-5 xl:space-y-10 space-y-5 xl:w-[70%] mx-auto mt-5">
        <h1 className="md:text-4xl text-2xl font-semibold capitalize">
          Yearly
        </h1>
        <p className="text-lg">
          Church admins who want year-round access to all key ChurchScroll
          features and save with an annual commitment.
        </p>

        <div className="flex justify-between items-center">
          <h2 className="md:text-4xl text-2xl font-semibold">$299/year</h2>
          <div className="flex gap-x-2 items-center">
            <Button
              onClick={() => setOpen(true)}
              className="bg-primary-blue  hover:bg-primary-blue/80 px-10 py-4"
            >
              Edit
            </Button>
            <Button
              danger
              className="bg-transparent  hover:bg-primary-blue/80 px-10 py-4"
            >
              Delete
            </Button>
          </div>
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
