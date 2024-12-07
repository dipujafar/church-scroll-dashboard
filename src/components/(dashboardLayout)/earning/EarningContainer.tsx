"use client";
import { Image, Table, TableProps } from "antd";
import { useState } from "react";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { IoEyeOutline } from "react-icons/io5";
import EaringDetaisModal from "./EarningDetailsModal";
import { ArrowDownWideNarrowIcon } from "lucide-react";
import { StaticImageData } from "next/image";

const EarningContainer = () => {
  const [open, setOpen] = useState(false);
  type TDataType = {
    key: number;
    name: string;
    email: string;
    date: string;
    amount: string;
    contact: string;
    plan: string;
    image: StaticImageData | string;
  };
  const data: TDataType[] = Array.from({ length: 12 }).map((_, inx) => ({
    key: inx + 1,
    name: "Opu",
    email: "info@gmail.com",
    date: "11 oct 24, 11.10PM",
    amount: "$152",
    contact: "0123456789",
    plan: "Monthly",
    image: "/user.png",
  }));

  const columns: TableProps<TDataType>["columns"] = [
    {
      title: "Serial",
      dataIndex: "key",
      render: (value) => `#${value}`,
    },
    {
      title: "Name",
      dataIndex: "name",
      render: (value, record) => (
        <div className="flex gap-x-2 items-center">
          <Image
            src={record.image as string}
            alt="userImage"
            className="size-10 rounded-full"
          ></Image>
          <p className="font-medium">{value}</p>
        </div>
      ),
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Contact",
      dataIndex: "contact",
    },
    {
      title: "Pricing Plan",
      dataIndex: "plan",
      filters: [
        {
          text: "Monthly",
          value: "Monthly",
        },
        {
          text: "Yearly",
          value: "Yearly",
        },
      ],
      filterIcon: () => (
        <ArrowDownWideNarrowIcon
          color="#fff"
          className="flex justify-start items-start"
        />
      ),
      onFilter: (value, record) => record.plan.indexOf(value as string) === 0,
    },
    {
      title: "Date",
      dataIndex: "date",
    },
    {
      title: "Amount",
      dataIndex: "amount",
    },
    {
      title: "Action",
      dataIndex: "action",
      render: () => (
        <div className="ml-4">
          <IoEyeOutline
            className="cursor-pointer"
            size={20}
            onClick={() => setOpen(!open)}
          />
        </div>
      ),
    },
  ];

  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-y-3 items-center py-4 gap-x-10">
        <h1 className="text-2xl font-bold text-black">Earnings</h1>
        <>
          <div className="flex items-center gap-x-6 p-3 bg-primary-color rounded-lg text-white">
            <div className="flex items-center gap-x-3">
              <FaArrowRightArrowLeft size={20} color="white" />
              <p className="text-white">Today’s Earning</p>
            </div>
            <p className="font-semibold text-base"> $1520 </p>
          </div>
        </>
        <>
          <div className="flex items-center gap-x-3 p-3 bg-primary-color rounded-lg text-white">
            <FaArrowRightArrowLeft size={20} color="white" />
            <p className="text-white">Total Earning</p>
            <p className="font-semibold text-base"> $5520 </p>
          </div>
        </>
      </div>
      <Table
        columns={columns}
        dataSource={data}
        scroll={{ x: "max-content" }}
        pagination={{ pageSize: 10, responsive: true }}
      ></Table>
      <EaringDetaisModal open={open} setOpen={setOpen}></EaringDetaisModal>
    </div>
  );
};

export default EarningContainer;
