import ManageSubscriptionContainer from "@/components/(dashboardLayout)/manage-subscription/ManageSubscriptionContainer";
import { Divider } from "antd";
import React from "react";

const ManageSubscriptionPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold w-full mb-2">Manage Subscription</h1>
      <Divider></Divider>
      <ManageSubscriptionContainer></ManageSubscriptionContainer>
    </div>
  );
};

export default ManageSubscriptionPage;
