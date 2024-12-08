"use client";
import { Button, Form, FormProps, Input, InputNumber, Modal } from "antd";
import TextArea from "antd/es/input/TextArea";
import { Dispatch, SetStateAction } from "react";

const CreateSubscriptionModal = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  type FieldType = {
    subscriptionName?: string;
    duration?: string;
    description?: string;
    price?: string;
  };

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
  };

  return (
    <Modal
      open={open}
      footer={null}
      centered={true}
      onCancel={() => setOpen(false)}
    >
      <Form
        layout="vertical"
        onFinish={onFinish}
        initialValues={{
          subscriptionName: "",
          duration: "",
          description: "",
          price: "",
        }}
      >
        <Form.Item<FieldType>
          label="Subscription Name"
          name="subscriptionName"
          rules={[
            { required: true, message: "Please input subscription name!" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Duration"
          name="duration"
          rules={[
            {
              required: true,
              message: "Please input subscription duration!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item<FieldType>
          label="Description"
          name="description"
          rules={[
            {
              required: true,
              message: "Please input subscription description!",
            },
          ]}
        >
          <TextArea autoSize={{ minRows: 3, maxRows: 10 }} />
        </Form.Item>

        <Form.Item<FieldType>
          label="Price"
          name="price"
          rules={[
            {
              required: true,
              message: "Please input subscription price!",
            },
          ]}
        >
          <InputNumber min={1} className="w-full bg-[#efecec]" />
        </Form.Item>

        <Form.Item label={null}>
          <Button className="w-full py-5">Create</Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CreateSubscriptionModal;
