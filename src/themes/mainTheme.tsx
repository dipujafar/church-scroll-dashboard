import { ThemeConfig } from "antd";

const mainTheme: ThemeConfig = {
  token: {
    colorPrimary: "#33B1FC",
    colorInfo: "#33B1FC",
  },
  components: {
    Layout: {
      siderBg: "#ebf7ff",
      headerColor: "rgb(35,35,35)",
      bodyBg: "#F8FAFC",
      algorithm: true,
      lightTriggerBg: "rgb(87,88,88)",
      lightSiderBg: "rgb(35,35,35)",
      triggerColor: "rgb(35,35,35)",
    },
    Menu: {
      colorPrimaryBorder: "#232323",
      algorithm: true,
      itemColor: "rgb(248,250,252)",
      itemBg: "",
      itemBorderRadius: 4,
      itemHoverColor: "rgb(35,35,35)",
      itemHoverBg: "rgb(248,250,252)",
      itemActiveBg: "rgb(248,250,252)",
      itemSelectedBg: "rgb(255,255,255)",
      itemSelectedColor: "rgb(0,0,0)",
    },
    Button: {
      colorBgContainer: "#F8FAFC",
      colorText: "#232323",
      colorPrimaryHover: "#520E0D",
      contentFontSize: 16,
      borderRadius: 8,
    },
    Segmented: {
      itemActiveBg: "rgb(253,0,0)",
      itemHoverBg: "rgba(157,154,154,0.94)",
      itemColor: "rgb(0,0,0)",
      itemHoverColor: "rgb(255,255,255)",
      itemSelectedBg: "rgb(234,83,38)",
      itemSelectedColor: "rgba(255,255,255,0.88)",
      trackBg: "rgba(245,245,245,0)",
      colorText: "rgb(255,255,255)",
      borderRadius: 8,
      controlHeight: 42,
    },
    Popconfirm: {
      colorWarning: "rgb(245,34,45)",
    },
    Table: {
      colorBgContainer: "#fff",
      colorText: "#000",
      colorTextHeading: "#000",
      headerBg: "#C0E7FE",
      headerSplitColor: "#C0E7FE",
      borderColor: "#575858",
    },
    Input: {
      colorBorder: "#fff",
      colorBgContainer: "#efecec",
    },
    Form: {
      labelFontSize: 16,
      labelColor: "rgb(248,250,252)",
    },
    Tabs: {
      colorText: "rgb(248,250,252)",
      itemSelectedColor: "#3D2424",
    },
    Select: {
      colorBorder: "rgb(0,0,0)",
      colorTextDisabled: "rgb(0,0,0)",
    },
    Spin: {
      colorPrimary: "#232323",
    },
    DatePicker: {
      colorBgElevated: "#F8FAFC",
      colorBgContainer: "#EB2926",
      // colorText: "rgba(255,255,255,0.88)",
      colorTextDisabled: "rgba(255,253,253,0.7)",
      // colorTextHeading: "rgba(255,255,255,0.88)",
      colorIconHover: "rgba(247,225,225,0.88)",
      // colorIcon: "rgba(255,255,255,0.8)",
      colorTextPlaceholder: "rgba(255,255,255,0.8)",
    },
    InputNumber: {
      colorTextDisabled: "rgba(0,0,0,0.8)",
    },
    Progress: {
      defaultColor: "rgb(230,19,22)",
      remainingColor: "rgba(255,255,255,0.99)",
      colorText: "rgba(255,255,255,0.88)",
    },
    Checkbox: {
      colorText: "#33b1fc",
      colorPrimary: "#33b1fc",
    },
    Upload: {
      colorText: "#fff",
    },
  },
};

export default mainTheme;
