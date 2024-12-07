"use client";
import { ConfigProvider } from "antd";
import { Form, Input, Button } from "antd";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";

const EditProfileForm = () => {
  const [phone, setPhone] = useState("");
  // @ts-expect-error: Ignoring TypeScript error due to inferred 'any' type for 'values' which is handled in the form submit logic
  const onFinishEditProfile = (values) => {
    console.log("Edit Profile values:", values);
  };

  return (
    <Form
      layout="vertical"
      onFinish={onFinishEditProfile}
      initialValues={{
        userName: "Akash Sharif",
        email: "akash@gmail.com",
        mobile: "99007007007",
      }}
    >
      <Form.Item label="User Name" name="userName">
        <Input size="large" />
      </Form.Item>

      <Form.Item label="Email" name="email">
        <Input size="large" />
      </Form.Item>

      <Form.Item name="mobile" label="Contact no">
        <PhoneInput
          country={"bd"}
          specialLabel=""
          value={phone}
          onChange={setPhone}
          inputClass="bg-[#efecec] text-black border border-[#fff] py-2 px-4  w-full rounded-md"
        />
      </Form.Item>

      <Form.Item>
        <Button htmlType="submit" block size="large">
          Save Changes
        </Button>
      </Form.Item>
    </Form>
  );
};

export default EditProfileForm;
