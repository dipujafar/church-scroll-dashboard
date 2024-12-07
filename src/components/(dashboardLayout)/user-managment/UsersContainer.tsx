"use client";
import {
  Image,
  Input,
  message,
  Popconfirm,
  PopconfirmProps,
  Table,
  TableProps,
} from "antd";
import { IoIosSearch } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import { LiaUserTimesSolid } from "react-icons/lia";
import UserModal from "./UserModal";
import { useState } from "react";
import { ArrowDownWideNarrowIcon } from "lucide-react";
import { StaticImageData } from "next/image";

const confirm: PopconfirmProps["onConfirm"] = (e) => {
  message.success("Successfully blocked this user");
};

const UserManagementContainer = () => {
  const [open, setOpen] = useState(false);

  type TDataType = {
    key: number;
    name: string;
    email: string;
    date: string;
    accountType: string;
    image: StaticImageData | string;
    contact: string;
  };
  const data: TDataType[] = Array.from({ length: 50 }).map((_, inx) => ({
    key: inx + 1,
    name: "Opu",
    email: "info@gmail.com",
    date: "11 oct 24, 11.10PM",
    accountType: "User",
    image: "/user.png",
    contact: "0123456789",
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
      title: "Date",
      dataIndex: "date",
    },
    {
      title: "Account Type",
      dataIndex: "accountType",

      filters: [
        {
          text: "User",
          value: "user",
        },
        {
          text: "Church Admin",
          value: "church-admin",
        },
        {
          text: "Church Member",
          value: "church-member",
        },
      ],
      filterIcon: () => (
        <ArrowDownWideNarrowIcon
          color="#fff"
          className="flex justify-start items-start"
        />
      ),
      onFilter: (value, record) =>
        record.accountType.indexOf(value as string) === 0,
    },
    {
      title: "Action",
      dataIndex: "action",
      render: () => (
        <div className="ml-4 flex gap-x-3">
          <IoEyeOutline
            className="cursor-pointer"
            size={20}
            onClick={() => setOpen(true)}
          />
          <Popconfirm
            title="Block the User"
            description="Are you sure to block this user?"
            onConfirm={confirm}
            okText="Yes"
            cancelText="No"
          >
            <LiaUserTimesSolid
              className="cursor-pointer"
              size={20}
              color="red"
            />
          </Popconfirm>
        </div>
      ),
    },
  ];

  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-y-2 items-center justify-between py-4">
        <h1 className="text-2xl font-bold w-full text-black">Accounts</h1>
        <Input
          type="search"
          size="large"
          placeholder="Search..."
          prefix={<IoIosSearch size={20} />}
          className="max-w-md  py-2"
        />
      </div>
      <Table
        columns={columns}
        dataSource={data}
        style={{ overflowX: "auto" }}
        scroll={{ x: "max-content" }}
        pagination={{ pageSize: 10, responsive: true }}
      ></Table>
      <UserModal open={open} setOpen={setOpen}></UserModal>
    </div>
  );
};

export default UserManagementContainer;
