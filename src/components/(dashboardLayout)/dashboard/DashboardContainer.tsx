import EaringOverviewChart from "./EaringOverviewChart";
import PageViewChart from "./PageViewChart";
import StatisticBar from "./StatisticBar";
import UserOverViewChart from "./UserOverViewChart";

const DashboardContainer = () => {
  return (
    <div className="space-y-7">
      <StatisticBar></StatisticBar>
      <UserOverViewChart></UserOverViewChart>
      <div className="flex flex-col xl:flex-row xl:gap-x-8 gap-x-4 gap-y-5">
        <EaringOverviewChart></EaringOverviewChart>
        <PageViewChart></PageViewChart>
      </div>
    </div>
  );
};

export default DashboardContainer;
